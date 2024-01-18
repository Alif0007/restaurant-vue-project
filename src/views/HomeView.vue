<script setup>
import { useCounterStore } from "@/stores/counter";
import TabTwo from "@/components/TabTwo.vue";
import TabThree from "@/components/TabThree.vue";
import { ref, computed } from "vue";

const counter = useCounterStore();

const numbers = computed(() => {
  return counter.getCount;
});

function plus() {
  console.log("adding...");
  counter.increment();
}

const tabOne = ref(true);
const tabTwo = ref(false);
const tabThree = ref(false);
const tabFour = ref(false);
const tabFive = ref(false);
const foodName = ref("Pizza");

function tab(id) {
  if (id == 1) {
    tabOne.value = true;
    tabTwo.value = false;
    tabThree.value = false;
    tabFour.value = false;
    tabFive.value = false;
    foodName.value = "Pizza";
  } else if (id == 2) {
    tabOne.value = false;
    tabTwo.value = true;
    tabThree.value = false;
    tabFour.value = false;
    tabFive.value = false;
    foodName.value = "Burger";
  } else if (id == 3) {
    tabOne.value = false;
    tabTwo.value = false;
    tabThree.value = true;
    tabFour.value = false;
    tabFive.value = false;
    foodName.value = "Snacks";
  } else if (id == 4) {
    tabOne.value = false;
    tabTwo.value = false;
    tabThree.value = false;
    tabFour.value = true;
    tabFive.value = false;
    foodName.value = "Salads";
  } else {
    tabOne.value = false;
    tabTwo.value = false;
    tabThree.value = false;
    tabFour.value = false;
    tabFive.value = true;
    foodName.value = "Drinks";
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="w-8/12 border-solid border-2 p-8">
      <!-- {{ numbers }} <button @click="plus">+</button> -->
      <div class="icon-list">
        <div @click="tab(1)" class="icon-container">
          <div class="menu-icon">
            <img
              src="https://www.freeiconspng.com/thumbs/pizza-icon/pizza-icon-18.png"
              alt=""
            />
          </div>
          <div class="title" :class="tabOne ? 'active' : ''">Pizza</div>
        </div>
        <div @click="tab(2)" class="icon-container">
          <div class="menu-icon">
            <img
              class="icon-img-style"
              src="https://cdn-icons-png.flaticon.com/512/106/106277.png"
              alt=""
            />
          </div>
          <div class="title" :class="tabTwo ? 'active' : ''">Burger</div>
        </div>
        <div @click="tab(3)" class="icon-container">
          <div class="menu-icon">
            <img
              class="icon-img-style"
              src="https://cdn.iconscout.com/icon/free/png-256/free-french-fries-88-819249.png"
              alt=""
            />
          </div>
          <div class="title" :class="tabThree ? 'active' : ''">Snacks</div>
        </div>
        <div @click="tab(4)" class="icon-container">
          <div class="menu-icon">
            <img
              class="icon-img-style"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/salad-2-82854.png"
              alt=""
            />
          </div>
          <div class="title" :class="tabFour ? 'active' : ''">Salads</div>
        </div>
        <div @click="tab(5)" class="icon-container">
          <div class="menu-icon">
            <img
              class="icon-img-style"
              src="https://icon-library.com/images/drink-icon-png/drink-icon-png-20.jpg"
              alt=""
            />
          </div>
          <div class="title" :class="tabFive ? 'active' : ''">Drinks</div>
        </div>
      </div>
      <!--------- line------ -->

      <div class="flex items-center mt-2">
        <hr class="border-solid border-2 border-yellow-600 w-full" />
        <p class="font-extrabold text-xl text-yellow-700 px-4">
          {{ foodName }}
        </p>
        <hr class="border-solid border-2 border-yellow-600 w-full" />
      </div>
      <p class="justify-center flex font-light">32cm/48cm</p>

      <!----------------------- Tab ---------------------->
      <div v-if="tabOne" class="tab-1">
        <div class="mt-8 w-full grid grid-cols-2">
          <div class="flex w-full">
            <img
              class="w-28 pr-2"
              src="../assets/Freshly_baked_pizza_with_a_cut_slice_isolated_-4-removebg-preview.png"
              alt=""
            />
            <div>
              <p class="font-extrabold">Margherita</p>
              <p class="pr-2">
                tomatoes, mozzarella cheese, fresh basil, salt, and olive oil
              </p>
            </div>
            <p>$17/$26</p>
          </div>
          <div class="flex w-w-full">
            <img
              class="w-28 pr-2"
              src="../assets/Freshly_baked_pizza_with_a_cut_slice_isolated_-4-removebg-preview.png"
              alt=""
            />
            <div>
              <p class="font-extrabold">Margherita</p>
              <p class="pr-2">
                tomatoes, mozzarella cheese, fresh basil, salt, and olive oil
              </p>
            </div>
            <p>$17/$26</p>
          </div>
          <div class="flex w-w-full">
            <img
              class="w-28 pr-2"
              src="../assets/Freshly_baked_pizza_with_a_cut_slice_isolated_-4-removebg-preview.png"
              alt=""
            />
            <div>
              <p class="font-extrabold">Margherita</p>
              <p class="pr-2">
                tomatoes, mozzarella cheese, fresh basil, salt, and olive oil
              </p>
            </div>
            <p>$17/$26</p>
          </div>
          <div class="flex w-w-full">
            <img
              class="w-28 pr-2"
              src="../assets/Freshly_baked_pizza_with_a_cut_slice_isolated_-4-removebg-preview.png"
              alt=""
            />
            <div>
              <p class="font-extrabold">Margherita</p>
              <p class="pr-2">
                tomatoes, mozzarella cheese, fresh basil, salt, and olive oil
              </p>
            </div>
            <p>$17/$26</p>
          </div>
          <div class="flex w-w-full">
            <img
              class="w-28 pr-2"
              src="../assets/Freshly_baked_pizza_with_a_cut_slice_isolated_-4-removebg-preview.png"
              alt=""
            />
            <div>
              <p class="font-extrabold">Margherita</p>
              <p class="pr-2">
                tomatoes, mozzarella cheese, fresh basil, salt, and olive oil
              </p>
            </div>
            <p>$17/$26</p>
          </div>
          <div class="flex w-w-full">
            <img
              class="w-28 pr-2"
              src="../assets/Freshly_baked_pizza_with_a_cut_slice_isolated_-4-removebg-preview.png"
              alt=""
            />
            <div>
              <p class="font-extrabold">Margherita</p>
              <p class="pr-2">
                tomatoes, mozzarella cheese, fresh basil, salt, and olive oil
              </p>
            </div>
            <p>$17/$26</p>
          </div>
        </div>
      </div>
      <div v-else-if="tabTwo" class="tab-2">
        <TabTwo />
      </div>
      <div v-else-if="tabThree" class="tab-3">
        <TabThree />
      </div>
      <div v-else-if="tabFour" class="tab-4">tab 4</div>
      <div v-else class="tab-5">tab 5</div>
    </div>
  </div>
</template>

<style>
.icon-list {
  display: flex;
  justify-content: center;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
  cursor: pointer;
}

.icon-style {
  font-size: 60px;
}

.menu-icon {
  width: 60px;
  height: 100%;
}

.active {
  text-decoration: underline;
  color: rgb(241, 48, 48);
  font-weight: 800;
}
</style>
