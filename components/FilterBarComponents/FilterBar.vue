<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';

</script>
<template>
    <div class="hidden sm:block">
        <Toolbar class="px-0 border-0 border-b-2 rounded-none sm:(overflow-hidden)">
            <template #start>
                <div class="flex gap-2">
                    <span class="p-input-icon-left">
                        <i class="pi pi-map-marker" />
                        <InputText class="mr-4" placeholder="Escribe una ubicacion (ej. Ciudad, Estado)" />

                    </span>
                    <CategoryFilter />
                    <GroupFilter />
                    <RoomFilter />
                    <PriceFilter />
                </div>
            </template>
        </Toolbar>
    </div>
</template>