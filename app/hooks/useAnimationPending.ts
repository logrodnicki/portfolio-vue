import { ref } from 'vue';

const useAnimationPending = (isVisible: Ref<boolean>, delay: number = 750) => {
  const isAnimationPending = ref(false);

  watch(isVisible, () => {
    if (!isVisible.value) {
      return;
    }

    isAnimationPending.value = true;

    const timeout = setTimeout(() => {
      isAnimationPending.value = false;
      clearTimeout(timeout);
    }, delay);
  });

  return {
    isAnimationPending,
  };
};

export default useAnimationPending;
