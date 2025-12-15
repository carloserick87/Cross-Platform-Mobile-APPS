# Expo Go en PC/Windows - Opciones Disponibles

## ❌ Expo Go No Está Disponible Nativamente para Windows

Expo Go es una aplicación móvil diseñada para iOS y Android. **No existe una versión nativa para Windows PC**.

---

## ✅ Alternativas para Probar la App en PC/Windows

### Opción 1: Emulador Android (Recomendado para Windows)

Esta es la mejor opción para simular Expo Go en Windows.

#### Requisitos:
1. **Android Studio** instalado
2. **Emulador Android** configurado

#### Pasos:

**1. Instalar Android Studio:**
- Descargar: [developer.android.com/studio](https://developer.android.com/studio)
- Instalar con Android SDK y Emulator incluidos

**2. Crear un AVD (Android Virtual Device):**
```
1. Abrir Android Studio
2. Tools → Device Manager
3. Create Device
4. Seleccionar dispositivo (ej: Pixel 5)
5. Seleccionar imagen del sistema (Android 13 o superior)
6. Finish
```

**3. Instalar Expo Go en el Emulador:**
```
1. Iniciar el emulador Android
2. Abrir Play Store en el emulador
3. Buscar "Expo Go"
4. Instalar Expo Go
```

**4. Ejecutar la App:**
```bash
# En la terminal del proyecto
npm start

# En otra terminal o presionar 'a' en la terminal del servidor
npm run android
```

**5. Conectar Expo Go:**
- Abrir Expo Go en el emulador
- Escanear el QR code que aparece en la terminal
- O escribir la URL manualmente (exp://...)

---

### Opción 2: Versión Web (Más Rápido)

La forma más rápida de probar la app en PC sin configuración adicional.

#### Ejecutar:
```bash
npm run web
# O presionar 'w' en la terminal donde corre npm start
```

**Ventajas:**
- ✅ No requiere emuladores
- ✅ Más rápido para desarrollo
- ✅ Fácil debugging con DevTools del navegador

**Limitaciones:**
- ⚠️ Algunas APIs móviles no disponibles
- ⚠️ Comportamiento puede diferir de móvil real

---

### Opción 3: Usar Tu Teléfono Físico (Más Realista)

Conectar tu teléfono Android o iPhone a la misma red WiFi.

#### Pasos:

**1. Instalar Expo Go en tu teléfono:**
- Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

**2. Conectar a la misma red WiFi** que tu PC

**3. Ejecutar servidor:**
```bash
npm start
```

**4. Escanear QR:**
- Verás un QR code en la terminal
- Escanear con Expo Go (Android) o Cámara (iOS)

**Si el QR no funciona:**
```bash
# Usar modo tunnel (más lento pero funciona en cualquier red)
npx expo start --tunnel
```

---

### Opción 4: BlueStacks (Emulador Android Alternativo)

BlueStacks es un emulador Android popular para Windows.

#### Pasos:

**1. Instalar BlueStacks:**
- Descargar: [bluestacks.com](https://www.bluestacks.com/)
- Instalar y configurar

**2. Instalar Expo Go:**
- Abrir Play Store en BlueStacks
- Buscar e instalar "Expo Go"

**3. Ejecutar la app:**
```bash
npm start
```

**4. Conectar:**
- Abrir Expo Go en BlueStacks
- Escanear QR o escribir URL manualmente

**Nota:** BlueStacks puede ser más pesado que el emulador oficial de Android Studio.

---

## 📊 Comparación de Opciones

| Opción | Facilidad | Realismo | Velocidad | Requisitos |
|--------|-----------|----------|-----------|------------|
| **Web** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Solo navegador |
| **Emulador Android** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Android Studio |
| **Teléfono Físico** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Expo Go + WiFi |
| **BlueStacks** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | BlueStacks instalado |

---

## 🎯 Recomendación para Windows

### Para Desarrollo Rápido:
**Usa la versión Web** (`npm run web`)
- Más rápido
- Fácil de usar
- Bueno para probar UI

### Para Testing Realista:
**Usa Emulador Android** (Android Studio)
- Comportamiento más cercano a móvil real
- Acceso a todas las APIs
- Mejor para testing completo

### Para Testing en Dispositivo Real:
**Usa tu teléfono físico**
- Experiencia más realista
- Mejor para UX testing
- Requiere WiFi compartido

---

## 🚀 Guía Rápida: Emulador Android

### Instalación Completa (Primera Vez)

```bash
# 1. Instalar Android Studio (desde el sitio web)
# 2. Abrir Android Studio → SDK Manager
# 3. Instalar Android SDK Platform-Tools
# 4. Crear AVD desde Device Manager

# 5. Configurar variables de entorno (Windows PowerShell como Admin)
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\TuUsuario\AppData\Local\Android\Sdk", "User")
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Users\TuUsuario\AppData\Local\Android\Sdk\platform-tools", "User")

# 6. Reiniciar terminal y verificar
adb --version

# 7. Iniciar emulador
emulator -avd NombreDelAVD

# 8. En otra terminal, ejecutar app
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
# Presionar 'a' para Android
```

---

## 🔧 Solución de Problemas

### Problema: No puedo instalar Expo Go en emulador

**Solución:**
1. Verificar que Play Store está disponible en el emulador
2. Si no hay Play Store, crear AVD con imagen que incluya Google Play
3. O descargar APK de Expo Go manualmente:
   - [expo.dev/tools](https://expo.dev/tools)
   - Instalar APK directamente en emulador

### Problema: Emulador muy lento

**Soluciones:**
1. Habilitar aceleración de hardware (HAXM/WHPX)
2. Aumentar RAM del emulador (Settings → Advanced)
3. Cerrar otras aplicaciones pesadas
4. Usar versión web como alternativa

### Problema: No puedo conectar desde emulador

**Soluciones:**
```bash
# Verificar que emulador está corriendo
adb devices

# Usar IP local explícitamente
npx expo start --lan

# O usar tunnel
npx expo start --tunnel
```

---

## 📱 Instalación Rápida de Expo Go en Emulador

### Método 1: Desde Play Store (Recomendado)

1. Abrir Play Store en emulador
2. Buscar "Expo Go"
3. Instalar

### Método 2: Instalar APK Manualmente

```bash
# 1. Descargar APK de Expo Go
# Desde: https://expo.dev/tools o GitHub releases

# 2. Instalar en emulador
adb install path/to/expo-go.apk

# 3. Abrir Expo Go en emulador
```

---

## ✅ Checklist para Windows

- [ ] Android Studio instalado
- [ ] AVD creado y funcionando
- [ ] Expo Go instalado en emulador
- [ ] Variables de entorno configuradas (opcional pero recomendado)
- [ ] Servidor ejecutándose (`npm start`)
- [ ] App visible en emulador

---

## 🎉 Resumen

**Para Windows PC, las mejores opciones son:**

1. **Web** - Más rápido, sin configuración
2. **Emulador Android** - Más realista, requiere Android Studio
3. **Teléfono físico** - Más realista, requiere WiFi compartido

**No hay Expo Go nativo para Windows**, pero puedes simular la experiencia móvil usando estas alternativas.

---

**Última actualización:** Enero 2025


