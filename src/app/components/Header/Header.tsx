"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
}

export default function Header({ searchTerm = "", setSearchTerm = () => {} }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
    }`}>
      <Navbar 
        scrolled={scrolled} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <MobileMenu 
        menuOpen={menuOpen} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </header>
  );
}