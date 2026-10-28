<script setup lang="ts">
import { ArrowRight, ChevronDown, ShieldCheck, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'
import WaterDropletStream from '@/shared/ui/animation/WaterDropletStream.vue'
import FlowingWaterWave from '@/shared/ui/animation/FlowingWaterWave.vue'

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

const scrollToHowItWorks = () => {
  const el = document.querySelector('#how-it-works')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-grid-pattern">
    <!-- Subtle Ambient Glows -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-gradient-to-tr from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 md:mb-14">
      <div class="space-y-7 max-w-3xl mx-auto">
        <!-- Animated Live Water Stream Indicator -->
        <div class="flex items-center justify-center">
          <WaterDropletStream />
        </div>

        <!-- Main Title -->
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]"
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
        <p class="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Buyurtmalar, kuryerlar GPS marshruti, bo‘sh idishlar hisobi va onlayn to‘lovlar bir joyda. Shaffof nazorat va 2 baravar tezkor yetkazuv.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            @click="emit('open-demo')"
            size="lg"
            class="w-full sm:w-auto rounded-xl px-8 py-3.5 text-base font-bold shadow-xl shadow-sky-600/25 group flex items-center justify-center gap-2"
          >
            <span>Bepul demo olish</span>
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            @click="scrollToHowItWorks"
            variant="outline"
            size="lg"
            class="w-full sm:w-auto rounded-xl px-8 py-3.5 text-base font-bold border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 flex items-center justify-center gap-2"
          >
            <span>Qanday ishlaydi</span>
            <ChevronDown class="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>

        <!-- Trust Badges Row -->
        <div class="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 font-medium">
          <span class="flex items-center gap-1.5">
            <ShieldCheck class="w-4 h-4 text-emerald-500" />
            14 kun bepul sinov davri
          </span>
          <span class="flex items-center gap-1.5">
            <CheckCircle2 class="w-4 h-4 text-emerald-500" />
            Karta kiritish shart emas
          </span>
          <span class="flex items-center gap-1.5">
            <Zap class="w-4 h-4 text-sky-500" />
            15 daqiqada to‘liq ulanish
          </span>
        </div>

        <!-- 3 Highlight Metrics Pills -->
        <div class="grid grid-cols-3 gap-3 sm:gap-6 pt-6 max-w-2xl mx-auto">
          <div class="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 block">100+</span>
            <span class="text-[11px] sm:text-xs font-semibold text-slate-500">Faol suv korxonalari</span>
          </div>
          <div class="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <span class="text-2xl sm:text-3xl font-black text-sky-600 block">2x</span>
            <span class="text-[11px] sm:text-xs font-semibold text-slate-500">Tezroq yetkazib berish</span>
          </div>
          <div class="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <span class="text-2xl sm:text-3xl font-black text-emerald-600 block">45%</span>
            <span class="text-[11px] sm:text-xs font-semibold text-slate-500">Xarajatlar tejalishi</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Continuous Flowing Moving Water Wave at Bottom of Hero -->
    <div class="relative w-full -mb-1">
      <FlowingWaterWave />
    </div>
  </section>
</template>
