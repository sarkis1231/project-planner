<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <p>{{ project.title }}</p>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchData } from "../utils/fetchData";
import { Projects } from "../types/projects";

export default defineComponent({
  name: "Home",
  data() {
    return {
      projects: [] as Projects[] | unknown,
    };
  },
  components: {},
  mounted() {
    fetchData("projetcs").then((projects) => {
      this.projects = projects;
    });
  },
});
</script>
