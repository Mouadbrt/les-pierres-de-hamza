export const businessInfo = {
  companyName: 'Les Pierres de Hamza',
  phone: '+212 7 67 87 07 65',
  whatsapp: '07 67 87 07 65',
  email: 'Lespairresdehamza@gmail.com',
  address: 'Taza, Maroc',
  instagram: 'https://www.instagram.com/hamza_pierres?igsh=MWY5Z2ZtengzOGZxZA==',
  facebook: 'https://www.facebook.com/share/1DDzoU6fzq/',
}

export const buildWhatsAppUrl = (message) => {
  const phone = businessInfo.whatsapp.replace(/\D/g, '')
  const base = phone ? `https://wa.me/${phone}` : 'https://wa.me/'
  return `${base}?text=${encodeURIComponent(message)}`
}
