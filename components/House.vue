<script setup lang="ts">
import Card from 'primevue/card';
import Image from 'primevue/image';

const props = defineProps<{
    housePic: string
}>()

</script>
<template>
    <Card
    style="width: 23em"
        class="shadow-2 hover:shadow-8 cursor-pointer transition-all transition-duration-300 ">
        <template #header>
            <Image alt="user header" class="" height="180" :src="props.housePic" />
        </template>
        <template #subtitle> <span class="text-lg">Desde</span> <span class="text-gray-800 font-bold">$9,450,000</span>
        </template>
        <template #content>
            <div class="flex gap-2">
                <div><b>6 modelos</b></div>
                <div class="flex align-items-center gap-1"><i class="pi pi-home"></i><b>2-4</b></div>
                <div class="flex align-items-center gap-1"><i class="pi pi-table"></i><b>169-589 m²</b></div>
            </div>

            <div class="overflow-hidden white-space-nowrap text-overflow-ellipsis"><b>Lomas Country Club</b>, Jesús
                Del Monte #44 Fracc. Greenhouse, Lt. 16, Mz. III, Huixquilucan, Edo. De México</div>
            <div class="flex gap-2">
                <a class="no-underline hover:underline overflow-hidden white-space-nowrap"
                    href="https://www.vivanuncios.com.mx/d-desarrollo-aurea-residences/5df3f58e4f0cc381f406543e">Áurea
                    Residentes, Deptos. Con acabados Europeos con Vista al Campo de Golf en Interlomas</a>
                <a href="" class="no-underline hover:underline">...</a>
            </div>
            <div class="flex justify-content-end">
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