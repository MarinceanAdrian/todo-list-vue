<template>
  <button :class="{ cancel: props.outline }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ outline?: boolean }>();
</script>

<style scoped>
button {
  border: none;
  font: inherit;
  background-color: pink;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  transition: all 0.3s linear;
}

button:not(.cancel):hover {
  background-color: #9463a0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.55);
}

.cancel {
  background: lightgray;
}
</style>
