<template>
   <div ref="gauge" class="gauge"></div>
</template>


<script lang='ts' setup>
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { debounce } from "@/utils/index.tsx"

const gauge = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null;

onMounted(() => {
  initChart()
})

const initChart = () => {
  let chart = echarts.init(gauge.value)

  const sunriseTime = 6; // 日出时间 6:00
  const sunsetTime = 18; // 日落时间 18:00

  // 假设当前时间是 12:00
  const currentTime = 12;

  // 将时间差转换为0到100之间的百分比
  const sunriseProgress = Math.max(0, Math.min(100, ((currentTime - sunriseTime) / (sunsetTime - sunriseTime)) * 100));
  const sunsetProgress = Math.max(0, Math.min(100, ((sunsetTime - currentTime) / (sunsetTime - sunriseTime)) * 100));

  chart.setOption({
    series: [
      {
        name: '日出日落进度',
        type: 'gauge',
        center: ['50%', '85%'],
        startAngle: 180,
        endAngle: 0,
        radius: '90%',
        min: sunriseTime,
        max: sunsetTime,
        splitNumber: 12,
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [sunriseProgress / 100, '#FFA500'],
              [sunsetProgress / 100, '#FF4500'],
              [1, '#E0E0E0']
            ]
          }
        },
        axisTick: {
          // 刻度线与轴线之间的距离，负数表示向轴线内侧偏移，单位通常为像素
          distance: -20,
          // 刻度线的分割数量
          splitNumber: 5,
          lineStyle: {
              width: 2,
              color: '#999'
          }
        },
        splitLine: {
          // 分割线（刻度之间的辅助线）与轴线之间的距离，同样向内侧偏移，单位为像素
          distance: -35,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -30,
          color: '#999',
          fontSize: 20,
          formatter: '{value} 时',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        pointer: {
          show: false,
        },
        data: [{
          value: currentTime, 
          detail: {
            valueAnimation: true,
            width: '20%',
            offsetCenter: [0, '-0%'],
            formatter: '当前时间: {value} 时',
            fontSize: 16,
            color: '#fff',
          }, 
          // title: {
          //   show: true,
          //   offsetCenter: ['-200%', '0%'],
          //   fontSize: 16,
          //   color: '#fff',
          // }
        }],
      }
    ]
  })

  chart.setOption({
    graphic: [
      {
        type: 'text',
        left: '2%',
        bottom: '12%',
        style: {
          text: `日出时间:${sunriseTime} 时 `,
          fontSize: 12,
          fill: '#fff'
        }
      },
      {
        type: 'text',
        right: '2%',
        bottom: '12%',
        style: {
          text: `日落时间:${sunsetTime} 时`,
          fontSize: 12,
          fill: '#fff'
        }
      }
    ]
  })
}

const props = defineProps({
  data: { type: Object, default: () => {} }
})

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

const resizeDebounce = debounce(() => {
  if (chart) {
    chart.resize();
  }
}, 200);

onBeforeUnmount(() => {
  if (chart) {
    chart.dispose();
  }
  window.removeEventListener('resize', resizeDebounce);
});
</script>


<style lang='less' scoped>
.gauge {
  width: 100%;
  height: 200px;
}
</style>