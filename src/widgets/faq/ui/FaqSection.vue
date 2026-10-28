<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, HelpCircle } from 'lucide-vue-next'

const openIndex = ref<number | null>(0)

const faqs = [
  {
    question: "GidroGo tizimini o‘rnatish va joriy qilish qancha vaqt oladi?",
    answer: "Odatda joriy qilish 1 kundan oshmaydi. Biz barcha dastavkachilar va operatorlarga tizimdan foydalanishni 1-2 soat ichida to‘liq o‘rgatamiz va mavjud mijozlar bazangizni tizimga yuklab beramiz.",
  },
  {
    question: "Dastavkachilar uchun qulay mobil ilova bormi?",
    answer: "Ha, dastavkachilar uchun Android va iOS uchun yengil mobil ilova hamda Telegram bot mavjud. Haydovchi yangi buyurtma, mijoz lokatsiyasi, to‘lov turi va bo‘sh idishlar sonini bevosita telefonidan boshqaradi.",
  },
  {
    question: "Telegram bot orqali mijozlar buyurtma bera oladimi?",
    answer: "Albatta! Sizning brendingiz nomi bilan maxsus Telegram bot yaratiladi. Mijozlar bot orqali manzilini tanlab 2 ta bosishda buyurtma berishadi va bu buyurtma avtomatik tarzda markaziy tizimga tushadi.",
  },
  {
    question: "Sinov davri bormi va qanday shartlar mavjud?",
    answer: "Biz har bir yangi hamkorga tizimning barcha imkoniyatlaridan 14 kun davomida to‘liq bepul foydalanish imkoniyatini taqdim etamiz. Sinov davrida siz hech qanday bank kartasi yoki oldindan to‘lov kiritmaysiz.",
  },
  {
    question: "Qanday to‘lov tizimlari bilan integratsiya qilingan?",
    answer: "GidroGo Payme, Click, Uzum Pay hamda naqd pul hisob-kitoblarini qo‘llab-quvvatlaydi. Mijoz to‘lov qilganda avtomatlashtirilgan fiskal chek shakllantirish imkoniyati ham mavjud.",
  },
]

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-20 md:py-28 bg-white relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4 mb-14">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
          Ko‘p so‘raladigan savollar
        </span>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Savollaringiz bormi? Javoblar shu yerda.
        </h2>
        <p class="text-base text-slate-600 max-w-xl mx-auto">
          Suv yetkazib berish jarayonini GidroGo bilan raqamlashtirish bo‘yicha eng mashhur savollarga javoblar.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-slate-200/90 rounded-2xl overflow-hidden transition-colors"
          :class="openIndex === index ? 'bg-sky-50/40 border-sky-200' : 'bg-white hover:border-slate-300'"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
          >
            <span class="font-bold text-base sm:text-lg text-slate-900">
              {{ faq.question }}
            </span>
            <ChevronDown
              class="w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0"
              :class="{ 'rotate-180 text-sky-600': openIndex === index }"
            />
          </button>

          <div
            v-show="openIndex === index"
            class="px-6 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80 mt-1"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
