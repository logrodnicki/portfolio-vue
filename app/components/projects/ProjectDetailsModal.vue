<template>
  <Teleport defer to="body">
    <div v-if="isVisible && project" class="project-details-modal" :class="classes">
      <div class="background" />
      <div v-click-outside="handleClickOutside" class="content">
        <div class="header">
          <h3 class="name">{{ name }}</h3>
          <CloseButton label="X" @click="handleClose" />
        </div>
        <div class="details">
          <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>

          <span v-if="description" class="description">{{ description }}</span>

          <Link v-if="link" :href="link" label="Website" />

          <div class="technologies">
            <Technology
              v-for="technology in technologies"
              :key="technology.name"
              :technology="technology"
            />
          </div>
        </div>

        <div class="footer"></div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Technology from '~/components/projects/Technology.vue';
import type { IProject } from '~/types/projectsTypes';
import CloseButton from '~/components/common/buttons/CloseButton.vue';
import Link from '~/components/common/buttons/Link.vue';

interface Props {
  isVisible: boolean;
  project: IProject | null | undefined;
}

const { project, isVisible } = defineProps<Props>();
const emit = defineEmits(['close']);

const { name, subtitle, technologies, link, description } = project || {};

const isClosing = ref(false);
const isOpeningFinished = ref(false);

const classes = computed(() => ({
  'is-closing': isClosing.value,
}));

const handleClose = () => {
  isClosing.value = true;

  const timeout = setTimeout(() => {
    isClosing.value = false;
    isOpeningFinished.value = false;

    clearTimeout(timeout);
    emit('close');
  }, 300);
};

const handleClickOutside = () => {
  if (!isOpeningFinished.value) {
    isOpeningFinished.value = true;

    return;
  }

  handleClose();
};
</script>

<style lang="scss" scoped>
@keyframes openAnimation {
  from {
    transform: scale(0.3);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes closeAnimation {
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.3);
    opacity: 0;
  }
}

.project-details-modal {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-index-modal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  height: 100%;
  width: 100%;
  background: rgba($cl-slate-950, 0.95);
  position: absolute;
  z-index: $z-index-modal-background;
}

.content {
  background: linear-gradient(135deg, $cl-custom-6, $cl-custom-7);
  border: 1px solid $cl-violet-900;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 600px;
  animation: openAnimation 500ms forwards ease-out;

  .is-closing & {
    animation: closeAnimation 500ms forwards ease-out;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid $cl-violet-900;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.name {
  color: $cl-custom-4;
  font-size: 24px;
  margin: 0;
}

.subtitle {
  color: $cl-custom-4;
  font-size: 20px;
}

.technologies {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.description {
  color: $cl-custom-4;
}
</style>
