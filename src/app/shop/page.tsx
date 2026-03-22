"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart, ArrowLeft, MessageCircle, Plus, Minus, Trash2,
  Smartphone, Loader2, CheckCircle, User, MapPin, Package, Heart,
  ChevronRight, ChevronLeft, ArrowRight
} from "lucide-react";

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

// Checkout step state
type CheckoutStep = "cart" | "details" | "payment" | "thankyou";

const products: Product[] = [
  {
    id: 1,
    name: "Katiba Made Familiar (English)",
    price: 500,
    description: "Simplified version of Kenya's Constitution in English. Easy to understand for all ages.",
    image: "/img/WhatsApp Image 2026-03-13 at 05.43.24.jpeg",
    category: "Books",
  },
  {
    id: 2,
    name: "Katiba Mfukoni (Kiswahili)",
    price: 500,
    description: "Simplified version of Kenya's Constitution in Kiswahili. Kimerahisishwa kwa kila mtu.",
    image: "/img/WhatsApp Image 2026-03-13 at 05.43.24 (1).jpeg",
    category: "Books",
  },
  {
    id: 3,
    name: "Katiba Na Mia T-Shirt",
    price: 1200,
    description: "High-quality cotton t-shirt with the Katiba Na Mia logo. Available in all sizes.",
    image: "/img/G1tdykvW8AAmzPS.jpeg",
    category: "Merchandise",
  },
  {
    id: 4,
    name: "Katiba Na Mia Hoodie",
    price: 2500,
    description: "Warm and comfortable hoodie with embroidered logo. Perfect for chilly evenings.",
    image: "/img/G8RQIePWwAMEo0G.jpg",
    category: "Merchandise",
  },
  {
    id: 5,
    name: "KAMAU Agenda Tote Bag",
    price: 800,
    description: "Durable canvas tote bag with the 5 pillars of the KAMAU Agenda printed.",
    image: "/img/2cI8prO-.jpg",
    category: "Merchandise",
  },
  {
    id: 6,
    name: "Katiba Notebook Set",
    price: 600,
    description: "Set of 3 notebooks with constitutional themes. Perfect for students and note-taking.",
    image: "/img/G8opoVJWcAE3aVo.jpeg",
    category: "Stationery",
  },
];

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [step, setStep] = useState<CheckoutStep>("cart");

  // Customer details (kept private — only sent to server/sheets, never displayed)
  const [customerName, setCustomerName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [detailsError, setDetailsError] = useState("");

  // M-Pesa
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [isProcessingMpesa, setIsProcessingMpesa] = useState(false);
  const [mpesaStatus, setMpesaStatus] = useState<"idle" | "success" | "error">("idle");
  const [mpesaError, setMpesaError] = useState("");

  // ── Cart helpers ────────────────────────────────────────────────────────────

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

  // ── Step navigation ─────────────────────────────────────────────────────────

  const openCart = () => {
    setStep("cart");
    setIsCartOpen(true);
  };

  const goToDetails = () => {
    if (cart.length === 0) return;
    setStep("details");
  };

  const goToPayment = () => {
    if (!customerName.trim() || !deliveryAddress.trim()) {
      setDetailsError("Please fill in your name and delivery address.");
      return;
    }
    setDetailsError("");
    setStep("payment");
  };

  const resetCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    setStep("cart");
    setCustomerName("");
    setDeliveryAddress("");
    setCheckoutPhone("");
    setMpesaStatus("idle");
    setMpesaError("");
  };

  // ── WhatsApp message ────────────────────────────────────────────────────────

  const generateOrderMessage = () => {
    const items = cart
      .map((item) => `${item.quantity}x ${item.name} - KES ${(item.price * item.quantity).toLocaleString()}`)
      .join("\n");
    const message = encodeURIComponent(
      `Hello! I'd like to place an order:\n\n${items}\n\nTotal: KES ${totalPrice.toLocaleString()}\n\nName: ${customerName}\nDelivery Address: ${deliveryAddress}\n\nPlease send M-Pesa payment details.`
    );
    return `https://wa.me/254759318855?text=${message}`;
  };

  // ── Checkout handlers ───────────────────────────────────────────────────────

  const logOrder = async (isManual: boolean, phone?: string) => {
    await fetch("/api/contributions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalPrice,
        phoneNumber: phone || "WhatsApp User",
        donorName: `Shop Order: ${cart.length} item(s)`,
        isShopOrder: true,
        shopItems: cart.map((item) => `${item.quantity}x ${item.name}`).join(" | "),
        customerName,           // private — only in sheet
        deliveryAddress,        // private — only in sheet
        isManual,
      }),
    });
  };

  const handleMpesaCheckout = async () => {
    if (!checkoutPhone) {
      setMpesaError("Please enter your M-Pesa number.");
      return;
    }
    setIsProcessingMpesa(true);
    setMpesaError("");

    try {
      const response = await fetch("/api/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalPrice,
          phoneNumber: checkoutPhone,
          donorName: `Shop Order: ${cart.length} item(s)`,
          isShopOrder: true,
          shopItems: cart.map((item) => `${item.quantity}x ${item.name}`).join(" | "),
          customerName,
          deliveryAddress,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Payment failed");
      }

      setMpesaStatus("success");
      setTimeout(() => setStep("thankyou"), 1800);
    } catch (err: any) {
      setMpesaError(err.message || "Payment failed. Please try again.");
      setMpesaStatus("error");
    } finally {
      setIsProcessingMpesa(false);
    }
  };

  const handleWhatsAppCheckout = async () => {
    try {
      await logOrder(true);
    } catch (err) {
      console.error("Failed to log WhatsApp order:", err);
    }
    window.open(generateOrderMessage(), "_blank");
    setStep("thankyou");
  };

  // ── Step progress indicator ─────────────────────────────────────────────────

  const steps = ["cart", "details", "payment"];
  const stepLabels = ["Cart", "Your Details", "Payment"];
  const currentStepIndex = steps.indexOf(step);

  // ── Render ──────────────────────────────────────────────────────────────────

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
            onClick={openCart}
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

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Support the Movement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every purchase helps fund our constitutional education programs across all 47 counties in Kenya.
            </p>
          </div>

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
                  <h3 className="font-serif text-xl font-bold text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

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

      {/* Cart / Checkout Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => step === "cart" && setIsCartOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl animate-slide-in-right flex flex-col">

            {/* ─── THANK YOU SCREEN ──────────────────────────────────── */}
            {step === "thankyou" && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <Heart className="w-12 h-12 text-[#006B3F] fill-[#006B3F]" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-black mb-3">Asante Sana!</h2>
                <p className="text-gray-600 mb-2 text-lg font-medium">
                  Your order has been received.
                </p>
                <p className="text-gray-500 text-sm mb-8 max-w-xs leading-relaxed">
                  We'll confirm your order and reach out via WhatsApp or phone to arrange delivery. 
                  Thank you for supporting the Katiba Na Mia movement! 🇰🇪
                </p>
                <div className="w-full space-y-3">
                  <div className="p-4 bg-[#006B3F]/5 border border-[#006B3F]/20 rounded-xl text-sm text-left space-y-1">
                    <p className="font-semibold text-[#006B3F] mb-2 flex items-center gap-2">
                      <Package className="w-4 h-4" /> Order Summary
                    </p>
                    {cart.map((item) => (
                      <p key={item.id} className="text-gray-600">
                        {item.quantity}x {item.name} — KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    ))}
                    <div className="border-t border-[#006B3F]/20 mt-2 pt-2 font-bold text-black">
                      Total: KES {totalPrice.toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={resetCheckout}
                    className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-[#C8102E] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}

            {step !== "thankyou" && (
              <>
                {/* Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {step !== "cart" && (
                        <button
                          onClick={() => setStep(step === "payment" ? "details" : "cart")}
                          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      )}
                      <h2 className="font-serif text-xl font-bold text-black">
                        {step === "cart" ? "Your Cart" : step === "details" ? "Delivery Details" : "Payment"}
                      </h2>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-1">
                    {stepLabels.map((label, i) => (
                      <div key={i} className="flex items-center flex-1">
                        <div className={`flex-1 h-1.5 rounded-full transition-colors ${
                          i <= currentStepIndex ? "bg-[#006B3F]" : "bg-gray-200"
                        }`} />
                        {i < stepLabels.length - 1 && <div className="w-1" />}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {stepLabels.map((label, i) => (
                      <span key={i} className={`text-[10px] font-semibold uppercase tracking-wider ${
                        i <= currentStepIndex ? "text-[#006B3F]" : "text-gray-400"
                      }`}>{label}</span>
                    ))}
                  </div>
                </div>

                {/* ─── STEP 1: CART ─────────────────────────────────────── */}
                {step === "cart" && (
                  <div className="flex-1 p-6">
                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500">Your cart is empty</p>
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="mt-4 text-[#C8102E] hover:underline text-sm font-medium"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4 mb-6">
                          {cart.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                              <div className="relative w-20 h-20 flex-shrink-0">
                                <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-black text-sm">{item.name}</h4>
                                <p className="text-[#C8102E] font-bold text-sm">KES {item.price.toLocaleString()}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-200 rounded-md">
                                    <Minus className="w-3.5 h-3.5" />
                                  </button>
                                  <span className="w-7 text-center font-bold text-sm">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-200 rounded-md">
                                    <Plus className="w-3.5 h-3.5" />
                                  </button>
                                  <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1 text-red-400 hover:bg-red-50 rounded-md">
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t pt-4 space-y-2 mb-6">
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Subtotal</span>
                            <span className="font-semibold text-black">KES {totalPrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold text-[#006B3F]">Free</span>
                          </div>
                          <div className="flex justify-between text-base font-bold pt-2 border-t">
                            <span>Total</span>
                            <span className="text-[#C8102E]">KES {totalPrice.toLocaleString()}</span>
                          </div>
                        </div>

                        <button
                          onClick={goToDetails}
                          className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white font-semibold rounded-xl hover:bg-[#C8102E] transition-colors"
                        >
                          Continue to Details
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                )}

                {/* ─── STEP 2: CUSTOMER DETAILS ──────────────────────────── */}
                {step === "details" && (
                  <div className="flex-1 p-6">
                    <p className="text-xs text-gray-500 mb-5 p-3 bg-gray-50 rounded-lg border border-gray-200 leading-relaxed">
                      🔒 Your details are <strong>private</strong> and used only for order fulfilment. They are never displayed publicly.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                          Full Name <span className="text-[#C8102E]">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="e.g. Jane Wanjiku"
                            className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:border-transparent outline-none text-black text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                          Delivery Address <span className="text-[#C8102E]">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <textarea
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            placeholder="e.g. 123 Moi Avenue, Nairobi, Westlands"
                            rows={3}
                            className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:border-transparent outline-none text-black text-sm resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {detailsError && (
                      <p className="text-red-500 text-sm mb-4">{detailsError}</p>
                    )}

                    <button
                      onClick={goToPayment}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white font-semibold rounded-xl hover:bg-[#C8102E] transition-colors"
                    >
                      Continue to Payment
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* ─── STEP 3: PAYMENT ───────────────────────────────────── */}
                {step === "payment" && (
                  <div className="flex-1 p-6 space-y-5">
                    {/* Order mini-summary */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm">
                      <p className="font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                        <Package className="w-4 h-4" /> Order Total
                      </p>
                      <p className="text-2xl font-bold text-[#C8102E]">KES {totalPrice.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs mt-1">{totalItems} item(s) · Free shipping</p>
                    </div>

                    {/* M-Pesa */}
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-[#006B3F]" />
                        Pay via M-Pesa STK Push
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            value={checkoutPhone}
                            onChange={(e) => setCheckoutPhone(e.target.value)}
                            placeholder="e.g. +254 712 345 678"
                            className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006B3F] focus:border-transparent outline-none text-black text-sm"
                          />
                        </div>
                        <button
                          onClick={handleMpesaCheckout}
                          disabled={isProcessingMpesa || !checkoutPhone}
                          className="px-4 py-2.5 bg-[#006B3F] text-white font-semibold rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[90px]"
                        >
                          {isProcessingMpesa ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            "Pay Now"
                          )}
                        </button>
                      </div>

                      {mpesaError && <p className="text-red-500 text-xs mt-2">{mpesaError}</p>}
                      {mpesaStatus === "success" && (
                        <div className="mt-2 text-green-600 text-sm flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4" />
                          M-Pesa prompt sent! Enter your PIN to complete.
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="relative flex items-center">
                      <div className="flex-grow border-t border-gray-300" />
                      <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">OR</span>
                      <div className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* WhatsApp */}
                    <button
                      onClick={handleWhatsAppCheckout}
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Complete via WhatsApp
                    </button>
                    <p className="text-center text-xs text-gray-500">
                      We'll send M-Pesa payment details on WhatsApp
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
