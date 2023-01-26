<template>
  <div class="flex flex-col p-5">
    <label for="{{name}}">{{ label }} :</label>
    <textarea
      class="textareaWithLabel"
      name="{{name}}"
      :value="value"
      @input="updateModelValue"
      maxlength="250"
    ></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TextAreaWithLabel',
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
