# Solución de Problemas de Dependencias

## ⚠️ Problema: Conflicto de Versiones de React

### Error Encontrado

```
npm ERR! ERESOLVE could not resolve
npm ERR! While resolving: react-dom@19.2.1
npm ERR! Found: react@19.1.0
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^19.2.1" from react-dom@19.2.1
```

### Causa

Hay un conflicto entre las versiones de React:
- El proyecto usa `react@19.1.0`
- Algunas dependencias requieren `react-dom@19.2.1` que necesita `react@^19.2.1`

### Solución Aplicada

```bash
npm install --legacy-peer-deps
```

Este flag le dice a npm que ignore los conflictos de peer dependencies y continúe con la instalación.

---

## ✅ Instalación Exitosa

Las dependencias se han instalado correctamente:
- ✅ 759 paquetes instalados
- ✅ 0 vulnerabilidades encontradas
- ✅ Proyecto listo para ejecutar

---

## 🚀 Próximos Pasos

Ahora puedes ejecutar la aplicación:

```bash
npm start
```

O en plataformas específicas:

```bash
npm run web      # Para navegador web
npm run android  # Para Android
npm run ios      # Para iOS (solo macOS)
```

---

## 📝 Nota sobre Warnings

Los siguientes warnings son normales y no afectan la funcionalidad:

```
npm WARN deprecated inflight@1.0.6
npm WARN deprecated rimraf@3.0.2
npm WARN deprecated glob@7.2.3
```

Estos son paquetes deprecados dentro de las dependencias transitivas, pero no afectan el funcionamiento de la aplicación.

---

## 🔧 Alternativas de Instalación

Si `--legacy-peer-deps` no funciona, puedes probar:

### Opción 1: Usar --force
```bash
npm install --force
```

### Opción 2: Actualizar React (si es posible)
```bash
npm install react@latest react-dom@latest --legacy-peer-deps
```

### Opción 3: Usar yarn (alternativa)
```bash
# Instalar yarn primero
npm install -g yarn

# Luego instalar dependencias
yarn install
```

---

## ✅ Verificación

Para verificar que todo está correcto:

```bash
# Verificar que node_modules existe
ls node_modules  # o dir node_modules en Windows

# Verificar versión de React instalada
npm list react

# Verificar que Expo está instalado
npx expo --version
```

---

**Última actualización:** Enero 2025


