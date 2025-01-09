<template>
  <div class="header">
    <div class="header-left">
      <div class="react-left">logo</div>
    </div>
    <div class="header-center">智慧气象数据采集系统</div>
    <div class="header-right">
      <span class="react-right1">设备监控</span>
      <span class="react-right2">
        <span>{{ curTime?.year()}}</span>年
        <span>{{ curTime?.month() + 1 }}</span>月
        <span>{{ curTime?.date() }}</span>日
        <span>{{ curTime?.hour() }}</span>时
        <span>{{ curTime?.minute() }}</span>分
        <span>{{ curTime?.second() }}</span>秒
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup name="header">
import { ref, onMounted, onUnmounted } from 'vue';
import dayjs, { type Dayjs } from 'dayjs';

const curTime = ref<Dayjs>(null)
const updateTime = () => {
  curTime.value = dayjs();
}
let timer: any = null;
onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped>
.bg(@direct) {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a2a57;
    z-index: -1;
    @transform: if(@direct = 'left', skewX(45deg), skewX(-45deg));
    transform: @transform;
  }
}

.header {
  display: grid;
  grid-template-columns: 1fr 38% 1fr;
  width: 100%;

  &-left {
    .react-left {
      float: right;
      width: 30%;
      position: relative;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      margin-top: 30px;
      font-size: 14px;
      .bg("left");
    }
  }

  &-center {
    width: 100%;
    text-align: center;
    color: #abdcff;
    font-weight: 700;
    color: linear-gradient(0deg, rgba(122, 200, 255, 0.7), hsla(0, 0%, 100%, 0.7));
  }

  &-right {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    .react-right1 {
      position: relative;
      width: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      height: 45px;
      margin-top: 30px;
      font-size: 14px;
      .bg("right");
    }
    .react-right2 {
      position: relative;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      height: 45px;
      margin-top: 30px;
      font-size: 14px;
      .bg("right");
    }
  }
}
</style>
