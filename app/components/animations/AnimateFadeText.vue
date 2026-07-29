<template>
  <span class="animate-fade-text">
    <span
      v-for="(letter, index) in text"
      :key="getKey(index, letter)"
      class="letter"
      :style="getLetterStyle(index)"
    >
      {{ letter }}
    </span>
  </span>
</template>

<script lang="ts" setup>
interface Props {
  text: string;
  delay?: number;
}

const { text, delay = 50 } = defineProps<Props>();

const getKey = (index: number, letter: string) => {
  return `${letter}-${index}`;
};

const getLetterStyle = (index: number) => {
  return {
    animationDelay: `${index * delay}ms`,
  };
};
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

@keyframes fadeOut {
  to {
    opacity: 1;
  }
}

.letter {
  opacity: 0;
  animation: fadeOut 150ms ease-in-out forwards;
}
</style>
