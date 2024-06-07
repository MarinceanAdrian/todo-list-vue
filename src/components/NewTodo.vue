<template>
  <BaseCard :search-bar="props.searchBar">
    <form class="create-todo__container" @submit.prevent="createTodo">
      <input
        type="text"
        placeholder="Start typing..."
        class="new-todo"
        v-model="newTodo"
      />
      <BaseButton>Create</BaseButton>
    </form>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";
import BaseCard from "./UI/BaseCard.vue";
import { Todo } from "../types/types";
import { useStore } from "vuex";
import { ref, Ref } from "vue";

// props
const props = defineProps<{ searchBar?: boolean }>();

// store
const store = useStore();

// state
const newTodo: Ref<string> = ref("");

// methods
function createTodo() {
  // prevent entering empty todos
  if (newTodo.value === "") {
    return;
  }

  const todo: Todo = {
    name: newTodo.value,
    isCompleted: false,
    id: Date.now(),
  };
  // dispatch method from store
  store.dispatch("createTodo", todo);

  // clear fields
  newTodo.value = "";
}
</script>

<style scoped>
.create-todo__container {
  display: flex;
  border-radius: 0.5rem;
  background: white;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
}
.new-todo {
  border-radius: 0.5rem;
  width: 100%;
  border: none;
  font: inherit;
  outline: none;
  flex: 1;
}


</style>
