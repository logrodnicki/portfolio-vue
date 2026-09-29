let clickEventHandler = () => { };
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('clickOutside', {
        beforeMount(element, binding) {
            clickEventHandler = (event) => {
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
