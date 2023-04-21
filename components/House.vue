<script setup lang="ts">
import Card from 'primevue/card';
import Image from 'primevue/image';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';

const props = defineProps<{
    housePhoto: string,
    housePrice: string,
    houseModels: number,
    houseCapacity: number,
    houseMinSize: number,
    houseMaxSize: number,
    houseAddress: string,
    streetName: string,
    houseBuildingNumber: string,
    houseAd: string,
    houseDescription: string,
    houseID: string
}>()

const op = ref();
const toggle = (event: any) => {
    op.value.toggle(event);
}
</script>
<template>
    <Card style="min-width: 10em;" class=" hover:shadow-2xl transition-all transition-duration-300 ">
        <template #header>
            <NuxtLink :to="`/house-${props.houseID}`">
                <Image alt="user header" height="180" :src="props.housePhoto" />
            </NuxtLink>
        </template>
        <template #subtitle> <span class="text-gray-700 text-2xl	sm:text-xl">Desde</span> <span
                class="text-gray-800 font-semibold text-3xl	sm:text-2xl">{{ props.housePrice }}</span>
        </template>
        <template #content>
            <div class="flex overflow-hidden font-semibold text-gray-700 gap-2 whitespace-nowrap text-xl sm:text-lg md:text-sm">
                <div><span>{{ props.houseModels }} modelo(s)</span></div>
                <div class="flex items-center gap-1 "><i class="pi pi-home"></i><span>{{ props.houseCapacity }}</span></div>
                <div class="flex items-center gap-1"><i class="pi pi-table"></i><span>{{ props.houseMinSize }}-{{
                    props.houseMaxSize }} m²</span></div>
            </div>

            <div class="text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis text-base"><span
                    class="font-semibold">{{ props.houseAddress }}</span>,
                {{ props.houseBuildingNumber }} {{ props.streetName }}, Edo. De México</div>

            <div class="flex gap-2 justify-between text-base items-center">
                <NuxtLink :to="`/house-${props.houseID}`"
                    class="no-underline overflow-hidden whitespace-nowrap text-gray-500">
                    {{ props.houseAd }}
                </NuxtLink>
                <Button text label="..." size="small" @click="toggle" />
                <OverlayPanel ref="op" class="w-72">
                    <div class="overflow-hidden whitespace-nowrap text-ellipsis"><span class="font-semibold text-lg">{{ props.houseAd }}</span></div>
                    <p class="text-base">{{ props.houseDescription }}</p>
                    <NuxtLink :to="`/house-${props.houseID}`">Ver más</NuxtLink>
                </OverlayPanel>
            </div>

            <div class="flex justify-end text-base">
                <Button :to="`/house-${props.houseID}`" link label="Contactar" />
            </div>
        </template>
    </Card>
</template>

<style scoped>
:deep(.p-card-body) {
    padding: .5rem;
}

:deep(.p-card-content) {
    padding: 0rem;
}
</style>