<template>
    <Box class="display flex m-5 p-5 rounded-md justify-between">
        <div class="flex gap-x-4 items-center">
            <small class="text-gray-400">Merchant</small>
            <p class="p-bold">John Manson</p>
        </div>

        <div class="flex gap-x-2 items-center">
            <Icon class="text-amber-500" name="ic:round-remove-red-eye" />
            <MazLink color="warning" @click="isMerchantDetailsOpen = true"> View merchant info </MazLink>
        </div>
    </Box>

    <Box class="p-5 m-5 rounded-md">
        <!-- header -->
        <div class="flex  items-center justify-between">
            <p class="p-bold">Transaction Overview</p>
            <MazBtn color="transparent" @click="toggleOverview">
                <div class="flex gap-x-2">
                    <Icon class="text-lg" v-if="overviewOpen" name="ic:twotone-keyboard-arrow-up" />
                    <Icon class="text-lg" v-else name="ic:baseline-keyboard-arrow-down" />

                    <p v-if="overviewOpen">Close overview</p>
                    <p v-else>Open overview</p>
                </div>
            </MazBtn>
        </div>

        <!-- overview body -->
        <MazExpandAnimation v-model="overviewOpen">

            <div class="flex lg:flex-row flex-col w-full mt-10">
                <!-- left-hs -->
                <div class="flex lg:w-[60%] w-[100%] ">
                    <div class="flex w-full flex-col flex-wrap mt-5 gap-y-3">

                        <!-- select -->
                        <div class="flex flex-col gap-y-2 md:w-fit w-full">
                            <small class="dark:text-white">SELECT WALLET</small>
                            <MazSelect label="Select color" color="warning" v-model="selectedUser"
                                :options="customTemplateOptions" v-slot="{ option, isSelected }" search>
                                <div class="flex items-center" style="width: 100%; gap: 1rem">
                                    <MazAvatar size="0.8rem" :src="option.picture?.toString()" />
                                    <strong class="dark:text-white">
                                        {{ option.label }}
                                    </strong>
                                </div>
                            </MazSelect>
                        </div>

                        <!-- cards -->
                        <div class="flex flex-wrap gap-x-2 gap-y-2 mb-10">
                            <!-- deposit -->
                            <div
                                class=" flex flex-col ring-1 gap-y-2 dark:ring-1 ring-slate-900/5 md:w-fit w-full dark:ring-slate-900 rounded-md p-5">
                                <div class="flex items-center gap-x-14">
                                    <small class="text-gray-400">TOTAL DEPOSIT</small>
                                    <Icon class="text-lg text-green-500" v-if="overviewOpen"
                                        name="ic:outline-arrow-downward" />

                                </div>
                                <h2>GHS 2333.00</h2>

                            </div>

                            <!-- with drawr -->
                            <div
                                class=" flex flex-col ring-1 gap-y-2 dark:ring-1 ring-slate-900/5 md:w-fit w-full dark:ring-slate-900 rounded-md p-5">
                                <div class="flex items-center gap-x-14">
                                    <small class="text-gray-400">TOTAL WITHDRAWAL</small>
                                    <Icon class="text-lg text-red-500" v-if="overviewOpen"
                                        name="ic:outline-arrow-upward" />
                                </div>
                                <h2>GHS 2333.00</h2>

                            </div>

                            <!-- wallet -->
                            <div
                                class=" flex flex-col ring-1 gap-y-2 dark:ring-1 ring-slate-900/5 md:w-fit w-full dark:ring-slate-900 rounded-md p-5">
                                <div class="flex items-center gap-x-14">
                                    <small class="text-gray-400">WALLET BALANCE</small>
                                    <Icon class="text-lg text-violet-500" v-if="overviewOpen" name="ph:wallet" />
                                </div>
                                <h2>GHS 2333.00</h2>

                            </div>
                        </div>

                        <!-- chart -->
                        <apexchart style="width: 100%;" v-if="isClient" type="area" :options="chartOptions"
                            :series="series"></apexchart>

                    </div>
                </div>
                <!-- right-hs -->
                <div class="flex flex-col p-6 lg:w-[40%] w-[100%]">
                    <!-- header -->

                    <div class="flex justify-between w-full mb-5">
                        <p class="p-bold">Recent transaction</p>
                        <MazLink color="warning" :to="{ path: '/' }"> View all transaction </MazLink>
                    </div>

                    <!-- list of recent -->
                    <div v-for="recent_tx in 7"
                        class="flex mb-2  ring-1 p-5 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-md">
                        <div class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-50 mr-2">
                            <Icon class="text-xl" name="gg:arrows-exchange" />
                        </div>
                        <!-- tx-info -->
                        <div class="flex flex-wrap w-[60%] flex-col justify-start">
                            <h3 class="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">Orange
                                Tech </h3>
                            <p class="text-sm text-slate-500"> <span>Pending</span> - 12/22/2024 10:30AM</p>
                        </div>

                        <!-- tx-amount -->
                        <div class="flex flex-col items-end">
                            <p class="p-bold">+ GHS 6000</p>
                            <small>Purchasebrijxoffer</small>
                        </div>
                    </div>

                </div>
            </div>




            <!-- charts -->
            <!-- 
            <div class="flex lg:flex-row flex-col  w-full mt-20 gap-x-3">
                <div class="flex lg:w-[50%] w-[100%]">
                    
                </div>
                <div class="flex lg:w-[50%] w-[100%]">
                <p>djdjj</p>
            </div>
            </div> -->
        </MazExpandAnimation>

    </Box>

    <!-- view merchant details dialog -->

    <MazDialog v-model="isMerchantDetailsOpen" width="1000px" title="Merchant Information" max-height="95vh" scrollable>
    <MerchantDetails/>
    </MazDialog>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const colorMode = useColorMode();
const isDarkMode = ref(colorMode.value === "dark");
const overviewOpen = ref(true)
const selectedUser = ref()
let ApexCharts = null;
const isClient = ref(false);
const isMerchantDetailsOpen = ref(false)

// wallet options
const customTemplateOptions = [
    { picture: 'https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=1d90ff&seed=JamesSmile', label: 'GHS', value: 1 },
    { picture: 'https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=1d90ff&seed=BradSmile', label: 'NGN', value: 2 },
    { picture: 'https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=1d90ff&seed=CedricSmile', label: 'KES', value: 3 },
]
// chart data
// series
const series = ref([
    {
        name: "Total Deposits",
        data: [
            { x: "JAN 23", y: 5 },
            { x: "FEB 23", y: 5 },
            { x: "MAR 23", y: 10 },
            { x: "APR 23", y: 8 },
            { x: "MAY 23", y: 15 },
            { x: "JUN 23", y: 18 },
            { x: "JUL 23", y: 40 },
            { x: "AUG 23", y: 40 },
            { x: "SEP 23", y: 23 },
            { x: "OCT 23", y: 32 },
            { x: "NOV 23", y: 78 },
            { x: "DEC 23", y: 23 },
        ],
        colors: "#9C27B0",
    },
    {
        name: "Total Withdraw",
        data: [
            { x: "JAN 23", y: 5 },
            { x: "FEB 23", y: 5 },
            { x: "MAR 23", y: 40 },
            { x: "APR 23", y: 20 },
            { x: "MAY 23", y: 10 },
            { x: "JUN 23", y: 55 },
            { x: "JUL 23", y: 60 },

            { x: "AUG 23", y: 30 },
            { x: "SEP 23", y: 60 },
            { x: "OCT 23", y: 20 },
            { x: "NOC 23", y: 12 },
            { x: "DEC 23", y: 6 },
        ],
        colors: "#F9AB10",
    },
]);

// chart options
const chartOptions = ref({
    chart: {
        type: "area",
        stacked: false,
        toolbar: {
            show: true,
            tools: {
                download: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "category",
        labels: {
            style: {
                colors: "#B3B3B3",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: "#B3B3B3",
            },
        },
    },
    tooltip: {
        theme: isDarkMode.value ? "dark" : "light",
    },
});

onMounted(async () => {
    isClient.value = true;
    ApexCharts = await import("vue3-apexcharts");
});

function toggleOverview() {
    overviewOpen.value = !overviewOpen.value
}



definePageMeta({
    layout: 'dashboard'
})
</script>
<style></style>