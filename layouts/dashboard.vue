<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <div class="flex-shrink-0  w-72  hidden lg:block sidebar bg-white dark:bg-slate-900  dark:bg-opacity-50  ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900 rounded-sm">
        <SideBarContent/>
        </div>
        <!-- Main Content -->
        <div class="flex-grow">
            <NavigationHeader />
            <!-- Your main content goes here -->
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">


</script>
<style scoped>
.sidebar {
    /* background-color: var(--color-primary); */
}
</style>