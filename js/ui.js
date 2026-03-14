/**
 * Alta Pinta UI Components
 */

import { renderSplashScreen, renderHeader, renderMenu, renderFooter } from './components/layout.js';
import { renderHome } from './components/home.js';
import { renderProductDetail } from './components/product.js';
import { renderAdminLogin, renderAdminDashboard, renderDeleteConfirmation, renderCategoryDeleteConfirmation } from './components/admin.js';
import { renderAbout } from './components/about.js';
import { renderGallery } from './components/gallery.js';

export const UI = {
    renderSplashScreen,
    renderHome,
    renderHeader,
    renderMenu,
    renderFooter,
    renderProductDetail,
    renderAdminLogin,
    renderAdminDashboard,
    renderAbout,
    renderGallery,
    renderDeleteConfirmation,
    renderCategoryDeleteConfirmation
};
