export const renderGallery = (products, activeTag = 'TODOS') => {
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
    }
