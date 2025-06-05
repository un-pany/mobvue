<script setup lang="ts">
import Description from "@@/components/Description.vue"
import { demoRoutes, emptyDemoRoutes, systemRoutes } from "@/router"
import Cell from "./components/Cell.vue"
import Title from "./components/Title.vue"
</script>

<template>
  <div un-px-20px un-py-26px un-select-none>
    <Description un-pl-16px />
    <div un-mt-40px>
      <Title text="示例集合" />
      <Cell
        v-for="route in [...demoRoutes, ...systemRoutes]"
        :key="route.path"
        :title="route.meta?.title || ''"
        :path="route.path"
        un-mt-12px
      />
    </div>
    <div un-my-20px>
      <Title text="更多示例" />
      <Cell
        v-for="route in emptyDemoRoutes"
        :key="route.path"
        :title="route.meta?.title || ''"
        :path="route.path"
        un-mt-12px
      />
    </div>
    <van-divider>🔥 更多优秀示例，期待你的 PR 👏🏻</van-divider>
  </div>
</template>
