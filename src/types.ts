export interface HeaderDataType {
  img?: string
  describe?: string
  num?: number
  detail?: Record<string, string | number | undefined>[]
}

export interface HeaderItem {
  label: string
  value: string
  url: string
}

export type Province = {
  code: string
  name: string
  url: string
}

export type LoginForm = {
  username: string,
  password: string,
}

export type WeatherDetail = {
  air_forecast_time?: string
  air_forecast_text?: string
  air_forecast_aqi?: string
  weather_update_time?: string
  city?: string
  city_code?: string
  province?: string
  sun_rise?: string
  sun_set?: string
  feelst?: string
  humidity?: string
  temperature?: string
  info?: string
  direct?: string
  power?: string
  speed?: string | number
  t_y_max?: string
  t_y_min?: string
  y_time?: string
  create_time?: string
}
