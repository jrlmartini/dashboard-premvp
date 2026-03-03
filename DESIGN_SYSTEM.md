# Conatus Environmental Technologies — Design System

> **Version:** 1.0.0
> **Last updated:** 2026-03-03
> **Status:** Active — Single Source of Truth
> **Maintainer:** Conatus Product & Design
> **Stack:** React + TypeScript + Tailwind CSS + shadcn/ui

---

## 1. Design Principles

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **Clarity over decoration** | Every element serves a purpose. No ornamental gradients, no glow effects, no AI-aesthetic clichés. |
| 2 | **Data density, not data noise** | Dashboards must present high-information density while remaining scannable in under 3 seconds. |
| 3 | **Dark-first, light-aware** | The primary interface is dark mode. Light mode exists for specific contexts (print, kiosk daylight). |
| 4 | **Flat and structural** | Depth is communicated through spacing and opacity — not shadows or gradients. Borders are subtle or absent. |
| 5 | **Restrained color** | Accent colors are used surgically for status, alerts, and data differentiation — never for decoration. |
| 6 | **Board-grade polish** | Every screen must feel like it belongs in a boardroom. Precision, confidence, zero clutter. |

---

## 2. Color System

### 2.1 Core Palette (Neutrals)

These neutrals form the backbone of the interface. They are derived from a blue-tinted gray scale, giving the dark theme a sophisticated, cool tone.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--neutral-950` | `#03131e` | 3, 19, 30 | Deepest background, page-level bg in dark mode |
| `--neutral-900` | `#214059` | 33, 64, 89 | Primary card/surface background (dark mode) — `bg-dark-main` |
| `--neutral-800` | `#3b5e73` | 59, 94, 115 | Elevated surfaces, sidebar bg, hover states |
| `--neutral-700` | `#8f9da7` | 143, 157, 167 | Disabled text, placeholder text, subtle borders |
| `--neutral-600` | `#c1cdd9` | 193, 205, 217 | Secondary text (dark mode), muted labels |
| `--neutral-200` | `#f2f2f2` | 242, 242, 242 | Primary background (light mode) — `bg-light-main` |

### 2.2 Accent Palette (Semantic & Data)

Accents are **functional only**. They indicate status, differentiate data series, or highlight interactive elements.

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--accent-teal` | `#34d399` | 52, 211, 153 | **Primary accent.** Positive status, success, primary CTA, active states |
| `--accent-amber` | `#FBBF24` | 251, 191, 36 | Warning, attention, secondary highlight, in-progress |
| `--accent-pink` | `#fb7185` | 251, 113, 133 | Error, critical alert, negative delta, destructive action |

### 2.3 Data Visualization Palette

Used **exclusively** in charts, graphs, and data series differentiation. Never used for UI chrome.

| Token | Hex | Usage |
|-------|-----|-------|
| `--data-blue` | `#2563c1` | Series 1 / Primary metric |
| `--data-cyan` | `#36b5ce` | Series 2 |
| `--data-teal` | `#34d399` | Series 3 / Positive |
| `--data-green` | `#4abe04` | Series 4 |
| `--data-purple` | `#8b41b2` | Series 5 |
| `--data-magenta` | `#be13cc` | Series 6 |
| `--data-lavender` | `#C7c3fe` | Series 7 / Muted overlay |

> **Rule:** In any single chart, use a maximum of 5 colors. If more are needed, use opacity variants (80%, 60%, 40%) of existing colors rather than adding new hues.

### 2.4 CSS Custom Properties

```css
:root {
  /* Neutrals */
  --neutral-950: #03131e;
  --neutral-900: #214059;
  --neutral-800: #3b5e73;
  --neutral-700: #8f9da7;
  --neutral-600: #c1cdd9;
  --neutral-200: #f2f2f2;

  /* Semantic accents */
  --accent-teal: #34d399;
  --accent-amber: #FBBF24;
  --accent-pink: #fb7185;

  /* Data visualization */
  --data-blue: #2563c1;
  --data-cyan: #36b5ce;
  --data-teal: #34d399;
  --data-green: #4abe04;
  --data-purple: #8b41b2;
  --data-magenta: #be13cc;
  --data-lavender: #C7c3fe;
}
```

### 2.5 Tailwind Extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        conatus: {
          950: '#03131e',
          900: '#214059',
          800: '#3b5e73',
          700: '#8f9da7',
          600: '#c1cdd9',
          200: '#f2f2f2',
        },
        accent: {
          teal: '#34d399',
          amber: '#FBBF24',
          pink: '#fb7185',
        },
        data: {
          blue: '#2563c1',
          cyan: '#36b5ce',
          teal: '#34d399',
          green: '#4abe04',
          purple: '#8b41b2',
          magenta: '#be13cc',
          lavender: '#C7c3fe',
        },
      },
    },
  },
};
```

---

## 3. Typography

### 3.1 Typeface

**Outfit** — the sole typeface across the entire system.

- Source: [Google Fonts — Outfit](https://fonts.google.com/specimen/Outfit)
- Classification: Geometric sans-serif
- Why: Clean geometry, excellent legibility at small sizes, modern but not trendy, wide weight range

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

| Token | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| `heading-xl` | Outfit | 700 (Bold) | 30px / 1.875rem | 1.2 | -0.02em | Page titles, hero KPIs |
| `heading-lg` | Outfit | 700 (Bold) | 20px / 1.25rem | 1.3 | -0.01em | Section headers, card titles |
| `heading-md` | Outfit | 600 (Semibold) | 18px / 1.125rem | 1.35 | 0 | Subsection headers, widget titles |
| `body` | Outfit | 400 (Regular) | 16px / 1rem | 1.5 | 0 | Body text, descriptions, table cells |
| `caption` | Outfit | 400 (Regular Italic) | 14px / 0.875rem | 1.4 | 0.01em | Captions, timestamps, footnotes, helper text |
| `label` | Outfit | 500 (Medium) | 12px / 0.75rem | 1.3 | 0.04em | Overline labels, badge text, axis labels |
| `kpi-value` | Outfit | 700 (Bold) | 36px / 2.25rem | 1.1 | -0.02em | Large numeric KPI display |

### 3.3 Type Color Mapping

| Context | Dark Mode | Light Mode |
|---------|-----------|------------|
| Primary text | `#f2f2f2` | `#03131e` |
| Secondary text | `#c1cdd9` | `#3b5e73` |
| Muted/disabled | `#8f9da7` | `#8f9da7` |
| On-accent text | `#03131e` | `#03131e` |
| Link / interactive | `#34d399` | `#214059` |

### 3.4 Typography Rules

1. **Never use more than 3 weight variants** on a single screen
2. **No underlined text** except for hyperlinks on hover
3. **All caps** is reserved exclusively for `label` tokens (overlines, badge text)
4. **Numbers in KPIs** use tabular figures (`font-variant-numeric: tabular-nums`) for alignment
5. **Minimum readable size:** 12px. Nothing smaller, ever.

---

## 4. Spacing & Layout

### 4.1 Base Unit

**4px base grid.** All spacing derives from multiples of 4.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Inline icon gap, tight internal padding |
| `space-2` | 8px | Between related elements (label + value) |
| `space-3` | 12px | Internal card padding (compact) |
| `space-4` | 16px | Standard internal card padding |
| `space-5` | 20px | Between cards in a grid |
| `space-6` | 24px | Section separation |
| `space-8` | 32px | Major section breaks |
| `space-10` | 40px | Page-level vertical margins |
| `space-16` | 64px | Kiosk mode — enlarged spacing for distance readability |

### 4.2 Layout Grid

| Context | Columns | Gutter | Margin |
|---------|---------|--------|--------|
| Desktop (≥1440px) | 12 | 20px | 32px |
| Laptop (1024–1439px) | 12 | 16px | 24px |
| Kiosk (1920×1080 fixed) | 12 | 24px | 40px |

### 4.3 Breakpoints

| Token | Width | Target |
|-------|-------|--------|
| `sm` | 640px | — (not primary; avoid designing for mobile) |
| `md` | 768px | — |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Standard desktop |
| `2xl` | 1440px | Wide desktop |
| `kiosk` | 1920px | TV/kiosk fixed layout |

> **Note:** This dashboard is desktop/kiosk first. Mobile is not a target. Do not compromise desktop density for mobile responsiveness.

---

## 5. Surfaces & Elevation

### 5.1 Surface Hierarchy (Dark Mode)

| Level | Token | Background | Border | Usage |
|-------|-------|------------|--------|-------|
| 0 — Page | `surface-base` | `#03131e` | none | Full page background |
| 1 — Card | `surface-card` | `#214059` | none | Cards, panels, dialogs |
| 2 — Elevated | `surface-elevated` | `#3b5e73` | none | Dropdowns, popovers, tooltips |
| 3 — Overlay | `surface-overlay` | `#03131e` at 80% opacity | none | Modal backdrop |

### 5.2 Surface Rules

1. **No box-shadow.** Elevation is communicated through background color stepping only.
2. **No gradients** on surfaces. Flat, solid fills only.
3. **Borders:** Use sparingly. When needed: `1px solid` with `#3b5e73` (dark mode) or `#c1cdd9` (light mode) at 30% opacity.
4. **Border radius:** `8px` for cards and containers. `6px` for buttons and inputs. `4px` for badges and tags. `9999px` (full) for avatar circles only.

---

## 6. Component Specifications (shadcn/ui)

All components use [shadcn/ui](https://ui.shadcn.com/) as the base, themed to Conatus specifications.

### 6.1 Buttons

| Variant | Background | Text | Border | Hover | Usage |
|---------|------------|------|--------|-------|-------|
| **Primary** | `accent-teal` | `neutral-950` | none | Opacity 90% | Main CTA, confirm actions |
| **Secondary** | `transparent` | `neutral-600` | `1px neutral-800` | bg `neutral-800` | Secondary actions |
| **Ghost** | `transparent` | `neutral-600` | none | bg `neutral-800` at 50% | Tertiary, icon buttons |
| **Destructive** | `accent-pink` | `neutral-950` | none | Opacity 90% | Delete, critical actions |

**Sizing:**

| Size | Height | Padding (h) | Font | Icon |
|------|--------|-------------|------|------|
| `sm` | 32px | 12px | 14px / Medium | 16px |
| `md` | 40px | 16px | 16px / Medium | 18px |
| `lg` | 48px | 20px | 16px / Semibold | 20px |

**Rules:**
- No uppercase button labels
- Icon + text buttons: icon on the left, 8px gap
- Disabled state: 40% opacity, no pointer events
- No animated hover effects — color transition only (`transition-colors duration-150`)

### 6.2 Cards

```
┌─────────────────────────────────┐
│  padding: 16px (space-4)        │
│                                 │
│  [Overline Label]  label token  │
│  [Card Title]      heading-lg   │
│  [Content area]    body         │
│                                 │
│  border-radius: 8px             │
│  background: surface-card       │
│  border: none                   │
└─────────────────────────────────┘
```

- **KPI Cards:** Title top-left, large `kpi-value` number centered, delta badge bottom-right
- **Chart Cards:** Title + timeframe selector top bar, chart fills remaining space, legend below chart or inline
- **No card headers with colored backgrounds.** Title sits directly on the card surface.

### 6.3 Tables (Data Table)

| Property | Value |
|----------|-------|
| Header bg | `neutral-800` at 50% opacity |
| Header text | `label` token, `neutral-600` |
| Row bg | `transparent` |
| Row hover | `neutral-800` at 30% opacity |
| Row border | `1px solid neutral-800` at 20% opacity |
| Cell padding | `12px 16px` |
| Font | `body` token |
| Striped rows | No — hover only |

### 6.4 Inputs & Form Controls

| Property | Value |
|----------|-------|
| Height | 40px |
| Background | `neutral-950` |
| Border | `1px solid neutral-800` |
| Border (focus) | `1px solid accent-teal` |
| Text | `body` token, `neutral-200` |
| Placeholder | `neutral-700` |
| Border radius | 6px |
| Label | `label` token, positioned above with 6px gap |

### 6.5 Badges & Status Indicators

| Variant | Background | Text |
|---------|------------|------|
| Success | `accent-teal` at 15% | `accent-teal` |
| Warning | `accent-amber` at 15% | `accent-amber` |
| Critical | `accent-pink` at 15% | `accent-pink` |
| Neutral | `neutral-800` | `neutral-600` |

- Font: `label` token
- Padding: `4px 8px`
- Border radius: `4px`
- **No border.** Background tint is sufficient.

### 6.6 Charts & Data Visualization

**Library:** Recharts (recommended) or Chart.js — themed to match.

| Property | Value |
|----------|-------|
| Chart background | Transparent (inherits card bg) |
| Grid lines | `neutral-800` at 30% opacity, dashed |
| Axis labels | `label` token, `neutral-700` |
| Axis lines | `neutral-800` at 50% opacity |
| Tooltip bg | `neutral-950` at 95% opacity |
| Tooltip border | `1px solid neutral-800` |
| Tooltip text | `body` token |
| Legend | `caption` token, inline with chart header when possible |

**Color assignment order:** `data-blue` → `data-cyan` → `data-teal` → `data-green` → `data-purple` → `data-magenta`

**Rules:**
- No 3D effects
- No gradient fills on bars/areas — use solid colors at varying opacity (100%, 70%, 40%) if layering is needed
- Area charts: fill at 10% opacity of the line color
- Line thickness: 2px default
- Point/dot radius: 4px, shown on hover only
- Animate on mount: simple fade-in, 300ms ease-out. No bouncing or elastic curves.

### 6.7 Sidebar / Navigation

| Property | Value |
|----------|-------|
| Width (expanded) | 240px |
| Width (collapsed) | 64px |
| Background | `neutral-950` |
| Nav item height | 40px |
| Nav item padding | `8px 16px` |
| Nav item text | `body` token, `neutral-700` |
| Nav item active | `accent-teal` text, left `2px accent-teal` border indicator |
| Nav item hover | bg `neutral-800` at 30% |
| Section divider | `1px solid neutral-800` at 20% opacity, `16px` vertical margin |
| Logo area | Top, `24px` padding, wordmark or icon only |

### 6.8 Dialogs & Modals

| Property | Value |
|----------|-------|
| Overlay | `neutral-950` at 80% opacity |
| Container bg | `surface-card` |
| Max width | 480px (default), 640px (wide) |
| Border radius | 8px |
| Padding | `24px` |
| Title | `heading-lg` |
| Close button | Ghost, top-right, icon only |
| Animation | Fade-in 200ms, scale from 98% to 100% |

### 6.9 Toasts & Notifications

| Property | Value |
|----------|-------|
| Position | Bottom-right, 16px from edges |
| Background | `surface-elevated` |
| Border-left | `3px solid` with semantic accent color |
| Padding | `12px 16px` |
| Title | `heading-md` |
| Description | `caption` |
| Auto-dismiss | 5 seconds |
| Animation | Slide in from right, 200ms |

---

## 7. Iconography

- **Library:** [Lucide Icons](https://lucide.dev/) — consistent with shadcn/ui
- **Default size:** 18px (pairs with `body` text)
- **Stroke width:** 1.5px
- **Color:** Inherits text color of parent
- **Interactive icons:** Include 8px padding clickable area beyond visible bounds (minimum 32px touch target)
- **No filled icons.** Outline only, always.

---

## 8. Kiosk Mode Specifications

The dashboard has a dedicated kiosk mode for wall-mounted displays viewed from 2–4 meters.

| Property | Kiosk Value | Standard Value |
|----------|-------------|----------------|
| Resolution | 1920 × 1080 (fixed) | Responsive |
| Base font size | 18px | 16px |
| `kpi-value` size | 48px | 36px |
| Card padding | 24px | 16px |
| Grid gutter | 24px | 20px |
| Page margin | 40px | 32px |
| Auto-refresh | Every 30s | On demand |
| Interactivity | View-only, auto-rotate pages | Full interaction |
| Cursor | Hidden | Default |
| Idle behavior | Cycle through configured dashboards at 15s intervals | None |

**Kiosk-specific rules:**
- Remove all hover states (no pointer device)
- Remove sidebar navigation — use full-width layout
- Increase chart line thickness to 3px
- Increase badge/tag font to 14px
- Ensure minimum contrast ratio of 7:1 (WCAG AAA) for distance readability
- Timestamp of last data refresh must always be visible

---

## 9. Motion & Animation

| Context | Property | Duration | Easing | Notes |
|---------|----------|----------|--------|-------|
| Page transition | Opacity | 200ms | ease-out | Fade only |
| Card mount | Opacity + translateY(8px) | 300ms | ease-out | Stagger 50ms between cards |
| Chart render | Opacity | 300ms | ease-out | No draw animations |
| Hover (buttons, rows) | Background-color | 150ms | ease | Color shift only |
| Modal open | Opacity + scale(0.98→1) | 200ms | ease-out | — |
| Toast enter | translateX(100%→0) | 200ms | ease-out | — |
| Sidebar expand | Width | 200ms | ease-in-out | — |
| Skeleton loading | Opacity pulse 0.4→1 | 1.5s | ease-in-out | Loop until loaded |

**Forbidden animations:**
- Bounce, elastic, or spring physics
- Rotation effects
- Scale beyond 2% variation
- Any animation longer than 400ms
- Parallax scrolling
- Gradient transitions or color cycling

---

## 10. Accessibility

| Standard | Requirement |
|----------|-------------|
| WCAG level | AA minimum, AAA for kiosk mode |
| Contrast (normal text) | ≥ 4.5:1 |
| Contrast (large text) | ≥ 3:1 |
| Contrast (kiosk) | ≥ 7:1 |
| Focus indicator | `2px solid accent-teal`, `2px offset` |
| Keyboard navigation | Full tab order for all interactive elements |
| Screen reader | All charts must have `aria-label` with data summary |
| Reduced motion | Respect `prefers-reduced-motion`, disable all transitions |
| Color-blind safe | Data series must be distinguishable by pattern/shape in addition to color |

---

## 11. shadcn/ui Theme Configuration

```typescript
// theme.ts — shadcn/ui CSS variables mapping
export const conatusTheme = {
  dark: {
    background: '203 82% 6%',        // #03131e
    foreground: '0 0% 95%',          // #f2f2f2
    card: '207 46% 24%',             // #214059
    'card-foreground': '0 0% 95%',   // #f2f2f2
    popover: '200 32% 34%',          // #3b5e73
    'popover-foreground': '0 0% 95%',
    primary: '160 59% 52%',          // #34d399
    'primary-foreground': '203 82% 6%',
    secondary: '200 32% 34%',        // #3b5e73
    'secondary-foreground': '210 18% 80%', // #c1cdd9
    muted: '200 32% 34%',
    'muted-foreground': '204 10% 58%', // #8f9da7
    accent: '160 59% 52%',
    'accent-foreground': '203 82% 6%',
    destructive: '351 96% 71%',      // #fb7185
    'destructive-foreground': '203 82% 6%',
    border: '200 32% 34%',           // #3b5e73
    input: '200 32% 34%',
    ring: '160 59% 52%',             // #34d399
    radius: '0.5rem',
  },
  light: {
    background: '0 0% 95%',          // #f2f2f2
    foreground: '203 82% 6%',        // #03131e
    card: '0 0% 100%',               // white
    'card-foreground': '203 82% 6%',
    popover: '0 0% 100%',
    'popover-foreground': '203 82% 6%',
    primary: '207 46% 24%',          // #214059
    'primary-foreground': '0 0% 95%',
    secondary: '210 18% 80%',        // #c1cdd9
    'secondary-foreground': '200 32% 34%',
    muted: '210 18% 80%',
    'muted-foreground': '204 10% 58%',
    accent: '207 46% 24%',
    'accent-foreground': '0 0% 95%',
    destructive: '351 96% 71%',
    'destructive-foreground': '0 0% 100%',
    border: '210 18% 80%',
    input: '210 18% 80%',
    ring: '207 46% 24%',
    radius: '0.5rem',
  },
};
```

---

## 12. File & Folder Naming Convention

```
src/
├── components/
│   ├── ui/              ← shadcn/ui components (do not modify directly)
│   ├── dashboard/       ← Dashboard-specific composed components
│   ├── charts/          ← Chart wrappers and configs
│   └── layout/          ← Sidebar, Header, PageShell, KioskWrapper
├── styles/
│   ├── globals.css      ← CSS custom properties, Outfit import
│   └── theme.ts         ← shadcn/ui theme config
├── lib/
│   └── utils.ts         ← cn() helper and shared utilities
└── constants/
    └── colors.ts        ← Exported color tokens for chart configs
```

---

## 13. Do / Don't Quick Reference

| Do | Don't |
|----|-------|
| Use solid, flat colors | Use gradients on any surface |
| Communicate with data density | Use decorative illustrations |
| Use `accent-teal` for primary actions | Use teal as background fill |
| Use opacity to layer information | Use box-shadow for elevation |
| Animate with opacity and subtle translate | Use bounce, spring, or elastic easing |
| Use Outfit at defined scale stops | Introduce any other typeface |
| Design for 1440px+ first | Optimize for mobile |
| Use the data palette for charts only | Use chart colors for UI elements |
| Keep KPI numbers large and scannable | Clutter KPI cards with secondary info |
| Use skeleton states for loading | Use spinners or progress bars for page loads |
| Use borders at ≤30% opacity | Use thick or high-contrast borders |
| Trust whitespace | Fill every pixel |

---

## 14. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-03 | Initial design system — colors, typography, components, kiosk specs |

---

*This document is the canonical reference for all Conatus dashboard development. All PRs modifying UI must reference compliance with this system. Deviations require design review approval.*
