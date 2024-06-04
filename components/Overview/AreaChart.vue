<template>
    <div
        class="bg-white dark:bg-slate-900  dark:bg-opacity-50  p-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
        <!-- header -->
        <div class="flex justify-between px-3  py-4 items-center w-full flex-wrap">
            <h3 class="w-fit text-base md:text-base">Dashboard Overview</h3>
            <MazLink color="theme">
                <p>View all</p>
                <Icon name="ic:sharp-arrow-forward" />
            </MazLink>
        </div>

        <!-- charts -->
        <apexchart v-if="isClient" type="area" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const colorMode = useColorMode();
const isDarkMode = ref(colorMode.value === 'dark');

const isClient = ref(false);
let ApexCharts = null;

onMounted(async () => {
    isClient.value = true;
    ApexCharts = await import('vue3-apexcharts');
});

// series
const series = ref([
    {
        name: 'Charges',
        data: [
            { x: 'FEB 23', y: 5 },
            { x: 'MAR 23', y: 10 },
            { x: 'APR 23', y: 8 },
            { x: 'MAY 23', y: 15 },
            { x: 'JUN 23', y: 18 },
            { x: 'JUL 23', y: 40 },
        ],
        colors: '#F9AB10',
    },
    {
        name: 'Successful Transactions',
        data: [
            { x: 'FEB 23', y: 5 },
            { x: 'MAR 23', y: 40 },
            { x: 'APR 23', y: 20 },
            { x: 'MAY 23', y: 10 },
            { x: 'JUN 23', y: 55 },
            { x: 'JUL 23', y: 60 },
        ],
        colors: '#9C27B0'
    },
    {
        name: 'Pending Transactions',
        data: [
            { x: 'FEB 23', y: 20 },
            { x: 'MAR 23', y: 30 },
            { x: 'APR 23', y: 25 },
            { x: 'MAY 23', y: 10 },
            { x: 'JUN 23', y: 45 },
            { x: 'JUL 23', y: 50 },
        ],
        colors: '#9C27B0'
    },
    {
        name: 'Failed Transactions',
        data: [
            { x: 'FEB 23', y: 10 },
            { x: 'MAR 23', y: 20 },
            { x: 'APR 23', y: 15 },
            { x: 'MAY 23', y: 30 },
            { x: 'JUN 23', y: 25 },
            { x: 'JUL 23', y: 10 },
        ],
        colors: '#E91E63'
    },
]);

// option

const test = ref(true)
const chartOptions = ref({
    chart: {
        type: 'area',
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
        curve: 'smooth'
    },
    xaxis: {
        type: 'category',
        labels: {
            style: {
                colors: '#B3B3B3'
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: '#B3B3B3'
            },
        },
    },
    tooltip: {
        theme: isDarkMode.value ? 'dark' : 'light',
    },


});

</script>
<style></style>