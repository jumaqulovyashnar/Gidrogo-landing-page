<script setup lang="ts">
import { ref } from 'vue'
import {
  Package,
  TrendingUp,
  Truck,
  Droplets,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-vue-next'

const selectedMetric = ref<'orders' | 'revenue' | 'couriers'>('orders')

const recentOrders = [
  { id: '#1042', status: "Yo'lda", time: '12 daq', color: 'bg-emerald-500', text: 'text-emerald-700 bg-emerald-50' },
  { id: '#1041', status: 'Tayyor', time: '16 daq', color: 'bg-sky-500', text: 'text-sky-700 bg-sky-50' },
  { id: '#1040', status: 'Topshirildi', time: '09:42', color: 'bg-slate-400', text: 'text-slate-700 bg-slate-100' },
]
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto lg:max-w-none">
    <!-- 3D Soft Glowing Blue Sphere (matches screenshot 1) -->
    <div
      class="absolute -top-12 -right-8 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-300 to-white opacity-80 blur-[1px] shadow-2xl shadow-sky-300/60 animate-float pointer-events-none z-10"
      style="animation-duration: 6s;"
    >
      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-sm"></div>
    </div>

    <!-- Floating Badge 1: Top Right "Yangi buyurtma +24" -->
    <div
      class="absolute -top-6 right-8 md:right-16 z-20 bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl shadow-sky-900/10 rounded-2xl px-4 py-2.5 flex items-center gap-3 animate-float"
      style="animation-duration: 4.5s; animation-delay: 0.5s;"
    >
      <div class="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm shadow-sky-500/30">
        <Package class="w-4 h-4" />
      </div>
      <div>
        <p class="text-[11px] font-medium text-slate-400">Yangi buyurtma</p>
        <p class="text-sm font-bold text-slate-800">+24 dona</p>
      </div>
    </div>

    <!-- Floating Badge 2: Bottom Right "Suv qoldig'i Nazoratda" -->
    <div
      class="absolute -bottom-6 -right-2 md:right-6 z-20 bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl shadow-sky-900/10 rounded-2xl px-4 py-2.5 flex items-center gap-3 animate-float"
      style="animation-duration: 5.5s; animation-delay: 1.2s;"
    >
      <div class="w-8 h-8 rounded-xl bg-cyan-500 text-white flex items-center justify-center shadow-sm shadow-cyan-500/30">
        <Droplets class="w-4 h-4" />
      </div>
      <div>
        <p class="text-[11px] font-medium text-slate-400">Suv qoldig‘i</p>
        <p class="text-sm font-bold text-slate-800 flex items-center gap-1">
          <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" /> Nazoratda
        </p>
      </div>
    </div>

    <!-- Main Dashboard Container -->
    <div
      class="relative bg-white/90 backdrop-blur-xl border border-sky-100/90 rounded-3xl p-5 md:p-7 shadow-2xl shadow-sky-900/10 overflow-hidden transition-all duration-300 hover:shadow-sky-900/15"
    >
      <!-- Dashboard Top Header Bar -->
      <div class="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
            G
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-semibold text-sky-600">GidroGo</span>
              <span class="text-[11px] text-slate-400">· Xush kelibsiz</span>
            </div>
            <h4 class="text-base font-bold text-slate-900">Boshqaruv paneli</h4>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
            GA
          </div>
        </div>
      </div>

      <!-- Top 3 Metric Cards (Matches Screenshot 1) -->
      <div class="grid grid-cols-3 gap-2.5 md:gap-3.5 mb-5">
        <!-- Buyurtmalar -->
        <div
          @click="selectedMetric = 'orders'"
          :class="[
            'p-3 md:p-3.5 rounded-2xl border transition-all cursor-pointer',
            selectedMetric === 'orders'
              ? 'bg-sky-50/70 border-sky-200 shadow-sm'
              : 'bg-slate-50/70 border-slate-100 hover:bg-slate-50'
          ]"
        >
          <div class="flex items-center justify-between text-slate-500 mb-1">
            <span class="text-[11px] md:text-xs font-medium truncate">Buyurtmalar</span>
            <Package class="w-3.5 h-3.5 text-sky-600" />
          </div>
          <div class="text-lg md:text-xl font-extrabold text-slate-900">124</div>
          <div class="text-[10px] md:text-xs font-semibold text-emerald-600 mt-0.5">
            +12 bugun
          </div>
        </div>

        <!-- Sotuv -->
        <div
          @click="selectedMetric = 'revenue'"
          :class="[
            'p-3 md:p-3.5 rounded-2xl border transition-all cursor-pointer',
            selectedMetric === 'revenue'
              ? 'bg-sky-50/70 border-sky-200 shadow-sm'
              : 'bg-slate-50/70 border-slate-100 hover:bg-slate-50'
          ]"
        >
          <div class="flex items-center justify-between text-slate-500 mb-1">
            <span class="text-[11px] md:text-xs font-medium truncate">Sotuv</span>
            <TrendingUp class="w-3.5 h-3.5 text-sky-600" />
          </div>
          <div class="text-lg md:text-xl font-extrabold text-slate-900">8.4M</div>
          <div class="text-[10px] md:text-xs font-semibold text-emerald-600 mt-0.5 flex items-center">
            <ArrowUpRight class="w-3 h-3" /> 8.2%
          </div>
        </div>

        <!-- Faol dastavkachi -->
        <div
          @click="selectedMetric = 'couriers'"
          :class="[
            'p-3 md:p-3.5 rounded-2xl border transition-all cursor-pointer',
            selectedMetric === 'couriers'
              ? 'bg-sky-50/70 border-sky-200 shadow-sm'
              : 'bg-slate-50/70 border-slate-100 hover:bg-slate-50'
          ]"
        >
          <div class="flex items-center justify-between text-slate-500 mb-1">
            <span class="text-[11px] md:text-xs font-medium truncate">Faol dastavkachi</span>
            <Truck class="w-3.5 h-3.5 text-sky-600" />
          </div>
          <div class="text-lg md:text-xl font-extrabold text-slate-900">18</div>
          <div class="text-[10px] md:text-xs font-medium text-slate-500 mt-0.5">
            Yo'lda: 12
          </div>
        </div>
      </div>

      <!-- Bottom Split View: Chart & Live Deliveries -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <!-- Chart (7 columns) -->
        <div class="md:col-span-7 bg-slate-50/60 border border-slate-100 rounded-2xl p-4">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-slate-700">Buyurtmalar oqimi</span>
            <span class="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-500 font-medium">
              7 kun
            </span>
          </div>

          <!-- SVG Wave Chart -->
          <div class="h-28 w-full relative">
            <svg class="w-full h-full overflow-visible" viewBox="0 0 280 90" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25" />
                  <stop offset="100%" stop-color="#0284c7" stop-opacity="0.0" />
                </linearGradient>
              </defs>
              <!-- Filled area -->
              <path
                d="M0,70 Q 40,35 80,55 T 160,25 T 220,15 T 280,30 L 280,90 L 0,90 Z"
                fill="url(#chartGradient)"
              />
              <!-- Smooth stroke line -->
              <path
                d="M0,70 Q 40,35 80,55 T 160,25 T 220,15 T 280,30"
                fill="none"
                stroke="#0284c7"
                stroke-width="3"
                stroke-linecap="round"
              />
              <!-- Data dots -->
              <circle cx="80" cy="55" r="3.5" fill="#ffffff" stroke="#0284c7" stroke-width="2.5" />
              <circle cx="160" cy="25" r="3.5" fill="#ffffff" stroke="#0284c7" stroke-width="2.5" />
              <circle cx="220" cy="15" r="4.5" fill="#0284c7" stroke="#ffffff" stroke-width="2" class="animate-ping" style="animation-duration: 3s;" />
              <circle cx="220" cy="15" r="4" fill="#0284c7" stroke="#ffffff" stroke-width="2" />
            </svg>
          </div>

          <!-- Days Axis -->
          <div class="flex justify-between text-[10px] text-slate-400 font-medium mt-1 px-1">
            <span>Se</span>
            <span>Ch</span>
            <span>Pa</span>
            <span>Ju</span>
            <span>Sh</span>
            <span class="text-sky-600 font-bold">Ya</span>
          </div>
        </div>

        <!-- Live Deliveries List (5 columns) -->
        <div class="md:col-span-5 flex flex-col gap-2">
          <div class="flex items-center justify-between px-1">
            <span class="text-xs font-bold text-slate-800">Yetkazib berish</span>
            <span class="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Jonli
            </span>
          </div>

          <div
            v-for="order in recentOrders"
            :key="order.id"
            class="flex items-center justify-between p-2.5 bg-white border border-slate-100 rounded-xl hover:border-sky-200 transition-colors shadow-2xs"
          >
            <div class="flex items-center gap-2">
              <span :class="['w-2 h-2 rounded-full', order.color]"></span>
              <span class="text-xs font-bold text-slate-800">{{ order.id }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span :class="['text-[11px] font-medium px-2 py-0.5 rounded-md', order.text]">
                {{ order.status }}
              </span>
              <span class="text-[10px] text-slate-400">{{ order.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
