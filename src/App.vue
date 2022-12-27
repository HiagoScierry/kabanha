<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-slate-900 w-screen h-screen text-gray-300">
    <div class="w-screen flex justify-start p-5 bg-slate">
      <h1 class="uppercase font-bold text-3xl">KABANHA</h1>
    </div>

    <RouterView />
  </div>
</template>

<style scoped></style>
