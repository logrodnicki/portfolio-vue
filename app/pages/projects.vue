<template>
  <div class="projects">
    <PageHeader title="Projects" />

    <div class="list">
      <Project v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { HEADER_HEIGHT_IN_PX } from '~/helpers/commonHelpers';
import PageHeader from '~/components/common/PageHeader.vue';
import Project from '~/components/projects/Project.vue';
import { projects } from '~/data/data';

const headerHeight = `${HEADER_HEIGHT_IN_PX}px`;
</script>

<style lang="scss" scoped>
.projects {
  background: $cl-neutral-950;
  padding: 64px;
  box-sizing: border-box;
  min-height: calc(100vh - v-bind(headerHeight));
}

.list {
  gap: 64px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
</style>
