<template>
  <div class="w-60 mt-5 p-4 bg-slate-300 rounded-md">
    <h4 class="font-bold uppercase text-start">backlog</h4>
    <draggable
      class=""
      :list="list1"
      group="people"
      @change="log"
      itemKey="name"
    >
      <template #item="{ element, index }">
        <div class="bg-slate-400 m-2 rounded-md p-2">
          {{ element.name }} {{ index }}
        </div>
      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  name: 'two-lists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
      ],
      list2: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 },
      ],
    };
  },
};
</script>
