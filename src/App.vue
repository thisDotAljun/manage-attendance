<template>
  <header>
    <nav class="flex items-center justify-between w-full overflow-hidden">
      <Logo/>
      <div class="relative flex items-center space-x-2">
        <div class="flex justify-content-center">
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="My Request" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="My Team" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Company" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Administration Tools" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
        </div>
        <div class="flex justify-content-center">
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Maintenance" class="w-full bg-transparent" :pt="{
            input: 'p-2 bg-transparent text-nav-color',
            dropdownicon: 'text-nav-color',
            root: 'ring-0'
          }" />
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

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

