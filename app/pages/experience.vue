<template>
  <div class="experience">
    <PageHeader title="Experience" />∂

    <div class="content">
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
import { HEADER_HEIGHT_IN_PX } from '~/helpers/commonHelpers';
import PageHeader from '~/components/common/PageHeader.vue';

const headerHeight = `${HEADER_HEIGHT_IN_PX}px`;
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.experience {
  background: $cl-neutral-950;
  padding: 64px;
  box-sizing: border-box;
  min-height: calc(100vh - v-bind(headerHeight));
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
  flex-direction: column;
  align-items: center;
}
</style>
