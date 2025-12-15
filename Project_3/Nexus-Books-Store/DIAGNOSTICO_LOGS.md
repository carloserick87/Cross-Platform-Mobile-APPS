# 🔍 Guía de Diagnóstico con Logs

## 📋 Logs Agregados

He agregado logs detallados en los siguientes lugares:

### 1. **Servicio de API** (`services/api.js`)
- ✅ Logs de inicio de petición
- ✅ Logs de URL completa
- ✅ Logs de respuesta exitosa
- ✅ Logs detallados de errores

### 2. **Hook useBooks** (`hooks/useBooks.js`)
- ✅ Logs de inicio de carga
- ✅ Logs de datos recibidos
- ✅ Logs de libros establecidos
- ✅ Logs de errores detallados
- ✅ Logs de finalización

### 3. **Pantalla Home** (`app/(stack)/home/index.jsx`)
- ✅ Logs de renderizado
- ✅ Logs de estado de loading
- ✅ Logs de errores
- ✅ Logs de cantidad de libros
- ✅ Logs de datos completos

---

## 🔍 Cómo Ver los Logs

### Opción 1: Terminal de Expo (Recomendado)

1. Ejecuta:
```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npx expo start --clear
```

2. Abre la app (presiona `a` para Android o `w` para web)

3. Los logs aparecerán en la terminal con estos prefijos:
   - `🔍` - Información de debug
   - `✅` - Operación exitosa
   - `❌` - Error
   - `📚` - Petición a API
   - `🏠` - Pantalla Home
   - `🏁` - Finalización

---

### Opción 2: Navegador Web (F12)

1. Abre la app en navegador (`w` en la terminal)
2. Presiona `F12` → Pestaña **Console**
3. Verás todos los logs con colores

---

## 📊 Qué Buscar en los Logs

### ✅ Flujo Normal (Todo Funciona):

```
🔍 [useBooks] Iniciando carga de libros...
📚 [API] getBooks - Iniciando petición...
[API Request] GET /books
[API Response] /books 200
✅ [API] getBooks - Respuesta recibida: 200
✅ [API] getBooks - Datos: [...]
✅ [useBooks] Datos recibidos: X libros
✅ [useBooks] Libros establecidos: X
🏁 [useBooks] Carga completada
🏠 [HomeScreen] Renderizando...
🏠 [HomeScreen] Total libros: X
```

---

### ❌ Problema: API No Responde

```
📚 [API] getBooks - Iniciando petición...
[API Request] GET /books
❌ [API Response Error] timeout / Network Error
❌ [API] getBooks - Error completo: ...
❌ [useBooks] Error: Network Error
```

**Solución:** Verifica conexión a internet y URL de API

---

### ❌ Problema: Datos Vacíos

```
✅ [API] getBooks - Respuesta recibida: 200
✅ [API] getBooks - Datos: []
✅ [useBooks] Datos recibidos: 0 libros
🏠 [HomeScreen] Total libros: 0
```

**Solución:** La API responde pero no hay datos. Verifica la API.

---

### ❌ Problema: Error de Módulo

```
Unable to resolve module ../../../hooks/useBooks
```

**Solución:** Ruta incorrecta. Ya corregido en el código.

---

## 🎯 Checklist de Diagnóstico

Revisa los logs y verifica:

- [ ] ¿Aparece `🔍 [useBooks] Iniciando carga...`?
- [ ] ¿Aparece `📚 [API] getBooks - Iniciando petición...`?
- [ ] ¿Aparece `[API Request] GET /books`?
- [ ] ¿Aparece `✅ [API Response] /books 200`?
- [ ] ¿Aparece `✅ [useBooks] Datos recibidos: X libros`?
- [ ] ¿Aparece `🏠 [HomeScreen] Total libros: X`?

Si alguna de estas NO aparece, ahí está el problema.

---

## 🐛 Errores Comunes y Soluciones

### Error: "Network Error"
- **Causa:** Sin conexión a internet o API caída
- **Solución:** Verifica conexión y URL de API

### Error: "timeout"
- **Causa:** API tarda más de 10 segundos
- **Solución:** Aumenta timeout en `services/api.js`

### Error: "Unable to resolve module"
- **Causa:** Ruta incorrecta de import
- **Solución:** Verifica rutas de imports

### No aparecen logs
- **Causa:** App no se está ejecutando o Metro no está corriendo
- **Solución:** Reinicia con `npx expo start --clear`

---

## 📝 Próximos Pasos

1. **Ejecuta la app** y observa los logs
2. **Copia los logs** que aparezcan (especialmente errores)
3. **Comparte los logs** para diagnóstico más específico

---

**Con estos logs podrás ver exactamente qué está pasando en cada paso del proceso.**

