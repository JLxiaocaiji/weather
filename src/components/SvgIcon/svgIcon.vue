<template>
  <svg :style="{ width, height }" :class="['svg-icon', className]">
    <!-- xlink:href 是使用哪个svg的图标 fill是更改图标的颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  // xlink:href的属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 需要使用的svg的图标的名字
  name: {
    type: String,
    required: true,
  },
  // 需要使用的svg的图标的颜色
  color: {
    type: String,
    default: '#333',
  },
  // 需要使用的svg的图标的宽度
  width: {
    type: String,
    default: '60%',
  },
  // 需要使用的svg的图标的高度
  height: {
    type: String,
    default: '60%',
  },
  className: {
    type: String,
    default: '',
  },
})
</script>
<style scoped>
.svg-icon {
  /* vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden; */
}
</style>