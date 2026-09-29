<template>
  <Page class="contact">
    <PageHeader title="Contact" />

    <div class="content">
      <div class="form-wrapper">
        <Form :rules="rules" :form="form" class="form" @submit="handleSend">
          <FormElement name="name" label="Name" required>
            <InputText v-model="form.name" name="name" type="text" />
          </FormElement>

          <FormElement name="email" label="Email" required>
            <InputText v-model="form.email" name="email" type="email" />
          </FormElement>

          <FormElement name="text" label="Text" required>
            <InputTextArea v-model="form.text" name="text" />
          </FormElement>

          <Button label="Submit" type="submit" class="submit-button" icon-name="websymbol:mail" />
        </Form>
      </div>
    </div>
  </Page>
</template>

<script setup lang="ts">
import Page from '~/components/common/Page.vue';
import PageHeader from '~/components/common/PageHeader.vue';
import FormElement from '~/components/common/form/FormElement.vue';
import InputText from '~/components/common/form/InputText.vue';
import InputTextArea from '~/components/common/form/InputTextArea.vue';
import type { IContactForm } from '~/types/contactType';
import type { IFormRules } from '~/types/formTypes';
import { EFormRule } from '~/types/formTypes';
import Form from '~/components/common/form/Form.vue';
import Button from '~/components/common/buttons/Button.vue';

const form = ref<IContactForm>({
  name: '',
  email: '',
  text: '',
});

const rules = ref<IFormRules>({
  name: [EFormRule.REQUIRED],
  email: [EFormRule.REQUIRED],
  text: [EFormRule.REQUIRED],
});

const handleSend = () => {
  const subject = `${form.value.name} - contact from Website`;

  window.open(`mailto:${form.value.email}?subject=${subject}&body=${form.value.text}`);
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
}

.form-wrapper {
  background: linear-gradient(135deg, $cl-custom-6, $cl-custom-7);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid $cl-custom-1;
  max-width: 600px;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  > div {
    width: 100%;
  }
}

.submit-button {
  width: 200px;
}
</style>
