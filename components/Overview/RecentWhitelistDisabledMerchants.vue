<template>
    <div
        class="bg-white dark:bg-slate-900  dark:bg-opacity-50  p-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
        <!-- header -->
        <div class="flex justify-between px-3  py-4 items-center w-full flex-wrap">
            <h3 class="w-fit text-base md:text-base">Whitelisted & Disabled </h3>
            <MazLink color="theme">
                <p>View all</p>
                <Icon name="ic:sharp-arrow-forward" />
            </MazLink>
        </div>

        <!-- tabs -->
        <MazTabs>
            <MazTabsBar :items="tabs"/>

            <MazTabsContent>
                <MazTabsContentItem :tab="1" class="maz-py-4">
                    <!-- Whitelist merchant list -->
                    <div v-for=" (merchant, index) in 5" :key="index"
                        class=" mt-2 w-full bg-slate-50 flex justify-between items-center gap-x-3 mb-1 dark:bg-slate-950  dark:bg-opacity-50  p-3 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">

                        <div class="flex gap-x-3 w-[70%]">
                            <div v-if="colorMode.preference === 'dark'"
                                class="flex justify-center items-center w-12 h-12 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
                                <img width="28" src="/assets/img/merchant-white.svg" alt="icon">

                            </div>
                            <div v-else
                                class="flex justify-center items-center w-12 h-12 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
                                <img width="28" src="/assets/img/merchant-black.svg" alt="icon">
                            </div>

                            <div class="flex flex-wrap w-[70%] flex-col justify-start">
                                <p style="font-weight: 800;"
                                    class="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">Orange
                                    Tech Limitedsdssdsd ddddssds </p>
                                <p class="text-sm text-slate-500">@Jordan Anthony - 12/22/2024</p>
                            </div>
                        </div>

                        <div class="flex justify-end gap-x-3 w-[25%]">
                            <MazDropdown class="dark:text-white" :items="[
                                { label: 'View profile', action: () => { } },
                                { label: 'View transactions', action: () => { } },
                            ]">
                                More
                            </MazDropdown>
                        </div>

                    </div>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="2" class="maz-py-4">
                    <!-- disabled account -->
                    <div v-for=" (merchant, index) in 5" :key="index"
                        class="mt-2 w-full bg-slate-50 flex justify-between items-center gap-x-3 mb-1 dark:bg-slate-950  dark:bg-opacity-50  p-3 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">

                        <div class="flex gap-x-3 w-[70%]">
                            <div v-if="colorMode.preference === 'dark'"
                                class="flex justify-center items-center w-12 h-12 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
                                <img width="28" src="/assets/img/merchant-white.svg" alt="icon">

                            </div>
                            <div v-else
                                class="flex justify-center items-center w-12 h-12 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
                                <img width="28" src="/assets/img/merchant-black.svg" alt="icon">
                            </div>

                            <div class="flex flex-wrap w-[70%] flex-col justify-start">
                                <p style="font-weight: 800;"
                                    class="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">Orange
                                    Tech Limitedsdssdsd ddddssds </p>
                                <p class="text-sm text-slate-500">@Jordan Anthony - 12/22/2024</p>
                            </div>
                        </div>

                        <div class="flex justify-end gap-x-3 w-[25%]">
                            <MazDropdown class="dark:text-white" :items="[
                                { label: 'View profile', action: () => { } },
                                { label: 'View transactions', action: () => { } },
                            ]">
                                More
                            </MazDropdown>
                        </div>

                    </div>
                </MazTabsContentItem>
            </MazTabsContent>
        </MazTabs>


    </div>
</template>
<script setup lang="ts">
import type { MazTabsBarItem } from 'maz-ui/components/MazTabsBar';


const tabs: MazTabsBarItem[] = [
    { label: 'Whitelisted', disabled: false },
    { label: 'Disabled'},
]

// theme handler
const colorMode = useColorMode()
console.log(colorMode.preference)
console.log(colorMode)
</script>
<style></style>