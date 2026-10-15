/**
 * LUX CENTRAL - CORE CLIENT CONTROLLER (GROTTO CAFE ARCHITECTURE)
 * 1. 1-Second Logo Animation Preloader
 * 2. Sticky Navbar Scroll State
 * 3. Mobile Hamburger Menu Toggle
 * 4. Persistent Direct Order Cart System (LocalStorage)
 * 5. Phoenix MST Business Hours (6:00 AM - 10:00 PM MST)
 * 6. Quick Direct Call / WhatsApp Dispatchers
 */

(function () {
  'use strict';

  const PHOENIX_TZ_OFFSET = -7; // MST is UTC-7 all year
  const OPEN_HOUR = 6;
  const CLOSE_HOUR = 22;
  const AZ_SALES_TAX = 0.086;
  const CART_STORAGE_KEY = 'lux_grotto_cart_v1';
  const PHONE_TEL = '+16023271396';

  let cart = [];

  // ==========================================================================
  // 1. EXACT 1-SECOND LOGO ANIMATION PRELOADER
  // ==========================================================================
  function initPreloader() {
    const preloader = document.getElementById('luxPreloader');
    if (!preloader) return;

    // Run for exactly 1.0 second (1000ms), then smoothly fade out
    setTimeout(function () {
      preloader.classList.add('fade-out');
    }, 1000);
  }

  // ==========================================================================
  // 2. PHOENIX MST OPERATING STATUS ENGINE
  // ==========================================================================
  function getPhoenixTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (PHOENIX_TZ_OFFSET * 3600000));
  }

  function updateOperatingStatus() {
    const phx = getPhoenixTime();
    const currentDec = phx.getHours() + (phx.getMinutes() / 60);
    const isOpen = currentDec >= OPEN_HOUR && currentDec < CLOSE_HOUR;

    const timeString = phx.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    const badge = document.getElementById('heroStatusBadge');
    if (badge) {
      badge.innerHTML = `
        <span class="status-dot-pulse ${isOpen ? '' : 'closed'}"></span>
        <span>${isOpen ? 'Open Now in Midtown Phoenix' : 'Opens Tomorrow at 6:00 AM MST'}</span>
        <span style="opacity: 0.7; font-size: 0.75rem;">(${timeString} MST)</span>
      `;
    }
  }

  // ==========================================================================
  // 3. PERSISTENT CART & DIRECT ORDER SYSTEM (LOCALSTORAGE)
  // ==========================================================================
  function loadCart() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      cart = stored ? JSON.parse(stored) : [];
    } catch (e) {
      cart = [];
    }
    renderCartUI();
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
    renderCartUI();
  }

  function addToCart(itemId, quantity = 1) {
    if (typeof LUX_MENU_ITEMS === 'undefined') return;
    const item = LUX_MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(i => i.id === itemId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added "${item.name}" to Order!`);
    openCartDrawer();
  }

  function updateQty(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== itemId);
    }
    saveCart();
  }

  function removeItem(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
    showToast('Order cleared');
  }

  function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * AZ_SALES_TAX;
    const total = subtotal + tax;
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, tax, total, count };
  }

  function renderCartUI() {
    const totals = getCartTotals();

    // Badges in header and bottom nav
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = totals.count;
      badge.style.display = totals.count > 0 ? 'inline-flex' : 'none';
    });

    // Drawer items
    const drawerBody = document.getElementById('cartDrawerBody');
    const drawerFooter = document.getElementById('cartDrawerFooter');

    if (!drawerBody) return;

    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div style="text-align:center; padding: 40px 10px;">
          <h3 style="font-family:'Playfair Display',serif; margin-bottom:10px; color:#000;">Your Cart is Empty</h3>
          <p style="color:#777; font-size:0.9rem; margin-bottom:20px;">Explore our authentic kitchen menu, scratch bakery & espresso.</p>
          <a href="menu.html" class="custom-temp-btn btn-grotto-gold" style="font-size:0.85rem; padding:10px 24px;">View Menu</a>
        </div>
      `;
      if (drawerFooter) drawerFooter.style.display = 'none';
    } else {
      let html = '';
      cart.forEach(item => {
        html += `
          <div style="display:flex; align-items:center; gap:12px; padding:10px; background:#FAF8F5; border:1px solid #EAEAEA; border-radius:4px;">
            <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;" />
            <div style="flex:1; min-width:0;">
              <div style="font-weight:700; font-size:0.9rem; color:#000; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</div>
              <div style="color:#B8853A; font-weight:700; font-size:0.85rem;">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <button class="cart-qty-btn" data-id="${item.id}" data-action="minus" style="width:26px; height:26px; border:1px solid #CCC; background:#FFF; border-radius:3px; font-weight:700;">−</button>
              <span style="font-weight:700; font-size:0.85rem; min-width:16px; text-align:center;">${item.quantity}</span>
              <button class="cart-qty-btn" data-id="${item.id}" data-action="plus" style="width:26px; height:26px; border:1px solid #CCC; background:#FFF; border-radius:3px; font-weight:700;">+</button>
            </div>
            <button class="cart-remove-btn" data-id="${item.id}" style="color:#999; font-size:1.1rem; padding:4px;">✕</button>
          </div>
        `;
      });
      drawerBody.innerHTML = html;
      if (drawerFooter) drawerFooter.style.display = 'block';

      // Attach item events
      drawerBody.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const delta = this.dataset.action === 'plus' ? 1 : -1;
          updateQty(this.dataset.id, delta);
        });
      });
      drawerBody.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          removeItem(this.dataset.id);
        });
      });

      // Update figures
      const subtotalEl = document.getElementById('cartSubtotal');
      const taxEl = document.getElementById('cartTax');
      const totalEl = document.getElementById('cartTotal');
      if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal.toFixed(2)}`;
      if (taxEl) taxEl.textContent = `$${totals.tax.toFixed(2)}`;
      if (totalEl) totalEl.textContent = `$${totals.total.toFixed(2)}`;
    }
  }

  function openCartDrawer() {
    const drawer = document.getElementById('grottoCartDrawer');
    const backdrop = document.getElementById('grottoCartBackdrop');
    if (drawer && backdrop) {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('grottoCartDrawer');
    const backdrop = document.getElementById('grottoCartBackdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  function showToast(msg) {
    let toast = document.getElementById('grottoToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'grottoToast';
      toast.style.cssText = 'position:fixed; bottom:70px; left:50%; transform:translateX(-50%); background:#000; color:#FFF; padding:12px 24px; border-radius:4px; border:1px solid #B8853A; font-weight:700; font-size:0.9rem; z-index:999999; box-shadow:0 6px 20px rgba(0,0,0,0.4); transition:all 0.3s; opacity:0; pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2800);
  }

  // ==========================================================================
  // 4. CHECKOUT ACTIONS
  // ==========================================================================
  function handleDialOrder() {
    if (cart.length === 0) {
      showToast('Please add items to cart first.');
      return;
    }
    const totals = getCartTotals();
    showToast(`Calling Lux counter (+1 602-327-1396)...`);
    setTimeout(() => {
      window.location.href = `tel:${PHONE_TEL}`;
    }, 500);
  }

  function handleWhatsAppOrder() {
    if (cart.length === 0) {
      showToast('Please add items to cart first.');
      return;
    }
    const totals = getCartTotals();
    let text = `☕ LUX CENTRAL DIRECT ORDER:\n`;
    cart.forEach(i => {
      text += `• ${i.quantity}x ${i.name} ($${(i.price * i.quantity).toFixed(2)})\n`;
    });
    text += `TOTAL: $${totals.total.toFixed(2)} (Pickup)`;
    window.open(`https://wa.me/16023271396?text=${encodeURIComponent(text)}`, '_blank');
  }

  // ==========================================================================
  // 5. GLOBAL EVENT LISTENERS
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    updateOperatingStatus();
    setInterval(updateOperatingStatus, 30000);

    // Navbar scroll effect
    const navbar = document.getElementById('navbarGrotto');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar?.classList.add('nav-scroll');
      } else {
        navbar?.classList.remove('nav-scroll');
      }
    }, { passive: true });

    // Mobile Hamburger
    const mobileToggle = document.getElementById('btnMobileToggle');
    const mobileNav = document.getElementById('grottoMobileNav');
    mobileToggle?.addEventListener('click', function () {
      mobileNav?.classList.toggle('is-open');
    });

    // Close mobile nav on link click
    mobileNav?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('is-open'));
    });

    // Cart trigger buttons
    document.querySelectorAll('.btn-open-cart').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openCartDrawer();
      });
    });

    document.getElementById('btnCloseCart')?.addEventListener('click', closeCartDrawer);
    document.getElementById('grottoCartBackdrop')?.addEventListener('click', closeCartDrawer);

    document.getElementById('btnCheckoutCall')?.addEventListener('click', handleDialOrder);
    document.getElementById('btnCheckoutWhatsApp')?.addEventListener('click', handleWhatsAppOrder);
    document.getElementById('btnClearOrder')?.addEventListener('click', clearCart);

    // ESC key close
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeCartDrawer();
        mobileNav?.classList.remove('is-open');
      }
    });

    loadCart();
  });

  window.LuxApp = {
    addToCart,
    openCartDrawer,
    closeCartDrawer,
    showToast
  };
})();
