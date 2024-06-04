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
            :headers="['Narration', 'Owner', 'Amount', 'Status', 'date', 'Action']">
            <MazTableRow v-for="(tx, index) in 5" :key="index" class="dark:bg-slate-950 bg-white">
                <MazTableCell>
                    <div class="flex gap-3 items-center">
                        <Icon class="text-lg text-amber-500" name="gg:arrows-exchange-alt" />
                        <p style="font-weight: 800;" class="tex-sm">Funds sent +23354455445</p>
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
                <MazTableCell>
                    <Icon name="ic:sharp-arrow-forward" />

                </MazTableCell>
            </MazTableRow>
        </MazTable>

    </div>
</template>
<script setup lang="ts">

// theme handler
const colorMode = useColorMode()
console.log(colorMode.preference)
console.log(colorMode)
</script>
<style></style>