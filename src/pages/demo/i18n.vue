<script setup lang="ts">
import { useI18n } from "vue-i18n"
import LanguageSwitcher from "./components/LanguageSwitcher.vue"

const { t } = useI18n({
  useScope: "global"
})
</script>

<template>
  <div class="home">
    <header class="header">
      <LanguageSwitcher />
    </header>
    <main class="main">
      <section class="hero">
        <h1>{{ t('home.welcome') }}</h1>
        <p>{{ t('home.description') }}</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #f8f9fa;
}

.header {
  padding: 16px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main {
  padding: 24px 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 40px 0;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
