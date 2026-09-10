import { onMounted, ref } from 'vue';

const useIntersectionObserver = (elementRef: Ref<HTMLElement | null>) => {
  const isVisible = ref(false);
  let observer: null | IntersectionObserver = null;

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
        threshold: 0.5,
      }
    );
  });

  onMounted(() => {
    if (!elementRef.value || !observer) {
      return;
    }

    observer.observe(elementRef.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return {
    isVisible,
  };
};

export default useIntersectionObserver;
