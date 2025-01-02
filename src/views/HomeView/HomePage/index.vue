<template>
  <div class="chart">
    <dv-border-box-10 class="chart-left">
      <a-form ref="formRef1" class="form" layout="inline" :model="formState1" :label-col="{ span: 0 }" :wrapper-col="{ span: 24 }">
        <a-form-item name="weatherSelect">
          <a-select v-model:value="formState1.weatherSelect" :options="options"  placeholder="气象采集" allowClear />
        </a-form-item>
        <a-form-item name="deviceName">
          <a-input-search class="input1" v-model:value="formState1.deviceName" placeholder="请输入设备名称" @search="onSearch"/>
        </a-form-item>
      </a-form>

      <a-tree class="tree" v-model:selectedKeys="selectedKeys" :tree-data="treeData" show-icon default-expand-all>
        <!-- <template #icon="{ key }">
          <template v-if="key === '0-0'">
            <SvgIcon name="online" color="#fff"></SvgIcon>
          </template>
          <template v-else-if="key === '0-0-0'">
            <SvgIcon name="online" color="red"></SvgIcon>
          </template>
          <template v-else>
            <SvgIcon name="online" color="#fff"></SvgIcon>
          </template>
        </template> -->

        <template #title="{ key, title }">
          <a-button size="small" v-if="key=='0-0-5'" style="background: #0d4f0e; color: #2c9b3a">在线</a-button>
          <template v-else-if="key=='0'"></template> 
          <a-button size="small" v-else style="background: gray; color: #fff">离线</a-button> 
          <span>{{""}} {{ title }}</span>
        </template>
      </a-tree>        
    </dv-border-box-10>
    <dv-border-box-10 class="chart-center-top">
      <a-row style="padding: 10px 10px; size: 10px; width: 100%; justify-content: space-between;">
        <a-space>
          <dv-button :bg="true" border="Border5" color="#3B96EF" font-color="#fff">设备组态</dv-button>
          <dv-button :bg="false" border="Border5" color="#3B96EF" font-color="#fff">视频监控</dv-button>
        </a-space>
        <a-space>
          <a-input class="input1" v-model:value="formState2.deviceName" placeholder="请输入设备名称" />
          <SvgIcon name="enlarge" color="#fff" width="20px" height="20px"></SvgIcon>
        </a-space>
      </a-row>
      
      <a-row style="padding: 10px 10px; size: 10px; width: 100%; justify-content: space-between;">
        <SvgIcon name="position" color="#C7CCCFFF" width="20px" height="20px" className="svg-animation"></SvgIcon>
        <a-space class="position">{{formState2?.province}}  /  {{formState2.city?.split(",")[0]}}</a-space>
        <a-space style="float: right">
          <a-form ref="formRef2" class="form" layout="inline" :model="formState2" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-form-item name="province" label="省 ">
              <a-select v-model:value="formState2.province" :options="provinces" placeholder="请选择省级区域" allowClear />
            </a-form-item>
            <a-form-item name="city" label="市 ">
              <a-select v-model:value="formState2.city" :options="cities" placeholder="请选择市/县级区域" allowClear @change="changeCity" />
            </a-form-item>
          </a-form>
        </a-space>
      </a-row>

      <a-row class="detail">
        <div><span>浙江省</span><span>宁波市</span></div>
        <div><span>更新时间</span><span>2025.01.01  00:00:00</span></div>
        <div><span>日出时间：07：00</span><span>日落时间：19：00</span></div>
        <div><span>空气质量</span><span>优</span></div>
        <div><span>空气污染指数</span><span>良</span></div>
        <div><span>体感温度</span><span>23°</span></div>
        <div><span>相对湿度</span><span>18%</span></div>
        <div><span>气温</span><span>25°</span></div>
        <div><span>天气</span><span>晴</span></div>
        <div><span>西南风</span><span>微风</span><span>风速：1.8</span></div>
        <div><span>昨天：2024-12-31</span><span>最高气温：23°</span><span>最低气温：13°</span></div>
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
      </a-row>
    </dv-border-box-10>
    <dv-border-box-10 class="chart-center-bottom"></dv-border-box-10>
    <dv-border-box-10 class="chart-right-top"></dv-border-box-10>
    <dv-border-box-10 class="chart-right-bottom"></dv-border-box-10>
  </div>
</template>

<script lang="ts" setup>
import { BorderBox10 as DvBorderBox10 } from '@kjgl77/datav-vue3'
import { ref, reactive,computed } from "vue"
import type { UnwrapRef } from "vue";
import { DownOutlined, SmileOutlined, FrownOutlined, FrownFilled, FullscreenOutlined } from '@ant-design/icons-vue';
import type { TreeProps } from 'ant-design-vue';
import data1 from "@/assets/json/province.json";
import data2 from "@/assets/json/city.json";
import { Province } from "@/types";

const formState1: UnwrapRef<Record<string, string | number | undefined>> = reactive({
    weatherSelect: null,
    deviceName: null,
});
const options = [
  {label: "气象采集1", value: "1"},
  {label: "气象采集2", value: "2"},
]
const onSearch = () => {}


const treeData: TreeProps['treeData'] = [
  {
    title: '自动气象站',
    key: '0',
    children: [
      { title: '设备0', key: '0-0-0' },
      { title: '设备1', key: '0-0-1' },
      { title: '设备2', key: '0-0-2' },
      { title: '设备3', key: '0-0-3' },
      { title: '设备4', key: '0-0-4' },
      { title: '设备5', key: '0-0-5' },
    ],
  },
];
const selectedKeys = ref(['0-0-5']);

const formState2: UnwrapRef<Record<string, string | number | undefined>> = reactive({
    province: null,
    city: null,
});


const provinces = data1.map((item: Province) => ({label: item.name, value: item.name}));
const cities = computed(() => {
  // return data2.filter((item: Province) => item.name === formState2.province)[0]?.city.map((item) => ({label: item, value: item}));
  return !formState2.province ? [] : Object.keys(data2[formState2.province]).map( (item: string) => {
    return {label: item, value: item + "," + data2[formState2.province][item]}
  })
})

const changeCity = () => {
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
  width: 50%;
  margin-inline-end: 0;
  padding: 0 5px ;
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
  grid-template-columns: 1fr 2fr 1fr;  /* 三列布局 */
  grid-template-rows: 1fr 200px;      /* 两行布局，第二行高度固定 */
  width: 100%;
  height: 100%;
  padding: 0px 10px 10px 10px;
  
  .chart-left {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    border-radius: 10px;
    // padding 

    .form {
      width: 100% !important;
      margin: 10px 0px;
      .ant-form-item()
    }

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

  .chart-center-top {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, rgb(35, 134, 237), rgb(206,229,244));

    .position {
      color: #fff;
    }

    .detail {
      display: grid;
    }
  }
  
  .chart-center-bottom {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-radius: 10px;
  }

  .chart-right {
    grid-column: 3 / 4; 
    grid-row: 1 / 2;     
    border-radius: 10px;

  }
}

.svg-animation {
  perspective: 500px;
  animation: translateYAnimation 2s linear infinite alternate, flipXAnimation 2s linear infinite alternate, fadeAnimation 2s linear infinite alternate;
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
