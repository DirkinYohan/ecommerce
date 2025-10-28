"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import SearchSection from "./components/Products/SearchSection";
import ProductGrid from "./components/Products/ProductGrid";
import ServicesSection from "./components/Services/ServicesSection";
import NewsletterSection from "./components/Newsletter/NewsletterSection";
import Footer from "./components/Footer/Footer";
import { products } from "./data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar productos válidos
  const validProducts = products.filter(product => 
    product && product.id && product.name && product.image
  );

  const filteredProducts = validProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <HeroSection />
      <SearchSection 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredProductsCount={filteredProducts.length}
      />
      <ProductGrid 
        products={validProducts} // Pasar solo productos válidos
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ServicesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}