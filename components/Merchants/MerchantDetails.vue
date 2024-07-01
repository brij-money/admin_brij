<template>
  <!-- personal info -->
  <div class="flex flex-col gap-y-2 w-full">


    <!-- profile -->
    <div class="flex flex-col p-5  ring-1  dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
      <!-- profile -->
      <div class="flex justify-between mb-2 ">
        <div class="flex">
          <div class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 mr-2">
            <Icon class="text-xl" name="ph:user-bold" />

          </div>
          <!-- tx-info -->
          <div class="flex flex-wrap  flex-col justify-start">
            <h3 class="text-ellipsis p-bold">{{ merchant?.first_name }} {{ merchant?.last_name }}</h3>
            <p class="text-sm text-slate-500"> N/A</p>
            <pre>{{ merchant }}</pre>
          </div>
        </div>
        <!-- tx-amount -->
        <div class="flex flex-col items-end">
          <MazBtn color="transparent">
            <div class="flex items-center gap-x-2">
              <Icon name="hugeicons:file-export" />
              <p>Export</p>
            </div>
          </MazBtn>

        </div>
      </div>

      <!-- additional details -->
      <div class="flex mt-5 flex-wrap gap-x-10 gap-y-4">
        <div class="flex flex-col gap-y-1">
          <small class="text-slate-500">Merchant ID</small>
          <p>{{ merchant?.merchant_id }}</p>
        </div>
        <div class="flex flex-col gap-y-1">
          <small class="text-slate-500">Phone</small>
          <p>N/A</p>
        </div>
        <div class="flex flex-col gap-y-1">
          <small class="text-slate-500">Date joined</small>
          <p>{{ formatDate(merchant?.created_at!) }}</p>
        </div>
      </div>
    </div>

    <!-- business profile -->
    <div class="flex flex-col gap-y-4 p-5  ring-1  dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
      <p class="p-bold">Business Information</p>

      <div class="flex flex-col gap-y-4">
        <!-- profile -->
        <div class="flex justify-between mb-2 ">
          <div class="flex">
            <div class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 mr-2">
              <Icon class="text-xl" name="mdi:storefront-outline" />
            </div>
            <!-- tx-info -->
            <div class="flex flex-wrap  flex-col justify-start">
              <h3 class="p-bold">{{ merchant?.business_name }} </h3>
              <p class="text-sm text-slate-500"> {{ merchant?.business_email }}</p>
            </div>
          </div>
        </div>

        <!-- description -->
        <div class="flex flex-col gap-y-1 ">
          <small class="text-slate-500">Business Description/Bio</small>
          <p>{{ merchant?.business_description }}</p>
        </div>

        <!-- additional details -->
        <div class="flex mt-5 flex-wrap gap-x-10 gap-y-4">
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Industry</small>
            <p>{{ merchant?.business_industry }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Staff size</small>
            <p>{{ merchant?.business_staff_size }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Doc. Type</small>
            <p>{{ merchant?.business_type }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Category</small>
            <p>{{ merchant?.business_category }}</p>
          </div>
        </div>

        <!-- business certificate -->
        <div class="flex mt-5 flex-wrap gap-x-10">
          <div class="flex flex-col gap-y-4">
            <small class="text-slate-500">Upload Business docs</small>
            <div v-if="merchant?.merchant_business_documents.length! > 0 " class="flex flex-wrap gap-x-3">
              <!-- card -->

              <div v-for="(doc, index) in merchantDocs?.documents " :key="index"
                class="flex p-3 justify-between items-center gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex">
                  <div
                    class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 mr-2">
                    <Icon class="text-xl" name="material-symbols-light:lab-profile-rounded" />
                  </div>
                  <!-- tx-info -->
                  <div class="flex flex-wrap  flex-col justify-start">
                    <h3 class="text-sm p-bold">{{ doc?.media.name }}</h3>
                    <p class="text-sm text-slate-500">  Doc_type: {{ doc?.document_type}}</p>
                  </div>
                </div>
                <!-- action -->

                <a :href="doc?.document_file_url " class="text-amber-500" target="_blank">View</a>
              </div>

            </div>
            <div class="flex flex-col items-center gap-y-3" v-else>
              <Icon class="text-7xl text-slate-200" name="mdi:file-alert-outline" />
              <small>No document Found for this Merchant</small>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--Business contact Information  -->
    <div class="flex flex-col gap-y-4 p-5  ring-1  dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
      <p class="p-bold">Business Contact Information</p>

      <div class="flex flex-col gap-y-4">

        <!-- additional details -->
        <div class="flex flex-wrap gap-x-10 gap-y-4">
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Phone number</small>
            <p>{{ merchant?.business_phone }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Email</small>
            <p>{{ merchant?.business_email }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Region</small>
            <p>{{ merchant?.business_region }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">City</small>
            <p>{{ merchant?.business_city }}</p>
          </div>
        </div>

        <!-- business certificate -->
        <div class="flex mt-5 flex-wrap gap-x-10">
          <div class="flex flex-col gap-y-4">
            <small class="text-slate-500">Business Social links</small>
            <div class="flex flex-wrap gap-x-3">
              <!-- Facebook -->
              <div v-if="merchant?.business_facebook_profile !== null || undefined || '' "
                class="flex p-3 justify-between gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex">
                  <!-- tx-info -->
                  <div class="flex flex-wrap  flex-col justify-start">
                    <h3 class="text-sm">{{ merchant?.business_facebook_profile }} </h3>
                    <p class="text-sm text-slate-500">Facebook</p>
                  </div>
                </div>
                <!-- action -->
                <MazBtn color="warning" fab size="sm" @click="copyToClipboard(merchant?.business_facebook_profile!)">
                  <div class="flex w-full h-full justify-center items-center"></div>
                  <Icon class="text-lg" name="material-symbols:content-copy-outline" />
                </MazBtn>
              </div>

              <!-- instagram -->
              <div v-if="merchant?.business_instagram_profile !== null || undefined || '' "
                class="flex p-3 justify-between gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex">
                  <!-- tx-info -->
                  <div class="flex flex-wrap  flex-col justify-start">
                    <h3 class="text-sm">{{ merchant?.business_instagram_profile  }} </h3>
                    <p class="text-sm text-slate-500">Facebook</p>
                  </div>
                </div>
                <!-- action -->
                <MazBtn color="warning" fab size="sm" @click="copyToClipboard(merchant?.business_instagram_profile !)">
                  <div class="flex w-full h-full justify-center items-center"></div>
                  <Icon class="text-lg" name="material-symbols:content-copy-outline" />
                </MazBtn>
              </div>

              <!-- Twitter -->
              <div v-if="merchant?.business_twitter_profile !== null || undefined || '' "
                class="flex p-3 justify-between gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex">
                  <!-- tx-info -->
                  <div class="flex flex-wrap  flex-col justify-start">
                    <h3 class="text-sm">{{ merchant?.business_twitter_profile  }} </h3>
                    <p class="text-sm text-slate-500">Facebook</p>
                  </div>
                </div>
                <!-- action -->
                <MazBtn color="warning" fab size="sm" @click="copyToClipboard(merchant?.business_twitter_profile !)">
                  <div class="flex w-full h-full justify-center items-center"></div>
                  <Icon class="text-lg" name="material-symbols:content-copy-outline" />
                </MazBtn>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Operation -->
    <div class="flex flex-col gap-y-4 p-5  ring-1  dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
      <p class="p-bold">Operation</p>

      <div class="flex flex-col gap-y-4">



        <!-- business certificate -->
        <div class="flex  flex-wrap gap-x-10 w-full">
          <div class="flex flex-col gap-y-4 w-full">
            <div class="flex flex-wrap gap-x-3 w-full">
              <!-- card approve -->
              <div
                class="flex p-5 justify-between lg:w-[49%] w-full gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex flex-col">
                  <div class="flex gap-x-2">
                    <p>Approve / Disapprove Merchant  </p>
                    <MazBadge v-if="merchant?.onboarding_stage! > 5" key="success" color="success" pastel>
                        Approved
                    </MazBadge>
                    <MazBadge   v-else color="warning" pastel>
                        Not Approved
                    </MazBadge>
                  </div>
                  <small class="text-slate-500 mt-2">Approve or disapprove merchant's account</small>
                  <div class="flex mt-4 w-full gap-x-2">
                    <MazBtn v-if="merchant?.onboarding_stage! > 5" color="danger">
                      <div class="flex items-center gap-x-3" @click="disapproveMerchant()">
                        <Icon name="mi:document-check" />
                        <p>Disapprove </p>
                      </div>
                    </MazBtn>
                    <MazBtn v-else color="success" :loading="isApproving" @click="approveMerchant()">
                      <div class="flex items-center gap-x-3">
                        <Icon name="ep:document-delete" />
                        <p>Approve</p>
                      </div>
                    </MazBtn>
                  </div>
                </div>
              </div>

              <!--  black listed-->
              <div
                class="flex p-5 justify-between lg:w-[49%] w-full gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex flex-col">
                  <p>Whitelist / Blacklist Merchant</p>
                  <small class="text-slate-500 mt-2">Sed ut perspiciatis unde omniss te natuserror sit voluptatem
                    iatisund</small>
                  <div class="flex mt-4 w-full gap-x-2">
                    <MazBtn color="warning">
                      <div class="flex items-center gap-x-3">
                        <Icon name="material-symbols:order-approve" />
                        <p>Whitelist </p>
                      </div>
                    </MazBtn>
                    <MazBtn color="transparent">
                      <div class="flex items-center gap-x-3">
                        <p>Blacklist</p>
                      </div>
                    </MazBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Merchant, DocsData, ApproveMerchantResponse } from '~/type';
const { token } = useAuth();
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;
const isApproving = ref(false);
const isDisapproving = ref(false);
const approveMerchantResponse = ref<ApproveMerchantResponse>()
const props = defineProps<{
  merchantDocs: DocsData | undefined;
  merchant: Merchant | undefined
}>()
const emit = defineEmits(['on-successful'])



async function approveMerchant() {
    try {
      isApproving.value = true;
        const res = await $fetch<ApproveMerchantResponse>(`${baseUrl}/admin/merchants/approve`, {
          method:'POST',
          body:{
            merchant_id:props.merchant?.merchant_id
          },
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: "application/json",
            },
        });

        console.log(res);
        approveMerchantResponse.value = res;
        isApproving.value = false;
        ShowMessage(res.message, false);
        emit('on-successful')

    } catch (e: any) {
      isApproving.value = false;
        // ShowMessage(e.response._data.message, true);
        console.log(e);
    }
}

async function disapproveMerchant() {
    try {
      isDisapproving.value = true;
        const res = await $fetch<ApproveMerchantResponse>(`${baseUrl}/admin/merchants/disapprove`, {
          method:'POST',
          body:{
            merchant_id:props.merchant?.merchant_id
          },
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: "application/json",
            },
        });

        console.log(res);
        approveMerchantResponse.value = res;
        isDisapproving.value = false;
        ShowMessage(res.message, false);
        emit('on-successful')


    } catch (e: any) {
      isDisapproving.value = false;
        ShowMessage(e.response._data.message, true);
        console.log(e);
    }
}
</script>
<style></style>