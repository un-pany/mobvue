<script setup lang="ts">
import { useKeepAliveStore } from "@/pinia/stores/keep-alive"
import Footer from "./components/Footer.vue"
import NavBar from "./components/NavBar.vue"
import Tabbar from "./components/Tabbar.vue"

const route = useRoute()

const keepAliveStore = useKeepAliveStore()

const showNavBar = computed(() => route.meta.layout?.navBar?.showNavBar)

const showTabbar = computed(() => route.meta.layout?.tabbar?.showTabbar)

const showFooter = computed(() => route.meta.layout?.footer)
</script>

<template>
  <div un-h-full un-flex un-flex-col>
    <NavBar v-if="showNavBar" />
    <div un-flex-1 un-overflow-y-auto>
      <!-- key 采用 route.path 和 route.fullPath 有着不同的效果，大多数时候 path 更通用 -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveStore.cachedRoutes">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </router-view>
      <Footer v-if="showFooter" />
    </div>
    <Tabbar v-if="showTabbar" />
  </div>
</template>
