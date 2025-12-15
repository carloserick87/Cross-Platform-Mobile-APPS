# Script rápido para recargar la app
Write-Host "`n🚀 RECARGANDO NEXUS BOOKS STORE..." -ForegroundColor Cyan
Write-Host "Limpiando caché e iniciando servidor...`n" -ForegroundColor Yellow

Set-Location "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"

# Iniciar servidor con caché limpio
npx expo start --clear

Write-Host "`n✅ Servidor iniciado!" -ForegroundColor Green
Write-Host "`n📱 OPCIONES:" -ForegroundColor Yellow
Write-Host "  • Presiona 'a' → Abrir en Android" -ForegroundColor White
Write-Host "  • Presiona 'w' → Abrir en navegador" -ForegroundColor White
Write-Host "  • Presiona 'r' → Recargar app" -ForegroundColor White
Write-Host "  • Escanea QR → Con Expo Go en móvil`n" -ForegroundColor White

