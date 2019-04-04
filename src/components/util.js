export function assert(message) {
  if (process.env.NODE_ENV !== "production") {
    // useful when testing
    // console.warn(`[v-fullcalendar] ${message}`)
    throw new Error(`[v-fullcalendar] ${message}`);
  }
}
