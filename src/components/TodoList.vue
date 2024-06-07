<template>
  <BaseCard>
    <ul v-if="checkExistingTodos">
      <TodoItem v-for="todo in filteredTodos" :todo="todo" :key="todo.id">
        {{ todo.name }}
      </TodoItem>
      <TodoFooterActions @change-filters="changeFilters" />
    </ul>
    <p v-else>No Todos yet</p>
  </BaseCard>
</template>

<script setup lang="ts">
import { Todo, Filters } from "../types/types";
import { useStore } from "vuex";
import { computed, ComputedRef, reactive } from "vue";
import BaseCard from "../components/UI/BaseCard.vue";
import TodoFooterActions from "./TodoFooterActions.vue";
import TodoItem from "./TodoItem.vue";

const store = useStore();

const filters = reactive({
  all: true,
  active: false,
  completed: false,
});

const checkExistingTodos: ComputedRef<boolean> = computed(
  () => store.getters.checkExistingTodos,
);
const filteredTodos: ComputedRef<Todo[]> = computed(() =>
  store.getters.todos.filter((todo: Todo) => {
    if (filters.active && todo.isCompleted === false) {
      console.log(1);
      return true;
    }
    if (filters.completed && todo.isCompleted === true) {
      console.log(2);
      return true;
    }
    if (filters.all) {
      console.log(3);
      return true;
    }
    return false;
  }),
);

function changeFilters(filtersObject: Filters) {
  return Object.assign(filters, filtersObject);
}
</script>
