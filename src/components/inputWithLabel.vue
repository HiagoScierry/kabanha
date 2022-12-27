<template>
  <div class="flex justify-evenly items-center">
    <label for="{{name}}">{{ label }} :</label>
    <input
      class="patternWithLabel"
      type="text"
      name="{{name}}"
      :value="value"
      @input="updateModelValue"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'InputWithLabel',
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
