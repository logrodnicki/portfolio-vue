<template>
  <button class="button" :type="type" :class="classes" @click="handleClick">
    <span class="background" />
    <span class="hover-background" />
    <div class="content">
      <div v-if="iconName" class="icons">
        <div class="icon-wrapper">
          <Icon :name="iconName" class="icon" />
        </div>

        <Icon name="websymbol:cw-circle" class="loading-icon" />
      </div>

      <div class="label-wrapper">
        <Transition name="slide-up">
          <span v-if="isLoading" class="label">Waiting</span>
          <span v-else class="label">{{ label }}</span>
        </Transition>
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import type { EButtonTypes } from '~/types/commonTypes';

interface Props {
  label: string;
  type: EButtonTypes;
  fullWidth?: boolean;
  iconName?: string;
  isLoading?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);

const { label, type, fullWidth, iconName } = props;

const isLoading = computed(() => props.isLoading);

const classes = computed(() => ({
  'full-width': fullWidth,
  'is-loading': isLoading.value,
}));

const handleClick = () => {
  emit('click');
};
</script>

<style lang="scss" scoped>
@keyframes rotateAnimation {
  0% {
    transform: rotateZ(0deg);
  }

  50% {
    transform: rotateZ(180deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes hideIconAnimation {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes showLoadingIconAnimation {
  to {
    opacity: 1;
  }
}

.button {
  padding: 4px 16px;
  background-color: $cl-custom-3;
  color: $cl-custom-4;
  width: fit-content;
  height: 40px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 300ms linear;
  overflow: hidden;
  position: relative;
  border: none;
  box-sizing: border-box;
  font: 400 16px/20px $primary-font;

  &:hover:not(.active) {
    color: $cl-custom-1;

    .background {
      transform: translateX(100%);
    }

    .hover-background {
      transform: translateX(0);
    }

    .icon-wrapper,
    .loading-icon {
      background-color: $cl-custom-3;
    }

    .icon {
      color: $cl-custom-4;
    }
  }

  &.full-width {
    width: 100%;
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

.content {
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
}

.label-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
}

.label {
  position: absolute;
  width: calc(100% - 24px); // 24px - icon width
}

.icons {
  position: relative;
}

.icon-wrapper {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 50%;
  background: $cl-custom-4;
  transition: background 200ms linear;

  .is-loading & {
    animation: hideIconAnimation 200ms linear forwards;
  }
}

.icon {
  height: 12px;
  color: $cl-custom-6;
  transition: color 200ms linear;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.25s ease-out,
    transform 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.loading-icon {
  height: 24px;
  width: 24px;
  background-color: $cl-custom-4;
  animation: rotateAnimation 1s infinite linear;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  .is-loading & {
    animation:
      showLoadingIconAnimation 200ms 200ms ease-in-out forwards,
      rotateAnimation 1s 400ms linear infinite;
  }
}
</style>
