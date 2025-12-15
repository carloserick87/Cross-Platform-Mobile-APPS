# 📊 Cómo Ver los Logs de la Aplicación

## 🔍 Métodos para Ver Logs

### Método 1: En la Terminal de Expo

Cuando ejecutas `npx expo start`, los logs aparecen automáticamente en la terminal.

**Verás:**
- ✅ Errores de compilación
- ✅ Errores de runtime
- ✅ Logs de `console.log()`
- ✅ Errores de `console.error()`

---

### Método 2: En el Navegador (Modo Web)

1. Abre la app en navegador (`w` en la terminal)
2. Presiona `F12` para abrir DevTools
3. Ve a la pestaña **Console**
4. Verás todos los logs ahí

---

### Método 3: En Expo Go (Móvil)

1. Abre Expo Go en tu mófono
2. Conecta el teléfono a la misma red WiFi que tu PC
3. Los logs aparecen en la terminal donde corre `npx expo start`

---

### Método 4: React Native Debugger

1. Instala React Native Debugger
2. Abre la app
3. Agita el dispositivo o presiona `Ctrl+M` (Android)
4. Selecciona "Debug"
5. Los logs aparecen en React Native Debugger

---

## 🐛 Qué Buscar en los Logs

### Logs de API (Esperados):

```
[API Request] GET /books
[API Response] /books 200
```

### Errores Comunes:

**Error de módulo no encontrado:**
```
Unable to resolve module...
```

**Error de API:**
```
[API Request Error] ...
[API Response Error] ...
```

**Error de hook:**
```
Error in useBooks: ...
```

---

## 🔧 Comandos Útiles

### Ver logs en tiempo real:

```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npx expo start --clear
```

### Filtrar solo errores:

En la terminal, busca líneas que contengan:
- `Error`
- `error`
- `Failed`
- `Unable`

---

## 📝 Agregar Más Logs

Si necesitas más información, puedes agregar logs temporales:

```javascript
console.log("🔍 DEBUG: Variable =", variable);
console.log("🔍 DEBUG: Estado =", estado);
```

---

## ✅ Checklist de Diagnóstico

Revisa los logs para:

- [ ] ¿Se están haciendo peticiones a la API?
- [ ] ¿Las peticiones tienen éxito (200)?
- [ ] ¿Hay errores de módulos no encontrados?
- [ ] ¿Los hooks se están ejecutando?
- [ ] ¿Los datos llegan correctamente?

---

**Consejo:** Si la app "no hace nada", revisa los logs para ver si hay errores silenciosos.

