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
      console.log(event.target.value);

      this.$emit(
        'update:value',
        new Date(event.target.value).toISOString().slice(0, 10)
      );
    },
  },
};
</script>

<style></style>
