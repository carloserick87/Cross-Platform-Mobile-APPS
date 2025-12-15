# 🚀 Cómo Ejecutar el Proyecto en el Emulador

## ✅ Estado Actual
- ✅ Emulador Android corriendo (emulator-5554)
- ✅ Servidor Expo iniciando

---

## 📱 Opción 1: Ejecutar Directamente en Android (RECOMENDADO)

### Paso 1: Esperar a que aparezca el menú de Expo

En la terminal donde ejecutaste `npm start`, verás algo como:

```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor
```

### Paso 2: Presionar 'a' para Android

**Simplemente presiona la tecla `a`** en la terminal donde corre Expo.

Esto abrirá automáticamente la app en tu emulador Android.

---

## 📱 Opción 2: Ejecutar con Comando Directo

Si prefieres ejecutarlo directamente sin esperar el menú:

```powershell
npm run android
```

O:

```powershell
npx expo start --android
```

---

## 📱 Opción 3: Usar Expo Go en el Emulador

Si quieres usar Expo Go (más similar a desarrollo real):

### Paso 1: Instalar Expo Go en el Emulador

1. **Abre Play Store** en el emulador
2. **Busca "Expo Go"**
3. **Instala** la aplicación

### Paso 2: Escanear QR o Conectar

1. En la terminal de Expo, verás un **código QR**
2. **Abre Expo Go** en el emulador
3. **Escanear QR** o escribir la URL manualmente (exp://...)

---

## 🎯 Comandos Rápidos

```powershell
# Opción más rápida - ejecuta directamente en Android
npm run android

# O iniciar servidor y luego presionar 'a'
npm start
# Luego presionar: a
```

---

## 🔍 Verificar que Funciona

### 1. Verificar que el Emulador Está Conectado

```powershell
adb devices
```

Deberías ver:
```
List of devices attached
emulator-5554    device
```

### 2. Verificar que Expo Está Corriendo

En la terminal deberías ver:
- Metro bundler iniciado
- URL de conexión (exp://...)
- Opciones de teclado (a, i, w, etc.)

### 3. En el Emulador

- La app debería abrirse automáticamente
- O puedes abrir Expo Go y conectarte manualmente

---

## 🆘 Solución de Problemas

### Problema: "No Android devices found"

**Solución:**
```powershell
# Verificar dispositivos
adb devices

# Si no aparece, reiniciar ADB
adb kill-server
adb start-server
adb devices

# Verificar que el emulador está corriendo
# Si no, inícialo desde Android Studio Device Manager
```

### Problema: "Metro bundler no inicia"

**Solución:**
```powershell
# Limpiar cache y reiniciar
npx expo start --clear

# O reinstalar dependencias
npm install
npm start
```

### Problema: "App no se abre en emulador"

**Solución:**
1. Verifica que el emulador está corriendo
2. Verifica que ADB lo detecta: `adb devices`
3. Intenta presionar `a` de nuevo en la terminal de Expo
4. O ejecuta: `npm run android`

### Problema: "Error de conexión"

**Solución:**
```powershell
# Usar tunnel para conexión más estable
npx expo start --tunnel

# O LAN explícito
npx expo start --lan
```

---

## 📝 Flujo Completo Recomendado

```powershell
# 1. Verificar emulador está corriendo
adb devices

# 2. Ejecutar proyecto (elige una opción)

# Opción A: Directo a Android
npm run android

# Opción B: Servidor y luego presionar 'a'
npm start
# Esperar menú, luego presionar: a
```

---

## ✅ Checklist de Ejecución

- [ ] Emulador Android está corriendo
- [ ] `adb devices` muestra el emulador
- [ ] Terminal en el directorio del proyecto
- [ ] Dependencias instaladas (`npm install` ya hecho)
- [ ] Ejecutar `npm run android` o `npm start` + `a`

---

**¡Listo!** Tu proyecto debería estar corriendo en el emulador ahora.

