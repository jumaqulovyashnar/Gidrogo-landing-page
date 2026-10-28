<script setup lang="ts">
import {
  PhoneCall,
  PackageCheck,
  UserCheck,
  Truck,
  CreditCard,
  BarChart3,
  ArrowRight,
} from 'lucide-vue-next'

const steps = [
  {
    number: '01',
    title: 'Mijoz buyurtma beradi',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Tizim qabul qiladi',
    icon: PackageCheck,
  },
  {
    number: '03',
    title: 'Dastavkachi aniqlanadi',
    icon: UserCheck,
  },
  {
    number: '04',
    title: 'Suv yetkaziladi',
    icon: Truck,
  },
  {
    number: '05',
    title: 'To‘lov amalga oshadi',
    icon: CreditCard,
  },
  {
    number: '06',
    title: 'Ma’lumot saqlanadi',
    icon: BarChart3,
  },
]
</script>

<template>
  <section class="py-20 md:py-28 bg-[#030e21] text-white relative overflow-hidden">
    <!-- Ambient backdrops -->
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-600/15 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header (Matches Screenshot 1) -->
      <div class="max-w-3xl mb-14 md:mb-18 space-y-4">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-400 uppercase">
          Oddiy va aqlli oqim
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
          GidroGo qanday ishlaydi?
        </h2>
        <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
          Buyurtma kelganidan boshlab biznes statistikasi shakllanguncha — olti bog‘langan bosqich.
        </p>
      </div>

      <!-- 6 Interconnected Steps Flow -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
        <template v-for="(step, index) in steps" :key="step.number">
          <!-- Step Card -->
          <div
            class="relative bg-[#081730]/90 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-48 sm:h-52 hover:border-sky-500/60 hover:bg-[#0c1f40] transition-all duration-300 group shadow-lg shadow-black/20"
          >
            <!-- Step Number -->
            <div class="text-[11px] font-bold text-slate-400 group-hover:text-sky-400 transition-colors">
              {{ step.number }}
            </div>

            <!-- Icon in rounded square -->
            <div
              class="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <component :is="step.icon" class="w-5 h-5 stroke-[2]" />
            </div>

            <!-- Step Title -->
            <h4 class="text-xs sm:text-sm font-bold text-slate-100 leading-snug group-hover:text-white transition-colors">
              {{ step.title }}
            </h4>

            <!-- Connecting Arrow Pill on Desktop (Except last item) -->
            <div
              v-if="index < steps.length - 1"
              class="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-cyan-400 text-slate-900 items-center justify-center shadow-md shadow-cyan-400/30"
            >
              <ArrowRight class="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
