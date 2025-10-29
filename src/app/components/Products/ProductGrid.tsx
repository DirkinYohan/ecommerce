"use client";

import { Search } from "lucide-react";
import { Star } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "../../data/products";

interface ProductGridProps {
  products: Product[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ProductGrid({ products, searchTerm, setSearchTerm }: ProductGridProps) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-500 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <section id="Mujer" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">COLECCIÓN MUJER</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Piezas cuidadosamente seleccionadas que combinan estilo, comodidad y calidad excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              renderStars={renderStars} 
            />
          ))}
          
          {filteredProducts.length === 0 && searchTerm && (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <Search size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-xl mb-4">No se encontraron productos</p>
                <p className="text-gray-400 mb-6">No hay productos que coincidan con &quot;<span className="font-semibold">{searchTerm}</span>&quot;</p>
                <button 
                  className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => setSearchTerm("")}
                >
                  Ver Todos los Productos
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}