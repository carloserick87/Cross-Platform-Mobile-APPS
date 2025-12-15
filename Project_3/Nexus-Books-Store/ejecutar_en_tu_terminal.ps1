# Ejecuta estos comandos en TU terminal PowerShell

# 1. Recargar variables de entorno
$env:ANDROID_HOME = [System.Environment]::GetEnvironmentVariable("ANDROID_HOME", "User")
$env:ANDROID_SDK_ROOT = [System.Environment]::GetEnvironmentVariable("ANDROID_SDK_ROOT", "User")
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "User")

Write-Host "✓ Variables recargadas" -ForegroundColor Green

# 2. Verificar ADB funciona
Write-Host "`nVerificando ADB..." -ForegroundColor Yellow
adb devices

# 3. Verificar procesos Node/Expo
Write-Host "`nProcesos Node corriendo:" -ForegroundColor Cyan
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Select-Object ProcessName, Id, CPU

# 4. Si el proyecto no está corriendo, ejecutarlo
Write-Host "`n¿Quieres ejecutar el proyecto? (S/N)" -ForegroundColor Yellow
$respuesta = Read-Host
if ($respuesta -eq "S" -or $respuesta -eq "s") {
    Write-Host "Ejecutando proyecto..." -ForegroundColor Green
    npm run android
}

