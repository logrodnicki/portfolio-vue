<template>
  <div class="test">
    <TresCanvas window-size class="canvas">
      <ExperienceBackgroundContent :time="time" />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import ExperienceBackgroundContent from '~/components/backgrounds/experience/ExperienceBackgroundContent.vue';

const time = ref(1);
const interval = ref<NodeJS.Timeout | null>(null);

onMounted(() => {
  interval.value = setInterval(() => {
    // time.value += 0.007;
  }, 100);
});

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
</script>

<style lang="scss" scoped>
.canvas {
  background: orange;
}

.test {
  background: red;
}
</style>
