<template>
  <h1 class="page-header">{{ title }}</h1>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.page-header {
  font-size: 64px;
  line-height: 74px;
  color: $cl-custom-4;
  margin-top: 0;
  margin-bottom: 96px;
}
</style>
