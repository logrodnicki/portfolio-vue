<template>
  <div class="mobile-header-menu" :class="classes">
    <div class="header">
      <h3 class="title">Menu</h3>

      <CloseButton label="X" use-close-animation @click="handleClose" />
    </div>

    <div class="content">
      <HeaderButton
        v-for="button in headerButtons"
        :key="button.to"
        :label="button.label"
        :to="button.to"
        full-width
        class="button"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CloseButton from '~/components/common/buttons/CloseButton.vue';
import HeaderButton from '~/components/header/HeaderButton.vue';
import { headerButtons } from '~/data/data';

interface Props {
  isVisible: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);

const isVisible = computed(() => props.isVisible);

const classes = computed(() => ({
  'is-visible': isVisible.value,
}));

const handleClose = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
@keyframes moveButtonAnimation {
  to {
    transform: translateX(0);
  }
}

.mobile-header-menu {
  height: 100vh;
  width: 100vw;
  transition: transform 300ms linear;
  transform: translateX(-100%);
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, $cl-custom-6, $cl-custom-7);

  &.is-visible {
    transform: translateX(0);
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: linear-gradient(45deg, $cl-custom-1 50%, $cl-purple-950 100%);
}

.title {
  color: $cl-custom-4;
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
}

.button {
  transform: translateX(-100px);

  .is-visible & {
    animation: moveButtonAnimation 300ms ease-in-out forwards;
    animation-delay: calc(sibling-index() * 100ms);
  }
}
</style>
