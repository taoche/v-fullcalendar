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
    },
    initConfig() {
      return {
        ...this.config,
        events: this.events
      };
    }
  },
  watch: {
    initConfig(config) {
      this.calendar.resetOptions({ ...config, ...this.registerEventHandle });
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
      const calendar = new Calendar(this.$el, {
        ...this.initConfig,
        ...this.registerEventHandle
      });

      calendar.render();
      this.calendar = calendar;
    },
    getView() {
      return this.calendar.view;
    },
    gotoDate(date) {
      this.calendar.gotoDate(date);
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
