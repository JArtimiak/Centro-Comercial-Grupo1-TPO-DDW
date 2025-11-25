/* ======================================
   MALL COSTA DEL SOL - JAVASCRIPT
   Funcionalidades dinámicas e interactivas
   ====================================== */

// ============= INICIALIZACIÓN =============
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar menú móvil
    initMobileMenu();
    
    // Inicializar buscador de locales
    initStoreSearch();
    
    // Inicializar mapa interactivo
    initInteractiveMap();
    
    // Inicializar FAQ
    initFAQ();
    
    // Inicializar formularios
    initForms();
    
    // Smooth scroll para enlaces internos
    initSmoothScroll();
    
    // Animaciones al scroll
    initScrollAnimations();
});

// ============= MENÚ MÓVIL =============
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// ============= DATOS DE LOCALES =============
const storesData = [
    // ======== Locales propios ========
    {
        name: 'On Running',
        category: 'zapatillas',
        location: 'E1',
        floor: 'primer-piso',
        description: 'Zapatillas técnicas y urbanas de alto rendimiento.'
    },
    {
        name: 'Experiencia Café',
        category: 'cafe',
        location: 'A1',
        floor: 'planta-baja',
        description: 'Café de especialidad y experiencias sensoriales.'
    },
    {
        name: 'Inti Fotografía',
        category: 'fotografia',
        location: 'B2',
        floor: 'primer-piso',
        description: 'Estudio fotográfico, revelado y productos profesionales.'
    },
    {
        name: 'Tech Accesorios',
        category: 'accesorios',
        location: 'B1',
        floor: 'planta-baja',
        description: 'Accesorios para celulares, notebooks y dispositivos.'
    },
    {
        name: 'TecnoFlex',
        category: 'tecnologia',
        location: 'C1',
        floor: 'primer-piso',
        description: 'Tecnología flexible para oficina, gaming y hogar.'
    },

    // ======== LOCALES inventados ========
    { 
        name: 'Tech Store', 
        category: 'tecnologia', 
        location: 'A1', 
        floor: 'primer-piso', 
        description: 'Electrónica y gadgets.'
    },
    { 
        name: 'iCase Accesorios', 
        category: 'accesorios', 
        location: 'B1', 
        floor: 'planta-baja', 
        description: 'Accesorios para celulares.'
    },
    { 
        name: 'Café del Mar', 
        category: 'cafe', 
        location: 'C1', 
        floor: 'planta-baja', 
        description: 'Café especialidad con vista al mar.'
    },
    { 
        name: 'Sport Shoes', 
        category: 'zapatillas', 
        location: 'D1', 
        floor: 'primer-piso', 
        description: 'Zapatillas deportivas y urbanas.'
    },
    { 
        name: 'Foto Express', 
        category: 'fotografia', 
        location: 'E1', 
        floor: 'primer-piso', 
        description: 'Fotografía y revelado digital.'
    }
];


// ============= BUSCADOR DE LOCALES =============
function initStoreSearch() {
    const searchInput = document.getElementById('searchLocal');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // Limpiar resultados si no hay término de búsqueda
            if (searchTerm.length < 2) {
                searchResults.innerHTML = '';
                clearHighlights();
                return;
            }
            
            // Buscar coincidencias
            const matches = storesData.filter(store => 
                store.name.toLowerCase().includes(searchTerm) ||
                store.description.toLowerCase().includes(searchTerm) ||
                store.category.toLowerCase().includes(searchTerm)
            );
            
            // Mostrar resultados
            displaySearchResults(matches, searchResults);
            
            // Resaltar locales en la página
            highlightStores(matches);
        });
    }
    
    // Buscador del botón
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            if (searchInput) {
                searchInput.focus();
            }
        });
    }
}

function displaySearchResults(matches, container) {
    if (matches.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #A8A8A8; padding: 1rem;">No se encontraron locales que coincidan con tu búsqueda.</p>';
        return;
    }
    
    let html = `<p style="margin-bottom: 1rem; font-weight: 600;">Se encontraron ${matches.length} resultado(s):</p>`;
    
    matches.forEach(store => {
        html += `
            <div class="search-result-item" data-store-name="${store.name}" data-location="${store.location}">
                <h4 style="margin-bottom: 0.25rem; color: #2F3E46;">${store.name}</h4>
                <p style="margin-bottom: 0.25rem; color: #5EC6E8; font-size: 0.9rem;">${store.description}</p>
                <p style="color: #A8A8A8; font-size: 0.85rem;"><img class="icono-locales-ubicacion" src="img/icono-contacto-mapa.png" alt="mapa-local"> Local ${store.location} - ${store.floor === 'planta-baja' ? 'Planta Baja' : 'Primer Piso'}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Agregar evento click a cada resultado
    const resultItems = container.querySelectorAll('.search-result-item');
    resultItems.forEach(item => {
        item.addEventListener('click', function() {
            const storeName = this.dataset.storeName;
            scrollToStore(storeName);
        });
    });
}

function highlightStores(matches) {
    // Limpiar resaltados previos
    clearHighlights();
    
    if (matches.length === 0) return;
    
    // Resaltar las tarjetas de los locales encontrados
    matches.forEach(store => {
        const storeCards = document.querySelectorAll(`[data-store-name="${store.name}"]`);
        storeCards.forEach(card => {
            if (card.classList.contains('store-card')) {
                card.classList.add('highlighted');
                card.style.border = '3px solid #FFA94D';
            }
        });
    });
}

function clearHighlights() {
    const highlightedCards = document.querySelectorAll('.store-card.highlighted');
    highlightedCards.forEach(card => {
        card.classList.remove('highlighted');
        card.style.border = '';
    });
}

function scrollToStore(storeName) {
    const storeCard = document.querySelector(`.store-card[data-store-name="${storeName}"]`);
    if (storeCard) {
        storeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Efecto de pulsación
        storeCard.style.animation = 'pulse 1s ease-in-out 2';
        setTimeout(() => {
            storeCard.style.animation = '';
        }, 2000);
    }
}

// ============= MAPA INTERACTIVO =============
function initInteractiveMap() {
    // Cambio de pisos
    const floorButtons = document.querySelectorAll('.floor-btn');
    const floorMaps = document.querySelectorAll('.floor-map');
    
    floorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetFloor = this.dataset.floor;
            
            // Actualizar botones activos
            floorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar el piso correspondiente
            floorMaps.forEach(map => {
                if (map.id === targetFloor) {
                    map.classList.add('active');
                } else {
                    map.classList.remove('active');
                }
            });
        });
    });
    
    // Click en locales del mapa
    const storeMarkers = document.querySelectorAll('.store-marker');
    const storeInfoPanel = document.getElementById('storeInfoPanel');
    
    storeMarkers.forEach(marker => {
        const clickableStore = marker.querySelector('.clickable-store');
        if (clickableStore) {
            clickableStore.addEventListener('click', function(e) {
                e.preventDefault();
                const storeName = marker.dataset.store;
                const storeLocation = marker.dataset.location;
                showStoreInfo(storeName, storeLocation);
                
                // Resaltar en el mapa
                clearMapHighlights();
                marker.classList.add('highlighted');
            });
        }
    });
    
    // Cerrar panel de información
    const closeBtn = document.querySelector('.store-info-panel .close-btn');
    if (closeBtn && storeInfoPanel) {
        closeBtn.addEventListener('click', function() {
            storeInfoPanel.classList.add('hidden');
            clearMapHighlights();
        });
    }
    
    // Buscador en el mapa
    const searchMapInput = document.getElementById('searchMapLocal');
    if (searchMapInput) {
        searchMapInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm.length < 2) {
                clearMapHighlights();
                return;
            }
            
            // Buscar en el mapa
            const matches = storesData.filter(store => 
                store.name.toLowerCase().includes(searchTerm)
            );
            
            highlightStoresOnMap(matches);
            
            // Cambiar al piso correcto si hay coincidencia
            if (matches.length > 0) {
                const firstMatch = matches[0];
                switchToFloor(firstMatch.floor);
            }
        });
    }
}

function showStoreInfo(storeName, location) {
    const storeData = storesData.find(s => s.name === storeName);
    const panel = document.getElementById('storeInfoPanel');
    
    if (!storeData || !panel) return;
    
    const nameElement = document.getElementById('storeInfoName');
    const locationElement = document.getElementById('storeInfoLocation');
    const categoryElement = document.getElementById('storeInfoCategory');
    const linkElement = document.getElementById('storeInfoLink');
    
    if (nameElement) nameElement.textContent = storeData.name;
    if (locationElement) locationElement.textContent = `📍 Local ${location} - ${storeData.floor === 'planta-baja' ? 'Planta Baja' : 'Primer Piso'}`;
    if (categoryElement) categoryElement.textContent = storeData.description;
    if (linkElement) {
        linkElement.href = `pages/${storeData.category}/${storeData.name.toLowerCase().replace(/\s+/g, '-')}.html`;
    }
    
    panel.classList.remove('hidden');
}

function clearMapHighlights() {
    const highlightedMarkers = document.querySelectorAll('.store-marker.highlighted');
    highlightedMarkers.forEach(marker => marker.classList.remove('highlighted'));
}

function highlightStoresOnMap(matches) {
    clearMapHighlights();
    
    matches.forEach(store => {
        const marker = document.querySelector(`.store-marker[data-store="${store.name}"]`);
        if (marker) {
            marker.classList.add('highlighted');
        }
    });
}

function switchToFloor(floor) {
    const floorButton = document.querySelector(`.floor-btn[data-floor="${floor}"]`);
    if (floorButton) {
        floorButton.click();
    }
}

// ============= FAQ =============
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todas las FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Abrir la FAQ clickeada si no estaba activa
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ============= FORMULARIOS =============
function initForms() {
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
    
    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleNewsletterForm(this);
        });
    }
}

function handleContactForm(form) {
    const formMessage = document.getElementById('formMessage');
    
    // Validación básica
    const nombre = form.querySelector('#nombre').value;
    const email = form.querySelector('#email').value;
    const asunto = form.querySelector('#asunto').value;
    const mensaje = form.querySelector('#mensaje').value;
    const terminos = form.querySelector('#terminos').checked;
    
    if (!nombre || !email || !asunto || !mensaje) {
        showFormMessage(formMessage, 'Por favor completa todos los campos obligatorios.', 'error');
        return;
    }
    
    if (!terminos) {
        showFormMessage(formMessage, 'Debes aceptar los términos y condiciones.', 'error');
        return;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage(formMessage, 'Por favor ingresa un email válido.', 'error');
        return;
    }
    
    // Simular envío (en producción esto se conectaría a un backend)
    showFormMessage(formMessage, '¡Mensaje enviado exitosamente! Te responderemos pronto.', 'success');
    form.reset();
    
    // Scroll al mensaje
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function handleNewsletterForm(form) {
    const email = form.querySelector('input[type="email"]').value;
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingresa un email válido.');
        return;
    }
    
    // Simular suscripción
    alert('¡Gracias por suscribirte! Recibirás nuestras novedades en tu email.');
    form.reset();
}

function showFormMessage(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.className = 'form-message ' + type;
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        element.className = 'form-message';
        element.textContent = '';
    }, 5000);
}

// ============= SMOOTH SCROLL =============
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar # solo
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============= ANIMACIONES AL SCROLL =============
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos a animar
    const animatedElements = document.querySelectorAll('.feature-card, .store-card, .experience-card, .event-item, .service-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============= UTILIDADES =============

// Función para formatear texto
function capitalizeWords(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

// Función para debounce (optimización de búsqueda)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce al buscador para mejor performance
const searchInput = document.getElementById('searchLocal');
if (searchInput) {
    const debouncedSearch = debounce(function(e) {
        // La lógica de búsqueda ya está en initStoreSearch
    }, 300);
    
    searchInput.addEventListener('input', debouncedSearch);
}

// ============= ACCESIBILIDAD =============

// Manejo de teclado para el menú
document.addEventListener('keydown', function(e) {
    // Cerrar menú móvil con ESC
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        // Cerrar panel de info del mapa
        const storeInfoPanel = document.getElementById('storeInfoPanel');
        if (storeInfoPanel && !storeInfoPanel.classList.contains('hidden')) {
            storeInfoPanel.classList.add('hidden');
            clearMapHighlights();
        }
    }
});

// ============= CATEGORÍAS FILTRO =============
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.dataset.category;
        const categorySection = document.getElementById(category);
        
        if (categorySection) {
            categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Highlight de la sección
            const categoryTitle = categorySection.querySelector('.category-title');
            if (categoryTitle) {
                categoryTitle.style.animation = 'pulse 1s ease-in-out 2';
                setTimeout(() => {
                    categoryTitle.style.animation = '';
                }, 2000);
            }
        }
    });
});

// ============= LOGGING (solo en desarrollo) =============
console.log('🏖️ Mall Costa del Sol - Sistema inicializado');
console.log(`📊 Total de locales: ${storesData.length}`);
console.log('✅ Todas las funcionalidades cargadas correctamente');

