<template>
  <aside class="border-r border-slate-400 max-w-[21%] overflow-hidden">
    <div class="py-6 px-8 leading-6 space-y-2">
      <h1 class="font-bold text-[24px] text-dark-neutral-800 text-wrap capitalize">Mange attendance</h1>
      <p class="font-semibold">
        Attendance management is where you can generate, add, edit, and export the logs of the employees.
      </p>
    </div>
    <div class="p-6 border-b border-slate-200">
      <button type="button" class="button-class">attendance Logs</button>
      <button type="button" class="button-class">exported Files</button>
    </div>
    <div class="p-6 space-y-4 border-b border-slate-200">
      <h3 class="font-bold text-[#3C5B51] uppercase">Date Range</h3>
      <div class="relative space-y-[30px]">
        <div class="p-float-label">
          <Calendar v-model="asideStates.date_from" showIcon inputId="date-from" class="w-full -mb-12" :pt="{
            input: 'text-dark-neutral-800 font-medium',
            root: 'ring-0 border border-slate-200'
          }" />
          <label for="date-from">Date From</label>
        </div>
        <div class="p-float-label">
          <Calendar v-model="asideStates.date_to" showIcon inputId="date-to" class="w-full -mb-12" :pt="{
            input: 'text-dark-neutral-800 font-medium',
            root: 'ring-0 border border-slate-200'
          }" />
          <label for="date-to">Date To</label>
        </div>
      </div>
      <div class="!mt-6 py-[8px]">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-mid-neutral-400 uppercase">filters</h3>
          <button type="button" class="capitalize bg-invisible bg-transparent cursor-pointer text-[14px] text-blue font-bold leading-9 hover:underline">show all</button>
        </div>
        <div>
          <ul v-if="false" class="list-none">
            <li class="text-neutal-400 uppercase font-normal leading-7 tracking-[0.48px]">
              sprout solutions
            </li>
            <li class="text-neutal-400 uppercase font-normal leading-7 tracking-[0.48px]">
              all
            </li>
            <li class="text-neutal-400 uppercase font-normal leading-7 tracking-[0.48px]">
              all
            </li>
            <li class="text-neutal-400 uppercase font-normal leading-7 tracking-[0.48px]">
              all
            </li>
          </ul>
          <div>
            <span class="p-float-label w-full md:w-20rem">
                <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full" :pt="{
                  item: 'space-x-2',
                }" />
                <label for="ms-cities">MultiSelect</label>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-6 space-y-2">
      <Button label="search" class="w-full bg-green capitalize" :pt="{
        label: 'text-wrap text-[16px] font-medium leading-[16px]'
      }" />
      <Button label="export" class="w-full bg-white capitalize border border-slate-200" :pt="{
        label: 'text-wrap text-light-neutral-40 text-[16px] font-medium leading-[16px]'
      }" />
    </div>
  </aside>
  <section class="w-full p-5">
    <h1 class="font-bold">Section</h1>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';

const asideStates = reactive({
  date_from: null,
  date_to: null
});

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
])

</script>
