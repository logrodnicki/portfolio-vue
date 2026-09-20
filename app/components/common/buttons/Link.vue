<template>
  <a class="link" :href="href" target="_blank">
    <span class="background" />
    <span class="hover-background" />
    <span class="label">{{ label }}</span>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
  href: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.link {
  padding: 4px 16px;
  background-color: $cl-custom-3;
  color: $cl-custom-4;
  width: fit-content;
  height: 32px;
  border-radius: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 300ms linear;
  overflow: hidden;
  position: relative;

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
  background: $cl-custom-3;
}

.hover-background {
  background-color: $cl-custom-4;
  transform: translateX(-101%);
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
