import { defineStore } from "pinia";
import { ref, computed } from "vue";

// for options api

// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 0,
//     name: "Eduardo",
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//     tripleCount: (state) => state.count * 3,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// for composition api

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("w3 coders");

  const doubleCount = computed(() => {
    count.value * 2;
  });

  function increment() {
    count.value++;
  }

  return { count, name, increment, doubleCount };
});
