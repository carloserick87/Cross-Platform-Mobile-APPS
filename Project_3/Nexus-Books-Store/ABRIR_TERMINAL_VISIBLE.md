# 🖥️ Cómo Abrir Terminal Visible para el Servidor

## ⚠️ Situación Actual

Hay varios procesos de Node corriendo en **background** (segundo plano), por lo que no puedes ver la terminal interactiva.

---

## ✅ Solución: Abrir Terminal Nueva Visible

### Paso 1: Abrir Nueva Terminal en Cursor

**Método A: Atajo de Teclado**
```
Ctrl + Shift + ` (backtick/acento grave)
```

**Método B: Menú**
1. Ve a: **Terminal → New Terminal**
2. O clic derecho en la carpeta del proyecto → **Open in Integrated Terminal**

---

### Paso 2: Ejecutar el Servidor

En la nueva terminal que acabas de abrir, ejecuta:

```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npx expo start --clear
```

---

### Paso 3: Verificar que Funciona

Deberías ver:

```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go

› Press a │ open Android
› Press i │ open iOS simulator  
› Press w │ open web

› Press r │ reload app
```

---

## 🎯 Ahora Podrás:

✅ **Ver el QR code**  
✅ **Presionar `r` para recargar**  
✅ **Presionar `a` para Android**  
✅ **Presionar `w` para navegador**  
✅ **Ver todos los logs en tiempo real**  

---

## 🔄 Comandos Útiles en la Terminal

Una vez que veas el QR code:

- **`r`** → Recargar la aplicación
- **`a`** → Abrir en emulador Android
- **`w`** → Abrir en navegador web
- **`i`** → Abrir en simulador iOS (solo macOS)
- **`Ctrl + C`** → Detener el servidor

---

## ⚠️ Si No Funciona

Si al ejecutar `npx expo start --clear` te dice que el puerto está ocupado:

1. **Detén todos los procesos:**
   ```powershell
   Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process -Force
   ```

2. **Espera 5 segundos**

3. **Ejecuta de nuevo:**
   ```powershell
   npx expo start --clear
   ```

---

## 📝 Resumen Rápido

1. **Abre nueva terminal** (`Ctrl + Shift + ``)
2. **Ejecuta:** `cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"`
3. **Ejecuta:** `npx expo start --clear`
4. **¡Listo!** Verás el QR code y podrás interactuar

---

**¡Ya detuve los procesos en background! Ahora abre una nueva terminal y ejecuta el servidor para verlo en acción.**

