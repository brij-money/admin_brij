<template>
    <div class="flex flex-col w-full">

        <!-- header -->
        <div class="flex justify-between lg:px-10 px-4 py-8 items-center w-full flex-wrap">
            <h3 class="w-fit text-base md:text-base">Dashboard Overview</h3>
            <Box class="flex w-fit justify-center gap-x-3 items-center p-2 rounded-sm ">

                <Icon class="dark:text-white" name="solar:graph-broken" />
                <p class="text-sm">30k merchant</p>
                <img src="/assets/img/ghana.svg" alt="flag">
            </Box>

        </div>

        <!-- overview cards -->
        <div class="px-4 w-full flex  flex-row flex-wrap lg:px-8">
            <Box v-for="(card, index) in cardInfoList" :key="index" @click="showCardDetailsDrawer(card)"
                class="cursor-pointer border-2  border-white dark:border-slate-900 hover:border-amber-500 gap-x-7 flex flex-col gap-y-2  lg:w-1/4 w-1/2 p-5">
                <div :class="[card.color]"
                    class="flex flex-col  sm:flex-row-reverse lg:items-center sm:justify-between w-full gap-3">
                    <Icon class="text-xl" :name="card.icon" />
                    <h3>{{ card.title }}</h3>
                </div>

                <h2>
                    <MazAnimatedCounter :count="card.countData.total" />
                </h2>

            </Box>

        </div>

        <!-- recent transaction, merchant, whitelisted -->
        <div class="flex lg:flex-row justify-between flex-col w-full lg:px-8 px-4 gap-3 mt-3">
            <div class="flex flex-col lg:w-[70%] w-full gap-3">
                <!-- Recent Transaction -->
                <AreaChart />
                <!-- Recent Transaction -->
                <RecentTransactions />
            </div>
            <div class="flex flex-col lg:w-[30%] w-full gap-3">
                <!-- Recent join merchants -->
                <RecentMerchants />
                <!-- recent whitelist & Disabled account -->
                <RecentWhitelistDisabledMerchants />

            </div>
        </div>

        <!-- over view cards drawer info -->
        <MazDrawer title="Successful transaction" variant="right" v-model="isDrawerOpen">
            <template #title>
                <p class=" text-base p-bold">{{ selectedCard?.title }} breakdown</p>

            </template>
            <OverviewCardDetails :data="selectedCard!" />
        </MazDrawer>

    </div>
</template>
<script lang="ts" setup>
import type { OverviewCardData } from '~/type';


const selectedCard = ref<OverviewCardData>()

const isDrawerOpen = ref(false)
const cardInfoList = reactive<OverviewCardData[]>([
    {
        icon: 'solar:graph-broken',
        title: 'Successful transaction',
        value: 3000,
        color: 'text-green-700',
        countData: {
            type: 'successful',
            total: 300,
            data: [
                {
                    title: 'Pay with Brij',
                    currency: 'GHS',
                    count: 200,
                },
                {
                    title: 'Payout',
                    currency: 'GHS',
                    count: 400,
                },
                {
                    title: 'Bill payment',
                    currency: 'GHS',
                    count: 34,
                },
                {
                    title: 'Cashouts',
                    currency: 'GHS',
                    count: 54,
                },
                {
                    title: 'Airtime Purchase',
                    currency: 'GHS',
                    count: 23,
                },
                {
                    title: 'Fund wallet',
                    currency: 'GHS',
                    count: 70,
                },
                {
                    title: 'Vouchers',
                    currency: 'GHS',
                    count: 0,
                },
            ]
        }
    },
    {
        icon: 'solar:graph-down-outline',
        title: 'Failed transaction',
        value: 100.00,
        color: 'text-red-700',
        countData: {
            type: 'failed',
            total: 47,
            data: [
                {
                    title: 'Pay with Brij',
                    currency: 'GHS',
                    count: 10,
                },
                {
                    title: 'Payout',
                    currency: 'GHS',
                    count: 23,
                },
                {
                    title: 'Bill payment',
                    currency: 'GHS',
                    count: 12,
                },
                {
                    title: 'Cashouts',
                    currency: 'GHS',
                    count: 3,
                },
                {
                    title: 'Airtime Purchase',
                    currency: 'GHS',
                    count: 3,
                },
                {
                    title: 'Fund wallet',
                    currency: 'GHS',
                    count: 1,
                },
                {
                    title: 'Vouchers',
                    currency: 'GHS',
                    count: 0,
                },
            ]
        }
    },
    {
        icon: 'material-symbols:pending-outline',
        title: 'Pending transaction',
        value: 4000.00,
        color: 'text-amber-500',
        countData: {
            type: 'pending',
            total: 123,
            data: [
                {
                    title: 'Pay with Brij',
                    currency: 'GHS',
                    count: 3,
                },
                {
                    title: 'Payout',
                    currency: 'GHS',
                    count: 2,
                },
                {
                    title: 'Bill payment',
                    currency: 'GHS',
                    count: 10,
                },
                {
                    title: 'Cashouts',
                    currency: 'GHS',
                    count: 12,
                },
                {
                    title: 'Airtime Purchase',
                    currency: 'GHS',
                    count: 3,
                },
                {
                    title: 'Fund wallet',
                    currency: 'GHS',
                    count: 23,
                },
                {
                    title: 'Vouchers',
                    currency: 'GHS',
                    count: 0,
                },
            ]
        }
    },
    {
        icon: 'majesticons:coins-line',
        title: 'Charges transaction',
        value: 27,
        color: 'text-blue-700',
        countData: {
            type: 'charges',
            total: 123,
            data: [
                {
                    title: 'Pay with Brij',
                    currency: 'GHS',
                    count: 8,
                },
                {
                    title: 'Payout',
                    currency: 'GHS',
                    count: 32,
                },
                {
                    title: 'Bill payment',
                    currency: 'GHS',
                    count: 21,
                },
                {
                    title: 'Cashouts',
                    currency: 'GHS',
                    count: 60,
                },
                {
                    title: 'Airtime Purchase',
                    currency: 'GHS',
                    count: 34,
                },
                {
                    title: 'Fund wallet',
                    currency: 'GHS',
                    count: 70,
                },
                {
                    title: 'Vouchers',
                    currency: 'GHS',
                    count: 0,
                },
            ]
        }
    }
])



function showCardDetailsDrawer(card: any) {
    selectedCard.value = card;
    isDrawerOpen.value = true;
}
definePageMeta({
    layout: 'dashboard'
})
</script>
<style scoped></style>