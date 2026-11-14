# Problemas comunes · Common issues

### «Windows protegió tu PC» al abrir el instalador
El instalador no está firmado con un certificado de pago. Haz clic en **Más información → Ejecutar de todas formas**.
Para comprobar que es el archivo original, compara su huella en PowerShell:

```powershell
Get-FileHash .\LiveTranslator-Setup-1.0.0.exe
```

con la que aparece en las [notas de la versión](../versions/1.0.0.md).

*"Windows protected your PC": click **More info → Run anyway**, and compare the SHA-256 hash with the release notes.*

### «Windows no tiene instalado el OCR para …»
Windows necesita el paquete de lectura de texto del idioma de origen. Acepta cuando la app ofrezca instalarlo
(pide permiso de administrador y tarda 1–2 minutos). También puedes hacerlo a mano en PowerShell como administrador:

```powershell
# Cambia ja-* por ko-*, zh-CN*, fr-*, de-*, ru-*…
Get-WindowsCapability -Online | Where-Object { $_.Name -like 'Language.OCR~~~ja-*' } | Add-WindowsCapability -Online
```

*Missing OCR language: accept the in-app offer to install it, or run the command above as administrator.*

### Detecta textos pero no aparecen traducciones
- Revisa tu conexión a internet.
- Si aparece **«Google limitó las peticiones»**, el servicio gratuito está saturado; la app cambia sola a otra ruta y reintenta.
  Para uso intenso usa **DeepL** con su clave gratuita: <https://www.deepl.com/pro-api>.

### No se ve nada encima del juego
- Pon el juego en **ventana sin bordes**. La pantalla completa exclusiva no permite capturar ni dibujar encima.
- Algunos juegos con anti-trampas bloquean la captura de pantalla.

### Lee mal el texto
- Sube **Ampliar al leer** a ×2 o ×3.
- Elige el idioma de origen exacto en lugar de *Detectar automático*.
- Usa **Una región** que encierre solo el texto.

### Otra cosa
Escribe a **pancraciostudios@gmail.com** y, si puedes, adjunta el archivo
`%APPDATA%\PancracioStudios\LiveTranslator\log.txt`.
