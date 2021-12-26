<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      View all
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterNav",
  props: {
    current: String as () => string,
  },
  methods: {
    updateFilter(by: string): void {
      this.$emit("filterChange", by);
    },
  },
});
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
