# ☕ Café Aroma - Sitio Web

## 📋 Descripción del Proyecto

**Café Aroma** 

### 🎯 Características Principales
- **Página de Inicio** con hero section y características destacadas
- **Catálogo de Productos** con filtros por categoría y paginación
- **Página de Promociones** con ofertas especiales
- **Formulario de Contacto** completamente funcional
- **Navegación Responsiva** con menú móvil
- **Diseño Adaptativo** para desktop y mobile

## 🛠️ Stack Tecnológico

### **Frontend Framework**
- **Angular 19.0.0** - Framework principal para la aplicación
- **TypeScript 5.6.2** - Lenguaje de programación
- **Standalone Components** - Arquitectura moderna de Angular

### **Estilos y UI**
- **Tailwind CSS 3.4.0** - Framework de CSS utility-first
- **Diseño Responsivo** - Mobile-first approach
- **Paleta de Colores Personalizada** - Replicando exactamente el diseño Figma

### **Herramientas de Desarrollo**
- **Angular CLI** - Generación y gestión del proyecto
- **PostCSS** - Procesamiento de CSS (manejado automáticamente por Angular)
- **Git** - Control de versiones

## 🚀 Instalación y Ejecución

### **Prerrequisitos**
- Node.js 18+ 
- npm 9+

### **Pasos de Instalación**

1. **Clonar el repositorio**
   ```bash
   git clone "https://github.com/leonidesCGX/cafe-aroma.git"
   cd cafe-aroma
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

### **Comandos Disponibles**
- `npm start` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run test` - Ejecutar tests unitarios

## 📱 Características de Responsividad

### **Breakpoints Implementados**
- **Mobile First** - Diseño optimizado para dispositivos móviles
- **Tablet** - Adaptación para pantallas medianas
- **Desktop** - Experiencia completa para pantallas grandes

### **Componentes Adaptativos**
- **Header** - Menú hamburguesa en móvil, navegación completa en desktop
- **Grid de Productos** - Columnas responsivas (1 col en móvil, 3 en desktop)
- **Formularios** - Campos optimizados para touch y teclado

## 🎨 Fidelidad Visual al Diseño

### **Paleta de Colores Exacta**
- **Primary**: `#8B4513` (Marrón café)
- **Accent**: `#D2691E` (Marrón dorado)
- **Background**: `#FDF5E6` (Beige claro)
- **Foreground**: `#2F1B14` (Marrón oscuro)

### **Tipografía y Espaciado**
- **Jerarquía Visual** - Títulos, subtítulos y texto siguiendo el diseño
- **Espaciado Consistente** - Márgenes y padding uniformes
- **Iconografía** - Emojis y símbolos que complementan el contenido

## 🏗️ Arquitectura del Proyecto

### **Estructura de Componentes**
```
src/app/
├── app.component.*          # Componente raíz con navegación
├── home/                    # Página de inicio
├── catalog/                 # Catálogo de productos
├── promotions/              # Página de promociones
└── contact/                 # Formulario de contacto
```

## 🗣️ Propuesta de Mejora: Sección de Testimonios

### **Descripción de la Propuesta**
Como parte del ejercicio complementario, se ha diseñado una **sección de testimonios de clientes** que se integra perfectamente con el diseño existente de Café Aroma.

### **Características de la Propuesta**
- **🎯 Objetivo**: Generar confianza a través de social proof
- **🎨 Diseño**: Coherente con la paleta de colores y tipografía existente
- **📱 Responsive**: Optimizado para desktop, tablet y móvil
- **⚡ Performance**: Implementación ligera y escalable

### **Implementación Técnica**
- **Componente Angular standalone** con datos mock
- **Grid responsive** (3 columnas en desktop, 1 en móvil)
- **Integración con routing** existente
- **Datos mock realistas** con testimonios de clientes

### **Archivos de la Propuesta**
```
mockups/
├── README-testimonios.md    # Documentación completa de la propuesta
├── testimonios-desktop.png  # Mockup visual para desktop
└── testimonios-mobile.png   # Mockup visual para móvil
```

**Nota**: Los mockups visuales están en la carpeta `/mockups/` y demuestran la coherencia visual y criterio UX de la propuesta.

### **Características Técnicas**
- **Componentes Standalone** - Sin dependencias de módulos
- **Routing Dinámico** - Navegación SPA con Angular Router
- **Estado Reactivo** - Filtros y paginación en tiempo real
- **Formularios Reactivos** - Validación y manejo de datos

## 📊 Datos Mock y Funcionalidad

### **Productos del Catálogo**
- **12 productos** distribuidos en 2 páginas
- **4 categorías**: Cafés, Tés, Panadería, Postres
- **Filtros dinámicos** por categoría
- **Paginación funcional** con navegación entre páginas

### **Promociones**
- **Ofertas destacadas** con imágenes y descripciones
- **Términos y condiciones** claramente definidos
- **Call-to-action** para conversión

### **Formulario de Contacto**
- **Campos validados**: Nombre, Email, Teléfono, Mensaje
- **Envío funcional** con confirmación
- **Información de contacto** de la empresa

## 🔧 Decisiones Técnicas Implementadas

### **1. Tailwind CSS vs CSS Personalizado**
- **Decisión**: Tailwind CSS para desarrollo rápido y consistencia
- **Justificación**: Permite replicar exactamente el diseño Figma con clases utilitarias

### **2. Componentes Standalone**
- **Decisión**: Usar la nueva arquitectura de Angular 19
- **Justificación**: Mejor tree-shaking y bundle size optimizado

### **3. Estado Local vs State Management**
- **Decisión**: Estado local en componentes
- **Justificación**: Para esta escala, es más simple y eficiente

### **4. Imágenes Externas (Unsplash)**
- **Decisión**: URLs de Unsplash para productos
- **Justificación**: Imágenes de alta calidad y optimizadas para web

## 📈 Mejoras Implementadas

### **Sugerencias de UX/UI**
1. **Navegación Activa** - Header resalta la página actual
2. **Menú Móvil Intuitivo** - Botón hamburguesa con animación
3. **Filtros Visuales** - Botones de categoría con estados activos
4. **Paginación Clara** - Navegación entre páginas con contadores

### **Optimizaciones Técnicas**
1. **Lazy Loading** - Componentes cargados bajo demanda
2. **Responsive Images** - Imágenes optimizadas para diferentes dispositivos
3. **Accessibility** - Navegación por teclado y semántica HTML

## 📝 Planificación y Desglose de Tareas

### **Fase 1: Setup y Configuración (0.25 día)**
- [x] Creación del proyecto Angular
- [x] Configuración de Tailwind CSS
- [x] Estructura base del proyecto

### **Fase 2: Componentes Principales (0.5 días)**
- [x] Componente de inicio con hero section
- [x] Componente de catálogo con productos
- [x] Componente de promociones
- [x] Componente de contacto

### **Fase 3: Funcionalidades (0.5 días)**
- [x] Sistema de navegación y routing
- [x] Filtros de categoría en catálogo
- [x] Paginación de productos
- [x] Formulario de contacto funcional

### **Fase 4: Responsividad y Pulido (0.25 día)**
- [x] Diseño mobile-first
- [x] Menú hamburguesa móvil
- [x] Ajustes visuales finales
- [x] Testing en diferentes dispositivos

### **Fase 5: Documentación y Entrega (0.5 días)**
- [x] README completo
- [x] Limpieza de código
- [x] Preparación para evaluación

## 🧪 Testing y Validación

### **Funcionalidades Verificadas**
- ✅ Navegación entre todas las páginas
- ✅ Filtros de categoría funcionando
- ✅ Paginación del catálogo
- ✅ Formulario de contacto
- ✅ Responsividad en diferentes tamaños
- ✅ Menú móvil funcional

### **Navegadores Probados**
- Chrome (Desktop y Mobile)
- Firefox (Desktop)
- Edge (Desktop)
- Safari (Mobile)

## 🚀 Despliegue

### **Build de Producción**
```bash
npm run build
```

### **Archivos Generados**
- `dist/cafe-aroma/` - Carpeta con archivos optimizados
- `main-*.js` - Bundle principal de la aplicación
- `styles-*.css` - Estilos compilados y optimizados

## 📞 Contacto y Soporte

Para cualquier pregunta sobre el proyecto o la implementación, no dudes en contactarme.

---

**Desarrollado con ❤️ usando Angular y Tailwind CSS**
