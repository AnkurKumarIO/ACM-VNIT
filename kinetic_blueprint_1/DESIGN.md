---
name: Kinetic Blueprint
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e1bfb9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a88a84'
  outline-variant: '#59413d'
  surface-tint: '#ffb4a6'
  primary: '#ffb4a6'
  on-primary: '#660700'
  primary-container: '#ff6b52'
  on-primary-container: '#6a0700'
  inverse-primary: '#ae311e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#55dbca'
  on-tertiary: '#003732'
  tertiary-container: '#00ad9e'
  on-tertiary-container: '#003934'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a6'
  on-primary-fixed: '#3f0300'
  on-primary-fixed-variant: '#8c1808'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#75f7e6'
  tertiary-fixed-dim: '#55dbca'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005049'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '0.9'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  nav-link:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-edge: 40px
  section-gap: 120px
---

## Brand & Style
The design system embodies a "High-Tech Industrial" aesthetic, drawing inspiration from architectural wireframes, terminal interfaces, and engineering documentation. It is designed for a technical audience that values precision, raw performance, and a "builder" culture.

The visual narrative is built on **Modern Brutalism** mixed with **Technical Minimalism**. It utilizes deep blacks, high-contrast typography, and thin architectural lines (0.5pt to 1pt) to create a sense of structural depth. The emotional response should be one of "sophisticated utility"—where the interface feels like a powerful tool rather than just a website.

## Colors
The palette is rooted in a pure "Ink Black" foundation to ensure maximum contrast and energy efficiency on OLED displays. 

- **Primary (Signal Orange):** Used exclusively for calls to action, highlights, and critical emphasis. It represents energy and the human element within the machine.
- **Secondary (Paper White):** Used for primary content and headlines to ensure high legibility against the dark background.
- **Neutral (Carbon):** A series of dark greys used for borders, wireframe illustrations, and subtle UI divisions.
- **Surface:** Backgrounds should remain strictly `#0A0A0A` to allow the wireframe elements to recede into the distance.

## Typography
The typography strategy creates a tension between high-tech "Sora" (geometric, bold, and modern) and the functional "JetBrains Mono" (technical, monospaced, and precise).

- **Headlines:** Use Sora with tight tracking and leading. This creates a "block" of text that feels architectural and heavy.
- **Body:** Use JetBrains Mono for all descriptive text. This reinforces the technical nature of the brand and ensures a rhythmic, typewriter-like reading experience.
- **Navigation/Labels:** Use Inter in uppercase for a clean, neutral, and highly legible utility layer.

## Layout & Spacing
The layout follows a **Fixed 12-Column Grid** with generous outer margins. The philosophy is "Information Density within Vast Space." Content is grouped tightly, but these groups are separated by significant vertical "dead air" to mimic engineering schematics.

- **Grid:** 12 columns for desktop (max-width 1440px), 4 columns for mobile.
- **Rhythm:** All spacing must be multiples of 8px. 
- **Wireframes:** Background decorative elements (architectural wireframes) should ignore the grid, spanning the full width to create a sense of scale, while functional content remains strictly snapped to the grid.

## Elevation & Depth
In this design system, depth is conveyed through **Transparency and Outlines** rather than shadows. 

- **Tonal Layers:** Objects closer to the user do not cast shadows; instead, they have a slightly lighter background (dark grey) or a distinct 1px white border with 20% opacity.
- **Glassmorphism:** Navigation bars and floating menus should use a heavy backdrop blur (20px+) with a semi-transparent black fill to maintain legibility over the background wireframes.
- **Wireframe Depth:** Decorative background lines should use varying opacities (5% to 15%) to create a pseudo-3D parallax effect when scrolling.

## Shapes
While the aesthetic is "industrial," the shapes use **Full Radii (Pills)** for interactive elements to provide a clear contrast against the sharp, rectangular nature of the background wireframes.

- **Interactive Elements:** Buttons and tags use a pill shape (rounded-full) to signify "touchability."
- **Containers:** Informational cards and sections should remain sharp-edged (0px) or slightly softened (4px) to maintain the structural, blueprint-like feel.

## Components
- **Primary Button:** Pill-shaped, background color `primary_color_hex`, text color `neutral_color_hex`. Includes a 45-degree arrow icon for external/action signals.
- **Secondary Button:** Outlined pill. 1px border using `secondary_color_hex` at 40% opacity. Text in `secondary_color_hex`.
- **Navigation Bar:** A floating pill-shaped container with a subtle 1px border and heavy backdrop blur. Links are uppercase `nav-link`.
- **Input Fields:** Bottom-border only (1px white, 30% opacity) with monospaced labels. Focus state shifts the border to the `primary_color_hex`.
- **Technical Chips:** Small, monospaced text within a 1px bordered box (square corners) to denote categories or tags.
- **Wireframe Decor:** Use SVG-based 3D architectural renders as background tiles to anchor the page content.