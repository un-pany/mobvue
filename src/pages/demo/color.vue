<script setup lang="ts">
import type { Mode } from "@@/composables/useGrayscaleAndColorblind"
import { useGrayscaleAndColorblind } from "@@/composables/useGrayscaleAndColorblind"
import NoticeBar from "./components/NoticeBar.vue"

const { mode, setMode } = useGrayscaleAndColorblind()

const checked = ref<Mode>(mode.value)

function onChange(name: Mode) {
  setMode(name)
}
</script>

<template>
  <div un-mb-20px>
    <NoticeBar text="针对哀悼场景和色弱色盲人群" />
    <van-radio-group v-model="checked" @change="onChange">
      <van-cell-group title="切换模式" inset>
        <van-cell title="无" @click="checked = ''">
          <template #right-icon>
            <van-radio name="" />
          </template>
        </van-cell>
        <van-cell title="灰色模式" @click="checked = 'grayscale'">
          <template #right-icon>
            <van-radio name="grayscale" />
          </template>
        </van-cell>
        <van-cell title="色弱模式" @click="checked = 'colorblind'">
          <template #right-icon>
            <van-radio name="colorblind" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>
