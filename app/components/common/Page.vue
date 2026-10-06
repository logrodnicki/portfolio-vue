<template>
  <div class="page">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { HEADER_HEIGHT_IN_PX } from '~/helpers/commonHelpers';

const headerHeight = `${HEADER_HEIGHT_IN_PX}px`;
</script>

<style lang="scss" scoped>
.page {
  background: $cl-neutral-950;
  padding: 32px;
  box-sizing: border-box;
  min-height: calc(100vh - v-bind(headerHeight));

  @media (min-width: $breakpoint-small-device) {
    gap: 64px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}
</style>
