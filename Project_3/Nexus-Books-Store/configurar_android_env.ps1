# Script para configurar variables de entorno Android
# Ejecutar como Administrador

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Configuración de Variables Android" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Ruta del Android SDK
$androidSdkPath = "$env:LOCALAPPDATA\Android\Sdk"

# Verificar que existe
if (-not (Test-Path $androidSdkPath)) {
    Write-Host "ERROR: Android SDK no encontrado en: $androidSdkPath" -ForegroundColor Red
    Write-Host "Por favor, instala Android Studio primero." -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Android SDK encontrado en: $androidSdkPath" -ForegroundColor Green
Write-Host ""

# Configurar ANDROID_HOME
Write-Host "Configurando ANDROID_HOME..." -ForegroundColor Yellow
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", $androidSdkPath, "User")
Write-Host "✓ ANDROID_HOME configurado" -ForegroundColor Green

# Configurar ANDROID_SDK_ROOT
Write-Host "Configurando ANDROID_SDK_ROOT..." -ForegroundColor Yellow
[System.Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", $androidSdkPath, "User")
Write-Host "✓ ANDROID_SDK_ROOT configurado" -ForegroundColor Green

# Obtener PATH actual
$currentPath = [System.Environment]::GetEnvironmentVariable("Path", "User")

# Rutas a agregar
$pathsToAdd = @(
    "$androidSdkPath\platform-tools",
    "$androidSdkPath\emulator",
    "$androidSdkPath\tools",
    "$androidSdkPath\tools\bin"
)

# Agregar rutas si no existen
Write-Host "Configurando PATH..." -ForegroundColor Yellow
$newPath = $currentPath

foreach ($path in $pathsToAdd) {
    if ($newPath -notlike "*$path*") {
        $newPath = "$path;$newPath"
        Write-Host "  ✓ Agregado: $path" -ForegroundColor Green
    } else {
        Write-Host "  ⊙ Ya existe: $path" -ForegroundColor Gray
    }
}

# Actualizar PATH
[System.Environment]::SetEnvironmentVariable("Path", $newPath, "User")
Write-Host "✓ PATH actualizado" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Configuración Completada!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANTE:" -ForegroundColor Yellow
Write-Host "1. Cierra y vuelve a abrir esta terminal" -ForegroundColor White
Write-Host "2. O ejecuta: refreshenv" -ForegroundColor White
Write-Host "3. Verifica con: echo `$env:ANDROID_HOME" -ForegroundColor White
Write-Host "4. Verifica ADB: adb --version" -ForegroundColor White
Write-Host ""

