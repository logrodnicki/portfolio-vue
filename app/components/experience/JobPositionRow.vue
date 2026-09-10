<template>
  <div class="job-position-row" :class="classes">
    <JobPosition :job-position="jobPosition" class="job-position" />
    <TimeLine class="time-line" />
    <DateChip :date="formattedDate" class="date-chip" />
  </div>
</template>

<script lang="ts" setup>
import JobPosition from '~/components/experience/JobPosition.vue';
import type { IJobPosition } from '~/types/experienceTypes';
import DateChip from '~/components/common/DateChip.vue';
import TimeLine from '~/components/experience/TimeLine.vue';
import { MARGIN_IN_PX } from '~/helpers/experienceHelpers';

interface Props {
  jobPosition: IJobPosition;
  index: number;
}

const { jobPosition, index } = defineProps<Props>();

const formattedDate = `${jobPosition.startDate}-${jobPosition.endDate}`;

const isOdd = index % 2 !== 0;

const classes = computed(() => ({
  'is-odd': isOdd,
}));

const formattedMargin = `${MARGIN_IN_PX}px`;
</script>

<style lang="scss" scoped>
.job-position-row {
  display: grid;
  grid-template-columns: 1fr 64px 1fr;
  grid-template-areas: 'jobPosition timeLine dateChip';

  &.is-odd {
    grid-template-areas: 'dateChip timeLine jobPosition';
  }
}

.job-position {
  grid-area: jobPosition;
}

.time-line {
  grid-area: timeLine;
}

.date-chip {
  grid-area: dateChip;

  .is-odd & {
    margin-left: auto;
  }
}

.job-position,
.date-chip {
  margin: v-bind(formattedMargin) 0;
}
</style>
