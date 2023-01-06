<template>
  <div class="flex justify-evenly items-center h-5/6">
    <div class="border rounded-md flex flex-col items-center w-1/4 h-5/6 p-2">
      <h2 class="font-bold uppercase mb-4">backlog</h2>
      <draggrable
        v-model="arrBackLog"
        group="kanban"
        @start="true"
        @end="false"
        item-key="id"
        class="w-full overflow-y-scroll"
      >
        <template #item="{ element }">
          <div
            class="flex justify-between w-full h-24 p-2 border border-slate-50 rounded-md mb-2"
          >
            <div class="flex flex-col justify-between items-start">
              <p class="break-all">{{ element.title }}</p>
              <div class="flex items-center justify-start">
                <i class="fa-solid fa-user mr-2"></i>
                <p>{{ element.assignee }}</p>
              </div>
            </div>
            <div class="flex flex-col justify-between items-end">
              <i class="fa-solid fa-xmark hover:text-red-600"></i>
              <div class="flex items-center">
                <i class="fa-regular fa-clock mr-2"></i>
                <p>{{ new Date(element.dueDate).toLocaleDateString() }}</p>
              </div>
            </div>
          </div>
        </template>
      </draggrable>
    </div>
    <div class="border rounded-md flex flex-col items-center w-1/4 h-5/6 p-2">
      <h2 class="font-bold uppercase mb-4">backlog</h2>
      <draggrable
        v-model="arrInProgress"
        group="kanban"
        @start="true"
        @end="false"
        item-key="id"
        class="w-full overflow-y-scroll"
      >
        <template #item="{ element }">
          <div
            class="flex justify-between w-full h-24 p-2 border border-slate-50 rounded-md mb-2"
          >
            <div class="flex flex-col justify-between items-start">
              <p class="break-all">{{ element.title }}</p>
              <div class="flex items-center justify-start">
                <i class="fa-solid fa-user mr-2"></i>
                <p>{{ element.assignee }}</p>
              </div>
            </div>
            <div class="flex flex-col justify-between items-end">
              <i class="fa-solid fa-xmark hover:text-red-600"></i>
              <div class="flex items-center">
                <i class="fa-regular fa-clock mr-2"></i>
                <p>{{ new Date(element.dueDate).toLocaleDateString() }}</p>
              </div>
            </div>
          </div>
        </template>
      </draggrable>
    </div>

    <div class="border rounded-md flex flex-col items-center w-1/4 h-5/6 p-2">
      <h2 class="font-bold uppercase mb-4">backlog</h2>
      <draggrable
        v-model="arrDone"
        group="kanban"
        @start="true"
        @end="false"
        item-key="id"
        class="w-full overflow-y-scroll"
      >
        <template #item="{ element }">
          <div
            class="flex justify-between w-full h-24 p-2 border border-slate-50 rounded-md mb-2"
          >
            <div class="flex flex-col justify-between items-start">
              <p class="break-all">{{ element.title }}</p>
              <div class="flex items-center justify-start">
                <i class="fa-solid fa-user mr-2"></i>
                <p>{{ element.assignee }}</p>
              </div>
            </div>
            <div class="flex flex-col justify-between items-end">
              <i class="fa-solid fa-xmark hover:text-red-600"></i>
              <div class="flex items-center">
                <i class="fa-regular fa-clock mr-2"></i>
                <p>{{ new Date(element.dueDate).toLocaleDateString() }}</p>
              </div>
            </div>
          </div>
        </template>
      </draggrable>
    </div>
  </div>
  <button @click="add">ADD</button>
</template>

<script lang="ts">
//import draggrable
import { store, storeMethods } from '@/stores/kanban';
import draggrable from 'vuedraggable';
import type { IBacklogItem } from '../interfaces/item';

export default {
  name: 'kanban-board',
  components: {
    draggrable,
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
    removeFromIndex: function (index: number) {
      storeMethods.removeItemFronIndex(index);
    },
    add: function () {
      console.log('add');
      storeMethods.addItem({
        title: 'item.title',
        description: 'item.description',
        priority: 'item.priority',
        dueDate: new Date(),
      });
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
