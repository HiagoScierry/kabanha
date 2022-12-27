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
            :options="[
              { value: 'low', label: 'Baixa' },
              { value: 'medium', label: 'Média' },
              { value: 'high', label: 'Alta' },
            ]"
          />
        </div>
        <div class="w-2/3">
          <dateWithLabelVue label="Data" :value="task.dueDate" name="date" />
        </div>
      </div>
      <textAreaWithLabelVue
        label="Descrição"
        :value="task.description"
        name="description"
      />
      <div class="text-center">
        <buttonVue text="Salvar" @click="createTask()" />
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
import { storeMethods, store } from '@/stores/kanban';

export default {
  name: 'AddView',
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
    createTask() {
      storeMethods.addItem(this.task);
      console.log(this.task);
      console.log(store.backlog);
    },
  },
  data(): { task: ITask } {
    return {
      task: {
        title: 'TESTE',
        priority: 'high',
        dueDate: new Date(),
        description: 'hiago teste ',
      },
    };
  },
};
</script>

<style></style>
