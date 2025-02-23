<script setup lang="ts">
import NoticeBar from "./components/NoticeBar.vue"

defineOptions({
  name: "KeepAlive"
})

const value = ref<string>("")
</script>

<template>
  <div un-mb-20px>
    <NoticeBar text="基于 KeepAlive 组件实现的路由缓存，但不受 Layout 影响" />
    <van-cell-group inset un-mt-20px>
      <van-field v-model="value" placeholder="请输入" />
    </van-cell-group>
  </div>
</template>
