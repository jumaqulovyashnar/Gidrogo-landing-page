export interface FeatureItem {
  id: string
  title: string
  description: string
  tag: string
  icon: string
  highlight?: string
}

export const featuresList: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Avtomatik buyurtmalar',
    description: 'Telegram bot, veb-sayt va operator qo‘ng‘iroqlaridan tushgan barcha buyurtmalar soniyalar ichida yagona markazga jamlanadi.',
    tag: 'Tezkor integratsiya',
    icon: 'Zap',
    highlight: '100% avtomatlashgan',
  },
  {
    id: 'f2',
    title: 'Mos dastavkachini aniqlash',
    description: 'Tizim kuryerlarning joylashuvi, yuk hajmi va yo‘l tirbandligini hisoblab, eng maqbul yetkazib beruvchini avtomatik belgilaydi.',
    tag: 'Smart algoritm',
    icon: 'Users',
    highlight: '2x tezroq taqsimot',
  },
  {
    id: 'f3',
    title: 'Real-time GPS tracking',
    description: 'Kuryerlarning shahar bo‘ylab harakati, mijoz manziliga yetib borish vaqti va xaritadagi marshruti to‘liq nazorat ostida.',
    tag: 'Jonli monitoring',
    icon: 'Navigation',
    highlight: 'Aniq xarita nazorati',
  },
  {
    id: 'f4',
    title: 'Ombor va idishlar balansi',
    description: 'Fermadagi toza suv, bo‘sh idishlar, kulerlar va qopqoqlar soni real vaqtda yangilanib, yo‘qotishlarning oldi olinadi.',
    tag: 'Shaffof ombor',
    icon: 'Warehouse',
    highlight: '0 ta yo‘qotish',
  },
  {
    id: 'f5',
    title: 'Mashina qoldig‘i',
    description: 'Har bir Labo yoki yuk mashinasidagi to‘la suvlar va yig‘ilgan bo‘sh baklar soni aniq ko‘rinadi, kuryer hisobi chalkashmaydi.',
    tag: 'Avtomobil nazorati',
    icon: 'Droplet',
    highlight: 'Kunlik aniq hisob',
  },
  {
    id: 'f6',
    title: 'Avtomatlashgan to‘lovlar',
    description: 'Payme, Click, Uzum va naqd pul to‘lovlari tizimga biriktiriladi. Kuryer yetkazgach to‘lov darhol kassaga tushadi.',
    tag: 'Moliya & Kassa',
    icon: 'CreditCard',
    highlight: 'Barcha to‘lov turlari',
  },
  {
    id: 'f7',
    title: 'Moliyaviy hisobot va kassa',
    description: 'Har kungi sof daromad, kuryerlar xizmat haqi, benzin xarajatlari va qarzlar bo‘yicha avtomatik buxgalteriya hisoboti.',
    tag: 'Boshqaruv hisoboti',
    icon: 'BarChart3',
    highlight: 'Bir bosishda hisobot',
  },
  {
    id: 'f8',
    title: 'Mijozlar tahlili va eslatma',
    description: 'Mijozning suv iste’mol qilish davri tahlil qilinadi va suv tugashidan 1 kun oldin avtomatik eslatma yoki bot xabari yuboriladi.',
    tag: 'AI eslatma tizimi',
    icon: 'Activity',
    highlight: '+35% qayta buyurtma',
  },
]
