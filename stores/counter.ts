// stores/counter.js
import { acceptHMRUpdate, defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { menu: false, bar: "" };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {},
});
