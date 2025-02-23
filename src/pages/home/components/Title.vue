<script setup lang="ts">
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <span un-pl-16px un-color-hex-969799 un-text-14px un-fw400>
    {{ props.text }}
  </span>
</template>
