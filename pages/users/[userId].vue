<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from "primevue/useconfirm";
import { useField, useForm } from 'vee-validate';

const toast = useToast();
const confirm = useConfirm();
const route = useRoute();
const showNotification = (type, title, message) => {
    toast.add({ severity: type, summary: title, detail: message, life: 3000 });
};

const { data, pending, refresh } = await useFetch(`/api/users/${route.params.userId}`);
const { data: allUsers, pending: pendingAll } = await useFetch(`/api/users/all`);
console.log(allUsers.value)

const { handleSubmit } = useForm({
    initialValues: {
        name: data.value?.name,
        email: data.value?.email,
    }
});

const { value: name, errorMessage: nameErrMsg, } = useField('name');
const { value: email, errorMessage: emailErrMsg } = useField('email');
const { value: password, errorMessage: passwordErrMsg,setValue: setPassword } = useField('password');

async function confirmAction() {
    const resp = await $fetch(`/api/users/${route.params.userId}`, {
        method: 'DELETE',
    })
    if (resp) {
        showNotification('success', 'Confirmed', `User Deleted Succesfully.`)
        navigateTo('/')
    } else {
        showNotification('error', 'Oh No!', `Something went wrong please try again or wait a little time.`)
    }
}

async function confirmUpdate(name,
    email,
    password) {
    const resp = await $fetch(`/api/users/${route.params.userId}`, {
        method: 'PUT',
        body: {
            name,
            email,
            password
        }
    })
    if (resp) {
        showNotification('success', 'Success', `User Updated Succesfully.`)
        refresh()
        setPassword('');
    } else {
        showNotification('error', 'Oh No!', `Something went wrong please try again or wait a little time.`)
    }
}


const showUpdateConfirmation = (name, email, password) => {
    confirm.require({
        message: "Apply Changes?",
        header: 'Update Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => confirmUpdate(name,
            email,
            password),
    });
};

const showDeleteConfirmation = () => {
    confirm.require({
        message: "You're about to delete your account, are you really sure?, this action cannot be undone",
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: confirmAction,
    });
};



const onSubmit = handleSubmit(async (values) => {
    if (values.name && values.email && values.password) {
        showUpdateConfirmation(values.name, values.email, values.password)
    }
}, onInvalidSubmit);

function onInvalidSubmit({ values, errors, results }) {
    showNotification('error', 'Error in Data', "Data couldn't be sent, please fix them errors")
};

</script>

<template>
    <div class="max-w-full py-4 sm:mx-12 lg:(max-w-[1024px] mx-auto)">
        <div class="flex flex-col items-center">
            <span class="text-4xl font-semibold">Edit User</span>
            <form v-if="!pending" @submit="onSubmit" class="flex flex-col mt-12 w-full">
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
                <div class="flex flex-col gap-4 mt-12">
                    <Button type="submit" label="Update Account" />
                    <Button @click="showDeleteConfirmation()" label="Delete Account" severity="danger" />
                </div>
            </form>
        </div>

        <ConfirmDialog />
        <Toast />
    </div>
</template>
