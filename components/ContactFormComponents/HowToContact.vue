<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';


const contactOptions = ref([
    { name: 'Mensaje', value: 1 },
    { name: 'Agendar Visita', value: 2 }
]);
const selectedContactOption = ref(contactOptions.value[0])
</script>

<template>
    <div>
        <SelectButton v-model="selectedContactOption" :options="contactOptions" :unselectable="true" optionLabel="name" class="p-fluid flex" />
        <MessageForm v-if="selectedContactOption.name === 'Mensaje'"/>
        <ScheduleVisit v-else/>
    </div>
    
</template>