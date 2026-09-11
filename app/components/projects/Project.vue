<template>
  <div class="project">
    <span class="name">{{ name }}</span>

    <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>

    <div class="technologies">
      <Technology
        v-for="technology in project.technologies"
        :key="technology.name"
        :technology="technology"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProject } from '~/types/projectsTypes';
import Technology from '~/components/projects/Technology.vue';

interface Props {
  project: IProject;
}

const { project } = defineProps<Props>();

const { name, description, subtitle } = project || {};
</script>

<style lang="scss" scoped>
.project {
  background: linear-gradient(135deg, $cl-custom-6, $cl-custom-7);
  border: 1px solid $cl-violet-900;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.name {
  color: $cl-custom-4;
  font-size: 24px;
}

.subtitle {
  color: $cl-custom-3;
  font-size: 20px;
}

.technologies {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
