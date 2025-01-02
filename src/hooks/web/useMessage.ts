import { Modal, message as Message, notification } from 'ant-design-vue'
import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal'
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue'
import { h } from 'vue'
import { useI18n } from './useI18n'
import { isString } from '@/utils/index'

export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
  iconType: 'warning' | 'success' | 'error' | 'info'
}
export type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>

export function useMessage() {
  return {
    createMessage: Message,
    createErrorModal
  }
}

function createErrorModal(options: ModalOptionsPartial) {
  return Modal.error(createModalOptions(options, 'close'))
}

function getIcon(iconType: string) {
  try {
    if (iconType === 'warning') {
      return h(InfoCircleFilled, { class: 'modal-icon-warning' })
    } else if (iconType === 'success') {
      return h(CheckCircleFilled, { class: 'modal-icon-success' })
    } else if (iconType === 'info') {
      return h(InfoCircleFilled, { class: 'modal-icon-info' })
    } else {
      return h(CloseCircleFilled, { class: 'modal-icon-error' })
    }
  } catch (e) {
    console.log(e)
  }
}

function createModalOptions(options: ModalOptionsPartial, icon: string): ModalOptionsPartial {
  //update-begin-author:taoyan date:2023-1-10 for: 可以自定义图标
  let titleIcon: any = ''
  if (options.icon) {
    titleIcon = options.icon
  } else {
    titleIcon = getIcon(icon)
  }
  //update-end-author:taoyan date:2023-1-10 for: 可以自定义图标
  return {
    ...getBaseOptions(),
    ...options,
    content: renderContent(options),
    icon: titleIcon
  }
}

const getBaseOptions = () => {
  const { t } = useI18n()
  return {
    okText: t('common.okText'),
    centered: true
  }
}

function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
  try {
    if (isString(content)) {
      return h('div', h('div', { innerHTML: content as string }))
    } else {
      return content
    }
  } catch (e) {
    console.log(e)
    return content
  }
}
