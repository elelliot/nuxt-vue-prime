<script setup lang="ts">
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';


const name = ref('')
const tel = ref('')
const email = ref('')

const contactOptions = ref([
    { name: 'En Persona', icon: 'pi pi-user', value: 1 },
    { name: 'Videollamada', icon: 'pi pi-whatsapp', value: 2 }
]);
const selectedContactOption = ref(contactOptions.value[0])
</script>
<template>
    <div class="flex flex-col gap-4 mt-6">
        <span class="text-lg font-600">Elegir opcion</span>
        <SelectButton v-model="selectedContactOption" :options="contactOptions" :unselectable="true" optionLabel="name" class="p-fluid flex">
            <template #option="slotProps">
                    <div class="w-full flex justify-center gap-4 items-center">
                        <i :class="slotProps.option.icon"></i>
                        <span>{{ slotProps.option.name }}</span>
                    </div>
            </template>
        </SelectButton>

        <div class="flex gap-4">

            <div class="flex flex-col basis-1/2	">
                <label for="name">Nombre</label>
                <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col basis-1/2">
                <label for="telephone">Telefono</label>
                <InputMask id="telephone" v-model="tel" mask="(999) 999-9999" class="w-full" />
            </div>
        </div>

        <div class="flex flex-col">
            <label for="email">Correo</label>
            <InputText id="email" v-model="email" class="w-full" />
        </div>

        <Button type="submit" label="Agendar Visita" class="bg-blue-400 border-blue-400" />

        <span class="text-xs text-slate-500	">Al hacer clic en “Enviar” aceptas nuestros <NuxtLink to="/about"
                class="text-slate-500">Términos y Condiciones, Políticas de Privacidad</NuxtLink> y recibir comunicaciones
            de marketing
        </span>
    </div>
</template>

<style>

</style>