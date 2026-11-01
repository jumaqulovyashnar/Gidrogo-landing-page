<script setup lang="ts">
defineProps<{
  flip?: boolean
  opacity?: string
}>()
</script>

<template>
  <div
    class="relative w-full overflow-hidden leading-none select-none pointer-events-none"
    :class="[flip ? 'rotate-180' : '']"
    style="height: 54px;"
  >
    <!-- Background slow fluid wave (Seamless periodic wave) -->
    <div
      class="absolute bottom-0 left-0 flex w-[200%] h-full animate-wave-flow-slow opacity-25"
    >
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M 0,50 C 200,20 400,80 600,50 C 800,20 1000,80 1200,50 L 1200,120 L 0,120 Z"
          fill="#38bdf8"
        ></path>
      </svg>
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M 0,50 C 200,20 400,80 600,50 C 800,20 1000,80 1200,50 L 1200,120 L 0,120 Z"
          fill="#38bdf8"
        ></path>
      </svg>
    </div>

    <!-- Foreground fast fluid wave (Seamless periodic wave) -->
    <div
      class="absolute bottom-0 left-0 flex w-[200%] h-full animate-wave-flow opacity-50"
    >
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M 0,40 C 300,75 500,10 750,45 C 920,65 1080,15 1200,40 L 1200,120 L 0,120 Z"
          fill="#0ea5e9"
        ></path>
      </svg>
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M 0,40 C 300,75 500,10 750,45 C 920,65 1080,15 1200,40 L 1200,120 L 0,120 Z"
          fill="#0ea5e9"
        ></path>
      </svg>
    </div>
  </div>
</template>
