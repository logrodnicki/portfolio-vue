let clickEventHandler: (this: HTMLElement, ev: PointerEvent) => unknown = () => {};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('clickOutside', {
    beforeMount(element, binding) {
      clickEventHandler = (event: Event) => {
        if (!element.contains(event.target)) {
          binding.value(event);
        }
      };
      document.body.addEventListener('click', clickEventHandler);
    },
    unmounted() {
      document.body.removeEventListener('click', clickEventHandler);
    },
  });
});
