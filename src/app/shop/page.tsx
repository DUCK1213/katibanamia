"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowLeft, MessageCircle, Plus, Minus, Trash2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Katiba Made Familiar (English)",
    price: 500,
    description: "Simplified version of Kenya's Constitution in English. Easy to understand for all ages.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    category: "Books",
  },
  {
    id: 2,
    name: "Katiba Mfukoni (Kiswahili)",
    price: 500,
    description: "Simplified version of Kenya's Constitution in Kiswahili. Kimerahisishwa kwa kila mtu.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    category: "Books",
  },
  {
    id: 3,
    name: "Katiba Na Mia T-Shirt",
    price: 1200,
    description: "High-quality cotton t-shirt with the Katiba Na Mia logo. Available in all sizes.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    category: "Merchandise",
  },
  {
    id: 4,
    name: "Katiba Na Mia Hoodie",
    price: 2500,
    description: "Warm and comfortable hoodie with embroidered logo. Perfect for chilly evenings.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    category: "Merchandise",
  },
  {
    id: 5,
    name: "KAMAU Agenda Tote Bag",
    price: 800,
    description: "Durable canvas tote bag with the 5 pillars of the KAMAU Agenda printed.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    category: "Merchandise",
  },
  {
    id: 6,
    name: "Katiba Notebook Set",
    price: 600,
    description: "Set of 3 notebooks with constitutional themes. Perfect for students and note-taking.",
    image: "https://images.unsplash.com/photo-1531346878377-a513bc951f13?q=80&w=800&auto=format&fit=crop",
    category: "Stationery",
  },
];

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Generate WhatsApp order message
  const generateOrderMessage = () => {
    const items = cart
      .map((item) => `${item.quantity}x ${item.name} - KES ${item.price * item.quantity}`)
      .join("\n");
    const message = encodeURIComponent(
      `Hello! I'd like to place an order:\n\n${items}\n\nTotal: KES ${totalPrice}\n\nPlease provide payment details (M-Pesa).`
    );
    return `https://wa.me/254759318855?text=${message}`;
  };

  return (
    <main className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#C8102E] hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="font-serif text-2xl font-bold hidden sm:block">Katiba Shop</h1>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 bg-[#C8102E] text-white rounded-lg hover:bg-[#A00D25] transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#006B3F] text-white text-xs rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Shop Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
              Support the Movement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every purchase helps fund our constitutional education programs across all 47 counties in Kenya.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#006B3F] text-white text-sm font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#C8102E]">
                      KES {product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#C8102E] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Cart Panel */}
          <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-black">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-[#C8102E] hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-black text-sm">
                            {item.name}
                          </h4>
                          <p className="text-[#C8102E] font-bold">
                            KES {item.price.toLocaleString()}
                          </p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Summary */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">KES {totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-[#006B3F]">Free</span>
                    </div>
                    <div className="flex justify-between mb-6 text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[#C8102E]">KES {totalPrice.toLocaleString()}</span>
                    </div>

                    {/* Checkout via WhatsApp */}
                    <a
                      href={generateOrderMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Complete Order via WhatsApp
                    </a>
                    
                    <p className="text-center text-sm text-gray-500 mt-3">
                      We'll send you M-Pesa payment details
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
