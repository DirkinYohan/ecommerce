"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Star, Heart, Share2, Truck, RotateCcw, Shield, ArrowLeft } from "lucide-react";
import Header from "../../components/Header/Header";
import Link from "next/link";
import Image from "next/image";

// Definir interfaces para TypeScript
interface ProductColor {
  name: string;
  image: string;
  mainImage?: string;
}

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const productId = parseInt(params.id as string);
  const product = products.find(p => p.id === productId);

  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(product?.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes?.[0] || "");
  const [selectedImage, setSelectedImage] = useState<string>(product?.image || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
            <Link 
              href="/"
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors inline-block"
            >
              Volver a la Tienda
            </Link>
          </div>
        </div>
      </>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Función para manejar cambio de color
  const handleColorChange = (color: ProductColor) => {
    setSelectedColor(color);
    // Cambiar la imagen principal al cambiar el color
    if (color.mainImage) {
      setSelectedImage(color.mainImage);
    }
  };

  const handleAddToCart = () => {
    // Crear el objeto exactamente como lo espera addToCart
    const cartProduct = {
      ...product, // Esto incluye todas las propiedades de Product
      selectedColor: selectedColor?.name,
      selectedSize,
      quantity: quantity
    };
    
    addToCart(cartProduct);
    router.push("/cart");
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-500 ml-2">({rating})</span>
      </div>
    );
  };

  // Determinar si es un bolso para mostrar paleta de colores
  const isBag = product.subcategory === "Bolsos";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24">
        {/* Breadcrumb simple */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a la tienda
          </Link>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  width={600}
                  height={600}
                  priority
                />
              </div>
              
              {/* Miniaturas de imágenes adicionales (diferentes ángulos/perfiles) */}
              {product.images && product.images.length > 1 && (
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Más vistas:</h4>
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 ${
                          selectedImage === image ? 'border-gray-900' : 'border-transparent'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  {renderStars(product.rating)}
                  <span className="text-gray-500">•</span>
                  <span className="text-green-600 font-semibold">En stock</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Selector de Color */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">
                    Color: <span className="text-gray-600">{selectedColor?.name}</span>
                  </h3>
                  
                  {isBag ? (
                    // PALETA DE COLORES PARA BOLSOS (círculos de colores)
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => handleColorChange(color)}
                          className={`w-10 h-10 rounded-full border-2 transition-all transform hover:scale-110 ${
                            selectedColor?.name === color.name 
                              ? 'border-gray-900 ring-2 ring-gray-300' 
                              : 'border-gray-200'
                          }`}
                          style={{ 
                            backgroundColor: getColorHex(color.name),
                            backgroundImage: color.image ? `url(${color.image})` : undefined,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  ) : (
                    // SELECTOR DE COLOR PARA ROPA Y ZAPATOS (imágenes en miniatura)
                    <div className="grid grid-cols-4 gap-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => handleColorChange(color)}
                          className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                            selectedColor?.name === color.name 
                              ? 'border-gray-900 ring-2 ring-gray-300' 
                              : 'border-gray-200 hover:border-gray-900'
                          }`}
                        >
                          <Image
                            src={color.image}
                            alt={color.name}
                            className="w-full h-full object-cover"
                            width={80}
                            height={80}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Selector de Talla */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Talla</h3>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Guía de tallas
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 rounded-lg border-2 font-semibold transition-all ${
                          selectedSize === size
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 hover:border-gray-900 text-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selector de Cantidad */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Cantidad</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-3 font-semibold min-w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {quantity} {quantity === 1 ? 'unidad' : 'unidades'}
                  </span>
                </div>
              </div>

              {/* Botón principal de Añadir al Carrito */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors transform hover:scale-105 text-lg"
              >
                Añadir al Carrito - {product.price}
              </button>

              {/* Botones secundarios */}
              <div className="flex gap-4">
                <button 
                  onClick={handleWishlistClick}
                  className={`flex-1 py-3 border font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? 'border-red-500 bg-red-500 text-white hover:bg-red-600'
                      : 'border-gray-200 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  <Heart size={20} className={isWishlisted ? "fill-white" : ""} />
                  {isWishlisted ? 'En Deseos' : 'Favorito'}
                </button>
                <button className="flex-1 py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-gray-900 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={20} />
                  Compartir
                </button>
              </div>

              {/* Envío y garantías */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Truck size={24} className="text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Envío gratis</p>
                    <p className="text-sm text-gray-500">En 24-48 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw size={24} className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Devoluciones</p>
                    <p className="text-sm text-gray-500">30 días garantía</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield size={24} className="text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Pago seguro</p>
                    <p className="text-sm text-gray-500">Protegido por SSL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Función auxiliar para obtener colores HEX
function getColorHex(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    "Negro": "#000000",
    "Blanco": "#FFFFFF",
    "Rojo": "#DC2626",
    "Azul": "#2563EB",
    "Azul Marino": "#1E3A8A",
    "Verde": "#16A34A",
    "Verde Oscuro": "#15803D",
    "Marrón": "#92400E",
    "Beige": "#FEF3C7",
    "Rosa": "#EC4899",
    "Lila": "#A855F7",
    "Gris": "#6B7280",
    "Gris Oscuro": "#374151",
    "Verde Militar": "#3F6212"
  };
  
  return colorMap[colorName] || "#6B7280";
}