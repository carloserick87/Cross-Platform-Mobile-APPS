# 🔧 Solución: La App Solo Muestra la Portada (Splash Screen)

## 🔴 Problema Identificado

**Síntoma:** La app se queda en la pantalla de splash/portada y no carga el contenido.

**Causa:** El splash screen no se oculta porque:
1. La fuente no se carga correctamente
2. El código espera indefinidamente a que la fuente cargue
3. Si hay un error, el splash nunca se oculta

---

## ✅ Solución Aplicada

He modificado `app/_layout.jsx` para:

1. **Ocultar splash incluso si hay error** cargando la fuente
2. **Agregar timeout de seguridad** de 3 segundos
3. **Mejorar manejo de errores** sin bloquear la app

### Cambios Realizados:

```javascript
// ANTES: Se quedaba esperando indefinidamente
if (error) throw error;
if (fontsLoaded) SplashScreen.hideAsync();

// AHORA: Manejo mejorado
if (fontsLoaded) {
  SplashScreen.hideAsync();
}
if (error) {
  console.warn("Error loading fonts:", error);
  SplashScreen.hideAsync(); // Ocultar incluso con error
}

// Timeout de seguridad
useEffect(() => {
  const timer = setTimeout(() => {
    SplashScreen.hideAsync();
  }, 3000);
  return () => clearTimeout(timer);
}, []);
```

---

## 🔄 Recargar la App

### Opción 1: Desde el Emulador

1. **Abre el menú de desarrollador:**
   - Presiona `Ctrl + M` (Windows/Linux)
   - O agita el dispositivo en el emulador
   - O presiona el botón de menú del emulador

2. **Selecciona "Reload"** o escribe `rr`

### Opción 2: Desde Terminal

```powershell
# Recargar la app
adb shell input keyevent 82  # Abrir menú
adb shell input text "rr"     # Escribir "rr" para reload
adb shell input keyevent 66   # Enter
```

### Opción 3: Reiniciar Expo

```powershell
# Detener y reiniciar
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force
npx expo start --android --clear
```

---

## ✅ Verificar que Funciona

Después de recargar, deberías ver:

1. ✅ El splash screen se oculta después de máximo 3 segundos
2. ✅ La pantalla de inicio (home) se carga correctamente
3. ✅ Puedes ver "Descubre tus mejores libros ahora"

---

## 🆘 Si Aún No Funciona

### 1. Verificar Logs

```powershell
# Ver errores en tiempo real
adb logcat | Select-String -Pattern "error|Error|ERROR|expo|ReactNativeJS"
```

### 2. Verificar que el Código se Actualizó

Abre `app/_layout.jsx` y verifica que tiene el código nuevo con el timeout.

### 3. Limpiar Cache y Reinstalar

```powershell
# Limpiar todo
npx expo start --clear
npm install
```

### 4. Verificar Estructura de Rutas

```powershell
# Verificar que existe la ruta home
Test-Path "app/(stack)/home/index.jsx"
```

---

## 📝 Nota sobre la Fuente

El problema original era que:
- Se intenta cargar `"SpaceMono-Regular"` 
- Pero el archivo es `Roboto_Condensed-Black.ttf`
- Esto puede causar que la fuente nunca cargue

**Solución temporal:** El splash se oculta incluso si la fuente falla.

**Solución permanente (opcional):** Corregir el nombre de la fuente o renombrar el archivo para que coincidan.

---

## 🎯 Comandos Rápidos

```powershell
# Recargar app manualmente
adb shell input keyevent 82
adb shell input text "rr"
adb shell input keyevent 66

# Reiniciar servidor
npx expo start --android --clear
```

---

**Última actualización:** Enero 2025

