export const WHATSAPP_NUMBER = '5491100000000'

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function whatsappLink(message = '') {
  const text = encodeURIComponent(message)
  return text ? `${WHATSAPP_BASE_URL}?text=${text}` : WHATSAPP_BASE_URL
}
