<template>
  <input
    :id="name"
    class="input-text"
    :type="type"
    :value="modelValue"
    autocomplete="off"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  type: string;
  modelValue: string;
}

const props = defineProps<Props>();
const { name, type } = props;

const emit = defineEmits(['update:modelValue']);

const formErrorsStore = useFormErrorsStore();

const modelValue = computed(() => props.modelValue);

const handleInput = (event: Event) => {
  formErrorsStore.clearInputErrors(name);

  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.input-text {
  height: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;
  padding: 0 16px;
  background-color: $cl-custom-4;
  color: $cl-custom-6;
  border: 2px solid $cl-custom-4;
  outline: $cl-custom-3;
  transition: border-color 300ms ease-in-out;
  box-sizing: border-box;

  &:focus {
    border-color: $cl-custom-3;
  }

  .has-errors & {
    border-color: $cl-error;
  }
}
</style>
