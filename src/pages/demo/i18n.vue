<script setup lang="ts">
import { Locale } from "vant"
import enUS from "vant/es/locale/lang/en-US"
import { useI18n } from "vue-i18n"
import NoticeBar from "./components/NoticeBar.vue"

const { t, locale } = useI18n()

const checked = ref<string>(locale.value)

function onChange(name: string) {
  locale.value = name
  name === "en" ? Locale.use("en-US", enUS) : Locale.use("zh-CN")
}
</script>

<template>
  <div un-mb-20px>
    <NoticeBar :text="t('text')" />
    <van-radio-group v-model="checked" @change="onChange">
      <van-cell-group :title="t('title')" inset>
        <van-cell title="中文" @click="checked = 'zh-CN'">
          <template #right-icon>
            <van-radio name="zh-CN" />
          </template>
        </van-cell>
        <van-cell title="English" @click="checked = 'en'">
          <template #right-icon>
            <van-radio name="en" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-calendar
      :poppable="false"
      :show-confirm="false"
      un-h-500px
      un-mx-16px
      un-my-20px
      un-rounded-8px
      un-overflow-hidden
    />
  </div>
</template>
