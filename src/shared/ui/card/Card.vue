<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-2xl border border-sky-100/80 bg-white text-card-foreground shadow-card-soft transition-all duration-300',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
