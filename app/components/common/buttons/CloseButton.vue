<template>
  <button class="close-button" :class="classes" @click="handleClick">
    <span class="background" />
    <span class="hover-background" />
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
  useCloseAnimation?: boolean;
}

const { label, useCloseAnimation } = defineProps<Props>();

const emit = defineEmits(['click']);

const isClickAnimationPending = ref(false);
const timeout = ref<NodeJS.Timeout | null>(null);

const classes = computed(() => ({
  'is-click-animation': isClickAnimationPending.value,
}));

const handleClick = () => {
  if (!useCloseAnimation) {
    emit('click');

    return;
  }

  isClickAnimationPending.value = true;

  timeout.value = setTimeout(() => {
    isClickAnimationPending.value = false;

    emit('click');
  }, 500);
};

onBeforeUnmount(() => {
  if (!timeout.value) {
    return;
  }

  clearTimeout(timeout.value);
});
</script>

<style lang="scss" scoped>
@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.7);
  }

  75% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

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

.is-click-animation {
  animation: clickAnimation 500ms ease-in-out forwards;
}
</style>
