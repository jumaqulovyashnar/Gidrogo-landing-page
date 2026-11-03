<script setup lang="ts">
import {
  PhoneCall,
  PackageCheck,
  UserCheck,
  Truck,
  CreditCard,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-vue-next'
import { Card } from '@/shared/ui/card'

const steps = [
  {
    number: '01',
    title: 'Mijoz buyurtma beradi',
    description: 'Telegram bot, mobil ilova yoki operator orqali mijoz o‘z manzilini tanlab 2 bosishda buyurtma yuboradi.',
    tag: 'Oson buyurtma',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Tizim qabul qiladi',
    description: 'Markaziy platforma buyurtmani soniyalar ichida ro‘yxatdan o‘tkazib, ombordagi suv zaxirasini tekshiradi.',
    tag: 'Tezkor tasdiq',
    icon: PackageCheck,
  },
  {
    number: '03',
    title: 'Dastavkachi aniqlanadi',
    description: 'GPS algoritmi eng yaqin masofadagi va yuk xonasida suv bor bo‘lgan eng mos kuryerni avtomatik belgilaydi.',
    tag: 'Smart taqsimot',
    icon: UserCheck,
  },
  {
    number: '04',
    title: 'Suv yetkaziladi',
    description: 'Kuryer optimal tirbandliksiz marshrut bo‘yicha toza ichimlik suvini mijoz eshigigacha tezkor yetkazib beradi.',
    tag: 'Tezkor yetkazuv',
    icon: Truck,
  },
  {
    number: '05',
    title: 'To‘lov amalga oshadi',
    description: 'Payme, Click, Uzum yoki naqd pul to‘lovi qabul qilinib, bo‘sh baklar soni hisobi avtomatik yangilanadi.',
    tag: 'Kassa nazorati',
    icon: CreditCard,
  },
  {
    number: '06',
    title: 'Ma’lumot saqlanadi',
    description: 'Mijoz ma’lumotlari, kunlik tushum, kuryerlar KPI ko‘rsatkichi va sof foyda hisobotda to‘liq qayd etiladi.',
    tag: 'Avtomatik hisobot',
    icon: BarChart3,
  },
]
</script>

<template>
  <section id="how-it-works-flow" class="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.35]">
          GidroGo qanday ishlaydi?
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Buyurtma kelganidan boshlab biznes statistikasi shakllanguncha — olti bog‘langan qulay bosqich.
        </p>
      </div>

      <!-- Spacious Responsive 3x2 Shadcn Card Grid (Unified Consistent Light Theme) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <Card
          v-for="step in steps"
          :key="step.number"
          class="relative bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 hover:border-sky-400 hover:-translate-y-1.5 shadow-card-soft hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between overflow-hidden"
        >
          <div>
            <!-- Top Bar: Icon & Step Number -->
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <component :is="step.icon" class="w-7 h-7 stroke-[2]" />
              </div>

              <!-- Large Watermark Number -->
              <span class="text-3xl sm:text-4xl font-black text-slate-200 group-hover:text-sky-300 transition-colors select-none">
                {{ step.number }}
              </span>
            </div>

            <!-- Title & Description (Clean 2 Font Sizes) -->
            <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
              {{ step.title }}
            </h4>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
