<template>
  <div class="w-screen h-screen">
    <div class="w-10/12 p-2 flex justify-center text-center flex-col m-auto">
      <div
        class="w-48 text-base bg-blue-600 hover:bg-blue-800 p-4 rounded-xl text-white"
      >
        Adicionar nova tarefa
      </div>

      <div
        class="flex justify-evenly items-center w-1/2 h-auto p-4 m-auto bg-gray-800"
      >
        <div class="w-60  p-4 bg-slate-300 rounded-md">
          <h4 class="font-bold uppercase text-start">backlog</h4>
          <draggable
            class="h-96"
            :list="arrBackLog"
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

        <div class="w-60  p-4 bg-slate-300 rounded-md">
          <h4 class="font-bold uppercase text-start">backlog</h4>
          <draggable
            class="h-96"
            :list="arrInProgress"
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

        <div class="w-60  p-4 bg-slate-300 rounded-md">
          <h4 class="font-bold uppercase text-start">backlog</h4>
          <draggable
            class="h-96"
            :list="arrDone"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//import draggable
import draggable from 'vuedraggable';

interface IBacklogData {
  name: string;
}

export default {
  name: 'kanban-board',
  components: {
    //import draggable as a component
    draggable,
  },
  data(): {
    newTask: string;
    arrBackLog: IBacklogData[];
    arrInProgress: IBacklogData[];
    arrTested: IBacklogData[];
    arrDone: IBacklogData[];
    drag: boolean;
  } {
    return {
      // for new tasks
      newTask: '',
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [{ name: 'HIAGO' }, { name: 'HIAGO' }, { name: 'HIAGO' }],
      arrInProgress: [],
      arrTested: [],
      arrDone: [],
      drag: false,
    };
  },
  methods: {
    //add new tasks method
    add: function () {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = '';
      }
    },
    log: function (event: any) {
      window.console.log('evt');
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
