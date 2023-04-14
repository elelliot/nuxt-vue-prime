<script setup lang="ts">
import Card from 'primevue/card';
import Image from 'primevue/image';

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
    houseDescription: string,

    
}>()

</script>
<template>
    <Card style="min-width: 10em; max-width: 23em"
        class=" hover:shadow-2xl cursor-pointer transition-all transition-duration-300 ">
        <template #header>
            <Image alt="user header" class="" height="180" :src="props.housePhoto" />
        </template>
        <template #subtitle> <span class="text-lg">Desde</span> <span class="text-gray-800 font-bold">{{props.housePrice}}</span>
        </template>
        <template #content>
            <div class="flex gap-2 whitespace-nowrap text-xs sm:text-base md:text-xs">
                <div><b>{{props.houseModels}} modelos</b></div>
                <div class="flex align-items-center gap-1"><i class="pi pi-home"></i><b>{{props.houseCapacity}}</b></div>
                <div class="flex align-items-center gap-1"><i class="pi pi-table"></i><b>{{props.houseMinSize}}-{{props.houseMaxSize}} m²</b></div>
            </div>

            <div class="overflow-hidden whitespace-nowrap text-ellipsis text-xs sm:text-base"><b>{{props.houseAddress}}</b>,
                {{props.houseBuildingNumber}} {{props.streetName}}, Edo. De México</div>

            <div class="flex gap-2 text-xs sm:text-base">
                <a class="no-underline hover:underline overflow-hidden whitespace-nowrap"
                    href="https://www.vivanuncios.com.mx/d-desarrollo-aurea-residences/5df3f58e4f0cc381f406543e">{{props.houseDescription}}</a>
                <a href="" class="no-underline hover:underline">...</a>
            </div>

            <div class="flex justify-end text-xs sm:text-base">
                <a href="" class="no-underline hover:underline">Contactar</a>
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