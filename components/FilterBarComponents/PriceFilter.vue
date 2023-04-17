<script setup lang="ts">
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import InputNumber from 'primevue/inputnumber';

const downArrow = ref(true)
const minPrice = ref()
const maxPrice = ref()


const op = ref();
const toggle = (event: any) => {
    op.value.toggle(event);
    downArrow.value = !downArrow.value
}


</script>
<template>
    <Button @click="toggle" class="" iconPos="right" :icon="downArrow ? 'pi pi-angle-down' : 'pi pi-angle-up'"
        label="Precio" outlined />
    <OverlayPanel ref="op">
        <div class="flex flex-col gap-4">

            <div class="flex gap-2 item items-center pt-4">
                <span class="p-float-label">
                    <InputNumber v-model="minPrice" prefix="$" :useGrouping="true" />
                    <label for="number-input">Minimo</label>
                </span>
                <span>-</span>
                <span class="p-float-label">
                    <InputNumber v-model="maxPrice" prefix="$" :useGrouping="true" />
                    <label for="number-input">Maximo</label>
                </span>
            </div>

            <div>
                <Button class="w-full flex justify-center ">Actualizar</Button>
            </div>
        </div>
    </OverlayPanel>
</template>

<style scoped>
</style>