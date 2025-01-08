<template>
  <div class="chart">
    <dv-border-box-10 class="c-left">
      <a-tree
        class="tree"
        v-model:selectedKeys="selectedKeys"
        :tree-data="treeData"
        show-icon
        default-expand-all
        @select="onSelect"
      >
        <template #title="{ key, title }">
          <a-button size="small" v-if="key == selectedKeys[0]" style="background: #0d4f0e; color: #2c9b3a"
            >在线</a-button
          >
          <template v-else-if="key == '0'"></template>
          <a-button size="small" v-else style="background: gray; color: #fff">离线</a-button>
          <span>{{ '' }} {{ title }}</span>
        </template>
      </a-tree>
    </dv-border-box-10>

    <dv-border-box-10 class="c-center">
      <div class="c-c">
        <div class="c-c-detail">
          <div class="temperature">
            <span>
              <span class="value">25</span>
              <SvgIcon name="temperature" color="#ffffff" width="25px" height="25px" />
            </span>
            <span class="label">实时气温</span>
          </div>
          <div class="weather-text">
            <span>
              <span class="value">晴</span>
              <SvgIcon
                name="position"
                color="#fff"
                width="20px"
                height="20px"
                className="svg-animation"
              ></SvgIcon>
            </span>

            <span class="label">天气</span>
          </div>
          <div class="update-time">
            <span class="value">2025.01.01</span>
            <span class="value">00:00:00</span>
            <span class="label">更新时间</span>
          </div>
          <div class="air-quality">
            <span class="value">优</span>
            <span class="label">空气质量</span>
          </div>
          <div class="aqi">
            <span class="value">良</span>
            <span class="label">空气污染指数</span>
          </div>
          <div class="sensible-temperature">
            <span
              ><span class="value">23</span
              ><SvgIcon name="temperature" color="#ffffff" width="25px" height="25px"
            /></span>
            <span class="label">体感温度</span>
          </div>
          <div class="relative-humidity">
            <span class="value">18%</span>
            <span class="label">相对湿度</span>
          </div>

          <div class="wind">
            <span>西南风</span>
            <span>微风</span>
            <span>风速：1.8</span>
          </div>
          <div class="y">
            <span>昨天：2024-12-31</span><span>最高气温：23°</span><span>最低气温：13°</span>
          </div>
          <!-- <div>
            <span>日出时间：07：00</span>
            <span>日落时间：19：00</span>
          </div> -->
          <div><span></span><span></span></div>
          <div><span></span><span></span></div>

          <!-- 'i9999':{label:'',color:'#e74936'},
          'i4':{label:'很热，极不适应',color:'#e74936'},
          'i3':{label:'热，很不舒适',color:'#f57f1f'},
          'i2':{label:'暖，不舒适',color:'#FF9900'},
          'i1':{label:'温暖，较舒适',color:'#00a44f'},
          'i0':{label:'舒适，最可接受',color:'#53aaae'},
          'i-1':{label:'凉爽，较舒适',color:'#0079c3'},
          'i-2':{label:'凉，不舒适',color:'#2c459c'},
          'i-3':{label:'冷，很不舒适',color:'#754783'},
          'i-4':{label:'很冷，极不适应',color:'#9b479b'}, -->

          <!-- '优',		ccolor:'#d9fed7',color:'#32f43e',tcolor:'#000',	   health:'空气质量令人满意,基本无空气污染。',											suggestion:'各类人群可正常活动。',background:'background-position:0 -22px',border:'#6ec129'};
          '良 ',		ccolor:'#f7f9cd',color:'#e4f33e',tcolor:'#000',  health:'空气质量可接受,但某些污染物可能<br/>对极少数异常,敏感人群健康有较弱影响。',	suggestion:'极少数异常敏感人群应减少户外活动。',background:'background-position:-41px -22px',border:'#e0cf22'};
          '轻度污染 ',	ccolor:'#fcebd7',color:'#e19535',tcolor:'#000', health:'易感人群症状有轻度加剧,健康人群<br/>出现刺激症状。',							suggestion:'儿童、老年人及心脏病、呼吸系统疾<br/>病患者应减少长时间、高强度的户<br/>外锻炼。',background:'background-position:-82px -22px',border:'#fd5b30'};
          '中度污染',	ccolor:'#f8d7d9',color:'#ec0800',tcolor:'#fff', health:'进一步加剧易感人群症状,可能对健<br/>康人群心脏、呼吸系统有影响。',			suggestion:'儿童、老年人及心脏病、呼吸系统疾<br/>病患者避免长时间、高强度的户外<br/>锻炼,一般人群适量减少户外运动。',background:'background-position:0 -48px',border:'#e10724'};
          '重度污染',	ccolor:'#ebd7e3',color:'#950449',tcolor:'#fff', health:'心脏病和肺病患者症状显著加剧,运<br/>动耐受力减低,健康人群普遍出现症状。',		suggestion:'老年人和心脏病、肺病患者应停留在<br/>室内，停止户外活动，一般人群减<br/>少户外活动。',background:'background-position:-41px -48px',border:'#8f0c50'};
          '严重污染',	ccolor:'#e7d7dd',color:'#7b001f',tcolor:'#fff', health:'健康人运动耐力减低,有显著强烈症<br/>状,提前出现某些疾病。',					suggestion:'老年人和病人应当留在室内，避免体<br/>力消耗，一般人群应避免户外活动。',background:'background-position:-82px -48px',border:'#410468'}; -->
        </div>

        <!-- <div class="c-c-chart"><Pie /></div> -->
        <div class="c-c-chart">
          <GaugeChart />
          <!-- <div>
            <span class="title"></span>
            <span v-if=" =='i9999'"></span>
            <span v-if=" =='i4'">很热，极不适应。</span>
            <span v-if=" =='i3'">热，很不舒适。</span>
            <span v-if=" =='i2'">暖，不舒适。</span>
            <span v-if=" =='i1'">温暖，较舒适。</span>
            <span v-if=" =='i0'">舒适，最可接受。</span>
            <span v-if=" =='i-1'">凉爽，较舒适。</span>
            <span v-if=" =='i-2'">凉，不舒适。</span>
            <span v-if=" =='i-3'">冷，很不舒适。</span>
            <span v-if=" =='i-4'">很冷，极不适应。</span>
            <span v-else></span>
          </div> -->

          <!-- <div>
            <span class="title">空气状况</span>
            <span v-if=" =='优'">空气质量令人满意,基本无空气污染。</span>
            <span v-if=" =='良'">空气质量可接受,但某些污染物可能对极少数异常,敏感人群健康有较弱影响。</span>
            <span v-if=" =='轻度污染'">易感人群症状有轻度加剧,健康人群出现刺激症状。</span>
            <span v-if=" =='中度污染'">进一步加剧易感人群症状,可能对健康人群心脏、呼吸系统有影响。</span>
            <span v-if=" =='重度污染'">心脏病和肺病患者症状显著加剧,运动耐受力减低,健康人群普遍出现症状。</span>
            <span v-else>健康人运动耐力减低,有显著强烈症状,提前出现某些疾病。</span>
          </div> -->

          <div>
            <!-- <span class="title"></span>
            <span v-if=" =='优'">各类人群可正常活动。</span>
            <span v-if=" =='良'">极少数异常敏感人群应减少户外活动。</span>
            <span v-if=" =='轻度污染'">儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼。</span>
            <span v-if=" =='中度污染'">儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼,一般人群适量减少户外运动。</span>
            <span v-if=" =='重度污染'">老年人和心脏病、肺病患者应停留在室内，停止户外活动，一般人群减少户外活动。</span>
            <span v-else>老年人和病人应当留在室内，避免体力消耗，一般人群应避免户外活动。</span> -->
          </div>
        </div>
      </div>
    </dv-border-box-10>

    <dv-border-box-10 class="c-right">
      <a-row
        style="
          padding: 10px 10px;
          size: 10px;
          width: 100%;
          height: 60px;
          justify-content: space-between;
          align-items: center;
        "
      >
        <SvgIcon
          name="position"
          color="#fff"
          width="20px"
          height="20px"
          className="svg-animation"
        ></SvgIcon>
        <a-space class="position"
          >{{ formState2?.province }} {{ '  ' }} {{ formState2.city?.split(',')[0] }}</a-space
        >
      </a-row>
      <a-form
        ref="formRef2"
        class="form"
        layout="inline"
        :model="formState2"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
      >
        <a-row style="width: 100%;">
          <a-col :span="12">
            <a-form-item name="province" label="省" required>
              <a-select
                v-model:value="formState2.province"
                :options="provinces"
                placeholder="请选择省级区域"
                allowClear
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="city" label="市 " required>
              <a-select
                v-model:value="formState2.city"
                :options="cities"
                placeholder="请选择市/县级区域"
                allowClear
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row style="width: 100%;">
          <a-col :span="20">
            <a-form-item name="time" label="时间范围" required>
              <a-range-picker v-model:value="formState2.time" show-time :locale="locale" :format="dateFormat"/>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item>
              <a-button @click="download">下载</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </dv-border-box-10>

    <div class="c-bottom">Copyright © 2018-2024 niii.com All Rights Reserved.</div>
  </div>
</template>

<script lang="ts" setup>
import { BorderBox10 as DvBorderBox10 } from '@kjgl77/datav-vue3'
import { ref, reactive, computed, onMounted } from 'vue'
import type { UnwrapRef } from 'vue'
import {
  DownOutlined,
  SmileOutlined,
  FrownOutlined,
  FrownFilled,
  FullscreenOutlined
} from '@ant-design/icons-vue'
import type { TreeProps } from 'ant-design-vue'
import data1 from '@/assets/json/province.json'
import data2 from '@/assets/json/city.json'
import { Province } from '@/types'
import { getWeatherDataDataExport, getWeather } from './api'
import GaugeChart from '@/components/chart/GaugeChart.vue'
import dayjs, { Dayjs } from 'dayjs';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'

const treeData: TreeProps['treeData'] = [
  {
    title: '最近气象采集城市列表',
    key: '0',
    children: [
      { title: '北京', key: 'Wqsps' },
      { title: '石家庄', key: 'uJQqI' },
      { title: '广州', key: 'DwzZf' },
      { title: '南京', key: 'CxOWZ' },
      { title: '杭州', key: 'HIieJ' },
      { title: '宁波', key: 'XjZpe' },
      { title: '苏州', key: 'lqYjK' },
    ]
  }
]
const selectedKeys = ref<string[]>(['Wqsps'])

const getWeatherData = async () => {
  const res = await getWeather({ cityCode: selectedKeys.value[0] })
  console.log(res)
}

// 城市天气搜索
const onSelect = (e: string[], info: MouseEvent) => {
  selectedKeys.value = e
  console.log(selectedKeys)
};

onMounted(() => {
  // getWeatherData()
})

type RangeValue = [Dayjs, Dayjs]

const formState2: UnwrapRef<Record<string, string | number | undefined | RangeValue[]>> = reactive({
  province: null,
  city: null,
  time: []
})

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const provinces = data1.map((item: Province) => ({ label: item.name, value: item.name }))
const cities = computed(() => {
  return !formState2.province
    ? []
    : Object.keys(data2[formState2.province]).map((item: string) => {
        // return { label: item, value: item + ',' + data2[formState2.province][item] }
        return { label: item, value: data2[formState2.province][item] }
      })
})

// 下载
const download = () => {
  console.log(formState2)
}
</script>

<style lang="less" scoped>
.form-item-style {
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #fff;
  background: #0a2a57;
}

.ant-form-item {
  width: 100%;
  margin-bottom: 10px;
  margin-inline-end: 0;
  padding: 0 5px;
  :deep(&-label) {
    label {
      color: #b3e4fe;
    }
  }
  :deep(.ant-picker):extend(.form-item-style) {
    .ant-picker-input {
      input {
        color: #fff;
        &::placeholder {
          color: #fff;
        }
      }
    }
    .ant-picker-separator {
      color: #fff;
    }
    .ant-picker-suffix {
      color: #fff;
    }
  }
  :deep(.ant-select-selector):extend(.form-item-style) {
    .ant-select-selection-item,
    .ant-select-selection-placeholder {
      color: #fff;
    }
  }
  :deep(.ant-select-arrow) {
    color: #fff !important;
  }

  :deep(.input1) {
    span {
      input {
        background: #0a2a57;
        height: 31.99px;
        &::placeholder {
          color: #fff;
        }
      }
    }
  }
}

.chart {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 1fr; /* 三列布局 */
  grid-template-rows: 1fr 50px; /* 两行布局，第二行高度固定 */
  width: 100%;
  height: 100%;
  padding: 0px 10px 10px 10px;

  .c-left {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    :deep(.ant-tree) {
      margin: 10px 10px;
      background: #0a2a57;
      color: #fff;
      .ant-tree-treenode {
        padding-top: 4px;
      }
      .ant-tree-treenode-selected {
        background-color: #074c79;
        width: 100%;
        .ant-tree-node-content-wrapper {
          background-color: #074c79;
        }
      }
    }
  }

  .c-center {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-image: linear-gradient(to bottom, rgb(35, 134, 237), rgb(206, 229, 244));
    .c-c {
      display: grid;
      height: 100%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;

      &-detail {
        padding: 10px 10px;
        height: 100%;
        grid-column: 1 / 2;
        display: grid;
        color: #fff;
        font-family: 'Arial';
        grid-template-columns: repeat(3, 1fr) !important;
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 10px;
        justify-content: center;
        align-items: center;

        div {
          width: 100%;
          height: 100%;
          border: #fff 1px solid;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .value {
            font-size: 30px;
            font-weight: 700;
            // color: #204568;
          }
          .label {
            display: block;
            text-align: center;
            font-size: 12px;
          }
        }
      }

      &-chart {
        grid-column: 2 / 3;
      }
    }
  }

  .c-right {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    .position {
      font-family: 'Arial';
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
    .form {
      width: 100%;
      margin: 10px 0px;
      .ant-form-item();
    }
  }

  .c-bottom {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    border-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}

.svg-animation {
  perspective: 500px;
  animation:
    translateYAnimation 2s linear infinite alternate,
    flipXAnimation 2s linear infinite alternate,
    fadeAnimation 2s linear infinite alternate;
}

@keyframes translateYAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(1px);
  }
}

// @keyframes flipXAnimation {
//   from {
//     transform: scaleX(1);
//   }
//   to {
//     transform: scaleX(-1);
//   }
// }

@keyframes fadeAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
