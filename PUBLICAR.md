# Cómo publicar un programa o una versión nueva

Guía interna para mantener el catálogo ordenado.

## Versión nueva de un programa existente

1. Genera el instalador (por ejemplo `LiveTranslator-Setup-1.1.0.exe`).
2. Calcula su huella: `Get-FileHash .\LiveTranslator-Setup-1.1.0.exe` (PowerShell).
3. Copia el instalador y un `SHA256SUMS.txt` con la huella a `programs/<programa>/installers/<versión>/`.
   Al subirlo, la automatización `.github/workflows/publicar-versiones.yml` crea el **Release**
   `<programa>-v<versión>` con esos archivos y las notas de `versions/<versión>.md` (escríbelas antes).
4. En `programs/<programa>/`:
   - agrega `versions/<versión>.md` con las novedades y la huella,
   - agrega la entrada al inicio de `CHANGELOG.md`,
   - actualiza la tabla **Versiones** y el botón de descarga de `index.html`.
5. En `catalog.json` cambia `version`, `released`, `size` y `download`.
6. Actualiza la tabla del `README.md` principal.

## Programa nuevo

1. Copia la carpeta `programs/live-translator/` como plantilla en `programs/<programa-nuevo>/`
   y reemplaza textos, capturas (`img/`) y documentación.
2. Agrega su objeto en `catalog.json` (el catálogo lo muestra solo).
3. Agrega su fila al `README.md` principal y su enlace en `PRIVACY.md`.
4. Publica el instalador como en «Versión nueva».

## Reglas de seguridad y privacidad

- Nada de datos personales: ni nombres, correos personales, rutas de tu PC (`C:\Users\…`, `D:\…`) ni capturas de tu escritorio real.
- Capturas: usa escenas de ejemplo.
- Commits con la identidad `Pancracio Studios <pancraciostudios@gmail.com>`.
- El código fuente se queda en su repositorio privado; aquí solo van instaladores y documentación.
