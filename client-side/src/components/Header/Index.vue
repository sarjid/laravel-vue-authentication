<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const auth = useAuthStore();
const router = useRouter();

const userLogout = () => {
  auth.logout();
  router.push({ name: "user.login" });
};
</script>

<template>
  <div class="bg-gray-200 fixed top-0 left-0 right-0 z-30">
    <div class="container mx-auto items-center">
      <div class="navbar">
        <div class="flex-1">
          <RouterLink
            :to="{ name: 'index' }"
            class="btn btn-ghost normal-case text-xl"
            >W3 Coders</RouterLink
          >
        </div>
        <div class="flex-none">
          <template v-if="!auth.loggedInStatus">
            <ul class="menu menu-horizontal px-10 space-x-4">
              <RouterLink
                :to="{ name: 'user.login' }"
                class="btn btn-primary btn-sm"
                >Login</RouterLink
              >
              <RouterLink
                :to="{ name: 'user.register' }"
                class="btn btn-primary btn-sm"
                >Register</RouterLink
              >
            </ul>
          </template>

          <div class="dropdown dropdown-end" v-show="auth.loggedInStatus">
            <label tabindex="0" class="btn btn-ghost avatar">
              {{ auth.user?.name }}
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </label>

            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <RouterLink :to="{ name: 'user.dashboard' }"
                  >Dashboard</RouterLink
                >
              </li>
              <li>
                <a href="javascript::void(0)" @click.prevent="userLogout()"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
