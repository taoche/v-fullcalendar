<template>
  <div class="v-fullcalendar"/>
</template>

<script>
import { Calendar } from "@fullcalendar/core";

import { assert } from "./util";
import { isValidKey } from "./options";
import { validFullcalendarEvents } from "./events";

export default {
  name: "VFullcalendar",
  props: {
    config: {
      type: Object,
      required: true
    },
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    registerEvent() {
      return validFullcalendarEvents.filter(item =>
        this.$listeners.hasOwnProperty(item)
      );
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
  created() {
    this.validConfig();
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
        ...this.registerEventHandle
      };
    },
    validConfig() {
      Object.keys(this.config).forEach(key => {
        if (!isValidKey(key)) {
          assert(`your config has not verifiable literals ${key}`);
        }
      });
    }
  }
};
</script>
