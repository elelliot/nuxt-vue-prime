<script setup lang="ts">
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const name = ref('')
const tel = ref('')
const email = ref('')
const messagePlaceHolder = `Hola. Me interesa ${'Departamentos en Preventa en Torre Antaria en Culiacán, Sinaloa'}. Por favor contáctame.`
const message = ref(messagePlaceHolder)

</script>
<template>
    <div class="flex flex-col gap-4">
        <div class="flex gap-4">

            <div class="flex flex-col">
                <label for="name">Nombre</label>
                <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col">
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

        <Button type="submit" label="Enviar mensaje" rounded class="bg-blue-400 border-blue-400" />
        <Button type="submit" label="O enviar un Whatsapp" icon="pi pi-whatsapp" iconPos="right" rounded
            class="hover:(bg-green-800 border-green-800) bg-green-500 border-green-500" />
    </div>
</template>