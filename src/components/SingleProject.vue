<template>
  <div class="project" :class="{ complete: project.completed }">
    <div class="actions">
      <h3
        title="Click on the project title to see the details"
        @click="showDetails = !showDetails"
      >
        {{ project.title }}
      </h3>
      <div class="icons">
        <span class="material-icons"> edit </span>
        <span @click="deleteProjetc" class="material-icons"> delete </span>
        <span
          @click="toggleComplete"
          class="material-icons"
          :class="{ tick: project.completed }"
        >
          done
        </span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Project } from "../types/project";
import { deleteData } from "../utils/deleteData";
import { updateData } from "../utils/updateData";

export default defineComponent({
  name: "SingleProject",
  props: {
    project: Object as () => Project,
  },
  data() {
    return {
      showDetails: false as boolean,
    };
  },
  methods: {
    deleteProjetc(): void {
      deleteData(`/projects/${this?.project?.id}`)
        .then(() => {
          this.$emit("delete", this?.project?.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleComplete(): void {
      updateData(`/projects/${this?.project?.id}`, {
        completed: !this.project?.completed,
      })
        .then(() => {
          this.$emit("complete", this?.project?.id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
});
</script>

<style>
.project {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
  transition: all 0.3s eas;
}
.material-icons:hover {
  color: #777;
}
</style>
