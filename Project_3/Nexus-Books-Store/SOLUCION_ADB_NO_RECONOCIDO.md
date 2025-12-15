# 🔧 Solución: ADB No Reconocido

## Problema
```
adb : El término 'adb' no se reconoce como nombre de un cmdlet...
```

## Causa
Las variables de entorno están configuradas en el sistema, pero **la terminal actual no las ha recargado**.

---

## ✅ Solución Rápida

### Opción 1: Recargar Variables en Terminal Actual

Ejecuta este comando en tu terminal PowerShell:

```powershell
# Recargar variables de entorno
$env:ANDROID_HOME = [System.Environment]::GetEnvironmentVariable("ANDROID_HOME", "User")
$env:ANDROID_SDK_ROOT = [System.Environment]::GetEnvironmentVariable("ANDROID_SDK_ROOT", "User")
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "User")

# Verificar
adb devices
```

### Opción 2: Usar Script Automático

He creado un script para ti. Ejecuta:

```powershell
. .\recargar_variables.ps1
```

Esto recargará todas las variables automáticamente.

### Opción 3: Usar Ruta Completa (Temporal)

Si solo necesitas usar `adb` una vez:

```powershell
& "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" devices
```

---

## 🔄 Solución Permanente

### Para Nuevas Terminales

**Las variables ya están configuradas en el sistema**, pero necesitas **cerrar y volver a abrir** la terminal para que se carguen automáticamente.

1. **Cierra completamente** la terminal actual
2. **Abre una nueva terminal**
3. Las variables se cargarán automáticamente

### Verificar que Están Configuradas

```powershell
# Verificar variables en el sistema (no en la terminal actual)
[System.Environment]::GetEnvironmentVariable("ANDROID_HOME", "User")
[System.Environment]::GetEnvironmentVariable("Path", "User")
```

---

## 🎯 Comandos Útiles

### Verificar Emulador

```powershell
# Después de recargar variables
adb devices

# Deberías ver:
# List of devices attached
# emulator-5554    device
```

### Ejecutar Proyecto

```powershell
# Después de recargar variables
npm run android
```

---

## 📝 Nota Importante

**Cada vez que abras una nueva terminal**, las variables se cargarán automáticamente. Solo necesitas recargarlas si estás usando una terminal que ya estaba abierta antes de configurar las variables.

---

## 🆘 Si Sigue Sin Funcionar

1. **Verificar que las variables están configuradas:**
   ```powershell
   [System.Environment]::GetEnvironmentVariable("ANDROID_HOME", "User")
   ```

2. **Si está vacío, volver a configurar:**
   ```powershell
   [System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "$env:LOCALAPPDATA\Android\Sdk", "User")
   ```

3. **Reiniciar la computadora** (última opción)

---

**Solución rápida:** Ejecuta `. .\recargar_variables.ps1` o cierra y vuelve a abrir la terminal.

