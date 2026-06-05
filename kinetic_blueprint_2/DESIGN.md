---
name: Kinetic Blueprint
colors:
  surface: '#101417'
  surface-dim: '#101417'
  surface-bright: '#363a3d'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#181c1f'
  surface-container: '#1c2023'
  surface-container-high: '#272a2e'
  surface-container-highest: '#313539'
  on-surface: '#e0e3e7'
  on-surface-variant: '#bfc7d0'
  inverse-surface: '#e0e3e7'
  inverse-on-surface: '#2d3134'
  outline: '#89929a'
  outline-variant: '#3f484f'
  surface-tint: '#8aceff'
  primary: '#8aceff'
  on-primary: '#00344e'
  primary-container: '#4298cd'
  on-primary-container: '#002d44'
  inverse-primary: '#006491'
  secondary: '#89cff8'
  on-secondary: '#00344a'
  secondary-container: '#006084'
  on-secondary-container: '#9ad9ff'
  tertiary: '#ffb95b'
  on-tertiary: '#462a00'
  tertiary-container: '#c38426'
  on-tertiary-container: '#3d2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#8aceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#89cff8'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffddb6'
  tertiary-fixed-dim: '#ffb95b'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#101417'
  on-background: '#e0e3e7'
  surface-variant: '#313539'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is defined by a "High-Tech Architectural" aesthetic. It targets a professional, tech-forward audience that values precision, depth, and a "Royal" dark-mode experience. The brand personality is authoritative yet innovative, evoking a sense of engineering excellence and digital craftsmanship.

The visual style is a hybrid of **Modern Corporate** and **Glassmorphism**, leaning heavily into structured layouts and translucent, glowing accents. It utilizes deep blacks and charcoals as the canvas, allowing the royal blue accents to serve as functional beacons for interaction and hierarchy. The result is an interface that feels like a high-end command center—precise, premium, and powerful.

## Colors

The color palette is anchored in a deep, "Royal" dark mode. The primary background is a true midnight black (#050505), with secondary surfaces using a deep charcoal (#0A0A0A) to establish depth.

- **Primary Blue:** Derived from the ACM logo, this royal blue (#4097CC) is the focal point. It is used exclusively for primary actions, critical data highlights, and active states.
- **Secondary Blue:** A lighter, more luminous variant (#76BCE4) used for subtle borders and secondary text accents.
- **Neutrals:** Greyscale values are kept cold and minimal, ranging from pure white for high-readability body text to muted slate-greys for non-essential UI elements.
- **Functional Glows:** Primary elements use a semi-transparent blue glow to create a sense of luminescence against the dark backdrop.

## Typography

This design system utilizes **Sora** exclusively to maintain a cohesive, geometric, and technical feel. The typeface’s high x-height and distinctive character shapes lend themselves to the "architectural" aesthetic.

- **Headlines:** Use heavy weights (600-700) with slight negative letter-spacing to create a compact, impactful presence.
- **Body Text:** Optimized for readability on dark backgrounds; ensure ample line-height to prevent eye fatigue.
- **Labels:** Small labels and data-points often utilize uppercase styling with increased letter-spacing to evoke a "blueprint" or technical drawing feel.

## Layout & Spacing

The layout philosophy follows a **Rigid Grid** model. All spacing is derived from an 8px base unit to ensure mathematical precision across the interface.

- **Desktop:** A 12-column grid with a maximum content width of 1440px. Gutters are fixed at 24px to maintain a breathable but structured feel.
- **Mobile:** A 4-column fluid grid with 16px side margins.
- **Rhythm:** Use the `lg` (48px) and `xl` (80px) spacing units to define distinct content blocks, reinforcing the architectural "blueprint" structure.

## Elevation & Depth

In this dark "Royal" environment, elevation is conveyed through **Tonal Layering** and **Luminous Outlines** rather than traditional shadows.

- **Level 0 (Base):** #050505 (Midnight Black).
- **Level 1 (Surfaces):** #0A0A0A (Deep Charcoal) with a subtle 1px border of #ffffff10.
- **Level 2 (Overlays/Modals):** #121212 with a primary blue outer glow (blur: 20px, opacity: 0.1) to suggest the element is floating.
- **Glassmorphism:** Use backdrop-blur (12px) on navigation bars and secondary panels to maintain context of the underlying architectural layers.

## Shapes

The shape language is "Soft" but disciplined. We avoid overly round "bubbly" shapes to maintain a professional, high-tech look.

- **Standard UI Elements:** Use a 0.25rem (4px) corner radius. This provides just enough softness to feel modern while keeping the geometry sharp.
- **Large Containers/Cards:** Use `rounded-lg` (0.5rem / 8px) for cards and main content areas.
- **Buttons:** Follow the standard UI radius. Do not use pill-shaped buttons; stick to the architectural 4px radius to ensure they feel like integrated parts of the grid.

## Components

### Buttons
Primary buttons use the Royal Blue (#4097CC) background with white text. They should feature a subtle blue drop-shadow/glow when hovered. Secondary buttons are outlined in a thin 1px blue border with transparent backgrounds.

### Input Fields
Inputs are deep charcoal (#0A0A0A) with a 1px border. The border transitions to Royal Blue on focus, accompanied by a soft inner glow.

### Cards
Cards are the primary container for the "blueprint" look. They use #0A0A0A background. For high-priority cards, use a "top-border" accent in Royal Blue.

### Chips & Tags
Technical tags use a monochromatic dark grey background with light blue text. For status-based chips (e.g., "Active"), use the Royal Blue as a small dot indicator.

### Lists
Lists are separated by thin, low-opacity lines (#ffffff08). Selection states are indicated by a vertical Royal Blue bar on the left edge of the list item.

### High-Tech Accents
Incorporate "Scanlines" or very subtle grid-pattern overlays in the background of primary hero sections to reinforce the Kinetic Blueprint narrative.