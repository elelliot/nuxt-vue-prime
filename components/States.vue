<script setup lang="ts">
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

const statesMexico = ["Distrito Federal", "Estado de Mexico", "Quintana Roo", "Yucatan", "Jalisco", "Queretaro", "Nuevo Leon", "Morelos", "Puebla", "Guanajuato", "Veracruz", "Sinaloa",
    "Aguascalientes", "Baja california", "Guerrero", "Hidalgo", "Chihuahua", "Coahuila", "San Luis Potosi", "Chiapas", "Tamaulipas", "Sonora", "Baja California Sur", "Nayarit", "Michoacan",
    "Tabasco", "Colima", "Durango", "Oaxaca", "Tlaxcala", "Campeche", "Zacatecas"]
</script>

<template>
    <Carousel :value="statesMexico" :num-visible="12">
        <template #item="slotProps">
            <Button :label="slotProps.data"></Button>
        </template>
    </Carousel>
</template>