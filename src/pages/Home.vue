<script setup>
import router from '../router';
import {
    HiOutlineMail,
    HiOutlineLockClosed
} from 'vue-icons-plus/hi'

import {Smile} from 'lucide-vue-next'


const handelLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard')
}

</script>

<template>
  <div class="h-screen w-full flex items-center justify-center gap-9">
    <div class="space-y-3">
        <!-- Logo -->
    <div class="flex flex-col items-center space-y-1">
      <h1 class="text-2xl font-bold text-zinc-700">LeDomicile</h1>
      <div class="flex items-center gap-1 text-zinc-500">
        <p class="font-medium">Bon retour parmi nous</p>
        <Smile class="text-purple-400"  size="18"/>
      </div>
    </div>
    <!-- Login form -->
    <div class="">
        <form class="flex-1 shadow-md rounded-md p-6 w-[380px] space-y-3">
           <div class="flex items-center text-zinc-500 p-2 gap-2 rounded-md border border-gray-300">
            <HiOutlineMail size="24" />
            <input type="text" class=" border-none outline-none w-full bg-transparent px-2" placeholder="Email">
           </div>
           <div class="flex items-center text-zinc-500 p-2 gap-2 rounded-md border border-gray-300">
            <HiOutlineLockClosed size="24" />
            <input type="text" class=" border-none outline-none w-full bg-transparent px-2" placeholder="Password">
           </div>
           <div class="flex items-center justify-center gap-1">
            <router-link to="#" class="text-sm underline text-blue-500 font-medium hover:font-bold">Mot de passe oublié?</router-link>
           </div>
           <button class="bg-blue-600 p-2 font-semibold text-white rounded-md w-full hover:font-bold">Connexion</button>
           <div class="flex items-center justify-center gap-1">
            <p class="text-sm text-zinc-500">Vous n'êtes pas encore inscrit ?</p>
            <router-link to="#" class="text-sm underline text-blue-500 font-medium hover:font-bold">Créer un compte</router-link>
           </div>
        </form>
    </div>
    </div>
  </div>
</template>

<style></style>
