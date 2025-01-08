import { reactive } from 'vue'
import type { searchParam } from './index'
import { defHttp } from '@/utils/http/axios'

enum Api {
  weatherDataDataExport = '/weather/data/dataExport',
  getWeatherData = '/weather/data/getWeatherData',
}

export const getWeatherDataDataExport = (params: searchParam) => {
  return defHttp.post(
    { url: Api.weatherDataDataExport, params },
    { joinTime: false, isTransformResponse: false }
  )
}

export const getWeather = (params: searchParam) => {
  return defHttp.get(
    { url: Api.getWeatherData, params },
    { joinTime: false, isTransformResponse: false }
  )
}
