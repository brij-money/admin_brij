<template>
    <div
        class="bg-white dark:bg-slate-900  dark:bg-opacity-50  p-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm overflow-x-auto">
        <!-- header -->
        <div class="flex justify-between px-3  py-4 items-center w-full flex-wrap">
            <h3 class="w-fit text-base md:text-base">Recent Transactions</h3>
            <MazLink color="theme">
                <p>View all</p>
                <Icon name="ic:sharp-arrow-forward" />
            </MazLink>
        </div>

        <!-- list -->
        <MazTable class="dark:text-white dark:bg-slate-950 bg-white " hoverable size="sm"
            :headers="['Narration', 'Owner', 'Amount', 'Status', 'date']">
            <MazTableRow v-for="(tx, index) in 10" :key="index" @click="viewTransaction = true"
                class="dark:bg-slate-950 bg-white">
                <MazTableCell>
                    <div class="flex gap-3 items-center">
                        <Icon class="text-lg text-amber-500" name="gg:arrows-exchange-alt" />
                        <h3 class="tex-sm">Funds sent +23354455445</h3>
                    </div>
                </MazTableCell>
                <MazTableCell>
                    <MazLink color="theme">
                        <p>@Orange Tech LTd</p>
                    </MazLink>
                </MazTableCell>
                <MazTableCell>
                    + GHS 300
                </MazTableCell>
                <MazTableCell>
                    <MazBadge key="success" color="success" pastel>
                        Success
                    </MazBadge>
                </MazTableCell>
                <MazTableCell>

                    <p>17/02/2023</p>
                    <p class="tex-xs text-slate-400">12:300 PM</p>

                </MazTableCell>
            </MazTableRow>
        </MazTable>


        <!-- view a transaction -->
        <MazDialog v-model="viewTransaction" title="Transaction detail">
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
            </div>

            <template #footer="{ close }">
                <MazBtn @click="close">
                    Confirm
                </MazBtn>
            </template>
        </MazDialog>
    </div>
</template>
<script setup lang="ts">

// theme handler
const colorMode = useColorMode()
console.log(colorMode.preference)
console.log(colorMode)

// view transaction
const viewTransaction = ref(false)
</script>
<style></style>