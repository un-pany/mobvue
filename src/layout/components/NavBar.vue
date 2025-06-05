<script setup lang="ts">
const route = useRoute()

const router = useRouter()

const title = computed(() => route.meta.title)

const showLeftArrow = computed(() => route.meta.layout?.navBar?.showLeftArrow)

function onClickLeft() {
  if (window.history.state?.back)
    history.back()
  else
    router.replace("/")
}
</script>

<template>
  <van-nav-bar
    :title="title"
    :left-arrow="showLeftArrow"
    fixed
    placeholder
    safe-area-inset-top
    @click-left="onClickLeft"
  />
</template>
