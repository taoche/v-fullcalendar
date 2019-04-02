<template>
  <div id="app">
    <button @click="handleAddSomeEvents">add some events</button>
    <button @click="handleRemoveSomeEvents">remove some events</button>
    <div class="v-fullcalendar">
      <VFullcalendar ref="VFullcalendar" :config="config" :events="events"></VFullcalendar>
    </div>
  </div>
</template>

<script>
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

import VFullcalendar from "../components/VFullcalendar";

export default {
  name: "app",
  components: {
    VFullcalendar
  },
  data() {
    return {
      config: {
        plugins: [interactionPlugin, dayGridPlugin],
        defaultDate: "2019-03-12",
        editable: true,
        eventLimit: true // allow "more" link when too many events
      },
      events: [
        {
          title: "All Day Event",
          start: "2019-03-01"
        },
        {
          title: "Long Event",
          start: "2019-03-07",
          end: "2019-03-10"
        },
        {
          groupId: 999,
          title: "Repeating Event",
          start: "2019-03-09T16:00:00"
        },
        {
          groupId: 999,
          title: "Repeating Event",
          start: "2019-03-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2019-03-11",
          end: "2019-03-13"
        },
        {
          title: "Meeting",
          start: "2019-03-12T10:30:00",
          end: "2019-03-12T12:30:00"
        },
        {
          title: "Lunch",
          start: "2019-03-12T12:00:00"
        },
        {
          title: "Meeting",
          start: "2019-03-12T14:30:00"
        },
        {
          title: "Happy Hour",
          start: "2019-03-12T17:30:00"
        },
        {
          title: "Dinner",
          start: "2019-03-12T20:00:00"
        },
        {
          title: "Birthday Party",
          start: "2019-03-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2019-03-28"
        }
      ]
    };
  },
  methods: {
    handleAddSomeEvents() {
      this.events = [
        ...this.events,
        {
          title: "add some event for test 001",
          start: "2019-04-01"
        },
        {
          title: "add some event for test 002",
          start: "2019-04-02"
        }
      ];
    },
    handleRemoveSomeEvents() {
      this.events = this.events.filter(item =>
        item.start.indexOf("2019-03-12")
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-fullcalendar {
  width: 900px;
  margin: 0 auto;
}
</style>
