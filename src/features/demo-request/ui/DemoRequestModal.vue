<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { CheckCircle2, Phone, Building2, User, Send, Sparkles } from 'lucide-vue-next'
import { sendDemoEmail } from '@/shared/lib/email'

const isOpen = ref(false)
const isSubmitted = ref(false)
const isLoading = ref(false)

const form = ref({
  name: '',
  phone: '+998 ',
  company: '',
})

const handleSubmit = async () => {
  isLoading.value = true
  try {
    await sendDemoEmail({
      name: form.value.name,
      phone: form.value.phone,
      company: form.value.company,
    })
  } finally {
    isLoading.value = false
    isSubmitted.value = true
  }
}

const reset = () => {
  form.value = { name: '', phone: '+998 ', company: '' }
  isSubmitted.value = false
  isOpen.value = false
}

defineExpose({
  openModal: () => {
    isOpen.value = true
  },
})
</script>

<template>
  <Dialog v-model:open="isOpen">
    <div v-if="!isSubmitted" class="space-y-5">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-2">
          <Sparkles class="w-3.5 h-3.5 text-sky-600" />
          <span>Sinov muddati — 14 kun bepul</span>
        </div>
        <h3 class="text-2xl font-bold text-slate-900">GidroGo tizimiga ulaning</h3>
        <p class="text-sm text-slate-500 mt-1">
          Ma'lumotlaringizni qoldiring, mutaxassisimiz 15 daqiqa ichida siz bilan bog‘lanib tizimni ko‘rsatib beradi.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Name -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-700">Ismingiz</label>
          <div class="relative">
            <User class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              v-model="form.name"
              required
              type="text"
              placeholder="Masalan: Sardor Aliyev"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900"
            />
          </div>
        </div>

        <!-- Phone -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-700">Telefon raqamingiz</label>
          <div class="relative">
            <Phone class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              v-model="form.phone"
              required
              type="tel"
              placeholder="+998 90 123 45 67"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900"
            />
          </div>
        </div>

        <!-- Company / Brand -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-700">Kompaniya yoki brend nomi</label>
          <div class="relative">
            <Building2 class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              v-model="form.company"
              required
              type="text"
              placeholder="Masalan: Crystal Water MCHJ"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900"
            />
          </div>
        </div>

        <Button
          type="submit"
          :disabled="isLoading"
          class="w-full py-3 text-base font-semibold shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 mt-2"
        >
          <Send class="w-4 h-4" />
          <span>{{ isLoading ? 'Yuborilmoqda...' : 'Ariza yuborish' }}</span>
        </Button>
      </form>
    </div>

    <!-- Success Screen -->
    <div v-else class="text-center py-6 space-y-4">
      <div class="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
        <CheckCircle2 class="w-9 h-9" />
      </div>
      <h3 class="text-2xl font-bold text-slate-900">Arizangiz qabul qilindi!</h3>
      <p class="text-sm text-slate-500 max-w-sm mx-auto">
        Rahmat! Menejerimiz tez orada <span class="font-semibold text-slate-800">{{ form.phone }}</span> raqamingizga qo‘ng‘iroq qilib, GidroGo tizimini amalda ko‘rsatib beradi.
      </p>
      <Button variant="outline" @click="reset" class="mt-4">
        Tushunarli
      </Button>
    </div>
  </Dialog>
</template>
