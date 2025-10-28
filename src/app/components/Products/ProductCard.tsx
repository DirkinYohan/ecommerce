"use client";

import { Heart } from "lucide-react";
import { Product } from "../../data/products";
import Link from "next/link";
import { useWishlist } from "../../context/WishlistContext";
import { JSX, useState } from "react";

interface ProductCardProps {
  product: Product;
  renderStars: (rating: number) => JSX.Element;
}

export default function ProductCard({ product, renderStars }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isLoading, setIsLoading] = useState(false);
  
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevenir navegación si está dentro de un Link
    e.stopPropagation(); // Prevenir eventos de burbujeo
    
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      if (isWishlisted) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    } catch (error) {
      console.error("Error al actualizar la lista de deseos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        {/* Imagen clickeable que lleva al detalle del producto */}
        <Link href={`/product/${product.id}`}>
          <img 
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer" 
            src={product.image} 
            alt={product.name} 
          />
        </Link>
        
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">NUEVO</span>
          )}
          
          {/* Botón del corazón - Lista de Deseos */}
          <button 
            onClick={handleWishlistClick}
            disabled={isLoading}
            className={`p-2 rounded-full transition-all duration-300 shadow-lg ${
              isWishlisted 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/90 hover:bg-white text-gray-700 hover:text-red-500'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <Heart 
              size={18} 
              className={isWishlisted ? "fill-white" : ""}
            />
          </button>
        </div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        {/* Título clickeable */}
        <Link href={`/product/${product.id}`}>
          <div className="flex justify-between items-start mb-2 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <span className="text-lg font-bold text-gray-900">{product.price}</span>
          </div>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        {renderStars(product.rating)}
        
        {/* Solo botón Añadir al Carrito */}
        <Link href={`/product/${product.id}`}>
          <button className="w-full mt-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors transform hover:scale-105">
            Añadir al Carrito
          </button>
        </Link>
      </div>
    </div>
  );
}
