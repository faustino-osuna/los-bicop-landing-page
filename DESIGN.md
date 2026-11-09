---
name: Los Bicop
description: Sistema visual oscuro de alto contraste para la landing de Los Bicop, con acentos eléctricos azules y violetas.
colors:
  bicop-night: "#080910"
  bicop-stage: "#15172b"
  bicop-electric: "#3436ff"
  bicop-violet: "#8178ff"
  bicop-ice: "#f4f5ff"
  bicop-chrome: "#aeb3cc"
  bicop-magenta: "#e53278"
typography:
  display:
    fontFamily: '"Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(100px, 15.8vw, 224px)"
    fontWeight: 900
    lineHeight: 0.7
    letterSpacing: "-0.105em"
  headline:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(34px, 5vw, 64px)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.075em"
  body:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
rounded:
  base: "0.625rem"
  square: "0"
  circle: "50%"
spacing:
  header-height: "88px"
  header-height-mobile: "76px"
  hero-grid: "70px"
  section-inline: "6%"
---

## Overview

La landing combina fondos casi negros y superficies azul-noche con tipografía clara, una fotografía de grupo de gran escala y acentos eléctricos azules y violetas. El sistema observado está implementado principalmente con CSS local en los componentes; los valores de la paleta también están declarados en `src/styles/starwind.css`. No se carga una fuente web externa.

Los valores documentados aquí describen la implementación actual, no una propuesta de rediseño. `bicop-magenta` está definido como token, pero no se aprecia en los elementos de la página.

## Colors

### Primary

- **Bicop Electric** (`#3436ff`): acento azul eléctrico; resplandor ambiental y estado hover del control de reproducción. Está asignado como color primario del tema, pero no funciona como fondo de un CTA principal en la página.
- **Bicop Violet** (`#8178ff`): acento secundario recurrente; punto del kicker, puntuación del wordmark, foco visible, barra de desplazamiento y bordes del reproductor.

### Secondary

- **Bicop Magenta** (`#e53278`): token de tema declarado, sin uso visible en la landing actual.

### Neutral

- **Bicop Night** (`#080910`): fondo base y fondo de los controles y del diálogo.
- **Bicop Stage** (`#15172b`): superficie secundaria, fondo de la franja de estilos y del cierre del diálogo.
- **Bicop Ice** (`#f4f5ff`): texto principal y elementos de alto contraste.
- **Bicop Chrome** (`#aeb3cc`): navegación, etiquetas y texto secundario.
- **Bordes derivados de Chrome**: `color-mix(in srgb, #aeb3cc 24%, transparent)` en el token global; se usan otros porcentajes de mezcla según el componente.

Los bordes y velos también recurren a blanco o al color de fondo con transparencia: por ejemplo, blanco al 12% en la cabecera, al 22% en la franja, y `rgb(8 9 16 / 8%)`–`rgb(8 9 16 / 42%)` en velos de imagen. Estos valores son capas contextuales, no colores opacos adicionales de la paleta.

## Typography

**Display Font:** `"Arial Black", "Helvetica Neue", sans-serif` (wordmark del hero).
**Body Font:** `ui-sans-serif, system-ui, sans-serif` (pila sans-serif predeterminada de Tailwind).

**Character:** El wordmark usa una display pesada, comprimida y muy grande. El resto de la interfaz utiliza una sans-serif de sistema, con jerarquía marcada por tamaño, peso y espaciado entre letras; no hay una familia tipográfica descargada.

### Hierarchy

- **Display** (900, `clamp(100px, 15.8vw, 224px)`, line-height `0.7`, tracking `-0.105em`): wordmark “LOS BICOP”; escala y tracking se ajustan en tablet y móvil.
- **Headline** (900, `clamp(34px, 5vw, 64px)`, line-height `0.95`, tracking `-0.075em`): título de la sección del videoclip.
- **Brand** (800, 13px; 11px en móvil): nombre junto al logotipo de la cabecera.
- **Body / navigation**: sans-serif de sistema. La navegación de escritorio usa 12px; los enlaces del menú móvil usan 15px. No hay un bloque de texto de cuerpo largo en la página.
- **Label** (700, normalmente 11px, mayúsculas y tracking amplio): kicker, enlace de video y estilos de baile. El marquee usa `0.21em`; otros rótulos usan valores entre `0.08em` y `0.16em`.

## Layout

La cabecera fija mide 88px en escritorio y 76px en móvil. Su contenido usa aproximadamente 6% de margen horizontal; en escritorio, la navegación queda centrada entre marca y enlace social. A 760px o menos, los enlaces pasan a una hoja lateral.

El hero ocupa al menos `max(760px, 100svh)` (790px en móvil y 920px desde 1440px). La fotografía se centra y ocupa hasta 760px de ancho; el wordmark se superpone cerca del borde inferior. Una cuadrícula de 70px y halos radiales completan el fondo.

El contenido del videoclip usa padding vertical fluido (`clamp(68px, 8vw, 96px)` arriba y `clamp(76px, 8vw, 102px)` abajo), márgenes laterales de 6% y un reproductor de hasta 900px con proporción 16:9. La franja de estilos es horizontal, desbordada y repetida para el desplazamiento continuo; sin movimiento reducido muestra una lista estática que se ajusta en varias líneas.

Los cambios responsivos observados usan breakpoints en 1440px, 950px, 760px y 640px. Los componentes afinan sus dimensiones dentro de esos cortes mediante `clamp()`, `min()` y unidades de viewport.

## Elevation & Depth

La profundidad combina capas tonales, velos sobre fotografía, desenfoque y resplandores de color; no depende de tarjetas elevadas repetidas.

### Shadow Vocabulary

- **Wordmark** (`0 12px 52px rgb(0 0 0 / 32%)`): sombra oscura para separar el título superpuesto a la fotografía.
- **Marco del video** (`0 0 65px color-mix(in srgb, #3436ff 15%, transparent)`): halo azul de baja intensidad.
- **Diálogo de video** (`0 24px 100px rgb(0 0 0 / 65%)` y `0 0 55px color-mix(in srgb, #3436ff 22%, transparent)`): sombra oscura y halo al abrir el reproductor.
- **Punto del kicker**: resplandor violeta `0 0 14px #8178ff`.

La cabecera fija usa fondo oscuro translúcido, `backdrop-filter: blur(14px) saturate(130%)`; el hero añade un halo azul con blur de 190px y opacidad 0.2.

## Shapes

Predomina la geometría rectangular y de esquinas cuadradas en hero, marco de video y diálogo. El radio global del tema es `0.625rem`, pero los componentes de la landing suelen especificar su propia forma: el enlace social tiene 2px; el avatar, botón móvil, botón de reproducción y control de cierre son circulares. La fotografía del hero y los overlays usan máscaras con degradado, no una tarjeta redondeada.

Los bordes son finos, de bajo contraste y a menudo translúcidos. El marco del reproductor destaca con borde violeta mezclado al 42%; el diálogo usa 60%. El botón de reproducción tiene un borde blanco al 75% y fondo oscuro semitransparente.

## Components

### Navigation

La cabecera es fija y translúcida, con una línea divisoria blanca al 12%. Los enlaces de escritorio son chrome y cambian a ice al pasar el puntero. El enlace a Instagram es un contorno rectangular de 2px con flecha violeta. En móvil, un botón circular abre una hoja lateral oscura con enlaces apilados y divisores discretos.

### Hero

La fotografía de grupo es el foco visual, centrada, enmascarada con degradados laterales y verticales. El wordmark blanco se superpone abajo; el punto final usa violeta. El fondo integra una cuadrícula tenue, un halo azul y un radial violeta.

### Marquee

La franja tiene bordes superior e inferior sutiles, base mezclada entre Stage y Night, y nombres de estilos en chrome, uppercase, con tracking amplio. Los separadores son violetas. Se anima en bucle de 48 segundos; con `prefers-reduced-motion: reduce` se oculta la pista animada y se presenta la lista estática.

### Video player

El poster ocupa un marco 16:9 con borde violeta y halo azul. Un velo oscuro mejora la separación del botón circular de reproducción. En hover, el poster escala ligeramente y el botón cambia a electric. Al activarse, el contenido aparece en un diálogo centrado con esquinas cuadradas; el iframe solo se inserta mientras está abierto.

### Motion and focus

Los enlaces usan transiciones de color de 180ms; el poster escala en 350ms. El hero usa GSAP para entrada y parallax de scroll; los elementos de la sección de video aparecen al entrar en viewport. Los diálogos tienen entrada de 220ms y salida de 160ms. Los controles y enlaces relevantes definen un foco visible violeta. Las animaciones decorativas respetan `prefers-reduced-motion`.

## Do's and Don'ts

### Do:

- **Do** conservar la paleta Night/Stage con texto Ice y Chrome y los acentos Electric/Violet documentados.
- **Do** mantener el tratamiento tipográfico de display grande solo para el wordmark; el resto de la interfaz usa la sans-serif de sistema.
- **Do** respetar el comportamiento responsive y las alternativas de movimiento reducido que ya implementa cada componente.
- **Do** conservar los bordes finos, las máscaras de fotografía y los resplandores localizados descritos arriba al representar componentes existentes.

### Don't:

- **Don't** tratar el token Magenta como acento visible actual: está declarado, pero no se utiliza en la landing.
- **Don't** asumir que toda navegación visible tiene un destino activo; `#crew`, `#podcast`, `#spotify` y `#nosotros` no corresponden a secciones renderizadas actualmente.
- **Don't** interpretar el radio global de 0.625rem como regla para todos los componentes; la implementación mezcla esquinas cuadradas, radios pequeños y siluetas circulares.
