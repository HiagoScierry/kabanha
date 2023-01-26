<template>
  <div class="flex justify-evenly items-center">
    <label for="{{name}}">{{ label }} :</label>
    <input
      type="date"
      name="{{name}}"
      :value="value"
      @change="updateModelValue"
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
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateModelValue(event: any) {
      this.$emit('update:value', event.target.value);
    },
  },
};
</script>

<style></style>
