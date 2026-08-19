<template>
  <div ref="section" class="job-position" :class="classes">
    <div class="content">
      <h5 class="name">{{ name }}</h5>

      <p class="position">{{ position }}</p>

      <p class="dates">{{ dates }}</p>

      <ul class="list">
        <li v-for="(duty, index) in duties" :key="index">{{ duty }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IJobPosition } from '~/types/experienceTypes';
import { onMounted, ref } from 'vue';

interface Props {
  jobPosition: IJobPosition;
}

const { jobPosition } = defineProps<Props>();

const section = ref<HTMLElement | null>(null);
const isVisible = ref(false);

let observer: null | IntersectionObserver = null;

const { name, position, duties, startDate, endDate } = jobPosition || {};

const dates = `${startDate} - ${endDate}`;

const classes = computed(() => ({
  'is-visible': isVisible.value,
}));

onBeforeMount(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    {
      threshold: 0.8,
    }
  );
});

onMounted(() => {
  if (!section.value || !observer) {
    return;
  }

  observer.observe(section.value);
});
</script>

<style lang="scss" scoped>
$animationTime: 750ms;

@keyframes show {
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

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

@keyframes datesAnimations {
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
  background: $cl-violet-900;
  width: 384px;
  border-radius: 16px;
  opacity: 0;
  transform: translateY(-25px) scale(0.9);

  &.is-visible {
    animation: framesAnimations $animationTime ease-in-out forwards;
  }
}

.content {
  background: $cl-custom-6;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid $cl-custom-1;
}

.name {
  color: $cl-custom-4;
  font-size: 24px;
  margin: 0 0 16px 0;
  transform: translateX(-100px) rotateZ(-5deg);
  opacity: 0;
  animation: nameAnimation $animationTime ease-in-out forwards;
}

.position {
  color: $cl-yellow-400;
  font-size: 18px;
  transform: translateX(-15px) translateY(25px);
  opacity: 0;
  animation: positionAnimation $animationTime ease-in-out forwards;
}

.list {
  color: $cl-custom-4;
  animation: dutiesAnimations $animationTime ease-in-out forwards;
}

.dates {
  color: $cl-slate-400;
  transform: translateX(-15px) translateY(25px);
  opacity: 0;
  animation: datesAnimations $animationTime ease-in-out forwards;
}
</style>
