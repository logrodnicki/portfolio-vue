<template>
  <div class="technology">
    <div class="image">
      <img :src="logoUrl" alt="Technology logo" />
    </div>

    <div class="name">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ITechnology } from '~/types/projectsTypes';

interface Props {
  technology: ITechnology;
}

const { technology } = defineProps<Props>();

const { name, logoUrl } = technology || {};
</script>

<style lang="scss" scoped>
.technology {
  display: flex;
  gap: 8px;
  align-items: center;
  border: 1px solid $cl-custom-4;
  height: 24px;
  border-radius: 12px;
  padding: 0 12px;
  color: $cl-custom-4;
  background-color: $cl-custom-6;
  font-size: 12px;
  width: fit-content;

  @media (min-width: $breakpoint-tablet) {
    height: 32px;
    border-radius: 16px;
    padding: 0 16px;
  }
}

.image {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: $cl-custom-6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;

  @media (min-width: $breakpoint-tablet) {
    height: 32px;
    width: 32px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }
}

.name {
  font-size: 16px;
}
</style>
