"use client";

import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import Link from "next/link";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen, searchTerm = "", setSearchTerm = () => {} }: NavbarProps) {
  const { getTotalItems } = useCart();
  const { wishlistItems } = useWishlist();
  
  const totalCartItems = getTotalItems();
  const totalWishlistItems = wishlistItems.length;

  const navLinks = [
    { href: "#Mujer", label: "Mujer" },
    { href: "#Hombre", label: "Hombre" },
    { href: "#Ninos", label: "Niños" },
    { href: "#Niñas", label: "Niñas" },
    { href: "#Ofertas", label: "Ofertas" }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className={`text-2xl font-bold tracking-wider transition-colors ${
          scrolled ? "text-gray-900" : "text-rose-600"
        }`}>NUVIA</h1>

        {/* Menú desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`font-medium transition-all hover:text-blue-600 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Buscador e iconos */}
        <div className="flex items-center gap-6">
          {/* Buscador desktop */}
          <div className="hidden md:block relative">
            <div className={`flex items-center rounded-full px-4 py-2 transition-all ${
              scrolled ? "bg-gray-100" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <Search className={`w-4 h-4 mr-2 ${
                scrolled ? "text-gray-500" : "text-white"
              }`} />
              <input
                type="text"
                placeholder="Buscar productos..."
                className={`bg-transparent outline-none text-sm w-48 placeholder:${
                  scrolled ? "text-gray-500" : "text-white/80"
                }`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Iconos */}
          <div className={`flex items-center gap-4 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}>
            {/* Icono de Lista de Deseos */}
            <Link href="/wishlist" className="p-2 hover:scale-110 transition-transform relative">
              <Heart size={20} />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Icono del Carrito */}
            <Link href="/cart" className="p-2 hover:scale-110 transition-transform relative">
              <ShoppingBag size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </Link>
            
            {/* Icono de Usuario */}
            <button className="p-2 hover:scale-110 transition-transform">
              <User size={20} />
            </button>
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}