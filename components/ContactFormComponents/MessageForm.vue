<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';

const name = ref('')
const tel = ref('')
const email = ref('')
const messagePlaceHolder = `Hola. Me interesa ${'Departamentos en Preventa en Torre Antaria en Culiacán, Sinaloa'}. Por favor contáctame.`
const message = ref(messagePlaceHolder)
</script>

<template>
    <div class="flex flex-col gap-4 lg:mt-6">
        <span class="hidden lg:block text-lg font-600">Enviar Mensaje</span>
        <div class="flex flex-col xl:flex-row gap-4">

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

        <div class="flex flex-col">
            <label for="message">Mensaje</label>
            <Textarea v-model="message" id="message" maxlength="500" autoResize rows="3" cols="30" />
        </div>

        <Button type="submit" label="Enviar mensaje" class="bg-blue-400 border-blue-400" />
        <Button class="bg-green-500 border-green-500 hover:(bg-green-800 border-green-800)">
            <div class="w-full flex justify-center gap-4 items-center">
                <span class="whitespace-nowrap">O enviar un WhatsApp</span> 
                <i class="pi pi-whatsapp"></i>
            </div>
        </Button>

        <span class="text-xs text-slate-500	">Al hacer clic en “Enviar” aceptas nuestros <NuxtLink to="/about"
                class="text-slate-500">Términos y Condiciones, Políticas de Privacidad</NuxtLink> y recibir comunicaciones
            de marketing</span>
    </div>
</template>