<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import LanguageSwitcher from "./components/i18n/LanguageSwitcher.vue"

const { t } = useI18n({
  useScope: "global"
})

const username = ref("")
const password = ref("")

function handleSubmit() {
  console.log("Submit:", { username: username.value, password: password.value })
}

function handleReset() {
  username.value = ""
  password.value = ""
}
</script>

<template>
  <div class="home">
    <LanguageSwitcher />

    <div class="content">
      <h1>{{ t('home.title') }}</h1>
      <p>{{ t('home.description') }}</p>

      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group">
          <label>{{ t('home.form.username') }}</label>
          <input v-model="username" type="text">
        </div>
        <div class="form-group">
          <label>{{ t('home.form.password') }}</label>
          <input v-model="password" type="password">
        </div>
        <div class="form-actions">
          <button type="submit">
            {{ t('home.form.submit') }}
          </button>
          <button type="button" @click="handleReset">
            {{ t('home.form.reset') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding: 16px;
  background: #f5f5f5;
}

.content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0 0 16px;
  font-size: 24px;
  color: #2c3e50;
}

p {
  margin: 0 0 24px;
  color: #666;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #2c3e50;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 16px;
  -webkit-appearance: none;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.form-actions button {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background: #42b983;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.form-actions button:active {
  opacity: 0.8;
}

.form-actions button[type="button"] {
  background: #909399;
}

@media (max-width: 768px) {
  .home {
    padding: 12px;
  }

  .content {
    padding: 16px;
  }

  h1 {
    font-size: 20px;
  }

  .form-group input {
    font-size: 15px;
  }

  .form-actions button {
    font-size: 15px;
    padding: 10px;
  }
}
</style>
