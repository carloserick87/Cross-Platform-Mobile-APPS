# 📝 Instrucciones para Agregar Segunda Fuente

## Requisito: 2 Fuentes Personalizadas

**Fuente 1:** ✅ Roboto Condensed Black (ya implementada)  
**Fuente 2:** ⚠️ Pendiente

---

## Opción 1: Usar Google Fonts (Recomendado)

### Paso 1: Descargar Fuente

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Busca "Roboto" o "Open Sans"
3. Selecciona "Regular" o "Medium"
4. Descarga el archivo `.ttf`

### Paso 2: Agregar al Proyecto

1. Copia el archivo `.ttf` a `assets/fonts/`
2. Ejemplo: `assets/fonts/Roboto-Regular.ttf`

### Paso 3: Configurar en `app/_layout.jsx`

```javascript
const [fontsLoaded, error] = useFonts({
  "SpaceMono-Regular": require("../assets/fonts/Roboto_Condensed-Black.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"), // NUEVA
});
```

### Paso 4: Usar en Componentes

```javascript
<Text style={{ fontFamily: "Roboto-Regular" }}>
  Texto con segunda fuente
</Text>
```

---

## Opción 2: Usar expo-google-fonts (Automático)

```bash
npm install @expo-google-fonts/roboto
```

Luego en `app/_layout.jsx`:

```javascript
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const [fontsLoaded] = useFonts({
  "SpaceMono-Regular": require("../assets/fonts/Roboto_Condensed-Black.ttf"),
  Roboto_400Regular,
});
```

---

## Fuentes Recomendadas

1. **Roboto Regular** - Consistente con Roboto Condensed
2. **Open Sans** - Muy legible
3. **Lato** - Moderna y limpia
4. **Montserrat** - Elegante

---

## Verificación

Después de agregar la fuente, verifica:

1. ✅ La fuente se carga sin errores
2. ✅ Se puede usar en componentes
3. ✅ No hay errores en consola

---

**Nota:** El proyecto actualmente tiene 1 fuente. Se necesita agregar 1 más para cumplir el requisito.

