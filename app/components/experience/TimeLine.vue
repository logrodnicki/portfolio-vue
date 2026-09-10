<template>
  <div ref="section" class="time-line" :class="classes">
    <div class="dot">
      <div class="dot-content" />
    </div>
    <div class="line" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import { MARGIN_IN_PX } from '~/helpers/experienceHelpers';

const DEFAULT_TOP_MARGIN = 8;

const section = ref<HTMLElement | null>(null);

const { isVisible } = useIntersectionObserver(section);

const classes = computed(() => ({
  'is-visible': isVisible.value,
}));

const computedTopMargin = `${DEFAULT_TOP_MARGIN + MARGIN_IN_PX}px`;
</script>

<style lang="scss" scoped>
@keyframes show {
  to {
    opacity: 1;
    transform: translateY(0);
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

  .is-visible & {
    animation: show 750ms forwards ease-in-out;
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
