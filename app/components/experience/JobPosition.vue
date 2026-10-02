<template>
  <div ref="section" class="job-position" :class="classes">
    <div class="content">
      <h5 class="name">{{ name }}</h5>

      <p class="position">{{ position }}</p>

      <ul class="list">
        <li v-for="(duty, index) in duties" :key="index">{{ duty }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IJobPosition } from '~/types/experienceTypes';
import { ref } from 'vue';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import useAnimationPending from '~/hooks/useAnimationPending';

interface Props {
  jobPosition: IJobPosition;
}

const { jobPosition } = defineProps<Props>();

const { name, position, duties } = jobPosition || {};

const section = ref<HTMLElement | null>(null);

const { isVisible } = useIntersectionObserver(section);
const { isAnimationPending } = useAnimationPending(isVisible);

const classes = computed(() => ({
  'is-visible': isVisible.value && !isAnimationPending.value,
  'is-animation-pending': isAnimationPending.value,
}));
</script>

<style lang="scss" scoped>
$animationTime: 750ms;

@keyframes nameAnimation {
  25% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateX(0) rotateZ(0deg);
  }
}

@keyframes positionAnimation {
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

@keyframes dutiesAnimations {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes framesAnimations {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.job-position {
  padding: 1px;
  background-color: $cl-violet-900;
  width: 100%;
  max-width: 384px;
  border-radius: 16px;
  opacity: 0;
  transform: translateY(-25px) scale(0.9);
  transition:
    transform 300ms ease-in-out,
    background-color 300ms ease-in-out;

  &.is-animation-pending {
    animation: framesAnimations $animationTime ease-in-out forwards;
  }

  &.is-visible {
    transform: translateY(0) scale(1);
    opacity: 1;

    &:hover {
      transform: translateY(-10px);
      background-color: $cl-custom-3;
    }
  }
}

.content {
  background: linear-gradient(135deg, $cl-custom-6, $cl-custom-7);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid $cl-custom-1;
  transition: background 300ms ease-in-out;

  &:hover {
    background: linear-gradient(135deg, $cl-custom-6, $cl-custom-7 30%);
  }
}

.name {
  color: $cl-custom-4;
  font-size: 24px;
  margin: 0 0 16px 0;
  transform: translateX(-100px) rotateZ(-5deg);
  opacity: 0;

  .is-animation-pending & {
    animation: nameAnimation $animationTime ease-in-out forwards;
  }

  .is-visible & {
    transform: translateX(0) rotateZ(0deg);
    opacity: 1;
  }
}

.position {
  color: $cl-yellow-400;
  font-size: 18px;
  transform: translateX(-15px) translateY(25px);
  opacity: 0;

  .is-animation-pending & {
    animation: positionAnimation $animationTime ease-in-out forwards;
  }

  .is-visible & {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
}

.list {
  color: $cl-custom-4;
  padding-left: 16px;

  .is-animation-pending & {
    animation: dutiesAnimations $animationTime ease-in-out forwards;
  }
}
</style>
