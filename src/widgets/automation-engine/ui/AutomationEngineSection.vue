<script setup lang="ts">
import { ref } from 'vue'
import {
  PhoneCall,
  Warehouse,
  Truck,
  BarChart3,
  Zap,
  Users,
  Navigation,
  Droplet,
  CreditCard,
  Activity,
  Layers,
  ArrowRight,
} from 'lucide-vue-next'
import { Card } from '@/shared/ui/card'
import { featuresList } from '@/entities/feature/model/data'

const activeNode = ref<'buyurtma' | 'ferma' | 'dastavkachi' | 'dashboard' | 'engine'>('engine')

const getFeatureIcon = (name: string) => {
  switch (name) {
    case 'Zap':
      return Zap
    case 'Users':
      return Users
    case 'Navigation':
      return Navigation
    case 'Warehouse':
      return Warehouse
    case 'Droplet':
      return Droplet
    case 'CreditCard':
      return CreditCard
    case 'BarChart3':
      return BarChart3
    case 'Activity':
      return Activity
    default:
      return Zap
  }
}
</script>

<template>
  <section id="how-it-works" class="py-20 md:py-28 relative bg-white overflow-hidden">
    <!-- Ambient backdrops -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- The Central Architecture Hub (Matches Screenshot 5) -->
      <div
        class="relative max-w-4xl mx-auto bg-slate-50/70 border border-sky-100 rounded-[2.5rem] p-6 sm:p-10 md:p-16 mb-16 shadow-2xl shadow-sky-900/5"
      >
        <!-- Background Grid inside hub container -->
        <div class="absolute inset-0 bg-grid-pattern opacity-40 rounded-[2.5rem] pointer-events-none"></div>

        <!-- Flow connecting SVG lines for desktop -->
        <svg
          class="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
          preserveAspectRatio="none"
          viewBox="0 0 800 450"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="50%" stop-color="#0284c7" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>

          <!-- Top-Left (Buyurtma) to Center -->
          <line
            x1="240"
            y1="130"
            x2="400"
            y2="225"
            stroke="url(#lineGrad)"
            stroke-width="2"
            stroke-dasharray="6 6"
            class="animate-pulse"
          />

          <!-- Bottom-Left (Ferma) to Center -->
          <line
            x1="240"
            y1="320"
            x2="400"
            y2="225"
            stroke="url(#lineGrad)"
            stroke-width="2"
            stroke-dasharray="6 6"
            class="animate-pulse"
          />

          <!-- Center to Top-Right (Dastavkachi) -->
          <line
            x1="400"
            y1="225"
            x2="560"
            y2="130"
            stroke="url(#lineGrad)"
            stroke-width="2"
            stroke-dasharray="6 6"
            class="animate-pulse"
          />

          <!-- Center to Bottom-Right (Dashboard) -->
          <line
            x1="400"
            y1="225"
            x2="560"
            y2="320"
            stroke="url(#lineGrad)"
            stroke-width="2"
            stroke-dasharray="6 6"
            class="animate-pulse"
          />
        </svg>

        <!-- Nodes Layout: 2 Columns on Mobile, 3 on Desktop -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Left Column Nodes -->
          <div class="flex flex-col gap-6 md:gap-14">
            <!-- Node: KIRISH -> Buyurtma -->
            <div
              @mouseenter="activeNode = 'buyurtma'"
              :class="[
                'bg-white border rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-md shadow-sky-950/5',
                activeNode === 'buyurtma' ? 'border-sky-500 ring-2 ring-sky-100 scale-102' : 'border-slate-200 hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <PhoneCall class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">KIRISH</span>
                <h4 class="text-base font-bold text-slate-900">Buyurtma</h4>
              </div>
            </div>

            <!-- Node: MANBA -> Ferma -->
            <div
              @mouseenter="activeNode = 'ferma'"
              :class="[
                'bg-white border rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-md shadow-sky-950/5',
                activeNode === 'ferma' ? 'border-sky-500 ring-2 ring-sky-100 scale-102' : 'border-slate-200 hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Warehouse class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">MANBA</span>
                <h4 class="text-base font-bold text-slate-900">Ferma / Ombor</h4>
              </div>
            </div>
          </div>

          <!-- Central Core Node: GidroGo Engine (Matches Screenshot 5) -->
          <div class="flex flex-col items-center justify-center my-4 md:my-0">
            <div class="relative flex items-center justify-center">
              <!-- Animated Glowing Rings -->
              <div class="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-sky-200/50 animate-ping opacity-30"></div>
              <div class="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-sky-100/70"></div>

              <!-- Main central circle -->
              <div
                class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-1 shadow-xl shadow-sky-500/40 flex items-center justify-center text-white"
              >
                <div class="w-full h-full rounded-full bg-sky-600 flex flex-col items-center justify-center">
                  <Truck class="w-8 h-8 text-white stroke-[2.2]" />
                  <Droplet class="w-3.5 h-3.5 text-cyan-200 fill-cyan-200 -mt-1" />
                </div>
              </div>
            </div>

            <!-- Central Label -->
            <div class="text-center mt-3">
              <h3 class="text-xl font-black text-slate-900 tracking-tight">GidroGo</h3>
              <span class="text-[10px] font-extrabold tracking-widest text-sky-600 uppercase">AUTOMATION ENGINE</span>
            </div>
          </div>

          <!-- Right Column Nodes -->
          <div class="flex flex-col gap-6 md:gap-14">
            <!-- Node: NATIJA -> Dastavkachi -->
            <div
              @mouseenter="activeNode = 'dastavkachi'"
              :class="[
                'bg-white border rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-md shadow-sky-950/5',
                activeNode === 'dastavkachi' ? 'border-sky-500 ring-2 ring-sky-100 scale-102' : 'border-slate-200 hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Truck class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">NATIJA</span>
                <h4 class="text-base font-bold text-slate-900">Dastavkachi</h4>
              </div>
            </div>

            <!-- Node: TAHLIL -> Dashboard -->
            <div
              @mouseenter="activeNode = 'dashboard'"
              :class="[
                'bg-white border rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-md shadow-sky-950/5',
                activeNode === 'dashboard' ? 'border-sky-500 ring-2 ring-sky-100 scale-102' : 'border-slate-200 hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <BarChart3 class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">TAHLIL</span>
                <h4 class="text-base font-bold text-slate-900">Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 8 Feature Pills Grid (Matches bottom row of Screenshot 5) -->
      <div id="features" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="item in featuresList"
          :key="item.id"
          class="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <div
            class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200"
          >
            <component :is="getFeatureIcon(item.icon)" class="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-800 group-hover:text-sky-700 transition-colors">
              {{ item.title }}
            </h4>
            <p v-if="item.description" class="text-xs text-slate-500 mt-0.5 line-clamp-1">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
