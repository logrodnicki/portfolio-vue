<template>
  <div class="experience">
    <h1 class="header">Experience</h1>

    <div class="content-new">
      <JobPositionRow
        v-for="(jobPosition, index) in experience"
        :key="jobPosition.name"
        :job-position="jobPosition"
        :index="index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { experience } from '~/data/data';
import JobPositionRow from '~/components/experience/JobPositionRow.vue';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.experience {
  background: $cl-neutral-950;
  padding: 64px;
  box-sizing: border-box;
}

.header {
  font-size: 64px;
  line-height: 74px;
  color: $cl-custom-4;
  margin-top: 0;
  margin-bottom: 96px;
}

.content {
  display: flex;
  gap: 48px;
  justify-content: center;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
}

.right-list {
  padding-top: 96px;
}

.content-new {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
