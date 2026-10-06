<template>
  <div class="projects">
    <PageHeader title="Projects" />

    <div class="list">
      <Project
        v-for="project in projects"
        :key="project.name"
        :project="project"
        @open-modal="handleOpenModal"
      />
    </div>

    <ProjectDetailsModal
      v-if="selectedProject"
      :is-visible="isModalVisible"
      :project="selectedProject"
      @close="handleCloseModal"
    />
  </div>
</template>

<script lang="ts" setup>
import { HEADER_HEIGHT_IN_PX } from '~/helpers/commonHelpers';
import PageHeader from '~/components/common/PageHeader.vue';
import Project from '~/components/projects/Project.vue';
import { projects } from '~/data/data';
import ProjectDetailsModal from '~/components/projects/ProjectDetailsModal.vue';
import type { IProject } from '~/types/projectsTypes';

const headerHeight = `${HEADER_HEIGHT_IN_PX}px`;

const isModalVisible = ref(false);
const selectedProject = ref<IProject | null>();

const handleOpenModal = (project: IProject) => {
  selectedProject.value = project;
  isModalVisible.value = true;
};

const handleCloseModal = () => {
  selectedProject.value = null;
  isModalVisible.value = false;
};
</script>

<style lang="scss" scoped>
.projects {
  background: $cl-neutral-950;
  padding: 32px;
  box-sizing: border-box;
  min-height: calc(100vh - v-bind(headerHeight));

  @media (min-width: $breakpoint-small-device) {
    padding: 64px;
  }
}

.list {
  gap: 32px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-small-device) {
    gap: 64px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}
</style>
