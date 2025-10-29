"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Moda elegante"
        className="w-full h-full object-cover"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Nueva Colección <span className="text-blue-400">2025</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Descubre la última tendencia en moda con nuestra exclusiva colección primavera-verano 2025.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl">
                VER COLECCIÓN
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all">
                VER OFERTAS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}