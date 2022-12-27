<template>
  <div class="flex justify-evenly items-center">
    <label for="{{name}}">{{ label }} :</label>
    <input
      type="date"
      name="{{name}}"
      :value="value"
      class="patternWithLabel"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'DateWithLabel',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
