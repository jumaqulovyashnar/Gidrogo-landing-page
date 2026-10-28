<script setup lang="ts">
import {
  CheckCircle2,
  Warehouse,
  MapPin,
  Truck,
  Navigation,
  Check,
  ShieldCheck,
} from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Har bir buyurtma — xaritada, nazorat ostida.
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Ferma, dastavkachi va mijoz bitta oqimda. Buyurtma holati real vaqtda ko‘rinadi.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <!-- Left Key Features Column -->
        <div class="lg:col-span-4 space-y-4">
          <div class="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <h4 class="text-base font-bold text-slate-900">Mos dastavkachini aniqlash</h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 pl-11">
              Eng yaqin va zaxirasida suv bo'lgan kuryerga buyurtma avtomatik uzatiladi.
            </p>
          </div>

          <div class="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <h4 class="text-base font-bold text-slate-900">Yo‘nalish va holat monitoringi</h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 pl-11">
              Kuryer harakati, tirbandliklar va qolgan vaqt jonli xaritada ko'rinadi.
            </p>
          </div>

          <div class="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <h4 class="text-base font-bold text-slate-900">Bo'sh idishlar balansi</h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 pl-11">
              Har bir topshirishda bo'sh baklar darhol ro'yxatga olinadi va hisobga o'tadi.
            </p>
          </div>
        </div>

        <!-- Right Map Simulation Card (Matches Screenshot 2) -->
        <div class="lg:col-span-8">
          <div
            class="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-sky-50/40 border border-sky-100 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl shadow-sky-900/5"
          >
            <!-- Map Grid & Ambient Blobs -->
            <div class="absolute inset-0 bg-grid-pattern opacity-60"></div>
            <div class="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-sky-200/50 blur-2xl pointer-events-none"></div>
            <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-cyan-200/50 blur-2xl pointer-events-none"></div>

            <!-- Road lines layout (clean white street layout like in screenshot 2) -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 350" preserveAspectRatio="none">
              <!-- Main Road Diagonal -->
              <line x1="-20" y1="230" x2="450" y2="130" stroke="#ffffff" stroke-width="26" stroke-linecap="round" />
              <!-- Branch Road Diagonal -->
              <line x1="300" y1="160" x2="400" y2="380" stroke="#ffffff" stroke-width="20" stroke-linecap="round" />
              <line x1="320" y1="-20" x2="350" y2="240" stroke="#ffffff" stroke-width="18" stroke-linecap="round" />
              <line x1="220" y1="280" x2="360" y2="300" stroke="#ffffff" stroke-width="16" stroke-linecap="round" />

              <!-- Route Line between Ferma and Mijoz (dashed sky-blue) -->
              <path
                d="M130,230 Q 230,210 300,200 T 400,190"
                fill="none"
                stroke="#0284c7"
                stroke-width="2.5"
                stroke-dasharray="6 6"
              />
            </svg>

            <!-- Floating Pill 1: Top Right "Buyurtma #1042" -->
            <div
              class="absolute top-6 right-6 sm:top-8 sm:right-10 bg-white/95 backdrop-blur-md border border-slate-100 shadow-md shadow-slate-900/5 rounded-2xl px-3.5 py-2 flex items-center gap-2 z-20 animate-float"
              style="animation-duration: 4s;"
            >
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <p class="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Buyurtma</p>
                <p class="text-xs font-bold text-slate-800">#1042</p>
              </div>
            </div>

            <!-- Node 1: Ferma (Left) -->
            <div
              class="absolute left-8 sm:left-14 top-1/2 -translate-y-4 z-20 flex flex-col items-center gap-1.5"
            >
              <div class="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-600/30">
                <Warehouse class="w-6 h-6" />
              </div>
              <span class="text-xs font-bold text-slate-800 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-slate-100 shadow-2xs">
                Ferma
              </span>
            </div>

            <!-- Moving Delivery Truck Node in Middle -->
            <div
              class="absolute left-[54%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1 animate-pulse"
            >
              <div class="relative w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl shadow-sky-600/40">
                <Truck class="w-6 h-6" />
                <span class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-300 ring-2 ring-white"></span>
              </div>
            </div>

            <!-- Node 2: Mijoz (Right) -->
            <div
              class="absolute right-12 sm:right-20 top-[40%] z-20 flex flex-col items-center gap-1.5"
            >
              <div class="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/25">
                <MapPin class="w-5 h-5 text-sky-400" />
              </div>
              <span class="text-xs font-bold text-slate-800 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-slate-100 shadow-2xs">
                Mijoz
              </span>
            </div>

            <!-- Floating Pill 2: Bottom Left "Dastavkachi Topildi" -->
            <div
              class="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 bg-white/95 backdrop-blur-md border border-slate-100 shadow-md shadow-slate-900/5 rounded-2xl px-3.5 py-2 flex items-center gap-2.5 z-20"
            >
              <div class="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Check class="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <p class="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Dastavkachi</p>
                <p class="text-xs font-bold text-slate-800">Topildi</p>
              </div>
            </div>

            <!-- Floating Pill 3: Bottom Right "Yetkazib berish: Yo'lda · 12 daq" -->
            <div
              class="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 bg-white/95 backdrop-blur-md border border-slate-100 shadow-md shadow-slate-900/5 rounded-2xl px-3.5 py-2 flex items-center gap-2.5 z-20"
            >
              <div class="w-6 h-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                <Navigation class="w-4 h-4 stroke-[2]" />
              </div>
              <div>
                <p class="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Yetkazib berish</p>
                <p class="text-xs font-bold text-slate-800">Yo‘lda · 12 daq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
