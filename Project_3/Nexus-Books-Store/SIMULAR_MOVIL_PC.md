# Simular Aplicación Móvil en PC/Windows

## 📱 Método: Chrome DevTools Device Mode

La forma más fácil de simular un móvil en PC es usar las herramientas de desarrollador del navegador.

---

## 🚀 Pasos Rápidos

### 1. Abrir la Aplicación

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm run web
```

O abrir manualmente: `http://localhost:8081`

### 2. Activar Modo Móvil en Chrome/Edge

**Método A: Atajo de Teclado (Más Rápido)**
```
Presiona: F12
Luego presiona: Ctrl + Shift + M
```

**Método B: Menú Manual**
1. Abre DevTools: `F12` o clic derecho → "Inspeccionar"
2. Haz clic en el icono de **dispositivo móvil** (📱) en la barra superior
   - O presiona `Ctrl + Shift + M`

### 3. Seleccionar Dispositivo

En la barra superior verás un dropdown con dispositivos:

**Dispositivos Recomendados:**
- **iPhone 12 Pro** (375 x 812)
- **iPhone SE** (375 x 667)
- **Samsung Galaxy S20** (360 x 800)
- **Pixel 5** (393 x 851)
- **iPad** (768 x 1024) - para tablet

**O crear uno personalizado:**
- Clic en el dropdown
- Seleccionar "Edit..."
- Agregar dimensiones personalizadas

---

## ⚙️ Configuración Recomendada

### Para iPhone (iOS)

1. Seleccionar: **iPhone 12 Pro**
2. Orientación: **Portrait** (vertical)
3. Zoom: **100%**
4. Throttling: **Mid-tier mobile** (simula conexión móvil)

### Para Android

1. Seleccionar: **Pixel 5** o **Samsung Galaxy S20**
2. Orientación: **Portrait**
3. Zoom: **100%**
4. Throttling: **Mid-tier mobile**

---

## 🎯 Características del Modo Móvil

### Lo que Simula:

✅ **Tamaño de pantalla** - Dimensiones exactas del dispositivo  
✅ **Touch events** - Simula toques con el mouse  
✅ **Viewport** - Ajusta el viewport móvil  
✅ **User Agent** - Cambia el user agent del navegador  
✅ **Throttling** - Simula velocidad de red móvil  
✅ **Orientación** - Rotar entre portrait/landscape  

### Lo que NO Simula:

⚠️ **APIs nativas** - Algunas APIs móviles pueden no funcionar  
⚠️ **Rendimiento real** - Puede ser más rápido que un móvil real  
⚠️ **Gestos avanzados** - Pinch, swipe complejos limitados  

---

## 🔧 Configuración Avanzada

### Throttling de Red

Para simular conexión móvil lenta:

1. En DevTools, ve a la pestaña **Network**
2. En el dropdown de throttling, selecciona:
   - **Slow 3G** - Para conexión lenta
   - **Fast 3G** - Para conexión media
   - **Mid-tier mobile** - Recomendado

### Sensores (Orientación, Geolocalización)

1. En DevTools, presiona `Ctrl + Shift + P`
2. Busca "Show Sensors"
3. Configura:
   - **Orientation** - Rotar dispositivo
   - **Geolocation** - Simular ubicación

---

## 📱 Dispositivos Predefinidos Disponibles

### iPhone
- iPhone SE (375 x 667)
- iPhone 12 Pro (390 x 844)
- iPhone 12 Pro Max (428 x 926)
- iPhone 14 Pro Max (430 x 932)

### Android
- Samsung Galaxy S20 (360 x 800)
- Samsung Galaxy S8+ (360 x 740)
- Pixel 5 (393 x 851)
- Pixel 7 (412 x 915)

### Tablets
- iPad (768 x 1024)
- iPad Pro (1024 x 1366)

---

## 🎨 Ver la Aplicación en Modo Móvil

### Lo que Deberías Ver:

1. **Pantalla más estrecha** - Como un móvil real
2. **Elementos apilados verticalmente** - Layout móvil
3. **Scroll vertical** - Como en móvil
4. **Tamaños de fuente** - Ajustados para móvil
5. **Botones más grandes** - Para touch

### Interacción:

- **Clic = Touch** - Los clics simulan toques
- **Scroll con rueda** - Simula scroll táctil
- **Zoom** - Ctrl + Scroll para zoom

---

## 🔄 Rotar Dispositivo

### Cambiar Orientación:

**Método 1: Botón en DevTools**
- Clic en el icono de rotar (🔄) en la barra superior

**Método 2: Atajo**
- `Ctrl + Shift + M` para entrar/salir del modo
- Luego usar el botón de rotar

**Método 3: Sensores**
- `Ctrl + Shift + P` → "Show Sensors"
- Cambiar orientación manualmente

---

## 💡 Tips y Trucos

### 1. Guardar Configuración Personalizada

1. Seleccionar dispositivo
2. Ajustar dimensiones si es necesario
3. Clic en "Edit..."
4. "Add custom device"
5. Guardar con nombre (ej: "Nexus Books Testing")

### 2. Comparar Múltiples Dispositivos

Abre múltiples ventanas del navegador:
- Ventana 1: iPhone 12 Pro
- Ventana 2: Pixel 5
- Ventana 3: iPad

### 3. Capturar Screenshots

1. Modo móvil activado
2. `Ctrl + Shift + P`
3. Buscar "Capture screenshot"
4. Guarda imagen del dispositivo completo

### 4. Inspeccionar Elementos en Móvil

- Clic derecho en elementos
- "Inspect" funciona igual
- Ver estilos aplicados para móvil
- Verificar responsive design

---

## 🆚 Comparación: Simulación vs Real

| Característica | Simulación PC | Móvil Real |
|----------------|---------------|------------|
| **Tamaño** | ✅ Igual | ✅ Igual |
| **Layout** | ✅ Igual | ✅ Igual |
| **Touch Events** | ⚠️ Limitado | ✅ Completo |
| **APIs Nativas** | ❌ No disponible | ✅ Disponible |
| **Rendimiento** | ⚠️ Más rápido | ✅ Real |
| **Gestos** | ⚠️ Limitado | ✅ Completo |

---

## 🎯 Flujo de Trabajo Recomendado

### Desarrollo Diario:

1. **Abrir en modo móvil** (`Ctrl + Shift + M`)
2. **Seleccionar dispositivo** (iPhone 12 Pro o Pixel 5)
3. **Desarrollar y probar** en esta vista
4. **Verificar en diferentes dispositivos** cambiando el dropdown
5. **Probar orientación** portrait y landscape

### Antes de Deploy:

1. ✅ Probar en iPhone (varios modelos)
2. ✅ Probar en Android (varios modelos)
3. ✅ Probar en tablet
4. ✅ Probar orientación landscape
5. ✅ Probar con throttling de red lenta

---

## 📋 Checklist de Testing Móvil

- [ ] iPhone SE (pantalla pequeña)
- [ ] iPhone 12 Pro (pantalla estándar)
- [ ] Pixel 5 (Android estándar)
- [ ] Samsung Galaxy S20 (Android grande)
- [ ] iPad (tablet)
- [ ] Orientación Portrait
- [ ] Orientación Landscape
- [ ] Conexión lenta (Slow 3G)
- [ ] Scroll suave
- [ ] Touch targets grandes (>44px)

---

## 🚀 Comando Rápido Completo

```powershell
# 1. Iniciar servidor
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm run web

# 2. En el navegador:
# - Presionar F12
# - Presionar Ctrl + Shift + M
# - Seleccionar iPhone 12 Pro o Pixel 5
# - ¡Listo!
```

---

## ✅ Resumen

**Para simular móvil en PC:**

1. Abre la app: `http://localhost:8081`
2. Presiona: `F12` → `Ctrl + Shift + M`
3. Selecciona dispositivo (iPhone 12 Pro recomendado)
4. ¡Disfruta de la vista móvil!

**Es así de fácil.** 🎉

---

**Última actualización:** Enero 2025


