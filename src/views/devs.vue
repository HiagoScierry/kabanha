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
  <div class="flex flex-col justify-center items-center mt-4">
    <div class="w-4/5 border border-solid p-4 border-slate-700 rounded-md">
      <div class="text-center mb-4">
        <h2 class="text-2xl font-semibold">Novo Desenvolvedor</h2>
      </div>
      <div class="flex justify-center items-center">
        <div class="w-2/3">
          <inputWithLabelVue
            label="Nome"
            v-model:value="newDev.name"
            name="name"
          />
        </div>
        <div class="w-2/3">
          <selectWithLabelVue
            label="Cargo"
            v-model:value="newDev.ocupation"
            name="occupation"
            :options="ocuppations"
          />
        </div>
        <buttonVue text="Adicionar" @click="addDev()" />
      </div>
    </div>

    <div class="w-4/5 border border-solid p-4 border-slate-700 rounded-md mt-4">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="text-xs">
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Nome</th>
              <th scope="col" class="px-6 py-3">Cargo</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b border-slate-700"
              v-for="(dev, index) in devs"
              :key="index"
            >
              <td scope="row" class="px-6 py-4 font-medium">
                {{ dev.id }}
              </td>
              <td class="px-6 py-4">{{ dev.name }}</td>
              <td class="px-6 py-4">{{ dev.ocupation }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import buttonVue from '@/components/button.vue';
import inputWithLabelVue from '@/components/inputWithLabel.vue';
import selectWithLabelVue from '@/components/selectWithLabel.vue';
import { store as storeDev, actions as actionsDev } from '@/stores/developers';
import type { IDeveloper } from '@/interfaces/develpment';
import { ocupation } from '@/constants/ocupation';

export default {
  name: 'devComponent',
  components: {
    buttonVue,
    inputWithLabelVue,
    selectWithLabelVue,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    addDev() {
      const newDev = {
        ...this.newDev,
        id: new Date().getTime(),
      };

      actionsDev.addDeveloper(newDev);
    },
  },
  data: (): {
    devs: IDeveloper[];
    newDev: IDeveloper;
    ocuppations: { label: string; value: string }[];
  } => {
    return {
      devs: storeDev.developers,
      newDev: {
        name: '',
        ocupation: '',
      },
      ocuppations: ocupation,
    };
  },
};
</script>

<style></style>
