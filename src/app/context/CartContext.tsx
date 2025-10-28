"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../data/products";

interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  selectedForPurchase: boolean; // Nuevo campo para el switch
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product & { selectedColor?: string; selectedSize?: string; quantity?: number }) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  togglePurchaseSelection: (productId: number) => void; // Nueva función
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => string;
  getSelectedItemsTotal: () => string; // Nuevo total solo para items seleccionados
  getSelectedItemsCount: () => number; // Nuevo contador para items seleccionados
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product & { selectedColor?: string; selectedSize?: string; quantity?: number }) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => 
        item.id === product.id && 
        item.selectedColor === product.selectedColor && 
        item.selectedSize === product.selectedSize
      );
      
      if (existingItemIndex >= 0) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        return [...prevItems, { 
          ...product, 
          quantity: product.quantity || 1,
          selectedForPurchase: true // Por defecto seleccionado para compra
        }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Nueva función para toggle del switch
  const togglePurchaseSelection = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, selectedForPurchase: !item.selectedForPurchase }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/\D/g, '')) || 0;
      return total + (price * item.quantity);
    }, 0);
    
    return `$ ${total.toLocaleString()}`;
  };

  // Nuevo: Total solo para items seleccionados
  const getSelectedItemsTotal = () => {
    const total = cartItems.reduce((total, item) => {
      if (item.selectedForPurchase) {
        const price = parseInt(item.price.replace(/\D/g, '')) || 0;
        return total + (price * item.quantity);
      }
      return total;
    }, 0);
    
    return `$ ${total.toLocaleString()}`;
  };

  // Nuevo: Contador de items seleccionados
  const getSelectedItemsCount = () => {
    return cartItems.reduce((total, item) => {
      if (item.selectedForPurchase) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      togglePurchaseSelection,
      clearCart,
      getTotalItems,
      getTotalPrice,
      getSelectedItemsTotal,
      getSelectedItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}