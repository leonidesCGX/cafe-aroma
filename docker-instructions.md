# 🐳 Instrucciones de Docker para Café Aroma

## **Construir la Imagen**
```bash
docker build -t cafe-aroma .
```

## **Ejecutar el Contenedor**
```bash
docker run -d -p 8080:80 --name cafe-aroma-app cafe-aroma
```

## **Acceder a la Aplicación**
```
http://localhost:8080
```

## **Comandos Útiles**

### **Ver logs del contenedor**
```bash
docker logs cafe-aroma-app
```

### **Detener el contenedor**
```bash
docker stop cafe-aroma-app
```

### **Eliminar el contenedor**
```bash
docker rm cafe-aroma-app
```

### **Eliminar la imagen**
```bash
docker rmi cafe-aroma
```

## **Ventajas del Dockerfile**

✅ **Multi-stage build** - Imagen final optimizada
✅ **Nginx configurado** - Servidor web eficiente
✅ **Cache de archivos estáticos** - Mejor rendimiento
✅ **Configuración de seguridad** - Headers de seguridad
✅ **Gzip habilitado** - Compresión de archivos
✅ **SPA routing** - Soporte completo para Angular Router

## **Requisitos del Sistema**
- Docker instalado
- 2GB de RAM disponible
- Puerto 8080 libre
