"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">NUVIA</h3>
            <p className="text-gray-400 leading-relaxed">
              Tu destino definitivo para la moda más actual y elegante. Desde ropa casual hasta accesorios esenciales, te ofrecemos lo mejor en estilo — todo en un solo lugar.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">PRODUCTOS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mujer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hombre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Niños</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accesorios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">WEBSITE</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hazte Miembro Plus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crea Tu Tienda</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">CONTACTO</h4>
            <ul className="space-y-3 text-gray-400">
              <li>3212374663</li>
              <li>dirkinojedarodriguez@gmail.com</li>
              <li>794 Francisco, 94102</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GOCART. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}