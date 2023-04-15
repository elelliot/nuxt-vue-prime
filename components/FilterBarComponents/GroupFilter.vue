<script setup lang="ts">
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import ToggleButton from 'primevue/togglebutton';

const downArrow = ref(true)

const isOn = ref(false)
const isOn2 = ref(false)
const isOn3 = ref(false)
const isOn4 = ref(false)
const isOn5 = ref(false)
const isOn6 = ref(false)
const isOn7 = ref(false)


const op = ref();
const toggle = (event: any) => {
    op.value.toggle(event);
    downArrow.value = !downArrow.value
}

</script>
<template>
    <Button @click="toggle" class="" iconPos="right" :icon="downArrow ? 'pi pi-angle-down' : 'pi pi-angle-up'"
        label="Conjunto" outlined />
    <OverlayPanel ref="op">
        <div class="flex flex-col gap-4 w-full">

            <div class="grid grid-cols-2 gap-4">
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Desarrollo (6456)'" :offLabel="'Desarrollo (6456)'" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn2" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Fraccionamientos (9875)'" :offLabel="'Fraccionamientos (9875)'" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn3" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Privada (1632)'" :offLabel="'Privada (1632)'" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn4" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Residencial (1517)'" :offLabel="'Residencial (1517)'" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn5" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Condominios (2135)'" :offLabel="'Condominios (2135)'" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn6" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Country Club (1574)'" :offLabel="'Country Club (1574)'" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn7" offIcon="pi pi-filter" onIcon="pi pi-filter-fill" :onLabel="'Club de Golf (121)'" :offLabel="'Club de Golf (121)'" />
            </div>


            <div>
                <Button class="w-full flex justify-center ">Actualizar</Button>
            </div>
        </div>
    </OverlayPanel>
</template>

<style scoped>
.p-togglebutton-on {
    background-color: red;
}
</style>