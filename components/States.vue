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
        breakpoint: '650px',
        numVisible: 2,
        numScroll: 2
    }])
</script>

<template>
    <Carousel 
    :value="statesMexico" 
    :num-visible="7" 
    :numScroll="7" 
    :responsive-options="responsiveOptions"
    :showIndicators="false"
    containerClass="mb-4"
    >
        <template #item="slotProps">
            <div class="flex justify-content-center">

                <Button :label="slotProps.data" outlined size="small"
                    class="mx-2 w-11 overflow-hidden white-space-nowrap" />
                <!-- <Button :label="slotProps.data" outlined size="small"
                    class="mx-2 w-11 sm:w-11rem md:w-10rem lg:w-12rem overflow-hidden white-space-nowrap" /> -->
            </div>
        </template>
    </Carousel>
</template>