# 🔧 Configurar Variables de Entorno Android

## ✅ Método 1: Automático con PowerShell (RECOMENDADO)

**Ya ejecutado automáticamente.** Las variables están configuradas.

**Para verificar:**
1. Cierra y vuelve a abrir la terminal
2. Ejecuta:
```powershell
echo $env:ANDROID_HOME
adb --version
```

---

## 📋 Método 2: Manual desde Panel de Control

Si prefieres hacerlo manualmente o verificar:

### Paso 1: Abrir Variables de Entorno

1. **Presiona `Windows + R`** (o busca "Ejecutar")
2. Escribe: `sysdm.cpl` y presiona Enter
3. Click en la pestaña **"Opciones avanzadas"**
4. Click en **"Variables de entorno"**

**O alternativamente:**

1. Abre **Panel de Control**
2. Click en **"Cuentas de usuario"**
3. Click en **"Cuentas de usuario"** otra vez
4. Click en **"Cambiar mis variables de entorno"** (en el panel izquierdo)

---

### Paso 2: Crear Variable ANDROID_HOME

1. En la sección **"Variables de usuario"** (parte superior)
2. Click en **"Nueva..."**
3. En **"Nombre de la variable"** escribe: `ANDROID_HOME`
4. En **"Valor de la variable"** escribe:
   ```
   C:\Users\sergio-p\AppData\Local\Android\Sdk
   ```
   *(Reemplaza "sergio-p" con tu nombre de usuario si es diferente)*

5. Click en **"Aceptar"**

---

### Paso 3: Crear Variable ANDROID_SDK_ROOT (Opcional pero recomendado)

1. Click en **"Nueva..."** otra vez
2. En **"Nombre de la variable"** escribe: `ANDROID_SDK_ROOT`
3. En **"Valor de la variable"** escribe:
   ```
   C:\Users\sergio-p\AppData\Local\Android\Sdk
   ```
4. Click en **"Aceptar"**

---

### Paso 4: Agregar Rutas al PATH

1. En la lista de variables, busca **"Path"** (en Variables de usuario)
2. Selecciónalo y click en **"Editar..."**
3. Click en **"Nuevo"** y agrega estas rutas **una por una**:

   ```
   C:\Users\sergio-p\AppData\Local\Android\Sdk\platform-tools
   C:\Users\sergio-p\AppData\Local\Android\Sdk\emulator
   C:\Users\sergio-p\AppData\Local\Android\Sdk\tools
   C:\Users\sergio-p\AppData\Local\Android\Sdk\tools\bin
   ```

   *(Reemplaza "sergio-p" con tu nombre de usuario)*

4. Click en **"Aceptar"** en cada ventana

---

### Paso 5: Verificar Configuración

1. **Cierra todas las ventanas**
2. **Cierra y vuelve a abrir PowerShell/Terminal**
3. Ejecuta estos comandos:

```powershell
# Verificar ANDROID_HOME
echo $env:ANDROID_HOME
# Debería mostrar: C:\Users\sergio-p\AppData\Local\Android\Sdk

# Verificar ANDROID_SDK_ROOT
echo $env:ANDROID_SDK_ROOT
# Debería mostrar: C:\Users\sergio-p\AppData\Local\Android\Sdk

# Verificar ADB
adb --version
# Debería mostrar la versión de ADB
```

---

## 🎯 Resumen Visual del Panel de Control

```
Panel de Control
  ↓
Cuentas de usuario
  ↓
Cuentas de usuario (otra vez)
  ↓
Cambiar mis variables de entorno
  ↓
┌─────────────────────────────────┐
│ Variables de usuario:            │
│                                 │
│ [Nueva...]  [Editar...]  [Eliminar] │
│                                 │
│ Path                            │ ← Editar esta
│ TEMP                            │
│ TMP                             │
│                                 │
│ [Nueva...] ← Click aquí para    │
│              crear ANDROID_HOME │
└─────────────────────────────────┘
```

---

## ✅ Verificación Rápida

Después de configurar, ejecuta en una **nueva terminal**:

```powershell
# Verificar variables
$env:ANDROID_HOME
$env:ANDROID_SDK_ROOT

# Verificar ADB
adb --version

# Verificar que ADB está en PATH
Get-Command adb
```

**Si todo está bien, deberías ver:**
- Ruta del SDK en las variables
- Versión de ADB
- Comando ADB encontrado

---

## 🆘 Solución de Problemas

### Problema: "adb: command not found"

**Solución:**
- Verifica que agregaste las rutas al PATH
- Cierra y vuelve a abrir la terminal
- Verifica que la ruta existe: `Test-Path "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe"`

### Problema: Variables no se guardan

**Solución:**
- Asegúrate de hacer click en "Aceptar" en todas las ventanas
- Verifica que estás editando "Variables de usuario" y no "Variables del sistema"
- Reinicia la computadora si es necesario

### Problema: No encuentro la ruta del SDK

**Solución:**
1. Abre Android Studio
2. Tools → SDK Manager
3. En la parte superior verás "Android SDK Location"
4. Copia esa ruta exacta

---

## 📝 Notas Importantes

1. **Reemplaza "sergio-p"** con tu nombre de usuario real en todas las rutas
2. **Cierra y vuelve a abrir la terminal** después de configurar
3. Las variables se aplican a **nuevas sesiones** de terminal
4. Si usas múltiples usuarios, configura en "Variables del sistema" (requiere admin)

---

**Última actualización:** Enero 2025

