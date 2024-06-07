<template>
  <BaseCard>
    <h3>Todo Details</h3>
    <p>Todo id: {{ props.id }}</p>
    <p>Todo status: {{ todo?.isCompleted ? "Completed" : "Incomplete" }}</p>
    <textarea name="" id="">{{ todo.name }}</textarea>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "../components/UI/BaseCard.vue";
import { Todo } from "../types/types";
import { useRoute } from "vue-router";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

// props
const props = defineProps<{ id: number }>();

// store
const store = useStore();

// router
const route = useRoute();

// computed
const todo: ComputedRef<Todo> = computed(() => {
  return [...store.getters.todos].find((todo: Todo) => {
    return todo.id === +props.id;
  });
});
</script>

<style scoped></style>
