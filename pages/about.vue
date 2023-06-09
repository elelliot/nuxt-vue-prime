<script setup lang="ts">
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Toast, { type ToastMessageOptions } from "primevue/toast";
import FileUpload from "primevue/fileupload";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";

import { useToast } from "primevue/usetoast";
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, number, boolean } from "yup";

interface PropertyForm {
  price: number;
  negotiable: boolean;
  models: { name: string | number; value: string | number };
  rooms: { name: string | number; value: string | number };
  minSize: number;
  maxSize: number;
  streetName: string;
  houseBuildingNumber: string;
  houseAd: string;
  houseDescription: string;
}

const toast = useToast();
const showNotification = (
  type: ToastMessageOptions["severity"],
  title: string,
  message: string
) => {
  toast.add({ severity: type, summary: title, detail: message, life: 3000 });
};
// const price = ref(0);
// const negotiable = ref(false);
// const models = ref(0);
// const rooms = ref(0);
// const minSize = ref(50);
// const maxSize = ref(100);
// const streetName = ref("");
// const houseBuildingNumber = ref("");
// const houseAd = ref("");
// const houseDescription = ref("");

const schema = toTypedSchema(
  object({
    price: number().integer().required(),
    negotiable: boolean(),
    models: number().integer(),
    rooms: number().integer(),
    minSize: number().integer(),
    maxSize: number().integer(),
    streetName: string().required(),
    houseBuildingNumber: string().required(),
    houseAd: string(),
    houseDescription: string(),
  })
);

const { handleSubmit } = useForm<PropertyForm>({
  validationSchema: schema,
  initialValues: {
    price: 100000,
    negotiable: false,
    models: { name: "0", value: "0" },
    rooms: { name: 1, value: 1 },
    minSize: 50,
    maxSize: 100,
    streetName: "",
    houseBuildingNumber: "",
    houseAd: "",
    houseDescription: "",
  },
  validateOnMount: true,
});
const { value: price, errorMessage: priceErrMsg } = useField("price");
const { value: negotiable } = useField("negotiable");
const { value: models } = useField("models");
const { value: rooms } = useField("rooms");
const { value: minSize } = useField("minSize");
const { value: maxSize } = useField("maxSize");
const { value: streetName, errorMessage: streetNameErrMsg } =
  useField("streetName");
const { value: houseBuildingNumber, errorMessage: houseBuildingNumberErrMsg } =
  useField("houseBuildingNumber");
const { value: houseAd } = useField("houseAd");
const { value: houseDescription } = useField("houseDescription");

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

// function onInvalidSubmit({ values, errors, results }) {
function onInvalidSubmit() {
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
  { name: "0", value: "0" },
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
]);
const roomsNumber = ref([
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
  { name: 11, value: 11 },
  { name: 12, value: 12 },
  { name: 13, value: 13 },
  { name: 14, value: 14 },
  { name: 15, value: 15 },
  { name: 16, value: 16 },
  { name: 17, value: 17 },
  { name: 18, value: 18 },
  { name: 19, value: 19 },
  { name: 20, value: 20 },
]);
</script>

<template>
  <div class="max-w-full py-4 sm:mx-12 lg:(max-w-[1024px] mx-auto)">
    <div class="flex flex-col items-center">
      <span class="text-4xl font-semibold">Post Property to Sell</span>
      <form @submit="onSubmit" class="flex flex-col mt-12">
        <div class="flex flex-col">
          <label for="price">Price</label>
          <InputNumber
            id="price"
            v-model="(price as number)"
            inputId="integeronly"
            :class="{ 'p-invalid': priceErrMsg }"
          />
          <small class="p-error" id="text-error">{{
            priceErrMsg || "&nbsp;"
          }}</small>
        </div>

        <div class="flex flex-col">
          <label for="negotiable">Negotiable?</label>
          <Checkbox v-model="negotiable" id="negotiable" :binary="true" />
        </div>
        <div class="flex gap-2">
          <div class="flex flex-col">
            <label for="models">Models</label>
            <Dropdown
              v-model="(models as number)"
              id="models"
              :options="modelsNumber"
              option-label="name"
              class="md:w-14rem"
            />
          </div>
          <div class="flex flex-col">
            <label for="rooms">Rooms</label>
            <Dropdown
              v-model="(rooms as number)"
              id="rooms"
              :options="roomsNumber"
              option-label="name"
              class="md:w-14rem"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="minSize">Minimum Size</label>
          <InputNumber
            v-model="(minSize as number)"
            id="minSize"
            inputId="minmax-buttons"
            showButtons
            :min="0"
            :max="50"
          />
          <label for="maxSize">Maximum Size</label>
          <InputNumber
            v-model="(maxSize as number)"
            id="maxSize"
            inputId="minmax-buttons"
            showButtons
            :min="51"
            :max="100"
          />
        </div>
        <div class="flex flex-col">
          <label for="streetName">Street Name</label>
          <InputText
            v-model="(streetName as string)"
            id="streetName"
            type="text"
            class="w-full"
          />
        </div>
        <div class="flex flex-col">
          <label for="houseBuildingNumber">House building number</label>
          <InputText
            v-model="houseBuildingNumber as string"
            id="houseBuildingNumber"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label for="houseAd">Title</label>
          <InputText v-model="(houseAd as string)" id="houseAd" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="houseDescription">Title</label>
          <Textarea
            v-model="(houseDescription as string)"
            id="houseDescription"
            autoResize
            rows="5"
            cols="30"
          />
        </div>

        <Button type="submit" label="Post Property" class="mt-12" />
      </form>
    </div>
    <Toast />
  </div>
</template>
