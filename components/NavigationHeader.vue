<template>
    <div
        class="w-full h-16 bg-white dark:bg-slate-900  dark:bg-opacity-50 ring-1 ring-slate-900/5 flex flex-row justify-between items-center lg:px-10 px-0">
        <div class="flex gap-x-1 justify-start items-center">
            <div class="block lg:hidden">
                <MazBtn color="transparent" @click="isOpenedTop = true">
                    <Icon class="text-lg" name="ph:list-light" />
                </MazBtn>
            </div>

            <h3  class="font-black text-base lg:text-lg ">Dashboard</h3>
        </div>


        <div class="flex">
            <!-- user profile dropdown -->
            <div class="flex ring-1 ring-slate-900/5 dark:ring-1 dark:ring-slate-700 rounded-lg">
                <MazDropdown :items="[
                    { label: 'Profile', action: () => { } },
                    { label: 'Settings', action: () => { } },
                ]">
                    <div class="flex h-3 flex-row items-center justify-center gap-x-4">
                        <Icon class="text-lg" name="ph:user-bold" />
                        <div class="lg:flex flex-col justify-start items-start hidden ">
                            <p>admin@gmail.com</p>
                            <p class="text-xs">Admin</p>
                        </div>
                    </div>

                </MazDropdown>

            </div>
            <!-- theme toggle -->
            <MazDropdown :items="[
                { label: 'Light', action: () => colorMode.preference = 'light' },
                { label: 'Dark', action: () => colorMode.preference = 'dark' },
            ]">
                <Icon v-if="colorMode.preference === 'dark'" name="material-symbols:dark-mode" />
                <Icon v-else name="material-symbols:wb-sunny" />
            </MazDropdown>
        </div>

        <!-- drawer on small screens -->
        <MazDrawer style="background-color: blue;" variant="left" v-model="isOpenedTop">
            <template #title>
                <p>Menu</p>
            </template>
            <template #default="{ close }">
                <div class="drawer" style="padding: 16px;">
                    <!-- content -->
                    <!-- Logo -->
                    <div class="flex px-8 h-16 gap-x-3 text-lg items-center font-bold logo-area">
                        <div class="logo w-fit h-fit">
                            <img src="/assets/img/logo.svg" alt="logo">
                        </div>
                        <p class="font-bold text-sm text-white">Merchant Admin</p>
                    </div>
                    <!-- Menu -->
                    <p style="color: #60B7C2; font-weight: bold;" class="mx-8 mt-6">Menu</p>
                    <nav class="mt-4">
                        <ul>
                            <li v-for="item in menuItems" :key="item.id">
                                <nuxt-link :to="item.url" @click.native="selectMenuItem(item)"
                                    :class="['flex items-center justify-start ', selectedItem?.id === item.id ? 'active-menu' : '']"
                                    class="flex items-center gap-2 justify-start hover:text-amber-500 mx-6 rounded-md py-2  mb-1 menu-item">
                                    <i class="mr-2" :class="item.icon"></i>
                                    <icon :name="item.icon" />
                                    {{ item.label }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </template>
        </MazDrawer>

    </div>
</template>

<script setup lang="ts">
import type { Menu } from '~/type';

// theme handler
const colorMode = useColorMode()
console.log(colorMode.preference)


// drawer toggler
const isOpenedTop = ref(false)


// menus
const selectedItem = ref<Menu | null>(null)

const menuItems = reactive<Menu[]>([
    { id: 1, label: 'Dashboard', icon: 'akar-icons:dashboard', url: '' },
    { id: 2, label: 'Merchant', icon: 'solar:users-group-rounded-broken', url: '/dashboard/overview' },
    { id: 3, label: 'Transactions', icon: 'bitcoin-icons:transactions-filled', url: '/dashboard/overview' },
    { id: 4, label: 'Whitelisted Merchants', icon: 'tabler:users-minus', url: '/dashboard/overview' },
    { id: 5, label: 'Disabled merchants', icon: 'streamline:interface-user-delete-actions-close-delete-deny-fail-geometric-human-person-remove-single-up-user', url: '/dashboard/overview' },
    { id: 6, label: 'User management', icon: 'solar:users-group-two-rounded-line-duotone', url: '/dashboard/overview' },
])

function selectMenuItem(item: Menu) {
    selectedItem.value = item;
    isOpenedTop.value = false
    navigateTo(item.url.toString())
}
</script>

<style scoped>
.drawer{
    height: 100%;
}

.logo-area{
    background-color:var(--color-primary);

}

.active-menu {
    background-color: #0F454C;
    color: var(--base-yellow);
}

</style>