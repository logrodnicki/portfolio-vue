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
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 50,
  },
});

const getKey = (index: number, letter: string) => {
  return `${letter}-${index}`;
};

const getLetterStyle = (index: number) => {
  return {
    animationDelay: `${index * props.delay}ms`,
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
