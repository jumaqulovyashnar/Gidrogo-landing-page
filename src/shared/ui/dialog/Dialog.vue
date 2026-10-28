<script setup lang="ts">
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent as RadixDialogContent,
  DialogClose,
  type DialogRootProps,
  type DialogRootEmits,
  useForwardPropsEmits,
} from 'radix-vue'
import { X } from 'lucide-vue-next'
import { cn } from '@/shared/lib/utils'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <slot name="trigger" />
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in" />
      <RadixDialogContent
        :class="
          cn(
            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-sky-100 bg-white p-6 shadow-2xl rounded-3xl duration-200 animate-in fade-in-0 zoom-in-95',
            $attrs.class as string
          )
        "
      >
        <slot />
        <DialogClose
          class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
        >
          <X class="w-5 h-5" />
          <span class="sr-only">Yopish</span>
        </DialogClose>
      </RadixDialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
