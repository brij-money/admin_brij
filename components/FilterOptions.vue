<template>
    <div class="">
        <p>Filter Options</p>
        <small class="text-slate-400">Filter merchants using the following options</small>

        <hr class="border-t-1 border-gray-300 dark:border-gray-600 my-4">

        <p class="mb-3">Date range</p>
        <!-- date range -->
        <MazPicker v-model="rangeValues"label="Select date range" block color="warning" 
          double />

        <hr class="border-t-1 border-gray-300 dark:border-gray-600 my-4">

        <p class="mb-3">Status</p>

        <div class="m-3 flex flex-col gap-y-2">
            <MazRadio color="warning" class=" ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-500 p-3 rounded-md" v-for="status in txStatus" v-model="chosenColor" name="mini" :key="status" :value="status"
            :label="status" />
        </div>

        <!-- base buttons -->

        <div class="flex w-full justify-end gap-x-2 mt-6">
            <MazBtn size="md" color="transparent"  >
                <template #right-icon>
                    <Icon name="material-symbols:close-rounded" />
                </template>

                Clear
            </MazBtn>
            <MazBtn size="md" color="warning">Show result</MazBtn>

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