export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  subcategory?: string;
  isNew: boolean;
  rating: number;
  images?: string[];
  colors?: {
    name: string;
    image: string; // Imagen específica para este color
    mainImage: string; // Imagen principal para este color
  }[];
  sizes?: string[];
  details?: string[];
}

export const products: Product[] = [
  // PRODUCTOS EXISTENTES DE MUJER
  {
    id: 1,
    name: "Chaqueta Deportiva",
    description: "Chaquetas para mujer con diseños funcionales, livianos o acolchados",
    price: "$ 100.000",
    image: "https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/748711aa-017e-4936-b927-4f3ca2c17db6___a1008d756d45360e6d607a7fbccfb261.jpg",
    category: "Mujer",
    subcategory: "Chaquetas",
    isNew: true,
    rating: 4.5,
    images: [
      "https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/748711aa-017e-4936-b927-4f3ca2c17db6___a1008d756d45360e6d607a7fbccfb261.jpg",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    ],
    colors: [
      { 
        name: "Negro", 
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/748711aa-017e-4936-b927-4f3ca2c17db6___a1008d756d45360e6d607a7fbccfb261.jpg"
      },
      { 
        name: "Azul Marino", 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Verde Oscuro", 
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: ["Material: 100% Poliéster", "Cierre: Cremallera frontal", "Bolsillos: 2 bolsillos laterales"]
  },

  // BOLSOS PARA MUJER - CON PALETA DE COLORES
  {
    id: 16,
    name: "Bolso Tote Mujer Elegante",
    description: "Bolso tote espacioso y elegante para mujer con múltiples colores disponibles",
    price: "$ 95.000",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Mujer",
    subcategory: "Bolsos",
    isNew: true,
    rating: 4.7,
    colors: [
      { 
        name: "Negro", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Beige", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Rojo", 
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Azul Marino", 
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Verde Oscuro", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80&sat=-100&hue=120",
        mainImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-100&hue=120"
      }
    ],
    sizes: ["Pequeño", "Mediano", "Grande"],
    details: ["Material: Cuero sintético", "Asas ajustables", "Múltiples compartimentos"]
  },

  // ZAPATOS PARA HOMBRE - CON IMÁGENES POR COLOR
  {
    id: 12,
    name: "Zapatos Formales Hombre",
    description: "Zapatos formales de cuero genuino para hombre",
    price: "$ 150.000",
    image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Hombre",
    subcategory: "Zapatos",
    isNew: true,
    rating: 4.7,
    colors: [
      { 
        name: "Negro", 
        image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Marrón", 
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Azul Marino", 
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    details: ["Material: Cuero genuino", "Suela de goma", "Formales y elegantes"]
  },

  // ROPA PARA NIÑOS - CON IMÁGENES POR COLOR
  {
    id: 9,
    name: "Conjunto Deportivo Niño",
    description: "Conjunto deportivo para niño con diseño cómodo y moderno",
    price: "$ 75.000",
    image: "https://www.sportline.com.co/media/catalog/product/k/c/kc0349_apparel-front-center-view.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    category: "Niños",
    subcategory: "Conjuntos",
    isNew: true,
    rating: 4.6,
    colors: [
      { 
        name: "Azul", 
        image: "https://www.sportline.com.co/media/catalog/product/k/c/kc0349_apparel-back-center-view.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        mainImage: "https://images.unsplash.com/photo-1581094794329-c6ade7c210b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Rojo", 
        image: "https://m.media-amazon.com/images/I/61Dpx3vrDJL._AC_UY1000_.jpg",
        mainImage: "https://images.unsplash.com/photo-1581094794329-c6ade7c210b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=100&hue=0"
      },
      { 
        name: "Verde", 
        image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ffe2ce7595d244d6922cf33e87e19271_9366/camiseta-tiro-24-kids.jpg",
        mainImage: "https://images.unsplash.com/photo-1581094794329-c6ade7c210b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=100&hue=120"
      }
    ],
    sizes: ["4-6 años", "7-9 años", "10-12 años"],
    details: ["Material: Algodón", "Confortable", "Lavable en máquina"]
  },

  
  
  // ROPA PARA NIÑAS - CON IMÁGENES POR COLOR
  {
    id: 10,
    name: "Vestido Niña Florido",
    description: "Hermoso vestido para niña con estampado floral",
    price: "$ 65.000",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREkSFkoyEVyuFtMbItzYvktklfRoaXBHSbyKNQ-rXXp9VgeBXZK1AYgPKtFdM7DO8spHyy1ETY74jp-Bd5E09GX1NxUN6c6xk8aPLuIoDHn_LA4bwsDxXQYdY&usqp=CAc",
    category: "Niñas",
    subcategory: "Vestidos",
    isNew: true,
    rating: 4.8,
    colors: [
      { 
        name: "Rosa", 
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIvpqyY_GAkMrvJM17Hzej1034rgGjxolNkP78zN6t42ZBi85f9tlwkj3vP1sQBIDmgY57-21-OhfEjMBnSBK5B3RF2qk_5jubAa9xds79dnRsOqbOGpQ_GQ&usqp=CAc",
        mainImage: "https://images.unsplash.com/photo-1599447292183-31e20bf6e249?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Lila", 
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        mainImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      { 
        name: "Blanco", 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKQCGERviANDI0DFO0Fo9q2-uLSPG4iheHO1wkMGP52mfUOzCTC5OYaaWkP72eVZ7t4nvf2xs4C57K_SiCJd_85cucEyIGduu0KIMzZupulK_r22hTYaiVPg&usqp=CAc",
        mainImage: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    sizes: ["3-4 años", "5-6 años", "7-8 años"],
    details: ["Material: 100% Algodón", "Estampado floral", "Cómodo para jugar"]
  },

  
  


  
  // ... otros productos con la misma estructura actualizada
];