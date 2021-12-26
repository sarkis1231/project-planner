<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="current = $event" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDeleteProject"
          @complete="handleComplete"
        />
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchData } from "@/utils/fetchData";
import { Project } from "@/types/project";
import SingleProject from "@/components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      projects: [] as [] | Project[],
      current: "all",
    };
  },
  components: {
    SingleProject,
    FilterNav,
  },
  mounted() {
    fetchData<Project[]>("/projects").then((projects) => {
      this.projects = projects;
    });
  },
  methods: {
    handleDeleteProject(projectId: number): void {
      this.projects = this.projects.filter(
        ({ id }: { id: number }) => id !== projectId
      );
    },
    handleComplete(projectId: number): void {
      let project: Project | undefined = this.projects.find(
        ({ id }: { id: number }) => id === projectId
      );
      if (project) {
        project.completed = !project.completed;
      }
    },
  },
  computed: {
    filteredProjects(): Project[] {
      const currentProjects: {
        [key: string]: Project[];
      } = {
        completed: this.projects.filter((project) => project.completed),
        ongoing: this.projects.filter((project) => !project.completed),
        all: this.projects,
      };
      return currentProjects[this.current];
    },
  },
});
</script>
