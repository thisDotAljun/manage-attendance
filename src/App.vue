<template>
  <header>
    <nav class="flex items-center justify-between w-full overflow-hidden">
      <Logo/>
      <div class="relative flex items-center space-x-2">
        <div class="flex justify-content-center">
          <Dropdown v-model="dropdwonState" :options="dropdownContainer" optionLabel="name" placeholder="My Request" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="dropdwonState" :options="dropdownContainer" optionLabel="name" placeholder="My Team" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="dropdwonState" :options="dropdownContainer" optionLabel="name" placeholder="Company" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="dropdwonState" :options="dropdownContainer" optionLabel="name" placeholder="Administration Tools" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="dropdwonState" :options="dropdownContainer" optionLabel="name" placeholder="Maintenance" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center space-x-4">
          <div class="relative flex flex-col my-auto">
            <input type="text" id="search-id" name="searchState" v-model="searchState" class="flex flex-col h-9 px-3 border border-nav-color rounded placeholder:text-nav-color bg-transparent text-white focus:outline-0" placeholder="Search Employee...">
            <div class="absolute flex right-0 inset-y-0 w-[20%]">
              <i class="pi pi-search m-auto text-nav-color" />
            </div>
          </div>
          <div class="inline-flex items-center space-x-2">
            <h1 class="text-white bg-[#C4C4C4] p-3.5 rounded-full"></h1>
            <div class="flex justify-content-center">
              <Dropdown v-model="dropdwonState" :options="dropdownContainer" optionLabel="name" placeholder="Admin" class="w-full bg-transparent" :pt="{
                input: 'p-2 bg-transparent text-nav-color',
                dropdownicon: 'text-nav-color',
                root: 'ring-0'
              }" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Logo from '@/components/LogoComponent.vue'
import { ref } from 'vue';
import Dropdown from 'primevue/dropdown';
// import InputText from 'primevue/inputtext';

const searchState = ref(null);
const dropdwonState = ref();
const dropdownContainer = ref([]);
</script>

