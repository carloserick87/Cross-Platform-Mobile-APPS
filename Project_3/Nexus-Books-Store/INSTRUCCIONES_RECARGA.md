# 🔄 Cómo Recargar la Aplicación Correctamente

## ⚠️ Problema Detectado

Parece que hay un problema con el historial de PowerShell que está mezclando comandos.

---

## ✅ Solución Rápida

### Opción 1: Ejecutar Script (Más Fácil)

```powershell
.\RECARGAR_CORRECTO.ps1
```

### Opción 2: Comando Manual

```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npx expo start --clear
```

---

## 🔍 Si el Servidor Ya Está Corriendo

Si ya tienes el servidor corriendo en otra terminal:

1. **En la terminal donde corre Expo**, simplemente presiona:
   ```
   r
   ```
   (Solo la letra `r`, sin nada más)

2. Esto recargará la aplicación automáticamente

---

## 🐛 Si Aparece Error del Historial

**Problema:** PowerShell está mezclando comandos del historial

**Solución:**
1. Limpia la línea actual (Ctrl+C)
2. Escribe el comando completo de nuevo:
   ```powershell
   npx expo start --clear
   ```

---

## 📱 Después de Iniciar el Servidor

Cuando veas el QR code y las opciones:

- **`r`** → Recargar app
- **`a`** → Abrir en Android
- **`w`** → Abrir en navegador web
- **`i`** → Abrir en iOS (solo macOS)

---

## ✅ Verificación

Después de recargar, cuando presiones el icono de cuadraditos deberías ver:

1. Un **Alert** que dice "Botón presionado! Abriendo drawer..."
2. El **drawer** debería abrirse

---

**¡El servidor debería estar iniciándose ahora!**

