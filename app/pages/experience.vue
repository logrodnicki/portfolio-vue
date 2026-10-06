<template>
  <Page class="experience">
    <PageHeader title="Experience" />∂

    <div class="content">
      <JobPositionRow
        v-for="(jobPosition, index) in experience"
        :key="jobPosition.name"
        :job-position="jobPosition"
        :index="index"
      />
    </div>

    <div class="content-mobile">
      <JobPositionRowMobile
        v-for="(jobPosition, index) in experience"
        :key="jobPosition.name"
        :job-position="jobPosition"
        :index="index"
      />
    </div>
  </Page>
</template>

<script lang="ts" setup>
import { experience } from '~/data/data';
import JobPositionRow from '~/components/experience/JobPositionRow.vue';
import PageHeader from '~/components/common/PageHeader.vue';
import JobPositionRowMobile from '~/components/experience/JobPositionRowMobile.vue';
import Page from '~/components/common/Page.vue';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.experience {
  background: $cl-neutral-950;
}

.header {
  font-size: 64px;
  line-height: 74px;
  color: $cl-custom-4;
  margin-top: 0;
  margin-bottom: 96px;
}

.content {
  display: none;
  flex-direction: column;
  align-items: center;

  @media (min-width: $breakpoint-small-device) {
    display: flex;
  }
}

.content-mobile {
  flex-direction: column;
  align-items: center;
  display: flex;

  @media (min-width: $breakpoint-small-device) {
    display: none;
  }
}
</style>
