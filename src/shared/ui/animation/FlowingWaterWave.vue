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
    style="height: 64px;"
  >
    <!-- Background slow fluid wave -->
    <div
      class="absolute bottom-0 left-0 flex w-[200%] h-full animate-wave-flow-slow opacity-30"
    >
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"
          fill="#38bdf8"
        ></path>
      </svg>
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"
          fill="#38bdf8"
        ></path>
      </svg>
    </div>

    <!-- Foreground fast fluid wave -->
    <div
      class="absolute bottom-0 left-0 flex w-[200%] h-full animate-wave-flow opacity-60"
    >
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,40 C200,10 400,90 600,30 C800,-30 1000,70 1200,20 L1200,120 L0,120 Z"
          fill="#0284c7"
        ></path>
      </svg>
      <svg class="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,40 C200,10 400,90 600,30 C800,-30 1000,70 1200,20 L1200,120 L0,120 Z"
          fill="#0284c7"
        ></path>
      </svg>
    </div>
  </div>
</template>
