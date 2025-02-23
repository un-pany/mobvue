<script setup lang="ts">
import Layout from "@/layout/index.vue"
import { useUserStore } from "@/pinia/stores/user"
import { useDark } from "@@/composables/useDark"

const userStore = useUserStore()

const { isDark, initDark } = useDark()

const isLoading = computed(() => userStore.token && !userStore.username)

watch(
  () => userStore.token,
  (newVal) => {
    newVal && userStore.getInfo()
  },
  {
    immediate: true
  }
)

initDark()
</script>

<template>
  <van-config-provider :theme="isDark ? 'dark' : 'light'" un-h-full>
    <van-loading v-if="isLoading" un-h-full un-flex-center>
      加载中...
    </van-loading>
    <Layout v-else />
  </van-config-provider>
</template>
