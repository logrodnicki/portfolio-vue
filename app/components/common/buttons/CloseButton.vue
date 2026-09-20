<template>
  <button class="close-button" @click="handleClick">
    <span class="background" />
    <span class="hover-background" />
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
}

defineProps<Props>();

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style lang="scss" scoped>
.close-button {
  background: transparent;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 300ms linear;
  overflow: hidden;
  position: relative;
  color: $cl-custom-4;

  &:hover:not(.active) {
    color: $cl-custom-1;

    .background {
      transform: translateX(100%);
    }

    .hover-background {
      transform: translateX(0);
    }

    .label {
      transform: rotateZ(180deg);
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
  transition: transform 200ms linear;
}
</style>
