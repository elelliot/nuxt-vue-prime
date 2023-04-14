<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete';
import Menubar from 'primevue/menubar';
import OverlayPanel from 'primevue/overlaypanel';
import Button from 'primevue/button';

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

const items = ref([
    {
        label: 'Categoria',
    },
])
const op = ref();
const toggle = (event: any) => {
    op.value.toggle(event);
}

</script>
<template>
    <!-- MenuBar Attempt -->
    <div class="my-2">
        <Menubar class="flex" :model="items">
            <template #start>
                <AutoComplete class="" />
            </template>
            <template #item>
                <div @mouseover="toggle">Categoria</div>
                <OverlayPanel ref="op">
                    <div>GG</div>
                </OverlayPanel>
            </template>
        </Menubar>
    </div>
</template>