<template>
    <div class="flex h-full fixed w-full">
        <!-- Sidebar -->
        <div class="flex-shrink-0  w-72  hidden lg:block sidebar sidebar">
        <SideBarContent/>
        </div>
        <!-- Main Content -->
        <div class="flex-grow overflow-y-auto w-full">
            <NavigationHeader />
            <!-- Your main content goes here -->
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">


</script>
<style scoped>

</style>