# Dockerfile para Café Aroma
# Multi-stage build para optimizar el tamaño final

# Etapa de construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Construir la aplicación para navegador
RUN npm run build

# Verificar la estructura del build
RUN ls -la dist/ && ls -la dist/cafe-aroma/

# Etapa de producción
FROM nginx:alpine

# Copiar archivos construidos (ajustar ruta según la estructura real)
COPY --from=builder /app/dist/cafe-aroma /usr/share/nginx/html

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
