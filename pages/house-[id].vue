<script setup lang="ts">
import Galleria from "primevue/galleria";
import Image from "primevue/image";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

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

const isMobileScreen = breakpoints.smallerOrEqual('md')
const isSendMessageModalOpen = ref(false)

</script>

<template>
  <div class="flex mt-4 gap-4 justify-between max-w-[1980px]">
    <div class="flex flex-col items-center lg:(items-start w-full) xl:w-2/3 2xl:w-1/2 gap-4">

      <!-- Fix Galleria not filling container -->
      <Galleria :value="images" :numVisible="4" :showItemNavigators="isMobileScreen ? true : false"
        thumbnailsPosition="right" :circular="true" containerStyle="overflow-hidden" :autoPlay="true"
        :showThumbnails="isMobileScreen ? false : true">
        <template #item="slotProps">
          <Image :src="slotProps.item.housePhoto" :alt="slotProps.item.altText" :preview="isMobileScreen ? false : true"
            :imageClass="isMobileScreen ? 'w-full block' : 'w-full block'" />
        </template>
        <template #thumbnail="slotProps">
          <Image :src="slotProps.item.housePhoto" :alt="slotProps.item.altText" imageClass="w-24 h-16 block" />
        </template>
      </Galleria>

      <div class="max-w-[744px]">
        <div class="flex flex-col gap-4 mb-4 lg:hidden">
          <Button @click="() => isSendMessageModalOpen = true" label="Contactar" class="bg-blue-400 border-blue-400" />
          <Dialog v-model:visible="isSendMessageModalOpen" header="Enviar Mensaje" modal :draggable="true"
            :style="{ width: '75vw' }" :showHeader="true">
            <MessageForm />
          </Dialog>
          <Button class="bg-green-500 border-green-500 hover:(bg-green-800 border-green-800)">
            <div class="w-full flex justify-center gap-4 items-center">
              <span class="">O enviar un WhatsApp</span>
              <i class="pi pi-whatsapp"></i>
            </div>
          </Button>
        </div>

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
            <div class="grid grid-cols-3 gap-1">
              <Perks v-for="perk in perksInHouse" :perk-icon="perk.icon">
                <template #text>
                  {{ perk.text }}
                </template>
              </Perks>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>

    <!-- Can't conditional render this with useBreakpoints , it will break the app -->
    <div class="hidden lg:(block w-1/3 sticky top-4 h-1/2) 2xl:w-1/2">
      <HowToContact />
    </div>
  </div>
</template>

<style scoped>
/* :deep(.p-galleria-item-wrapper)	{
  width: 700px;
} */
.p-image {
  height: 100%;
}

.p-galleria-content {
  overflow: hidden;
}
</style>