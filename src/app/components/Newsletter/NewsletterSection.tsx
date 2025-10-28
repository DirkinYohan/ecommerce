"use client";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Suscríbete para recibir ofertas exclusivas, nuevas llegadas y actualizaciones internas entregadas directamente a tu bandeja de entrada cada semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Ingresa tu dirección de correo" 
              className="px-6 py-4 rounded-2xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto flex-grow"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Suscribirse
            </button>
        
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Al suscribirte, aceptas nuestra Política de Privacidad
          </p>
        </div>
      </div>
    </section>
  );
}