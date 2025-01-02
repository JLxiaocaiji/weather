<template>
  <div ref="pie"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect, watch, nextTick } from 'vue'
import * as echarts from 'echarts'

const pie = ref<HTMLDivElement | null>()

const chart = ref()

const props = defineProps({
  data: { type: Object, default: () => {} }
})

const initChart = () => {
  let chart = echarts.init(pie.value)
  // chart.value.setOption({
  chart.setOption({
    legend: {
      orient: 'horizontal',
      bottom: '10%',
      fontSize: 20,
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        name: '近30天火警处置情况',
        type: 'pie',
        radius: '50%',
        ...props.data
      }
    ]
  })
}

onMounted(() => {
  // chart.value = echarts.init(pie.value)
  initChart()
})

watch(
  () => props.data,
  () => {
    props.data &&
      nextTick(() => {
        initChart()
      })
    props.data && console.log(1111)
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 250px;
}
</style>
