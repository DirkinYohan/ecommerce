"use client";

import { Truck, RotateCcw, Headphones } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "Disfruta de entrega rápida y gratuita en cada pedido sin condiciones, solo entrega confiable en tu puerta.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: RotateCcw,
      title: "Devolución en 7 Días",
      description: "¿Cambiaste de opinión? No te preocupes. Devuelve cualquier artículo dentro de los 7 días.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Estamos aquí para ti. Obtén ayuda experta con nuestro servicio de atención al cliente siempre disponible.",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Por Qué Elegirnos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}