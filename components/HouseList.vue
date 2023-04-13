<script setup lang="ts">


const houses = ref([
    "https://img.vivanuncios.com.mx/api/v1/mx-ads/images/c1/c1b2fbbc-c30c-4421-bf40-c305e7840fb4?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/f0/f0bedb3a-0e69-4aa3-8f30-f46134f7e3e6?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/1e/1e20b71c-d1b0-4198-8964-cfbc78c770ab?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/23/23c8da6b-c779-4a2f-a553-59bb1a6fe5a7?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/a2/a24692b8-9e45-4ab3-a88a-5b9366f0c89e?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/8d/8d87a8d6-df1b-4d8f-81f7-358df8b3495b?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/14/14237e53-5ecf-490d-8e00-3a5df7a3a996?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/d2/d27b66b6-4ba0-4808-81d2-3c40ab477948?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/e2/e2c94faf-2339-42ee-829c-875c946c7b47?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/cb/cb3da589-843f-42a6-956b-35fa8168eb09?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/53/531f1c4d-a53e-4efa-98d1-d17aa1bf3a0e?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/21/21ea9b7f-966e-416a-88b2-ecf199c456db?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/08/0803e52a-996f-458a-8ff5-f73d950a55bb?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/44/44c519a2-3a3e-4ffa-a4d4-67300ad6570f?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/7c/7c0b65cb-ef23-4893-920e-54018cea57e4?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/81/81975a1f-238d-453f-a21b-07e0e1c110e2?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/c0/c08e1f5d-29cc-4419-81eb-824aa88b0abb?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/90/9038be73-92f6-46ac-8abd-9182df145765?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/1a/1a6d7687-2dcb-435f-8885-eacb7b543a2c?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/46/465c12c7-e9ff-4ecb-8e17-c7f47a7b20f4?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/b6/b6fd9393-6d43-4b1f-bea4-5a01cf83dd9c?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/bf/bfa97392-92d3-4b11-9c9d-62576d9de052?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/e3/e3b4ac43-c355-47dd-b93f-57f895fa05b5?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/38/386166f9-f436-4ac8-ada0-ce6d72427435?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/38/386166f9-f436-4ac8-ada0-ce6d72427435?rule=s-I72.auto",
    "https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/38/386166f9-f436-4ac8-ada0-ce6d72427435?rule=s-I72.auto",

])
</script>

<template>
    <div class="grid justify-content-center gap-3">
        <House v-for="house in houses" :housePic="house" class="" />
    </div>
</template>

<style>
</style>