<script setup lang="ts">
import { ref } from 'vue'
import {
  Package,
  Truck,
  Droplet,
  CheckCircle2,
  Clock,
  Navigation,
  Warehouse,
  ShieldCheck,
  TrendingUp,
  CircleDot,
  Check,
} from 'lucide-vue-next'
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/card'

const activeTab = ref<'orders' | 'fleet' | 'stock'>('orders')

const liveOrders = [
  {
    id: '#5092',
    client: 'Akfa Medline Klinikasi',
    items: '10 dona 18.9L suv',
    driver: 'Sanjarbek R. (Labo 01 777 AAA)',
    time: '8 daqiqa',
    progress: 80,
    status: "Yo'lda",
    statusClass: 'bg-sky-50 text-sky-700 border-sky-200',
    dotColor: 'bg-sky-500 animate-pulse',
  },
  {
    id: '#5091',
    client: 'Trastbank Bosh Ofisi',
    items: '25 dona 18.9L + 2 ta kuler',
    driver: 'Dilshod T. (Cobalt 01 123 BBB)',
    time: '09:42',
    progress: 100,
    status: 'Topshirildi',
    statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotColor: 'bg-emerald-500',
  },
  {
    id: '#5090',
    client: 'Chilonzor, 9-mavze, 14-uy',
    items: '2 dona 18.9L toza suv',
    driver: 'Shahzod M. (Damas 01 321 CCC)',
    time: '15 daqiqa',
    progress: 40,
    status: 'Yetkazilmoqda',
    statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    dotColor: 'bg-amber-500 animate-pulse',
  },
]

const drivers = [
  { name: 'Sanjarbek R.', car: 'Labo 01 777 AAA', capacity: '38/50 bak', area: 'Yakkasaroy tumani', done: '14 buyurtma' },
  { name: 'Dilshod T.', car: 'Cobalt 01 123 BBB', capacity: '22/25 bak', area: 'Mirzo Ulug‘bek', done: '18 buyurtma' },
  { name: 'Shahzod M.', car: 'Damas 01 321 CCC', capacity: '45/60 bak', area: 'Yunusobod tumani', done: '21 buyurtma' },
]

const stockItems = [
  { name: 'To‘la suv baklari (18.9L)', count: '2,450 dona', status: 'Yetarli zaxira', color: 'text-emerald-600 bg-emerald-50' },
  { name: 'Qaytarilgan bo‘sh baklar', count: '1,120 dona', status: 'Yuvish jarayonida', color: 'text-sky-600 bg-sky-50' },
  { name: 'Elektron kulerlar & nasoslar', count: '94 dona', status: 'Omborda mavjud', color: 'text-slate-700 bg-slate-100' },
]
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto lg:max-w-none">
    <!-- Ambient Backdrop Light -->
    <div
      class="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-sky-400/20 via-cyan-300/15 to-transparent blur-3xl pointer-events-none"
    ></div>

    <!-- Main Clean Shadcn Card -->
    <Card
      class="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl shadow-sky-950/10 overflow-hidden"
    >
      <!-- Top Live Dispatch Bar -->
      <div class="flex flex-wrap items-center justify-between pb-5 border-b border-slate-100 gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span class="text-xs font-bold text-slate-800">Jonli dispetcherlik terminali</span>
        </div>
        <div class="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-full">
          <Navigation class="w-3.5 h-3.5 text-sky-600" />
          <span>Toshkent · 28 ta kuryer faol</span>
        </div>
      </div>

      <!-- Control Tabs Switcher -->
      <div class="flex items-center gap-2 my-5 p-1.5 bg-slate-100/80 rounded-2xl">
        <button
          @click="activeTab = 'orders'"
          :class="[
            'flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5',
            activeTab === 'orders'
              ? 'bg-white text-sky-700 shadow-sm border border-slate-200/60'
              : 'text-slate-600 hover:text-slate-900'
          ]"
        >
          <Package class="w-3.5 h-3.5" />
          <span>Buyurtmalar</span>
        </button>

        <button
          @click="activeTab = 'fleet'"
          :class="[
            'flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5',
            activeTab === 'fleet'
              ? 'bg-white text-sky-700 shadow-sm border border-slate-200/60'
              : 'text-slate-600 hover:text-slate-900'
          ]"
        >
          <Truck class="w-3.5 h-3.5" />
          <span>Kuryerlar floti</span>
        </button>

        <button
          @click="activeTab = 'stock'"
          :class="[
            'flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5',
            activeTab === 'stock'
              ? 'bg-white text-sky-700 shadow-sm border border-slate-200/60'
              : 'text-slate-600 hover:text-slate-900'
          ]"
        >
          <Warehouse class="w-3.5 h-3.5" />
          <span>Ombor balansi</span>
        </button>
      </div>

      <!-- Tab 1: Live Orders View -->
      <div v-if="activeTab === 'orders'" class="space-y-3 animate-in fade-in duration-200">
        <div
          v-for="order in liveOrders"
          :key="order.id"
          class="p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-sky-300 hover:shadow-md transition-all space-y-2.5"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xs font-black text-slate-900">{{ order.id }}</span>
              <span class="text-xs font-bold text-slate-700">· {{ order.client }}</span>
            </div>
            <span
              :class="[
                'text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5',
                order.statusClass
              ]"
            >
              <span :class="['w-1.5 h-1.5 rounded-full', order.dotColor]"></span>
              {{ order.status }}
            </span>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500">
            <span class="font-medium text-slate-600">{{ order.items }}</span>
            <span class="font-semibold text-slate-800 flex items-center gap-1">
              <Clock class="w-3 h-3 text-slate-400" /> {{ order.time }}
            </span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full transition-all duration-500"
              :style="{ width: `${order.progress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Tab 2: Fleet Status View -->
      <div v-else-if="activeTab === 'fleet'" class="space-y-3 animate-in fade-in duration-200">
        <div
          v-for="driver in drivers"
          :key="driver.name"
          class="p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-sky-300 hover:shadow-md transition-all flex items-center justify-between gap-3"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
              <Truck class="w-5 h-5" />
            </div>
            <div>
              <h5 class="text-xs font-extrabold text-slate-900">{{ driver.name }}</h5>
              <p class="text-[11px] text-slate-500">{{ driver.car }} · {{ driver.area }}</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs font-black text-sky-600 block">{{ driver.capacity }}</span>
            <span class="text-[10px] text-emerald-600 font-semibold">{{ driver.done }}</span>
          </div>
        </div>
      </div>

      <!-- Tab 3: Warehouse Stock View -->
      <div v-else class="space-y-3 animate-in fade-in duration-200">
        <div
          v-for="item in stockItems"
          :key="item.name"
          class="p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-sky-300 hover:shadow-md transition-all flex items-center justify-between gap-3"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
              <Droplet class="w-5 h-5" />
            </div>
            <div>
              <h5 class="text-xs font-extrabold text-slate-900">{{ item.name }}</h5>
              <span :class="['text-[10px] font-bold px-2 py-0.5 rounded-full', item.color]">
                {{ item.status }}
              </span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm font-black text-slate-900">{{ item.count }}</span>
          </div>
        </div>
      </div>

      <!-- Bottom Real Stats Bar -->
      <div class="grid grid-cols-3 gap-3 pt-5 mt-5 border-t border-slate-100 text-center">
        <div class="bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
          <span class="text-[10px] font-bold text-slate-400 block uppercase">Bugungi yetkazuv</span>
          <span class="text-base sm:text-lg font-black text-slate-900">1,428 ta</span>
        </div>
        <div class="bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
          <span class="text-[10px] font-bold text-slate-400 block uppercase">O‘rtacha vaqt</span>
          <span class="text-base sm:text-lg font-black text-sky-600">21 daqiqa</span>
        </div>
        <div class="bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
          <span class="text-[10px] font-bold text-slate-400 block uppercase">Aniqlik</span>
          <span class="text-base sm:text-lg font-black text-emerald-600">99.8%</span>
        </div>
      </div>
    </Card>
  </div>
</template>
