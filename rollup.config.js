const vue = require("rollup-plugin-vue");
const buble = require("rollup-plugin-buble");
const { terser } = require("rollup-plugin-terser");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");

export default {
  input: "src/components/VFullcalendar.vue",
  output: {
    file: "dist/v-fullcalendar.js",
    name: "VFullcalendar",
    format: "umd",
    globals: {
      vue: "Vue",
      "@fullcalendar/core": "Calendar"
    }
  },
  external: ["vue", "@fullcalendar/core"],
  plugins: [
    resolve(),
    commonjs(),
    vue({
      compileTemplate: true,
      css: true
    }),
    buble({
      objectAssign: true
    }),
    terser({
      compress: {
        global_defs: {
          __DEV__: process.env.NODE_ENV !== "production"
        }
      }
    })
  ]
};
