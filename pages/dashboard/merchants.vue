<template>
    <Box class="flex justify-between items-center  p-2 m-5 rounded-sm">
        <h3 class="w-fit text-base md:text-base">Dashboard Overview</h3>
        <!-- actions -->
        <div class="flex gap-x-3">

            <!-- search -->
            <MazInput color="warning" label="" placeholder="Search merchant by name, email etc" v-model="search"
                autocomplete="off">
                <template #left-icon>
                    <Icon class="text-center" name="ri:search-line" />
                </template>
            </MazInput>

            <!-- fiter -->
            <div @click="filterDialog = true"
                class="ring-1 flex items-center px-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-md cursor-pointer  gap-x-3 ring-slate-200 dark:ring-slate-800">
                <p>Filter</p>
                <Icon class="text-center text-black dark:text-white" name="ri:filter-line" />
            </div>

            <!-- export -->
            <div @click="exportDialog = true"
                class="ring-1 flex items-center px-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-md cursor-pointer  gap-x-3 ring-slate-200 dark:ring-slate-800">
                <p>Export</p>
                <Icon class="text-center text-black dark:text-white" name="prime:file-export" />
            </div>

        </div>

        <pre>{{ merchantListResponse?.data }} ddd</pre>

        <!-- filter dialog -->
        <MazDialog v-model="filterDialog">
            <FilterOptions />
        </MazDialog>

        <!-- export dialog -->
        <MazDialog v-model="exportDialog">
            <Export />
        </MazDialog>
    </Box>
    <!-- table -->
    <Box class="m-5">
        <MazTable :loading="isMerchantLoading" class="dark:text-white dark:bg-slate-950 bg-white " hoverable size="sm"
            :headers="['NAME', 'MERCHANT ID', 'EMAIL', 'DATE', 'STATUS', 'COUNTRY', 'ACTION']">
            <MazTableRow v-for="(merchant, index) in merchantListResponse?.data" :key="index" search
                class="dark:bg-slate-950 bg-white">
                <MazTableCell>
                    <div class="flex gap-3 items-center">
                        <div class="flex justify-center items-center p-3 brounded-full">
                            <Icon class="text-xl" name="mdi:storefront-outline" />
                        </div>
                        <div class="flex flex-col">
                            <p class="p-bold">{{ merchant.business_name }}</p>
                            <small>@{{ merchant.first_name }} {{ merchant.last_name }}</small>
                        </div>
                    </div>
                </MazTableCell>
                <MazTableCell>
                    <p>{{ merchant.merchant_id }}</p>
                </MazTableCell>
                <MazTableCell>
                    <p>{{ merchant.business_email }}</p>
                </MazTableCell>
                <MazTableCell>
                    <p>{{ merchant.created_at }}</p>
                </MazTableCell>
                <MazTableCell>
                    <MazBadge key="success" color="theme" pastel>
                        {{ merchant.status }}
                    </MazBadge>
                </MazTableCell>
                <MazTableCell>
                    {{ merchant.country_name }}
                </MazTableCell>

                <!-- 
                <MazDropdown  :items="[
                    { label: 'View transactions', href: 'https://www.google.com', target: '_blank' },
                    { label: 'View merchant account', href: 'https://www.google.com', target: '_blank' },
                    { label: 'View merchant Info', action: () => viewMerchantDetails(), target: '_blank' },
                    { label: 'Whitelist account', href: 'https://www.google.com', target: '_blank' },
                    { label: 'Disable account',  to: { name: 'index' } },
                ]"> -->
                <MazDropdown :items="[
                    { label: 'View merchant Info', action: () => viewMerchantDetails(), target: '_blank' },
                ]">
                    <MazTableCell>
                        Action
                    </MazTableCell>
                </MazDropdown>
            </MazTableRow>



        </MazTable>
    </Box>

    <div class="flex p-5 w-full justify-center">
        <MazPagination v-bind="foo" v-model="currentPage" size="sm" />
    </div>

    <!-- view merchant details dialog -->

    <MazDialog v-model="isMerchantDetailsOpen" width="1000px" title="Merchant Information" max-height="95vh" scrollable>
        <MerchantDetails />
    </MazDialog>

</template>
<script setup lang="ts">
import MazPagination, { type Props } from 'maz-ui/components/MazPagination'
import type { MerchantsResponse } from '~/type';
const { $api } = useNuxtApp()

const search = ref('')
const filterDialog = ref(false)
const exportDialog = ref(false)
const currentPage = ref(1)
const isMerchantDetailsOpen = ref(false)
const isMerchantLoading = ref(false);
const merchantListResponse = ref<MerchantsResponse>()

const foo: Props = {
    resultsSize: 100,
    totalPages: 10,
    activeColor: 'warning',
}

function viewMerchantDetails() {
    isMerchantDetailsOpen.value = true;
}


async function getMerchants() {

    try {
        isMerchantLoading.value = true;
        // await $api.merchant.getMerchants()
            isMerchantLoading.value = false;
    } catch (e: any) {
        isMerchantLoading.value = false;

        ShowMessage(e.response._data.message, true)
        console.log(e)

    }

}
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})
</script>
<style></style>