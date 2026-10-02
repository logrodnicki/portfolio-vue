<template>
  <header class="mobile-header">
    <HeaderMobileButton use-animation @click="handleOpenMenu" />

    <MobileHeaderMenu :is-visible="isMenuOpen" @close="handleCloseMenu" />
  </header>
</template>

<script lang="ts" setup>
import { HEADER_HEIGHT_IN_PX } from '~/helpers/commonHelpers';
import MobileHeaderMenu from '~/components/header/MobileHeaderMenu.vue';
import HeaderMobileButton from '~/components/header/HeaderMenuButton.vue';

const isMenuOpen = ref(false);

const headerHeight = `${HEADER_HEIGHT_IN_PX}px`;

const handleOpenMenu = () => {
  isMenuOpen.value = true;
};

const handleCloseMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
.mobile-header {
  position: sticky;
  top: 0;
  z-index: $z-index-header;
  height: v-bind(headerHeight);
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: $breakpoint-tablet) {
    display: none;
  }
}
</style>
