# 📊 Dónde Ver los Logs de la Aplicación

## 🎯 Ubicaciones de los Logs

Los logs aparecen en diferentes lugares dependiendo de cómo ejecutes la app:

---

## 1️⃣ Terminal de Expo (Principal)

### ✅ Dónde está:
En la **misma terminal** donde ejecutaste `npx expo start --clear`

### 📍 Cómo encontrarla:
1. Busca la terminal en Cursor donde ves el **QR code**
2. O donde ves las opciones: `Press r │ reload app`

### 📝 Qué verás:
```
🔍 [HeaderLeft] ===== BOTÓN PRESIONADO =====
✅ [HeaderLeft] setDrawerVisible(true) ejecutado
🔍 [Drawer] Estado drawerVisible cambió a: true
🔍 [DrawerMenu] ===== RENDERIZANDO =====
```

**Estos son los logs principales que necesitas ver.**

---

## 2️⃣ Navegador Web (F12 - DevTools)

### ✅ Si ejecutas la app en navegador (`w`):

1. **Abre la app** en el navegador
2. **Presiona `F12`** para abrir DevTools
3. **Ve a la pestaña "Console"**
4. **Ahí verás todos los `console.log()`**

### 📝 Qué verás:
```
🔍 [HeaderLeft] ===== BOTÓN PRESIONADO =====
✅ [HeaderLeft] setDrawerVisible(true) ejecutado
...
```

---

## 3️⃣ React Native Debugger (Opcional)

### ✅ Si usas React Native Debugger:

1. Abre React Native Debugger
2. Los logs aparecen en la consola del debugger

---

## 🎯 Método Recomendado: Terminal de Expo

**La forma más fácil es ver los logs en la terminal donde corre Expo:**

### Paso 1: Encuentra la Terminal

1. En Cursor, busca la terminal donde ves:
   ```
   › Metro waiting on exp://192.168.x.x:8081
   › Scan the QR code above
   
   › Press r │ reload app
   ```

2. **Esa es tu terminal de logs**

### Paso 2: Ejecuta la App

- Presiona `a` para Android
- Presiona `w` para navegador

### Paso 3: Interactúa con la App

- Presiona el botón de cuadraditos
- **Los logs aparecerán automáticamente en esa misma terminal**

---

## 📸 Ejemplo Visual

```
┌─────────────────────────────────────────┐
│ Terminal de Expo                        │
├─────────────────────────────────────────┤
│ › Metro waiting on exp://...            │
│ › Press r │ reload app                  │
│                                         │
│ ← Aquí aparecen los logs cuando:       │
│   - La app se carga                    │
│   - Presionas botones                  │
│   - Hay errores                        │
│                                         │
│ 🔍 [HeaderLeft] Botón presionado      │
│ ✅ [Drawer] Estado cambiado            │
│ ...                                     │
└─────────────────────────────────────────┘
```

---

## 🔍 Si No Ves Logs

### Problema 1: Terminal no visible

**Solución:**
1. Abre nueva terminal (`Ctrl + Shift + ``)
2. Ejecuta: `npx expo start --clear`
3. Ahora verás los logs ahí

### Problema 2: Logs no aparecen

**Solución:**
1. Asegúrate de que la app esté corriendo
2. Presiona `r` para recargar
3. Los logs deberían aparecer

### Problema 3: Solo ves errores

**Solución:**
- Los errores también son útiles
- Comparte los errores que veas

---

## ✅ Checklist

- [ ] Tengo la terminal de Expo abierta y visible
- [ ] Veo el QR code en la terminal
- [ ] La app está corriendo (presioné `a` o `w`)
- [ ] Cuando interactúo con la app, veo logs en la terminal

---

## 📝 Resumen Rápido

**¿Dónde están los logs?**
→ En la **terminal donde corre Expo** (donde ves el QR code)

**¿Cómo los veo?**
→ Simplemente mira esa terminal mientras usas la app

**¿Qué busco?**
→ Los mensajes que empiezan con `🔍`, `✅`, `❌`

---

**¡Los logs aparecen automáticamente en la terminal de Expo cuando interactúas con la app!**

