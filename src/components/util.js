export function assert(condition, message) {
  if (process.env.NODE_ENV !== "production" && !condition) {
    // useful when testing
    // console.warn(`[v-fullcalendar] ${message}`)
    throw new Error(`[v-fullcalendar] ${message}`);
  }
}
