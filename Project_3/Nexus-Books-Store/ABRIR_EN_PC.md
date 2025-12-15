# Cómo Abrir la Aplicación en PC/Windows

## 🚀 Método Rápido (3 Pasos)

### Paso 1: Asegúrate que el Servidor Está Corriendo

En PowerShell, ejecuta:

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
```

Deberías ver:
- QR code en la terminal
- Opciones: `Press w │ open web`

### Paso 2: Abrir en Navegador

**Opción A: Presionar tecla en la terminal**
```
Presiona la tecla: w
```

**Opción B: Abrir manualmente**
1. Abre tu navegador (Chrome, Edge, Firefox)
2. Ve a esta dirección:
```
http://localhost:8081
```

**Opción C: Desde PowerShell**
```powershell
Start-Process "http://localhost:8081"
```

---

## 🌐 URL de la Aplicación

```
http://localhost:8081
```

O también funciona:
```
http://127.0.0.1:8081
```

---

## ✅ Qué Deberías Ver

Cuando abras la aplicación en el navegador, deberías ver:

1. **Pantalla de inicio** con fondo beige claro (`#f7f4f2`)
2. **Título grande:** "Descubre tus mejores libros ahora"
3. **Barra de búsqueda** blanca con icono de lupa
4. **Sección "Popular ahora"** con 3 tarjetas de libros
5. **Sección "Los más vendidos"** con 3 tarjetas de libros
6. **Botón amarillo** "Explorar libros" al final

---

## 🔧 Si No Se Abre

### Problema 1: El servidor no está corriendo

**Solución:**
```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
```

### Problema 2: Puerto 8081 ocupado

**Solución:**
```powershell
# Detener servidor (Ctrl+C)
# Usar otro puerto
npx expo start --port 8082
```

Luego abrir: `http://localhost:8082`

### Problema 3: Página en blanco

**Solución:**
1. Abre DevTools (F12)
2. Ve a la pestaña Console
3. Busca errores (ignora los de CLEARLY)
4. Recarga la página (F5)

---

## 📱 Comandos Útiles

### Iniciar Servidor y Abrir Web Automáticamente

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm run web
```

Este comando:
- ✅ Inicia el servidor
- ✅ Abre automáticamente el navegador
- ✅ Configura todo para desarrollo web

---

## 🎯 Método Recomendado

**Para desarrollo diario, usa:**

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm run web
```

Este es el método más rápido y conveniente.

---

## 📋 Checklist Rápido

- [ ] Servidor corriendo (`npm start` o `npm run web`)
- [ ] Navegador abierto
- [ ] URL: `http://localhost:8081`
- [ ] Veo la interfaz de la aplicación

---

## 💡 Tips

### Atajos de Teclado en la Terminal

Cuando `npm start` está corriendo, puedes presionar:

- `w` → Abrir en web
- `a` → Abrir en Android
- `i` → Abrir en iOS (solo macOS)
- `r` → Recargar app
- `m` → Toggle menu
- `Ctrl+C` → Detener servidor

### Abrir en Múltiples Navegadores

Puedes abrir la misma URL en diferentes navegadores:
- Chrome: `http://localhost:8081`
- Edge: `http://localhost:8081`
- Firefox: `http://localhost:8081`

Todos mostrarán la misma aplicación.

---

## 🎉 ¡Listo!

Una vez que abras `http://localhost:8081` en tu navegador, verás la aplicación Nexus Books Store funcionando.

**¿No se abre?** Asegúrate de que el servidor esté corriendo primero.

---

**Última actualización:** Enero 2025


