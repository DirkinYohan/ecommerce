"use client";

import { Search } from "lucide-react";

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredProductsCount: number;
}

export default function SearchSection({ searchTerm, setSearchTerm, filteredProductsCount }: SearchSectionProps) {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Encuentra Tu Estilo</h3>
          <p className="text-gray-600">Descubre piezas únicas que se adaptan a tu personalidad</p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos por nombre o descripción..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-600 mt-3 text-center">
              {filteredProductsCount} producto(s) encontrado(s) para &quot;<span className="font-semibold">{searchTerm}</span>&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}