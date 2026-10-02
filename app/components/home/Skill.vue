<template>
  <div class="skill" :style="styles">
    <div class="image-wrapper">
      <img class="image" :src="skill.logoSrc" :alt="skill.label" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ISkill } from '~/types/skillsTypes';

interface Props {
  skill: ISkill;
  index: number;
}

const { skill, index } = defineProps<Props>();

const styles = {
  animationDelay: `${index * 100}ms`,
};
</script>

<style scoped lang="scss">
@use '~/assets/style/main.scss';

@keyframes fadeOut {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.skill {
  height: 64px;
  width: 64px;
  background-color: $cl-custom-4;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeOut 1000ms ease-in-out forwards;

  @media (min-width: $breakpoint-small-device) {
    height: 96px;
    width: 96px;
  }
}

.image-wrapper {
  height: 48px;
  width: 48px;
  display: flex;

  @media (min-width: $breakpoint-small-device) {
    height: 64px;
    width: 64px;
  }
}

.image {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>
