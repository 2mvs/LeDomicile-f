<script setup>
import { ref } from 'vue';
import {PowerOff} from 'lucide-vue-next'
  const dropdownUserMenu = ref(false);

  const visibleDrodownUserMenu = () => {
    dropdownUserMenu.value = !dropdownUserMenu.value;
  }

</script>



<template>
  <div class="h-[100vh]">
    <!-- Header section -->
    <Section class="flex items-center justify-between w-full border p-3 sticky top-0 bg-white z-10">
      <router-link
        to="/dashboard"
        class="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pl-4"
        >LeDomicile</router-link
      >
      <div class="flex items-center relative gap-3">
        <div
          @click="visibleDrodownUserMenu"
          class="flex items-center justify-center w-10 h-10 text-slate-500 font-bold rounded-full bg-purple-200 cursor-pointer"
        >
          A
        </div>
        <transition name="slide-down">
        <div 
          class="bg-white w-40 shadow-sm p-2 mt-14 absolute top-0 right-0" 
          v-show="dropdownUserMenu">
          <div class="flex items-center gap-2">
            <PowerOff size="14" class="text-gray-600 text-sm font-medium"/>
            <router-link to="/" class="text-sm font-medium text-gray-600">
            Logout
          </router-link>
          </div>
        </div>
        </transition>
      </div>
    </Section>
    <!-- Body -->
    <section class="flex w-full h-[90vh]">
      <!-- sibebar -->
      <div class="w-[20%] border-r p-3 ">
        <div class="flex flex-col gap-2 p-2">
          <router-link
            to="/houses"
            :class="{
              'p-3 font-semibold text-gray-800 rounded-lg bg-slate-100 ': $route.path === '/houses',
              'p-3 font-medium text-gray-500 rounded-lg hover:bg-slate-100': $route.path !== '/houses',
            }"
          >
            Housing
          </router-link>
          <router-link
            to="/owner"
            :class="{
              'p-3 font-semibold text-gray-800 rounded-lg bg-slate-100 ': $route.path === '/owner',
              'p-3 font-medium text-gray-500 rounded-lg hover:bg-slate-100': $route.path !== '/owner',
            }"
          >
            Owner
          </router-link>
          <router-link
            to="/profile"
            :class="{
              'p-3 font-semibold text-gray-800 rounded-lg bg-slate-100 ': $route.path === '/profile',
              'p-3 font-medium text-gray-500 rounded-lg hover:bg-slate-100': $route.path !== '/profile',
            }"
          >
            Profil
          </router-link>
        </div>
      </div>
      <!-- main content -->
      <div class="flex-1 bg-stone-50 p-4">
        <router-view></router-view>
      </div>
    </section>
    <!-- Footer -->
  </div>
</template>
<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>