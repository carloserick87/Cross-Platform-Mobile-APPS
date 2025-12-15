# ✅ Checklist de Configuración Android - Nexus Books Store

**Fecha de Verificación:** Enero 2025  
**Estado:** ⚠️ Configuración Incompleta

---

## 📊 Resumen de Estado

| Componente | Estado | Acción Requerida |
|------------|--------|------------------|
| Android Studio | ✅ Instalado | Ninguna |
| Android SDK | ✅ Instalado | Configurar variables de entorno |
| ADB | ✅ Disponible | Agregar al PATH |
| Variables de Entorno | ❌ No configuradas | **CRÍTICO** |
| Emuladores Android | ❌ No hay AVDs | Crear emulador |
| Plataformas Android | ❌ No instaladas | Instalar SDK Platform |
| Java JDK | ⚠️ No verificado | Verificar instalación |

---

## ❌ Problemas Identificados

### 🔴 CRÍTICO 1: Variables de Entorno No Configuradas

**Problema:**
- `ANDROID_HOME` no está definida
- `ANDROID_SDK_ROOT` no está definida
- ADB no está en el PATH del sistema

**Impacto:**
- Expo no puede encontrar el SDK de Android
- Comandos `adb` no funcionan desde cualquier terminal
- `npm run android` fallará

**Solución:**

```powershell
# Ejecutar PowerShell como Administrador

# 1. Configurar ANDROID_HOME
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "$env:LOCALAPPDATA\Android\Sdk", "User")

# 2. Configurar ANDROID_SDK_ROOT
[System.Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", "$env:LOCALAPPDATA\Android\Sdk", "User")

# 3. Agregar platform-tools al PATH
$currentPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
$newPath = "$env:LOCALAPPDATA\Android\Sdk\platform-tools;$env:LOCALAPPDATA\Android\Sdk\emulator;$env:LOCALAPPDATA\Android\Sdk\tools;$currentPath"
[System.Environment]::SetEnvironmentVariable("Path", $newPath, "User")
```

**Verificar después de reiniciar terminal:**
```powershell
echo $env:ANDROID_HOME
adb --version
```

---

### 🔴 CRÍTICO 2: No Hay Emuladores Android Configurados

**Problema:**
- No se encontraron AVDs (Android Virtual Devices)
- No puedes ejecutar la app sin un dispositivo o emulador

**Solución:**

#### Opción A: Crear Emulador desde Android Studio (Recomendado)

1. **Abrir Android Studio**
   ```
   C:\Program Files\Android\Android Studio\bin\studio64.exe
   ```

2. **Ir a Device Manager**
   - Tools → Device Manager
   - O ver el panel lateral "Device Manager"

3. **Crear Nuevo Dispositivo**
   - Click en "Create Device"
   - Seleccionar dispositivo (recomendado: **Pixel 5** o **Pixel 6**)
   - Click "Next"

4. **Seleccionar Imagen del Sistema**
   - Recomendado: **Android 13 (API 33)** o **Android 14 (API 34)**
   - Si no está descargada, click en "Download" junto a la imagen
   - Click "Next"

5. **Configurar AVD**
   - Nombre: `Pixel_5_API_33` (o el que prefieras)
   - Verificar configuración
   - Click "Finish"

6. **Iniciar Emulador**
   - Click en el botón "Play" ▶️ junto al AVD creado
   - O desde terminal: `emulator -avd Pixel_5_API_33`

#### Opción B: Crear Emulador desde Línea de Comandos

```powershell
# Listar imágenes disponibles
sdkmanager --list | Select-String "system-images"

# Instalar imagen (ejemplo Android 13)
sdkmanager "system-images;android-33;google_apis;x86_64"

# Crear AVD
avdmanager create avd -n Pixel_5_API_33 -k "system-images;android-33;google_apis;x86_64" -d "pixel_5"
```

---

### 🟡 IMPORTANTE 3: Plataformas Android SDK No Instaladas

**Problema:**
- No se encontraron plataformas Android instaladas
- Necesitas al menos una plataforma para compilar

**Solución:**

#### Desde Android Studio:

1. **Abrir SDK Manager**
   - Tools → SDK Manager
   - O File → Settings → Appearance & Behavior → System Settings → Android SDK

2. **Instalar SDK Platform**
   - Tab "SDK Platforms"
   - Marcar **Android 13.0 (API 33)** o superior
   - Marcar "Show Package Details" y seleccionar:
     - Android SDK Platform 33
     - Google APIs
     - Android SDK Build-Tools
   - Click "Apply" → "OK"

#### Desde Línea de Comandos:

```powershell
# Navegar a tools/bin del SDK
cd "$env:LOCALAPPDATA\Android\Sdk\tools\bin"

# Instalar plataforma Android 13
sdkmanager "platforms;android-33"
sdkmanager "build-tools;33.0.0"
sdkmanager "platform-tools"
```

---

### 🟡 IMPORTANTE 4: Java JDK No Verificado

**Problema:**
- No se verificó si Java JDK está instalado
- Android Studio requiere Java JDK 17 o superior

**Verificar:**

```powershell
java -version
javac -version
```

**Si no está instalado:**

```powershell
# Instalar con Chocolatey
choco install openjdk17 -y

# O descargar desde:
# https://adoptium.net/
```

**Configurar JAVA_HOME (si es necesario):**

```powershell
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Java\jdk-17", "User")
```

---

## ✅ Pasos para Completar la Configuración

### Paso 1: Configurar Variables de Entorno ⏱️ 5 minutos

```powershell
# Ejecutar como Administrador
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "$env:LOCALAPPDATA\Android\Sdk", "User")
[System.Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", "$env:LOCALAPPDATA\Android\Sdk", "User")

$currentPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
$androidPaths = "$env:LOCALAPPDATA\Android\Sdk\platform-tools;$env:LOCALAPPDATA\Android\Sdk\emulator;$env:LOCALAPPDATA\Android\Sdk\tools"
[System.Environment]::SetEnvironmentVariable("Path", "$androidPaths;$currentPath", "User")
```

**Reiniciar terminal y verificar:**
```powershell
$env:ANDROID_HOME
adb --version
```

---

### Paso 2: Instalar Plataformas Android ⏱️ 10-20 minutos

1. Abrir Android Studio
2. Tools → SDK Manager
3. Instalar Android 13 (API 33) o superior
4. Instalar Build Tools

---

### Paso 3: Crear Emulador Android ⏱️ 5 minutos

1. Abrir Android Studio
2. Tools → Device Manager
3. Create Device → Pixel 5
4. Seleccionar Android 13
5. Finish

---

### Paso 4: Instalar Expo Go en Emulador ⏱️ 5 minutos

1. Iniciar el emulador creado
2. Abrir Play Store en el emulador
3. Buscar "Expo Go"
4. Instalar

---

### Paso 5: Verificar Configuración Completa ⏱️ 2 minutos

```powershell
# Verificar variables
echo $env:ANDROID_HOME
echo $env:ANDROID_SDK_ROOT

# Verificar ADB
adb --version
adb devices

# Listar emuladores
emulator -list-avds

# Verificar Java
java -version
```

---

### Paso 6: Ejecutar Proyecto ⏱️ 1 minuto

```powershell
# Opción 1: Iniciar emulador primero
emulator -avd Pixel_5_API_33

# En otra terminal, ejecutar proyecto
cd C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
# Presionar 'a' para Android

# Opción 2: Ejecutar directamente
npm run android
```

---

## 🚀 Comandos Rápidos de Verificación

```powershell
# Verificar Android SDK
Test-Path "$env:LOCALAPPDATA\Android\Sdk"

# Verificar ADB
Test-Path "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe"

# Verificar emuladores
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\emulator" -ErrorAction SilentlyContinue

# Verificar plataformas
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\platforms" -ErrorAction SilentlyContinue

# Verificar variables de entorno
$env:ANDROID_HOME
$env:ANDROID_SDK_ROOT
```

---

## 📝 Resumen de Lo Que Falta

### 🔴 Crítico (Bloquea ejecución):
1. ❌ Variables de entorno `ANDROID_HOME` y `ANDROID_SDK_ROOT`
2. ❌ ADB no está en PATH
3. ❌ No hay emuladores Android configurados

### 🟡 Importante (Necesario para compilar):
4. ❌ No hay plataformas Android SDK instaladas
5. ⚠️ Java JDK no verificado

### 🟢 Opcional (Mejora experiencia):
6. ⚠️ Build Tools pueden necesitar actualización
7. ⚠️ Google Play Services (para algunas APIs)

---

## ⏱️ Tiempo Estimado Total

- **Configuración mínima:** 20-30 minutos
- **Configuración completa:** 30-45 minutos

---

## 🆘 Solución de Problemas Comunes

### Problema: "adb: command not found"
**Solución:** Variables de entorno no configuradas. Ver Paso 1.

### Problema: "No Android devices found"
**Solución:** 
- Iniciar emulador: `emulator -avd NombreDelAVD`
- O conectar dispositivo físico con depuración USB activada

### Problema: "SDK location not found"
**Solución:** Configurar `ANDROID_HOME` en variables de entorno.

### Problema: "Java not found"
**Solución:** Instalar Java JDK 17 o superior.

---

## ✅ Checklist Final

Antes de ejecutar `npm run android`, verifica:

- [ ] Variables de entorno configuradas
- [ ] ADB funciona (`adb --version`)
- [ ] Al menos una plataforma Android instalada
- [ ] Al menos un emulador creado
- [ ] Emulador iniciado o dispositivo conectado
- [ ] Java JDK instalado y configurado
- [ ] Expo Go instalado en emulador/dispositivo

---

**Última actualización:** Enero 2025  
**Próximos pasos:** Completar configuración crítica antes de ejecutar proyecto

