<template>
  <div class="h-5/6">
    <div class="w-10/12 m-auto">
      <div class="flex justify-end items-center cursor-pointer">
        <buttonVue class="mr-2" text="Adicionar" @click="routerToAdd()" />
        <buttonVue text="Desenvolvedores" @click="routerToDevs()" />
      </div>
    </div>
    <div class="flex justify-evenly items-center h-full">
      <div class="border rounded-md flex flex-col items-center w-1/4 h-5/6 p-2">
        <h2 class="font-bold uppercase mb-4">backlog</h2>
        <p class="text-sm mb-2">Qtd: {{ arrBackLog.length }}</p>
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
              @click="routerToEdit(element.id, 'backlog')"
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
        <p class="text-sm mb-2">Qtd: {{ arrInProgress.length }}</p>
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
              @click="routerToEdit(element.id, 'progress')"
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
        <p class="text-sm mb-2">Qtd: {{ arrDone.length }}</p>
        <draggrable
          v-model="arrDone"
          group="kanban"
          @start="false"
          @end="false"
          item-key="id"
          @change="update($event, 'done')"
          class="w-full h-5/6 overflow-y-scroll"
        >
          <template #item="{ element }">
            <div
              class="flex justify-between w-full h-24 p-2 border border-slate-50 rounded-md mb-2"
              @click="alert('Tarefa Concluida , não é possivel editar !')"
            >
              <div class="flex flex-col justify-between items-start">
                <p class="break-all">
                  {{ element.title }}
                </p>
                <div class="flex items-center justify-start">
                  <i class="fa-solid fa-user mr-2"></i>
                  <p>{{ element.assignee }}</p>
                </div>
              </div>
              <div class="flex flex-col justify-between items-end">
                <i class="text-green-600 fa-solid fa-square-check"></i>
                <div class="flex items-center">
                  <i class="fa-regular fa-clock mr-2"></i>
                  <p class="text-sm">
                    {{
                      calcDiffDate(
                        new Date(element.dueDate),
                        element.finishDate
                      )
                    }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </draggrable>
      </div>
    </div>
    <div class="w-full bg-gray-200 h-1">
      <div
        class="bg-blue-600 h-1"
        :style="`width: ${progressBarPercent}%`"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
//import draggrable
import { store, storeMethods } from '@/stores/kanban';
import draggrable from 'vuedraggable';
import type { IBacklogItem } from '../interfaces/item';
import buttonVue from '@/components/button.vue';

export default {
  name: 'kanban-board',
  components: {
    draggrable,
    buttonVue,
  },
  watch: {
    progressBarPercent: {
      handler: function (val) {
        if (val === 100) {
          alert('Parabéns, você concluiu todas as tarefas!');
        }
      },
      immediate: true,
    },
  },
  data(): {
    arrBackLog: IBacklogItem[];
    arrInProgress: IBacklogItem[];
    arrDone: IBacklogItem[];
    progressBarPercent: number;
  } {
    return {
      arrBackLog: store.backlog,
      arrInProgress: store.progress,
      arrDone: store.done,
      progressBarPercent:
        (store.done.length /
          (store.backlog.length + store.progress.length + store.done.length)) *
        100,
    };
  },
  methods: {
    //add new tasks method
    routerToDevs: function () {
      this.$router.push('/devs');
    },
    routerToAdd: function () {
      this.$router.push('/task');
    },
    routerToEdit: function (
      id: number,
      arrName: 'backlog' | 'progress' | 'done'
    ) {
      this.$router.push(`/taskEdit/${arrName}/${id}`);
    },
    removeFromIndex: function (
      index: number,
      arrName: 'backlog' | 'progress' | 'done'
    ) {
      storeMethods.removeItemFronIndex(index, arrName);
      this.calcProgressBar();
    },
    update: function (event: any, arrName: 'backlog' | 'progress' | 'done') {
      storeMethods.updateArray(event, arrName);
      this.calcProgressBar();
    },
    calcProgressBar: function () {
      this.progressBarPercent =
        (store.done.length /
          (store.backlog.length + store.progress.length + store.done.length)) *
        100;
    },
    calcDiffDate: function (dueDate: Date, finishDate: Date) {
      const diff = Math.floor(
        (dueDate.getTime() - finishDate.getTime()) / 86400000
      );

      return diff < 0
        ? `Atraso em ${Math.abs(diff)} dias`
        : `Concluido a ${diff} dias do previsto`;
    },
    alert: function (msg: string) {
      alert(msg);
    },
  },
};
</script>
