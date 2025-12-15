# 📋 Comparación con Guía Oficial React Native - Windows

**Fuente:** [React Native - Set Up Your Environment (Windows)](https://reactnative.dev/docs/set-up-your-environment?os=windows)

**Fecha:** Enero 2025

---

## ✅ Requisitos según Guía Oficial

### 1. Node.js
**Requisito:** Node 20.19.4 o superior

**Estado Actual:**
- ✅ **Instalado:** v24.12.0
- ✅ **Cumple:** Versión superior a la requerida

---

### 2. Java Development Kit (JDK)
**Requisito:** JDK 17 (recomendado). Pueden haber problemas con versiones más altas.

**Estado Actual:**
- ⚠️ **Instalado:** Java 24.0.1
- ⚠️ **Problema:** Versión muy alta, puede causar problemas
- ❌ **Acción Requerida:** Instalar JDK 17

**Solución:**
```powershell
# Instalar JDK 17 con Chocolatey
choco install openjdk17 -y

# O descargar desde:
# https://adoptium.net/temurin/releases/?version=17
```

**Configurar JAVA_HOME:**
```powershell
# Después de instalar JDK 17
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Eclipse Adoptium\jdk-17.0.x-hotspot", "User")
```

---

### 3. Android Studio
**Requisito:** Instalado con:
- ✅ Android SDK
- ✅ Android SDK Platform
- ✅ Android Virtual Device

**Estado Actual:**
- ✅ **Android Studio:** Instalado
- ✅ **Android SDK:** Instalado en `C:\Users\sergio-p\AppData\Local\Android\Sdk`
- ❌ **Android SDK Platform:** NO instalado (carpeta platforms vacía)
- ❌ **Android Virtual Device:** NO creado (no hay AVDs)

---

### 4. Android SDK Platform
**Requisito según Guía:** Android 15 (VanillaIceCream) - API Level 35

**Estado Actual:**
- ❌ **NO instalado:** Carpeta `platforms` está vacía
- ❌ **Acción Requerida:** Instalar Android SDK Platform 35

**Cómo Instalar:**

1. **Abrir Android Studio**
2. **Tools → SDK Manager** (o Configure → SDK Manager)
3. **Pestaña "SDK Platforms"**
4. **Marcar "Show Package Details"** (esquina inferior derecha)
5. **Expandir "Android 15 (VanillaIceCream)"**
6. **Marcar:**
   - ✅ `Android SDK Platform 35`
   - ✅ `Intel x86 Atom_64 System Image` o `Google APIs Intel x86 Atom System Image`
7. **Pestaña "SDK Tools"**
8. **Marcar "Show Package Details"**
9. **Expandir "Android SDK Build-Tools"**
10. **Marcar `35.0.0`**
11. **Click "Apply"** para descargar e instalar

---

### 5. Android SDK Build Tools
**Requisito:** Build Tools 35.0.0

**Estado Actual:**
- ❌ **NO instalado:** Carpeta `build-tools` está vacía
- ❌ **Acción Requerida:** Instalar Build Tools 35.0.0

**Cómo Instalar:**
- Mismo proceso que SDK Platform (paso 4, pestaña SDK Tools)

---

### 6. Variables de Entorno
**Requisito según Guía:**
```powershell
ANDROID_HOME = C:\Users\TuUsuario\AppData\Local\Android\Sdk
PATH debe incluir:
- %ANDROID_HOME%\emulator
- %ANDROID_HOME%\platform-tools
```

**Estado Actual:**
- ✅ **ANDROID_HOME:** Configurado
- ✅ **ANDROID_SDK_ROOT:** Configurado
- ✅ **PATH:** Actualizado con platform-tools, emulator, tools
- ✅ **Cumple:** Todas las variables están configuradas

**Nota:** Según la guía oficial, solo necesitas `emulator` y `platform-tools` en PATH, pero tener `tools` también es útil.

---

### 7. Android Virtual Device (AVD)
**Requisito:** Crear un AVD con Android 15 (VanillaIceCream) - API Level 35

**Estado Actual:**
- ❌ **NO creado:** No hay AVDs configurados
- ❌ **Acción Requerida:** Crear AVD

**Cómo Crear según Guía Oficial:**

1. **Abrir Android Studio**
2. **Device Manager** (Tools → Device Manager o ícono en barra lateral)
3. **"Create Virtual Device..."**
4. **Seleccionar cualquier Phone** de la lista
5. **Click "Next"**
6. **Seleccionar "VanillaIceCream" API Level 35**
   - Si no aparece, necesitas instalar la System Image primero (paso 4)
7. **Click "Next"**
8. **Click "Finish"**
9. **Click en el botón Play ▶️** para iniciar el emulador

---

## 📊 Resumen de Estado

| Requisito | Estado | Acción |
|-----------|--------|--------|
| Node.js 20.19.4+ | ✅ Cumple | Ninguna |
| JDK 17 | ⚠️ Java 24 instalado | Instalar JDK 17 |
| Android Studio | ✅ Instalado | Ninguna |
| Android SDK Platform 35 | ❌ No instalado | Instalar desde SDK Manager |
| Android SDK Build Tools 35.0.0 | ❌ No instalado | Instalar desde SDK Manager |
| Variables de Entorno | ✅ Configuradas | Ninguna |
| AVD con Android 15 | ❌ No creado | Crear desde Device Manager |

---

## 🎯 Lo Que Falta Según la Guía Oficial

### 🔴 Crítico (Bloquea desarrollo):

1. **Instalar Android SDK Platform 35**
   - Android 15 (VanillaIceCream)
   - System Image (Intel x86 Atom_64)

2. **Instalar Android SDK Build Tools 35.0.0**
   - Necesario para compilar la app

3. **Crear AVD con Android 15**
   - Emulador necesario para ejecutar la app

### 🟡 Importante (Puede causar problemas):

4. **Instalar JDK 17**
   - Actualmente tienes Java 24
   - La guía recomienda JDK 17 específicamente
   - Versiones más altas pueden causar problemas

---

## 📝 Pasos Siguientes Según Guía Oficial

### Paso 1: Instalar JDK 17 (Recomendado)

```powershell
# Opción A: Con Chocolatey
choco install openjdk17 -y

# Opción B: Descargar manualmente
# https://adoptium.net/temurin/releases/?version=17
```

**Configurar JAVA_HOME:**
```powershell
# Encontrar ruta de instalación
Get-ChildItem "C:\Program Files\Eclipse Adoptium\" -Directory | Select-Object Name

# Configurar (reemplaza con la ruta real)
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Eclipse Adoptium\jdk-17.0.x-hotspot", "User")
```

---

### Paso 2: Instalar Android SDK Platform 35

1. Abrir Android Studio
2. **Tools → SDK Manager**
3. **Pestaña "SDK Platforms"**
4. Marcar "Show Package Details"
5. Expandir "Android 15 (VanillaIceCream)"
6. Marcar:
   - ✅ Android SDK Platform 35
   - ✅ Intel x86 Atom_64 System Image
7. **Pestaña "SDK Tools"**
8. Marcar "Show Package Details"
9. Expandir "Android SDK Build-Tools"
10. Marcar ✅ 35.0.0
11. Click **"Apply"**

---

### Paso 3: Crear AVD

1. **Tools → Device Manager**
2. **"Create Virtual Device..."**
3. Seleccionar **Phone** (ej: Pixel 5)
4. **Next**
5. Seleccionar **VanillaIceCream API Level 35**
6. **Next → Finish**
7. Click **▶ Play** para iniciar

---

### Paso 4: Verificar Instalación

```powershell
# Verificar Node
node --version
# Debe ser 20.19.4 o superior ✅

# Verificar Java (debe ser 17)
java -version
# Debe mostrar: openjdk version "17.x.x"

# Verificar ANDROID_HOME
echo $env:ANDROID_HOME
# Debe mostrar: C:\Users\sergio-p\AppData\Local\Android\Sdk

# Verificar ADB
adb --version
# Debe mostrar versión de ADB

# Verificar plataformas instaladas
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\platforms"
# Debe mostrar: android-35

# Verificar build tools
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\build-tools"
# Debe mostrar: 35.0.0

# Listar AVDs
emulator -list-avds
# Debe mostrar al menos un AVD
```

---

## ⚠️ Nota Importante sobre Expo

**Tu proyecto usa Expo**, no React Native puro. Esto significa:

- ✅ **No necesitas** compilar código nativo manualmente
- ✅ **Puedes usar** Expo Go en lugar de emulador (más fácil)
- ⚠️ **Pero si quieres** usar Android Studio y emuladores, necesitas lo mismo

**Para Expo, las opciones son:**

1. **Expo Go (Más Fácil):**
   - Solo necesitas Node.js y Expo CLI
   - No necesitas Android Studio ni SDK
   - Escaneas QR con Expo Go app

2. **Emulador Android (Como React Native):**
   - Necesitas todo lo de la guía oficial
   - Más control, pero más configuración

---

## 🎯 Conclusión

**Según la guía oficial de React Native, te faltan:**

1. ❌ Android SDK Platform 35
2. ❌ Android SDK Build Tools 35.0.0
3. ❌ AVD con Android 15
4. ⚠️ JDK 17 (tienes Java 24, puede funcionar pero no es recomendado)

**Ya tienes:**
- ✅ Node.js (versión correcta)
- ✅ Android Studio instalado
- ✅ Variables de entorno configuradas

**Siguiente paso:** Instalar SDK Platform 35 y Build Tools desde Android Studio SDK Manager.

---

**Referencia:** [React Native - Set Up Your Environment (Windows)](https://reactnative.dev/docs/set-up-your-environment?os=windows)

