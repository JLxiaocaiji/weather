import { reactive } from 'vue'
import type { HeaderDataType } from '@/types'
import dayjs, { Dayjs } from 'dayjs';

export const list: HeaderDataType[] = reactive([
  {
    img: '/src/assets/images/tag/unit.png',
    describe: '原烟气烟尘',
    num: 219,
    detail: 'test1'
  },
  {
    img: '/src/assets/images/tag/device.png',
    describe: '净烟气烟尘',
    num: 61341,
    detail: 'test2'
  },
  {
    img: '/src/assets/images/tag/video.png',
    describe: '原烟气SO2',
    num: 373,
    detail: 'test3'
  },
  {
    img: '/src/assets/images/tag/xiaofangshuan.png',
    describe: '净烟气SO2',
    num: 822,
    detail: 'test4'
  },
  {
    img: '/src/assets/images/tag/huojing.png',
    describe: '原烟气NOX',
    num: 0,
    detail: 'test5'
  },
  {
    img: '/src/assets/images/tag/huojing.png',
    describe: '净烟气NOX',
    num: 0,
    detail: 'test5'
  }
])
export const list1: HeaderDataType[] = reactive([
  {
    img: '/src/assets/images/tag1/device.png',
    describe: '机组负荷(MW)',
    num: 219,
    detail: '313.19'
  },
  {
    img: '/src/assets/images/tag1/device1.png',
    describe: '总风量(t/h)',
    num: 61341,
    detail: '1483.08'
  },
  {
    img: '/src/assets/images/tag1/device2.png',
    describe: '脱硫效率(%)',
    num: 373,
    detail: '98.87'
  }
])

export const scheme: { describe: string; status: string }[] = [
  { describe: '负荷联动', status: '已切除' },
  { describe: '反电量', status: '已切除' },
  { describe: '分层分级', status: '已切除' },
  { describe: '比电阻', status: '已切除' },
  { describe: '二次扬尘', status: '已切除' },
  { describe: '智能管理', status: '已切除' },
  { describe: '故障诊断', status: '已切除' }
]

export interface SearchParam {
  beginTime?: string // 开始时间
  endTime?: string // 结束时间
  cityCode?: string // 炉号
}

export interface FormStateParams {
  province?: string,
  city?: string,
  time?: [Dayjs, Dayjs]
}
