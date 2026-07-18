export const businessInfo = {
  companyName: 'Les Pierres de Hamza',
  phone: '+212 7 67 87 07 65',
  whatsapp: '+212 7 67 87 07 65',
  email: 'Lespairresdehamza@gmail.com',
  address: 'Taza, Maroc',
}

export const buildWhatsAppUrl = (message) => {
  const phone = businessInfo.whatsapp.replace(/\D/g, '')
  const base = phone ? `https://wa.me/${phone}` : 'https://wa.me/'
  return `${base}?text=${encodeURIComponent(message)}`
}
