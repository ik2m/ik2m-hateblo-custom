<template>
  <p>
    今週は{{ year }}年の第{{ weekCount }}週目です🐠<br />
    <small>(全{{ weekMax }}週)</small>
  </p>
</template>
<script>
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);
export default {
  computed: {
    now() {
      return dayjs();
    },
    year() {
      return this.now.year();
    },
    weekCount() {
      return this.now.isoWeek();
    },
    weekMax() {
      const weekNumOfLastDay = this.now.endOf("years").isoWeek();
      const weekNumOf1WeefBefore = this.now
        .endOf("years")
        .subtract(1, "week")
        .isoWeek();
      // 1年の最後の日が来年の1週目となる場合があるので雑に対応
      return Math.max(weekNumOfLastDay, weekNumOf1WeefBefore);
    },
  },
};
</script>

