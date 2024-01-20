<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const admin = ref("admin");
const router = useRouter();

function login() {
  if (username.value === admin.value && password.value === admin.value) {
    router.push({
      path: "/category",
    });
  }
}
</script>

<template>
  <div class="flex justify-center items-center bg-gray-200 height">
    <div class="h-96 flex flex-col w-2/5 p-6 shadow bg-white">
      <h1 class="flex justify-center text-5xl">LOGO</h1>
      <input
        class="p-6 mb-4 rounded border-gray-900 border mt-8"
        type="text"
        v-model="username"
        placeholder="Enter Username (admin)"
        name="uname"
        required
      />
      <input
        class="p-6 mb-4 rounded border-gray-900 border"
        type="password"
        placeholder="Enter Password (admin)"
        v-model="password"
        name="uname"
        required
      />
      <button
        @click="login"
        class="btn-1 mb-4 bg-green-700 text-white rounded border-gray-900 border mt-2 text-lg h-12"
      >
        Login
      </button>
    </div>
  </div>
</template>

<style>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.height {
  height: 100vh;
}

.btn-1:hover {
  opacity: 0.8;
}
</style>
