<template>
  <li class="todo-item" @click="openTodoDetails">
    <span
      class="todo-item__status"
      @click="toggleCheck(+props.todo.id)"
      :title="
        props.todo.isCompleted
          ? 'Mark the todo as incomplete'
          : 'Mark the todo as done'
      "
      >{{ props.todo.isCompleted ? "&#x2705;" : "━" }}</span
    >{{ props.todo.name }}
    <span class="todo-item__trash" @click="deleteTodo(+props.todo.id)"
      ><i
        class="fa-solid fa-trash"
        :title="`Delete todo: ${props.todo.name}`"
      ></i
    ></span>
  </li>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { Todo } from "../types/types";

// props
const props = defineProps<{ todo: Todo }>();

// store
const store = useStore();

// router
const router = useRouter();
const route = useRoute();

// methods
function deleteTodo(id: number) {
  store.dispatch("toggleModal");
  store.dispatch("setTodoId", id);
}

function toggleCheck(id: number) {
  store.dispatch("toggleCheck", id);
}

function openTodoDetails(event: Event) {
  if (event.target.nodeName === "LI") {
    console.log(route);
    router.push(`${route.path}/${props.todo.id}`);
  }
}
</script>

<style scoped>
.todo-item {
  border-bottom: 1px solid lightgray;
  padding: 0.7rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  position: relative;
  cursor: pointer;
}

div {
  border-radius: 0.5rem;
}

.todo-item__status {
  display: inline-block;
  margin-right: 0.8rem;
  cursor: pointer;
}

.todo-item__trash {
  display: inline-block;
  transform: translateX(1rem);
  right: 1rem;
  opacity: 0;
  position: absolute;
  transition: all 0.3s linear;
  color: crimson;
  cursor: pointer;
}

.todo-item:hover {
  background: #f8f0ff;
}

.todo-item:hover .todo-item__trash {
  transform: translateX(0);
  opacity: 1;
}
</style>
