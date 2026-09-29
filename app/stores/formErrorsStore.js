import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useFormErrorsStore = defineStore('formErrors', () => {
    const errors = ref({});
    function addInputError(key, inputError) {
        const allErrors = { ...errors.value };
        if (!allErrors[key]) {
            allErrors[key] = [];
        }
        allErrors[key].push(inputError);
        errors.value = allErrors;
    }
    function clearInputErrors(key) {
        const allErrors = { ...errors.value };
        allErrors[key] = [];
        errors.value = allErrors;
    }
    return { errors, addInputError, clearInputErrors };
});
