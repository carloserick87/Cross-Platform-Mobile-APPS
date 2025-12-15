# 🚀 Guía Paso a Paso: Instalar SDK Platform 35 y Crear AVD

**Fecha:** Enero 2025  
**Objetivo:** Configurar Android SDK Platform 35 y crear un emulador Android

---

## 📋 Paso 1: Abrir Android Studio

1. **Busca Android Studio** en el menú de inicio de Windows
2. **O ejecuta:**
   ```
   C:\Program Files\Android\Android Studio\bin\studio64.exe
   ```
3. **Espera** a que Android Studio se abra completamente

---

## 📦 Paso 2: Abrir SDK Manager

Tienes **2 opciones** para abrir SDK Manager:

### Opción A: Desde Welcome Screen
Si ves la pantalla de bienvenida:
1. Click en **"More Actions"** (o "Configure" en versiones antiguas)
2. Click en **"SDK Manager"**

### Opción B: Desde Menú (Si ya tienes un proyecto abierto)
1. Click en **"Tools"** (barra superior)
2. Click en **"SDK Manager"**

**O alternativamente:**
- **File → Settings** (o **Android Studio → Preferences** en Mac)
- **Languages & Frameworks → Android SDK**

---

## 🔧 Paso 3: Instalar Android SDK Platform 35

Una vez abierto SDK Manager:

### 3.1. Pestaña "SDK Platforms"

1. **Click en la pestaña "SDK Platforms"** (arriba)

2. **Marca la casilla "Show Package Details"** 
   - Está en la esquina inferior derecha
   - Esto mostrará todos los componentes disponibles

3. **Busca "Android 15 (VanillaIceCream)"** en la lista
   - Puede estar al principio o necesitar hacer scroll
   - Si no lo ves, puede que necesites actualizar la lista

4. **Expande "Android 15 (VanillaIceCream)"** 
   - Click en la flecha ▶️ junto al nombre

5. **Marca estos componentes:**
   ```
   ☑ Android SDK Platform 35
   ☑ Intel x86 Atom_64 System Image
      (o Google APIs Intel x86 Atom System Image)
   ```

   **Visual:**
   ```
   ┌─────────────────────────────────────────────┐
   │ ☑ Android 15 (VanillaIceCream)              │
   │   ☑ Android SDK Platform 35                 │ ← Marcar esto
   │   ☐ Sources for Android 35                  │
   │   ☑ Intel x86 Atom_64 System Image         │ ← Marcar esto
   │   ☐ Google APIs Intel x86 Atom System Image │
   │   ☐ Google Play Intel x86 Atom System Image│
   └─────────────────────────────────────────────┘
   ```

---

### 3.2. Pestaña "SDK Tools"

1. **Click en la pestaña "SDK Tools"** (arriba)

2. **Marca "Show Package Details"** (esquina inferior derecha)

3. **Busca y expande "Android SDK Build-Tools"**

4. **Marca:**
   ```
   ☑ Android SDK Build-Tools 35.0.0
   ```

   **Visual:**
   ```
   ┌─────────────────────────────────────────────┐
   │ ☑ Android SDK Build-Tools                  │
   │   ☑ 35.0.0                                 │ ← Marcar esto
   │   ☐ 34.0.0                                 │
   │   ☐ 33.0.0                                 │
   └─────────────────────────────────────────────┘
   ```

---

### 3.3. Instalar

1. **Click en el botón "Apply"** (abajo a la derecha)
   - O "OK" en algunas versiones

2. **Aparecerá una ventana de confirmación**
   - Muestra lo que se va a instalar
   - Tamaño aproximado: ~1-2 GB

3. **Click en "OK"** para confirmar

4. **Espera a que descargue e instale**
   - Puede tomar 10-30 minutos dependiendo de tu internet
   - Verás una barra de progreso

5. **Cuando termine, click en "Finish"**

---

## ✅ Paso 4: Verificar Instalación

Cierra SDK Manager y verifica en PowerShell:

```powershell
# Verificar que Platform 35 está instalado
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\platforms"

# Deberías ver: android-35

# Verificar Build Tools
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\build-tools"

# Deberías ver: 35.0.0
```

---

## 📱 Paso 5: Crear AVD (Android Virtual Device)

### 5.1. Abrir Device Manager

**Opción A: Desde Welcome Screen**
- Click en **"More Actions"** → **"Device Manager"**

**Opción B: Desde Menú**
- **Tools → Device Manager**

**Opción C: Barra Lateral**
- Busca el ícono de **"Device Manager"** en la barra lateral derecha
- O presiona `Alt + 1`

---

### 5.2. Crear Nuevo Dispositivo

1. **Click en "Create Device"** o el botón **"+"**
   - Está arriba a la izquierda del Device Manager

2. **Se abrirá la ventana "Select Hardware"**

---

### 5.3. Seleccionar Hardware (Tipo de Dispositivo)

1. **En "Category"** asegúrate de que esté seleccionado **"Phone"**

2. **Selecciona un dispositivo de la lista:**
   - Recomendado: **"Pixel 5"** o **"Pixel 6"**
   - Cualquier Phone funciona, pero Pixel es el más común

3. **Click en "Next"**

   **Visual:**
   ```
   ┌─────────────────────────────────────────────┐
   │  Select Hardware                            │
   ├─────────────────────────────────────────────┤
   │  Category: Phone                            │
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

---

### 5.4. Seleccionar System Image

1. **Busca "VanillaIceCream"** en la lista
   - Debería aparecer como **"Android 15 (VanillaIceCream)"**
   - API Level: **35**

2. **Si NO aparece:**
   - Click en **"Download"** junto a "VanillaIceCream"
   - Espera a que descargue (esto debería haberse hecho en el Paso 3, pero por si acaso)

3. **Selecciona "VanillaIceCream" API Level 35**
   - Debe tener un checkmark ✅

4. **Click en "Next"**

   **Visual:**
   ```
   ┌─────────────────────────────────────────────┐
   │  System Image                                │
   ├─────────────────────────────────────────────┤
   │  Recommended                                 │
   │  ┌───────────────────────────────────────┐   │
   │  │ ☑ Android 15.0 (VanillaIceCream)    │   │ ← Seleccionar
   │  │    API Level 35                      │   │
   │  │    Release Name: VanillaIceCream     │   │
   │  └───────────────────────────────────────┘   │
   │                                             │
   │  [< Back]              [Next >]             │
   └─────────────────────────────────────────────┘
   ```

---

### 5.5. Configurar AVD

1. **AVD Name:**
   - Puedes dejarlo como está: `Pixel_5_API_35`
   - O cambiarlo a algo más descriptivo: `Pixel_5_Android_15`

2. **Startup orientation:**
   - Deja **"Portrait"** (vertical)

3. **Advanced Settings** (opcional):
   - Puedes dejarlo por defecto
   - O ajustar RAM si tu PC tiene poca memoria

4. **Click en "Finish"**

   **Visual:**
   ```
   ┌─────────────────────────────────────────────┐
   │  AVD Configuration                          │
   ├─────────────────────────────────────────────┤
   │  AVD Name: Pixel_5_API_35                  │
   │                                             │
   │  Startup orientation: Portrait              │
   │                                             │
   │  [< Back]              [Finish]            │
   └─────────────────────────────────────────────┘
   ```

---

### 5.6. AVD Creado ✅

Ahora verás tu AVD en Device Manager:

```
┌─────────────────────────────────────────────┐
│  Device Manager                              │
├─────────────────────────────────────────────┤
│  ┌───────────────────────────────────────┐   │
│  │ 📱 Pixel_5_API_35                    │   │
│  │    Android 15.0 (API 35)             │   │
│  │                                      │   │
│  │    [▶ Play]  [▼ More]  [✎ Edit]      │   │
│  └───────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## 🎮 Paso 6: Iniciar el Emulador

### Opción A: Desde Android Studio

1. **En Device Manager**, encuentra tu AVD creado
2. **Click en el botón ▶ Play** (Play) junto al nombre
3. **Espera** a que el emulador inicie (puede tomar 1-2 minutos la primera vez)

### Opción B: Desde Terminal

```powershell
# Listar AVDs disponibles
emulator -list-avds

# Deberías ver: Pixel_5_API_35

# Iniciar emulador
emulator -avd Pixel_5_API_35
```

---

## ✅ Paso 7: Verificar Todo Funciona

### 7.1. Verificar que el Emulador Está Corriendo

```powershell
# Ver dispositivos conectados
adb devices

# Deberías ver algo como:
# List of devices attached
# emulator-5554    device
```

### 7.2. Verificar Instalación Completa

```powershell
# Verificar Platform 35
Test-Path "$env:LOCALAPPDATA\Android\Sdk\platforms\android-35"
# Debe devolver: True

# Verificar Build Tools 35.0.0
Test-Path "$env:LOCALAPPDATA\Android\Sdk\build-tools\35.0.0"
# Debe devolver: True

# Listar AVDs
emulator -list-avds
# Debe mostrar: Pixel_5_API_35
```

---

## 🚀 Paso 8: Ejecutar tu Proyecto Expo

Una vez que el emulador esté corriendo:

```powershell
# En la terminal del proyecto
npm start

# O directamente para Android
npm run android
```

**O desde la terminal de Expo:**
- Presiona **`a`** para abrir en Android
- O escanea el QR con Expo Go si prefieres usar tu teléfono

---

## 🆘 Solución de Problemas

### Problema: "SDK Platform 35 no aparece en la lista"

**Solución:**
1. En SDK Manager, click en **"SDK Update Sites"** (pestaña)
2. Verifica que las URLs están habilitadas
3. Click en **"Apply"**
4. Vuelve a "SDK Platforms" y actualiza la lista

### Problema: "No puedo descargar System Image"

**Solución:**
1. Verifica tu conexión a internet
2. En SDK Manager, verifica que tienes espacio en disco (necesitas ~2GB)
3. Intenta descargar manualmente desde:
   - Tools → SDK Manager → SDK Platforms → Show Package Details

### Problema: "Emulador no inicia"

**Solución:**
1. Verifica que HAXM/WHPX está habilitado (aceleración de hardware)
2. Aumenta la RAM asignada al emulador (Edit AVD → Advanced Settings)
3. Cierra otros programas pesados
4. Reinicia Android Studio

### Problema: "ADB no encuentra el dispositivo"

**Solución:**
```powershell
# Reiniciar ADB
adb kill-server
adb start-server
adb devices
```

---

## 📝 Checklist Final

Antes de ejecutar `npm run android`, verifica:

- [ ] Android SDK Platform 35 instalado
- [ ] Android SDK Build Tools 35.0.0 instalado
- [ ] AVD creado con Android 15 (API 35)
- [ ] Emulador iniciado y visible en `adb devices`
- [ ] Variables de entorno configuradas (ANDROID_HOME)
- [ ] ADB funciona (`adb --version`)

---

## 🎯 Resumen de Comandos Útiles

```powershell
# Verificar plataformas instaladas
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\platforms"

# Verificar build tools
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\build-tools"

# Listar AVDs
emulator -list-avds

# Iniciar emulador específico
emulator -avd Pixel_5_API_35

# Ver dispositivos conectados
adb devices

# Reiniciar ADB
adb kill-server
adb start-server
```

---

**¡Listo!** Una vez completados estos pasos, podrás ejecutar tu proyecto Expo en el emulador Android.

**Última actualización:** Enero 2025

