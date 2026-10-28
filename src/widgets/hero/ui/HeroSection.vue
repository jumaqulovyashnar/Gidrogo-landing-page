<script setup lang="ts">
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'
import DashboardMockup from './DashboardMockup.vue'

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

const scrollToHowItWorks = () => {
  const el = document.querySelector('#how-it-works')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-grid-pattern">
    <!-- Subtle Ambient Glows -->
    <div
      class="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-cyan-200/35 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Left Column: Copy & Actions -->
        <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
          <!-- Main Title -->
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]"
          >
            Suv yetkazib berish biznesingizni
            <span
              class="block bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent pb-1"
            >
              yagona tizimda
            </span>
            boshqaring.
          </h1>

          <!-- Concise Meaningful Subtitle -->
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Buyurtmalar, kuryerlar GPS marshruti, bo‘sh idishlar hisobi va onlayn to‘lovlar bir joyda. Shaffof nazorat va 2 baravar tezkor yetkazuv.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <Button
              @click="emit('open-demo')"
              size="lg"
              class="w-full sm:w-auto rounded-xl shadow-xl shadow-sky-600/25 group flex items-center justify-center gap-2"
            >
              <span>Bepul demo olish</span>
              <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              @click="scrollToHowItWorks"
              variant="outline"
              size="lg"
              class="w-full sm:w-auto rounded-xl border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 flex items-center justify-center gap-2"
            >
              <span>Qanday ishlaydi</span>
              <ChevronDown class="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <!-- Trust Sub-text -->
          <div class="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <ShieldCheck class="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>14 kun bepul sinov davri · Hech qanday majburiyatsiz</span>
          </div>
        </div>

        <!-- Right Column: Professional Dispatch Terminal -->
        <div class="lg:col-span-6 relative">
          <DashboardMockup />
        </div>
      </div>
    </div>
  </section>
</template>
