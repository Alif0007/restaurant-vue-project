<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/product";
const product = useProductStore();

const category = ref("");
const categoris = computed(() => {
  return product.getCategory;
});
const popUp = ref(true);

function addcat() {
  if (!category.value) return;
  product.addcategory(category.value);
  category.value = "";
  clickPopUp(0);
}

function clickPopUp(id) {
  if (id == 0) {
    popUp.value = true;
  } else {
    popUp.value = false;
  }
}
</script>

<template>
  <div class="flex">
    <div>
      <div class="bg-gray-100 w-80 height">
        <h1 class="text-center font-bold mb-8 pt-2">Menu</h1>
        <div class="sub-menu-content text-center font-semibold p-3">
          Sub-Category
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center height container">
      <div>
        <div class="flex flex-col w-96">
          <div>
            <select class="p-4 mb-4 rounded border-gray-900 border w-full">
              <option value="" disabled selected hidden>
                Select Your Category
              </option>
              <option
                v-for="(item, index) in categoris"
                :key="index"
                :value="item"
              >
                {{ item }}
              </option>
            </select>
          </div>
          <input
            class="p-4 mb-4 rounded border-gray-900 border"
            type="text"
            placeholder="Product Name"
            name="uname"
          />
          <input
            class="p-4 mb-4 rounded border-gray-900 border"
            type="number"
            placeholder="Product Price"
            name="uname"
          />
          <button class="rounded btn-1 bg-blue-700 text-white px-2 py-2">
            SUBMIT
          </button>
        </div>
      </div>
      <div class="">
        <button
          @click="clickPopUp(1)"
          class="ml-12 bg-green-600 text-white rounded-md font-semibold py-2 px-4 mr-4"
        >
          Add New Category
        </button>
      </div>
    </div>

    <div
      class="flex justify-center items-center model"
      :class="popUp ? 'none-display' : ''"
    >
      <div class="modal-content">
        <div class="h-42 flex flex-col p-6 shadow bg-white">
          <h1 class="text-3xl text-center">Enter Category</h1>
          <input
            v-model="category"
            class="p-2 mb-4 rounded border-gray-900 border mt-4 rounded border-blue-300 border-2"
            type="text"
          />
          <div class="flex justify-center">
            <button
              @click="addcat"
              class="rounded btn-1 bg-blue-500 text-white px-4 py-2 mr-4"
            >
              OK
            </button>
            <button
              @click="clickPopUp(0)"
              class="rounded btn-1 bg-gray-500 text-white px-2 py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  position: relative;
}
.model {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0 0 0 / 57%);

  align-items: center;
  justify-content: center;
}

.none-display {
  display: none;
}
.flex-display {
  display: flex;
}
.modal-content {
  max-height: 500px;
  width: 600px;
}

.sub-menu-content:hover {
  background-color: rgb(200, 200, 234);
}
</style>
