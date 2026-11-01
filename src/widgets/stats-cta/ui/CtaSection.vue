<script setup lang="ts">
import { ref } from 'vue'
import {
  Check,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  Send,
} from 'lucide-vue-next'
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
  <section id="contact" class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Premium Enclosed CTA & Contact Card -->
      <div
        class="relative rounded-[2.5rem] bg-gradient-to-br from-[#071a35] via-[#0a2347] to-[#041226] border border-sky-500/25 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-white"
      >
        <!-- Subtle Ambient Background Light (No weird 3D bubbles) -->
        <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div
          class="absolute -top-32 -left-32 w-96 h-96 rounded-3xl bg-sky-500/15 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-32 -right-32 w-96 h-96 rounded-3xl bg-cyan-400/15 blur-3xl pointer-events-none"
        ></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          <!-- Left Side Copy -->
          <div class="lg:col-span-6 space-y-6">
            <!-- Eyebrow Pill -->
            <div
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide"
            >
              <Sparkles class="w-3.5 h-3.5 text-sky-400" />
              <span>Bepul konsultatsiya va tizim namoyishi</span>
            </div>

            <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Biznesingizni bugunoq <br class="hidden sm:inline" />
              <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
                raqamlashtiring.
              </span>
            </h2>

            <p class="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
              GidroGo bilan suv yetkazib berish biznesingizni yagona tizim orqali boshqaring. 15 daqiqada ulaning va barcha jarayonlarni to‘liq nazoratga oling.
            </p>

            <!-- 3 Feature Checkpoints -->
            <div class="space-y-3 pt-2 text-sm font-semibold text-slate-200">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Bepul o‘rnatish va korxonangizga moslash</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Biznesingizga mos tahlil va ko‘rsatkichlar</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Hech qanday majburiyatsiz sinab ko‘rish</span>
              </div>
            </div>

            <!-- Quick Direct Contact Pill -->
            <div class="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <a
                href="tel:+998941782402"
                class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <Phone class="w-3.5 h-3.5 text-sky-400" />
                <span>+998 (94) 178-24-02</span>
              </a>
              <a
                href="https://t.me/gidrogo_admin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <Send class="w-3.5 h-3.5 text-sky-400" />
                <span>@gidrogo_admin</span>
              </a>
            </div>
          </div>

          <!-- Right Side: Contact Form Card -->
          <div class="lg:col-span-6 w-full">
            <div
              class="bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-100"
            >
              <div v-if="!isSubmitted" class="space-y-4">
                <div class="space-y-1 mb-2">
                  <h3 class="text-xl font-black text-slate-900">Demoni bepul sinab ko‘ring</h3>
                  <p class="text-xs sm:text-sm text-slate-500">Mutaxassisimiz siz bilan 15 daqiqada bog‘lanib, tizimni ko‘rsatib beradi.</p>
                </div>

                <!-- Name & Phone Fields -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User class="w-3.5 h-3.5 text-sky-600" />
                      <span>Ismingiz</span>
                    </label>
                    <input
                      v-model="form.name"
                      required
                      type="text"
                      placeholder="Sardor Aliyev"
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-white placeholder:text-slate-400"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone class="w-3.5 h-3.5 text-sky-600" />
                      <span>Telefon raqamingiz</span>
                    </label>
                    <input
                      v-model="form.phone"
                      required
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <!-- Textarea Field -->
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare class="w-3.5 h-3.5 text-sky-600" />
                    <span>Xabar (ixtiyoriy)</span>
                  </label>
                  <textarea
                    v-model="form.message"
                    rows="3"
                    placeholder="Biznesingiz yoki kunlik buyurtmalar soni haqida qisqacha..."
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-white placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <Button
                  @click="handleFormSubmit"
                  :disabled="isLoading"
                  size="lg"
                  class="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>{{ isLoading ? 'Yuborilmoqda...' : 'Ariza yuborish' }}</span>
                  <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <!-- Safe Subtext with Shield Icon -->
                <div class="flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-400 font-medium">
                  <ShieldCheck class="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Ma’lumotlaringiz xavfsiz saqlanadi va himoyalangan.</span>
                </div>
              </div>

              <!-- Success State -->
              <div v-else class="text-center py-8 space-y-4">
                <div class="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 class="w-9 h-9" />
                </div>
                <div class="space-y-1">
                  <h4 class="text-2xl font-black text-slate-900">Arizangiz qabul qilindi!</h4>
                  <p class="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Tez orada mutaxassisimiz siz bilan bog‘lanib, GidroGo tizimini amalda ko‘rsatib beradi.
                  </p>
                </div>
                <Button
                  variant="outline"
                  @click="isSubmitted = false; form = { name: '', phone: '', message: '' }"
                  class="mt-2 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  Yana ariza yuborish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
