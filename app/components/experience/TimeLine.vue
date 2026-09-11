<template>
  <div ref="sectionRef" class="time-line" :class="classes">
    <div ref="dotRef" class="dot" :class="dotClasses">
      <div class="dot-content" />
    </div>
    <div class="line" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import { MARGIN_IN_PX } from '~/helpers/experienceHelpers';
import useAnimationPending from '~/hooks/useAnimationPending';

const sectionRef = ref<HTMLElement | null>(null);
const dotRef = ref<HTMLElement | null>(null);
const isDotCloseToCenter = ref(false);

const DEFAULT_TOP_MARGIN = 8;
const WINDOW_CENTER_THRESHOLD = 100;

const computedTopMargin = `${DEFAULT_TOP_MARGIN + MARGIN_IN_PX}px`;

const { isVisible } = useIntersectionObserver(sectionRef);
const { isAnimationPending } = useAnimationPending(isVisible);

const classes = computed(() => ({
  'is-visible': isVisible.value && !isAnimationPending.value,
  'is-animation-pending': isAnimationPending.value,
}));

const dotClasses = computed(() => ({
  'is-pulsing': isDotCloseToCenter.value,
}));

const handleScroll = () => {
  if (!dotRef.value) {
    return;
  }

  const dotTopPosition = dotRef.value.getBoundingClientRect().top;
  const windowCenter = window.innerHeight / 2;
  const windowCenterTopThreshold = windowCenter - WINDOW_CENTER_THRESHOLD;
  const windowCenterBottomThreshold = windowCenter + WINDOW_CENTER_THRESHOLD;

  if (dotTopPosition < windowCenterBottomThreshold && dotTopPosition > windowCenterTopThreshold) {
    isDotCloseToCenter.value = true;
    return;
  }

  isDotCloseToCenter.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
@keyframes showAnimation {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseAnimation {
  0% {
    box-shadow: 0 0 10px 5px $cl-custom-3;
  }

  50% {
    box-shadow: 0 0 10px 10px $cl-custom-3;
  }

  100% {
    box-shadow: 0 0 10px 5px $cl-custom-3;
  }
}

.time-line {
  position: relative;
  width: 64px;
  display: flex;
  justify-content: center;
}

.dot {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: $cl-custom-4;
  padding: 2px;
  position: absolute;
  top: v-bind(computedTopMargin);
  opacity: 0;
  transform: translateY(-10px);

  .is-animation-pending & {
    animation: showAnimation 750ms forwards ease-in-out;
  }

  .is-visible & {
    opacity: 1;
    transform: translateY(0);
  }

  &.is-pulsing {
    animation: pulseAnimation 1000ms infinite ease-in-out;
  }
}

.dot-content {
  background-color: $cl-custom-3;
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.line {
  width: 2px;
  height: auto;
  background-color: $cl-custom-4;
}
</style>
