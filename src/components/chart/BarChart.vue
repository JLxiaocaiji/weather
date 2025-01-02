<template>
  <div ref="bar"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const bar = ref<HTMLDivElement | null>(null)

// 柱状图的宽度，y是x的一半
const offsetX = 10
const offsetY = 5

// 左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    console.log('shape')
    console.log(shape)
    // shape是从custom传入的
    const xAxisPoint = shape.api.coord([shape.xValue, 0])
    console.log(xAxisPoint)
    const c0 = [shape.x, shape.y]
    const c1 = [shape.x - offsetX, shape.y - offsetY]
    const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
    const c3 = [xAxisPoint[0], xAxisPoint[1]]
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath()
  }
})

// 右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.api.coord([shape.xValue, 0])
    const c1 = [shape.x, shape.y]
    const c2 = [xAxisPoint[0], xAxisPoint[1]]
    const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
    const c4 = [shape.x + offsetX, shape.y - offsetY]
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath()
  }
})

// 顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y]
    const c2 = [shape.x + offsetX, shape.y - offsetY] // 右点
    const c3 = [shape.x, shape.y - offsetX]
    const c4 = [shape.x - offsetX, shape.y - offsetY]
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath()
  }
})

// 底面
const CubeBottom = echarts.graphic.extendShape({
  shape: {
    x: 10,
    y: 10
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c1 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
    const c2 = [xAxisPoint[0], xAxisPoint[1]] // 右点
    const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
    const c4 = [xAxisPoint[0], xAxisPoint[1] - offsetX]
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath()
  }
})

// 注册图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
// echarts.graphic.registerShape('CubeBottom', CubeBottom)

const renderItem = (params, api) => {
  // params.seriesIndex表示本系列 index
  const index = params.seriesIndex
  // api.coord() 坐标转换计算
  // api.value() 取出当前项中的数值
  let location = api.coord([api.value(0) + index, api.value(1)])
  // api.size() 坐标系数值范围对应的长度
  var extent = api.size([0, api.value(1)])

  return {
    type: 'group',
    children: [
      {
        type: 'CubeLeft',
        shape: {
          api,
          xValue: api.value(0) + index,
          yValue: api.value(1),
          x: location[0],
          y: location[1]
        },
        style: api.style()
      },
      {
        type: 'CubeRight',
        shape: {
          api,
          xValue: api.value(0) + index,
          yValue: api.value(1),
          x: location[0],
          y: location[1]
        },
        style: api.style()
      },
      {
        type: 'CubeTop',
        shape: {
          api,
          xValue: api.value(0) + index,
          yValue: api.value(1),
          x: location[0],
          y: location[1]
        },
        style: api.style()
      }
    ]
  }
}

const dataX = [
  '22：04：41',
  '22：04：42',
  '22：04：43',
  '22：04：44',
  '22：04：45',
  '22：04：46',
  '22：04：47',
  '22：04：48',
  '22：04：49',
  '22：04：50'
]

const barXData = Array.from({ length: 10 }, (value, i) => i + 1)
const barYData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 25))

const props = defineProps({
  data: { type: Object, default: () => {} }
})

onMounted(() => {
  initChart()
})

const initChart = () => {
  let chart = echarts.init(bar.value)

  chart.setOption({
    // 图例组件
    // legend: { ...(props.data?.legend || {}) },
    // 提示框
    tooltip: {
      trigger: 'axis'
    },
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //        type: 'shadow',
    //     },
    //     formatter: function (params) {
    //        const item = params[1];
    //        return `${item.name}:${item.value }人`;
    //     },
    //  },
    // 工具栏
    toolbox: {},
    // x 轴
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        inside: false,
        // rotate: 45,
        color: '#77a0c8'
      },
      data: barXData
      // ...props.data.xAxis
    },
    yAxis: {
      // ...props.data.yAxis
    },
    // series: [...props.data.series]
    series: [
      {
        type: 'custom',
        renderItem: function (params, api) {
          return renderItem(params, api)
        },
        data: barYData,
        itemStyle: {
          color: () => {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(26, 132, 191, 1)' },
              { offset: 1, color: 'rgba(52, 163, 224, 0.08)' }
            ])
          }
        }
      }
    ]
  })
}

watch(
  () => props.data,
  () => {
    props.data &&
      nextTick(() => {
        initChart()
      })
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 200px;
}
</style>
