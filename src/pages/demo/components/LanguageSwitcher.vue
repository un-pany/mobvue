<script setup lang="ts">
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"

const i18n = useI18n({
  useScope: "global"
})
const currentLocale = ref(i18n.locale.value)

watch(currentLocale, (newLocale) => {
  i18n.locale.value = newLocale
})
</script>

<template>
  <div class="language-switcher">
    <select v-model="currentLocale" class="select-lang">
      <option value="zh">
        中文
      </option>
      <option value="en">
        English
      </option>
    </select>
  </div>
</template>

<style scoped>
.language-switcher {
  padding: 4px 0;
}

.select-lang {
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: white;
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 32px;
}

/* 移动端点击态 */
.select-lang:active {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .language-switcher {
    padding: 2px 0;
  }

  .select-lang {
    padding: 4px 6px;
    font-size: 13px;
    padding-right: 28px;
    background-size: 14px;
  }
}
</style>
