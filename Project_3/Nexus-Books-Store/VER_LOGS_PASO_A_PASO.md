# 🔍 Cómo Ver los Logs - Paso a Paso

## 📋 Pasos Detallados

### Paso 1: Abre la Terminal Correcta

1. En Cursor, busca una terminal que muestre:
   ```
   › Metro waiting on exp://...
   › Press r │ reload app
   ```

2. **Si no la encuentras**, abre una nueva:
   - `Ctrl + Shift + `` (backtick)
   - O: Terminal → New Terminal

---

### Paso 2: Inicia el Servidor (Si No Está Corriendo)

En la terminal, ejecuta:

```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npx expo start --clear
```

Deberías ver:
- QR code
- Opciones (`Press r │ reload app`)

---

### Paso 3: Abre la App

**Opción A: En Android**
- Presiona `a` en la terminal
- La app se abre en el emulador

**Opción B: En Navegador**
- Presiona `w` en la terminal
- La app se abre en el navegador

---

### Paso 4: Observa los Logs

**Mientras usas la app**, mira la terminal:

1. **Cuando la app carga**, verás:
   ```
   🔍 [useBooks] Iniciando carga de libros...
   📚 [API] getBooks - Iniciando petición...
   ```

2. **Cuando presionas el botón de cuadraditos**, verás:
   ```
   🔍 [HeaderLeft] ===== BOTÓN PRESIONADO =====
   ✅ [HeaderLeft] setDrawerVisible(true) ejecutado
   🔍 [Drawer] Estado drawerVisible cambió a: true
   ```

3. **Los logs aparecen automáticamente** en tiempo real

---

## 🎯 Ejemplo Práctico

### Lo que deberías ver:

```
PS C:\...\Nexus-Books-Store> npx expo start --clear

› Metro waiting on exp://192.168.1.100:8081
› Scan the QR code above

› Press a │ open Android
› Press w │ open web

🔍 [useBooks] Iniciando carga de libros...     ← Log cuando carga
📚 [API] getBooks - Iniciando petición...       ← Log de API
✅ [API] getBooks - Respuesta recibida: 200    ← Log de respuesta

[Ahora presionas el botón de cuadraditos en la app]

🔍 [HeaderLeft] ===== BOTÓN PRESIONADO =====    ← Log cuando presionas
✅ [HeaderLeft] setDrawerVisible(true)          ← Log de estado
🔍 [Drawer] Estado drawerVisible cambió a: true ← Log de cambio
🔍 [DrawerMenu] ===== RENDERIZANDO =====        ← Log del drawer
```

---

## 💡 Consejos

1. **Mantén la terminal visible** mientras pruebas
2. **Los logs aparecen en tiempo real** - no necesitas hacer nada especial
3. **Si no ves logs**, asegúrate de que la app esté corriendo
4. **Los errores también aparecen ahí** - son útiles para debugging

---

## ❓ Preguntas Frecuentes

**P: ¿Los logs aparecen solos?**
R: Sí, automáticamente cuando interactúas con la app.

**P: ¿Necesito hacer algo especial?**
R: No, solo mira la terminal mientras usas la app.

**P: ¿Qué pasa si no veo nada?**
R: Asegúrate de que la app esté corriendo y recarga con `r`.

---

**¡Los logs están en la terminal de Expo - solo mírala mientras usas la app!**

