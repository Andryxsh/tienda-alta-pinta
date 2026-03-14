export const renderAbout = () => {
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
    }
