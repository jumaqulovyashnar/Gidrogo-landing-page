<script setup lang="ts">
import { ref } from 'vue'
import {
  LayoutGrid,
  Package,
  Truck,
  Users,
  BarChart3,
  TrendingUp,
  CircleDollarSign,
  ChevronRight,
  ShieldCheck,
} from 'lucide-vue-next'

const activeTab = ref<'grid' | 'orders' | 'couriers' | 'clients' | 'analytics'>('grid')
const hoveredDay = ref<{ day: string; value: number; x: number; y: number } | null>({
  day: 'Ju',
  value: 68,
  x: 240,
  y: 65,
})

const daysData = [
  { day: 'Se', value: 42, x: 40, y: 110 },
  { day: 'Ch', value: 38, x: 105, y: 120 },
  { day: 'Pa', value: 55, x: 175, y: 90 },
  { day: 'Ju', value: 68, x: 240, y: 65 },
  { day: 'Sh', value: 84, x: 310, y: 40 },
  { day: 'Ya', value: 78, x: 375, y: 50 },
]

const recentDeliveries = [
  { id: '#1042', status: "Yo'lda", time: '12 daq', color: 'bg-emerald-500', badgeClass: 'bg-emerald-50 text-emerald-700' },
  { id: '#1041', status: 'Tayyor', time: '16 daq', color: 'bg-sky-500', badgeClass: 'bg-sky-50 text-sky-700' },
  { id: '#1040', status: 'Topshirildi', time: '09:42', color: 'bg-slate-400', badgeClass: 'bg-slate-100 text-slate-700' },
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header (Matches Screenshot 4) -->
      <div class="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-20">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
          Aniq qarorlar
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
          Biznesingizni raqamlar bilan boshqaring.
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Muhim ko‘rsatkichlar, yetkazib berish holati va suv qoldig‘i — barchasi bir ekranda.
        </p>
      </div>

      <!-- Realistic Browser Frame (Matches Screenshot 4 & 5) -->
      <div
        class="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-[2rem] shadow-2xl shadow-sky-950/10 overflow-hidden"
      >
        <!-- Top Browser Bar -->
        <div class="bg-slate-50/80 px-6 py-3.5 border-b border-slate-200 flex items-center justify-between">
          <!-- 3 Colored Dots -->
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
          </div>

          <!-- URL Bar in center -->
          <div
            class="bg-white border border-slate-200/80 rounded-full px-5 py-1 text-xs font-medium text-slate-500 shadow-2xs"
          >
            app.gidrogo.uz / dashboard
          </div>

          <div class="w-12"></div>
        </div>

        <!-- Dashboard App Window Interface -->
        <div class="flex flex-col md:flex-row min-h-[460px]">
          <!-- Left Sidebar Navigation -->
          <div class="w-full md:w-20 bg-slate-50/50 border-r border-slate-100 p-3 md:py-6 flex md:flex-col items-center justify-between md:justify-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-sky-600/30">
              G
            </div>

            <div class="flex md:flex-col gap-2">
              <button
                @click="activeTab = 'grid'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  activeTab === 'grid' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
              >
                <LayoutGrid class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'orders'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  activeTab === 'orders' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
              >
                <Package class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'couriers'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  activeTab === 'couriers' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
              >
                <Truck class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'clients'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  activeTab === 'clients' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
              >
                <Users class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'analytics'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  activeTab === 'analytics' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
              >
                <BarChart3 class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Main Content Area -->
          <div class="flex-1 p-6 md:p-8 space-y-6">
            <!-- Header bar -->
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span class="text-xs text-slate-400 font-medium">Xush kelibsiz</span>
                <h3 class="text-xl font-extrabold text-slate-900">Boshqaruv paneli</h3>
              </div>
              <div class="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                GA
              </div>
            </div>

            <!-- Top 3 Metrics -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Orders -->
              <div class="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                  <span class="text-xs font-medium text-slate-500">Buyurtmalar</span>
                  <Package class="w-4 h-4 text-sky-600" />
                </div>
                <div class="text-2xl font-black text-slate-900">124</div>
                <span class="text-xs font-semibold text-emerald-600">+12 bugun</span>
              </div>

              <!-- Revenue -->
              <div class="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                  <span class="text-xs font-medium text-slate-500">Sotuv</span>
                  <CircleDollarSign class="w-4 h-4 text-sky-600" />
                </div>
                <div class="text-2xl font-black text-slate-900">8.4M</div>
                <span class="text-xs font-semibold text-emerald-600">+8.2%</span>
              </div>

              <!-- Couriers -->
              <div class="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                  <span class="text-xs font-medium text-slate-500">Faol dastavkachi</span>
                  <Truck class="w-4 h-4 text-sky-600" />
                </div>
                <div class="text-2xl font-black text-slate-900">18</div>
                <span class="text-xs font-medium text-slate-500">Yo‘lda: 12</span>
              </div>
            </div>

            <!-- Graph and Deliveries Row -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <!-- Left: Flow Chart with Interactive Tooltip (Screenshot 5) -->
              <div class="lg:col-span-8 bg-slate-50/50 border border-slate-100 rounded-2xl p-5 relative">
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-sm font-bold text-slate-800">Buyurtmalar oqimi</h4>
                  <span class="text-xs font-medium text-slate-400 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                    7 kun
                  </span>
                </div>

                <!-- SVG Area -->
                <div class="h-44 w-full relative">
                  <svg class="w-full h-full overflow-visible" viewBox="0 0 420 150">
                    <defs>
                      <linearGradient id="fullGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.2" />
                        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.0" />
                      </linearGradient>
                    </defs>

                    <!-- Horizontal Grid lines -->
                    <line x1="0" y1="35" x2="420" y2="35" stroke="#e2e8f0" stroke-dasharray="3 3" />
                    <line x1="0" y1="75" x2="420" y2="75" stroke="#e2e8f0" stroke-dasharray="3 3" />
                    <line x1="0" y1="115" x2="420" y2="115" stroke="#e2e8f0" stroke-dasharray="3 3" />

                    <!-- Active hover vertical indicator line -->
                    <line
                      vif="hoveredDay"
                      :x1="hoveredDay?.x"
                      y1="20"
                      :x2="hoveredDay?.x"
                      y2="140"
                      stroke="#94a3b8"
                      stroke-width="1.5"
                      stroke-dasharray="2 2"
                    />

                    <!-- Filled smooth wave area -->
                    <path
                      d="M 40,110 C 80,120 130,110 175,90 C 210,75 220,68 240,65 C 275,55 295,42 310,40 C 340,38 360,45 375,50 L 375,140 L 40,140 Z"
                      fill="url(#fullGrad)"
                    />

                    <!-- Main smooth stroke line -->
                    <path
                      d="M 40,110 C 80,120 130,110 175,90 C 210,75 220,68 240,65 C 275,55 295,42 310,40 C 340,38 360,45 375,50"
                      fill="none"
                      stroke="#0284c7"
                      stroke-width="3"
                      stroke-linecap="round"
                    />

                    <!-- Interactive Data Points -->
                    <g v-for="d in daysData" :key="d.day" @mouseenter="hoveredDay = d" class="cursor-pointer">
                      <circle
                        :cx="d.x"
                        :cy="d.y"
                        r="6"
                        fill="transparent"
                        class="hover:stroke-sky-400 hover:stroke-8"
                      />
                      <circle
                        :cx="d.x"
                        :cy="d.y"
                        :r="hoveredDay?.day === d.day ? 5.5 : 3.5"
                        :fill="hoveredDay?.day === d.day ? '#0284c7' : '#ffffff'"
                        stroke="#0284c7"
                        stroke-width="2.5"
                      />
                    </g>
                  </svg>

                  <!-- Tooltip (Matches Screenshot 5 "Ju | value : 68") -->
                  <div
                    v-if="hoveredDay"
                    class="absolute bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-lg shadow-slate-900/10 pointer-events-none transition-all duration-150"
                    :style="{
                      left: `${(hoveredDay.x / 420) * 100}%`,
                      top: '60%',
                      transform: 'translate(-50%, 0)'
                    }"
                  >
                    <p class="text-[11px] font-bold text-slate-800">{{ hoveredDay.day }}</p>
                    <p class="text-xs text-sky-600 font-extrabold">value : {{ hoveredDay.value }}</p>
                  </div>
                </div>

                <!-- X Axis -->
                <div class="flex justify-between text-xs text-slate-400 font-semibold px-4 mt-2">
                  <span
                    v-for="d in daysData"
                    :key="d.day"
                    @mouseenter="hoveredDay = d"
                    :class="[
                      'cursor-pointer transition-colors',
                      hoveredDay?.day === d.day ? 'text-sky-600 font-bold' : 'hover:text-slate-600'
                    ]"
                  >
                    {{ d.day }}
                  </span>
                </div>
              </div>

              <!-- Right: Yetkazib berish ro'yxati -->
              <div class="lg:col-span-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <h4 class="text-sm font-bold text-slate-800">Yetkazib berish</h4>
                    <span class="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Jonli
                    </span>
                  </div>

                  <div
                    v-for="order in recentDeliveries"
                    :key="order.id"
                    class="p-3 bg-white border border-slate-100 rounded-xl flex items-center justify-between shadow-2xs hover:border-sky-200 transition-colors"
                  >
                    <div class="flex items-center gap-2">
                      <span :class="['w-2 h-2 rounded-full', order.color]"></span>
                      <span class="text-xs font-bold text-slate-900">{{ order.id }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :class="['text-[11px] font-semibold px-2 py-0.5 rounded-md', order.badgeClass]">
                        {{ order.status }}
                      </span>
                      <span class="text-[10px] text-slate-400 font-medium">{{ order.time }}</span>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
                  <span>Hammasi: 124 buyurtma</span>
                  <span class="text-sky-600 font-bold hover:underline cursor-pointer">Batafsil →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
