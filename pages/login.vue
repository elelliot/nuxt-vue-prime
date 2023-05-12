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
    email: string().required().email(),
    password: string().required().min(8),
}));

const { handleSubmit, resetForm } = useForm({
    validationSchema: schema
});

const { value: email, errorMessage: emailErrMsg } = useField('email');
const { value: password, errorMessage: passwordErrMsg } = useField('password');





const onSubmit = handleSubmit(async (values) => {
    if (values.name && values.email && values.password) {
        const resp = await $fetch("/api/users", {
            method: 'POST',
            body: {
                email: values.email,
                password: values.password
            }
        })
        if (resp) {
            showNotification('success', 'Success', `Welcome ${resp.name}.`)
            resetForm();
        } else {
            showNotification('error', 'Login Error', `User And/Or Password not valid`)
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
    <div class="max-w-full py-4 sm:mx-12 lg:(max-w-[1024px] mx-auto) ">
        <div class="flex flex-col items-center ">
            <span class="text-4xl font-semibold">Log in</span>
            <form @submit="onSubmit" class="flex flex-col mt-12 w-full">
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
                <Button type="submit" label="Login" class="mt-12" />
            </form>
        </div>
        <Toast />
    </div>
</template>
