<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/widgets/navbar/ui/Navbar.vue'
import HeroSection from '@/widgets/hero/ui/HeroSection.vue'
import ProblemsSection from '@/widgets/problems/ui/ProblemsSection.vue'
import AutomationEngineSection from '@/widgets/automation-engine/ui/AutomationEngineSection.vue'
import HowItWorksFlowSection from '@/widgets/how-it-works-flow/ui/HowItWorksFlowSection.vue'
import LiveMapSection from '@/widgets/live-map/ui/LiveMapSection.vue'
import TwoSidesSection from '@/widgets/two-sides/ui/TwoSidesSection.vue'
import FullDashboardSection from '@/widgets/full-dashboard/ui/FullDashboardSection.vue'
import CtaSection from '@/widgets/stats-cta/ui/CtaSection.vue'
import FaqSection from '@/widgets/faq/ui/FaqSection.vue'
import Footer from '@/widgets/footer/ui/Footer.vue'
import DemoRequestModal from '@/features/demo-request/ui/DemoRequestModal.vue'

const demoModalRef = ref<InstanceType<typeof DemoRequestModal> | null>(null)

const openDemoModal = () => {
  demoModalRef.value?.openModal()
}
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
    <!-- Navigation Bar -->
    <Navbar @open-demo="openDemoModal" />

    <main>
      <!-- Hero Section with Interactive Dashboard -->
      <HeroSection @open-demo="openDemoModal" />

      <!-- Problems Grid (Haqiqiy muammolar 01-06) -->
      <ProblemsSection />

      <!-- Automation Hub Engine & Feature Pills -->
      <AutomationEngineSection />

      <!-- Oddiy va aqlli oqim: 6 interconnected stages (Dark section) -->
      <HowItWorksFlowSection />

      <!-- Jonli yetkazib berish (Real-time map routing) -->
      <LiveMapSection />

      <!-- Ikki tomon, bitta tajriba (Business vs Customer App) -->
      <TwoSidesSection @open-demo="openDemoModal" />

      <!-- Aniq qarorlar (Full Mac Browser Mockup with Interactive Chart Tooltip) -->
      <FullDashboardSection />

      <!-- Key Business Stats & High-Impact CTA -->
      <CtaSection @open-demo="openDemoModal" />

      <!-- Frequently Asked Questions -->
      <FaqSection />
    </main>

    <!-- Footer -->
    <Footer @open-demo="openDemoModal" />

    <!-- Interactive Demo Request Modal (shadcn Dialog) -->
    <DemoRequestModal ref="demoModalRef" />
  </div>
</template>
