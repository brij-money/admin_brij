<template>
    <div class="">
        <p>Export Options</p>
        <small class="text-slate-400">Export merchant using following options</small>

        <hr class="border-t-1 border-gray-300 dark:border-gray-600 my-4">

        <p class="mb-3">Date range</p>
        <!-- date range -->
        <MazPicker v-model="rangeValues"label="Select date range" block color="warning" 
          double />

        <hr class="border-t-1 border-gray-300 dark:border-gray-600 my-4">

 

        <!-- base buttons -->

        <div class="flex w-full justify-end gap-x-2 mt-6">
            <MazBtn size="md" color="transparent"  >
                Cancel
            </MazBtn>
            <MazBtn size="md" color="warning">Export result</MazBtn>

        </div>



    </div>
</template>
<script setup lang="ts">
const rangeValues = ref({
    start: '2022-02-03',
    end: '2022-02-28',
})

const minMaxDates = ref({
    min: '2022-05-05',
    max: '2022-06-20',
})

const txStatus = ['Active', 'Inactive']
const chosenColor = ref('primary')

</script>
<style></style>