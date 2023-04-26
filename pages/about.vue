<script setup>
const { data } = useFetch("/api/cars/Toronto")

</script>

<template>
    <div>
        {{ data }}
    </div>
</template>
