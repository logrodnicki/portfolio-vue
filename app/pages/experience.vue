<template>
  <div class="experience">
    <h1 class="header">Experience</h1>

    <div class="content">
      <div class="list">
        <JobPosition v-for="item in leftColumnItems" :key="item.name" :job-position="item" />
      </div>

      <div class="list right-list">
        <JobPosition v-for="item in rightColumnItems" :key="item.name" :job-position="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import JobPosition from '~/components/experience/JobPosition.vue';
import { experience } from '~/data/data';
import type { IJobPosition } from '~/types/experienceTypes';

const leftColumnItems = computed((): IJobPosition[] => {
  return experience.filter((item, index) => !index || index % 2 === 0);
});

const rightColumnItems = computed((): IJobPosition[] => {
  return experience.filter((item, index) => index % 2 !== 0);
});
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
</style>
