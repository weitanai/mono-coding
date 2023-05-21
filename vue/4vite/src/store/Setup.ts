import {defineStore, storeToRefs} from 'pinia';
import {ref, toRef} from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    function increment() {
      count.value++
    }
  
    return { count, increment }
  });

export function useCounter() {
  const c1 =  ref(0);
  function ic() {
    c1.value++;
  }
  return {c1, ic}
}

