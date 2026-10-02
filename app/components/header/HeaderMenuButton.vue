<template>
  <button class="header-menu-button" :class="classes" @click="handleClick">
    <Icon name="ri:menu-line" class="icon" />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  useAnimation?: boolean;
}

const { useAnimation } = defineProps<Props>();
const emit = defineEmits(['click']);

const isAnimationPending = ref(false);

const classes = computed(() => ({
  'is-click-animation': isAnimationPending.value,
}));

const handleClick = () => {
  if (!useAnimation) {
    emit('click');

    return;
  }

  isAnimationPending.value = true;

  setTimeout(() => {
    isAnimationPending.value = false;

    emit('click');
  }, 500);
};
</script>

<style lang="scss" scoped>
@keyframes flipAnimation {
  50% {
    transform: rotateY(90deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}

.header-menu-button {
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  outline: none;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.icon {
  font-size: 20px;
}

.is-click-animation {
  animation: flipAnimation 500ms ease-in-out forwards;
}
</style>
