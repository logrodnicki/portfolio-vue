<template>
  <div class="job-position-row-mobile" :class="classes">
    <TimeLine class="time-line" :index="index" />
    <DateChip :date="formattedDate" class="date-chip" />
    <JobPosition :job-position="jobPosition" class="job-position" />
  </div>
</template>

<script lang="ts" setup>
import JobPosition from '~/components/experience/JobPosition.vue';
import type { IJobPosition } from '~/types/experienceTypes';
import DateChip from '~/components/common/DateChip.vue';
import TimeLine from '~/components/experience/TimeLine.vue';

interface Props {
  jobPosition: IJobPosition;
  index: number;
}

const { jobPosition, index } = defineProps<Props>();

const formattedDate = `${jobPosition.startDate} - ${jobPosition.endDate}`;

const isOdd = index % 2 !== 0;

const classes = computed(() => ({
  'is-odd': isOdd,
}));
</script>

<style lang="scss" scoped>
.job-position-row-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-chip {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 32px;
}

.time-line {
  height: 100px;
}
</style>
