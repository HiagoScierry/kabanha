<template>
  <div class="w-4/5 m-auto">
    <div
      class="flex justify-start items-center cursor-pointer"
      @click="goBack()"
    >
      <i class="fa-solid fa-arrow-left-long"></i>
      <p class="ml-2 text-sm">Voltar</p>
    </div>
  </div>
  <div class="flex justify-center items-center mt-4">
    <div class="w-4/5 border border-solid p-4 border-slate-700 rounded-md">
      <div class="text-center mb-4">
        <h2 class="text-2xl font-semibold">Nova tarefa</h2>
      </div>
      <div class="flex justify-evenly items-center">
        <div class="w-2/3">
          <inputWithLabelVue
            label="Título"
            v-model:value="task.title"
            name="title"
          />
        </div>
        <div class="w-2/3">
          <selectWithLabelVue
            label="Prioridade"
            :value="task.priority"
            name="priority"
            :options="prioritys"
          />
        </div>
        <div class="w-2/3">
          <dateWithLabelVue
            label="Data limite"
            :value="task.dueDate"
            name="date"
          />
        </div>

        <div class="w-2/3">
          <selectWithLabelVue
            label="Atribuir a"
            :value="task.assingee.toString()"
            name="assingee"
            :options="devs"
          />
        </div>
      </div>

      <textAreaWithLabelVue
        label="Descrição"
        :value="task.description"
        name="description"
      />
      <div class="text-center">
        <buttonVue text="Salvar" @click="handleTask()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import buttonVue from '@/components/button.vue';
import inputWithLabelVue from '@/components/inputWithLabel.vue';
import selectWithLabelVue from '@/components/selectWithLabel.vue';
import dateWithLabelVue from '@/components/dateWithLabel.vue';
import textAreaWithLabelVue from '@/components/textAreaWithLabel.vue';
import type { ITask } from '@/interfaces/task';
import { storeMethods, store as storeTask, store } from '@/stores/kanban';
import { store as storeDev } from '@/stores/developers';
import type { IBacklogItem } from '@/interfaces/item';
import { prioritys } from '@/constants/priority';

export default {
  name: 'EditTask',
  components: {
    buttonVue,
    inputWithLabelVue,
    selectWithLabelVue,
    dateWithLabelVue,
    textAreaWithLabelVue,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handleTask() {
      const id = this.$route.params.id as string;
      const arrName = this.$route.params.arrName as
        | 'backlog'
        | 'progress'
        | 'done';

      if (id && arrName) {
        console.log('TASK ALTERADA', this.task);

        storeMethods.editTask(this.task, id, arrName);
        this.$router.push('/');
        return;
      }

      alert('Erro ao salvar tarefa');
    },
  },
  data(): {
    task: ITask;
    devs: { value: number; label: string }[];
    prioritys: { value: string; label: string }[];
  } {
    const id = this.$route.params.id as string;
    const arrName = this.$route.params.arrName as
      | 'backlog'
      | 'progress'
      | 'done';

    //@ts-ignore
    const index = storeTask[arrName].findIndex(
      (item: IBacklogItem) => item.id === +id
    );

    console.log('INDEX', storeTask[arrName][index]);

    return {
      devs: storeDev.developers.map((dev) => ({
        label: dev.name,
        value: dev.id,
      })),
      task: {
        title: storeTask[arrName][index].title,
        description: storeTask[arrName][index].description,
        priority: storeTask[arrName][index].priority,
        dueDate: storeTask[arrName][index].dueDate,
        assingee: storeTask[arrName][index].assignee,
      },

      prioritys,
    };
  },
};
</script>

<style></style>
