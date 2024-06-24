<template>
    <div class="p-5">

        <!-- info tile -->
        <div v-for="(info, index) in data.countData.data" class="flex justify-between items-center mb-2">
            <div class="flex items-center gap-x-3">
                <Icon :class="statusClass" class="text-xl" name="solar:graph-up-linear" />
                <p>{{ info.title }}</p>
            </div>
            <p :class="statusClass"  class="p-bold">{{ info.count }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { OverviewCardData } from '~/type';

const props = defineProps<{
  data: OverviewCardData
}>()

const statusClass = computed(() => {
  
      switch (props.data.countData.type) {
        case 'pending':
          return 'text-yellow-500'; // Tailwind class for pending status
        case 'successful':
          return 'text-green-500'; // Tailwind class for successful status
        case 'failed':
          return 'text-red-500'; // Tailwind class for failed status
        case 'charges':
          return 'text-blue-500'; // Tailwind class for charges status
        default:
          return '';
      }
})



</script>
<style >
    
</style>