import { reactive } from 'vue'
import type { HeaderItem } from '@/types'

export const list1 = reactive<HeaderItem[]>([
  { label: '首页', value: '1', url: '/homepage' },
  { label: '智慧除尘', value: '2', url: '' },
  { label: '智慧输灰', value: '3', url: '' },
  { label: '调控方案', value: '4', url: '' },
  { label: '安全预警', value: '5', url: '' }
])
export const list2 = reactive<HeaderItem[]>([
  { label: '数据分析', value: '1', url: '' },
  { label: '协同控制', value: '2', url: '/bigScreen/fireAlarm' },
  { label: '数据查询', value: '3', url: '' },
  { label: '参数预警', value: '4', url: '' },
  { label: '返回', value: '5', url: '' }
])

export { default as HeaderBottom } from './HeaderBottom.vue'
