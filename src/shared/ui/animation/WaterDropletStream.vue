<script setup lang="ts">
import { Droplet } from 'lucide-vue-next'
</script>

<template>
  <div class="relative inline-flex items-center gap-2 select-none">
    <!-- Animated Water Droplet with Expanding Water Ripple Rings -->
    <div class="relative flex items-center justify-center w-8 h-8">
      <!-- Expanding ripple ring 1 -->
      <span class="absolute w-8 h-8 rounded-full bg-sky-400/40 animate-water-ripple"></span>
      <!-- Expanding ripple ring 2 -->
      <span class="absolute w-8 h-8 rounded-full bg-cyan-400/30 animate-water-ripple" style="animation-delay: 1.2s;"></span>

      <!-- Droplet Center -->
      <div class="relative z-10 w-6 h-6 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-400 text-white flex items-center justify-center shadow-md shadow-sky-500/40">
        <Droplet class="w-3.5 h-3.5 fill-white text-white animate-bounce" style="animation-duration: 2s;" />
      </div>
    </div>

    <span class="text-xs font-bold text-sky-700 tracking-wide">
      Jonli suv oqimi faol
    </span>
  </div>
</template>
