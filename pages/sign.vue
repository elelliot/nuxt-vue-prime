<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { object, string } from 'yup'

const toast = useToast();
const showNotification = (type, title, message) => {
    toast.add({ severity: type, summary: title, detail: message, life: 3000 });
};


const schema = toTypedSchema(object({
    name: string().required(),
    email: string().required().email(),
    password: string().required().min(8),
}));

const { handleSubmit, resetForm } = useForm({
    validationSchema: schema
});

const { value: name, errorMessage: nameErrMsg } = useField('name');
const { value: email, errorMessage: emailErrMsg } = useField('email');
const { value: password, errorMessage: passwordErrMsg } = useField('password');





const onSubmit = handleSubmit(async(values) => {
    if (values.name && values.email && values.password) {
        const { data:resp } = await $fetch("/api/users",{
            method:'POST',
            body:{
                name:values.name,
                email:values.email,
                password:values.password
            }
        })
        if( resp ){
            showNotification('success', 'Success', `User ${resp.value.name} created Succesfully.`)
            resetForm();
        } else {
            showNotification('error', 'Oh No!', `Something went wrong please try again or wait a little time.`)
        }
    }
}, onInvalidSubmit);



function onInvalidSubmit({ values, errors, results }) {
    showNotification('error', 'Error in Data', "Data couldn't be sent, please fix them errors")
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
}
</script>

<template>
    <div class="flex justify-center">
        <div class="flex flex-col items-center">
            <h1>Sign in</h1>
            <form @submit="onSubmit" class="flex flex-col mt-8 gap-4 w-2xl">
                <div>
                    <label for="name">Name</label>
                    <InputText id="name" v-model="name" type="text" class="w-full" :class="{ 'p-invalid': nameErrMsg }" />
                    <small class="p-error" id="text-error">{{ nameErrMsg || '&nbsp;' }}</small>
                </div>
                <div>
                    <label for="email">Email</label>
                    <InputText id="email" v-model="email" type="text" class="w-full" :class="{ 'p-invalid': emailErrMsg }" />
                    <small class="p-error" id="text-error">{{ emailErrMsg || '&nbsp;' }}</small>
                </div>
                <div>
                    <label for="password">Password</label>
                    <Password v-model="password" id="password" toggleMask  class="w-full p-fluid" :class="{ 'p-invalid': passwordErrMsg }"/>
                    <small class="p-error" id="password-error">{{ passwordErrMsg || '&nbsp;' }}</small>
                </div>
                <Button type="submit" label="Create User" />
            </form>
        </div>

        <Toast />
    </div>
</template>
