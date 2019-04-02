# v-fullcalendar

Built upon [fullcalendar](https://github.com/fullcalendar) `v4.1.0`+ and depends on [Vue.js](https://vuejs.org/) `v2.2.6`+.

## Installation

### npm or yarn

```bash
$ npm install @fullcalendar/core v-fullcalendar
```

```bash
$ yarn add @fullcalendar/core v-fullcalendar
```

### The plug-in you need to use
plugin list [plugin-index](https://fullcalendar.io/docs/plugin-index)

```bash
$ yarn add @fullcalendar/daygrid @fullcalendar/interaction ...
```

## Usage

### ES Modules with npm & Vue Loader (Recommended)

```js
import Vue from 'vue'
import VFullcalendar from 'v-fullcalendar' // refers to components/ECharts.vue in webpack

// import fullcalendar plugin
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// register component to use
Vue.component('VFullcalendar', VFullcalendar)

// in template
<VFullcalendar :config="config" :events="events" />

// in vue data function
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
}
```