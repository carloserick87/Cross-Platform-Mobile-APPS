# 🔧 Solución: La App No Hace Nada

## 🔴 Problema Identificado

**Síntoma:** La app se abre en el emulador pero no muestra nada / está en blanco / no responde.

**Causa:** El servidor Metro Bundler NO está corriendo.

**Diagnóstico:**
- ✅ Emulador conectado
- ✅ Expo Go instalado
- ❌ Servidor Metro NO corriendo
- ❌ Procesos Node: 0

---

## ✅ Solución

### Paso 1: Iniciar Servidor Metro

```powershell
# Opción 1: Con cache limpio (recomendado)
npx expo start --android --clear

# Opción 2: Normal
npm run android

# Opción 3: Solo servidor (luego presionar 'a')
npm start
# Luego presionar: a
```

### Paso 2: Verificar que el Servidor Está Corriendo

Deberías ver en la terminal:
```
› Metro waiting on exp://192.168.x.x:8081
› Press a │ open Android
```

### Paso 3: La App Debería Cargar Automáticamente

Si no se abre automáticamente:
- Presiona `a` en la terminal de Expo
- O escanea el QR code con Expo Go

---

## 🔍 Verificar Estado del Servidor

```powershell
# Verificar procesos Node corriendo
Get-Process | Where-Object {$_.ProcessName -like "*node*"}

# Verificar puerto 8081
netstat -ano | findstr ":8081"

# Verificar emulador conectado
adb devices
```

---

## 🆘 Si Sigue Sin Funcionar

### 1. Verificar que el Emulador Está Conectado

```powershell
adb devices
# Debe mostrar: emulator-5554    device
```

### 2. Limpiar Todo y Reiniciar

```powershell
# Detener todos los procesos
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force

# Limpiar cache de Expo
npx expo start --clear

# Reiniciar emulador desde Android Studio si es necesario
```

### 3. Verificar Logs del Emulador

```powershell
# Ver errores en tiempo real
adb logcat | Select-String -Pattern "error|Error|ERROR|expo|Expo"
```

### 4. Verificar Dependencias

```powershell
# Reinstalar dependencias si es necesario
npm install
```

---

## 📝 Checklist de Verificación

Antes de reportar problemas, verifica:

- [ ] Emulador Android está corriendo
- [ ] `adb devices` muestra el emulador
- [ ] Servidor Metro está corriendo (proceso Node activo)
- [ ] Puerto 8081 está en uso (`netstat -ano | findstr ":8081"`)
- [ ] Expo Go está instalado en el emulador
- [ ] No hay errores en la terminal de Expo
- [ ] La app se conecta al servidor (ver logs)

---

## 🎯 Comandos Rápidos

```powershell
# Iniciar proyecto completo
npm run android

# O paso a paso:
npm start
# Luego presionar: a

# Verificar estado
adb devices
Get-Process | Where-Object {$_.ProcessName -like "*node*"}
```

---

**Última actualización:** Enero 2025

