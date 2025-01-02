import { reactive } from 'vue'
import type { searchParam } from './index'
import { defHttp } from '@/utils/http/axios'

enum Api {
  dustRemovalDeviceData = '/'
}

export const getDustRemovalDeviceData = () => {
  return defHttp.get(
    { url: Api.dustRemovalDeviceData },
    { joinTime: false, isTransformResponse: false }
  )
}
