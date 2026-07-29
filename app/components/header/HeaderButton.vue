<template>
  <NuxtLink :to="to" class="header-button">
    <span class="background" />
    <span class="hover-background" />
    <span class="label">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  to: string;
}

const { label, to } = defineProps<Props>();
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.header-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: color 300ms linear;
  color: white;
  height: 24px;
  padding: 8px 16px;
  border-radius: calc(infinity * 1px);
  text-decoration-line: none;

  &:hover {
    color: $cl-custom-1;

    .background,
    .active-background {
      transform: translateX(100%);
    }

    .hover-background {
      transform: translateX(0);
    }
  }
}

.background {
  background-color: $cl-custom-3;
}

.hover-background {
  background-color: $cl-custom-4;
  transform: translateX(-101%);
}

.active-background {
  background-color: $cl-purple-500;
  transform: translateX(-101%);
}

.background,
.hover-background,
.active-background {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 200ms linear;
}

.label {
  z-index: 1;
}
</style>
