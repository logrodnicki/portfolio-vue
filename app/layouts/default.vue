<template>
  <div class="default-layout">
    <AppHeader />
    <div class="page-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.default-layout {
  display: flex;
  flex-direction: column;
}

.page-content {
  > div {
    min-height: calc(100vh - 64px);
  }
}
</style>
