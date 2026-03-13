import { UI } from './ui.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJ6MDs2F-0sB2F_4zsLpYXpx9LRE1z0Sg",
    authDomain: "alta-pinta-68ded.firebaseapp.com",
    projectId: "alta-pinta-68ded",
    storageBucket: "alta-pinta-68ded.firebasestorage.app",
    messagingSenderId: "690591704296",
    appId: "1:690591704296:web:cda27586456e2f42dd955d"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const App = {
    products: [],
    selectedSize: 'M', // Talla por defecto
    adminClickCount: 0,
    adminClickTimeout: null,
    tempImageData: null, // Guardará la imagen en WebP
    categories: ['REMERAS', 'PANTALONES', 'BUZOS', 'ACCESORIOS'],
    editingProductId: null,
    pendingDeleteId: null,
    pendingCategoryDelete: null,

    init: () => {
        App.loadCategories();
        console.log("Tienda Alta Pinta Inicializada");

        // 1. Mostrar Splash Screen Inmediatamente
        document.body.insertAdjacentHTML('afterbegin', UI.renderSplashScreen());
        document.body.style.overflow = 'hidden';

        // 2. Animar la barra de carga (fake progress for aesthetic)
        setTimeout(() => {
            const progress = document.getElementById('splash-progress');
            if (progress) progress.style.width = '100%';
        }, 50);

        // 3. Cargar datos en segundo plano
        App.loadProducts();

        // 4. Salida del Splash Screen
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.classList.add('opacity-0', 'scale-110');

                // 5. Renderizar tienda una vez que se desvanece el splash
                setTimeout(() => {
                    splash.remove();
                    App.renderLayout();
                    App.showHome();
                    document.body.style.overflow = '';
                }, 1000); // Coincide con duration-1000 de el CSS
            }
        }, 2200); // Cuánto tiempo se queda el splash
    },

    renderLayout: () => {
        const body = document.body;
        // Solo inyectamos los componentes globales una vez al inicio
        body.insertAdjacentHTML('afterbegin', UI.renderMenu());
        body.insertAdjacentHTML('afterbegin', UI.renderHeader());
        body.insertAdjacentHTML('beforeend', UI.renderFooter());
    },

    showHome: () => {
        const main = document.querySelector('main');
        main.innerHTML = UI.renderHome();
        App.loadProducts(); // Recarga los productos en la sección del catálogo
        App.updateActiveMenu('menu-home');
        window.scrollTo(0, 0);
    },

    showProduct: (productId) => {
        const product = App.products.find(p => p.id === parseInt(productId));
        if (product) {
            App.selectedSize = 'M'; // Reset to default when opening
            const main = document.querySelector('main');
            main.innerHTML = UI.renderProductDetail(product, App.selectedSize);
            window.scrollTo(0, 0);
        }
    },

    selectSize: (size, productId) => {
        App.selectedSize = size;
        const product = App.products.find(p => p.id === parseInt(productId));
        const main = document.querySelector('main');
        main.innerHTML = UI.renderProductDetail(product, App.selectedSize);
    },

    toggleMenu: () => {
        const menu = document.getElementById('side-menu');
        const backdrop = document.getElementById('menu-backdrop');
        const content = document.getElementById('menu-content');

        if (!menu || !backdrop || !content) return;
        const isOpen = content.classList.contains('translate-x-0');

        if (isOpen) {
            content.classList.remove('translate-x-0');
            content.classList.add('-translate-x-full');
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            setTimeout(() => menu.classList.add('pointer-events-none'), 300);
            document.body.style.overflow = '';
        } else {
            menu.classList.remove('pointer-events-none');
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');
            content.classList.remove('-translate-x-full');
            content.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        }
    },

    updateActiveMenu: (activeId) => {
        const links = ['menu-home', 'menu-featured', 'menu-gallery', 'menu-about'];
        links.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (id === activeId) {
                    el.classList.add('text-alta-neon');
                    el.classList.remove('text-white/60');
                } else {
                    el.classList.remove('text-alta-neon');
                    el.classList.add('text-white/60');
                }
            }
        });
    },

    // --- LÓGICA DE ADMINISTRACIÓN ---
    handleAdminClick: () => {
        App.adminClickCount++;
        clearTimeout(App.adminClickTimeout);

        if (App.adminClickCount >= 5) {
            App.adminClickCount = 0;
            const main = document.querySelector('main');
            main.innerHTML = UI.renderAdminLogin();
            window.scrollTo(0, 0);
        } else {
            App.adminClickTimeout = setTimeout(() => {
                App.adminClickCount = 0;
            }, 1000);
        }
    },

    login: () => {
        const passInput = document.getElementById('admin-pass');
        const errorMsg = document.getElementById('login-error');
        const pass = passInput ? passInput.value : "";

        if (pass === "alta2026") {
            App.showAdminDashboard();
        } else {
            errorMsg.classList.remove('hidden');
            passInput.value = "";
            passInput.focus();
        }
    },

    showAdminDashboard: () => {
        App.editingProductId = null; // Resetear modo edición al volver a mostrar
        App.tempImageData = null; // Limpiar memoria de imágenes previas
        const main = document.querySelector('main');
        main.innerHTML = UI.renderAdminDashboard(App.products);
        window.scrollTo(0, 0);
    },

    showGallery: (tag = 'TODOS') => {
        const main = document.querySelector('main');
        main.innerHTML = UI.renderGallery(App.products, tag);
        window.scrollTo(0, 0);
        App.updateActiveMenu('menu-gallery');
    },

    showCategory: (tag) => {
        App.showGallery(tag);
    },

    showAbout: () => {
        const main = document.querySelector('main');
        main.innerHTML = UI.renderAbout();
        window.scrollTo(0, 0);
        App.updateActiveMenu('menu-about');
    },

    // --- GESTIÓN DE CATEGORÍAS ---
    loadCategories: () => {
        // Obsoleto, se cargan juntas en loadProducts
    },

    saveCategories: () => {
        App.saveDataToCloud();
    },

    addCategory: () => {
        const input = document.getElementById('new-cat-name');
        if (!input) return;
        const name = input.value.trim().toUpperCase();
        if (name && !App.categories.includes(name)) {
            App.categories.push(name);
            App.saveCategories();
            App.showAdminDashboard();
        }
        input.value = "";
    },

    removeCategory: (cat) => {
        App.pendingCategoryDelete = cat;
        document.body.insertAdjacentHTML('beforeend', UI.renderCategoryDeleteConfirmation(cat));
    },

    confirmCategoryDelete: () => {
        if (App.pendingCategoryDelete) {
            App.categories = App.categories.filter(c => c !== App.pendingCategoryDelete);
            App.saveCategories();
            App.pendingCategoryDelete = null;
            App.closeCategoryModal();
            App.showAdminDashboard();
        }
    },

    closeCategoryModal: () => {
        const modal = document.getElementById('category-delete-modal');
        if (modal) {
            modal.classList.add('opacity-0');
            setTimeout(() => modal.remove(), 300);
        }
        App.pendingCategoryDelete = null;
    },

    adminStartEdit: (id) => {
        const p = App.products.find(item => item.id === id);
        if (!p) return;

        App.editingProductId = id;

        // Llenar formulario
        document.getElementById('new-p-name').value = p.name;
        document.getElementById('new-p-price').value = p.price;
        document.getElementById('new-p-tag').value = p.tag || p.category || "";

        // Marcar talles correspondientes
        const checkboxes = document.querySelectorAll('.admin-size-check');
        checkboxes.forEach(cb => {
            cb.checked = p.sizes && p.sizes.includes(cb.value);
        });

        // Cargar imagen actual en el preview
        App.tempImageData = p.img;
        const preview = document.getElementById('image-preview');
        const previewContainer = document.getElementById('image-preview-container');
        const status = document.getElementById('upload-status');

        if (preview && previewContainer) {
            preview.src = p.img;
            previewContainer.classList.remove('hidden');
            if (status) {
                status.innerText = "✓ Imagen Actual";
                status.classList.add('text-alta-neon');
            }
        }

        // Cambiar textos de la UI
        document.getElementById('admin-form-title').innerText = "Editar Producto";
        document.getElementById('btn-save-product').innerText = "Guardar Cambios";
        document.getElementById('btn-cancel-edit').classList.remove('hidden');

        // Scroll al formulario
        document.getElementById('admin-form-section').scrollIntoView({ behavior: 'smooth' });
    },

    adminCancelEdit: () => {
        App.editingProductId = null;
        App.tempImageData = null;

        // Limpiar campos
        document.getElementById('new-p-name').value = "";
        document.getElementById('new-p-price').value = "";
        document.getElementById('new-p-tag').value = "NUEVO";

        // Desmarcar talles
        const checkboxes = document.querySelectorAll('.admin-size-check');
        checkboxes.forEach(cb => cb.checked = false);

        // Resetear UI
        App.clearImageUpload();
        document.getElementById('admin-form-title').innerText = "Agregar Nuevo Producto";
        document.getElementById('btn-save-product').innerText = "Guardar Producto";
        document.getElementById('btn-cancel-edit').classList.add('hidden');
    },

    adminAddProduct: () => {
        const nameInput = document.getElementById('new-p-name');
        const priceInput = document.getElementById('new-p-price');
        const tagInput = document.getElementById('new-p-tag');

        if (!nameInput || !priceInput || !tagInput) {
            console.error("Faltan campos obligatorios en el DOM.");
            return;
        }

        const name = nameInput.value.trim();
        const price = parseInt(priceInput.value);
        const tag = tagInput.value;
        const img = App.tempImageData || "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000";

        // Obtener talles seleccionados
        const sizes = Array.from(document.querySelectorAll('.admin-size-check:checked')).map(cb => cb.value);

        if (!name || isNaN(price)) {
            alert("Por favor completa nombre y precio correctamente.");
            return;
        }

        if (App.editingProductId) {
            // MODO EDICIÓN: Actualizar producto existente
            const index = App.products.findIndex(p => p.id === App.editingProductId);
            if (index !== -1) {
                App.products[index] = {
                    ...App.products[index],
                    name,
                    price,
                    tag,
                    img,
                    sizes
                };
            }
            App.editingProductId = null;
        } else {
            // MODO CREACIÓN: Agregar nuevo
            const newProduct = {
                id: Date.now(),
                name,
                price,
                tag,
                img,
                sizes,
                description: "Producto gestionado desde el panel de administración."
            };
            App.products.unshift(newProduct);
        }

        App.saveProducts();
        App.tempImageData = null;
        App.showAdminDashboard();
    },

    handleImageUpload: (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const status = document.getElementById('upload-status');
        const preview = document.getElementById('image-preview');
        const previewContainer = document.getElementById('image-preview-container');

        status.innerText = "Procesando...";

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Configurar el Canvas para convertir a WebP
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Redimensionar ligeramente si es muy grande para ahorrar Storage
                let width = img.width;
                let height = img.height;
                const MAX_WIDTH = 800;

                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                // Convertir a WebP con calidad 0.8
                const webpData = canvas.toDataURL('image/webp', 0.8);
                App.tempImageData = webpData;

                // Calcular tamaño aproximado para mostrar al usuario
                const sizeInKb = Math.round((webpData.length * 3 / 4) / 1024);

                // Mostrar preview
                preview.src = webpData;
                previewContainer.classList.remove('hidden');
                const meta = document.getElementById('image-meta');
                if (meta) meta.innerText = `WEBP • ${sizeInKb}KB`;

                status.innerText = "✓ Imagen Lista";
                status.classList.remove('text-white/40');
                status.classList.add('text-alta-neon');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    clearImageUpload: () => {
        App.tempImageData = null;
        const status = document.getElementById('upload-status');
        const previewContainer = document.getElementById('image-preview-container');
        const fileInput = document.getElementById('new-p-file');

        if (fileInput) fileInput.value = "";
        if (previewContainer) previewContainer.classList.add('hidden');

        // Note: No reseteamos checkboxes aquí porque se maneja en adminCancelEdit
        // o al cargar un producto para editar.

        if (status) {
            status.innerText = "Seleccionar Archivo";
            status.classList.remove('text-alta-neon');
            status.classList.add('text-white/40');
        }
    },

    adminRemoveProduct: (id) => {
        const p = App.products.find(item => item.id === id);
        if (!p) return;

        App.pendingDeleteId = id;

        // Inyectar el modal al final del body
        document.body.insertAdjacentHTML('beforeend', UI.renderDeleteConfirmation(p));
    },

    confirmDelete: () => {
        if (App.pendingDeleteId) {
            App.products = App.products.filter(p => p.id !== App.pendingDeleteId);
            App.saveProducts();
            App.pendingDeleteId = null;

            // Cerrar modal y refrescar dashboard
            App.closeAdminModal();
            App.showAdminDashboard();
        }
    },

    closeAdminModal: () => {
        const modal = document.getElementById('delete-modal');
        if (modal) {
            modal.classList.add('opacity-0');
            setTimeout(() => modal.remove(), 300);
        }
        App.pendingDeleteId = null;
    },

    saveProducts: () => {
        App.saveDataToCloud();
    },

    saveDataToCloud: async () => {
        try {
            await setDoc(doc(db, "store", "data"), {
                categories: App.categories,
                products: App.products
            });
            console.log("Datos respaldados en Firebase correctamente!");
        } catch (e) {
            console.error("Error guardando en la nube de Firebase", e);
        }
    },

    loadProducts: async () => {
        const grid = document.getElementById('product-grid');
        if (!grid) return;

        try {
            const dataDoc = await getDoc(doc(db, "store", "data"));
            if (dataDoc.exists()) {
                const data = dataDoc.data();
                App.categories = data.categories && data.categories.length > 0 ? data.categories : ['REMERAS', 'PANTALONES', 'BUZOS', 'ACCESORIOS'];
                App.products = data.products || [];
            } else {
                // Fallback a nuestro JSON si la BD es nueva y está vacía
                const fallbackFetch = await fetch('data/products.json');
                App.products = await fallbackFetch.json();
                App.categories = ['REMERAS', 'PANTALONES', 'BUZOS', 'ACCESORIOS'];
                // La llenamos por primera vez
                await App.saveDataToCloud();
            }

            // Añadimos clases de scroll horizontal al contenedor para móvil
            grid.className = "flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar md:grid md:grid-cols-4 md:overflow-visible";

            grid.innerHTML = App.products.map(p => `
                <div class="min-w-[280px] snap-center group cursor-pointer animate-fade-in" onclick="App.showProduct(${p.id})">
                    <div class="relative aspect-[4/5] bg-alta-gray overflow-hidden mb-4 rounded-sm">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute top-4 left-4 bg-alta-neon text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest">${p.tag}</div>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <div class="bg-alta-neon text-black font-black py-3 px-8 rounded-full text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                Ver Detalle
                            </div>
                        </div>
                    </div>
                    <div class="space-y-1 text-center md:text-left">
                        <p class="text-[10px] text-alta-neon/60 font-black uppercase tracking-widest italic">Lanzamiento Original</p>
                        <div class="flex flex-col md:flex-row justify-between items-center md:items-end">
                            <h5 class="font-black text-lg uppercase leading-none tracking-tighter">${p.name}</h5>
                            <span class="font-black text-lg text-alta-neon mt-2 md:mt-0">Bs. ${p.price.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error("Error loading products:", error);
            grid.innerHTML = `<p class="text-center text-red-500 font-bold col-span-full">Error al cargar el catálogo. Intenta refrescar.</p>`;
        }
    },

    scrollToProducts: () => {
        const catalog = document.getElementById('catalog-section');
        if (catalog) {
            const headerOffset = 100;
            const elementPosition = catalog.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    },

    scrollToProductsFromMenu: () => {
        const catalog = document.getElementById('catalog-section');

        // Si no estamos en Home, vamos a Home primero
        if (!catalog) {
            App.showHome();
            // Esperamos un poquito a que renderice antes de scrollear
            setTimeout(() => {
                App.scrollToProducts();
                App.updateActiveMenu('menu-featured');
            }, 100);
        } else {
            App.scrollToProducts();
            App.updateActiveMenu('menu-featured');
        }

        App.toggleMenu();
    },

    contactByWhatsApp: (p = null, size = "") => {
        const phoneNumber = "63537918";
        let message = "";

        if (p) {
            message = `Hola Alta Pinta! Quisiera realizar un pedido:\n\n` +
                `------------------------------------\n` +
                `PRODUCTO: ${p.name}\n` +
                `TALLE: ${size}\n` +
                `PRECIO: Bs. ${p.price.toLocaleString()}\n` +
                `------------------------------------\n\n` +
                `¿Tienen stock disponible? ¡Gracias!`;
        } else {
            message = `Hola Alta Pinta! Quisiera ver el catálogo completo.`;
        }

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    },

    openCart: () => {
        alert("Próximamente: Carrito de Compras funcional.");
    }
};

// Exponer App al objeto window para que los onclick del HTML funcionen
window.App = App;
document.addEventListener('DOMContentLoaded', App.init);
