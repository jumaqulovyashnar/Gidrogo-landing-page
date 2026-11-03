<script setup lang="ts">
import Navbar from '@/widgets/navbar/ui/Navbar.vue'
import HeroSection from '@/widgets/hero/ui/HeroSection.vue'
import ProblemsSection from '@/widgets/problems/ui/ProblemsSection.vue'
import AutomationEngineSection from '@/widgets/automation-engine/ui/AutomationEngineSection.vue'
import HowItWorksFlowSection from '@/widgets/how-it-works-flow/ui/HowItWorksFlowSection.vue'
import LiveMapSection from '@/widgets/live-map/ui/LiveMapSection.vue'
import FullDashboardSection from '@/widgets/full-dashboard/ui/FullDashboardSection.vue'
import CtaSection from '@/widgets/stats-cta/ui/CtaSection.vue'
import Footer from '@/widgets/footer/ui/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900 relative">
    <!-- Navigation Bar -->
    <Navbar />

    <main>
      <!-- Hero Section with Direct Login & How It Works -->
      <HeroSection />

      <!-- Problems Grid (Haqiqiy muammolar 01-06) -->
      <ProblemsSection />

      <!-- Automation Hub Engine & Feature Pills -->
      <AutomationEngineSection />

      <!-- Oddiy va aqlli oqim: 6 interconnected stages (Dark section) -->
      <HowItWorksFlowSection />

      <!-- Jonli yetkazib berish (Real-time map routing) -->
      <LiveMapSection />

      <!-- Aniq qarorlar (Full Mac Browser Mockup with Interactive Chart Tooltip) -->
      <FullDashboardSection />

      <!-- Key Business Stats & High-Impact CTA -->
      <CtaSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
