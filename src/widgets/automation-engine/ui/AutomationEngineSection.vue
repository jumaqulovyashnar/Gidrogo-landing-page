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
import logoImg from '@/assets/logo.png'

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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- The Central Architecture Hub (Matches Screenshot 5) -->
      <div
        class="relative max-w-4xl mx-auto bg-slate-50/70 border border-sky-100 rounded-[2.5rem] p-6 sm:p-10 md:p-16 mb-20 shadow-2xl shadow-sky-900/5"
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
            stroke-width="3"
            stroke-dasharray="8 6"
            class="animate-water-stream"
          />

          <!-- Bottom-Left (Ferma) to Center -->
          <line
            x1="240"
            y1="320"
            x2="400"
            y2="225"
            stroke="url(#lineGrad)"
            stroke-width="3"
            stroke-dasharray="8 6"
            class="animate-water-stream"
          />

          <!-- Center to Top-Right (Dastavkachi) -->
          <line
            x1="400"
            y1="225"
            x2="560"
            y2="130"
            stroke="url(#lineGrad)"
            stroke-width="3"
            stroke-dasharray="8 6"
            class="animate-water-stream"
          />

          <!-- Center to Bottom-Right (Dashboard) -->
          <line
            x1="400"
            y1="225"
            x2="560"
            y2="320"
            stroke="url(#lineGrad)"
            stroke-width="3"
            stroke-dasharray="8 6"
            class="animate-water-stream"
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
              <div class="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
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
              <div class="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Warehouse class="w-5 h-5" />
              </div>
              <div>
                <span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">MANBA</span>
                <h4 class="text-base font-bold text-slate-900">Ferma / Ombor</h4>
              </div>
            </div>
          </div>

          <!-- Central Core Node: GidroGo Engine -->
          <div class="flex flex-col items-center justify-center my-4 md:my-0">
            <div class="relative flex items-center justify-center">
              <div class="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-sky-200/50 animate-ping opacity-30"></div>
              <div class="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-sky-100/70"></div>

              <div
                class="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2.5 shadow-2xl shadow-sky-500/30 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-all duration-300"
              >
                <img :src="logoImg" alt="GidroGo Engine" class="w-full h-full object-contain filter drop-shadow" />
              </div>
            </div>

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
              <div class="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
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
              <div class="w-11 h-11 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
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

      <!-- Section Title for Features Grid -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <h3 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Barcha jarayonlarni qamrab oluvchi kuchli vositalar
        </h3>
        <p class="text-base text-slate-600">
          Suv yetkazib berish korxonangiz uchun maxsus ishlab chiqilgan 8 ta asosiy avtomatlashtirish moduli.
        </p>
      </div>

      <!-- Premium Large Shadcn Cards Grid (Clean, No Badges) -->
      <div id="features" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          v-for="item in featuresList"
          :key="item.id"
          class="relative flex flex-col bg-white border border-slate-200/90 rounded-[2rem] p-7 sm:p-8 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 shadow-card-soft hover:shadow-card-hover group"
        >
          <!-- Circular Icon (rounded-full) -->
          <div
            class="w-14 h-14 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm"
          >
            <component :is="getFeatureIcon(item.icon)" class="w-7 h-7 stroke-[2]" />
          </div>

          <!-- Title & Description -->
          <div class="space-y-2.5">
            <h4 class="text-xl font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
              {{ item.title }}
            </h4>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
