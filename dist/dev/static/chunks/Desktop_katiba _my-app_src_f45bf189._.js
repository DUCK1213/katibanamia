(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/katiba /my-app/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navLinks = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/#about",
            label: "About"
        },
        {
            href: "/#take-action",
            label: "Take Action"
        },
        {
            href: "/shop",
            label: "Shop"
        },
        {
            href: "/contact",
            label: "Contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-serif text-xl font-bold text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#C8102E]",
                                    children: "Katiba"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                " Na Mia Mia"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "text-gray-300 hover:text-white transition-colors text-sm font-medium",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "flex items-center gap-2 px-4 py-2 bg-[#C8102E] text-white rounded-lg hover:bg-[#A00D25] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            className: "md:hidden p-2 text-white",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden py-4 border-t border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setIsMenuOpen(false),
                                className: "text-gray-300 hover:text-white transition-colors py-2",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Navbar, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const carouselImages = [
    {
        src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
        alt: "Katiba Mfukoni Book"
    },
    {
        src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
        alt: "Katiba Made Familiar Book"
    },
    {
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
        alt: "Constitution Book"
    },
    {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        alt: "Kenya Constitution"
    }
];
function Hero() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Loading effect - simulate initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timer = setTimeout({
                "Hero.useEffect.timer": ()=>{
                    setIsLoading(false);
                    setIsVisible(true);
                }
            }["Hero.useEffect.timer"], 1500);
            return ({
                "Hero.useEffect": ()=>clearTimeout(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Carousel auto-advance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (isLoading) return;
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "Hero.useEffect.interval": (prev)=>(prev + 1) % carouselImages.length
                    }["Hero.useEffect.interval"]);
                }
            }["Hero.useEffect.interval"], 5000);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        isLoading
    ]);
    const handleImageLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[handleImageLoad]": ()=>{
            setImagesLoaded({
                "Hero.useCallback[handleImageLoad]": (prev)=>prev + 1
            }["Hero.useCallback[handleImageLoad]"]);
        }
    }["Hero.useCallback[handleImageLoad]"], []);
    // Loading spinner component
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center z-10 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-serif text-4xl md:text-6xl font-extrabold text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block animate-bounce",
                                            style: {
                                                animationDelay: "0s"
                                            },
                                            children: "K"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block animate-bounce",
                                            style: {
                                                animationDelay: "0.1s"
                                            },
                                            children: "a"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block animate-bounce",
                                            style: {
                                                animationDelay: "0.2s"
                                            },
                                            children: "t"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block animate-bounce",
                                            style: {
                                                animationDelay: "0.3s"
                                            },
                                            children: "i"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block animate-bounce",
                                            style: {
                                                animationDelay: "0.4s"
                                            },
                                            children: "b"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block animate-bounce",
                                            style: {
                                                animationDelay: "0.5s"
                                            },
                                            children: "a"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#C8102E] text-xl mt-2 animate-pulse",
                                    children: "Na Mia Mia"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-[#C8102E] to-[#006B3F] transition-all duration-300",
                                style: {
                                    width: `${Math.min(imagesLoaded / carouselImages.length * 100 + 20, 100)}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-sm mt-4 animate-pulse",
                            children: "Loading Constitutional Education..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#006B3F]/20 rounded-full blur-3xl animate-pulse",
                            style: {
                                animationDelay: "0.5s"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-black text-[#FAF9F7]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    carouselImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-30 scale-100" : "opacity-0 scale-105"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image.src,
                                    alt: image.alt,
                                    fill: true,
                                    className: "object-cover",
                                    priority: index === 0,
                                    onLoad: handleImageLoad,
                                    sizes: "100vw"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 grayscale mix-blend-luminosity"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-20 w-72 h-72 bg-[#C8102E]/10 rounded-full blur-3xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-20 w-96 h-96 bg-[#006B3F]/10 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: '1s'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2",
                children: carouselImages.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentSlide(index),
                        className: `h-1 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-[#C8102E] w-12" : "bg-white/30 hover:bg-white/50 w-8"}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block px-6 py-2 bg-[#C8102E] text-white font-semibold text-sm tracking-widest uppercase mb-8 shadow-lg shadow-[#C8102E]/30",
                            style: {
                                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                                opacity: 0
                            },
                            children: "Civic Education Movement"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    style: {
                                        animation: isVisible ? 'slideInUp 0.8s ease-out 0.1s forwards' : 'none',
                                        opacity: 0,
                                        transform: 'translateY(30px)'
                                    },
                                    children: "Katiba"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[#C8102E]",
                                    style: {
                                        animation: isVisible ? 'slideInUp 0.8s ease-out 0.3s forwards' : 'none',
                                        opacity: 0,
                                        transform: 'translateY(30px)'
                                    },
                                    children: "Na Mia Mia"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl md:text-3xl max-w-2xl mb-10 text-gray-200 leading-relaxed",
                            style: {
                                animation: isVisible ? 'fadeIn 0.8s ease-out 0.5s forwards' : 'none',
                                opacity: 0
                            },
                            children: "Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music. A 47-week journey across all counties, every Wednesday to Friday."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            style: {
                                animation: isVisible ? 'fadeIn 0.8s ease-out 0.7s forwards' : 'none',
                                opacity: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#take-action",
                                    className: "group inline-flex items-center gap-3 px-8 py-4 bg-[#C8102E] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#A00D25] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C8102E]/30 hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Take Action Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "transition-transform group-hover:translate-x-1",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    className: "group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Learn More"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 z-10",
                style: {
                    transform: 'translateX(-50%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2 text-white/80 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer animate-bounce",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            children: "↓"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Hero.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Hero, "cUgAPlrU39aqH18zsHcthG0smyk=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StatItem({ number, label, delay }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatItem.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "StatItem.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "StatItem.useEffect": ()=>setIsVisible(true)
                        }["StatItem.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["StatItem.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "StatItem.useEffect": ()=>observer.disconnect()
            })["StatItem.useEffect"];
        }
    }["StatItem.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-700 hover:scale-105 hover:bg-white/15 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-5xl md:text-6xl font-serif font-extrabold mb-2 transition-colors hover:text-[#D4AF37]",
                children: number
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm uppercase tracking-widest opacity-90",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(StatItem, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = StatItem;
function Stats() {
    const stats = [
        {
            number: "47",
            label: "Weeks • Counties"
        },
        {
            number: "6",
            label: "Action Areas"
        },
        {
            number: "3",
            label: "Days Weekly (Wed-Fri)"
        },
        {
            number: "∞",
            label: "Impact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#006B3F] text-white py-16 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
                children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                        number: stat.number,
                        label: stat.label,
                        delay: index * 100
                    }, stat.label, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Stats.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = Stats;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatItem");
__turbopack_context__.k.register(_c1, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AboutCard({ title, content, delay }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AboutCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "AboutCard.useEffect": ()=>setIsVisible(true)
                        }["AboutCard.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["AboutCard.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "AboutCard.useEffect": ()=>observer.disconnect()
            })["AboutCard.useEffect"];
        }
    }["AboutCard.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `group relative p-8 bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white/90 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-1 h-0 bg-[#C8102E] transition-all duration-500 group-hover:h-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif text-2xl font-bold mb-4 text-black transition-colors group-hover:text-[#C8102E]",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 leading-relaxed transition-colors group-hover:text-gray-800",
                children: content
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(AboutCard, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = AboutCard;
function About() {
    const aboutCards = [
        {
            title: "Who We Are",
            content: "Katiba Na Mia is a civic education movement led by Ng'ang'a Muigai. We simplify Kenya's Constitution for citizens in both Kiswahili and English, committed to taking constitutional knowledge directly to the people at the grassroots level."
        },
        {
            title: "What We Do",
            content: "We conduct civic education and public engagement on constitutional matters across Kenya. Our mission is to make the Constitution accessible and empower citizens with knowledge of their rights and responsibilities through community engagement."
        },
        {
            title: "When We Act",
            content: "As a 47 weeks project, we conduct civic education on a weekly basis in every county from Wednesdays to Fridays. One county, one week at a time, until every Kenyan has access to constitutional knowledge."
        },
        {
            title: "How We Engage",
            content: "We engage and teach through interactive debates, katiba literacy tests, and use music performances for mobilization. Our approach makes constitutional education dynamic, memorable, and accessible to all."
        },
        {
            title: "Why We Exist",
            content: "We are pushing for transformative changes through the KAMAU AGENDA: making the Constitution a mandatory subject in schools, establishing education infrastructure standards, creating a chronic diseases fund, reforming elections, and standardizing devolution."
        },
        {
            title: "Our Impact",
            content: "Through petitions, policy drafting, bill creation, and grassroots education, we're liberating future generations from the shackles of ignorance. Knowledge is power, and constitutional literacy is the foundation of democratic participation."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "bg-[#FAF9F7] py-24 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4",
                            children: "About Us"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight",
                            children: [
                                "Constitutional Education",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                                    lineNumber: 96,
                                    columnNumber: 37
                                }, this),
                                "at the Grassroots"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: aboutCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutCard, {
                            title: card.title,
                            content: card.content,
                            delay: index * 100
                        }, card.title, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/About.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c1 = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "AboutCard");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActionAreas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/sprout.js [app-client] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/bike.js [app-client] (ecmascript) <export default as Bike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/school.js [app-client] (ecmascript) <export default as School>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AreaCard({ icon, title, description, delay }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AreaCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AreaCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "AreaCard.useEffect": ()=>setIsVisible(true)
                        }["AreaCard.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["AreaCard.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "AreaCard.useEffect": ()=>observer.disconnect()
            })["AreaCard.useEffect"];
        }
    }["AreaCard.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `group relative p-8 bg-white/80 backdrop-blur-sm border-t-4 border-[#006B3F] border-x border-b border-white/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#006B3F]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-0 h-1 bg-[#C8102E] transition-all duration-500 group-hover:w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 bg-[#006B3F] text-white flex items-center justify-center mb-6 text-2xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-[#C8102E] group-hover:scale-110 shadow-lg",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-serif text-xl font-bold mb-3 text-black transition-colors group-hover:text-[#006B3F] group-hover:translate-x-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(AreaCard, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = AreaCard;
function ActionAreas() {
    const areas = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            title: "Bunge la Mwananchi",
            description: "Engaging with citizen forums and community discussions at People's Parliament gatherings across the nation."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            title: "Farmers Markets",
            description: "Reaching agricultural communities and rural populations where they gather, bringing constitutional knowledge to the heart of Kenya's economy."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            title: "Higher Learning Institutions",
            description: "Conducting civic education tours in universities like Moi University, empowering the next generation of leaders."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__["Bike"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            title: "Bodaboda Stages",
            description: "Connecting with transport workers and commuters at motorcycle taxi stages, reaching citizens in their daily routines."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            title: "Jua Kali Sectors",
            description: "Engaging with artisans and informal sector workers, ensuring constitutional knowledge reaches every working Kenyan."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            title: "High Schools",
            description: "Reaching the youth where they learn, planting seeds of constitutional literacy in secondary schools across Kenya."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-b from-[#F5F3EF] to-[#FAF9F7] py-24 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4",
                            children: "Where We Work"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight",
                            children: [
                                "Six Action Areas",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                                    lineNumber: 101,
                                    columnNumber: 29
                                }, this),
                                "in Every County"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: areas.map((area, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AreaCard, {
                            icon: area.icon,
                            title: area.title,
                            description: area.description,
                            delay: index * 100
                        }, area.title, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/ActionAreas.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = ActionAreas;
var _c, _c1;
__turbopack_context__.k.register(_c, "AreaCard");
__turbopack_context__.k.register(_c1, "ActionAreas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KamauAgenda
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AgendaCard({ letter, title, subtitle, description, delay }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgendaCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AgendaCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "AgendaCard.useEffect": ()=>setIsVisible(true)
                        }["AgendaCard.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["AgendaCard.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "AgendaCard.useEffect": ()=>observer.disconnect()
            })["AgendaCard.useEffect"];
        }
    }["AgendaCard.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `group relative p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 border-l-[5px] border-l-[#C8102E] transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[#C8102E]/50 hover:shadow-2xl hover:shadow-[#C8102E]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#C8102E]/10 to-transparent transition-all duration-700 group-hover:left-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-0 h-1 bg-[#006B3F] transition-all duration-500 group-hover:w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-20 bg-[#C8102E] text-white flex items-center justify-center font-serif text-4xl font-extrabold mb-6 transition-all duration-500 group-hover:rotate-[10deg] group-hover:bg-[#006B3F] group-hover:scale-110 shadow-lg shadow-[#C8102E]/30",
                children: letter
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm uppercase tracking-widest text-gray-400 mb-1 block",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif text-2xl font-bold mb-4 text-white transition-colors group-hover:text-[#D4AF37]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 leading-relaxed",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(AgendaCard, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = AgendaCard;
function KamauAgenda() {
    const agendaItems = [
        {
            letter: "K",
            title: "Katiba",
            subtitle: "Constitution",
            description: "Pushing for the Constitution of Kenya to be established as a full mandatory and examinable subject in the basic education curriculum. Constitutional literacy must start in the classroom."
        },
        {
            letter: "A",
            title: "Masomo",
            subtitle: "Education",
            description: "Establishment of basic infrastructure standards for classrooms, administration blocks, libraries, dormitories, and teachers quarters in every public school in Kenya. Quality education requires quality infrastructure."
        },
        {
            letter: "M",
            title: "Afya",
            subtitle: "Health",
            description: "Establishment of a chronic diseases fund separate from the health budget. Kenyans battling long-term illnesses deserve dedicated, sustainable support beyond general healthcare funding."
        },
        {
            letter: "A",
            title: "Uchaguzi",
            subtitle: "Elections",
            description: "Limit the recall process of members of parliament to the High Court under the Elections Act. Ensuring accountability while maintaining judicial oversight and democratic integrity."
        },
        {
            letter: "U",
            title: "Ugatuzi",
            subtitle: "Devolution",
            description: "Establish a devolution prototype to serve as the basic development standard for every county. Equal opportunities and resources for all Kenyans, regardless of geographic location."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#006B3F]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4",
                                children: "The KAMAU Agenda"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",
                                children: [
                                    "Why We Fight:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                                        lineNumber: 120,
                                        columnNumber: 26
                                    }, this),
                                    "Five Pillars for Change"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-3xl mx-auto text-lg text-gray-300",
                                children: "We are seeking transformative constitutional and policy changes that will reshape Kenya's future. The KAMAU Agenda represents our commitment to systemic reform across five critical areas."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: agendaItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgendaCard, {
                                letter: item.letter,
                                title: item.title,
                                subtitle: item.subtitle,
                                description: item.description,
                                delay: index * 100
                            }, item.letter, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/KamauAgenda.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c1 = KamauAgenda;
var _c, _c1;
__turbopack_context__.k.register(_c, "AgendaCard");
__turbopack_context__.k.register(_c1, "KamauAgenda");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
;
function CTACard({ icon, title, description, buttonText, buttonHref, isExternal, iconBgColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative p-8 bg-white/5 backdrop-blur-sm border-2 border-white/15 transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 hover:border-[#C8102E]/50 hover:shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-[#C8102E]/15 via-[#006B3F]/15 to-transparent rounded-full rotate-0 transition-transform duration-1000 group-hover:rotate-180"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#C8102E] to-[#006B3F] opacity-0 transition-opacity duration-500 group-hover:opacity-15 -z-10"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-20 h-20 ${iconBgColor} text-white flex items-center justify-center mb-6 text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-5 shadow-lg`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif text-2xl font-bold mb-4 text-white transition-all duration-300 group-hover:text-[#D4AF37] group-hover:translate-x-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: buttonHref,
                        target: isExternal ? "_blank" : undefined,
                        rel: isExternal ? "noopener noreferrer" : undefined,
                        className: "group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#C8102E] text-white font-semibold transition-all duration-300 hover:bg-[#A00D25] hover:shadow-lg hover:shadow-[#C8102E]/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: buttonText
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            isExternal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transition-transform group-hover/btn:translate-x-1",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = CTACard;
function CTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "take-action",
        className: "jsx-3e37b5f599f63fe7" + " " + "relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3e37b5f599f63fe7" + " " + "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundSize: '200% 100%',
                            animation: 'gradientShift 15s ease infinite'
                        },
                        className: "jsx-3e37b5f599f63fe7" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-[#C8102E]/10 to-transparent opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundSize: '200% 100%',
                            animation: 'gradientShift 15s ease infinite reverse'
                        },
                        className: "jsx-3e37b5f599f63fe7" + " " + "absolute inset-0 bg-gradient-to-l from-transparent via-[#006B3F]/10 to-transparent opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3e37b5f599f63fe7",
                children: "@keyframes gradientShift{0%,to{background-position:0%}50%{background-position:100%}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3e37b5f599f63fe7" + " " + "relative z-10 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3e37b5f599f63fe7" + " " + "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-3e37b5f599f63fe7" + " " + "font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6",
                                children: "Take Action Today"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-3e37b5f599f63fe7" + " " + "max-w-3xl mx-auto text-lg text-gray-300",
                                children: "Join thousands of Kenyans in the movement to make constitutional education accessible to all. Every signature and every copy requested brings us closer to an informed nation."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3e37b5f599f63fe7" + " " + "grid md:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTACard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, void 0),
                                title: "Sign the Petition",
                                description: "Help us make the Constitution a mandatory, examinable subject in schools from primary through tertiary education. Support our Katiba Shuleni 2026 parliamentary petition.",
                                buttonText: "Sign on Change.org",
                                buttonHref: "https://www.change.org/p/katiba-shuleni-2026",
                                isExternal: true,
                                iconBgColor: "bg-[#C8102E]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTACard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, void 0),
                                title: "Get Katiba Made Familiar",
                                description: "Request your copy of 'Katiba Made Familiar' - the simplified version of Kenya's Constitution in English or Kiswahili. Constitutional knowledge made accessible.",
                                buttonText: "Call 0759 318 855",
                                buttonHref: "tel:0759318855",
                                iconBgColor: "bg-[#006B3F]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTACard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                    lineNumber: 114,
                                    columnNumber: 19
                                }, void 0),
                                title: "Support Our Movement",
                                description: "Your contribution powers civic education across 47 counties. Help us reach every Kenyan with constitutional knowledge. Every shilling counts in this movement.",
                                buttonText: "M-Pesa: 0759 318 855",
                                buttonHref: "tel:0759318855",
                                iconBgColor: "bg-[#C8102E]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/CTA.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c1 = CTA;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTACard");
__turbopack_context__.k.register(_c1, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/hooks/useScrollAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyLoad",
    ()=>useLazyLoad,
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function useScrollAnimation(options = {}) {
    _s();
    const { threshold = 0.1, triggerOnce = true, rootMargin = "0px" } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimation.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            const observer = new IntersectionObserver({
                "useScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (triggerOnce) {
                            observer.unobserve(element);
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false);
                    }
                }
            }["useScrollAnimation.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(element);
            return ({
                "useScrollAnimation.useEffect": ()=>observer.disconnect()
            })["useScrollAnimation.useEffect"];
        }
    }["useScrollAnimation.useEffect"], [
        threshold,
        triggerOnce,
        rootMargin
    ]);
    return {
        ref,
        isVisible
    };
}
_s(useScrollAnimation, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
function useLazyLoad() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldLoad, setShouldLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLazyLoad.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            const observer = new IntersectionObserver({
                "useLazyLoad.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                }
            }["useLazyLoad.useEffect"], {
                threshold: 0,
                rootMargin: "200px"
            });
            observer.observe(element);
            return ({
                "useLazyLoad.useEffect": ()=>observer.disconnect()
            })["useLazyLoad.useEffect"];
        }
    }["useLazyLoad.useEffect"], []);
    return {
        ref,
        shouldLoad
    };
}
_s1(useLazyLoad, "W8LnvTFQe4JuSWMkobjO6+gfbyo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Programs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$src$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/src/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const programs = [
    {
        emoji: "🎪",
        title: "Katiba Festival",
        color: "from-[#C8102E] to-[#ff4757]"
    },
    {
        emoji: "🇰🇪",
        title: "Katiba Na Mia",
        color: "from-[#006B3F] to-[#2ed573]"
    },
    {
        emoji: "🎬",
        title: "Katiba Movie Nights",
        color: "from-[#1a1a1a] to-[#535c68]"
    },
    {
        emoji: "🚶",
        title: "Katiba Walks",
        color: "from-[#C8102E] to-[#ff6b81]"
    },
    {
        emoji: "🏃",
        title: "Katiba Marathon",
        color: "from-[#006B3F] to-[#7bed9f]"
    },
    {
        emoji: "🌳",
        title: "Katiba Tree Donations",
        color: "from-[#2d5016] to-[#7bed9f]"
    },
    {
        emoji: "📋",
        title: "Public Interest Petitions",
        color: "from-[#1a1a1a] to-[#70a1ff]"
    },
    {
        emoji: "📜",
        title: "Drafting Bills",
        color: "from-[#C8102E] to-[#ff6348]"
    },
    {
        emoji: "📑",
        title: "Drafting Policies",
        color: "from-[#006B3F] to-[#26de81]"
    },
    {
        emoji: "🗳️",
        title: "Drafting Manifestos",
        color: "from-[#1a1a1a] to-[#778ca3]"
    },
    {
        emoji: "👥",
        title: "Katiba Clubs",
        color: "from-[#C8102E] to-[#ff9f43]"
    },
    {
        emoji: "⭐",
        title: "Leadership Branding",
        color: "from-[#006B3F] to-[#20bf6b]"
    },
    {
        emoji: "🎵",
        title: "Katiba Music Playlists",
        color: "from-[#8b5cf6] to-[#ec4899]"
    },
    {
        emoji: "📹",
        title: "Documentaries",
        color: "from-[#1a1a1a] to-[#a4b0be]"
    }
];
function Programs() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { ref: sectionRef, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$src$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.1
    });
    const scroll = (direction)=>{
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "jsx-e4c0ee4aadd7f829" + " " + "bg-[#FAF9F7] py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e4c0ee4aadd7f829" + " " + "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e4c0ee4aadd7f829" + " " + `mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e4c0ee4aadd7f829" + " " + "inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4",
                                children: "Our Programs"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e4c0ee4aadd7f829" + " " + "flex items-end justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e4c0ee4aadd7f829",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-e4c0ee4aadd7f829" + " " + "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6",
                                                children: [
                                                    "Engaging Kenya",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "jsx-e4c0ee4aadd7f829"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 31
                                                    }, this),
                                                    "Through Action"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-e4c0ee4aadd7f829" + " " + "max-w-3xl text-lg text-gray-600",
                                                children: "From festivals to marathons, policy drafting to music playlists, we engage Kenyans through diverse programs that make constitutional education accessible, memorable, and actionable."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e4c0ee4aadd7f829" + " " + "hidden md:flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scroll("left"),
                                                className: "jsx-e4c0ee4aadd7f829" + " " + "p-3 rounded-full bg-white shadow-lg hover:bg-[#C8102E] hover:text-white transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scroll("right"),
                                                className: "jsx-e4c0ee4aadd7f829" + " " + "p-3 rounded-full bg-white shadow-lg hover:bg-[#C8102E] hover:text-white transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        style: {
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        },
                        className: "jsx-e4c0ee4aadd7f829" + " " + "flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory",
                        children: programs.map((program, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    transitionDelay: `${index * 50}ms`
                                },
                                className: "jsx-e4c0ee4aadd7f829" + " " + `group flex-shrink-0 w-72 snap-start transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c0ee4aadd7f829" + " " + "relative h-96 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c0ee4aadd7f829" + " " + `absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c0ee4aadd7f829" + " " + "relative h-full flex flex-col items-center justify-center p-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "text-6xl mb-6 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12",
                                                    children: program.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "font-serif text-xl font-bold text-black mb-4",
                                                    children: program.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + `w-16 h-1 bg-gradient-to-r ${program.color} rounded-full transform origin-left transition-all duration-500 group-hover:w-full`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c0ee4aadd7f829" + " " + `absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, program.title, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e4c0ee4aadd7f829" + " " + "md:hidden flex items-center justify-center gap-2 mt-6 text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e4c0ee4aadd7f829" + " " + "text-sm",
                                children: "Swipe to explore"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-5 h-5 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e4c0ee4aadd7f829",
                children: ".scrollbar-hide::-webkit-scrollbar{display:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Programs.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Programs, "kFjmPYMfXEtiNW3y9Ptw6GSafWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$src$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Programs;
var _c;
__turbopack_context__.k.register(_c, "Programs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Revenue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RevenueCard({ icon, title, description, linkText, linkHref, delay }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RevenueCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "RevenueCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "RevenueCard.useEffect": ()=>setIsVisible(true)
                        }["RevenueCard.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["RevenueCard.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "RevenueCard.useEffect": ()=>observer.disconnect()
            })["RevenueCard.useEffect"];
        }
    }["RevenueCard.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `group p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:border-[#C8102E]/50 hover:shadow-2xl hover:shadow-[#C8102E]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-20 mx-auto bg-[#C8102E]/20 backdrop-blur-sm text-white flex items-center justify-center text-3xl mb-6 rounded-full transition-all duration-400 group-hover:bg-[#C8102E] group-hover:scale-110 group-hover:rotate-10 shadow-lg",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif text-2xl font-bold mb-4 text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 mb-6 leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: linkHref,
                className: "inline-flex items-center gap-2 text-[#D4AF37] font-semibold transition-all duration-300 hover:text-white hover:translate-x-2",
                children: [
                    linkText,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(RevenueCard, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = RevenueCard;
function Revenue() {
    const revenueItems = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            title: "Get Our Book",
            description: "Katiba Made Familiar - the Constitution simplified in English and Kiswahili",
            linkText: "Order Now",
            linkHref: "tel:0759318855"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            title: "Katiba Movie Nights",
            description: "Join us for Katiba Classic Movie Night and Storytelling events",
            linkText: "Learn More",
            linkHref: "tel:0759318855"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            title: "Branded Merch",
            description: "T-shirts, hoodies, and sweatshirts - wear the movement",
            linkText: "Shop Now",
            linkHref: "tel:0759318855"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            title: "Make a Donation",
            description: "Send M-Pesa to 0759 318 855 - every contribution fuels civic education",
            linkText: "Donate Now",
            linkHref: "tel:0759318855"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#1a1a1a] to-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 left-1/4 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#006B3F]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4",
                                children: "Support the Movement"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
                                children: [
                                    "Multiple Ways",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                                        lineNumber: 113,
                                        columnNumber: 26
                                    }, this),
                                    "to Get Involved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: revenueItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevenueCard, {
                                icon: item.icon,
                                title: item.title,
                                description: item.description,
                                linkText: item.linkText,
                                linkHref: item.linkHref,
                                delay: index * 100
                            }, item.title, false, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Revenue.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c1 = Revenue;
var _c, _c1;
__turbopack_context__.k.register(_c, "RevenueCard");
__turbopack_context__.k.register(_c1, "Revenue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TeamMember({ initial, name, role, delay }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamMember.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TeamMember.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "TeamMember.useEffect": ()=>setIsVisible(true)
                        }["TeamMember.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["TeamMember.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "TeamMember.useEffect": ()=>observer.disconnect()
            })["TeamMember.useEffect"];
        }
    }["TeamMember.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `group p-8 bg-white/80 backdrop-blur-sm border-2 border-[#006B3F]/10 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white hover:border-[#006B3F]/30 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#006B3F]/10 to-transparent transition-all duration-400 group-hover:h-full -z-10"
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-20 mx-auto bg-[#006B3F] text-white flex items-center justify-center font-serif text-3xl font-extrabold mb-6 rounded-full transition-all duration-500 group-hover:bg-[#C8102E] group-hover:rotate-[360deg] group-hover:scale-110 shadow-lg shadow-[#006B3F]/30 group-hover:shadow-[#C8102E]/30",
                children: initial
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif text-xl font-bold mb-2 text-black transition-colors group-hover:text-[#006B3F]",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-sm",
                children: role
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(TeamMember, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
_c = TeamMember;
function Team() {
    const teamMembers = [
        {
            initial: "N",
            name: "Ng'ang'a Muigai",
            role: "Founder & Lead Educator"
        },
        {
            initial: "M",
            name: "Moses Nduati",
            role: "Team Member"
        },
        {
            initial: "R",
            name: "Rafique Mohamed",
            role: "Team Member"
        },
        {
            initial: "A",
            name: "Athman Ngala",
            role: "Team Member"
        },
        {
            initial: "J",
            name: "Joy Kamande",
            role: "Team Member"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-b from-[#F5F3EF] to-[#FAF9F7] py-24 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block text-[#C8102E] font-bold text-sm tracking-[0.2em] uppercase mb-4",
                            children: "Our Team"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight",
                            children: [
                                "The People Behind",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                                    lineNumber: 75,
                                    columnNumber: 30
                                }, this),
                                "the Movement"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: teamMembers.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamMember, {
                            initial: member.initial,
                            name: member.name,
                            role: member.role,
                            delay: index * 100
                        }, member.name, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Team.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c1 = Team;
var _c, _c1;
__turbopack_context__.k.register(_c, "TeamMember");
__turbopack_context__.k.register(_c1, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Partners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const partners = [
    {
        name: "Kenya National Commission on Human Rights",
        logo: "KNCHR"
    },
    {
        name: "The Constitution of Kenya",
        logo: "COK"
    },
    {
        name: "Kenya Law Reform Commission",
        logo: "KLRC"
    },
    {
        name: "National Cohesion and Integration Commission",
        logo: "NCIC"
    },
    {
        name: "United Nations Development Programme",
        logo: "UNDP"
    },
    {
        name: "Ford Foundation",
        logo: "Ford"
    },
    {
        name: "Open Society Foundations",
        logo: "OSF"
    },
    {
        name: "Hivos International",
        logo: "Hivos"
    }
];
function Partners() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Partners.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Partners.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["Partners.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "Partners.useEffect": ()=>observer.disconnect()
            })["Partners.useEffect"];
        }
    }["Partners.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "jsx-a286851d01dd566" + " " + "bg-black py-16 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a286851d01dd566" + " " + "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "jsx-a286851d01dd566" + " " + `text-center text-gray-400 text-sm uppercase tracking-widest transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                    children: "Proudly Partnered With"
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a286851d01dd566" + " " + "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a286851d01dd566" + " " + "flex animate-scroll-x",
                    children: [
                        ...partners,
                        ...partners
                    ].map((partner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transitionDelay: `${index % partners.length * 100}ms`
                            },
                            className: "jsx-a286851d01dd566" + " " + `flex-shrink-0 mx-8 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/10 hover:border-[#C8102E]/30 hover:scale-105 ${isVisible ? "opacity-100" : "opacity-0"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a286851d01dd566" + " " + "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a286851d01dd566" + " " + "w-12 h-12 bg-gradient-to-br from-[#C8102E] to-[#006B3F] rounded-lg flex items-center justify-center text-white font-bold text-lg",
                                        children: partner.logo.slice(0, 2)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-a286851d01dd566" + " " + "text-white font-medium whitespace-nowrap",
                                        children: partner.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a286851d01dd566",
                children: "@keyframes scroll-x{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-scroll-x.jsx-a286851d01dd566{animation:30s linear infinite scroll-x}.animate-scroll-x.jsx-a286851d01dd566:hover{animation-play-state:paused}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Partners.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Partners, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = Partners;
var _c;
__turbopack_context__.k.register(_c, "Partners");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/katiba /my-app/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
"use client";
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    // WhatsApp integration - pre-filled message
    const whatsappNumber = "254759318855";
    const whatsappMessage = encodeURIComponent("Hello! I'm interested in learning more about Katiba Na Mia and your constitutional education programs.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    className: "font-serif text-2xl md:text-3xl italic mb-10 text-gray-200",
                    children: "“Knowledge is power. Let's liberate our future generations from the shackles of ignorance.”"
                }, void 0, false, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl max-w-lg mx-auto mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-6 text-[#D4AF37]",
                            children: "Get in Touch:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: whatsappLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center gap-3 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg text-[#25D366] hover:bg-[#25D366]/20 transition-all hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Chat on WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm opacity-70",
                                            children: "(Fastest Response)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:0759318855",
                                    className: "flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "0759 318 855"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:katibangangamuigai@gmail.com",
                                    className: "flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "katibangangamuigai@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:katibanamiamia@gmail.com",
                                    className: "flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "katibanamiamia@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-6 mb-8 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/shop",
                            className: "text-gray-400 hover:text-[#D4AF37] transition-colors",
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#about",
                            className: "text-gray-400 hover:text-[#D4AF37] transition-colors",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#take-action",
                            className: "text-gray-400 hover:text-[#D4AF37] transition-colors",
                            children: "Take Action"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.change.org/p/katiba-shuleni-2026",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-gray-400 hover:text-[#D4AF37] transition-colors",
                            children: "Sign Petition"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$katiba__$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: [
                        "© ",
                        currentYear,
                        " Katiba Na Mia. Constitutional Education for All Kenyans."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/katiba /my-app/src/components/sections/Footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_katiba%20_my-app_src_f45bf189._.js.map