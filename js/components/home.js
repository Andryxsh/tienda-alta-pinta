export const renderHome = () => {
    return `
            <!-- Hero Section -->
            <section class="relative h-screen lg:h-screen flex flex-col justify-end lg:justify-center pb-12 lg:pb-0 px-6 lg:px-24 overflow-hidden">
                <div class="absolute inset-0 z-0">
                    <img alt="Main Fashion Model" class="w-full h-full object-cover object-top grayscale brightness-[0.4] animate-fade-in scale-105"
                        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=2000" />
                    <div class="absolute inset-0 bg-gradient-to-t from-alta-black via-black/20 to-transparent"></div>
                </div>
                <div class="relative z-10 space-y-6 max-w-4xl">
                    <h2 class="text-alta-neon font-bold tracking-[0.3em] uppercase text-xs lg:text-sm neon-glow">EDICIONES LIMITADAS 2026</h2>
                    <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
                        URBAN<br />
                        PREMIUM <span class="text-alta-neon">STYLE</span>
                    </h1>
                    <p class="text-gray-300 text-sm md:text-lg max-w-[320px] md:max-w-md lg:max-w-xl border-l-2 border-alta-neon pl-4">
                        Diseño exclusivo y calidad premium. Alta Pinta: Definimos la cultura de las calles con ADN boliviano e ingeniería textil superior.
                    </p>
                    <div class="pt-8 flex flex-wrap gap-4">
                        <button onclick="App.scrollToProducts()" class="bg-alta-neon text-black font-black uppercase py-5 px-12 rounded-full text-lg hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(166,255,0,0.3)]">Explorar Colección</button>
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
}
