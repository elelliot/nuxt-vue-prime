<script setup lang="ts">
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

const statesMexico = ref(["Distrito Federal", "Estado de Mexico", "Quintana Roo", "Yucatan", "Jalisco", "Queretaro", "Nuevo Leon", "Morelos",
    "Puebla", "Guanajuato", "Veracruz", "Sinaloa", "Aguascalientes", "Baja california", "Guerrero", "Hidalgo", "Chihuahua", "Coahuila", "San Luis Potosi",
    "Chiapas", "Tamaulipas", "Sonora", "Baja California Sur", "Nayarit", "Michoacan", "Tabasco", "Colima", "Durango", "Oaxaca", "Tlaxcala", "Campeche", "Zacatecas"])

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 5,
        numScroll: 5
    },
    {
        breakpoint: '1004px',
        numVisible: 4,
        numScroll: 4
    },
    {
        breakpoint: '830px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '639px',
        numVisible: 2,
        numScroll: 2
    }])
</script>

<template>
    <Carousel :value="statesMexico" :num-visible="7" :numScroll="7" :responsive-options="responsiveOptions"
        :showIndicators="false" containerClass="items-center" class="my-2" >
        <template #item="slotProps">

            <!-- <Button :label="slotProps.data" outlined size="small" class="" /> -->
            <Button :label="slotProps.data" outlined size="small"
                        class="w-11/12	overflow-hidden whitespace-nowrap" />
        </template>
    </Carousel>
</template>

<style scoped>
:deep(.p-carousel-item){
    display: flex;
    justify-content: center;
}
</style>