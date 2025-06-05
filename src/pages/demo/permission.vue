<script setup lang="ts">
import { checkPermission } from "@@/utils/permission"
import { useUserStore } from "@/pinia/stores/user"
import NoticeBar from "./components/NoticeBar.vue"

const userStore = useUserStore()

const checked = ref<string>(userStore.roles[0])

function onChange(name: string) {
  userStore.changeRoles(name)
}
</script>

<template>
  <div un-mb-20px>
    <NoticeBar text="基于权限指令、权限函数实现的按钮级控制" />
    <van-radio-group v-model="checked" @change="onChange">
      <van-cell-group title="切换用户" inset>
        <van-cell title="Admin 用户" @click="checked = 'admin'">
          <template #right-icon>
            <van-radio name="admin" />
          </template>
        </van-cell>
        <van-cell title="Editor 用户" @click="checked = 'editor'">
          <template #right-icon>
            <van-radio name="editor" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-cell-group title="权限指令" inset>
      <van-cell v-permission="['admin']" title="Admin 可见" value="Role admin" />
      <van-cell v-permission="['admin', 'editor']" title="Admin 或 Editor 可见" value="Role admin or editor" />
    </van-cell-group>
    <van-cell-group title="权限函数" inset>
      <van-cell v-if="checkPermission(['admin'])" title="Admin 可见" value="Role admin" />
      <van-cell v-if="checkPermission(['admin', 'editor'])" title="Admin 或 Editor 可见" value="Role admin or editor" />
    </van-cell-group>
  </div>
</template>
