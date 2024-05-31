<template>
    <div class="flex flex-col w-full">

        <!-- header -->
        <div class="flex justify-between lg:px-10 px-4 py-8 items-center w-full flex-wrap">
            <h3 class="w-fit text-base md:text-base">Dashboard Overview</h3>
            <div
                class="flex w-fit justify-center gap-x-3 items-center -- bg-white dark:bg-slate-900  dark:bg-opacity-50  p-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
                <Icon name="solar:graph-broken" />
                <p class="text-sm">30k merchant</p>
                <img src="/assets/img/ghana.svg" alt="flag">
            </div>
        </div>

        <!-- overview cards -->
        <div class="px-4 w-full flex  flex-row flex-wrap lg:px-8">
            <div v-for="(card, index) in cardInfoList" :key="index" class="div gap-x-7 flex flex-col gap-y-2  lg:w-1/4 w-1/2 -- bg-white dark:bg-slate-900  dark:bg-opacity-50  p-5 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
                <div :class="[card.color]" class="flex flex-col  sm:flex-row-reverse lg:items-center sm:justify-between w-full gap-3">
                    <Icon class="text-xl" :name="card.icon" />
                    <p style="font-weight: 800;" >{{ card.title }}</p>
                </div>
                <h2 >{{ card.value }}</h2>
            </div>
        </div>

        <!-- recent transaction, merchant, whitelisted -->
        <div class="flex lg:flex-row flex-col w-full lg:px-8 px-4 gap-x-1 mt-3">
            <div class="flex flex-col lg:w-full w-full">
                <!-- Recent Transaction -->
                <OverviewRecentTransactions/>
            </div>
            <div class="flex flex-col lg:w-2/5 w-full">
            
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>

const cardInfoList = reactive([
    {
        icon: 'solar:graph-broken',
        title: 'Successful transaction',
        value: 'GHS 3000.00',
        color:'text-green-700'
    },
    {
        icon: 'solar:graph-down-outline',
        title: 'Failed transaction',
        value: 'GHS 100.00',
        color:'text-red-700'
    },
    {
        icon: 'material-symbols:pending-outline',
        title: 'Pending transaction',
        value: 'GHS 4000.00',
        color:'text-amber-500'
    },
    {
        icon: 'majesticons:coins-line',
        title: 'Charges transaction',
        value: 'GHS 5000.00',
        color:'text-violet-700'
    }
])

definePageMeta({
    layout: 'dashboard'
})
</script>
<style scoped></style>