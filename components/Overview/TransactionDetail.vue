<template>
            <div class="flex p-5 flex-col w-full ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md gap-y-4">
                <p class="text-sm">Merchant</p>
                <!-- header -->
                <div class="flex gap-x-3 w-[100%]">
                    <div v-if="colorMode.preference === 'dark'"
                        class="flex justify-center items-center w-12 h-12 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-sm">
                        <img width="28" src="/assets/img/merchant-white.svg" alt="icon">

                    </div>
                    <div v-else
                        class="flex justify-center items-center w-12 h-12 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-sm">
                        <img width="28" src="/assets/img/merchant-black.svg" alt="icon">
                    </div>

                    <div class="flex flex-wrap w-[70%] flex-col justify-start">
                        <p class="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis p-bold">
                            Orange
                            Tech </p>
                        <p class="text-sm text-slate-500">@Jordan Anthony</p>
                    </div>

                    <MazLink color="warning">
                        View
                    </MazLink>
                </div>

                <div style="background-color: var(--color-primary);" class="flex p-5 flex-col gap-y-1 w-full ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                    <div class="flex w-full justify-between">
                        <div>
                            <p class="text-sm text-white">Transaction ID</p>
                            <p class="text-sm p-bold text-white">0032332333</p>
                        </div>
                        <MazBtn color="warning" fab size="sm" >
                            <div class="flex w-full h-full justify-center items-center"></div>
                            <Icon class="text-lg" name="material-symbols:content-copy-outline"/>
                        </MazBtn>
                    </div>

                </div>

                <!-- body -->
                <div class="flex p-5 flex-col gap-y-4 w-full ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                    <p class="text-sm">Transaction Details</p>
                    <div class="flex flex-col w-full gap-y-2">
                    <!-- date -->
                        <div class="flex justify-between">
                             <p class="text-sm ">Date</p>
                             <p class="text-sm p-bold">May 3, 2023 10:30 AM</p>
                        </div>
                        <!-- type -->
                        <div class="flex justify-between">
                             <p class="text-sm ">Type</p>
                             <p class="text-sm p-bold">Payewithbrij</p>
                        </div>
                        <!-- method -->
                        <div class="flex justify-between">
                             <p class="text-sm font-">Method</p>
                             <p class="text-sm p-bold">momo</p>
                        </div>
                        <!-- amount -->
                        <div class="flex justify-between">
                             <p class="text-sm font-">Amount</p>
                             <p class="text-sm p-bold">GHS 1000.00</p>
                        </div>
                        <!-- fees -->
                        <div class="flex justify-between">
                             <p class="text-sm font-">Status</p>
                             <p class="text-sm p-bold">Pending</p>
                        </div>
                    </div>
                 </div>

                 <!-- balance -->
                 <div class="flex p-5 flex-col gap-y-4 w-full ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                    <p class="text-sm">Balance</p>
                    <div class="flex flex-col w-full gap-y-2">
                    <!-- date -->
                        <div class="flex justify-between">
                             <p class="text-sm ">Balance before</p>
                             <p class="text-sm p-bold">GHS 3000.00</p>
                        </div>
                        <!-- type -->
                        <div class="flex justify-between">
                             <p class="text-sm ">Balance after</p>
                             <p class="text-sm p-bold">GHS 28000.00</p>
                        </div>
                    </div>
                 </div>
            </div>
</template>
<script setup lang="ts">
// theme handler
const colorMode = useColorMode()
console.log(colorMode.preference)
console.log(colorMode)
</script>
<style>
    
</style>