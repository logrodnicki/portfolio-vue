<template>
  <div ref="section" class="date-chip" :class="classes">
    {{ date }}
  </div>
</template>

<script lang="ts" setup>
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import { ref } from 'vue';

interface Props {
  date: string;
}

defineProps<Props>();

const section = ref<HTMLElement | null>(null);

const { isVisible } = useIntersectionObserver(section);

const classes = computed(() => ({
  'is-visible': isVisible.value,
}));
</script>

<style lang="scss" scoped>
@keyframes show {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.date-chip {
  padding: 8px 16px;
  border-radius: 16px;
  background-color: $cl-custom-3;
  color: $cl-custom-4;
  height: fit-content;
  width: 180px;
  text-align: center;
  opacity: 0;
  transform: translateY(-10px);

  &.is-visible {
    animation: 750ms show forwards ease-in-out;
  }
}
</style>
