"use client";

import { Search, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import Link from "next/link";

interface MobileMenuProps {
  menuOpen: boolean;
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
}

export default function MobileMenu({ menuOpen, searchTerm = "", setSearchTerm = () => {} }: MobileMenuProps) {
  const { getTotalItems } = useCart();
  const { wishlistItems } = useWishlist();
  
  const totalCartItems = getTotalItems();
  const totalWishlistItems = wishlistItems.length;

  const navLinks = [
    { href: "#Mujer", label: "Mujer" },
    { href: "#Hombre", label: "Hombre" },
    { href: "#Ninos", label: "Niños" },
    { href: "#Ninas", label: "Niñas" },
    { href: "#Zapatos", label: "Zapatos" },
    { href: "#Bolsos", label: "Bolsos" },
    { href: "#Ofertas", label: "Ofertas" }
  ];

  if (!menuOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 px-6 py-6 space-y-4 shadow-xl">
      <nav className="space-y-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
        {/* Enlaces a carrito y lista de deseos */}
        <Link 
          href="/wishlist"
          className="block text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          <Heart size={18} />
          Lista de Deseos {totalWishlistItems > 0 && `(${totalWishlistItems})`}
        </Link>
        <Link 
          href="/cart"
          className="block text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          <ShoppingBag size={18} />
          Carrito {totalCartItems > 0 && `(${totalCartItems})`}
        </Link>
      </nav>
      
      {/* Buscador móvil */}
      <div className="relative">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
          <Search className="w-4 h-4 text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Buscar productos..."
            className="bg-transparent outline-none text-sm w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}