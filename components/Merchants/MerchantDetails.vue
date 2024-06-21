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
            <h3 class="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis p-bold">James Stark</h3>
            <p class="text-sm text-slate-500"> james@gmail.com</p>
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
          <p>00332332</p>
        </div>
        <div class="flex flex-col gap-y-1">
          <small class="text-slate-500">Phone</small>
          <p>+233554478666</p>
        </div>
        <div class="flex flex-col gap-y-1">
          <small class="text-slate-500">Date joined</small>
          <p>12/02/2024 10:30 AM</p>
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
              <h3 class="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis p-bold">Orange
                Tech </h3>
              <p class="text-sm text-slate-500"> orange@gmail.com</p>
            </div>
          </div>
        </div>

        <!-- description -->
        <div class="flex flex-col gap-y-1 ">
          <small class="text-slate-500">Business Description/Bio</small>
          <p>Restaurant Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque audantium,
            totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beataevitae dicta sunt explicabo.</p>
        </div>

        <!-- additional details -->
        <div class="flex mt-5 flex-wrap gap-x-10 gap-y-4">
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Industry</small>
            <p>00332332</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Staff size</small>
            <p>12</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Doc. Type</small>
            <p>Registered Certificate</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business type</small>
            <p>Starter Business</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Category</small>
            <p>technology</p>
          </div>
        </div>

        <!-- business certificate -->
        <div class="flex mt-5 flex-wrap gap-x-10">
          <div class="flex flex-col gap-y-4">
            <small class="text-slate-500">Upload Business docs</small>
            <div class="flex flex-wrap gap-x-3">
              <!-- card -->
              <div v-for="certr in 3"
                class="flex p-3 justify-between gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex">
                  <div
                    class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 mr-2">
                    <Icon class="text-xl" name="material-symbols:image-outline" />
                  </div>
                  <!-- tx-info -->
                  <div class="flex flex-wrap  flex-col justify-start">
                    <h3 class="text-sm p-bold">Business Registration Certificate </h3>
                    <p class="text-sm text-slate-500"> orange@gmail.com</p>
                  </div>
                </div>
                <!-- action -->
                <MazLink color="warning" :to="{}">View</MazLink>
              </div>

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
            <p>+233665498655</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Business Email</small>
            <p>orangetech@gmail.com</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">Region</small>
            <p>Greatre Accra</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <small class="text-slate-500">City</small>
            <p>Accra Central</p>
          </div>
        </div>

        <!-- business certificate -->
        <div class="flex mt-5 flex-wrap gap-x-10">
          <div class="flex flex-col gap-y-4">
            <small class="text-slate-500">Business Social links</small>
            <div class="flex flex-wrap gap-x-3">
              <!-- card -->
              <div v-for="certr in 3"
                class="flex p-3 justify-between gap-x-8 mb-2 ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-700 rounded-md">
                <div class="flex">
                  <!-- <div
                    class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 mr-2">
                    <Icon class="text-xl" name="material-symbols:image-outline" />
                  </div> -->
                  <!-- tx-info -->
                  <div class="flex flex-wrap  flex-col justify-start">
                    <h3 class="text-sm">https://www.linkedin.com/orangetech </h3>
                    <p class="text-sm text-slate-500">LinkedIn</p>
                  </div>
                </div>
                <!-- action -->
                <MazBtn color="warning" fab size="sm">
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
                  <p>Approve / Disapprove Merchant</p>
                  <small class="text-slate-500 mt-2">Sed ut perspiciatis unde omniss te natuserror sit voluptatem
                    iatisund</small>
                  <div class="flex mt-4 w-full gap-x-2">
                    <MazBtn color="warning">
                      <div class="flex items-center gap-x-3">
                        <Icon name="mi:document-check" />
                        <p>Approve </p>
                      </div>
                    </MazBtn>
                    <MazBtn color="transparent">
                      <div class="flex items-center gap-x-3">
                        <Icon name="ep:document-delete" />
                        
                        <p>Disapprove</p>
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

</script>
<style></style>