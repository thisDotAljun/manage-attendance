<template>
  <section class="w-full h-full overflow-y-auto py-6 px-8">
    <div class="flex flex-col justify-between h-full">
      <div class="flex justify-center items-center h-full border border-slate-200 rounded-t">
        <div class="flex flex-col items-center">
          <EmptyIcon />
          <h2 class="font-bold text-dark-neutral-800">{{ heading }}</h2>
          <h4 class="text-dark-neutral-800">{{ subHeading }}</h4>
        </div>
      </div>
      <div class="flex p-4 justify-between items-center w-full border border-slate-200 rounded-b">
        <div class="space-x-2">
          <label for="perpage" class="text-base">Items per page</label>
          <select disabled="true" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-0 focus:border focus:outline-0" name="perpage" id="perpage">
            <option value="10" selected>10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div class="flex flex-cols items-center">
          <div class="py-0.5">
            <span class="p-2"><i class="pi pi-angle-double-left text-green cursor-pointer" /></span>
            <span class="p-2"><i class="pi pi-angle-left text-green cursor-pointer" /></span>
          </div>
          <div class="inline-flex space-x-2 justify-center items-center">
            <p class="text-base font-medium capitalize">page</p>
            <input disabled="true" value="1" type="email" id="helper-text" aria-describedby="helper-text-explanation" class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-0 focus:border focus:outline-0 w-12">
            <p id="helper-text-explanation" class="text-base font-medium">of 1</p>
          </div>
          <div class="py-0.5">
            <span class="p-2"><i class="pi pi-angle-right text-green cursor-pointer" /></span>
            <span class="p-2"><i class="pi pi-angle-double-right text-green cursor-pointer" /></span>
          </div>
        </div>
        <div>
          <span>Showing 0 of 0</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import EmptyIcon from '@/components/icons/EmptyIcon.vue';

const { heading, subHeading } = defineProps({
  heading: {
    type: String,
    default: 'Empty'
  },
  subHeading:{
    type: String,
    default: ''
  }
});
</script>
