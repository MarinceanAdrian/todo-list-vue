<template>
  <div class="backdrop">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 20;
}
</style>
