export const renderProductDetail = (p, selectedSize = 'M') => {
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
    }
