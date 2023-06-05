<script setup>
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Toast from "primevue/toast";
import FileUpload from "primevue/fileupload";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";

import { useToast } from "primevue/usetoast";
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, array, string, number, boolean } from "yup";

const toast = useToast();
const showNotification = (type, title, message) => {
  toast.add({ severity: type, summary: title, detail: message, life: 3000 });
};

const housePhotos = ref([]);
const price = ref(0);
const negotiable = ref(false);
const models = ref(0);
const rooms = ref(0);
const minSize = ref(0);
const maxSize = ref(20);
const streetName = ref("");
const houseBuildingNumber = ref("");
const houseAd = ref("");
const houseDescription = ref("");

const schema = toTypedSchema(
  object({
    housePhotos: array().required(),
    price: number().integer().required(),
    negotiable: boolean(),
    models: number().integer().required(),
    rooms: number().integer().required(),
    minSize: number().integer().required(),
    maxSize: number().integer().required(),
    streetName: string().required(),
    houseBuildingNumber: string().required(),
    houseAd: string(),
    houseDescription: string(),
  })
);

const { handleSubmit, errors, errorBag } = useForm({
  validationSchema: schema,
  initialValues: {
    housePhotos: [""],
    price: 0,
    negotiable: false,
    models: 1,
    rooms: 1,
    minSize: 50,
    maxSize: 100,
    streetName: "",
    houseBuildingNumber: "",
    houseAd: "",
    houseDescription: "",
  },
});

const onSubmit = handleSubmit(async (values) => {
  if (values) {
    // const resp = await $fetch("/api/properties/property", {
    //   method: "POST",
    //   body: {
    //     housePhoto: values.housePhoto,
    //     price: values.price,
    //     negotiable: values.negotiable,
    //     models: values.models,
    //     rooms: values.rooms,
    //     minSize: values.minSize,
    //     maxSize: values.maxSize,
    //     streetName: values.streetName,
    //     houseBuildingNumber: values.houseBuildingNumber,
    //     houseAd: values.houseAd,
    //     houseDescription: values.houseDescription,

    //   },
    // });
    showNotification("success", "Success", `Property posted Succesfully.`);
    // if (resp) {
    //   showNotification(
    //     "success",
    //     "Success",
    //     `Property posted Succesfully.`
    //   );
    //   navigateTo("/");
    // } else {
    //   showNotification(
    //     "error",
    //     "Oh No!",
    //     `Something went wrong please try again or wait a little time.`
    //   );
    // }
  }
}, onInvalidSubmit);

const onAdvancedUpload = (event) => {
  showNotification("success", "Success", "Image uploaded successfully.");
};

const onSelect = (event) => {
  console.log(event.files);
};

function onInvalidSubmit({ values, errors, results }) {
  showNotification(
    "error",
    "Error in Data",
    "Data couldn't be sent, please fix them errors"
  );
  // console.log(values); // current form values
  // console.log(errors); // a map of field names and their first error message
  // console.log(results); // a detailed map of field names and their validation results
}

const modelsNumber = ref([
  { label: 0, value: 0 },
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 },
]);
const roomsNumber = ref([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);
</script>

<template>
  <div class="max-w-full py-4 sm:mx-12 lg:(max-w-[1024px] mx-auto)">
    <pre>{{ errors }}</pre>
    <div class="flex flex-col items-center">
      <span class="text-4xl font-semibold">Post Property to Sell</span>
      <form @submit="onSubmit" class="flex flex-col mt-12 w-full">
        <div class="mb-4">
          <label for="housePhoto">Photos</label>
          <div class="card">
            <FileUpload
              id="housePhoto"
              name="housePhotos"
              url="/api/properties/properties"
              @upload="onAdvancedUpload($event)"
              @select="onSelect($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <p>Drag and drop files to here to upload.</p>
              </template>
            </FileUpload>
          </div>
        </div>
        <div class="flex flex-col">
          <label for="price">Price</label>
          <InputNumber v-model="price" id="price" inputId="integeronly" />
        </div>

        <div class="flex flex-col">
          <label for="negotiable">Negotiable?</label>
          <Checkbox v-model="negotiable" id="negotiable" :binary="true" />
        </div>
        <div class="flex flex-col">
          <label for="models">Models</label>
          <Dropdown
            v-model="models"
            id="models"
            :options="modelsNumber"
            optionLabel="label"
            class="w-full md:w-14rem"
          />
        </div>
        <div class="flex flex-col">
          <label for="rooms">Rooms</label>
          <Dropdown
            v-model="rooms"
            id="rooms"
            :options="roomsNumber"
            class="w-full md:w-14rem"
          />
        </div>
        <div class="flex flex-col">
          <label for="minSize">Minimum Size</label>
          <InputNumber
            v-model="minSize"
            id="minSize"
            inputId="minmax-buttons"
            showButtons
            :min="0"
            :max="20"
          />
          <label for="maxSize">Maximum Size</label>
          <InputNumber
            v-model="maxSize"
            id="maxSize"
            inputId="minmax-buttons"
            showButtons
            :min="20"
            :max="100"
          />
        </div>
        <div class="flex flex-col">
          <label for="streetName">Street Name</label>
          <InputText
            v-model="streetName"
            id="streetName"
            type="text"
            class="w-full"
          />
        </div>
        <div class="flex flex-col">
          <label for="houseBuildingNumber">House building number</label>
          <InputText
            v-model="houseBuildingNumber"
            id="houseBuildingNumber"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label for="houseAd">Title</label>
          <InputText v-model="houseAd" id="houseAd" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="houseDescription">Title</label>
          <Textarea
            v-model="houseDescription"
            id="houseDescription"
            autoResize
            rows="5"
            cols="30"
          />
        </div>

        <Button type="submit" label="Create Post" class="mt-12" />
      </form>
    </div>
    <Toast />
  </div>
</template>
