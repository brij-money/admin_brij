<template>
  <div :class="computedClass" class="" >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    class: string
}>()

const computedClass = computed(() => {
  return ` ${props.class.toString()} bg-white dark:bg-slate-900  dark:bg-opacity-50  ring-1 dark:ring-1 ring-slate-900/5 dark:ring-slate-900`;
});
</script>