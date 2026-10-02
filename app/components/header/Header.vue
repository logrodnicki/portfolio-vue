<template>
  <header class="header">
    <div class="buttons">
      <HeaderButton
        v-for="button in headerButtons"
        :key="button.to"
        :label="button.label"
        :to="button.to"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderButton from '~/components/header/HeaderButton.vue';
import { HEADER_HEIGHT_IN_PX } from '~/helpers/commonHelpers';
import { headerButtons } from '~/data/data';

const headerHeight = `${HEADER_HEIGHT_IN_PX}px`;
</script>

<style lang="scss" scoped>
@use '~/assets/style/main';

.header {
  position: sticky;
  top: 0;
  z-index: $z-index-header;
  height: v-bind(headerHeight);
  background: linear-gradient(45deg, $cl-custom-1 50%, $cl-purple-950 100%);
  display: none;
  padding: 16px;
  box-sizing: border-box;
  justify-content: center;

  @media (min-width: $breakpoint-tablet) {
    display: flex;
  }
}

.buttons {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
