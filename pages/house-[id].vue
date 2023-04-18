<script setup lang="ts">
import { ref, onMounted } from "vue";
import Galleria from "primevue/galleria";
import Image from "primevue/image";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Divider from 'primevue/divider';

import { faker } from "@faker-js/faker";

const images = ref();

function generateRandomData() {
  const houses = [];
  for (let i = 0; i < 10; i++) {
    houses.push({
      housePhoto: faker.image.city(640, 480, true),
      altText: faker.lorem.words(2),
    });
  }
  images.value = houses;
}

onMounted(() => {
  generateRandomData();
});

const responsiveOptions = ref([
  {
    breakpoint: "1920px",
    numVisible: 5,
  },
  {
    breakpoint: "1280px",
    numVisible: 5,
  },
  {
    breakpoint: "991px",
    numVisible: 4,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);

const perksInHouse = ref([
  {
    icon:'pi pi-shield',
    text:'Seguridad'
  },
  {
    icon:'pi pi-sun',
    text:'Jardines'
  },
  {
    icon:'pi pi-car',
    text:'Estacionamiento para visitas'
  },
  {
    icon:'pi pi-wifi',
    text:'Wi-Fi'
  },
  {
    icon:'pi pi-bell',
    text:'Alarma contra incendios'
  },
  {
    icon:'pi pi-shopping-bag',
    text:'Centros comerciales cercanos'
  },
  {
    icon:'pi pi-box',
    text:'Bodegas'
  },
  {
    icon:'pi pi-video',
    text:'Cinema'
  },
  {
    icon:'pi pi-home',
    text:'Escuelas cercanas'
  },
])



</script>

<template>
  <div class="flex pt-4">
    <div class="flex justify-center mr-8">
      <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" containerStyle="max-width: 640px">
        <template #item="slotProps">
          <Image :src="slotProps.item.housePhoto" :alt="slotProps.item.altText" :preview="true" class="h-[480px]" />
        </template>
        <template #thumbnail="slotProps">
          <Image :src="slotProps.item.housePhoto" :alt="slotProps.item.altText" imageClass="w-20 h-20" />
        </template>
      </Galleria>
    </div>

    <div class="w-[860px]">
      <TabView>
        <TabPanel header="Detalles Generales">
          <div class="w-full">
            <p class="text-xl">
              (ANUNCIO DIRIGIDO A BROKERS) Departamentos en Preventa More Santa Fe
              en Cuajimalpa de Morelos, CDMX <br />

            <div class="pt-4">
              Desde <span class="font-bold text-5xl">$3,660,076</span>
            </div>
            </p>

            <span class="text-xl">Detalles Generales</span>
            <div class="grid grid-cols-3 w-full gap-4 mt-8">
              <div>
                <i class="pi pi-check-circle"></i>
                <span class="ml-2">Estatus: <span class="font-bold">Preventa</span></span>
              </div>
              <div>
                <i class="pi pi-table"></i>
                <span class="ml-2">Metros Cuadrados: <span class="font-bold">54-94m²</span></span>
              </div>
              <div>
                <i class="pi pi-check-circle"></i>
                <span class="ml-2">Recamaras: <span class="font-bold">2-3</span></span>
              </div>
              <div>
                <i class="pi pi-check-circle"></i>
                <span class="ml-2">Baños: <span class="font-bold">2</span></span>
              </div>
              <div>
                <i class="pi pi-check-circle"></i>
                <span class="ml-2">Medio Baños: <span class="font-bold">1</span></span>
              </div>
              <div>
                <i class="pi pi-car"></i>
                <span class="ml-2">Garage: <span class="font-bold">1-2</span></span>
              </div>
              <div>
                <i class="pi pi-home"></i>
                <span class="ml-2">Fecha de Construccion: <span class="font-bold">-</span></span>
              </div>
              <div>
                <i class="pi pi-table"></i>
                <span class="ml-2">Superficie Total: <span class="font-bold">-</span></span>
              </div>
              <div>
                <i class="pi pi-calendar"></i>
                <span class="ml-2">Entrega: <span class="font-bold">Diciembre 2025</span></span>
              </div>
            </div>

          </div>

        </TabPanel>


        <TabPanel header="Amenidades">
          <div class="grid grid-cols-6 w-full">
            <Perks v-for="perk in perksInHouse" :perk-icon="perk.icon">
              <template #text>
                {{ perk.text }}
              </template>
            </Perks>
          </div>
        </TabPanel>
        <!-- <TabPanel header="Modelos">
          <p></p>
        </TabPanel>
        <TabPanel header="Ubicacion">
          <p></p>
        </TabPanel>
        <TabPanel header="Descripcion">
          <p></p>
        </TabPanel> -->
      </TabView>  
    </div>

    <Divider layout="vertical" />
    
    <div class="">
      <ContactForm />
    </div>



  </div>
</template>

<style scoped>
.p-tabview-panels {
  padding: 0px;
}
</style>
