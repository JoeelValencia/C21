document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // 1. STATIC DATA — franchises text & logo image paths
    // =========================================================

    const franchisesData = [
        {category: "PIZZAS Y EMPANADAS", logos: ["assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_1.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_2.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_3.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_4.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_5.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_6.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_7.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_8.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_9.webp","assets/logos/Slide2_PIZZAS_Y_EMPANADAS_logo_10.webp"], items: ["Big Pizza","Almacén de Pizzas","Hell's Pizza","Central de Empanadas","Don Antonio Pizzas y Empanadas","Porto Pizza","Tienda de Empanadas","Olivia Pizzas & Empanadas","Pizzería Popular","Vinnie's"]},
        {category: "PANADERÍA, PASTELERÍA Y CONFITERÍA", logos: ["assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_1.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_2.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_3.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_4.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_5.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_6.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_7.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_8.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_9.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_10.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_11.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_12.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_13.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_14.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_15.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_16.webp","assets/logos/Slide3_PANADERIA_PASTELERIA_Y_CONFITERIA_logo_17.webp"], items: ["Café Martínez","Dulce Hora","Tostado Café Club","Nucha Bakery","Tienda de Café","Caféses de Especialidad","Le Blé","Kersen","La Fábrica","Buenos Aires Bakery","Sabrosísimo","Craft Vegan Bakery","Molina Panadería - Café","Co-Pain","Tense","Quijote","Ramallo Club"]},
        {category: "CONSTRUCCIÓN", logos: ["assets/logos/Slide4_CONSTRUCCION_logo_1.webp","assets/logos/Slide4_CONSTRUCCION_logo_2.webp","assets/logos/Slide4_CONSTRUCCION_logo_3.webp","assets/logos/Slide4_CONSTRUCCION_logo_4.webp","assets/logos/Slide4_CONSTRUCCION_logo_5.webp"], items: ["Pirka","Roca Viviendas Americanas","Kit Solar","Casa Construtor","Energiu"]},
        {category: "INDUMENTARIA", logos: ["assets/logos/Slide5_INDUMENTARIA_logo_1.webp","assets/logos/Slide5_INDUMENTARIA_logo_2.webp","assets/logos/Slide5_INDUMENTARIA_logo_3.webp","assets/logos/Slide5_INDUMENTARIA_logo_4.webp","assets/logos/Slide5_INDUMENTARIA_logo_5.webp","assets/logos/Slide5_INDUMENTARIA_logo_6.webp"], items: ["Vancouver","Adriana Costantini","Eyelit","VCP","Farenheite","Caviar"]},
        {category: "COMERCIALIZACIÓN DE PRODUCTOS", logos: ["assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_1.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_2.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_3.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_4.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_5.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_6.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_7.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_8.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_9.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_10.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_11.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_12.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_13.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_14.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_15.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_16.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_17.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_18.webp","assets/logos/Slide6_COMERCIALIZACION_DE_PRODUCTOS_logo_19.webp"], items: ["Creciendo","STG","Delturista","Springwall","Hiper Blanco","Kol","Crazy Pet","Moda Shop","Puppis","Outlet Bar","Goloriolo","Copani Puro Chocolate","Draxxo","Inspira Home & Grill","Travel Services","Jardín Maternal Tierra de Colores","Pelokitos Flow","Clásicos Barbería & Tattoo Shop","Espacio Vita"]},
        {category: "ENTRETENIMIENTO", logos: ["assets/logos/Slide7_ENTRETENIMIENTO_logo_1.webp","assets/logos/Slide7_ENTRETENIMIENTO_logo_2.webp","assets/logos/Slide7_ENTRETENIMIENTO_logo_3.webp"], items: ["Altitude","Art Point","Another World"]},
        {category: "SALUD Y DEPORTES", logos: ["assets/logos/Slide8_SALUD_Y_DEPORTES_logo_1.webp","assets/logos/Slide8_SALUD_Y_DEPORTES_logo_2.webp","assets/logos/Slide8_SALUD_Y_DEPORTES_logo_3.webp","assets/logos/Slide8_SALUD_Y_DEPORTES_logo_4.webp","assets/logos/Slide8_SALUD_Y_DEPORTES_logo_5.webp"], items: ["Vitalcer","Coquito's","Core","Tuluka Fitness Club","Le Panem"]},
        {category: "ESTÉTICA", logos: ["assets/logos/Slide9_ESTETICA_logo_1.webp","assets/logos/Slide9_ESTETICA_logo_2.webp","assets/logos/Slide9_ESTETICA_logo_3.webp","assets/logos/Slide9_ESTETICA_logo_4.webp","assets/logos/Slide9_ESTETICA_logo_5.webp"], items: ["d-uñas","Sólocejas","Estética Martínez","AM","Niki Beauty Bar"]},
        {category: "HELADERÍAS", logos: ["assets/logos/Slide10_HELADERIAS_logo_1.webp","assets/logos/Slide10_HELADERIAS_logo_2.webp","assets/logos/Slide10_HELADERIAS_logo_3.webp","assets/logos/Slide10_HELADERIAS_logo_4.webp"], items: ["Cremolatti","Mercado de Helados","Via Cosenza","Aloha"]},
        {category: "CERVECERÍA Y HAMBURGUESERÍA", logos: ["assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_1.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_2.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_3.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_4.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_5.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_6.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_7.webp","assets/logos/Slide11_CERVECERIA_Y_HAMBURGUESERIA_logo_8.webp"], items: ["La Birra Bar","El Desembarco","Mostaza","Deniro Hamburguesas de Entraña","Temple","Mr. Tasty","Feriado Cantina","Dean & Dennys"]},
        {category: "GASTRONOMÍA", logos: ["assets/logos/Slide12_GASTRONOMIA_logo_1.webp","assets/logos/Slide12_GASTRONOMIA_logo_2.webp","assets/logos/Slide12_GASTRONOMIA_logo_3.webp","assets/logos/Slide12_GASTRONOMIA_logo_4.webp","assets/logos/Slide12_GASTRONOMIA_logo_5.webp","assets/logos/Slide12_GASTRONOMIA_logo_6.webp","assets/logos/Slide12_GASTRONOMIA_logo_7.webp","assets/logos/Slide12_GASTRONOMIA_logo_8.webp","assets/logos/Slide12_GASTRONOMIA_logo_9.webp","assets/logos/Slide12_GASTRONOMIA_logo_10.webp","assets/logos/Slide12_GASTRONOMIA_logo_11.webp","assets/logos/Slide12_GASTRONOMIA_logo_12.webp","assets/logos/Slide12_GASTRONOMIA_logo_13.webp"], items: ["By Papas","Franccesca","Jiro Sushi","Palta","Varvarco","Sanduba","L'Amuse Bouche Crêpes","Açai Brasil","Pibä","Koi","Green & Co","Bodegón de Milanesas","Sushi May"]}
    ];

    // =========================================================
    // 2. LENIS SMOOTH SCROLL
    // =========================================================
    let lenis;
    try {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0, 0);
        }
    } catch(e) {
        console.warn("Lenis failed to init:", e);
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
    }

    // =========================================================
    // 3. BUILD UI
    // =========================================================
    buildHorizontalGallery();
    buildBentoDirectory();
    setupSearch();
    initGSAPAnimations();

    // --- Horizontal Gallery (Logo Panels) ---
    function buildHorizontalGallery() {
        const container = document.getElementById("horizontalContainer");
        if (!container) return;
        container.innerHTML = "";

        franchisesData.forEach(cat => {
            const panel = document.createElement("div");
            panel.className = "horiz-panel";

            // Header
            const header = document.createElement("div");
            header.className = "panel-header";
            header.innerHTML = `
                <h3 class="panel-title">${cat.category}</h3>
                <span class="panel-count">${cat.logos.length} MARCAS</span>
            `;

            // Grid
            const grid = document.createElement("div");
            grid.className = "panel-grid";

            cat.logos.forEach((logoPath, idx) => {
                const card = document.createElement("div");
                card.className = "logo-card";
                card.setAttribute("data-name", cat.items[idx] || "");
                card.innerHTML = `<img src="${logoPath}" loading="lazy" alt="${cat.items[idx] || 'Logo Franquicia'}">`;
                grid.appendChild(card);
            });

            panel.appendChild(header);
            panel.appendChild(grid);
            container.appendChild(panel);
        });
    }

    // --- Bento Directory ---
    function buildBentoDirectory() {
        const container = document.getElementById("bentoContainer");
        if (!container) return;
        container.innerHTML = "";

        const sizeClasses = ["large", "wide", "tall", "", "", "wide", "tall", "", "large", "", "", "wide"];

        franchisesData.forEach((cat, i) => {
            const box = document.createElement("div");
            box.className = `bento-box ${sizeClasses[i % sizeClasses.length]}`;

            const listItems = cat.items.map(item => `<li>${item}</li>`).join("");

            box.innerHTML = `
                <h4 class="bento-title">${cat.category}</h4>
                <ul class="bento-list">${listItems}</ul>
                <span class="bento-count">${cat.logos.length} MARCAS PREMIUM</span>
            `;
            container.appendChild(box);
        });
    }

    // =========================================================
    // 4. SEARCH
    // =========================================================
    function setupSearch() {
        const searchInput = document.getElementById("searchInput");
        const searchResultsSection = document.getElementById("search-results-section");
        const searchResultsList = document.getElementById("searchResultsList");
        if (!searchInput || !searchResultsSection || !searchResultsList) return;

        // Flat list for search
        const allFranchises = [];
        franchisesData.forEach(cat => {
            cat.items.forEach(item => {
                allFranchises.push({ name: item, category: cat.category });
            });
        });

        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length === 0) {
                searchResultsSection.classList.add("hidden");
                return;
            }
            const filtered = allFranchises.filter(f =>
                f.name.toLowerCase().includes(query) ||
                f.category.toLowerCase().includes(query)
            );
            if (filtered.length > 0) {
                searchResultsList.innerHTML = filtered.map(f => `
                    <li>
                        <strong>${f.name}</strong>
                        <span>${f.category}</span>
                    </li>
                `).join("");
            } else {
                searchResultsList.innerHTML = `<li><span style="color:#666">Sin resultados para "${query}"</span></li>`;
            }
            searchResultsSection.classList.remove("hidden");
        });

        // Close on click outside
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".search-wrap") && !e.target.closest("#search-results-section")) {
                searchResultsSection.classList.add("hidden");
            }
        });
    }

    // =========================================================
    // 5. GSAP ANIMATIONS (vertical scroll reveals)
    // =========================================================
    function initGSAPAnimations() {
        if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

        // Hero title reveal
        gsap.from(".line1", { y: 120, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.1 });
        gsap.from(".line2", { y: 120, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.3 });
        gsap.from(".line3", { y: 120, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.5 });
        gsap.from(".hero-subtitle", { opacity: 0, y: 20, duration: 1, delay: 0.9 });
        gsap.from(".scroll-indicator", { opacity: 0, y: 20, duration: 1, delay: 1.4 });
        gsap.from(".navbar", { opacity: 0, y: -20, duration: 1, delay: 0.1 });

        // Each category panel fades in on scroll
        document.querySelectorAll('.horiz-panel').forEach(panel => {
            gsap.from(panel.querySelector('.panel-header'), {
                scrollTrigger: { trigger: panel, start: "top 85%" },
                y: 40, opacity: 0, duration: 0.7, ease: "power3.out"
            });
            gsap.from(panel.querySelectorAll('.logo-card'), {
                scrollTrigger: { trigger: panel, start: "top 80%" },
                y: 50, opacity: 0, duration: 0.6, stagger: 0.06, ease: "back.out(1.2)"
            });
        });

        // Bento boxes reveal
        gsap.from(".bento-box", {
            scrollTrigger: {
                trigger: ".bento-section",
                start: "top 75%",
            },
            y: 80,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.2)"
        });
    }

    // =========================================================
    // 6. WHATSAPP BUTTON SCROLL EFFECT
    // =========================================================
    const wppBtn = document.querySelector('.floating-whatsapp');
    if (wppBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                wppBtn.classList.add('scrolled');
            } else {
                wppBtn.classList.remove('scrolled');
            }
        });
    }

    // =========================================================
    // 7. 3D NETWORK BACKGROUND (Vanta.js)
    // =========================================================
    if (typeof VANTA !== 'undefined' && document.getElementById('hero-section')) {
        VANTA.NET({
            el: "#hero-section",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xd4af37,
            backgroundColor: 0x030303,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }

});
