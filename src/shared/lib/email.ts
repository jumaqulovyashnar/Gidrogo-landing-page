import emailjs from '@emailjs/browser'

interface EmailParams {
  name: string
  phone: string
  company?: string
  message?: string
}

export async function sendDemoEmail(data: EmailParams): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tq4kefk'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

  // If public key or template ID isn't provided yet, log and simulate success gracefully
  if (!publicKey || !templateId) {
    console.info('EmailJS data:', data)
    console.info('Service ID:', serviceId)
    // Simulated successful submission for testing
    await new Promise((resolve) => setTimeout(resolve, 600))
    return true
  }

  try {
    const templateParams = {
      from_name: data.name,
      user_phone: data.phone,
      company_name: data.company || "Ko'rsatilmadi",
      message: data.message || "GidroGo demo so'rovi",
      to_email: 'jumaqulovyashnar35@gmail.com',
    }

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
    return response.status === 200
  } catch (error) {
    console.error('EmailJS error:', error)
    return false
  }
}
