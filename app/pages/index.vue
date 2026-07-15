<template>
  <div class="home">
    <div class="content">
      <div class="box">
        <p class="main-text">Hello There!</p>
        <AnimateFadeText text="I am a Frontend Developer" class="small-text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AnimateFadeText from '~/components/animations/AnimateFadeText.vue';
</script>

<style lang="scss" scoped>
@use '~/assets/style/main.scss';

.text {
  color: $cl-yellow-300;
}

.home {
  background: $cl-neutral-950;
  height: 100vh;
  padding: 128px;
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
  font-size: 24px;
}
</style>
