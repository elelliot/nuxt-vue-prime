<script setup lang="ts">
import { faker } from '@faker-js/faker';


const houseAds = ref([{
    housePhoto: "", 
    housePrice: "",
    houseModels: 0,
    houseCapacity: 0,
    houseMinSize: 0,
    houseMaxSize: 0,
    houseAddress:"",
    streetName:"",
    houseBuildingNumber: "",
    houseDescription:"",
    houseID:""
}])

function generateRandomData(){
    const houses = []
    for (let i = 0; i < 26; i++) {
        houses.push({
            housePhoto: faker.image.city(640, 480, true),
            housePrice: faker.finance.amount(1000000, 12000000, 0, "$", true),
            houseModels: faker.datatype.number({ min: 1, max: 9 }),
            houseCapacity: faker.datatype.number({ min: 1, max: 9 }),
            houseMinSize: faker.datatype.number({ min: 20, max: 200 }),
            houseMaxSize: faker.datatype.number({ min: 201, max: 400 }),
            houseAddress: faker.address.street(),
            streetName: faker.address.street(),
            houseBuildingNumber: faker.address.buildingNumber(),
            houseDescription: faker.lorem.sentence(9),
            houseID: faker.datatype.uuid()
        })
    }
    houseAds.value = houses
}

onMounted(() => {
    generateRandomData()
})

</script>

<template>
    <div class="max-w-[1920px] mx-auto">
        <div class="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <House v-for="(house, index) in houseAds"
            :key="index"
            :housePhoto="house.housePhoto" 
            :housePrice="house.housePrice"
            :houseModels="house.houseModels" 
            :houseCapacity="house.houseCapacity" 
            :houseMinSize="house.houseMinSize"
            :houseMaxSize="house.houseMaxSize"
            :houseAddress="house.houseAddress"
            :streetName="house.streetName"
            :houseBuildingNumber="house.houseBuildingNumber"
            :houseDescription="house.houseDescription"
            :houseID="house.houseID"
            />
        </div>
    </div>
</template>

<style></style>