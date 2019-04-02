<template>
  <div class="v-fullcalendar"/>
</template>

<script>
import { Calendar } from "@fullcalendar/core";

const EVENTS_HANDLE_EVENT = [
  "eventClick",
  "eventMouseEnter",
  "eventMouseLeave"
];

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
        ...this.registerEventHandle()
      };
    },
    dateClick(info) {
      this.$emit("dateClick", info);
    },
    registerEventHandle() {
      return EVENTS_HANDLE_EVENT.reduce((pre, next) => {
        return {
          ...pre,
          [next]: info => this.$emit(next, info)
        };
      }, {});
    }
  }
};
</script>
