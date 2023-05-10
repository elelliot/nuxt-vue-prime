<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useField, useForm, Field } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { object, string } from 'yup'

const toast = useToast();
const route = useRoute();

const showNotification = (type, title, message) => {
    toast.add({ severity: type, summary: title, detail: message, life: 3000 });
};
const { data, pending , refresh } = await useFetch(`/api/users/${route.params.userId}`);

const { handleSubmit, resetForm } = useForm({
    initialValues: {
        name: data.value?.name,
        email: data.value?.email,
    }
});

const { value: name, errorMessage: nameErrMsg, } = useField('name');
const { value: email, errorMessage: emailErrMsg } = useField('email');
const { value: password, errorMessage: passwordErrMsg } = useField('password');

const onSubmit = handleSubmit(async (values) => {
    if (values.name && values.email && values.password) {
        const resp = await $fetch(`/api/users/${route.params.userId}`, {
            method: 'PUT',
            body: {
                name: values.name,
                email: values.email,
                password: values.password
            }
        })
        if (resp) {
            showNotification('success', 'Success', `User Updated Succesfully.`)
            refresh()
            password.value=''
        } else {
            showNotification('error', 'Oh No!', `Something went wrong please try again or wait a little time.`)
        }
    }
}, onInvalidSubmit);



function onInvalidSubmit({ values, errors, results }) {
    showNotification('error', 'Error in Data', "Data couldn't be sent, please fix them errors")
}
</script>

<template>
    <div class="flex justify-center">
        <div class="flex flex-col items-center">
            <h1>Update User</h1>
            <form v-if="!pending" @submit="onSubmit" class="flex flex-col mt-8 gap-4 w-2xl">
                <div>
                    <label for="name">Name</label>
                    <InputText id="name" v-model="name" type="text" class="w-full" :class="{ 'p-invalid': nameErrMsg }" />
                    <small class="p-error" id="text-error">{{ nameErrMsg || '&nbsp;' }}</small>
                </div>
                <div>
                    <label for="email">Email</label>
                    <InputText id="email" v-model="email" type="text" class="w-full"
                        :class="{ 'p-invalid': emailErrMsg }" />
                    <small class="p-error" id="text-error">{{ emailErrMsg || '&nbsp;' }}</small>
                </div>
                <div>
                    <label for="password">Password</label>
                    <Password v-model="password" id="password" toggleMask class="w-full p-fluid"
                        :class="{ 'p-invalid': passwordErrMsg }" />
                    <small class="p-error" id="password-error">{{ passwordErrMsg || '&nbsp;' }}</small>
                </div>
                <Button type="submit" label="Update User" />
            </form>
        </div>

        <Toast />
    </div>
</template>
