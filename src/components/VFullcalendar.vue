<template>
  <div class="v-fullcalendar"/>
</template>

<script>
import { Calendar } from "@fullcalendar/core";

export default {
  name: "VFullcalendar",
  props: {
    config: {
      type: Object
    },
    events: {
      type: Array
    }
  },
  watch: {
    events(val) {
      this.calendar.getEvents().forEach(event => event.remove());
      val.forEach(item => this.calendar.addEvent(item));
    }
  },
  mounted() {
    this.calendar = new Calendar(this.$el, {
      ...this.config,
      events: this.events
    });

    this.calendar.render();
  },
  destroyed() {
    this.calendar.destroy();
  }
};
</script>
