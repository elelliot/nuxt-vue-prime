<script setup lang="ts">
const props = defineProps<{
    perkIcon: string,
}>()
</script>
<template>
    <div class="flex flex-col gap-1">
        <div class="w-14 h-14 flex justify-center items-center border-solid border-2 rounded border-bluegray">
        <i :class="`text-[40px] ${props.perkIcon}`"></i>
        </div>
        <span class="text-blueGray text-xs font-600"><slot name="text"></slot></span>
    </div>
</template>