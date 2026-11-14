# Guía de uso · Live Translator

## 1. Instalar

1. Descarga **`LiveTranslator-Setup-1.0.0.exe`** desde la [página de versiones](https://github.com/pancracio-studios/pancraciostudios-projects/releases).
2. Ábrelo. Si Windows muestra **«Windows protegió tu PC»**, haz clic en **Más información → Ejecutar de todas formas**
   (el instalador no tiene un certificado de pago; es normal en programas pequeños).
3. Elige el idioma del instalador, acepta los términos y, si quieres, marca **Acceso directo en el escritorio**.
4. Al terminar, deja marcada la casilla para abrir Live Translator.

No necesita permisos de administrador: se instala solo para tu usuario en
`%LOCALAPPDATA%\Programs\Live Translator` y aparece en el menú Inicio, dentro de **Pancracio Studios**.

## 2. Primeros pasos

1. **Qué traducir**
   - *Pantalla completa*: todo un monitor.
   - *Una ventana*: elige la ventana del juego o programa de la lista (↻ para actualizarla).
   - *Una región*: presiona **Elegir región en pantalla…** y arrastra un rectángulo, por ejemplo sobre la caja de diálogos.
2. **Idiomas**: de qué idioma a cuál. *Detectar automático* funciona bien con idiomas de alfabeto latino
   (inglés, francés, alemán…). Para japonés, chino o coreano elige el idioma exacto.
3. **Dónde ver la traducción**
   - *Vista espejo*: abre una ventana en la pantalla que elijas con la imagen del original y el texto traducido encima.
   - *Overlay*: dibuja la traducción directamente sobre el original.
   - Puedes usar ambas a la vez.
4. Presiona **Iniciar**.

## 3. Opciones

| Opción | Para qué sirve |
|---|---|
| **Estilo** | *Cubrir el texto original* pinta encima con el color de fondo: se ve como si el juego viniera traducido. *Panel oscuro discreto* muestra la traducción en un recuadro. |
| **Opacidad** | Qué tan transparente es la traducción. |
| **Ver el original al pasar el mouse** | Al poner el cursor sobre una traducción, se oculta para leer el texto original. |
| **Traductor** | *Automático gratis* (recomendado) usa Google y cambia solo a otra ruta si una se satura. *DeepL* da mejor calidad con una clave gratuita. *Argos* traduce sin internet (descarga ~2 GB). |
| **Lector (OCR)** | *OCR de Windows* es rápido y viene con Windows. *RapidOCR* es una alternativa para chino e inglés. |
| **Ampliar al leer** | Agranda la imagen antes de leerla. Usa ×2 o ×3 con letras pequeñas o pixel art. |
| **Captura** | *Estándar* funciona con casi todo. *DirectX* puede ir más fluida en algunos juegos. |
| **Revisar cambios cada** | Cada cuánto se revisa si cambió el texto. |
| **Esperar texto quieto** | Espera a que un diálogo termine de escribirse letra por letra antes de traducirlo. |
| **Fluidez de la vista espejo** | Cuadros por segundo de la vista espejo. |
| **Ocultar traducciones viejas** | Si el texto original cambia, su traducción desaparece al instante. |
| **Borrar traducciones guardadas** | Vacía la caché (las traducciones se guardan para reutilizarlas al instante). |

## 4. Atajos de teclado

Funcionan aunque estés dentro del juego.

| Atajo | Acción |
|---|---|
| `Ctrl+Alt+T` | Mostrar u ocultar traducciones |
| `Ctrl+Alt+P` | Pausar o reanudar |
| `Ctrl+Alt+R` | Volver a leer la pantalla |
| `Ctrl+Alt+O` | Activar o quitar el overlay |

En la vista espejo: `F11` o doble clic = pantalla completa · `H` = ver original · `Espacio` = pausa.

## 5. Consejos para juegos

- Usa el juego en **ventana sin bordes** (*borderless*). La pantalla completa exclusiva no deja capturar ni dibujar encima.
- Traduce solo la **región de la caja de diálogos**: es más rápido y no traduce el HUD.
- Si el texto aparece letra por letra y se traduce a medias, sube **Esperar texto quieto**.

## 6. Dónde guarda sus datos

Ajustes, caché de traducciones y registro: `%APPDATA%\PancracioStudios\LiveTranslator`.
Si algo falla, el archivo `log.txt` de esa carpeta ayuda a encontrar la causa.

## 7. Desinstalar

**Configuración → Aplicaciones → Live Translator → Desinstalar.** Te preguntará si también quieres borrar tus ajustes.
