<template>
  <header class="header">
    <div class="buttons">
      <HeaderButton
        v-for="button in buttons"
        :key="button.to"
        :label="button.label"
        :to="button.to"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderButton from '~/components/header/HeaderButton.vue';

const buttons = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Experience',
    to: '/experience',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 64px;
  background: linear-gradient(45deg, $cl-custom-1 50%, $cl-purple-950 100%);
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  justify-content: center;
}

.buttons {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
