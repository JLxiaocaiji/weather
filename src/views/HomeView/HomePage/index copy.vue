<template>
  <div class="chart">
    <div class="chart-left">
      <Card title="参数监测">
        <div
          style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            place-items: center;
            place-content: center;
            margin-top: 30px;
          "
        >
          <Tag1 v-for="item in list1" :key="item.describe" :profile="item" />
        </div>
      </Card>
      <Card title="调控方案">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; place-items: center">
          <div v-for="item in scheme" :key="item.describe" class="scheme">
            <div>{{ item.describe }}</div>
            <div>{{ item.status }}</div>
          </div>
        </div>
      </Card>
      <Card title="报警记录" :tab-list="tabList">
        <dv-scroll-board
          :config="config"
          style="width: 100%; height: 170px; margin: 10px 1px 0px 5px; padding: 1px 10px 0 0"
        />
      </Card>
    </div>
    <div class="chart-middle">
      <div class="profile"><Tag v-for="item in list" :key="item.describe" :profile="item" /></div>
      <div class="declare"><span>实时曲线</span></div>
      <div class="detail-chart">
        <Card title="原烟气烟尘" data="simulatedData"><LineChart :data="lineData" /> </Card>
        <Card title="净烟气烟尘" data="simulatedData"><LineChart :data="lineData" /></Card>
        <Card title="原烟气SO2浓度" data="simulatedData"><LineChart :data="lineData" /></Card>
        <Card title="净烟气SO2浓度" data="simulatedData"><LineChart :data="lineData" /></Card>
        <Card title="原烟气NOx浓度" data="simulatedData"><LineChart :data="lineData" /></Card>
        <Card title="净烟气NOx浓度" data="simulatedData"><LineChart :data="lineData" /></Card>
        <Card title="原烟气CO浓度" data="simulatedData"><LineChart :data="lineData" /></Card>
        <Card title="净烟气CO浓度" data="simulatedData"><LineChart :data="lineData" /></Card>
      </div>
    </div>
    <!-- <div class="chart-right">
      <Card title="除尘健康状态-高压">
        <PieChart :data="pieChartData" />
      </Card>
      <Card title="除尘健康状态-低压">
        <PieChart :data="pieChartData" />
      </Card>
      <Card title="粉尘比电阻">
        <BarChart />
      </Card>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import Tag from '@/components/Tag.vue'
import Tag1 from '@/components/Tag1.vue'
import { list, list1, scheme } from './index'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { reactive, onMounted } from 'vue'
import LineChart from '@/components/chart/LineChart.vue'
import PieChart from '@/components/chart/PieChart.vue'
import BarChart from '@/components/chart/BarChart.vue'
import { getDustRemovalDeviceData } from './api'

const tabList = [
  {
    key: 'tab1',
    tab: '发生时间'
  },
  {
    key: 'tab2',
    tab: '报警设备'
  }
]
const config = {
  data: [
    ['单位1', '80'],
    ['单位2', '80'],
    ['单位3', '80'],
    ['单位4', '80'],
    ['单位5', '80'],
    ['单位6', '80'],
    ['单位7', '81'],
    ['单位8', '81'],
    ['单位9', '81'],
    ['单位10', '81'],
    ['单位11', '81']
  ],
  // index: true,
  // columnWidth: [200, 200],
  align: ['center', 'center'],
  rowNum: 7,
  waitTime: 100000,
  oddRowBGC: '#84b2d8',
  evenRowBGC: '#919EA8'
}

const lineData: EChartsOption = reactive({
  // legend: {
  //   data: ['simulatedData'],
  //   right: '10%',
  //   textStyle: {
  //     color: '#fff'
  //   }
  // },

  xAxis: {
    // data: ['08-09', '08-10', '08-11', '08-12', '08-13', '08-14', '08-15', '08-16', '08-17', '08-18']
    data: Array.from({ length: 10 }, (val, i) => i)
  },
  yAxis: { min: 0, max: 35 },

  series: [
    {
      name: 'simulatedData',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 2,
        color: 'RGBA(74, 155, 254, 1)'
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'RGBA(74, 155, 254, 1)'
              },
              {
                offset: 1,
                color: 'RGBA(74, 155, 254, 0.2)'
              }
            ],
            false
          ),
          shadowColor: 'RGBA(74, 155, 254, 0.2)',
          shadowBlur: 20
        }
      },
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 25)),
      itemStyle: { color: 'RGBA(74, 155, 254, 1)' }
    }
  ]
})

const pieChartData = reactive({
  data: [
    { value: 20, name: '运行', itemStyle: { color: 'rgb(84, 216, 135)' } },
    { value: 30, name: '停止', itemStyle: { color: 'rgb(148, 218, 250)' } },
    { value: 30, name: '报警', itemStyle: { color: '#51b7ff' } }
  ]
})

// const barData = reactive({
//   xAxis: {
//     // data: ['08-09', '08-10', '08-11', '08-12', '08-13', '08-14', '08-15', '08-16', '08-17', '08-18']
//     data: Array.from({ length: 10 }, (val, i) => i)
//   },
//   yAxis: { min: 0, max: 35 },

//   series: [
//     {
//       name: '',
//       type: 'custom',
//       smooth: true,
//       lineStyle: {
//         width: 2,
//         color: 'RGBA(74, 155, 254, 1)'
//       },
//       xAxis: {
//         type: 'category',
//         data: ['星期一', '星期一', '星期一', '星期一', '星期一'],
//         axisLine: {
//             show: false,
//         },
//         offset: 10,

//         axisTick: {
//             show: false,
//         },
//         axisLabel: {
//             show: true,
//             color: '#fff',
//             fontSize: 16,
//             align: 'left'
//         },
//     },
//     yAxis: {
//         min: 0,
//         max: 100,
//         interval: 20,
//         type: 'value',
//         axisLine: {
//             show: true,
//             lineStyle: {
//                 color: 'rgba(255, 255, 255, .16)'
//             }
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 type: "dashed",
//                 color: 'rgba(255, 255, 255, .16)'
//             },
//         },
//         axisTick: {
//             show: false,

//         },
//         axisLabel: {
//             show: true,
//             fontSize: 16,
//             color: '#fff'

//         },
//     },

//     }
//   ]
// })


onMounted(() => {
  // getDustRemovalDeviceData().then((res) => {
  //   console.log(res)
  // })
})
</script>

<style lang="less" scoped>
.chart {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr auto 1fr;
  grid-auto-rows: 1fr 200px;
  grid-template-areas:
    'chart-left chart-middle chart-right'
    'chart-left chart-middle chart-right';
}

// .chart {
//   display: flex;

//   &-left {
//     flex: 1;

//     .scheme {
//       width: 120px;
//       height: 120px;
//       display: grid;
//       grid-template-rows: 40px 40px;
//       margin: 15px 0 10px;
//       background: url('@/assets/images/circle1.png') 0 0 / 100% 100% no-repeat;

//       div:first-child {
//         font-size: 18px;
//         margin-top: 40px;
//         text-align: center;
//         color: #abdcff;
//       }
//       div:last-child {
//         font-size: 12px;
//         text-align: center;
//         margin-top: 30px;
//         color: #fff;
//       }
//     }
//   }
//   &-middle {
//     flex: 2;
//     margin: 0 10px 0;

//     .profile {
//       display: flex;
//       justify-content: space-around;
//       margin: 10px 0 10px;
//     }
//     .declare {
//       // background: url('@/assets/images/hbg2.png');
//       color: #fff;
//       text-align: center;
//       font-size: 22px;
//       background: linear-gradient(0deg, rgba(122, 200, 255, 0.7), hsla(0, 0%, 100%, 0.7));
//       color: #abdcff;
//       // 延申到 text
//       -webkit-background-clip: text;
//       // 渐变
//       -webkit-text-fill-color: transparent;
//       font-weight: 900;
//     }
//     .detail-chart {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 10px;
//     }
//   }
//   &-right {
//     flex: 1;
//   }
// }
</style>
