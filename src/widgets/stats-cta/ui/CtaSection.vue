<script setup lang="ts">
import { ref } from 'vue'
import { Check, ArrowRight, ShieldCheck, Send, CheckCircle2 } from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'
import { sendDemoEmail } from '@/shared/lib/email'

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

const form = ref({
  name: '',
  phone: '',
  message: '',
})

const isSubmitted = ref(false)
const isLoading = ref(false)

const handleFormSubmit = async () => {
  if (!form.value.name || !form.value.phone) return
  isLoading.value = true
  try {
    await sendDemoEmail({
      name: form.value.name,
      phone: form.value.phone,
      message: form.value.message,
    })
  } finally {
    isLoading.value = false
    isSubmitted.value = true
  }
}
</script>

<template>
  <section id="demo" class="py-20 md:py-28 bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 text-white relative overflow-hidden">
    <!-- Subtle Grid Pattern & Ambient Lighting -->
    <div class="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

    <!-- Soft Glass Sphere on bottom left (Matches Screenshot) -->
    <div
      class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/15 backdrop-blur-md border border-white/20 pointer-events-none"
    ></div>
    <div
      class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Side Copy (Matches Screenshot) -->
        <div class="lg:col-span-6 space-y-6">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Biznesingizni bugunoq <br />
            raqamlashtiring.
          </h2>

          <p class="text-base sm:text-lg text-sky-100 max-w-lg leading-relaxed">
            GidroGo bilan suv yetkazib berish biznesingizni yagona tizim orqali boshqaring.
          </p>

          <!-- 3 Checkpoints (Matches Screenshot) -->
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-xs sm:text-sm font-semibold text-white">
            <span class="flex items-center gap-2">
              <Check class="w-4 h-4 text-cyan-300 stroke-[3]" /> Shaxsiy demo
            </span>
            <span class="flex items-center gap-2">
              <Check class="w-4 h-4 text-cyan-300 stroke-[3]" /> Biznesingizga mos tahlil
            </span>
            <span class="flex items-center gap-2">
              <Check class="w-4 h-4 text-cyan-300 stroke-[3]" /> Majburiyatsiz suhbat
            </span>
          </div>
        </div>

        <!-- Right Side: Contact Form Card (Matches Screenshot) -->
        <div class="lg:col-span-6 max-w-xl mx-auto w-full">
          <div
            class="bg-white text-slate-900 rounded-[2rem] p-6 sm:p-9 shadow-2xl shadow-sky-950/20 border border-sky-100/60"
          >
            <div v-if="!isSubmitted" class="space-y-4">
              <!-- Name & Phone Fields -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700">Ismingiz</label>
                  <input
                    v-model="form.name"
                    required
                    type="text"
                    placeholder="Sardor Aliyev"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900"
                  />
                </div>
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700">Telefon raqamingiz</label>
                  <input
                    v-model="form.phone"
                    required
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900"
                  />
                </div>
              </div>

              <!-- Textarea Field (Matches Screenshot) -->
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Xabar</label>
                <textarea
                  v-model="form.message"
                  rows="3"
                  placeholder="Biznesingiz haqida qisqacha"
                  class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 resize-none"
                ></textarea>
              </div>

              <!-- Submit Button (Matches Screenshot) -->
              <Button
                @click="handleFormSubmit"
                :disabled="isLoading"
                size="lg"
                class="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 group"
              >
                <span>{{ isLoading ? 'Yuborilmoqda...' : 'Demo so‘rovini yuborish' }}</span>
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <!-- Safe Subtext with Shield Icon (Matches Screenshot) -->
              <div class="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-slate-400 font-medium">
                <ShieldCheck class="w-3.5 h-3.5 text-slate-400" />
                <span>Ma’lumotlaringiz xavfsiz saqlanadi.</span>
              </div>
            </div>

            <!-- Success State -->
            <div v-else class="text-center py-8 space-y-3">
              <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h4 class="text-xl font-bold text-slate-900">So‘rovingiz qabul qilindi!</h4>
              <p class="text-sm text-slate-500 max-w-xs mx-auto">
                Tez orada mutaxassisimiz siz bilan bog‘lanib, shaxsiy demoni taqdim etadi.
              </p>
              <Button variant="outline" @click="isSubmitted = false; form = { name: '', phone: '', message: '' }" class="mt-3">
                Yana yuborish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
