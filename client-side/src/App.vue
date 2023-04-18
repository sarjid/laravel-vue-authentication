<template>
  <div>
    <layouts>
      <template #content>
        <!-- <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
        <!-- router-view will be ho here  -->
        <!-- content change will be go here  -->
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </template>
    </layouts>
  </div>
</template>

<script setup>
import layouts from "@/layouts/default.vue";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
