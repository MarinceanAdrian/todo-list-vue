<template>
  <footer>
    <div>{{ countIncompleteTodos }} Items Left</div>
    <div class="actions">
      <span @click="setFilter" data-val="all" :class="{ active: filters.all }"
        >All</span
      >
      <span
        @click="setFilter"
        data-val="active"
        :class="{ active: filters.active }"
        >Active</span
      >
      <span
        @click="setFilter"
        data-val="completed"
        :class="{ active: filters.completed }"
        >Completed</span
      >
    </div>
    <BaseButton outline @click="deleteCompletedTodos"
      >Clear Completed</BaseButton
    >
  </footer>
</template>

<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";
import { useStore } from "vuex";
import { computed, reactive } from "vue";

const store = useStore();

const filters = reactive({
  all: true,
  active: false,
  completed: false,
});

const emit = defineEmits(["change-filters"]);

const countIncompleteTodos = computed(() => {
  return store.getters.countIncompleteTodos;
});

function deleteCompletedTodos() {
  if (confirm("Are you sure you want to delete all completed todos?")) {
    store.dispatch("deleteCompletedTodos");
  }
}

function setFilter(evt: Event) {
  const data = evt.target.dataset.val;
  const updatedFilters = Object.assign(filters, {
    all: false,
    completed: false,
    active: false,
    [data]: true,
  });
  emit("change-filters", updatedFilters);
}
</script>

<style scoped>
footer {
  padding: 0.7rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

span {
  transition: all 0.3s linear;
}

.actions span:hover {
  color: pink;
  cursor: pointer;
}

.active {
  color: pink;
}
</style>
