import { reactive } from 'vue'
import type { SearchParam } from './index'
import { defHttp } from '@/utils/http/axios'

enum Api {
  weatherDataDataExport = '/weather/data/dataExport',
  getWeatherData = '/weather/data/getWeatherData',
}

export const getWeather = (params: SearchParam) => {
  return defHttp.get(
    { url: Api.getWeatherData, params },
    { joinTime: false, isTransformResponse: false},
  )
}

export const getWeatherDataDataExport = (params: SearchParam, fileName?: string) => {
  return defHttp.downloadFile("POST",
    { url: Api.weatherDataDataExport, params },
    { joinTime: false, isTransformResponse: false, joinParamsToUrl: true  },
    fileName
  )
}
