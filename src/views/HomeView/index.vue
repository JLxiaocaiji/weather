<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <a-layout class="app">
      <a-layout-header class="h"> <Header /></a-layout-header>

      <a-layout-content class="c">
        <router-view v-slot="{ Component, route }">
          <keep-alive include="homepage">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header/index.vue'
</script>

<style lang="less" scoped>
.app {
  background: url('@/assets/images/bg.jpg') 0 0 / 100% 100% no-repeat;
}

.h {
  background: url('@/assets/images/hbg1.png') 0 0 / 100% 100% no-repeat;

  background-size: 100%;
  background-position: 50%;
  height: 85px;
  line-height: 85px;
  position: relative;
  z-index: 999;
  // display: -webkit-box;
  // display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  // justify-content: space-between;
  color: #fff;
  font-size: 22px;
  // padding: 0 20px;
}

.c {
  height: calc(100vh - 85px);
  // background: url('@/assets/images/bg.jpg') no-repeat center center;
  background-size: cover;
}
</style>
