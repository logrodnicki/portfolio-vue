<template>
  <div class="form-element" :class="classes">
    <label class="label" :for="name">
      {{ label }}
    </label>

    <slot />

    <div class="errors">
      <span v-for="(error, index) in errors" :key="index" class="error">{{ error }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  name: string;
  label: string;
  required?: boolean;
}

const props = defineProps<Props>();
const { name, required } = props;

const formErrorsStore = useFormErrorsStore();

const allErrors = computed(() => formErrorsStore.errors);

const errors = computed(() => {
  if (!allErrors?.value) {
    return [];
  }

  return allErrors.value[name];
});

const classes = computed(() => ({
  'has-errors': Boolean(errors?.value?.length),
  required: required,
}));
</script>

<style lang="scss" scoped>
.form-element {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  color: $cl-custom-4;
  display: flex;
  gap: 8px;

  .required & {
    &::after {
      content: '*';
    }
  }
}

.errors {
  height: 0;
  transition: height 300ms ease-in-out;
  overflow-y: clip;

  .has-errors & {
    height: calc-size(max-content, size);
  }
}

.error {
  color: $cl-error;
}
</style>
