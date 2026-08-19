<template>
  <div class="home page">
    <div class="content">
      <div class="box">
        <p class="main-text">Hello There!</p>
        <AnimateFadeText text="I am a Frontend Developer" class="small-text" />
        <SkillsList class="skills-list" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AnimateFadeText from '~/components/animations/AnimateFadeText.vue';
import SkillsList from '~/components/home/SkillsList.vue';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.home {
  background: $cl-neutral-950;
  padding: 128px;
  box-sizing: border-box;
  min-height: calc(100vh - 64px);
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.main-text {
  font-size: 96px;
  color: $cl-custom-4;
  margin: 0;
}

.small-text {
  color: $cl-yellow-400;
  font-size: 36px;
  white-space: nowrap;
}

.skills-list {
  margin-top: 64px;
}
</style>
