<script setup lang="ts">
const linkStyle = "p-2 text-500 no-underline text-2xl transition-colors transition-duration-300 hover:text-green-600"

</script>
<template>
    <div>
        <!-- <NuxtWelcome /> -->
        <nav class="flex justify-content-center gap-6 ">
            <NuxtLink activeClass="text-green-500" to="/">Home</NuxtLink>
            <NuxtLink activeClass="text-green-500" to="/jobs">Job Listings</NuxtLink>
            <NuxtLink activeClass="text-green-500" to="/about">About</NuxtLink>

            <NuxtLink activeClass="text-green-500" to="/posts/1">Post 1</NuxtLink>
            <NuxtLink activeClass="text-green-500" to="/posts/2">Post 2</NuxtLink>
        </nav>
        <!-- <NuxtPage name="HomePage" /> -->
    </div>
</template>
  