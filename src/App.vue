// https://dribbble.com/shots/20018626-Todo-App-Design

<template>
  <TheHeader />
  <NewTodo search-bar v-if="route.fullPath === '/todos'" />
  <RouterView />
  <BaseModal v-if="isModalOpen">
    <BaseCard modal>
      <div>
        <div>
          <h3>Are you sure you want to delete the todo?</h3>
        </div>
        <div class="actions">
          <BaseButton outline @click="closeModal">Cancel</BaseButton>
          <BaseButton @click="deleteTodo">Delete</BaseButton>
        </div>
      </div>
    </BaseCard>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "./components/UI/BaseModal.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import NewTodo from "./components/NewTodo.vue";
import TheHeader from "./components/UI/TheHeader.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const store = useStore();

const route = useRoute();

const isModalOpen = computed(() => store.getters.isModalOpen);
const todoIdToDelete = computed(() => store.getters.getTodoToDelete);

function closeModal() {
  store.dispatch("toggleModal");
}

function deleteTodo() {
  store.dispatch("deleteTodo", todoIdToDelete.value);
  store.dispatch("toggleModal");
}
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
