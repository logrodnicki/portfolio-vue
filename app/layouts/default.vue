<template>
  <div class="default-layout">
    <AppHeader />
    <main>
      <slot />
    </main>
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
</style>
