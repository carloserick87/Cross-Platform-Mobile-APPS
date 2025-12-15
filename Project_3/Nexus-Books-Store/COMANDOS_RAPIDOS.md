# Comandos Rápidos - Nexus Books Store

## ⚠️ Error Común: Directorio Incorrecto

Si ves este error:
```
npm ERR! path C:\Cursor\Croos-Platform-Mobile-Apss/package.json
npm ERR! enoent ENOENT: no such file or directory
```

**Causa:** Estás en el directorio incorrecto.

---

## ✅ Solución: Navegar al Directorio Correcto

### En PowerShell:

```powershell
# 1. Navegar al directorio del proyecto
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store

# 2. Verificar que estás en el lugar correcto (deberías ver package.json)
ls package.json

# 3. Ejecutar el servidor
npm start
```

### En CMD:

```cmd
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
```

---

## 📁 Estructura de Directorios

```
Croos-Platform-Mobile-Apss/                    ← Directorio raíz (NO tiene package.json)
└── Cross-Platform-Mobile-APPS/
    └── Project_3/
        └── Nexus-Books-Store/                  ← AQUÍ está el proyecto
            ├── package.json                    ← ✅ Este es el que necesitas
            ├── app.json
            └── ...
```

---

## 🚀 Comandos Completos desde Cualquier Lugar

### Opción 1: Navegar y Ejecutar

```powershell
# Desde cualquier directorio
cd C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
```

### Opción 2: Ejecutar Directamente (Una Línea)

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store; npm start
```

### Opción 3: Usar Ruta Absoluta

```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npm start
```

---

## 📝 Comandos Más Usados

### Iniciar Servidor de Desarrollo

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm start
```

### Ejecutar en Web

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm run web
```

### Ejecutar en Android

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm run android
```

### Instalar Dependencias

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store
npm install
```

---

## 🔍 Verificar que Estás en el Directorio Correcto

Antes de ejecutar comandos, verifica:

```powershell
# Ver archivos del directorio actual
ls

# Deberías ver:
# - package.json
# - app.json
# - app/
# - components/
# - etc.

# O verificar específicamente:
Test-Path package.json
# Debería devolver: True
```

---

## 💡 Tip: Crear Alias o Script

### Crear un Script PowerShell

Crea un archivo `start-app.ps1` en el directorio raíz:

```powershell
# start-app.ps1
Set-Location "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npm start
```

Luego ejecutar:
```powershell
.\start-app.ps1
```

### O Crear un Alias en PowerShell Profile

```powershell
# Editar perfil
notepad $PROFILE

# Agregar esta línea:
function Start-NexusApp {
    Set-Location "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
    npm start
}

# Guardar y recargar:
. $PROFILE

# Ahora puedes usar:
Start-NexusApp
```

---

## ✅ Checklist Antes de Ejecutar

- [ ] Estoy en el directorio correcto (`Nexus-Books-Store`)
- [ ] Veo el archivo `package.json` al listar archivos
- [ ] Las dependencias están instaladas (`node_modules` existe)
- [ ] El puerto 8081 no está ocupado por otro proceso

---

## 🎯 Comando Rápido de Referencia

**Copia y pega esto en PowerShell:**

```powershell
cd Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store; npm start
```

---

**Última actualización:** Enero 2025


