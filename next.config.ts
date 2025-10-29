/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'encrypted-tbn1.gstatic.com',
      'encrypted-tbn2.gstatic.com',
      'encrypted-tbn3.gstatic.com',
      'images.unsplash.com',
      'tennis.vtexassets.com',
      'www.sportline.com.co', // ← AGREGAR ESTE DOMINIO
      'static.nike.com',
      'assets.adidas.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig