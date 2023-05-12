<script setup lang="ts">
import Menubar from 'primevue/menubar';
import TabMenu from 'primevue/tabmenu';
const items = ref([{
    label: 'Home',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    to: '/jobs'
  },
  {
    label: 'About',
    icon: 'pi pi-info',
    to: '/about'
  },
  {
    label: 'Post 1',
    icon: 'pi pi-info',
    to: '/posts/1'
  },
  {
    label: 'Post 2',
    icon: 'pi pi-info',
    to: '/posts/2'
  },
]);
const linkStyle = "py-2 px-2 mx-1 no-underline text-2xl transition-colors transition-duration-300 rounded-1 hover:(text-white bg-black)"


</script>
<template>
    <div class="">
        <!-- <NuxtWelcome /> -->
        <!-- <nav class="flex justify-center">
            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/">Home</NuxtLink>
            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/jobs">Job Listings</NuxtLink>
            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/about">About</NuxtLink>

            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/posts/1">Post 1</NuxtLink>
            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/posts/2">Post 2</NuxtLink>
        </nav> -->
        
        <Menubar class="flex justify-center" :model="items" >
          <template #start>

          </template>
          <template #end>
            <nav class="flex justify-center">
            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/login">Log In</NuxtLink>
            <NuxtLink activeClass="text-white bg-black" :class="linkStyle" to="/sign">Sign In</NuxtLink>
        </nav>
          </template>
        </Menubar>

        <!-- <Menubar class="flex justify-center" :model="items" /> -->
        <!-- <TabMenu class="flex justify-center" :model="items" /> -->

        <!-- <NuxtPage name="HomePage" /> -->
    </div>
</template>
  