import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IFormErrors } from '~/types/formTypes';

export const useFormErrorsStore = defineStore('formErrors', () => {
  const errors = ref<IFormErrors>({});

  function addInputError(key: string, inputError: string) {
    const allErrors = { ...errors.value };

    if (!allErrors[key]) {
      allErrors[key] = [];
    }

    allErrors[key].push(inputError);

    errors.value = allErrors;
  }

  function clearInputErrors(key: string) {
    const allErrors = { ...errors.value };

    allErrors[key] = [];

    errors.value = allErrors;
  }

  return { errors, addInputError, clearInputErrors };
});
