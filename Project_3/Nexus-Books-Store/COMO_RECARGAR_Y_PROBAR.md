# 🔄 Cómo Recargar y Probar la Aplicación

## 🚀 Método Rápido

### Opción 1: Si el servidor ya está corriendo

En la terminal donde está corriendo `npx expo start`:

```
Presiona la tecla: r
```

Esto recargará la aplicación automáticamente.

---

### Opción 2: Reiniciar el servidor completo

**En PowerShell:**

```powershell
cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"
npx expo start --clear
```

O ejecuta el script:

```powershell
.\recargar_app.ps1
```

---

## 📱 Cómo Probar la Integración con API

### 1. **Pantalla Home** (`/(stack)/home`)

**Qué probar:**
- ✅ Ver libros populares cargados desde API
- ✅ Ver libros más vendidos cargados desde API
- ✅ Buscar libros (escribe en la barra de búsqueda)
- ✅ Presionar un libro para ver detalles
- ✅ Ver estados de loading mientras carga
- ✅ Ver mensajes de error si la API falla

**Qué observar:**
- Los libros deberían venir de la API simulada
- La búsqueda debería filtrar resultados
- Los estados de loading aparecen brevemente

---

### 2. **Pantalla Explorar** (`/(tabs)/explore`)

**Qué probar:**
- ✅ Ver categorías disponibles
- ✅ Presionar una categoría para filtrar libros
- ✅ Ver libros destacados cargados desde API
- ✅ Navegar a detalles de libros

**Qué observar:**
- Al presionar una categoría, se resalta en amarillo
- Los libros cambian según la categoría seleccionada
- Los estados de loading aparecen al cambiar categoría

---

### 3. **Pantalla Favoritos** (`/(tabs)/favorites`)

**Qué probar:**
- ✅ Ver lista de favoritos guardados
- ✅ Presionar el corazón para eliminar favorito
- ✅ Los favoritos se guardan localmente (persisten al recargar)

**Qué observar:**
- Los favoritos se guardan en AsyncStorage
- Al eliminar un favorito, desaparece de la lista
- Los favoritos persisten al cerrar y abrir la app

---

### 4. **Pantalla Perfil** (`/(tabs)/profile`)

**Qué probar:**
- ✅ Ver información del usuario
- ✅ Ver estadísticas (Pedidos, Favoritos, Reseñas)
- ✅ Navegar por las opciones del menú
- ✅ Presionar "Cerrar Sesión"

---

### 5. **Drawer Menu**

**Qué probar:**
- ✅ Presionar el icono de grid (arriba izquierda)
- ✅ Ver menú deslizarse desde la izquierda
- ✅ Navegar a diferentes secciones desde el menú
- ✅ Cerrar el menú tocando fuera o el botón X

---

## 🔍 Verificar que la API Funciona

### En la Consola del Navegador/Expo:

Deberías ver logs como:

```
[API Request] GET /books
[API Response] /books 200
```

Esto confirma que las peticiones se están haciendo correctamente.

---

## 🐛 Si Algo No Funciona

### Problema: No se cargan los libros

**Solución:**
1. Verifica la conexión a internet
2. Revisa la consola para errores de API
3. Verifica que la URL de la API sea correcta: `https://mock.apidog.com/m1/1088805-1078197-default`

### Problema: Error de AsyncStorage

**Solución:**
- Asegúrate de que `@react-native-async-storage/async-storage` esté instalado
- Reinicia el servidor con `--clear`

### Problema: La app no recarga

**Solución:**
1. Detén el servidor (Ctrl+C)
2. Ejecuta: `npx expo start --clear`
3. Presiona 'r' para recargar

---

## ✅ Checklist de Pruebas

- [ ] Home carga libros desde API
- [ ] Búsqueda funciona correctamente
- [ ] Explorar muestra categorías
- [ ] Filtrado por categoría funciona
- [ ] Favoritos se guardan localmente
- [ ] Eliminar favoritos funciona
- [ ] Drawer menu se abre y cierra
- [ ] Navegación entre tabs funciona
- [ ] Navegación a detalles funciona
- [ ] Estados de loading aparecen
- [ ] Estados de error aparecen si API falla

---

## 📊 Datos de Prueba

La API simulada debería devolver datos en formato:

```json
[
  {
    "id": 1,
    "title": "Título del libro",
    "author": "Autor",
    "price": 22.99,
    "image": "https://...",
    "description": "..."
  }
]
```

---

**¡Listo para probar!** 🎉

