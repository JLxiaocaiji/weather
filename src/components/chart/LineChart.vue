<template>
  <div ref="line" class="line"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { debounce } from "@/utils/index.tsx"

const line = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null;

const props = defineProps({
  data: { type: Object, default: () => {} }
})

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeDebounce);
})

const initChart = () => {
  chart = echarts.init(line.value)

  chart.setOption({
    // 图例组件
    // legend: { ...(props.data?.legend || {}) },
    // 提示框
    tooltip: {
      trigger: 'axis'
    },
    // 工具栏
    toolbox: {},
    // x 轴
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        inside: false,
        // rotate: 45,
        // color: '#77a0c8'
        color: '#fff'
      },
      ...props.data.xAxis
    },
    yAxis: {
      axisLabel: {
        color: '#fff'
      },

      ...props.data.yAxis
    },
    series: [...props.data.series]
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

const resizeDebounce = debounce(() => {
  if (chart) {
    console.log(1111)
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

<style lang="less" scoped>
.line {
  width: 100%;
  height: 200px;
}
</style>
