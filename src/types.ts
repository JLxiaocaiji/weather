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
