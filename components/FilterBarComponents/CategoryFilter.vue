<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';

const options = ref([
    { name: 'En venta', value: 1 },
    { name: 'En renta', value: 2 }
]);
const options2 = ref([
    { name: 'Residencial', value: 1, },
    { name: 'Comercial', value: 2 },
    { name: 'Terreno', value: 3 },
    { name: 'Rancho o finca', value: 4 },
    { name: 'Remate', value: 5 },
]);
const value = ref(options.value[0]);
const value2 = ref(options2.value[0]);

const op = ref();
const downArrow = ref(true)
const checked = ref(true)
const toggle = (event: any) => {
    op.value.toggle(event);
    downArrow.value = !downArrow.value
}
watchEffect(() => {
    console.log(value.value)
    // console.log(value2.value)
})
</script>
<template>
    <Button @click="toggle" iconPos="right" :icon="downArrow ? 'pi pi-angle-down' : 'pi pi-angle-up'" label="Categoria"
        outlined />
    <OverlayPanel ref="op">
        <div class="flex flex-col gap-4">
            <div>
                <span class="text-base font-600">Categoria</span>
                <div class="p-fluid mt-2">
                    <SelectButton v-model="value" :options="options" optionLabel="name" class="w-auto" />
                </div>
            </div>
            <div>
                <span class="text-base font-600">¿Que tipo de propiedad estas buscando?</span>
                <div class="mt-2">
                    <SelectButton v-model="value2" :options="options2" optionLabel="name" class="whitespace-nowrap" />
                </div>
            </div>


            <div>
                <Button class="w-full flex justify-center">Actualizar</Button>
            </div>
        </div>
    </OverlayPanel>
</template>

<style scoped></style>