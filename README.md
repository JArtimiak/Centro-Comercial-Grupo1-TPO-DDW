# 🏖️ Mall Costa del SOL

## Shopping Temático Inspirado en la Costa Atlántica

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)
![Tecnologías](https://img.shields.io/badge/Tecnolog%C3%ADas-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)

---

## 📋 Descripción del Proyecto

**Mall Costa del SOL** es un sitio web completo para un shopping temático inspirado en los paseos costeros de la costa atlántica argentina. El proyecto ha sido desarrollado como Trabajo Práctico Obligatorio para la materia de Diseño y Desarrollo Web.

El sitio combina un diseño minimalista y moderno con funcionalidades dinámicas que mejoran significativamente la experiencia del usuario, incluyendo un buscador de locales y un mapa interactivo.

---

## 🎯 Objetivos del Proyecto

- ✅ Diseñar y desarrollar un sitio web funcional, atractivo y accesible
- ✅ Aplicar principios de usabilidad y diseño responsivo
- ✅ Implementar elementos interactivos y dinámicos
- ✅ Crear una experiencia de usuario optimizada siguiendo las heurísticas de Nielsen
- ✅ Cumplir con criterios de accesibilidad web (WCAG)

---

## 🎨 Diseño Visual

### Paleta de Colores

El sitio utiliza una paleta inspirada en elementos costeros:

```css
--color-sol: #FFA94D        /* Naranja cálido del sol */
--color-mar: #5EC6E8         /* Azul turquesa del mar */
--color-arena: #F7E7BE       /* Beige suave de la arena */
--color-atardecer: #F4A261   /* Naranja atardecer */
--color-texto: #2F3E46       /* Gris oscuro para texto */
--color-fondo: #FAF9F6       /* Blanco cálido de fondo */
--color-verde: #7AB97A       /* Verde suave costero */
```

### Tipografía

- **Fuente Principal:** Helvetica Neue, Arial, Sans-serif
- **Características:** Limpia, moderna y altamente legible

---

## 🚀 Funcionalidades Principales

### 1. 🔍 Buscador Dinámico de Locales

**Ubicación:** Página de Locales (`locales.html`)

**Características:**
- Búsqueda en tiempo real mientras el usuario escribe
- Busca por nombre de local, categoría o descripción
- Muestra resultados con información detallada (nombre, ubicación, piso)
- Resalta visualmente los locales encontrados en la galería
- Al hacer clic en un resultado, hace scroll automático al local

**Implementación:**
```javascript
// El buscador filtra un array de objetos con datos de locales
// Actualiza dinámicamente el DOM mostrando coincidencias
// Usa debouncing para optimizar el rendimiento
```

### 2. 🗺️ Mapa Interactivo del Shopping

**Ubicación:** Página Visitanos (`visitanos.html`)

**Características:**
- Mapa SVG interactivo del shopping
- Visualización de 2 plantas (Planta Baja y Primer Piso)
- Cambio de piso mediante botones
- Click en locales del mapa para ver información
- Panel de información que aparece al seleccionar un local
- Buscador integrado que resalta locales en el mapa
- Navegación automática al piso correcto

**Implementación:**
```javascript
// Usa SVG para crear el mapa del shopping
// Event listeners en cada local del mapa
// Sincronización entre búsqueda y visualización del mapa
```

### 3. 📱 Menú Responsive

- Menú hamburguesa en dispositivos móviles
- Navegación intuitiva en todas las resoluciones
- Animaciones suaves

### 4. 📧 Formularios Interactivos

- Validación en tiempo real
- Mensajes de feedback al usuario
- Formulario de contacto completo
- Suscripción a newsletter

### 5. ❓ FAQ Interactivo

- Acordeón con preguntas frecuentes
- Animaciones suaves de apertura/cierre
- Accesible por teclado

---

## 📁 Estructura del Proyecto

```
TPO-FinalGrupal/
│
├── index.html              # Página principal
├── locales.html            # Listado de locales con buscador
├── visitanos.html          # Ubicación y mapa interactivo
├── experiencias.html       # Eventos y actividades
├── contacto.html           # Formulario de contacto y FAQ
│
├── css/
│   └── styles.css          # Estilos globales del sitio
│
├── js/
│   └── script.js           # JavaScript con todas las funcionalidades
│
├── img/                    # Imágenes del sitio
│   ├── hero-beach.jpg
│   ├── cafe-del-mar.jpg
│   ├── [otras imágenes]
│   └── .gitkeep
│
├── pages/                  # Páginas de detalle de locales
│   ├── cafe/
│   ├── fotografia/
│   ├── tecnologia/
│   ├── accesorios/
│   └── zapas/
│
└── README.md               # Este archivo
```

---

## 🌐 Navegación del Sitio

### Estructura de Navegación

```
Index (Mall)
│
├── Locales
│   ├── Café (4 locales)
│   ├── Fotografía (3 locales)
│   ├── Tecnología (5 locales)
│   ├── Accesorios (6 locales)
│   └── Zapas (4 locales)
│
├── Visitanos
│   ├── Información de ubicación
│   ├── Mapa interactivo
│   └── Cómo llegar
│
├── Experiencias
│   ├── Eventos destacados
│   ├── Calendario
│   └── Servicios
│
└── Contacto
    ├── Formulario
    ├── Información de contacto
    └── FAQ
```

---

## 💻 Tecnologías Utilizadas

- **HTML5:** Estructura semántica y accesible
- **CSS3:** Diseño responsive con Flexbox y Grid
- **JavaScript (ES6+):** Funcionalidades dinámicas
- **SVG:** Mapa interactivo del shopping

### No se utilizaron frameworks o librerías externas
Todo el código es vanilla (HTML, CSS y JS puros) siguiendo las consignas del proyecto.

---

## ♿ Accesibilidad

El sitio cumple con las pautas WCAG 2.1 nivel AA:

- ✅ Contraste de colores adecuado (mínimo 4.5:1)
- ✅ Navegación por teclado completa
- ✅ Etiquetas ARIA para lectores de pantalla
- ✅ Textos alternativos en imágenes
- ✅ Formularios con labels asociados
- ✅ Foco visible en elementos interactivos
- ✅ Estructura semántica HTML5

---

## 📱 Diseño Responsive

El sitio es completamente responsive con breakpoints en:

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

### Características Responsive:
- Grid adaptativo que se reorganiza según el tamaño de pantalla
- Menú hamburguesa en móviles
- Imágenes optimizadas con lazy loading
- Tipografía escalable
- Touch-friendly en dispositivos táctiles

---

## 🎯 Heurísticas de Nielsen Aplicadas

1. **Visibilidad del estado del sistema:** Feedback visual en búsquedas y formularios
2. **Coincidencia entre el sistema y el mundo real:** Íconos intuitivos y lenguaje claro
3. **Control y libertad del usuario:** Botones de cerrar, navegación clara
4. **Consistencia y estándares:** Diseño coherente en todas las páginas
5. **Prevención de errores:** Validación de formularios en tiempo real
6. **Reconocimiento antes que recuerdo:** Navegación visible y persistente
7. **Flexibilidad y eficiencia:** Buscador para usuarios avanzados
8. **Diseño estético y minimalista:** Interfaz limpia sin elementos innecesarios
9. **Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de errores:** Mensajes claros
10. **Ayuda y documentación:** FAQ y sección de contacto

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir directamente
1. Descargar o clonar el repositorio
2. Abrir `index.html` en un navegador web

### Opción 2: Servidor local (recomendado)
```bash
# Si tienes Python instalado:
python -m http.server 8000

# Si tienes Node.js:
npx http-server

# Luego abrir en el navegador:
http://localhost:8000
```

---

## 📝 Funcionalidad Dinámica Obligatoria

### ✅ Cumplimiento del Requisito

El sitio cumple con la funcionalidad dinámica obligatoria de permitir al usuario **localizar un comercio de forma dinámica** mediante:

#### 1. 🗺️ Mapa Interactivo (`visitanos.html`)
- Representación visual del shopping en 2 pisos
- Click en locales para ver información
- Buscador integrado que resalta locales en el mapa
- Navegación entre pisos

#### 2. 🔍 Buscador por Nombre (`locales.html`)
- Búsqueda en tiempo real
- Destaca el local en la galería
- Scroll automático al local encontrado
- Muestra ubicación exacta (piso y número de local)

Ambas funcionalidades trabajan con JavaScript puro, manipulando el DOM dinámicamente y ofreciendo una experiencia interactiva al usuario.

---

## 📊 Métricas del Proyecto

- **Páginas HTML:** 5 principales + subsecciones de locales
- **Locales totales:** 22 comercios distribuidos en 5 categorías
- **Líneas de CSS:** ~1500 líneas
- **Líneas de JavaScript:** ~600 líneas
- **Funciones JavaScript:** 20+ funciones
- **Componentes interactivos:** Buscador, Mapa, FAQ, Formularios, Menú móvil

---

## 🎓 Justificación de Decisiones de Diseño

### Paleta de Colores
- **Naranja (Sol):** Color cálido que evoca energía y verano
- **Azul (Mar):** Transmite confianza y frescura
- **Beige (Arena):** Neutral, cálido y relajante
- **Verde:** Elemento natural que complementa la temática costera

### Tipografía
- **Helvetica Neue/Arial:** Garantiza legibilidad en todos los dispositivos
- **Sans-serif:** Aspecto moderno y limpio

### Layout
- **Grid CSS:** Permite diseños flexibles y responsive
- **Espaciado consistente:** Uso de variables CSS para mantener armonía
- **Cards:** Organización clara de información

---

## 🐛 Consideraciones y Limitaciones

- Las imágenes son placeholders (se deben reemplazar con imágenes reales)
- Los enlaces a páginas de detalle de locales son estructurales (páginas no creadas)
- El formulario de contacto no envía emails reales (requiere backend)
- No hay base de datos (los datos están hardcoded en JavaScript)

---

## 🔮 Futuras Mejoras

- [ ] Integración con backend para formularios
- [ ] Base de datos real de locales
- [ ] Sistema de gestión de contenido (CMS)
- [ ] Integración con Google Maps
- [ ] Sistema de reservas/turnos
- [ ] App móvil nativa
- [ ] Galería de fotos con lightbox
- [ ] Sistema de reseñas de locales

---

## 👥 Autoría

Proyecto desarrollado por estudiantes de Ingeniería Informática - UADE
Materia: Diseño y Desarrollo Web
Año: 2025

---

## 📄 Licencia

Este proyecto es de uso académico. Todos los derechos reservados.

---

## 📞 Contacto

Para consultas sobre el proyecto:
- 📧 Email: info@mallcostadelsol.com
- 📱 Teléfono: (011) 1234-5678
- 📍 Ubicación: Av. Costanera 1234, Mar del Plata

---

**Última actualización:** Noviembre 2025

---

*"Donde el verano se encuentra con las mejores marcas"* 🏖️☀️
