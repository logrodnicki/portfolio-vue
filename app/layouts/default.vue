<template>
  <div class="default-layout">
    <Header />
    <MobileHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/header/Header.vue';
import MobileHeader from '~/components/header/MobileHeader.vue';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.default-layout {
  display: flex;
  flex-direction: column;
  background: $cl-neutral-950;
}
</style>
