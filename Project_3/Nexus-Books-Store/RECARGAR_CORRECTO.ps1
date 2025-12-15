# Script para recargar correctamente
Write-Host "`n🚀 Iniciando servidor Expo..." -ForegroundColor Cyan

Set-Location "C:\Cursor\Croos-Platform-Mobile-Apss\Cross-Platform-Mobile-APPS\Project_3\Nexus-Books-Store"

# Limpiar caché e iniciar
npx expo start --clear

Write-Host "`n✅ Servidor iniciado!" -ForegroundColor Green
Write-Host "`n📱 Presiona 'r' para recargar la app" -ForegroundColor Yellow
Write-Host "📱 Presiona 'a' para abrir en Android" -ForegroundColor Yellow
Write-Host "📱 Presiona 'w' para abrir en navegador`n" -ForegroundColor Yellow

