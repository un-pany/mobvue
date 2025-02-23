<script setup lang="ts">
import { useWatermark } from "@@/composables/useWatermark"
import NoticeBar from "./components/NoticeBar.vue"

const localRef = ref<HTMLElement | null>(null)

const { setWatermark, clearWatermark } = useWatermark(localRef)

const { setWatermark: setGlobalWatermark, clearWatermark: clearGlobalWatermark } = useWatermark()
</script>

<template>
  <div un-mb-20px>
    <NoticeBar text="支持局部、全局、自定义样式，并自带防御和自适应功能" />
    <div
      ref="localRef"
      class="local"
      un-mt-40px
      un-h-35vh
      un-b-2px
      un-b-dashed
      un-b-primary
    />
    <div un-mt-40px un-flex-x-center>
      <van-button
        type="primary"
        size="small"
        square
        @click="setWatermark('局部水印', { color: '#409eff', width: 200, height: 150 })"
      >
        创建局部水印
      </van-button>
      <van-button
        type="warning"
        size="small"
        square
        @click="setWatermark('没有防御功能的局部水印', { color: '#e6a23c', defense: false, width: 200, height: 150 })"
      >
        创建无防御局部水印
      </van-button>
      <van-button
        type="danger"
        size="small"
        square
        @click="clearWatermark"
      >
        清除局部水印
      </van-button>
    </div>
    <div un-mt-20px un-flex-x-center>
      <van-button
        type="primary"
        size="small"
        square
        @click="setGlobalWatermark('全局水印', { color: '#409eff', width: 200, height: 150 })"
      >
        创建全局水印
      </van-button>
      <van-button
        type="warning"
        size="small"
        square
        @click="setGlobalWatermark('没有防御功能的全局水印', { color: '#e6a23c', defense: false, width: 200, height: 150 })"
      >
        创建无防御全局水印
      </van-button>
      <van-button
        type="danger"
        size="small"
        square
        @click="clearGlobalWatermark"
      >
        清除全局水印
      </van-button>
    </div>
  </div>
</template>
