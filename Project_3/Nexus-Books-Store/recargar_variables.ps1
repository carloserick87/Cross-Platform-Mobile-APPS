# Script para recargar variables de entorno Android en la terminal actual
# Ejecutar: . .\recargar_variables.ps1

Write-Host "Recargando variables de entorno Android..." -ForegroundColor Yellow

# Recargar variables desde el registro
$env:ANDROID_HOME = [System.Environment]::GetEnvironmentVariable("ANDROID_HOME", "User")
$env:ANDROID_SDK_ROOT = [System.Environment]::GetEnvironmentVariable("ANDROID_SDK_ROOT", "User")
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "User")

Write-Host "✓ Variables recargadas" -ForegroundColor Green
Write-Host ""
Write-Host "Verificando ADB..." -ForegroundColor Yellow

# Verificar ADB
try {
    $adbVersion = adb --version 2>&1
    Write-Host "✓ ADB funciona correctamente" -ForegroundColor Green
    Write-Host ""
    Write-Host "Dispositivos conectados:" -ForegroundColor Cyan
    adb devices
} catch {
    Write-Host "⚠ ADB no encontrado. Usando ruta completa..." -ForegroundColor Yellow
    & "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" devices
}

Write-Host ""
Write-Host "Ahora puedes usar comandos como:" -ForegroundColor Cyan
Write-Host "  adb devices" -ForegroundColor White
Write-Host "  adb --version" -ForegroundColor White
Write-Host "  npm run android" -ForegroundColor White

