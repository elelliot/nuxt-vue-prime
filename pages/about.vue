<script setup>
import InputText from 'primevue/inputtext';
// import Password from 'primevue/password';
import Button from 'primevue/button';
import Toast from 'primevue/toast';


import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { object, string } from 'yup'
// const { data } = useFetch("/api/cars/Toronto")
// console.log(data)
const toast = useToast();
const showNotification = (type, title, message) => {
    toast.add({ severity: type, summary: title, detail: message, life: 3000 });
};


const schema = toTypedSchema(object({
    // email: string().required().email(),
    name: string().required(),
    source: string().required(),
    // pass: string().required().min(8),
}));

const { handleSubmit, resetForm } = useForm({
    validationSchema: schema
});

const { value: name, errorMessage: nameErrMsg } = useField('name');
const { value: source, errorMessage: sourceErrMsg } = useField('source');





const onSubmit = handleSubmit((values) => {
    if (values.name && values.source) {
        useFetch("/api/user/addUser",{
            method:'POST',
            body:{
                name:values.name,
                source:values.source
            }
        })
    }
}, onInvalidSubmit);



function onInvalidSubmit({ values, errors, results }) {
    // console.log('Invalid Correo')
    showNotification('error', 'Error in Data', "Data couldn't be sent, please fix them errors")
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
}
</script>

<template>
    <!-- <div>
        {{ data }}
    </div> -->

    <div class="flex justify-center">
        <form @submit="onSubmit" class="flex flex-col mt-8 gap-4 w-2xl">
            <!-- <div class="">
                <label for="email">Email</label>
                <InputText id="email" v-model="email" type="text" class="w-full" :class="{ 'p-invalid': emailErrMsg }" />
                <small class="p-error" id="text-error">{{ emailErrMsg || '&nbsp;' }}</small>
            </div> -->
            <div class="">
                <label for="name">Name</label>
                <InputText id="name" v-model="name" type="text" class="w-full" :class="{ 'p-invalid': nameErrMsg }" />
                <small class="p-error" id="text-error">{{ nameErrMsg || '&nbsp;' }}</small>
            </div>
            <div class="">
                <label for="source">Source</label>
                <InputText id="source" v-model="source" type="text" class="w-full" :class="{ 'p-invalid': sourceErrMsg }" />
                <small class="p-error" id="text-error">{{ sourceErrMsg || '&nbsp;' }}</small>
            </div>
            <!-- <div class="">
                <label for="pass">Password</label>
                <Password v-model="pass" id="pass" toggleMask  class="w-full p-fluid" :class="{ 'p-invalid': passErrMsg }"/>
                <small class="p-error" id="pass-error">{{ passErrMsg || '&nbsp;' }}</small>
            </div> -->
            <Button type="submit" label="Submit" />
        </form>

        <Toast />
    </div>
</template>
