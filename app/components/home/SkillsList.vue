<template>
  <div class="skills-list">
    <Skill v-for="(skill, index) in skills" :key="skill.id" :skill="skill" :index="index" /> />
  </div>
</template>

<script lang="ts" setup>
import Skill from '@/components/home/Skill.vue';
import { skills } from '~/data/data';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  vertical-align: middle;
}
</style>
