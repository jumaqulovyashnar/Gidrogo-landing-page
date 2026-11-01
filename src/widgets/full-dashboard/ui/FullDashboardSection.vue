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
  Droplet,
  Layers,
  CheckCircle2,
} from 'lucide-vue-next'

const activeTab = ref<'grid' | 'orders' | 'couriers' | 'clients' | 'analytics'>('grid')
const hoveredDay = ref<{ day: string; value: number; x: number; y: number } | null>({
  day: 'Ju',
  value: 68,
  x: 350,
  y: 65,
})

const daysData = [
  { day: 'Dush', value: 35, x: 50, y: 115 },
  { day: 'Sesh', value: 48, x: 125, y: 95 },
  { day: 'Chor', value: 42, x: 200, y: 105 },
  { day: 'Pay', value: 60, x: 275, y: 80 },
  { day: 'Jum', value: 68, x: 350, y: 65 },
  { day: 'Shan', value: 86, x: 425, y: 38 },
  { day: 'Yak', value: 74, x: 500, y: 55 },
]

const recentDeliveries = [
  { id: '#1042', client: 'Akbar Sh.', status: "Yo'lda", time: '12 daq', color: 'bg-emerald-500', badgeClass: 'bg-emerald-50 text-emerald-700' },
  { id: '#1041', client: 'Dilshod R.', status: 'Tayyor', time: '16 daq', color: 'bg-sky-500', badgeClass: 'bg-sky-50 text-sky-700' },
  { id: '#1040', client: 'Nodira K.', status: 'Topshirildi', time: '09:42', color: 'bg-slate-400', badgeClass: 'bg-slate-100 text-slate-700' },
  { id: '#1039', client: 'Rustam M.', status: 'Topshirildi', time: '09:15', color: 'bg-slate-400', badgeClass: 'bg-slate-100 text-slate-700' },
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
          Biznesingizni raqamlar bilan boshqaring.
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Muhim ko‘rsatkichlar, yetkazib berish holati va suv qoldig‘i — barchasi bir ekranda.
        </p>
      </div>

      <!-- Enlarged Premium Browser Showcase Frame -->
      <div
        class="max-w-6xl xl:max-w-7xl mx-auto bg-white border border-slate-200/90 rounded-[2.5rem] shadow-2xl shadow-sky-950/10 overflow-hidden"
      >
        <!-- Top Browser Bar -->
        <div class="bg-slate-50/90 px-6 py-4 border-b border-slate-200/80 flex items-center justify-between">
          <!-- 3 Colored Dots -->
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
          </div>

          <!-- URL Bar in center -->
          <div
            class="bg-white border border-slate-200/80 rounded-xl px-6 py-1.5 text-xs font-semibold text-slate-500 shadow-2xs flex items-center gap-2"
          >
            <span class="text-emerald-500">🔒</span>
            <span>app.gidrogo.uz / dashboard</span>
          </div>

          <!-- Status badge -->
          <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/60">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="hidden sm:inline">Jonli tizim</span>
          </div>
        </div>

        <!-- Dashboard App Window Interface -->
        <div class="flex flex-col md:flex-row min-h-[520px]">
          <!-- Left Sidebar Navigation -->
          <div class="w-full md:w-20 bg-slate-50/60 border-r border-slate-100 p-3 md:py-6 flex md:flex-col items-center justify-between md:justify-start gap-4">
            <div class="w-11 h-11 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-black text-base shadow-md shadow-sky-600/30">
              G
            </div>

            <div class="flex md:flex-col gap-2">
              <button
                @click="activeTab = 'grid'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                  activeTab === 'grid' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
                title="Boshqaruv"
              >
                <LayoutGrid class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'orders'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                  activeTab === 'orders' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
                title="Buyurtmalar"
              >
                <Package class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'couriers'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                  activeTab === 'couriers' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
                title="Kuryerlar"
              >
                <Truck class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'clients'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                  activeTab === 'clients' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
                title="Mijozlar"
              >
                <Users class="w-5 h-5" />
              </button>
              <button
                @click="activeTab = 'analytics'"
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-all',
                  activeTab === 'analytics' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                ]"
                title="Tahlil"
              >
                <BarChart3 class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Main Content Area (Spacious, High-Impact) -->
          <div class="flex-1 p-6 sm:p-8 lg:p-10 space-y-7">
            <!-- Header bar inside dashboard -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span class="text-xs text-slate-400 font-bold uppercase tracking-wider">Bugungi monitoring</span>
                <h3 class="text-2xl font-black text-slate-900">Boshqaruv paneli</h3>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                  Bugun, 1-Noyabr
                </span>
                <div class="w-10 h-10 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  GA
                </div>
              </div>
            </div>

            <!-- Top 4 Key Metrics (Matching subtitle: buyurtmalar, sotuv, dastavkachilar, suv/idish qoldig'i) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <!-- Orders -->
              <div class="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-sky-300 transition-colors">
                <div class="flex items-center justify-between text-slate-400 mb-2">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Buyurtmalar</span>
                  <div class="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Package class="w-4 h-4" />
                  </div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900">148</div>
                <span class="text-xs font-bold text-emerald-600">+14% bugun</span>
              </div>

              <!-- Revenue -->
              <div class="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-sky-300 transition-colors">
                <div class="flex items-center justify-between text-slate-400 mb-2">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sotuv tushumi</span>
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CircleDollarSign class="w-4 h-4" />
                  </div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900">8.4M <span class="text-xs text-slate-400 font-semibold">so‘m</span></div>
                <span class="text-xs font-bold text-emerald-600">+8.2% o‘sish</span>
              </div>

              <!-- Couriers -->
              <div class="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-sky-300 transition-colors">
                <div class="flex items-center justify-between text-slate-400 mb-2">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Dastavkachilar</span>
                  <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Truck class="w-4 h-4" />
                  </div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900">18</div>
                <span class="text-xs font-semibold text-slate-500">12 tasi yo‘lda</span>
              </div>

              <!-- Water / Bottle Stock (Suv qoldig'i) -->
              <div class="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-sky-300 transition-colors">
                <div class="flex items-center justify-between text-slate-400 mb-2">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Bo‘sh baklar</span>
                  <div class="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <Layers class="w-4 h-4" />
                  </div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900">340 <span class="text-xs text-slate-400 font-semibold">dona</span></div>
                <span class="text-xs font-bold text-sky-600">Omborda tayyor</span>
              </div>
            </div>

            <!-- Graph and Deliveries Row (Large, Detailed) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <!-- Left: Flow Chart with Interactive Tooltip -->
              <div class="lg:col-span-8 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 relative">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h4 class="text-base font-bold text-slate-900">Haftalik buyurtmalar dinamikasi</h4>
                    <span class="text-xs text-slate-500">Kunlik taqsimot va o‘sish ko‘rsatkichi</span>
                  </div>
                  <span class="text-xs font-bold text-sky-700 bg-white border border-sky-200 px-3 py-1 rounded-xl shadow-2xs">
                    7 kunlik oqim
                  </span>
                </div>

                <!-- SVG Area (Bigger, High-Res 560x170) -->
                <div class="h-52 w-full relative">
                  <svg class="w-full h-full overflow-visible" viewBox="0 0 550 160">
                    <defs>
                      <linearGradient id="fullGradLarge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25" />
                        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.0" />
                      </linearGradient>
                    </defs>

                    <!-- Horizontal Grid lines -->
                    <line x1="20" y1="35" x2="530" y2="35" stroke="#e2e8f0" stroke-dasharray="3 3" />
                    <line x1="20" y1="75" x2="530" y2="75" stroke="#e2e8f0" stroke-dasharray="3 3" />
                    <line x1="20" y1="115" x2="530" y2="115" stroke="#e2e8f0" stroke-dasharray="3 3" />

                    <!-- Active hover vertical indicator line -->
                    <line
                      v-if="hoveredDay"
                      :x1="hoveredDay?.x"
                      y1="20"
                      :x2="hoveredDay?.x"
                      y2="145"
                      stroke="#0284c7"
                      stroke-width="1.5"
                      stroke-dasharray="3 3"
                    />

                    <!-- Filled smooth wave area -->
                    <path
                      d="M 50,115 C 80,105 100,100 125,95 C 160,88 175,108 200,105 C 235,100 255,85 275,80 C 310,72 325,70 350,65 C 385,58 405,42 425,38 C 460,34 475,50 500,55 L 500,145 L 50,145 Z"
                      fill="url(#fullGradLarge)"
                    />

                    <!-- Main smooth stroke line -->
                    <path
                      d="M 50,115 C 80,105 100,100 125,95 C 160,88 175,108 200,105 C 235,100 255,85 275,80 C 310,72 325,70 350,65 C 385,58 405,42 425,38 C 460,34 475,50 500,55"
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
                        r="8"
                        fill="transparent"
                        class="hover:stroke-sky-300 hover:stroke-8"
                      />
                      <circle
                        :cx="d.x"
                        :cy="d.y"
                        :r="hoveredDay?.day === d.day ? 6 : 4"
                        :fill="hoveredDay?.day === d.day ? '#0284c7' : '#ffffff'"
                        stroke="#0284c7"
                        stroke-width="2.5"
                      />
                    </g>
                  </svg>

                  <!-- Tooltip -->
                  <div
                    v-if="hoveredDay"
                    class="absolute bg-slate-900 text-white rounded-xl px-3.5 py-2 shadow-xl pointer-events-none transition-all duration-150 z-20"
                    :style="{
                      left: `${(hoveredDay.x / 550) * 100}%`,
                      top: '55%',
                      transform: 'translate(-50%, 0)'
                    }"
                  >
                    <p class="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{{ hoveredDay.day }}</p>
                    <p class="text-sm font-black text-sky-400">{{ hoveredDay.value }} ta buyurtma</p>
                  </div>
                </div>

                <!-- X Axis -->
                <div class="flex justify-between text-xs text-slate-500 font-bold px-4 mt-2">
                  <span
                    v-for="d in daysData"
                    :key="d.day"
                    @mouseenter="hoveredDay = d"
                    :class="[
                      'cursor-pointer transition-colors',
                      hoveredDay?.day === d.day ? 'text-sky-600 font-extrabold' : 'hover:text-slate-800'
                    ]"
                  >
                    {{ d.day }}
                  </span>
                </div>
              </div>

              <!-- Right: Jonli yetkazib berish ro'yxati -->
              <div class="lg:col-span-4 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                <div class="space-y-3.5">
                  <div class="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <h4 class="text-base font-bold text-slate-900">Jonli buyurtmalar</h4>
                    <span class="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Jonli
                    </span>
                  </div>

                  <div
                    v-for="order in recentDeliveries"
                    :key="order.id"
                    class="p-3 bg-white border border-slate-200/70 rounded-xl flex items-center justify-between shadow-2xs hover:border-sky-300 transition-colors"
                  >
                    <div class="flex items-center gap-2.5">
                      <span :class="['w-2 h-2 rounded-full', order.color]"></span>
                      <div>
                        <p class="text-xs font-bold text-slate-900">{{ order.id }}</p>
                        <p class="text-[10px] text-slate-400">{{ order.client }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :class="['text-xs font-bold px-2 py-0.5 rounded-lg', order.badgeClass]">
                        {{ order.status }}
                      </span>
                      <span class="text-[11px] text-slate-400 font-medium">{{ order.time }}</span>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between font-medium">
                  <span>Jami 148 buyurtma</span>
                  <span class="text-sky-600 font-bold hover:underline cursor-pointer">Barchasi →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
