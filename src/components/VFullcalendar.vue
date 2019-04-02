<template>
  <div class="v-fullcalendar"/>
</template>

<script>
import { Calendar } from "@fullcalendar/core";

const HANDLE_EVENT = [
  "viewSkeletonRender",
  "datesRender",
  "datesDestroy",
  "dayRender",
  "windowResize",
  "dateClick",
  "eventClick",
  "eventMouseEnter",
  "eventMouseLeave",
  "select",
  "unselect",
  "eventPositioned",
  "eventDestroy",
  "eventDragStart",
  "eventDragStop",
  "eventDrop",
  "eventResizeStart",
  "eventResizeStop",
  "eventReceive",
  "eventResize",
  "eventLeave",
  "eventResizableFromStart",
  "allDayMaintainDuration",
  "drop"
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
  computed: {
    registerEvent() {
      return HANDLE_EVENT.filter(item => this.$listeners.hasOwnProperty(item));
    }
  },
  watch: {
    events(val) {
      this.calendar.getEvents().forEach(event => event.remove());
      val.forEach(item => this.calendar.addEvent(item));
    },
    config() {
      this.calendar.destroy();
      this.instance();
    }
  },
  mounted() {
    this.instance();
  },
  beforeDestroy() {
    this.calendar.destroy();
  },
  methods: {
    instance() {
      const calendar = new Calendar(this.$el, this.initConfig());
      calendar.render();

      this.calendar = calendar;
    },
    initConfig() {
      return {
        ...this.config,
        events: this.events,
        ...this.registerEventHandle()
      };
    },
    registerEventHandle() {
      return this.registerEvent.reduce(
        (pre, next) => ({
          ...pre,
          [next]: (...args) => {
            this.$emit(next, ...args);
          }
        }),
        {}
      );
    }
  }
};
</script>
