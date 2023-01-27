<template>
  <div class="flex justify-evenly items-center">
    <label for="{{name}}">{{ label }} :</label>
    <select
      name="{{name}}"
      :value="value"
      @input="updateModelValue"
      class="patternWithLabel"
    >
      <option
        v-for="option in options"
        v-bind:key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
interface Option {
  value: string | number;
  label: string;
}

export default {
  name: 'SelectWithLabel',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String || Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array as () => Option[],
      required: true,
    },
  },
  methods: {
    //PERGUNTAR AO GIU
    updateModelValue(event: any) {
      this.$emit('update:value', event.target.value);
    },
  },
};
</script>

<style></style>
