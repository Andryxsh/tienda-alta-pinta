export const renderSplashScreen = () => {
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
}


export const renderHeader = () => {
    return `
            <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center justify-between px-6 lg:px-12 desktop-header">
                <div class="flex items-center space-x-8">
                    <div class="flex items-center select-none cursor-pointer" onclick="location.reload()">
                        <span class="text-3xl font-black italic tracking-tighter text-white">ALTA</span>
                        <span class="text-3xl font-black italic tracking-tighter text-alta-neon">PINTA</span>
                    </div>
                    
                    <!-- Desktop Nav Links (Hidden on mobile) -->
                    <nav class="hidden lg:flex items-center space-x-8 pt-1">
                        <a href="javascript:void(0)" class="nav-link text-alta-neon font-black uppercase text-xs tracking-widest hover:text-white transition-colors" onclick="App.showHome()">Inicio</a>
                        <a href="javascript:void(0)" class="nav-link text-white/70 font-black uppercase text-xs tracking-widest hover:text-alta-neon transition-colors" onclick="App.scrollToProductsFromMenu()">Destacados</a>
                        <a href="javascript:void(0)" class="nav-link text-white/70 font-black uppercase text-xs tracking-widest hover:text-alta-neon transition-colors" onclick="App.showGallery()">Galería</a>
                        <a href="javascript:void(0)" class="nav-link text-white/70 font-black uppercase text-xs tracking-widest hover:text-alta-neon transition-colors" onclick="App.showAbout()">Nosotros</a>
                    </nav>
                </div>

                <div class="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer" onclick="App.toggleMenu()">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </header>
        `;
}


export const renderMenu = () => {
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
}


export const renderFooter = () => {
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
}
