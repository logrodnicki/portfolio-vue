<template>
  <NuxtLink :to="to" class="header-button" active-class="active">
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
  height: 40px;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: calc(infinity * 1px);
  text-decoration-line: none;

  &:hover:not(.active) {
    color: $cl-custom-1;

    .background {
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

.active {
  color: $cl-custom-1;

  .background {
    background-color: $cl-custom-4;
  }
}

.background,
.hover-background {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 200ms linear;
}

.label {
  z-index: 1;
}
</style>
