<template>
  <textarea
    :id="name"
    class="input-text-area"
    :value="modelValue"
    :rows="rows"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  modelValue: string;
  rows?: number;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const { rows = 10, name } = props;

const formErrorsStore = useFormErrorsStore();

const modelValue = computed(() => props.modelValue);

const handleInput = (event: Event) => {
  formErrorsStore.clearInputErrors(name);

  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss">
.input-text-area {
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
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
