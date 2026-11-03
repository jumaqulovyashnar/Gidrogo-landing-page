<script setup lang="ts">
import {
  Zap,
  Users,
  Navigation,
  Warehouse,
  Droplet,
  CreditCard,
  BarChart3,
  Activity,
} from 'lucide-vue-next'
import { Card } from '@/shared/ui/card'
import { featuresList } from '@/entities/feature/model/data'

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
  <section id="features" class="py-16 md:py-24 relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title for Features Grid -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-snug sm:leading-snug md:leading-[1.4]">
          Barcha jarayonlarni qamrab oluvchi kuchli vositalar
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Suv yetkazib berish korxonangiz uchun maxsus ishlab chiqilgan 8 ta asosiy avtomatlashtirish moduli.
        </p>
      </div>

      <!-- Responsive Grid for Features Cards (Mobile 1 col, Tablet 2 cols, Desktop 4 cols) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <Card
          v-for="item in featuresList"
          :key="item.id"
          class="relative flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-sky-400 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
        >
          <div>
            <!-- Circular shape icon (rounded-full) -->
            <div
              class="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-gradient-to-tr group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <component :is="getFeatureIcon(item.icon)" class="w-6 h-6 stroke-[2]" />
            </div>

            <!-- Standardized Font Sizes: Title & Description -->
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
