export const renderAdminLogin = () => {
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
    }


export const renderAdminDashboard = (products) => {
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
    }


export const renderDeleteConfirmation = (p) => {
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
    }


export const renderCategoryDeleteConfirmation = (cat) => {
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
