<script setup lang="ts">
import { router } from "@/router"

interface Props {
  title: string
  path: string
}

const props = defineProps<Props>()

function onClick() {
  router.push(props.path)
}
</script>

<template>
  <div
    @click="onClick"
    un-h-40px
    un-px-20px
    un-rounded-99px
    un-bg-bg
    un-color-hex-34495e
    un-dark:color-hex-ffffffbf
    un-text-14px
    un-fw-600
    un-flex-y-center
    un-justify-between
    un-transition-opacity-300
    un-active-opacity-60
  >
    <span>{{ props.title }}</span>
    <van-icon name="arrow" color="#B6C3D2" />
  </div>
</template>
