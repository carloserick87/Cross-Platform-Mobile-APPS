# Guía de Ejecución Local - Nexus Books Store

**Proyecto:** Nexus Books Store Mobile App  
**Fecha:** Enero 2025

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Ejecución en Diferentes Plataformas](#ejecución)
4. [Opciones de Simulación](#opciones-de-simulación)
5. [Configuración Adicional](#configuración-adicional)
6. [Solución de Problemas](#solución-de-problemas)

---

## ✅ Requisitos Previos

### Software Necesario

#### 1. Node.js y npm
- **Versión requerida:** Node.js 18.x o superior
- **Verificar instalación:**
```bash
node --version
npm --version
```
- **Descargar:** [nodejs.org](https://nodejs.org/)

#### 2. Expo CLI (Opcional pero recomendado)
```bash
npm install -g expo-cli
# O usar npx expo (recomendado, no requiere instalación global)
```

#### 3. Git
- **Verificar instalación:**
```bash
git --version
```
- **Descargar:** [git-scm.com](https://git-scm.com/)

---

### Para Desarrollo en iOS (Solo macOS)

#### 1. Xcode
- **Versión:** 14.0 o superior
- **Descargar:** App Store (gratis, ~12GB)
- **Incluye:** Simulador de iOS

#### 2. CocoaPods (Gestor de dependencias iOS)
```bash
sudo gem install cocoapods
```

#### 3. Command Line Tools
```bash
xcode-select --install
```

---

### Para Desarrollo en Android

#### 1. Android Studio
- **Descargar:** [developer.android.com/studio](https://developer.android.com/studio)
- **Incluye:** Android SDK y Emulador

#### 2. Configurar Variables de Entorno

**Windows:**
```powershell
# Agregar a Variables de Entorno del Sistema
ANDROID_HOME = C:\Users\TuUsuario\AppData\Local\Android\Sdk
Path = %ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools
```

**macOS/Linux:**
```bash
# Agregar a ~/.bashrc o ~/.zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

**Verificar instalación:**
```bash
adb --version
```

#### 3. Crear AVD (Android Virtual Device)
1. Abrir Android Studio
2. Tools → Device Manager
3. Create Device
4. Seleccionar dispositivo (ej: Pixel 5)
5. Seleccionar imagen del sistema (ej: Android 13)
6. Finish

---

## 🚀 Instalación

### Paso 1: Navegar al Directorio del Proyecto

```bash
cd Cross-Platform-Mobile-APPS/Project_3/Nexus-Books-Store
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

**Tiempo estimado:** 2-5 minutos (depende de la velocidad de internet)

**Si hay errores:**
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Paso 3: Verificar Instalación

```bash
# Verificar que Expo está instalado
npx expo --version

# Verificar estructura del proyecto
ls -la
```

---

## 🎮 Ejecución

### Opción 1: Modo Desarrollo (Recomendado)

#### Iniciar Servidor de Desarrollo

```bash
npm start
# O
npx expo start
```

**Esto abrirá:**
- Metro Bundler en terminal
- Código QR para escanear con Expo Go
- Opciones para abrir en diferentes plataformas

---

### Opción 2: Ejecutar en Web (Más Rápido para Pruebas)

```bash
npm run web
# O
npx expo start --web
```

**Requisitos adicionales:**
```bash
# Instalar dependencias web si es necesario
npx expo install react-native-web react-dom @expo/metro-runtime
```

**Acceso:** Se abrirá automáticamente en `http://localhost:8081`

---

### Opción 3: Ejecutar en Android

#### Método A: Con Emulador Android

1. **Iniciar emulador Android:**
   - Abrir Android Studio
   - Device Manager → Iniciar dispositivo virtual
   - O desde terminal:
   ```bash
   emulator -avd NombreDelAVD
   ```

2. **Ejecutar app:**
   ```bash
   npm run android
   # O
   npx expo start --android
   ```

#### Método B: Con Dispositivo Físico Android

1. **Habilitar Opciones de Desarrollador:**
   - Configuración → Acerca del teléfono
   - Tocar "Número de compilación" 7 veces

2. **Habilitar Depuración USB:**
   - Configuración → Opciones de desarrollador
   - Activar "Depuración USB"

3. **Conectar dispositivo:**
   ```bash
   # Verificar conexión
   adb devices
   
   # Ejecutar app
   npm run android
   ```

4. **O usar Expo Go:**
   - Instalar Expo Go desde Play Store
   - Escanear QR code del terminal

---

### Opción 4: Ejecutar en iOS (Solo macOS)

#### Método A: Con Simulador iOS

```bash
npm run ios
# O
npx expo start --ios
```

**Esto:**
- Abrirá el simulador de iOS automáticamente
- Compilará e instalará la app

#### Método B: Con Dispositivo Físico iOS

1. **Instalar Expo Go:**
   - App Store → Buscar "Expo Go"
   - Instalar

2. **Conectar a la misma red WiFi** que tu computadora

3. **Escanear QR code:**
   - Abrir Expo Go
   - Escanear QR del terminal
   - O escribir URL manualmente

---

### Opción 5: Usar Expo Go (Más Fácil)

**Expo Go** es la forma más rápida de probar la app sin configurar emuladores.

#### Pasos:

1. **Instalar Expo Go:**
   - **iOS:** [App Store - Expo Go](https://apps.apple.com/app/expo-go/id982107779)
   - **Android:** [Play Store - Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Iniciar servidor:**
   ```bash
   npm start
   ```

3. **Escanear QR:**
   - **iOS:** Abrir Cámara nativa → Escanear QR
   - **Android:** Abrir Expo Go → Escanear QR

4. **O usar túnel:**
   ```bash
   npx expo start --tunnel
   ```
   Útil si estás en redes diferentes

---

## 📱 Opciones de Simulación

### 1. Expo Go (Recomendado para Inicio)

**Ventajas:**
- ✅ No requiere configuración
- ✅ Funciona en dispositivo físico
- ✅ Actualizaciones instantáneas (Hot Reload)
- ✅ Gratis

**Limitaciones:**
- ⚠️ Algunas APIs nativas pueden no estar disponibles
- ⚠️ Requiere conexión a internet

---

### 2. Simulador iOS (Solo macOS)

**Ventajas:**
- ✅ Simulación completa de iOS
- ✅ Acceso a todas las APIs
- ✅ No requiere dispositivo físico

**Cómo usar:**
```bash
# Listar simuladores disponibles
xcrun simctl list devices

# Abrir simulador específico
open -a Simulator

# Ejecutar app
npm run ios
```

---

### 3. Emulador Android

**Ventajas:**
- ✅ Simulación completa de Android
- ✅ Múltiples dispositivos/configuraciones
- ✅ Acceso completo a APIs

**Cómo usar:**
```bash
# Listar AVDs disponibles
emulator -list-avds

# Iniciar emulador específico
emulator -avd Pixel_5_API_33

# En otra terminal, ejecutar app
npm run android
```

**Dispositivos Recomendados:**
- Pixel 5 (Android 13)
- Pixel 6 (Android 14)
- Nexus 5X (para pruebas en dispositivos más antiguos)

---

### 4. Web Browser (Para Desarrollo Rápido)

**Ventajas:**
- ✅ Más rápido para iterar
- ✅ Fácil debugging con DevTools
- ✅ No requiere emuladores

**Limitaciones:**
- ⚠️ No todas las APIs móviles disponibles
- ⚠️ Comportamiento puede diferir de móvil

**Cómo usar:**
```bash
npm run web
```

---

## ⚙️ Configuración Adicional

### Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# API Configuration
API_BASE_URL=https://mock.apidog.com/m1/1088805-1078197-default
API_TIMEOUT=10000

# App Configuration
APP_NAME=Nexus Books Store
APP_VERSION=1.0.0

# Development
EXPO_PUBLIC_ENV=development
```

**Instalar dotenv:**
```bash
npm install dotenv
```

**Usar en código:**
```javascript
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.apiUrl || 'default-url';
```

---

### Configurar Metro Bundler

Crear/editar `metro.config.js`:

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
```

---

### Configurar Debugging

#### React Native Debugger

1. **Instalar:**
   - Descargar: [github.com/jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger)

2. **Usar:**
   - Abrir React Native Debugger
   - En la app: Agitar dispositivo → "Debug"

#### Flipper (Opcional)

```bash
# Instalar Flipper
# Descargar desde: https://fbflipper.com/

# En el proyecto
npm install --save-dev react-native-flipper
```

---

## 🔧 Solución de Problemas

### Problema 1: Error "Cannot find module"

**Solución:**
```bash
# Limpiar e reinstalar
rm -rf node_modules
npm cache clean --force
npm install
```

---

### Problema 2: Error de Metro Bundler

**Solución:**
```bash
# Limpiar cache de Metro
npx expo start --clear

# O resetear completamente
watchman watch-del-all  # Si tienes watchman instalado
rm -rf node_modules
npm install
```

---

### Problema 3: Error en Android "SDK not found"

**Solución:**
1. Verificar `ANDROID_HOME` está configurado
2. Verificar que Android SDK está instalado
3. Aceptar licencias:
```bash
cd $ANDROID_HOME/tools/bin
./sdkmanager --licenses
```

---

### Problema 4: Error en iOS "Pod install failed"

**Solución:**
```bash
cd ios  # Si existe carpeta ios
pod deintegrate
pod install
cd ..
```

**Nota:** Con Expo managed workflow, normalmente no necesitas esto.

---

### Problema 5: Puerto 8081 ya en uso

**Solución:**
```bash
# Encontrar proceso usando el puerto
# Windows
netstat -ano | findstr :8081
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:8081 | xargs kill -9

# O usar otro puerto
npx expo start --port 8082
```

---

### Problema 6: QR Code no funciona

**Solución:**
```bash
# Usar túnel (más lento pero funciona en cualquier red)
npx expo start --tunnel

# O conectar a la misma red WiFi
npx expo start --lan
```

---

### Problema 7: Error "NativeWind classes not working"

**Solución:**
```bash
# Verificar configuración
# 1. Verificar tailwind.config.js existe
# 2. Verificar babel.config.js tiene nativewind/babel
# 3. Verificar metro.config.js tiene withNativeWind

# Reinstalar NativeWind
npm uninstall nativewind
npm install nativewind@latest

# Limpiar cache
npx expo start --clear
```

---

### Problema 8: App se cierra inesperadamente

**Solución:**
1. **Verificar logs:**
   ```bash
   # Android
   adb logcat

   # iOS (en Xcode)
   # Window → Devices and Simulators → View Device Logs
   ```

2. **Verificar errores en terminal:**
   - Revisar Metro Bundler output
   - Buscar errores en rojo

3. **Reiniciar:**
   ```bash
   # Limpiar y reiniciar
   npx expo start --clear
   ```

---

## 📝 Comandos Útiles

### Desarrollo

```bash
# Iniciar servidor
npm start

# Iniciar con limpieza de cache
npm start -- --clear

# Iniciar en modo producción
npm start -- --no-dev

# Ejecutar en plataforma específica
npm run android
npm run ios
npm run web

# Ver logs
npx expo logs
```

### Build

```bash
# Build para desarrollo
npx expo build:android
npx expo build:ios

# O usar EAS Build (recomendado)
npm install -g eas-cli
eas build --platform android
eas build --platform ios
```

### Testing

```bash
# Ejecutar tests (cuando se implementen)
npm test

# Con coverage
npm test -- --coverage
```

---

## 🎯 Flujo de Trabajo Recomendado

### Para Desarrollo Diario

1. **Iniciar servidor:**
   ```bash
   npm start
   ```

2. **Abrir en Expo Go** (dispositivo físico o emulador)

3. **Hacer cambios en código**

4. **Ver actualizaciones automáticas** (Hot Reload)

5. **Para cambios grandes, presionar `r` en terminal** para recargar

---

### Para Testing en Múltiples Dispositivos

1. **Iniciar servidor con túnel:**
   ```bash
   npx expo start --tunnel
   ```

2. **Conectar múltiples dispositivos** escaneando el mismo QR

3. **Ver cambios en tiempo real** en todos los dispositivos

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://www.nativewind.dev/)

### Herramientas Útiles

- **Expo Dev Tools:** [expo.dev/tools](https://expo.dev/tools)
- **React Native Debugger:** [github.com/jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- **Flipper:** [fbflipper.com](https://fbflipper.com/)

### Comunidad

- [Expo Discord](https://chat.expo.dev/)
- [React Native Community](https://reactnative.dev/community/overview)
- [Stack Overflow - expo](https://stackoverflow.com/questions/tagged/expo)

---

## ✅ Checklist de Inicio Rápido

- [ ] Node.js instalado (v18+)
- [ ] Proyecto clonado
- [ ] `npm install` ejecutado exitosamente
- [ ] Expo Go instalado en dispositivo móvil (opcional)
- [ ] Emulador configurado (Android/iOS) (opcional)
- [ ] `npm start` ejecutado sin errores
- [ ] App visible en dispositivo/emulador

---

## 🚀 Inicio Rápido (TL;DR)

```bash
# 1. Navegar al proyecto
cd Cross-Platform-Mobile-APPS/Project_3/Nexus-Books-Store

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor
npm start

# 4. Escanear QR con Expo Go O presionar:
#    - 'a' para Android
#    - 'i' para iOS  
#    - 'w' para Web
```

---

**Última actualización:** Enero 2025  
**Versión del documento:** 1.0


