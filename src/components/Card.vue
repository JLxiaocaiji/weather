<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <a-card :tab-list="tabList">
      <template #title v-if="data"
        ><span class="data">{{ data }}</span></template
      >
      <slot style="width: 100%
      "/>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: String
  data?: String
  tabList?: any
}>()
</script>

<style lang="less" scoped>
.title {
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.ant-card {
  width: 100%;
  min-height: 250px;
  padding: 4px;
  overflow: hidden;
  background: url('@/assets/images/cardBg.png') 0 0 / 100% 100% no-repeat;
  // cursor: pointer;
  border-radius: 4px;

  :deep(&-head-title) {
    text-align: center;
  }

  .data {
    background: linear-gradient(0deg, rgba(122, 200, 255, 0.7), hsla(0, 0%, 100%, 0.7));
    color: #abdcff;
    text-align: center;
    // 延申到 text
    -webkit-background-clip: text;
    // 渐变
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  :deep(&-head) {
    border-bottom: unset;
    height: 50px;
    & > .ant-tabs > .ant-tabs-nav {
      margin-bottom: -10px;
      height: 35px;
      .ant-tabs-nav-wrap {
        width: 100%;
        .ant-tabs-nav-list {
          width: 100%;
          justify-content: space-around;
          color: #fff;
        }
      }
    }

    &-wrapper {
      height: 25px;
    }
  }

  :deep(&-body) {
    padding: unset;
    margin: auto;
    width: 100%;
  }

  a {
    color: #4cadf1;
    float: right;
    margin-right: 29px;
    margin-top: 5px;
    font-size: 14px;
  }

  :deep(.ant-select-selector) {
    background: transparent;
    border: 1px solid transparent;
  }

  // 多项横纵分割
  .device-stat {
    display: grid;
    grid-template-columns: 190px 190px;
    grid-template-rows: 90px 90px;
  }
}
</style>
