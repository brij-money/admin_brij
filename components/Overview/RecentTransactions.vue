<template>
    <Box
        class=" p-2 rounded-sm overflow-x-auto">
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
            <TransactionDetail/>
        </MazDialog>
    </Box>
</template>
<script setup lang="ts">



// view transaction
const viewTransaction = ref(false)
</script>
<style></style>