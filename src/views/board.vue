<template>
  <div class="h-5/6">
    <div class="w-10/12 m-auto">
      <div class="flex justify-end items-center cursor-pointer">
        <buttonVue text="Adicionar" @click="routerToAdd()" />
      </div>
    </div>
    <div class="flex justify-evenly items-center h-full">
      <div class="border rounded-md flex flex-col items-center w-1/4 h-5/6 p-2">
        <h2 class="font-bold uppercase mb-4">backlog</h2>
        <draggrable
          v-model="arrBackLog"
          group="kanban"
          @start="true"
          @end="false"
          @change="update($event, 'backlog')"
          item-key="id"
          class="w-full h-5/6 overflow-y-scroll"
        >
          <template #item="{ element, index }">
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
                <i
                  class="fa-solid fa-xmark hover:text-red-600"
                  @click="removeFromIndex(index, 'backlog')"
                ></i>
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
        <h2 class="font-bold uppercase mb-4">Em progresso</h2>
        <draggrable
          v-model="arrInProgress"
          group="kanban"
          @start="true"
          @end="false"
          @change="update($event, 'progress')"
          item-key="id"
          class="w-full h-5/6 overflow-y-scroll"
        >
          <template #item="{ element, index }">
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
                <i
                  class="fa-solid fa-xmark hover:text-red-600"
                  @click="removeFromIndex(index, 'progress')"
                ></i>
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
        <h2 class="font-bold uppercase mb-4">Pronto</h2>
        <draggrable
          v-model="arrDone"
          group="kanban"
          @start="true"
          @end="false"
          item-key="id"
          @change="update($event, 'done')"
          class="w-full h-5/6 overflow-y-scroll"
        >
          <template #item="{ element, index }">
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
                <i
                  class="fa-solid fa-xmark hover:text-red-600"
                  @click="removeFromIndex(index, 'done')"
                ></i>
                <div class="flex items-center">
                  string
                  <i class="fa-regular fa-clock mr-2"></i>
                  <p>{{ new Date(element.dueDate).toLocaleDateString() }}</p>
                </div>
              </div>
            </div>
          </template>
        </draggrable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//import draggrable
import { store, storeMethods } from '@/stores/kanban';
import draggrable from 'vuedraggable';
import type { IBacklogItem } from '../interfaces/item';
import buttonVue from '@/components/button.vue'

export default {
  name: 'kanban-board',
  components: {
    draggrable,
    buttonVue
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
    removeFromIndex: function (
      index: number,
      arrName: 'backlog' | 'progress' | 'done'
    ) {
      console.log(this.arrInProgress);

      storeMethods.removeItemFronIndex(index, arrName);
    },
    add: function () {
      storeMethods.addItem({
        title: 'item.title',
        description: 'item.description',
        priority: 'item.priority',
        dueDate: new Date(),
      });
    },
    update: function (event: any, arrName: 'backlog' | 'progress' | 'done') {
      console.log('update', arrName, event);
      storeMethods.updateArray(event, arrName);
    },
  },
};
</script>
