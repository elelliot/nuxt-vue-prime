<script setup lang="ts">
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import ToggleButton from 'primevue/togglebutton';
import { faker } from '@faker-js/faker';

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

const dummyNum: Number[] = []

onMounted(() => {
    for (let i = 0; i < 7; i++)
        dummyNum.push(faker.datatype.number({ min: 0, max: 10000 }))
});

</script>
<template>
    <Button @click="toggle" class="" iconPos="right" :icon="downArrow ? 'pi pi-angle-down' : 'pi pi-angle-up'"
        label="Recamaras" outlined />
    <OverlayPanel ref="op">
        <div class="flex flex-col gap-4 w-full">

            <div class="grid grid-cols-2 gap-4">
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`0+ (${dummyNum[0]})`" :offLabel="`0+ (${dummyNum[0]})`" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn2" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`+1 (${dummyNum[1]})`" :offLabel="`+1 (${dummyNum[1]})`" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn3" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`+2 (${dummyNum[2]})`" :offLabel="`+2 (${dummyNum[2]})`" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn4" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`+3 (${dummyNum[3]})`" :offLabel="`+3 (${dummyNum[3]})`" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn5" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`+4 (${dummyNum[4]})`" :offLabel="`+4 (${dummyNum[4]})`" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn6" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`+5 (${dummyNum[5]})`" :offLabel="`+5 (${dummyNum[5]})`" />
                <ToggleButton class="whitespace-nowrap" iconPos="right" v-model="isOn7" offIcon="pi pi-filter"
                    onIcon="pi pi-filter-fill" :onLabel="`+6 (${dummyNum[6]})`" :offLabel="`+6 (${dummyNum[6]})`" />
            </div>


            <div>
                <Button class="w-full flex justify-center ">Actualizar</Button>
            </div>
    </div>
</OverlayPanel></template>

<style scoped></style>