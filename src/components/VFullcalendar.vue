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
    this.calendar = new Calendar(this.$el, this.initConfig());
    this.calendar.render();
  },
  destroyed() {
    this.calendar.destroy();
  },
  methods: {
    initConfig() {
      return {
        ...this.config,
        events: this.events,
        dateClick: this.dateClick,
        eventClick: this.eventClick
      };
    },
    dateClick(info) {
      this.$emit("dateClick", info);
    },
    eventClick(info) {
      this.$emit("eventClick", info);
    }
  }
};
</script>
