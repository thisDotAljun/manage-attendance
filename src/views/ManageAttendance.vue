<template>
  <aside v-if="true" class="border-r border-slate-400 max-w-[21%] overflow-hidden">
    <div class="self-stretch items-start gap-1 py-6 px-8 leading-6 space-y-2">
      <h1 class="font-bold text-[24px] text-dark-neutral-800 text-wrap capitalize">Manage attendance</h1>
      <p class="font-semibold">
        Attendance management is where you can generate, add, edit, and export the logs of the employees.
      </p>
    </div>
    <div class="pt-0 pb-6 px-6 border-b border-slate-200 self-stretch items-start">
      <button type="button" class="button-class">attendance Logs</button>
      <button type="button" class="button-class">exported Files</button>
    </div>
    <div class="p-6 space-y-4 border-b border-slate-200">
      <div class="flex flex-col space-y-4">
        <h3 class="font-bold text-mid-neutral-400 uppercase">Date Range</h3>
        <div class="relative space-y-4">
          <div class="p-float-label">
            <Calendar v-model="asideStates.date_from" showIcon inputId="date-from" class="w-full" :pt="{
              input: 'text-dark-neutral-800 font-medium',
              root: 'ring-0 border border-slate-200'
            }" />
            <label for="date-from">Date From</label>
          </div>
          <div class="p-float-label">
            <Calendar v-model="asideStates.date_to" showIcon inputId="date-to" class="w-full" :pt="{
              input: 'text-dark-neutral-800 font-medium',
              root: 'ring-0 border border-slate-200'
            }" />
            <label for="date-to">Date To</label>
          </div>
        </div>
      </div>
      <div :class="{ 'space-y-2': !showAll, 'space-y-4': showAll }">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-mid-neutral-400 uppercase">filters</h3>
          <button @click="showAll = !showAll" type="button" class="capitalize bg-invisible bg-transparent cursor-pointer text-[14px] text-blue font-bold leading-9 hover:underline">{{ !showAll ? 'show all' : 'hide all' }}</button>
        </div>
        <ul v-if="!showAll" class="list-none space-y-2">
          <li class="text-neutal-400 uppercase font-normal text-xs tracking-[0.48px]">
            sprout solutions
          </li>
          <li class="text-neutal-400 uppercase font-normal text-xs ">
            all
          </li>
          <li class="text-neutal-400 uppercase font-normal text-xs tracking-[0.48px]">
            all
          </li>
          <li class="text-neutal-400 uppercase font-normal text-xs tracking-[0.48px]">
            all
          </li>
        </ul>
        <div v-if="showAll" class="space-y-4">
          <div class="p-float-label w-full">
            <Dropdown id="dpd-company" v-model="selectedCities" :options="companyContainer" optionLabel="company_name" class="w-full capitalize" :pt="{
              item: 'space-x-2',
              root: 'ring-0 border border-slate-200 h-[48px]'
            }" />
            <label for="dpd-company">Company</label>
          </div>
          <div class="p-float-label w-full">
            <MultiSelect :disabled="filterAccessibility.department" id="dpd-department" :selectedItemsLabel="drdLabel.department" v-model="departmentState" :options="departmentContainer" optionLabel="name" :maxSelectedLabels="0" class="w-full capitalize" :pt="{
              item: 'space-x-2',
              root: 'ring-0 border border-slate-200 h-[48px]'
            }" :class="{ 'bg-light-neutral-10' : filterAccessibility.department }"  />
            <label for="dpd-department">Department</label>
          </div>
          <div class="p-float-label w-full">
            <MultiSelect :disabled="filterAccessibility.location" id="dpd-location" :selectedItemsLabel="drdLabel.location" v-model="locationState" :options="locationContainer" optionLabel="name" :maxSelectedLabels="0" class="w-full" :pt="{
              item: 'space-x-2',
              root: 'ring-0 border border-slate-200 h-[48px] '
            }" :class="{ 'bg-light-neutral-10' : filterAccessibility.location }" />
            <label for="dpd-location">Location</label>
          </div>
          <div class="p-float-label w-full">
            <MultiSelect :disabled="filterAccessibility.employee" id="dpd-employee" :selectedItemsLabel="drdLabel.employee" v-model="employeeState" :options="employeeContainer" optionLabel="name" :maxSelectedLabels="0" class="w-full" :pt="{
              item: 'space-x-2',
              root: 'ring-0 border border-slate-200 h-[48px]'
            }" :class="{ 'bg-light-neutral-10' : filterAccessibility.employee }" />
            <label for="dpd-employee">Employee</label>
          </div>
        </div>
      </div>
    </div>
    <div class="self-stretch items-start p-6 space-y-2">
      <button type="button" class="p-2 w-full text-white bg-green text-wrap text-base font-medium capitalize border border-green rounded cursor-pointer duration-300 focus:ring-0">
        search
      </button>
      <button type="button" class="p-2 w-full text-green bg-white text-wrap text-base font-medium capitalize border border-green rounded cursor-pointer duration-300 focus:ring-0">
        export
      </button>
    </div>
  </aside>
  <section class="w-full max-h-full p-6 space-y-6 overflow-auto">
    <div class="flex item-center justify-between">
      <div class="flex justify-start">
        <h1 v-show="asideStates.date_from != null || asideStates.date_to != null " class="font-bold capitalize text-base leading-5">{{ formatDateString(asideStates.date_from) }} - {{ formatDateString(asideStates.date_to) }}</h1>
      </div>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <div class="relative flex flex-col my-auto space-x-12 text-start">
          <button @click="toggleLogsAction('active')" type="button" class="px-2 pl-1.5 text-xs font-medium capitalize border border-green rounded-s cursor-pointer duration-300 focus:ring-0" :class="{ 'text-white bg-green pr-6' : logsButton.active, 'text-green bg-white': !logsButton.active }">
            active logs
          </button>
          <div v-if="logsButton.active" class="absolute flex flex-col right-0 inset-y-0 w-[20%] bg-green duration-300">
            <i class="pi pi-check m-auto text-white text-xs" />
          </div>
        </div>
        <div class="relative flex flex-col my-auto space-x-12 text-start">
          <button @click="toggleLogsAction('deleted')" type="button" class="px-2 pl-1.5 text-xs font-medium capitalize border border-green rounded-e cursor-pointer duration-300 focus:ring-0" :class="{ 'text-white bg-green pr-6' : logsButton.deleted, 'text-green bg-white': !logsButton.deleted }">
            deleted logs
          </button>
          <div v-if="logsButton.deleted" class="absolute flex flex-col right-0 inset-y-0 w-[20%] bg-green rounded-e duration-300">
            <i class="pi pi-check m-auto text-white text-xs" />
          </div>
        </div>
      </div>
    </div>
    <table class="relative flex-auto w-full border-collapse max-w-full max-h-full">
      <thead>
        <tr class="border border-slate-200">
          <th class="p-4 text-start font-bold self-stretch uppercase text-sm" v-for="(header, index) in tableHead" :key="index">{{ header.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border border-slate-200 hover:bg-success-bg duration-300" v-for="(item, item_index) in store.data" :key="item_index">
          <td class="py-2 px-4 self-stretch capitalize" v-for="(header_value, value_index) in tableHead" :key="value_index">
            <div v-if="header_value.target" class="flex flex-col">
              <div v-if="header_value.tag" class="bg-light-neutral-40 px-2">
                <span class="overflow-hidden text-dark-neutral-800 font-normal text-ellipsis whitespace-nowrap text-base" v-for="(element, el_index) in header_value['data-target']" :key="el_index">{{ item[header_value.value][element] }}</span>
              </div>
              <span v-else class="overflow-hidden text-dark-neutral-800 font-normal text-ellipsis whitespace-nowrap text-base" v-for="(element, el_index) in header_value['data-target']" :key="el_index">{{ item[header_value.value][element] }}</span>
            </div>
            <div v-else>
              <div v-if="header_value.tag" class="bg-light-neutral-50 px-2 w-fit text-mid-neutral-400 rounded uppercase">
                <span class="font-bold">{{ item[header_value.value] }}</span>
              </div>
              <span v-else>{{ item[header_value.value] }}</span>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot class="absolute p-4 flex justify-between items-center w-full border border-slate-200">
        <div class="space-x-2">
          <label for="perpage" class="text-base">Items per page</label>
          <select class="p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-0 focus:border focus:outline-0" name="perpage" id="perpage" v-model="perpageState">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div class="flex flex-cols items-center">
          <div>
            <span class="p-2"><i class="pi pi-angle-double-left text-green cursor-pointer" /></span>
            <span class="p-2"><i class="pi pi-angle-left text-green cursor-pointer" /></span>
          </div>
          <div class="inline-flex space-x-2 justify-center items-center">
            <p class="text-base font-medium capitalize">page</p>
            <input v-model="pageState" type="email" id="helper-text" aria-describedby="helper-text-explanation" class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-0 focus:border focus:outline-0 w-12">
            <p id="helper-text-explanation" class="text-base text-gray-500">of 13</p>
          </div>
          <div>
            <span class="p-2"><i class="pi pi-angle-double-right text-green cursor-pointer" /></span>
            <span class="p-2"><i class="pi pi-angle-right text-green cursor-pointer" /></span>
          </div>
        </div>
        <div>
          <span>Showing 1 - 10 of 123</span>
        </div>
      </tfoot>
    </table>
  </section>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import Calendar from 'primevue/calendar';
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import { useLocalDataStore } from '@/stores/localdata'
import { formatDateString } from '../helpers'

const selectedCities = ref();
const departmentState = ref([]);
const locationState = ref([]);
const employeeState = ref([]);
const perpageState = ref(10);
const pageState = ref(1);

const tableHead = ref([
  { name: 'name', value: 'employee_details', target: true, 'data-target': ['name', 'id'] },
  { name: 'date', value: 'time_stamp', target: true, 'data-target': ['date'] },
  { name: 'time', value: 'time_stamp', target: true, 'data-target': ['time'] },
  { name: 'in/out', value: 'status', target: false, style: true, class: [  ] },
  { name: 'log details', value: 'log_detail', target: false, tag: true },
  { name: 'location', value: 'location_detail', target: true, 'data-target': ['location', 'note'] },
  { name: 'project name', value: 'project_details', target: true, 'data-target': ['project_name', 'project_abbrev'] },
]);

const store = useLocalDataStore();

const asideStates = reactive({
  date_from: null,
  date_to: null
});

const showAll = ref(false);
const logsButton = reactive({
  active: true,
  deleted: false
});

const toggleLogsAction = (param) => {
  if (param == 'active') {
    logsButton.active = true;
    logsButton.deleted = false;
  } else {
    logsButton.deleted = true;
    logsButton.active = false;
  }
}

const companyContainer = ref([]);

const departmentContainer = computed(() => {
  const [ dept_data ] = store.filterData.filter((property) => property.company_id === selectedCities.value?.company_id).map((dept) => dept.department);
  return dept_data;
});

const locationContainer = computed(() => {
  const [ loc_data ] = store.filterData.filter((property) => property.company_id === selectedCities.value?.company_id).map((dept) => dept.location);
  return loc_data;
});

const employeeContainer = computed(() => {
  const [ emp_data ] = store.filterData.filter((property) => property.company_id === selectedCities.value?.company_id).map((dept) => dept.employee);
  return emp_data;
});

const drdLabel = computed(() => {
  return {
    department: departmentState.value.length === departmentContainer.value?.length ? 'All' : '{0} Selected',
    location: locationState.value.length === locationContainer.value?.length ? 'All' : '{0} Selected',
    employee: employeeState.value.length === employeeContainer.value?.length ? 'All' : '{0} Selected',
  }
});

const filterAccessibility = computed(() => {
  return {
    department: (departmentContainer.value?.length === undefined || departmentContainer.value?.length === 0) && true,
    location: (locationContainer.value?.length === undefined || locationContainer.value?.length === 0) && true,
    employee: (employeeContainer.value?.length === undefined || employeeContainer.value?.length === 0) && true
  }
});

onMounted(() => {
  companyContainer.value = store.filterData;
})

</script>
