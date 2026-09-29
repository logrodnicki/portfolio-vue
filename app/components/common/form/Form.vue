<template>
  <form @submit="handleSubmit">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { EFormRule, type IFormErrors, type IFormRules } from '~/types/formTypes';

interface Props {
  rules: IFormRules;
  form: Record<string, unknown>;
}

const props = defineProps<Props>();
const emit = defineEmits(['submit']);

const { rules, form } = props;

const formErrorsStore = useFormErrorsStore();

const errors = computed(() => formErrorsStore.errors);

const handleSubmit = (event: Event): void => {
  event.preventDefault();

  let isAnyError = false;

  Object.entries(rules).forEach(([key, rules]) => {
    rules.forEach((rule) => {
      if (rule === EFormRule.REQUIRED && !form[key]) {
        formErrorsStore.addInputError(key, 'Field is required');

        isAnyError = true;
      }
    });
  });

  if (isAnyError) {
    return;
  }

  emit('submit');
};
</script>
