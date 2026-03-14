/**
 * Alta Pinta UI Components
 */

export const UI = {
    renderSplashScreen: () => {
        return `
            <div id="splash-screen" class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-1000">
                <div class="relative flex flex-col items-center">
                    <!-- PNG Logo Animation (CINEMATIC) -->
                    <div class="mb-14 animate-pulse">
                        <img src="assets/images/logo.png" alt="Alta Pinta Logo" class="h-[70vh] md:h-[85vh] w-auto object-contain">
                    </div>
                    
                    <!-- Loading Bar Container -->
                    <div class="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                        <div id="splash-progress" class="absolute top-0 left-0 h-full bg-alta-neon w-0 transition-all duration-[2000ms] ease-out"></div>
                    </div>
                    
                    <div class="mt-4">
                        <span class="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] animate-pulse">EST. 2026 — LANZAMIENTO PREMIUM</span>
                    </div>
                </div>
            </div>
        `;
    },

    renderHome: () => {
        return `
            <!-- Hero Section -->
            <section class="relative min-h-[80vh] flex flex-col justify-end pb-12 px-6 overflow-hidden">
                <div class="absolute inset-0 z-0">
                    <img alt="Main Fashion Model" class="w-full h-full object-cover grayscale brightness-75 animate-fade-in"
                        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000" />
                    <div class="absolute inset-0 bg-gradient-to-t from-alta-black via-transparent to-transparent"></div>
                </div>
                <div class="relative z-10 space-y-4">
                    <h2 class="text-alta-neon font-bold tracking-[0.2em] uppercase text-xs neon-glow">EDICIONES LIMITADAS</h2>
                    <h1 class="text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                        URBAN<br />
                        PREMIUM <span class="text-alta-neon">STYLE</span>
                    </h1>
                    <p class="text-gray-400 text-sm max-w-[280px]">Diseño exclusivo y calidad premium. Alta Pinta: Definimos la cultura de las calles.</p>
                    <div class="pt-6">
                        <button onclick="App.scrollToProducts()" class="bg-alta-neon text-black font-black uppercase py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(166,255,0,0.4)]">COMPRAR AHORA</button>
                    </div>
                </div>
            </section>

            <!-- Brand Manifesto Section -->
            <section class="bg-alta-black py-20 px-6 relative overflow-hidden">
                <!-- Industrial Decoration -->
                <div class="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-alta-neon/20 -translate-x-4 -translate-y-4"></div>
                <div class="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-alta-neon/20 translate-x-4 translate-y-4"></div>
                
                <div class="max-w-4xl mx-auto space-y-8 relative z-10">
                    <div class="flex items-center space-x-4">
                        <span class="bg-alta-neon text-black text-[10px] font-black px-2 py-1 italic uppercase tracking-tighter shadow-[0_0_15px_rgba(166,255,0,0.3)]">EST 2024</span>
                        <div class="h-px flex-1 bg-white/10"></div>
                    </div>
                    
                    <div class="space-y-4">
                        <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                            MANIFIESTO <br> <span class="text-alta-neon">ALTA PINTA</span>
                        </h2>
                        <p class="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-2 border-alta-neon/30 pl-6 py-2">
                            No es solo ropa. Es la armadura de la calle. Nacidos en el asfalto, diseñados para el caos urbano. Calidad industrial, estética cruda y <span class="text-white font-black italic">ADN de barrio</span>.
                        </p>
                    </div>

                    <div class="flex justify-end">
                        <div class="text-right">
                            <p class="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Cultura • Respeto • Estilo</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Lifestyle Banner Section (NEW - Wide Aspect) -->
            <section class="w-full overflow-hidden bg-black py-4">
                <div class="relative w-full aspect-[21/9] md:aspect-[32/9] group">
                    <img src="assets/images/lifestyle_banner.png" alt="Urban Lifestyle" class="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
                    <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <h3 class="text-alta-neon font-black italic tracking-[0.5em] text-[10px] md:text-sm uppercase opacity-50">Cultura de Calle</h3>
                            <h2 class="text-white font-black text-4xl md:text-7xl uppercase tracking-tighter italic">ALTA PINTA <span class="text-alta-neon">GANG</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Marquee Section -->
            <section class="industrial-banner overflow-hidden py-16">
                <!-- First Strip (Neon) -->
                <div class="marquee-strip mb-4 whitespace-nowrap overflow-hidden">
                    <div class="inline-block animate-fwd">
                        <span class="text-black font-black text-4xl md:text-6xl uppercase mx-12 italic">ALTA PINTA | MODA URBANA •</span>
                        <span class="text-black font-black text-4xl md:text-6xl uppercase mx-12 italic">EDICIONES LIMITADAS •</span>
                        <span class="text-black font-black text-4xl md:text-6xl uppercase mx-12 italic">CALIDAD ANTE TODO •</span>
                        <span class="text-black font-black text-4xl md:text-6xl uppercase mx-12 italic">Colección Waza •</span>
                    </div>
                </div>
                
                <!-- Second Strip (Black/Neon) -->
                <div class="marquee-strip-reverse whitespace-nowrap overflow-hidden">
                    <div class="inline-block animate-rev">
                        <span class="font-black text-2xl md:text-4xl uppercase mx-12">DISEÑO EXCLUSIVO • CALIDAD PREMIUM • ESTILO URBANA • ALTA PINTA • LANZAMIENTOS PREMIUM •</span>
                        <span class="font-black text-2xl md:text-4xl uppercase mx-12">DISEÑO EXCLUSIVO • CALIDAD PREMIUM • ESTILO URBANA • ALTA PINTA • LANZAMIENTOS PREMIUM •</span>
                    </div>
                </div>
            </section>

            <!-- Products Section -->
            <section id="catalog-section" class="bg-alta-black pb-20 pt-0 px-6">
                <div class="flex flex-col space-y-12">
                    <div class="text-center">
                        <h3 class="text-4xl font-black uppercase tracking-tighter">EL CATÁLOGO</h3>
                        <p class="text-gray-500 text-sm mt-2">Calidad premium para la cultura.</p>
                    </div>
                    <div id="product-grid" class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <!-- Products injected by app.js -->
                    </div>
                </div>
            </section>
        `;
    },

    renderHeader: () => {
        return `
            <header class="fixed top-0 left-0 right-0 z-50 glass-header h-24 flex items-center justify-between px-6">
                <div class="w-10 h-10 flex items-center justify-center cursor-pointer" onclick="App.toggleMenu()">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div class="flex items-center select-none" onclick="location.reload()" style="cursor: pointer;">
                    <span class="text-3xl font-black italic tracking-tighter text-white">ALTA</span>
                    <span class="text-3xl font-black italic tracking-tighter text-alta-neon">PINTA</span>
                </div>
                <div class="w-10"></div> <!-- Spacer for balance -->
            </header>
        `;
    },

    renderMenu: () => {
        return `
            <div id="side-menu" class="fixed inset-0 z-[60] pointer-events-none">
                <div id="menu-backdrop" class="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300" onclick="App.toggleMenu()"></div>
                <div id="menu-content" class="absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-alta-black border-r border-white/10 -translate-x-full transition-transform duration-300 pointer-events-auto flex flex-col p-8 space-y-8">
                    <div class="flex justify-between items-center">
                        <div class="h-20">
                            <img src="assets/images/logo.png" alt="Alta Pinta Logo" class="h-full w-auto object-contain">
                        </div>
                        <button onclick="App.toggleMenu()" class="text-white hover:text-alta-neon">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                    <nav class="flex flex-col space-y-6 text-2xl font-black uppercase">
                        <a href="javascript:void(0)" id="menu-home" class="text-alta-neon" onclick="App.showHome(); App.toggleMenu()">Inicio</a>
                        <a href="javascript:void(0)" id="menu-featured" class="text-white/60 hover:text-alta-neon transition-colors" onclick="App.scrollToProductsFromMenu()">Destacados</a>
                        <a href="javascript:void(0)" id="menu-gallery" class="text-white/60 hover:text-alta-neon transition-colors" onclick="App.showGallery(); App.toggleMenu()">Galería</a>
                        <a href="javascript:void(0)" id="menu-about" class="text-white/60 hover:text-alta-neon transition-colors" onclick="App.showAbout(); App.toggleMenu()">Nosotros</a>
                    </nav>
                    <div class="mt-auto border-t border-white/10 pt-8 space-y-4">
                        <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Redes</p>
                        <div class="flex space-x-6">
                            <a href="https://www.instagram.com/alta_pintamodaurbana" target="_blank" class="text-white hover:text-alta-neon transition-colors">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="https://www.tiktok.com/@altapintamodaurbana" target="_blank" class="text-white hover:text-alta-neon transition-colors">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.17.47-.12.99.01 1.47.11.51.36 1 .71 1.39.46.52 1.13.84 1.8.91.71.04 1.43-.1 2.05-.44.75-.43 1.25-1.21 1.32-2.06.05-3.32.01-6.64.02-9.97z"/></svg>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderFooter: () => {
        return `
            <footer class="bg-black py-16 px-6 border-t border-white/5 relative overflow-hidden">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-center gap-12">
                        <!-- Left Side: Brand & Legal -->
                        <div class="flex flex-col items-center md:items-start space-y-4">
                            <div class="py-2">
                                <div onclick="App.handleAdminClick()" class="text-4xl md:text-5xl font-black italic tracking-tighter leading-none select-none cursor-default active:scale-95 transition-transform">
                                    <span class="text-white">ALTA</span><span class="text-alta-neon">PINTA</span><span class="text-white/20">.</span>
                                </div>
                                <div class="h-1 w-full bg-alta-neon mt-2 opacity-50 blur-[1px]"></div>
                            </div>
                            <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed text-center md:text-left">
                                © 2026 — Alta Pinta Moda Urbana.<br/>
                                Todos los derechos reservados.<br/>
                                <span class="text-white/30">Cualquier reproducción o uso no autorizado será sancionado.</span>
                            </div>
                        </div>

                        <!-- Right Side: Developer & Social -->
                        <div class="flex flex-col items-center md:items-end space-y-6">
                            <div class="flex space-x-10">
                                <a href="https://www.instagram.com/alta_pintamodaurbana" target="_blank" class="text-white hover:text-alta-neon transition-all duration-300">
                                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="https://www.tiktok.com/@altapintamodaurbana" target="_blank" class="text-white hover:text-alta-neon transition-all duration-300">
                                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.17.47-.12.99.01 1.47.11.51.36 1 .71 1.39.46.52 1.13.84 1.8.91.71.04 1.43-.1 2.05-.44.75-.43 1.25-1.21 1.32-2.06.05-3.32.01-6.64.02-9.97z"/></svg>
                                </a>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span class="bg-alta-neon text-black text-[9px] font-black px-2 py-0.5 uppercase italic tracking-tighter">DESARROLLADO POR</span>
                                <span class="text-white font-black text-sm uppercase tracking-tighter">DevFlow<span class="text-alta-neon">.</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    renderProductDetail: (p, selectedSize = 'M') => {
        const availableSizes = p.sizes && p.sizes.length > 0 ? p.sizes : ['S', 'M', 'L', 'XL'];

        return `
            <div class="animate-fade-in bg-alta-black min-h-screen pb-20">
                <!-- Product Header -->
                <div class="fixed top-0 left-0 right-0 z-50 glass-header h-20 flex items-center justify-between px-6">
                    <button onclick="App.showHome()" class="w-10 h-10 flex items-center justify-center rounded-full bg-alta-gray text-white hover:text-alta-neon transition-colors">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </button>
                    <div class="flex items-center select-none">
                        <span class="text-2xl font-black italic tracking-tighter text-white">ALTA</span>
                        <span class="text-2xl font-black italic tracking-tighter text-alta-neon">PINTA</span>
                    </div>
                    <div class="w-10"></div> <!-- Spacer -->
                </div>

                <!-- Main Content -->
                <div class="pt-20 lg:flex lg:max-w-7xl lg:mx-auto lg:gap-12 lg:px-6">
                    <!-- Image Gallery -->
                    <div class="relative w-full aspect-[4/5] bg-neutral-900 lg:flex-1 lg:rounded-lg overflow-hidden">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
                        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                            <span class="w-8 h-1 bg-alta-neon rounded-full"></span>
                            <span class="w-8 h-1 bg-white/30 rounded-full"></span>
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-6 space-y-8 lg:flex-1 lg:py-12">
                        <div class="space-y-2">
                            <div class="flex justify-between items-start">
                                <h1 class="text-4xl font-black tracking-tighter uppercase leading-[0.9]">${p.name}</h1>
                                <span class="text-alta-neon font-black text-2xl">Bs. ${p.price.toLocaleString()}</span>
                            </div>
                            <p class="text-alta-neon/50 text-xs tracking-widest uppercase font-bold">ALTA PINTA — LANZAMIENTO ORIGINAL</p>
                        </div>

                        <!-- Technical Labels -->
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 border border-alta-neon/30 text-alta-neon text-[10px] font-bold uppercase tracking-wider rounded-sm bg-alta-neon/5 italic">Lanzamiento Exclusivo</span>
                            <span class="px-3 py-1 border border-alta-neon/30 text-alta-neon text-[10px] font-bold uppercase tracking-wider rounded-sm bg-alta-neon/5 italic">Edición Limitada</span>
                        </div>

                        <!-- Size Selector -->
                        <div class="space-y-4">
                            <div class="flex justify-between items-end">
                                <label class="text-[10px] font-black uppercase tracking-widest text-white/40">Seleccionar Talle</label>
                                <button class="text-alta-neon text-[10px] font-black uppercase underline underline-offset-4 decoration-alta-neon/50">Guía de Talles</button>
                            </div>
                            <div class="grid grid-cols-4 gap-3">
                                ${availableSizes.map(size => {
            const isSelected = size === selectedSize;
            const isOutOfStock = size === 'XL'; // Ejemplo: XL sin stock

            return `
                                        <button 
                                            onclick="${!isOutOfStock ? `App.selectSize('${size}', '${p.id}')` : ''}"
                                            class="h-12 border flex items-center justify-center font-black transition-all relative ${isSelected
                    ? 'border-alta-neon text-alta-neon'
                    : isOutOfStock
                        ? 'border-white/10 text-white/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 text-white hover:border-white'
                }">
                                            ${size}
                                            ${isSelected ? '<div class="absolute -top-1 -right-1 w-2 h-2 bg-alta-neon rounded-full shadow-[0_0_10px_#A6FF00]"></div>' : ''}
                                        </button>
                                    `;
        }).join('')}
                            </div>
                        </div>

                        <!-- Description -->
                        <div class="space-y-3">
                            <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Descripción</h3>
                            <p class="text-sm text-gray-400 leading-relaxed font-medium">
                                ${p.description || "Diseño exclusivo de Alta Pinta. Piezas limitadas diseñadas para el street culture. Calidad superior en cada detalle. No te quedes afuera."}
                            </p>
                        </div>

                        <!-- Shipping Info Highlight -->
                        <div class="p-4 bg-alta-gray rounded-sm border-l-2 border-alta-neon flex items-center space-x-4">
                            <svg class="h-6 w-6 text-alta-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span class="text-[10px] font-black uppercase tracking-widest text-alta-neon">Consultar costos de envío por WhatsApp</span>
                        </div>

                        <!-- Action Button (Mobile Fix) -->
                        <div class="lg:pt-8">
                            <button onclick="App.contactByWhatsApp(${JSON.stringify(p).replace(/"/g, '&quot;')}, '${selectedSize}')" class="w-full bg-alta-neon text-black h-16 font-black uppercase tracking-tighter text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center shadow-[0_0_30px_rgba(166,255,0,0.2)]">
                                LO QUIERO AHORA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderAdminLogin: () => {
        return `
            <div id="admin-login" class="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
                <div class="w-full max-w-sm bg-alta-gray p-8 border border-alta-neon/30 rounded-sm space-y-6">
                    <div class="text-center space-y-2">
                        <h2 class="text-2xl font-black uppercase tracking-tighter text-white">Acceso Admin</h2>
                        <p class="text-gray-500 text-xs font-bold uppercase tracking-widest">Ingrese la clave secreta</p>
                    </div>
                    <div class="space-y-4">
                        <input type="password" id="admin-pass" placeholder="••••••••" class="w-full bg-black border border-white/10 p-4 text-center text-xl font-black tracking-[0.5em] text-alta-neon focus:border-alta-neon outline-none transition-colors">
                        <div id="login-error" class="text-red-500 text-[10px] font-bold uppercase text-center hidden">Clave incorrecta</div>
                        <div class="flex gap-2">
                            <button onclick="App.showHome()" class="flex-1 bg-white/5 text-white/40 py-4 font-black uppercase text-xs hover:bg-white/10 transition-colors">Cancelar</button>
                            <button onclick="App.login()" class="flex-[2] bg-alta-neon text-black py-4 font-black uppercase text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(166,255,0,0.2)]">Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderAdminDashboard: (products) => {
        return `
            <div class="animate-fade-in bg-black min-h-screen pb-20 pt-24 px-6">
                <!-- Header Admin -->
                <div class="fixed top-0 left-0 right-0 z-50 bg-alta-gray border-b border-white/5 h-20 flex items-center justify-between px-6">
                    <div class="flex items-center space-x-2">
                        <span class="bg-alta-neon text-black px-2 py-0.5 text-[10px] font-black italic uppercase">Panel de Control</span>
                    </div>
                    <button onclick="App.showHome()" class="text-white/40 hover:text-white transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                </div>

                <div class="max-w-4xl mx-auto space-y-12">
                    <!-- Formulario de Producto -->
                    <section id="admin-form-section" class="bg-alta-gray p-8 border-l-4 border-alta-neon space-y-6">
                        <div class="flex justify-between items-center">
                            <h3 id="admin-form-title" class="text-xl font-black uppercase tracking-tighter">Agregar Nuevo Producto</h3>
                            <button id="btn-cancel-edit" onclick="App.adminCancelEdit()" class="hidden text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400">Cancelar Edición</button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-gray-500 uppercase">Nombre</label>
                                <input type="text" id="new-p-name" class="w-full bg-black border border-white/10 p-3 text-white outline-none focus:border-alta-neon">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-gray-500 uppercase">Precio</label>
                                <input type="number" id="new-p-price" class="w-full bg-black border border-white/10 p-3 text-white outline-none focus:border-alta-neon">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-gray-500 uppercase">Categoría</label>
                                <select id="new-p-tag" class="w-full bg-black border border-white/10 p-3 text-white outline-none focus:border-alta-neon appearance-none cursor-pointer">
                                    ${(window.App && window.App.categories ? window.App.categories : ['REMERAS', 'PANTALONES', 'BUZOS', 'ACCESORIOS']).map(cat => `
                                        <option value="${cat}">${cat}</option>
                                    `).join('')}
                                </select>
                            </div>
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-gray-500 uppercase">Talles Disponibles</label>
                                <div class="flex gap-4 p-3 bg-black border border-white/10">
                                    ${['S', 'M', 'L', 'XL'].map(s => `
                                        <label class="flex items-center space-x-2 cursor-pointer group">
                                            <div class="relative w-5 h-5 border border-white/20 flex items-center justify-center group-hover:border-alta-neon transition-colors">
                                                <input type="checkbox" name="p-sizes" value="${s}" class="admin-size-check absolute inset-0 opacity-0 cursor-pointer p-0 m-0">
                                                <div class="check-mark w-2.5 h-2.5 bg-alta-neon opacity-0 transition-opacity"></div>
                                            </div>
                                            <span class="text-xs font-black uppercase text-white/60 group-hover:text-white">${s}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                            <style>
                                .admin-size-check:checked + .check-mark { opacity: 1 !important; }
                            </style>
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-gray-500 uppercase">Imagen del Producto</label>
                                <div class="flex flex-col space-y-4">
                                    <label class="w-full h-12 bg-black border border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:border-alta-neon transition-colors group">
                                        <span id="upload-status" class="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white">Seleccionar Archivo</span>
                                        <input type="file" id="new-p-file" accept="image/*" class="hidden" onchange="App.handleImageUpload(event)">
                                    </label>
                                    <div id="image-preview-container" class="hidden w-24 h-24 border border-white/10 p-1 relative group">
                                        <img id="image-preview" src="" class="w-full h-full object-cover">
                                        <div id="image-meta" class="absolute -bottom-1 -left-1 bg-alta-neon text-[8px] font-black px-1.5 py-0.5 text-black uppercase tracking-tighter">WEBP</div>
                                        <button onclick="App.clearImageUpload()" class="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="3" stroke="currentColor" fill="none"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id="btn-save-product" onclick="App.adminAddProduct()" class="w-full bg-white text-black py-4 font-black uppercase text-xs hover:bg-alta-neon transition-colors">Guardar Producto</button>
                    </section>

                    <!-- Gestión de Categorías -->
                    <section class="bg-alta-gray p-8 border-l-4 border-white/20 space-y-6">
                        <h3 class="text-xl font-black uppercase tracking-tighter">Gestionar Categorías</h3>
                        <div class="flex gap-2">
                            <input type="text" id="new-cat-name" placeholder="NUEVA CATEGORÍA (Ej: BERMUDAS)" class="flex-1 bg-black border border-white/10 p-3 text-white outline-none focus:border-alta-neon text-xs uppercase font-black">
                            <button onclick="App.addCategory()" class="bg-alta-neon text-black px-6 font-black uppercase text-xs hover:scale-105 transition-transform">Añadir</button>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${(window.App && window.App.categories ? window.App.categories : []).map(cat => `
                                <div class="bg-black/40 border border-white/10 px-3 py-1 flex items-center space-x-2 group">
                                    <span class="text-[10px] font-black uppercase text-white/60">${cat}</span>
                                    <button onclick="App.removeCategory('${cat}')" class="text-red-500/30 group-hover:text-red-500 transition-colors">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <!-- Lista de Productos Actuales -->
                    <section class="space-y-6">
                        <h3 class="text-xl font-black uppercase tracking-tighter">Inventario Actual</h3>
                        <div class="space-y-3">
                            ${products.map(p => `
                                <div class="bg-alta-gray p-4 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                                    <div class="flex items-center space-x-4">
                                        <img src="${p.img}" class="w-12 h-12 object-cover rounded-sm border border-white/10">
                                        <div>
                                            <p class="font-black uppercase text-sm">${p.name}</p>
                                            <p class="text-[10px] text-alta-neon font-bold">Bs. ${p.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <button onclick="App.adminStartEdit(${p.id})" class="p-2 text-blue-400/50 hover:text-blue-400 transition-colors">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </button>
                                        <button onclick="App.adminRemoveProduct(${p.id})" class="p-2 text-red-500/50 hover:text-red-500 transition-colors">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    renderAbout: () => {
        return `
            <div class="animate-fade-in bg-alta-black min-h-screen pb-20 overflow-hidden">
                <!-- About Header -->
                <header class="pt-32 pb-16 px-6 relative">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-alta-neon/5 -rotate-45 translate-x-24 -translate-y-24"></div>
                    <div class="max-w-4xl mx-auto space-y-4 text-center">
                        <h3 class="text-alta-neon font-black italic tracking-[0.5em] text-[10px] uppercase">Legado Urbano</h3>
                        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">NOS<span class="text-alta-neon">OTROS</span></h1>
                        <p class="text-white/30 text-[10px] font-bold uppercase tracking-[0.5em]">La Armadura del Asfalto Boliviano</p>
                    </div>
                </header>

                <!-- Cinematic Content -->
                <div class="px-6 space-y-20 max-w-5xl mx-auto">
                    <!-- Section: DNA -->
                    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div class="relative group">
                            <div class="absolute -inset-4 border border-alta-neon/20 group-hover:border-alta-neon/50 transition-colors duration-700"></div>
                            <img src="assets/images/about_brand.png" alt="Alta Pinta Life" class="w-full grayscale-[0.3] brightness-75 contrast-110">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div class="absolute bottom-4 left-4">
                                <span class="bg-alta-neon text-black text-[10px] font-black px-2 py-1 uppercase italic">ORGULLO NACIONAL</span>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <h2 class="text-3xl font-black uppercase italic tracking-tighter border-l-4 border-alta-neon pl-6">ADN BOLIVIANO</h2>
                            <p class="text-gray-400 leading-relaxed font-medium">
                                ALTA PINTA nació en el corazón de Bolivia, impulsada por la energía cruda de nuestras calles y la necesidad de una marca que representara la verdadera cultura urbana. No buscamos imitar; buscamos definir un estándar nacional que compita con el mundo.
                            </p>
                            <p class="text-gray-400 leading-relaxed font-medium">
                                Cada costura, cada diseño y cada pieza es un tributo al caos y la belleza de nuestra identidad. Vestir Alta Pinta es portar una declaración de respeto hacia nuestras raíces.
                            </p>
                        </div>
                    </section>

                    <!-- Section: Vision (Industrial Block) -->
                    <section class="bg-alta-gray p-8 md:p-16 border border-white/5 relative">
                        <div class="absolute top-0 left-0 w-full h-1 bg-alta-neon"></div>
                        <div class="max-w-2xl space-y-8">
                            <h2 class="text-4xl font-black uppercase tracking-tighter italic">NUESTRA VISIÓN</h2>
                            <div class="space-y-4">
                                <div class="flex items-start space-x-4">
                                    <span class="text-alta-neon font-black text-2xl italic">01</span>
                                    <p class="text-white/60 font-medium">Democratizar el estilo premium sin sacrificar la autenticidad del barrio.</p>
                                </div>
                                <div class="flex items-start space-x-4">
                                    <span class="text-alta-neon font-black text-2xl italic">02</span>
                                    <p class="text-white/60 font-medium">Fomentar la producción local con estándares de calidad industrial de exportación.</p>
                                </div>
                                <div class="flex items-start space-x-4">
                                    <span class="text-alta-neon font-black text-2xl italic">03</span>
                                    <p class="text-white/60 font-medium">Crear una comunidad que respire la cultura de los deportes urbanos y el arte callejero.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Branding Mark -->
                        <div class="absolute bottom-8 right-8 writing-vertical text-[10px] font-black uppercase tracking-[1em] text-white/10 hidden md:block">
                            ALTA PINTA MODA URBANA
                        </div>
                    </section>

                    <!-- Quote Section -->
                    <section class="text-center py-20">
                        <h2 class="text-2xl md:text-4xl font-black uppercase tracking-widest italic opacity-20">CALIDAD • CALLE • CARÁCTER</h2>
                    </section>
                </div>
            </div>
        `;
    },

    renderGallery: (products, activeTag = 'TODOS') => {
        // Usar las categorías configuradas por el admin
        const tags = ['TODOS', ...(window.App && window.App.categories ? window.App.categories : [])];

        // Filtrar productos por tag
        const filteredProducts = activeTag === 'TODOS'
            ? products
            : products.filter(p => (p.tag || p.category || 'SIN CATEGORÍA') === activeTag);

        return `
            <div class="animate-fade-in bg-alta-black min-h-screen pb-20">
                <!-- Gallery Header -->
                <header class="pt-16 pb-12 px-6 space-y-4">
                    <div class="flex items-center space-x-4">
                        <div class="h-px flex-1 bg-alta-neon/30"></div>
                        <span class="text-alta-neon font-black italic tracking-widest text-[10px] uppercase">Curaduría Urbana</span>
                        <div class="h-px w-12 bg-alta-neon/30"></div>
                    </div>
                    <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-center">
                        GALERÍA <span class="text-alta-neon">PINTA</span>
                    </h1>
                    <p class="text-center text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Explora el ADN de la calle • ${filteredProducts.length} Piezas</p>
                </header>

                <!-- Filter Bar -->
                <div class="sticky top-24 z-40 px-6 py-4 bg-alta-black/80 backdrop-blur-md border-y border-white/5 overflow-x-auto no-scrollbar">
                    <div class="flex space-x-3 min-w-max justify-center">
                        ${tags.map(tag => `
                            <button 
                                onclick="App.showGallery('${tag}')"
                                class="px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest transition-all ${activeTag === tag
                ? 'bg-alta-neon text-black shadow-[0_0_20px_rgba(166,255,0,0.3)]'
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
            }">
                                ${tag}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Gallery Grid -->
                <section class="p-6">
                    ${filteredProducts.length === 0 ? `
                        <div class="py-20 text-center space-y-4 opacity-30">
                            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke-width="1"></path></svg>
                            <p class="font-black uppercase italic tracking-widest">Sin stock en esta categoría</p>
                        </div>
                    ` : `
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${filteredProducts.map(p => `
                                <div class="group relative bg-alta-gray border border-white/5 hover:border-alta-neon/50 transition-all duration-500 cursor-pointer" onclick="App.showProduct(${p.id})">
                                    <div class="aspect-[4/5] overflow-hidden relative">
                                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <!-- Animated Corner Badge -->
                                        <div class="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                                            <span class="bg-alta-neon text-black text-[10px] font-black px-2 py-1 italic uppercase">${p.tag}</span>
                                        </div>
                                    </div>
                                    
                                    <div class="p-6 space-y-2">
                                        <div class="flex justify-between items-start">
                                            <h3 class="font-black uppercase text-lg leading-tight group-hover:text-alta-neon transition-colors">${p.name}</h3>
                                            <span class="font-black text-alta-neon">Bs. ${p.price.toLocaleString()}</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div class="h-0.5 w-6 bg-alta-neon"></div>
                                            <p class="text-[10px] font-bold text-white/40 uppercase tracking-widest">Ver Detalles</p>
                                        </div>
                                    </div>

                                    <!-- Industrial Overlay -->
                                    <div class="absolute top-0 left-0 w-8 h-8 border-l border-t border-alta-neon opacity-0 group-hover:opacity-100 transition-all scale-150 group-hover:scale-100 duration-500"></div>
                                    <div class="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-alta-neon opacity-0 group-hover:opacity-100 transition-all scale-150 group-hover:scale-100 duration-500"></div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </section>
            </div>
        `;
    },

    renderDeleteConfirmation: (p) => {
        return `
            <div id="delete-modal" class="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
                <div class="w-full max-w-sm bg-alta-gray border-2 border-red-500/30 p-8 space-y-6 relative overflow-hidden">
                    <!-- Industrial Decorative Element -->
                    <div class="absolute top-0 right-0 w-24 h-24 bg-red-500/5 -rotate-45 translate-x-12 -translate-y-12"></div>
                    
                    <div class="text-center space-y-4 relative z-10">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-2">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <h2 class="text-2xl font-black uppercase tracking-tighter text-white">¿Eliminar Producto?</h2>
                        <p class="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">Esta acción no se puede deshacer. El producto desaparecerá del catálogo.</p>
                    </div>

                    <!-- Product Snapshot -->
                    <div class="bg-black/40 p-3 flex items-center space-x-4 border border-white/5">
                        <img src="${p.img}" class="w-16 h-16 object-cover rounded-sm border border-white/10 opacity-60">
                        <div class="overflow-hidden">
                            <p class="font-black uppercase text-xs truncate">${p.name}</p>
                            <p class="text-[10px] text-red-500/80 font-bold uppercase tracking-widest mt-1">Eliminación Permanente</p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-3 pt-4">
                        <button onclick="App.confirmDelete()" class="w-full bg-red-600 text-white py-4 font-black uppercase text-xs hover:bg-red-500 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                            Confirmar Eliminación
                        </button>
                        <button onclick="App.closeAdminModal()" class="w-full bg-white/5 text-white/40 py-4 font-black uppercase text-xs hover:bg-white/10 transition-colors">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderCategoryDeleteConfirmation: (cat) => {
        return `
            <div id="category-delete-modal" class="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
                <div class="w-full max-w-sm bg-alta-gray border-2 border-red-500/30 p-8 space-y-6 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-red-500/5 -rotate-45 translate-x-12 -translate-y-12"></div>
                    
                    <div class="text-center space-y-4 relative z-10">
                        <div class="inline-flex items-center justify-center w-16 h-16 border-2 border-red-500/50 text-red-500 font-black text-2xl italic">!</div>
                        <h2 class="text-2xl font-black uppercase tracking-tighter text-white">¿Borrar Categoría?</h2>
                        <p class="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">Vas a remover la categoría <span class="text-white">"${cat}"</span>. Los productos no se borrarán, pero perderán esta clasificación.</p>
                    </div>

                    <div class="flex flex-col space-y-3 pt-4">
                        <button onclick="App.confirmCategoryDelete()" class="w-full bg-red-600 text-white py-4 font-black uppercase text-xs hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                            Confirmar Borrado
                        </button>
                        <button onclick="App.closeCategoryModal()" class="w-full bg-white/5 text-white/40 py-4 font-black uppercase text-xs hover:bg-white/10 transition-colors">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};
