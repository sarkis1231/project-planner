<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" />
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchData } from "../utils/fetchData";
import { Project } from "../types/project";
import SingleProject from "../components/SingleProject.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      projects: [] as Project[] | unknown,
    };
  },
  components: {
    SingleProject,
  },
  mounted() {
    fetchData("projetcs").then((projects) => {
      this.projects = projects;
    });
  },
});
</script>
