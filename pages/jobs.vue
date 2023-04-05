<script setup>
import Button from 'primevue/button';
useHead({ title: 'Breaking Bad Quotes' })

const isLoading = ref(false)
const quote = ref('Welcome to Breaking Bad Quotes generator Bitch')
const author = ref('')

function getQuote() {
    const { pending, data: quoteStruc } = useLazyFetch('https://api.breakingbadquotes.xyz/v1/quotes')
    isLoading.value = pending.value
    if (isLoading.value) {
        quote.value = 'Fetchin, bitch!'
        author.value = ''
        console.log('Ta cargando', isLoading.value)
    }

    watch(quoteStruc, () => {
        if (quote) {
            console.log('cambio')
            quote.value = quoteStruc.value[0].quote
            author.value = quoteStruc.value[0].author
            isLoading.value = false
            console.log('Ya no ta cargando', isLoading.value) //TODO: why is still true?
        }
    })
}

</script>

<template>
    <div class="text-center my-auto mx-7 ">
        <h1 class="">{{ quote }}</h1>
        <h1 v-if="quote" class="text-primary">{{ author }}</h1>

        <Button @click="getQuote" class="bg-green-500 hover:bg-green-600" rounded size="large" :loading="isLoading" label="Get Quote" icon="pi pi-search" />
        <!-- <button @click="getQuote">Get Quote</button> -->
    </div>
    <!-- <div class="cont">
            <h1 class="quoteText">{{ quote }}</h1>
            <h1 v-if="quote" class="quoteText">{{ author }}</h1>
        
            <button @click="getQuote">Get Quote</button>
        </div> -->
</template>

<style scoped>
/* button {
    background-color: rgb(53, 190, 53);
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    color: black;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: background-color 200ms, transform 200ms, box-shadow 200ms;
}

button:hover {
    background-color: rgb(64, 165, 64);

    -webkit-box-shadow: 0px 5px 5px 0px rgba(217, 202, 202, 0.7);
    box-shadow: 0px 5px 5px 0px rgba(217, 202, 202, 0.7);
    --tw-shadow-color: #ffffff;
}

button:active {
    transform: scale(.9);
} */
</style>