/**
 * LUX CENTRAL - 3D FLOATING BACKGROUND & CORNER BISTRO BENCH SCENE
 * Pure Vanilla JavaScript & Hardware-Accelerated 3D Transform Physics
 * Smooth Parallax Response to Cursor & Mobile Touch/Gyroscope
 */

(function () {
  'use strict';

  // SVG Definitions for 3D Floating Elements
  const SVG_COFFEE_CUP = `
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-svg">
      <!-- Saucer -->
      <ellipse cx="80" cy="130" rx="60" ry="16" fill="#C85A32" opacity="0.9" />
      <ellipse cx="80" cy="128" rx="52" ry="12" fill="#EFE8DD" />
      <ellipse cx="80" cy="126" rx="46" ry="10" fill="#FAF7F2" />
      <!-- Cup Shadow -->
      <ellipse cx="80" cy="122" rx="36" ry="9" fill="rgba(37,22,16,0.25)" />
      <!-- Cup Handle -->
      <path d="M110 82 C132 82 134 112 110 116" stroke="#C85A32" stroke-width="11" stroke-linecap="round" fill="none" />
      <path d="M110 82 C126 82 128 112 110 116" stroke="#FAF7F2" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6" />
      <!-- Cup Body -->
      <path d="M46 76 Q48 122 80 122 Q112 122 114 76 Z" fill="#C85A32" />
      <path d="M50 76 Q52 118 80 118 Q108 118 110 76 Z" fill="url(#cupGrad)" />
      <!-- Rim -->
      <ellipse cx="80" cy="76" rx="34" ry="10" fill="#EFE8DD" />
      <!-- Espresso & Crema -->
      <ellipse cx="80" cy="76" rx="30" ry="8" fill="#3D2012" />
      <!-- Latte Art Heart Motif -->
      <path d="M80 73 C76 69 70 72 72 76 C74 79 80 82 80 82 C80 82 86 79 88 76 C90 72 84 69 80 73 Z" fill="#FAF7F2" opacity="0.95" />
      <!-- Animated Steam Trails -->
      <g opacity="0.8">
        <path class="steam-trail-1" d="M72 65 C68 52 76 42 70 28" stroke="rgba(250,247,242,0.85)" stroke-width="3" stroke-linecap="round" fill="none" />
        <path class="steam-trail-2" d="M80 62 C84 48 76 38 82 22" stroke="rgba(250,247,242,0.95)" stroke-width="3.5" stroke-linecap="round" fill="none" />
        <path class="steam-trail-3" d="M88 64 C92 50 86 40 90 26" stroke="rgba(250,247,242,0.8)" stroke-width="2.8" stroke-linecap="round" fill="none" />
      </g>
      <defs>
        <linearGradient id="cupGrad" x1="50" y1="76" x2="110" y2="120" gradientUnits="userSpaceOnUse">
          <stop stop-color="#D96A42" />
          <stop offset="1" stop-color="#A8431E" />
        </linearGradient>
      </defs>
    </svg>
  `;

  const SVG_PANCAKE_STACK = `
    <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-svg">
      <!-- Plate -->
      <ellipse cx="90" cy="135" rx="75" ry="18" fill="#EFE8DD" />
      <ellipse cx="90" cy="132" rx="66" ry="14" fill="#FAF7F2" />
      <!-- Bottom Pancake -->
      <path d="M30 115 C30 108 55 105 90 105 C125 105 150 108 150 115 C150 124 125 128 90 128 C55 128 30 124 30 115 Z" fill="#D49A50" />
      <ellipse cx="90" cy="115" rx="60" ry="12" fill="#E2AC68" />
      <!-- Middle Pancake -->
      <path d="M34 100 C34 93 58 90 90 90 C122 90 146 93 146 100 C146 108 122 113 90 113 C58 113 34 108 34 100 Z" fill="#C98F45" />
      <ellipse cx="90" cy="100" rx="56" ry="11" fill="#E8B573" />
      <!-- Top Pancake -->
      <path d="M38 85 C38 78 60 75 90 75 C120 75 142 78 142 85 C142 93 120 98 90 98 C60 98 38 93 38 85 Z" fill="#BD8137" />
      <ellipse cx="90" cy="85" rx="52" ry="10" fill="#EDB978" />
      <!-- Dripping Maple Syrup -->
      <path class="syrup-drip-flow" d="M72 85 C72 98 66 104 68 118 C69 122 75 122 76 118 C78 108 82 92 82 85 Z" fill="#A85718" opacity="0.9" />
      <path class="syrup-drip-flow" d="M102 85 C102 95 108 102 107 114 C106 117 112 118 113 114 C115 105 112 92 112 85 Z" fill="#934610" opacity="0.85" />
      <!-- Golden Butter Pat -->
      <path d="M82 72 L98 75 L95 82 L79 79 Z" fill="#FCD34D" stroke="#F59E0B" stroke-width="1.5" />
      <path d="M79 79 L95 82 L93 86 L77 83 Z" fill="#F59E0B" />
      <!-- Blueberries on Plate -->
      <circle cx="50" cy="122" r="7" fill="#2E3C62" />
      <circle cx="52" cy="120" r="2.5" fill="#586994" />
      <circle cx="132" cy="125" r="6" fill="#2E3C62" />
      <circle cx="134" cy="123" r="2" fill="#586994" />
    </svg>
  `;

  const SVG_CAKE_SLICE = `
    <svg viewBox="0 0 170 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-svg">
      <!-- Plate -->
      <ellipse cx="85" cy="138" rx="68" ry="14" fill="#EFE8DD" />
      <ellipse cx="85" cy="135" rx="60" ry="11" fill="#FAF7F2" />
      <!-- Cake Base Shadow -->
      <path d="M36 122 L132 105 L118 132 L36 122 Z" fill="rgba(37,22,16,0.18)" />
      <!-- Cake Sponge Layers -->
      <!-- Bottom Layer -->
      <path d="M38 104 L114 94 L114 116 L38 126 Z" fill="#4A2818" />
      <!-- Cream Filling 1 -->
      <path d="M38 100 L114 90 L114 94 L38 104 Z" fill="#FAF7F2" />
      <!-- Middle Layer -->
      <path d="M38 86 L114 76 L114 90 L38 100 Z" fill="#D49A50" />
      <!-- Cream Filling 2 -->
      <path d="M38 82 L114 72 L114 76 L38 86 Z" fill="#FAF7F2" />
      <!-- Top Sponge Layer -->
      <path d="M38 68 L114 58 L114 72 L38 82 Z" fill="#4A2818" />
      <!-- Cake Top Frosting Face -->
      <path d="M38 68 L114 58 L138 72 L62 82 Z" fill="#FAF7F2" />
      <!-- Back Frosting Wall -->
      <path d="M114 58 L138 72 L138 112 L114 116 Z" fill="#E8DDD0" />
      <!-- Chocolate Ganache Drip -->
      <path d="M38 68 Q52 74 62 82 Q80 84 92 78 Q110 80 114 58" stroke="#3D1D10" stroke-width="4" fill="none" />
      <!-- Red Strawberry on Top -->
      <path d="M80 52 C74 42 90 38 94 48 C98 56 86 62 80 52 Z" fill="#DC2626" />
      <path d="M88 40 L90 34 L93 40" stroke="#16A34A" stroke-width="2" stroke-linecap="round" />
    </svg>
  `;

  const SVG_GLAZED_SCONE = `
    <svg viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-svg">
      <!-- Antique Floral Saucer -->
      <ellipse cx="80" cy="118" rx="65" ry="16" fill="#1C2833" />
      <ellipse cx="80" cy="116" rx="60" ry="14" fill="#D4AF37" opacity="0.8" />
      <ellipse cx="80" cy="114" rx="55" ry="12" fill="#FAF7F2" />
      <!-- Scone Body (Golden Brown Triangle) -->
      <path d="M38 106 Q78 68 124 102 Q82 118 38 106 Z" fill="#C88E4B" />
      <path d="M42 104 Q78 72 120 100 Q82 114 42 104 Z" fill="#DEAB6C" />
      <!-- Wild Blueberries peeking through dough -->
      <circle cx="56" cy="102" r="5" fill="#2E3C62" />
      <circle cx="98" cy="104" r="6" fill="#2E3C62" />
      <circle cx="78" cy="98" r="4.5" fill="#2E3C62" />
      <!-- White Royal Icing Glaze -->
      <path d="M48 98 Q76 72 114 96 Q108 108 94 104 Q84 109 72 102 Q58 108 48 98 Z" fill="#FFFFFF" opacity="0.94" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
      <!-- Colorful Confetti Sprinkles -->
      <rect x="62" y="88" width="6" height="2.5" rx="1.2" fill="#EF4444" transform="rotate(25 62 88)" />
      <rect x="74" y="82" width="6" height="2.5" rx="1.2" fill="#3B82F6" transform="rotate(-35 74 82)" />
      <rect x="88" y="84" width="6" height="2.5" rx="1.2" fill="#10B981" transform="rotate(40 88 84)" />
      <rect x="96" y="94" width="6" height="2.5" rx="1.2" fill="#F59E0B" transform="rotate(-20 96 94)" />
      <rect x="68" y="98" width="6" height="2.5" rx="1.2" fill="#EC4899" transform="rotate(15 68 98)" />
      <rect x="82" y="94" width="6" height="2.5" rx="1.2" fill="#8B5CF6" transform="rotate(-45 82 94)" />
    </svg>
  `;

  const SVG_ICED_DRINK = `
    <svg viewBox="0 0 140 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-svg">
      <!-- Glass Shadow -->
      <ellipse cx="70" cy="155" rx="35" ry="8" fill="rgba(37,22,16,0.15)" />
      <!-- Straw -->
      <rect x="76" y="16" width="6" height="110" rx="3" fill="#C85A32" transform="rotate(12 76 16)" />
      <!-- Glass Tumbler Outer -->
      <path d="M42 45 L50 148 Q70 152 90 148 L98 45 Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" />
      <!-- Cold Brew Liquid -->
      <path d="M44 65 L51 144 Q70 148 89 144 L96 65 Q70 68 44 65 Z" fill="url(#coldBrewGrad)" opacity="0.9" />
      <!-- Floating Ice Cubes -->
      <rect x="54" y="72" width="16" height="16" rx="3" fill="rgba(255,255,255,0.7)" transform="rotate(15 54 72)" stroke="rgba(255,255,255,0.9)" />
      <rect x="72" y="80" width="18" height="18" rx="3" fill="rgba(255,255,255,0.65)" transform="rotate(-12 72 80)" stroke="rgba(255,255,255,0.9)" />
      <rect x="60" y="102" width="15" height="15" rx="3" fill="rgba(255,255,255,0.6)" transform="rotate(22 60 102)" />
      <!-- Condensation Drops -->
      <circle cx="48" cy="88" r="1.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="92" cy="110" r="1.8" fill="#FFFFFF" opacity="0.8" />
      <circle cx="52" cy="125" r="1.2" fill="#FFFFFF" opacity="0.7" />
      <defs>
        <linearGradient id="coldBrewGrad" x1="70" y1="65" x2="70" y2="148" gradientUnits="userSpaceOnUse">
          <stop stop-color="#78350F" />
          <stop offset="0.6" stop-color="#451A03" />
          <stop offset="1" stop-color="#240E02" />
        </linearGradient>
      </defs>
    </svg>
  `;

  const SVG_GOLDEN_BISCUIT = `
    <svg viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-svg">
      <ellipse cx="75" cy="120" rx="55" ry="12" fill="rgba(37,22,16,0.16)" />
      <!-- Layered Biscuit Bottom -->
      <ellipse cx="75" cy="100" rx="46" ry="15" fill="#C88E4B" />
      <rect x="29" y="80" width="92" height="20" fill="#C88E4B" />
      <!-- Flaky Mid Crack Line -->
      <ellipse cx="75" cy="80" rx="45" ry="14" fill="#EDB978" />
      <path d="M30 82 Q75 88 120 82" stroke="#A66727" stroke-width="2.5" />
      <!-- Upper Layer -->
      <rect x="31" y="65" width="88" height="15" fill="#EDB978" />
      <!-- Golden Brown Crust Top -->
      <ellipse cx="75" cy="65" rx="44" ry="13" fill="#A8621A" />
      <ellipse cx="75" cy="63" rx="41" ry="11" fill="#C9802B" />
      <!-- Melted Butter Pool -->
      <ellipse cx="75" cy="62" rx="20" ry="6" fill="#FCD34D" opacity="0.9" />
    </svg>
  `;

  // Corner Bistro Scene SVG Art
  const SVG_CORNER_BISTRO = `
    <svg viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="bistro-svg-art">
      <!-- Background Ambient Floor & Brick Line -->
      <line x1="10" y1="112" x2="230" y2="112" stroke="#E5D9CC" stroke-width="3" stroke-linecap="round" />
      
      <!-- Vintage Street/Cafe Warm Floor Lamp -->
      <path d="M26 112 L26 25" stroke="#251610" stroke-width="3" />
      <path d="M18 112 L34 112" stroke="#251610" stroke-width="4" stroke-linecap="round" />
      <path d="M26 25 Q35 22 35 15" stroke="#251610" stroke-width="2.5" fill="none" />
      <!-- Lamp Shade & Warm Glowing Light -->
      <path d="M28 15 L42 15 L46 22 L24 22 Z" fill="#251610" />
      <circle cx="35" cy="23" r="5" fill="#F59E0B" class="bistro-lamp-glow" />
      <circle cx="35" cy="23" r="14" fill="rgba(245,158,11,0.22)" class="bistro-lamp-glow" />

      <!-- Wooden Bistro Bench with Iron Legs -->
      <!-- Iron Legs -->
      <path d="M45 92 L42 112 M195 92 L198 112 M120 92 L120 112" stroke="#251610" stroke-width="3.5" stroke-linecap="round" />
      <!-- Bench Backrest Slats -->
      <rect x="40" y="66" width="160" height="7" rx="3.5" fill="#8C4A2F" />
      <rect x="40" y="75" width="160" height="7" rx="3.5" fill="#A85736" />
      <!-- Bench Seat Plank -->
      <rect x="36" y="87" width="168" height="9" rx="4" fill="#C86A45" />

      <!-- Bistro Round Marble Table (Center) -->
      <path d="M120 84 L120 112 M112 112 L128 112" stroke="#251610" stroke-width="2.5" stroke-linecap="round" />
      <ellipse cx="120" cy="84" rx="20" ry="5" fill="#FFFFFF" stroke="#EFE8DD" stroke-width="1.5" />
      <!-- Cup & Pastry on Table -->
      <ellipse cx="114" cy="83" rx="4" ry="2.5" fill="#C85A32" />
      <ellipse cx="126" cy="83" rx="4" ry="2" fill="#E8B573" />
      <!-- Table Steam -->
      <path class="table-steam" d="M114 80 Q112 74 115 70" stroke="rgba(200,90,50,0.7)" stroke-width="1.5" fill="none" stroke-linecap="round" />

      <!-- ================= PATRON 1: LEFT (COFFEE SIPPER) ================= -->
      <g id="patron-left">
        <!-- Body / Sweater -->
        <path d="M58 87 Q64 74 74 75 Q82 74 86 87 Z" fill="#2E4057" />
        <!-- Head & Hair -->
        <g class="patron-left-head">
          <circle cx="72" cy="62" r="8" fill="#F4D06F" />
          <!-- Stylish Hair -->
          <path d="M64 61 C64 52 78 52 80 58 C77 59 72 61 70 65 Z" fill="#251610" />
        </g>
        <!-- Arm & Coffee Cup -->
        <g class="patron-left-arm">
          <path d="M62 76 Q70 82 74 82" stroke="#2E4057" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <!-- Mug in Hand -->
          <circle cx="75" cy="80" r="3.5" fill="#C85A32" />
          <ellipse cx="75" cy="78" rx="2.5" ry="1.2" fill="#FAF7F2" />
        </g>
      </g>

      <!-- ================= PATRON 2: RIGHT (TALKING & GESTURING) ================= -->
      <g id="patron-right">
        <!-- Body / Trench Jacket -->
        <path d="M154 87 Q158 74 168 74 Q178 74 182 87 Z" fill="#C85A32" />
        <!-- Head & Beret/Hat -->
        <g class="patron-right-head">
          <circle cx="168" cy="62" r="8" fill="#F2C5A2" />
          <!-- Chic Beret -->
          <path d="M158 59 C160 52 176 52 178 58 Z" fill="#1C1D21" />
        </g>
        <!-- Expressive Gesturing Arm -->
        <g class="patron-right-arm">
          <path d="M174 76 Q184 76 186 68" stroke="#C85A32" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Hand holding treat -->
          <circle cx="186" cy="67" r="2.5" fill="#F2C5A2" />
          <circle cx="187" cy="66" r="2" fill="#E8B573" />
        </g>
      </g>

      <!-- Ambient Chat / Aroma Sparkles -->
      <circle cx="106" cy="60" r="1.5" fill="#C85A32" opacity="0.6" />
      <circle cx="134" cy="56" r="1.8" fill="#F59E0B" opacity="0.7" />
    </svg>
  `;

  // Initialize Background 3D Elements
  function init3DBackground() {
    // Check if scene container already exists
    let scene = document.querySelector('.ambient-3d-scene');
    if (!scene) {
      scene = document.createElement('div');
      scene.className = 'ambient-3d-scene';
      scene.setAttribute('aria-hidden', 'true');
      document.body.prepend(scene);
    }

    scene.innerHTML = `
      <div class="ambient-3d-world" id="ambientWorld">
        <div class="float-item-3d float-cup-steaming" data-depth="0.12">${SVG_COFFEE_CUP}</div>
        <div class="float-item-3d float-pancake-stack" data-depth="0.18">${SVG_PANCAKE_STACK}</div>
        <div class="float-item-3d float-cake-slice" data-depth="0.14">${SVG_CAKE_SLICE}</div>
        <div class="float-item-3d float-glazed-scone" data-depth="0.16">${SVG_GLAZED_SCONE}</div>
        <div class="float-item-3d float-iced-drink" data-depth="0.10">${SVG_ICED_DRINK}</div>
        <div class="float-item-3d float-golden-biscuit" data-depth="0.15">${SVG_GOLDEN_BISCUIT}</div>
      </div>
    `;

    // Parallax Physics Engine
    const world = document.getElementById('ambientWorld');
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    // Desktop Mouse Move
    window.addEventListener('mousemove', function (e) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Normalized delta [-1, 1]
      targetX = (e.clientX - centerX) / centerX;
      targetY = (e.clientY - centerY) / centerY;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });

    // Mobile Gyroscope / Device Orientation
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (e) {
        if (e.gamma !== null && e.beta !== null) {
          // Gamma is left-to-right [-90, 90], Beta is front-to-back [-180, 180]
          targetX = Math.max(-1, Math.min(1, e.gamma / 30));
          targetY = Math.max(-1, Math.min(1, (e.beta - 45) / 30));

          if (!isMoving) {
            isMoving = true;
            requestAnimationFrame(updateParallax);
          }
        }
      }, { passive: true });
    }

    // Mobile Touch Drag Parallax
    window.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        targetX = Math.max(-1, Math.min(1, (e.touches[0].clientX - centerX) / centerX));
        targetY = Math.max(-1, Math.min(1, (e.touches[0].clientY - centerY) / centerY));

        if (!isMoving) {
          isMoving = true;
          requestAnimationFrame(updateParallax);
        }
      }
    }, { passive: true });

    // Smooth Lerp Function
    function updateParallax() {
      // Linear interpolation with damping
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (world) {
        const rotateY = currentX * 12; // deg
        const rotateX = -currentY * 12; // deg
        const moveX = currentX * 24; // px
        const moveY = currentY * 24; // px
        world.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }

      // Check if settled
      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        requestAnimationFrame(updateParallax);
      } else {
        isMoving = false;
      }
    }
  }

  // Initialize Corner Bistro Bench Scene
  function initCornerBistroScene() {
    let container = document.querySelector('.corner-bistro-scene');
    if (!container) {
      container = document.createElement('div');
      container.className = 'corner-bistro-scene';
      document.body.appendChild(container);
    }

    container.innerHTML = `
      <div class="corner-bistro-wrapper">
        <span class="corner-bistro-badge">Live Midtown Bench</span>
        <button class="bistro-toggle-btn" title="Toggle Bistro Scene" aria-label="Toggle Corner Bistro View">✕</button>
        ${SVG_CORNER_BISTRO}
        <div class="bistro-minimized-text">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52B788;"></span>
          Lux Patio Vibe
        </div>
      </div>
    `;

    const toggleBtn = container.querySelector('.bistro-toggle-btn');
    const wrapper = container.querySelector('.corner-bistro-wrapper');

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isMin = container.classList.toggle('minimized');
      toggleBtn.textContent = isMin ? '+' : '✕';
      toggleBtn.title = isMin ? 'Expand Bistro Scene' : 'Minimize Bistro Scene';
      try {
        localStorage.setItem('lux_bistro_minimized', isMin ? 'true' : 'false');
      } catch (err) {}
    });

    wrapper.addEventListener('click', function () {
      if (container.classList.contains('minimized')) {
        container.classList.remove('minimized');
        toggleBtn.textContent = '✕';
        toggleBtn.title = 'Minimize Bistro Scene';
        try {
          localStorage.setItem('lux_bistro_minimized', 'false');
        } catch (err) {}
      }
    });

    // Restore user state
    try {
      if (localStorage.getItem('lux_bistro_minimized') === 'true') {
        container.classList.add('minimized');
        toggleBtn.textContent = '+';
      }
    } catch (err) {}
  }

  // 3D Tilt Card Interaction Helper
  function init3DTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      // Add sheen element if not already present
      if (!card.querySelector('.card-sheen')) {
        const sheen = document.createElement('div');
        sheen.className = 'card-sheen';
        card.appendChild(sheen);
      }

      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // max 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;

        const sheen = card.querySelector('.card-sheen');
        if (sheen) {
          sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 75%)`;
        }
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      });

      card.addEventListener('mouseenter', function () {
        card.style.transition = 'transform 0.1s ease-out';
      });
    });
  }

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    init3DBackground();
    initCornerBistroScene();
    init3DTiltCards();
  });

  // Export to window for dynamic card re-binding
  window.Lux3D = {
    initTiltCards: init3DTiltCards
  };
})();
