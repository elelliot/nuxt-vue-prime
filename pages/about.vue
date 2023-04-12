<script setup lang="ts">

import SelectButton from 'primevue/selectbutton';
import Menubar from 'primevue/menubar';

const options = ref([
    { name: 'En venta', value: 1 },
    { name: 'En renta', value: 2 }
]);
const options2 = ref([
    { name: 'Residencial', value: 1 },
    { name: 'Comercial', value: 2 },
    { name: 'Terreno', value: 3 },
    { name: 'Rancho o finca', value: 4 },
    { name: 'Remate', value: 5 },
]);
const value = ref(options.value[0]);
const value2 = ref(options2.value[0]);

watchEffect(() => {
    console.log(value.value)
    console.log(value2.value)
})

const items = ref([
    {
        label: 'Categoria',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Conjunto',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Recamaras',
        icon: 'pi pi-home',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Baños',
        icon: 'pi pi-map-marker',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label: 'Precio',
        icon: 'pi pi-dollar'
    },
    {
        label: 'Precio',
        icon: 'pi pi-sliders-h'
    }
]);
</script>

<template>
    <div class="flex flex-column align-items-center">
        <div class="w-6">
            <h3>Categoria</h3>
        </div>
        <div class="p-fluid w-6">
            <SelectButton v-model="value" :options="options" optionLabel="name" class="" />
        </div>
    </div>
    
    <div class="flex flex-column align-items-center">
        <div class="w-6">
            <h3>Que tipo de propiedad estas buscando?</h3>
        </div>
        <div class="p-fluid w-6">
            <SelectButton v-model="value2" :options="options2" optionLabel="name" class="white-space-nowrap" />
        </div>
    </div>


    <!-- MenuBar Attempt -->
    <div class="">
        <Menubar :model="items" />
    </div>
</template>