<template>

    <!-- Logo -->
    <div class="flex px-8 h-16 bg-white gap-x-3 text-lg items-center font-bold logo-area">
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

</template>
<script setup lang="ts">
import type { Menu } from '~/type';



const selectedItem = ref<Menu | null>(null)

const menuItems = reactive<Menu[]>([
    // { id: 1, label: 'Dashboard', icon: 'akar-icons:dashboard', url: '/dashboard' },
    { id: 2, label: 'Merchant', icon: 'solar:users-group-rounded-broken', url: '/dashboard/merchants' },
    // { id: 3, label: 'Transactions', icon: 'bitcoin-icons:transactions-filled', url: '/dashboard/overview' },
    // { id: 4, label: 'Whitelisted Merchants', icon: 'tabler:users-minus', url: '/dashboard/overview' },
    // { id: 5, label: 'Disabled merchants', icon: 'streamline:interface-user-delete-actions-close-delete-deny-fail-geometric-human-person-remove-single-up-user', url: '/dashboard/overview' },
    // { id: 6, label: 'User management', icon: 'solar:users-group-two-rounded-line-duotone', url: '/dashboard/overview' },
])

function selectMenuItem(item: Menu) {
    selectedItem.value = item;
}
</script>
<style scoped>
.sidebar {
    background-color: var(--color-primary);
}

.logo-area {
    background-color: #0F454D;
}

.menu-item {
    font-size: 16px;
    color: white;
}

.menu-item:hover {
    background-color: #0F454C;
}

.active-menu {
    background-color: #0F454C;
    color: var(--base-yellow);
}
</style>