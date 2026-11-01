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
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-vue-next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/ui/card'
import { featuresList } from '@/entities/feature/model/data'
import logoPng from '@/assets/logo.png'
import logoWebp from '@/assets/logo.webp'

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
  <section id="how-it-works" class="py-14 md:py-20 relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- The Central Architecture Hub (Salgina kattaroq, Spacious & Balanced) -->
      <div
        class="relative max-w-5xl lg:max-w-6xl mx-auto bg-slate-50/50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 min-h-[460px] md:min-h-[520px] flex items-center justify-center mb-16 shadow-lg shadow-sky-950/5"
      >
        <!-- Background Grid inside hub container -->
        <div class="absolute inset-0 bg-grid-pattern opacity-60 rounded-3xl pointer-events-none"></div>

        <!-- Flow connecting SVG lines for desktop -->
        <svg
          class="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
          preserveAspectRatio="none"
          viewBox="0 0 940 500"
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
            x1="280"
            y1="125"
            x2="470"
            y2="250"
            stroke="url(#lineGrad)"
            stroke-width="2.5"
            stroke-dasharray="7 5"
            class="animate-water-stream"
          />

          <!-- Bottom-Left (Ferma) to Center -->
          <line
            x1="280"
            y1="375"
            x2="470"
            y2="250"
            stroke="url(#lineGrad)"
            stroke-width="2.5"
            stroke-dasharray="7 5"
            class="animate-water-stream"
          />

          <!-- Center to Top-Right (Dastavkachi) -->
          <line
            x1="470"
            y1="250"
            x2="660"
            y2="125"
            stroke="url(#lineGrad)"
            stroke-width="2.5"
            stroke-dasharray="7 5"
            class="animate-water-stream"
          />

          <!-- Center to Bottom-Right (Dashboard) -->
          <line
            x1="470"
            y1="250"
            x2="660"
            y2="375"
            stroke="url(#lineGrad)"
            stroke-width="2.5"
            stroke-dasharray="7 5"
            class="animate-water-stream"
          />
        </svg>

        <!-- Nodes Layout: 2 Columns on Mobile, 3 on Desktop -->
        <div class="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
          <!-- Left Column Nodes -->
          <div class="flex flex-col justify-between gap-8 md:gap-16 lg:gap-20">
            <!-- Node: KIRISH -> Buyurtma (shadcn Card) -->
            <Card
              @mouseenter="activeNode = 'buyurtma'"
              :class="[
                'p-4.5 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-sm rounded-2xl',
                activeNode === 'buyurtma' ? 'border-sky-500 ring-2 ring-sky-100 scale-102 bg-white' : 'border-slate-200 bg-white hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <PhoneCall class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">KIRISH</span>
                <h4 class="text-base sm:text-lg font-bold text-slate-900">Buyurtma</h4>
              </div>
            </Card>

            <!-- Node: MANBA -> Ferma (shadcn Card) -->
            <Card
              @mouseenter="activeNode = 'ferma'"
              :class="[
                'p-4.5 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-sm rounded-2xl',
                activeNode === 'ferma' ? 'border-sky-500 ring-2 ring-sky-100 scale-102 bg-white' : 'border-slate-200 bg-white hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Warehouse class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">MANBA</span>
                <h4 class="text-base sm:text-lg font-bold text-slate-900">Ferma / Ombor</h4>
              </div>
            </Card>
          </div>

          <!-- Central Core Node: GidroGo Engine -->
          <div class="flex flex-col items-center justify-center my-4 md:my-0">
            <div class="relative flex items-center justify-center">
              <div class="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-sky-200/40 animate-ping opacity-25"></div>
              <div class="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-sky-100/60"></div>

              <div
                class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-3 shadow-xl shadow-sky-500/20 border-2 border-sky-100 flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <picture class="w-full h-full flex items-center justify-center">
                  <source :srcset="logoWebp" type="image/webp" />
                  <img
                    :src="logoPng"
                    alt="GidroGo Engine"
                    width="100"
                    height="70"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-contain filter drop-shadow"
                  />
                </picture>
              </div>
            </div>

            <div class="text-center mt-4">
              <h3 class="text-lg sm:text-xl font-black text-slate-900 tracking-tight">GidroGo</h3>
              <span class="text-[11px] font-extrabold tracking-widest text-sky-600 uppercase">AUTOMATION ENGINE</span>
            </div>
          </div>

          <!-- Right Column Nodes -->
          <div class="flex flex-col justify-between gap-8 md:gap-16 lg:gap-20">
            <!-- Node: NATIJA -> Dastavkachi (shadcn Card) -->
            <Card
              @mouseenter="activeNode = 'dastavkachi'"
              :class="[
                'p-4.5 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-sm rounded-2xl',
                activeNode === 'dastavkachi' ? 'border-sky-500 ring-2 ring-sky-100 scale-102 bg-white' : 'border-slate-200 bg-white hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Truck class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">NATIJA</span>
                <h4 class="text-base sm:text-lg font-bold text-slate-900">Dastavkachi</h4>
              </div>
            </Card>

            <!-- Node: TAHLIL -> Dashboard (shadcn Card) -->
            <Card
              @mouseenter="activeNode = 'dashboard'"
              :class="[
                'p-4.5 sm:p-5 flex items-center gap-4 transition-all duration-300 cursor-pointer shadow-sm rounded-2xl',
                activeNode === 'dashboard' ? 'border-sky-500 ring-2 ring-sky-100 scale-102 bg-white' : 'border-slate-200 bg-white hover:border-sky-300'
              ]"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <BarChart3 class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">TAHLIL</span>
                <h4 class="text-base sm:text-lg font-bold text-slate-900">Dashboard</h4>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <!-- Section Title for Features Grid -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          Barcha jarayonlarni qamrab oluvchi kuchli vositalar
        </h3>
        <p class="text-sm sm:text-base text-slate-600">
          Suv yetkazib berish korxonangiz uchun maxsus ishlab chiqilgan 8 ta asosiy avtomatlashtirish moduli.
        </p>
      </div>

      <!-- Responsive Grid for Features Cards (Mobile 1 col, Tablet 2 cols, Desktop 4 cols) -->
      <div id="features" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <Card
          v-for="item in featuresList"
          :key="item.id"
          class="relative flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-sky-400 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
        >
          <div>
            <!-- Normal shape icon (rounded-2xl) -->
            <div
              class="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-gradient-to-tr group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <component :is="getFeatureIcon(item.icon)" class="w-6 h-6 stroke-[2]" />
            </div>

            <!-- Standardized 2 Font Sizes: Title & Description -->
            <div class="space-y-2">
              <h4 class="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {{ item.title }}
              </h4>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
