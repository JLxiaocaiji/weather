import { defineAsyncComponent } from 'vue'
import type { Component } from 'vue'

import { Spin } from 'ant-design-vue'
import { setImmediate } from 'timers/promises'

interface Options {
  size?: 'default' | 'small' | 'large'
  delay?: number
  timeout?: number
  loading?: boolean
  retry?: boolean
}

export function createAsyncComponent(loader: () => Promise<Component>, options: Options = {}) {
  const { size = 'small', delay = 100, timeout = 30000, loading = false, retry = true } = options

  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,
    timeout,
    onError: !retry
      ? () => {}
      : (error, retry, fail, attempts) => {
          console.log('error')
          console.log(error)
          // 检查错误信息（error.message）是否包含 “fetch” 这个词
          // 尝试次数（attempts）是否小于或等于 3
          if (error.message.match(/fetch/) && attempts <= 3) {
            retry()
          } else {
            fail()
          }
        }
  })
}

export const debounce = (
  fn: (...args: any[]) => void,
  delay: number,
  immediate: boolean = false
) => {
  let timeout: NodeJS.Timeout | null
  return function (this: any, ...args: any[]) {
    const context = this
    const isImmediate = immediate && !timeout
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) {
        fn.apply(context, args)
      }
    }, delay)

    if (isImmediate) {
      fn.apply(context, args)
    }
  }
}

export const isFunction = (val: unknown) => {
  return typeof val === 'function'
}

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}
