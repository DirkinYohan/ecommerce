"use client";

import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, CreditCard, ToggleLeft, ToggleRight } from "lucide-react";
import Link from "next/link";
import Header from "../components/Header/Header";
import { useState } from "react";

export default function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    togglePurchaseSelection,
    clearCart, 
    getTotalPrice,
    getSelectedItemsTotal,
    getSelectedItemsCount
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
              <p className="text-gray-600 mb-8">
                Descubre nuestra increíble colección y encuentra productos que te encantarán.
              </p>
              <Link 
                href="/"
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors inline-block"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const selectedItemsCount = getSelectedItemsCount();
  const selectedItemsTotal = getSelectedItemsTotal();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Header del carrito */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                Seguir Comprando
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Carrito de Compras</h1>
            </div>
            <button
              onClick={clearCart}
              className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
            >
              Vaciar Carrito
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="border-b border-gray-200 last:border-b-0">
                    <div className="p-6 flex items-center gap-4">
                      {/* Switch de selección */}
                      <button
                        onClick={() => togglePurchaseSelection(item.id)}
                        className="flex-shrink-0"
                      >
                        {item.selectedForPurchase ? (
                          <ToggleRight size={32} className="text-green-600" />
                        ) : (
                          <ToggleLeft size={32} className="text-gray-400" />
                        )}
                      </button>

                      {/* Imagen del producto */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      {/* Información del producto */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-semibold mb-1 ${
                          item.selectedForPurchase ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {item.name}
                        </h3>
                        <p className={`text-sm mb-2 line-clamp-1 ${
                          item.selectedForPurchase ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {item.description}
                        </p>
                        
                        {/* Mostrar color y talla seleccionados */}
                        <div className="flex gap-4 text-sm">
                          {item.selectedColor && (
                            <span className={item.selectedForPurchase ? 'text-gray-600' : 'text-gray-400'}>
                              Color: {item.selectedColor}
                            </span>
                          )}
                          {item.selectedSize && (
                            <span className={item.selectedForPurchase ? 'text-gray-600' : 'text-gray-400'}>
                              Talla: {item.selectedSize}
                            </span>
                          )}
                        </div>
                        
                        <p className={`text-lg font-bold mt-2 ${
                          item.selectedForPurchase ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {item.price}
                        </p>
                      </div>

                      {/* Controles de cantidad */}
                      <div className={`flex items-center gap-3 ${
                        !item.selectedForPurchase && 'opacity-50'
                      }`}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          disabled={!item.selectedForPurchase}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          disabled={!item.selectedForPurchase}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:text-red-700 transition-colors flex-shrink-0"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Información sobre el switch */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  💡 <strong>Consejo:</strong> Usa el interruptor para seleccionar qué productos incluir en tu compra. 
                  Los productos no seleccionados se mantendrán guardados en tu carrito.
                </p>
              </div>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Productos en carrito ({cartItems.reduce((total, item) => total + item.quantity, 0)})</span>
                    <span>{getTotalPrice()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Productos seleccionados ({selectedItemsCount})</span>
                    <span>{selectedItemsTotal}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    <span className="text-green-600">Gratis</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total a pagar</span>
                      <span>{selectedItemsTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Botón principal de Pagar Ahora */}
                <button 
                  className={`w-full py-4 text-white font-semibold rounded-lg transition-colors mb-4 flex items-center justify-center gap-2 text-lg ${
                    selectedItemsCount > 0 
                      ? 'bg-gray-900 hover:bg-gray-800 cursor-pointer' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={selectedItemsCount === 0}
                >
                  <CreditCard size={20} />
                  Pagar Ahora ({selectedItemsCount})
                </button>
                
                {selectedItemsCount === 0 && (
                  <p className="text-sm text-orange-600 text-center mb-4">
                    Selecciona al menos un producto para pagar
                  </p>
                )}
                
                <p className="text-sm text-gray-500 text-center">
                  Envío gratis a todo el país
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}