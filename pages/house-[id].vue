<script setup lang="ts">
import Galleria from "primevue/galleria";
import Image from "primevue/image";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Divider from 'primevue/divider';

import { faker } from "@faker-js/faker";
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'



const breakpoints = useBreakpoints(breakpointsTailwind)

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
    breakpoint: "479px",
    numVisible: 2,
  },
  {
    breakpoint: "639px",
    numVisible: 3,
  },
  {
    breakpoint: "767px",
    numVisible: 4,
  },
]);

const perksInHouse = ref([
  {
    icon: 'pi pi-shield',
    text: 'Seguridad'
  },
  {
    icon: 'pi pi-sun',
    text: 'Jardines'
  },
  {
    icon: 'pi pi-car',
    text: 'Estacionamiento para visitas'
  },
  {
    icon: 'pi pi-wifi',
    text: 'Wi-Fi'
  },
  {
    icon: 'pi pi-bell',
    text: 'Alarma contra incendios'
  },
  {
    icon: 'pi pi-shopping-bag',
    text: 'Centros comerciales cercanos'
  },
  {
    icon: 'pi pi-box',
    text: 'Bodegas'
  },
  {
    icon: 'pi pi-video',
    text: 'Cinema'
  },
  {
    icon: 'pi pi-home',
    text: 'Escuelas cercanas'
  },
])


const mdAndSmaller = breakpoints.smallerOrEqual('md')

</script>

<template>
  <div class="flex flex-col pt-4">
    <div>
      <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4"
        :thumbnailsPosition="mdAndSmaller ? 'bottom' : 'right'" :circular="true" containerStyle="max-width: 640px">
        <template #item="slotProps">
        <Image :src="slotProps.item.housePhoto" :alt="slotProps.item.altText" :preview="true"
          :imageClass="mdAndSmaller ? 'w-full block' : 'block'" />
        </template>
        <template #thumbnail="slotProps">
          <Image :src="slotProps.item.housePhoto" :alt="slotProps.item.altText" imageClass="w-24 h-16 block	" />
        </template>
      </Galleria>
    </div>

    <div class="">
      <TabView>
        <TabPanel header="Detalles Generales">
          <div class="w-full">
            <p class="text-xl">
              (ANUNCIO DIRIGIDO A BROKERS) Departamentos en Preventa More Santa Fe
              en Cuajimalpa de Morelos, CDMX <br />

            <div class="pt-4 pb-6">
              Desde <span class="font-bold text-5xl">$3,660,076</span>
            </div>
            </p>

            <span class="text-xl">Detalles Generales</span>
            <div class="grid grid-cols-3 w-full gap-4 mt-6">
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

    <!-- <Divider layout="vertical" />

      <HowToContact /> -->

  </div>
</template>

<style module>
.p-image {
  height: 100%;
}
</style>