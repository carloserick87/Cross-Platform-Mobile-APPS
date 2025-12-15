# 📱 Guía: Cómo Crear un Emulador Android en Android Studio

**Ubicación:** Android Studio → Device Manager

---

## 🎯 Paso a Paso: Encontrar Device Manager

### Método 1: Desde la Barra de Herramientas (Más Fácil)

1. **Abrir Android Studio**
   ```
   C:\Program Files\Android\Android Studio\bin\studio64.exe
   ```

2. **Buscar el ícono de Device Manager**
   - Mira en la **barra lateral derecha** de Android Studio
   - Busca el ícono que dice **"Device Manager"** o muestra un teléfono 📱
   - También puede aparecer como **"Devices"** o **"Virtual Devices"**

3. **Si no lo ves:**
   - Ve al menú superior: **View → Tool Windows → Device Manager**
   - O presiona: **Alt + 1** (en Windows)

---

### Método 2: Desde el Menú Tools

1. **Abrir Android Studio**

2. **Click en el menú "Tools"** (en la barra superior)

3. **Seleccionar "Device Manager"**
   ```
   Tools → Device Manager
   ```

---

### Método 3: Desde Settings/Preferences

1. **Abrir Android Studio**

2. **Ir a Settings:**
   - Windows/Linux: **File → Settings**
   - macOS: **Android Studio → Preferences**

3. **Navegar a:**
   ```
   Appearance & Behavior → System Settings → Android SDK
   ```

4. **Click en la pestaña "SDK Tools"**

5. **O directamente buscar "Device Manager" en la barra lateral**

---

## 📍 Ubicación Visual del Device Manager

```
┌─────────────────────────────────────────────────┐
│  Android Studio                                  │
├─────────────────────────────────────────────────┤
│  File  Edit  View  Navigate  Code  Tools  ... │ ← Barra de menú
├─────────────────────────────────────────────────┤
│                                                 │
│  [Proyecto]          │  [Device Manager] 📱   │ ← Barra lateral derecha
│                      │                         │
│                      │  ▶ Create Device        │ ← Botón aquí
│                      │                         │
└─────────────────────────────────────────────────┘
```

---

## 🚀 Crear Emulador: Pasos Detallados

### Paso 1: Abrir Device Manager

- **Opción A:** Click en el ícono "Device Manager" en la barra lateral derecha
- **Opción B:** Tools → Device Manager
- **Opción C:** View → Tool Windows → Device Manager

---

### Paso 2: Click en "Create Device"

Una vez abierto Device Manager, verás:

```
┌─────────────────────────────────────┐
│  Device Manager                     │
├─────────────────────────────────────┤
│                                     │
│  [No devices]                       │
│                                     │
│  ┌─────────────────────────────┐   │
│  │  ▶ Create Device            │   │ ← CLICK AQUÍ
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

**Click en el botón "Create Device"** o **"+"** (plus)

---

### Paso 3: Seleccionar Hardware (Tipo de Dispositivo)

Se abrirá una ventana "Select Hardware":

```
┌─────────────────────────────────────────────┐
│  Select Hardware                            │
├─────────────────────────────────────────────┤
│  Category: Phone                             │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │ Pixel 5  │  │ Pixel 6  │  │ Pixel 7  │ │
│  │          │  │          │  │          │ │
│  │ 5.8"     │  │ 6.2"     │  │ 6.3"     │ │
│  └──────────┘  └──────────┘  └──────────┘ │
│                                             │
│  [Cancel]              [Next >]             │
└─────────────────────────────────────────────┘
```

**Selecciona:**
- **Pixel 5** (recomendado) o **Pixel 6**
- Click en **"Next"**

---

### Paso 4: Seleccionar Imagen del Sistema (System Image)

Se abrirá "System Image":

```
┌─────────────────────────────────────────────┐
│  System Image                                │
├─────────────────────────────────────────────┤
│  Recommended                                 │
│  ┌───────────────────────────────────────┐   │
│  │ ☑ Android 13.0 (Tiramisu)           │   │
│  │    API Level 33                      │   │
│  │    Release Name: Tiramisu            │   │
│  │    [Download]                        │   │ ← Si dice Download, click aquí
│  └───────────────────────────────────────┘   │
│                                             │
│  x86 Images                                 │
│  ┌───────────────────────────────────────┐   │
│  │ ☐ Android 14.0 (Upside Down Cake)    │   │
│  │    API Level 34                       │   │
│  └───────────────────────────────────────┘   │
│                                             │
│  [< Back]              [Next >]             │
└─────────────────────────────────────────────┘
```

**Selecciona:**
- **Android 13.0 (API 33)** o superior
- Si dice **"[Download]"**, click para descargar primero
- Click en **"Next"**

---

### Paso 5: Configurar AVD (Android Virtual Device)

Se abrirá "AVD Configuration":

```
┌─────────────────────────────────────────────┐
│  AVD Configuration                          │
├─────────────────────────────────────────────┤
│  AVD Name: Pixel_5_API_33                   │ ← Puedes cambiar el nombre
│                                             │
│  Startup orientation: Portrait               │
│                                             │
│  Advanced Settings:                          │
│  ┌───────────────────────────────────────┐   │
│  │ Camera:                              │   │
│  │   Front: Webcam0                     │   │
│  │   Back: Webcam0                      │   │
│  │                                       │   │
│  │ Graphics: Automatic                  │   │
│  │                                       │   │
│  │ Memory and Storage:                   │   │
│  │   RAM: 2048 MB                        │   │
│  │   VM heap: 256 MB                     │   │
│  │   Internal Storage: 2048 MB          │   │
│  └───────────────────────────────────────┘   │
│                                             │
│  [< Back]              [Finish]              │ ← CLICK AQUÍ
└─────────────────────────────────────────────┘
```

**Configuración:**
- **AVD Name:** Puedes dejarlo como está o cambiarlo (ej: `Pixel_5_API_33`)
- **Startup orientation:** Portrait (vertical) está bien
- **Advanced Settings:** Puedes dejarlo por defecto

**Click en "Finish"**

---

### Paso 6: Emulador Creado ✅

Ahora verás tu emulador en Device Manager:

```
┌─────────────────────────────────────────────┐
│  Device Manager                              │
├─────────────────────────────────────────────┤
│  ┌───────────────────────────────────────┐   │
│  │ 📱 Pixel_5_API_33                    │   │
│  │    Android 13.0 (API 33)            │   │
│  │                                      │   │
│  │    [▶ Play]  [▼ More]  [✎ Edit]     │   │ ← Click Play para iniciar
│  └───────────────────────────────────────┘   │
│                                             │
│  ┌───────────────────────────────────────┐   │
│  │  ▶ Create Device                     │   │
│  └───────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

**Para iniciar el emulador:**
- Click en el botón **▶ Play** (Play) junto al nombre del emulador
- O desde terminal: `emulator -avd Pixel_5_API_33`

---

## 🎬 Resumen Visual Completo

```
1. Abrir Android Studio
   ↓
2. Buscar "Device Manager" en barra lateral derecha
   O Tools → Device Manager
   ↓
3. Click "Create Device" o "+"
   ↓
4. Seleccionar "Pixel 5" → Next
   ↓
5. Seleccionar "Android 13.0 (API 33)" → Next
   (Descargar si es necesario)
   ↓
6. Configurar nombre → Finish
   ↓
7. Click ▶ Play para iniciar emulador
```

---

## 🔍 Si No Encuentras Device Manager

### Verificar que Android Studio está Actualizado

1. **Help → Check for Updates**
2. Actualizar si hay una versión nueva

### Alternativa: Usar AVD Manager (Versiones Antiguas)

Si tienes una versión antigua de Android Studio:

1. **Tools → AVD Manager**
2. Click **"Create Virtual Device"**
3. Seguir los mismos pasos

---

## 📝 Atajos de Teclado

- **Abrir Device Manager:** `Alt + 1` (Windows/Linux)
- **Crear Device:** Click en "+" o "Create Device"
- **Iniciar Emulador:** Click en ▶ Play

---

## ✅ Verificación Final

Después de crear el emulador, verifica:

```powershell
# Listar emuladores creados
emulator -list-avds

# Deberías ver algo como:
# Pixel_5_API_33
```

---

## 🆘 Problemas Comunes

### Problema: "Device Manager" no aparece

**Solución:**
- Verificar que Android Studio está actualizado
- View → Tool Windows → Device Manager
- O reinstalar Android Studio

### Problema: No puedo descargar System Image

**Solución:**
- Verificar conexión a internet
- Tools → SDK Manager → SDK Platforms → Instalar manualmente
- Verificar que tienes espacio en disco

### Problema: Emulador no inicia

**Solución:**
- Verificar que HAXM/WHPX está habilitado (para aceleración de hardware)
- Aumentar RAM asignada al emulador
- Cerrar otros programas pesados

---

**Última actualización:** Enero 2025

