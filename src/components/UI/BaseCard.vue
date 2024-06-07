<template>
  <div
    class="card"
    :class="{
      // modal: props.class === 'modal',
      searchBar: props.searchBar === true,
      modal: props.modal === true,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  class: string;
  searchBar?: boolean;
  modal?: boolean;
}>();
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);
  width: 40rem;
  margin: 0 auto;
  z-index: 10;
  background: white;
  position: absolute;
  top: 14rem;
  left: 50%;
  padding: 0 1rem;
  transform: translateX(-50%);
}

.searchBar {
  width: 40rem;
  margin: 2rem auto;
  position: absolute;
  top: 6rem;
}

.modal {
  padding: 1rem;
}
</style>
