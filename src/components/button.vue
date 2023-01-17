<template>
  <div>
    <button class="bg-blue-500 text-white rounded-md p-2">{{ text }}</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonComponent',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
