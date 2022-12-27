<template>
  <div class="flex justify-evenly items-center">
    <div>
      <h4>BACKLOG</h4>
      <ul>
        <li
          v-for="(item, index) in arrBackLog"
          :key="item.id"
          @click="removeFromIndex(index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div>
      <h4>PROGRESS</h4>
      <ul>
        <li
          v-for="(item, index) in arrInProgress"
          :key="item.id"
          @click="removeFromIndex(index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div>
      <h4>DONE</h4>
      <ul>
        <li
          v-for="(item, index) in arrDone"
          :key="item.id"
          @click="removeFromIndex(index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
  <button @click="routerToAdd()">ADD</button>
</template>

<script lang="ts">
//import draggable
import { store, storeMethods } from '@/stores/kanban';
import draggable from 'vuedraggable';
import type { IBacklogItem } from '../interfaces/item';

export default {
  name: 'kanban-board',
  components: {
    draggable,
  },
  data(): {
    arrBackLog: IBacklogItem[];
    arrInProgress: IBacklogItem[];
    arrDone: IBacklogItem[];
  } {
    return {
      arrBackLog: store.backlog,
      arrInProgress: store.progress,
      arrDone: store.done,
    };
  },
  methods: {
    //add new tasks method
    routerToAdd: function () {
      this.$router.push('/task');
    },
    add: function () {
      storeMethods.addItem();
    },
    removeFromIndex: function (index: number) {
      storeMethods.removeItemFronIndex(index);
    },
  },
};
</script>

<style>
/* light stylings for the kanban columns */
.kanban-column {
  min-height: 300px;
}
</style>
