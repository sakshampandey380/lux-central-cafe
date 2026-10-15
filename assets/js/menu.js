/**
 * LUX CENTRAL - MENU CONTROLLER (GROTTO CAFE CARD DESIGN)
 * Category tabs, search filtering, dietary pills, Grotto-style card rendering
 */

(function () {
  'use strict';

  let currentCategory = 'all';
  let searchQuery = '';
  let activeDietary = 'all';

  function createFoodCardHTML(item) {
    const ingredients = item.culinarySummary?.ingredients ? item.culinarySummary.ingredients.slice(0, 3).join(', ') : '';
    const desc = item.culinarySummary?.flavorProfile || item.culinarySummary?.howItsMade || '';

    return `
      <div class="grotto-food-card" data-category="${item.category}">
        <div class="food-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="food-card-info">
          <h3 class="food-card-title">${item.name}</h3>
          <p class="food-card-desc">${desc}</p>
          <div class="food-card-price">$${item.price.toFixed(2)}</div>
          <button class="btn-card-order btn-add-order" data-id="${item.id}">
            Order
          </button>
        </div>
      </div>
    `;
  }

  function filterAndRenderMenu() {
    const container = document.getElementById('menuCardsGrid');
    if (!container || typeof LUX_MENU_ITEMS === 'undefined') return;

    const filtered = LUX_MENU_ITEMS.filter(item => {
      const matchCat = currentCategory === 'all' || item.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        item.name.toLowerCase().includes(q) ||
        (item.culinarySummary?.flavorProfile?.toLowerCase().includes(q)) ||
        (item.culinarySummary?.ingredients?.some(i => i.toLowerCase().includes(q)));
      const matchDiet = activeDietary === 'all' ||
        item.tags.some(t => t.toLowerCase().includes(activeDietary.toLowerCase()));

      return matchCat && matchSearch && matchDiet;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <h3 style="font-family:'Playfair Display',serif; font-size: 1.5rem; color: #000; margin-bottom: 10px;">No Menu Items Found</h3>
          <p style="color: #666; margin-bottom: 20px;">Try searching for another dish or selecting all categories.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(createFoodCardHTML).join('');
    attachOrderListeners(container);
  }

  function renderGrottoOrderSection() {
    const grid = document.getElementById('grottoOrderGrid');
    if (!grid || typeof LUX_MENU_ITEMS === 'undefined') return;

    // Pick 8 signature creations (Grotto Cafe showcases 8 items in its carousel)
    const featured = LUX_MENU_ITEMS.filter(i => i.featured || i.price > 4.5).slice(0, 8);
    grid.innerHTML = featured.map(createFoodCardHTML).join('');
    attachOrderListeners(grid);
  }

  function attachOrderListeners(parent) {
    parent.querySelectorAll('.btn-add-order').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        if (window.LuxApp) {
          window.LuxApp.addToCart(id, 1);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Menu page
    const menuGrid = document.getElementById('menuCardsGrid');
    if (menuGrid) {
      filterAndRenderMenu();

      document.querySelectorAll('.category-tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentCategory = this.dataset.category || 'all';
          filterAndRenderMenu();
        });
      });

      const search = document.getElementById('menuSearchInput');
      if (search) {
        search.addEventListener('input', function () {
          searchQuery = this.value;
          filterAndRenderMenu();
        });
      }

      document.querySelectorAll('.dietary-pill-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.dietary-pill-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          activeDietary = this.dataset.diet || 'all';
          filterAndRenderMenu();
        });
      });
    }

    // Home page Grotto order online section
    renderGrottoOrderSection();
  });

  window.LuxMenu = {
    filterAndRenderMenu,
    renderGrottoOrderSection
  };
})();
