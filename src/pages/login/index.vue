<script setup lang="ts">
import type { LoginRequestData } from "./apis/type"
import Description from "@@/components/Description.vue"
import { useUserStore } from "@/pinia/stores/user"
import { loginApi } from "./apis"

const router = useRouter()

const userStore = useUserStore()

const loading = ref(false)

const loginFormData: LoginRequestData = reactive({
  username: "admin",
  password: "12345678"
})

function onSubmit() {
  loading.value = true
  loginApi(loginFormData).then(({ data }) => {
    userStore.setToken(data.token)
    router.push("/")
  }).catch(() => {
    loginFormData.password = ""
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <div un-h-full un-flex-center un-flex-col un-select-none>
    <Description un-mb-20px />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="loginFormData.username"
          name="username"
          label="用户名"
          size="large"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginFormData.password"
          type="password"
          name="password"
          label="密码"
          size="large"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div un-mx-16px un-my-32px>
        <van-button
          :loading="loading"
          type="primary"
          native-type="submit"
          size="large"
          round
          block
        >
          登 录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
