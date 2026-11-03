import emailjs from '@emailjs/browser'

interface EmailParams {
  name: string
  phone: string
  company?: string
  message?: string
}

export async function sendDemoEmail(data: EmailParams): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tq4kefk'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gidrogo'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '3vCOOjHhpmEti9LsH'

  try {
    const templateParams = {
      from_name: data.name,
      name: data.name,
      user_name: data.name,
      user_phone: data.phone,
      phone: data.phone,
      company_name: data.company || "Ko'rsatilmadi",
      company: data.company || "Ko'rsatilmadi",
      message: data.message || "GidroGo tizimiga ulanish arizasi",
      to_email: 'yashnarjumaqulov6@gmail.com',
      reply_to: 'yashnarjumaqulov6@gmail.com',
    }

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
    return response.status === 200
  } catch (error) {
    console.error('EmailJS error:', error)
    return false
  }
}
