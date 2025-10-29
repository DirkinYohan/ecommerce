"use client";

import { useWishlist } from "../context/WishlistContext";
import { Heart, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function WishlistPage() {
  const { 
    wishlistItems, 
    removeFromWishlist, 
    clearWishlist 
  } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <Heart size={64} className="mx-auto text-gray-300 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu lista de deseos está vacía</h1>
              <p className="text-gray-600 mb-8">
                Descubre productos increíbles y guárdalos aquí para verlos después.
              </p>
              <Link 
                href="/"
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors inline-block"
              >
                Explorar Productos
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Header de la lista de deseos */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                Seguir Comprando
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Mi Lista de Deseos</h1>
              <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'producto' : 'productos'}
              </span>
            </div>
            <button
              onClick={clearWishlist}
              className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
            >
              Limpiar Lista
            </button>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Link href={`/product/${product.id}`}>
                    <Image 
                      className="w-full h-64 object-cover cursor-pointer" 
                      src={product.image} 
                      alt={product.name}
                      width={300}
                      height={256}
                      priority={false}
                    />
                  </Link>
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                  {product.isNew && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                        NUEVO
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <Link 
                      href={`/product/${product.id}`}
                      className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}