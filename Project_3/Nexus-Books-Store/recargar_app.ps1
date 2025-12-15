# Script para recargar la aplicación
Write-Host "`n=== RECARGANDO NEXUS BOOKS STORE ===" -ForegroundColor Cyan
Write-Host "Limpiando caché e iniciando servidor...`n" -ForegroundColor Yellow

cd "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"

# Limpiar caché y reiniciar
npx expo start --clear

Write-Host "`n✅ Servidor iniciado!" -ForegroundColor Green
Write-Host "`nOpciones:" -ForegroundColor Yellow
Write-Host "  - Presiona 'a' para abrir en Android" -ForegroundColor White
Write-Host "  - Presiona 'w' para abrir en navegador" -ForegroundColor White
Write-Host "  - Presiona 'r' para recargar la app" -ForegroundColor White
Write-Host "  - Escanea el QR con Expo Go en tu móvil`n" -ForegroundColor White

