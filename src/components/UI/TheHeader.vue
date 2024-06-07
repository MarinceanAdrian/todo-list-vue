<template>
  <header>
    <div>
      <h2>TODO</h2>
    </div>
  </header>
</template>

<script setup lang="ts">
import NewTodo from "../NewTodo.vue";
</script>

<style scoped>
header {
  border-radius: 0.3rem;
  padding: 0.5rem;
  height: 15rem;
  color: white;
  position: relative;
  background-image: linear-gradient(
      80deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(244, 216, 247, 0.5) 0%,
      rgba(214, 106, 223, 0.5) 1%,
      rgba(106, 148, 223, 0.5) 67%
    ),
    url("../../assets/mountains.jpg");
  background-size: cover;
  background-position: center;
}

div {
  width: 40rem;
  margin: 2rem auto;
  position: relative;
}
</style>
