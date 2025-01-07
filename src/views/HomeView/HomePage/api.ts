import { reactive } from 'vue'
import type { searchParam } from './index'
import { defHttp } from '@/utils/http/axios'

enum Api {
  dustRemovalDeviceData = '/',
  weatherDataDataExport = '/weather/data/dataExport'
}

export const getDustRemovalDeviceData = () => {
  return defHttp.get(
    { url: Api.dustRemovalDeviceData },
    { joinTime: false, isTransformResponse: false }
  )
}

export const getWeatherDataDataExport = (params: searchParam) => {
  return defHttp.post(
    { url: Api.weatherDataDataExport, params },
    { joinTime: false, isTransformResponse: false }
  )
}
