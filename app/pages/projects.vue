<template>
  <Page class="projects">
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
  </Page>
</template>

<script lang="ts" setup>
import PageHeader from '~/components/common/PageHeader.vue';
import Project from '~/components/projects/Project.vue';
import { projects } from '~/data/data';
import ProjectDetailsModal from '~/components/projects/ProjectDetailsModal.vue';
import type { IProject } from '~/types/projectsTypes';
import Page from '~/components/common/Page.vue';

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
