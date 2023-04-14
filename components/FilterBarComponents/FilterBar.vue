<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete';
import Menubar from 'primevue/menubar';


import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

//<!-- MenuBar Implementation -->
// const items = ref([
//     {
//         label: 'Categoria',
//         items: [
//             {
//                 label: 'Left',
//                 icon: 'pi pi-fw pi-align-left'
//             },
//             {
//                 label: 'Right',
//                 icon: 'pi pi-fw pi-align-right'
//             },
//             {
//                 label: 'Center',
//                 icon: 'pi pi-fw pi-align-center'
//             },
//             {
//                 label: 'Justify',
//                 icon: 'pi pi-fw pi-align-justify'
//             }
//         ]
//     },
//     {
//         label: 'Conjunto',
//         items: [
//             {
//                 label: 'Left',
//                 icon: 'pi pi-fw pi-align-left'
//             },
//             {
//                 label: 'Right',
//                 icon: 'pi pi-fw pi-align-right'
//             },
//             {
//                 label: 'Center',
//                 icon: 'pi pi-fw pi-align-center'
//             },
//             {
//                 label: 'Justify',
//                 icon: 'pi pi-fw pi-align-justify'
//             }
//         ]
//     },
//     {
//         label: 'Recamaras',
//         icon: 'pi pi-home',
//         items: [
//             {
//                 label: 'Left',
//                 icon: 'pi pi-fw pi-align-left'
//             },
//             {
//                 label: 'Right',
//                 icon: 'pi pi-fw pi-align-right'
//             },
//             {
//                 label: 'Center',
//                 icon: 'pi pi-fw pi-align-center'
//             },
//             {
//                 label: 'Justify',
//                 icon: 'pi pi-fw pi-align-justify'
//             }
//         ]
//     },
//     {
//         label: 'Baños',
//         icon: 'pi pi-map-marker',
//         items: [
//             {
//                 label: 'Edit',
//                 icon: 'pi pi-fw pi-pencil',
//                 items: [
//                     {
//                         label: 'Save',
//                         icon: 'pi pi-fw pi-calendar-plus'
//                     },
//                     {
//                         label: 'Delete',
//                         icon: 'pi pi-fw pi-calendar-minus'
//                     }
//                 ]
//             },
//             {
//                 label: 'Archieve',
//                 icon: 'pi pi-fw pi-calendar-times',
//                 items: [
//                     {
//                         label: 'Remove',
//                         icon: 'pi pi-fw pi-calendar-minus'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Precio',
//         icon: 'pi pi-dollar',
//     },
//     {
//         label: 'Mas filtros',
//         icon: 'pi pi-sliders-h',
//     },
//     {
//         label: 'Ordenar por destacados',
//         icon: 'pi pi-sliders-h',
//     },
//     {
//         label: 'Borrar filtros',
//         icon: 'pi pi-sliders-h',
//     }
// ]);

// const items = ref([
//     {
//         label: 'Categoria',
//     },
// ])



</script>
<template>
    <div class="my-2">
        <!-- MenuBar Implementation -->
        <!-- <Menubar class="flex" :model="items">
            <template #start>
                <AutoComplete inputClass="border-2 border-blue-6 mr-4"
                    placeholder="Escribe una ubicacion (ej. Ciudad, Estado)" />
            </template>
            <template #item>
                    <div class="">
                        <CategoryFilter />
                    </div>
            </template>
        </Menubar> -->

        <!-- Toolbar Implementation , just this, don't need that pointless and big Array -->
        <div>
            <Toolbar>
                <template #start>
                    <div class="flex gap-2">
                        <AutoComplete inputClass="border-2 border-blue-6 mr-4"
                        placeholder="Escribe una ubicacion (ej. Ciudad, Estado)" />
                        <CategoryFilter />
                    </div>
                </template>
            </Toolbar>
        </div>
    </div>
</template>

<style scoped>

</style>