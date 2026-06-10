# Design System Specification: Tiny Paws Pet Hub

This design specification is extracted directly from the Stitch Project `7937122982124898740` and serves as the single source of truth for the Tiny Paws Pet Hub visual overhaul.

---

## 🎨 Color System

| Token | CSS Variable / Value | Description |
| :--- | :--- | :--- |
| **Background** | `#fcf9f8` | Base background color for the application. |
| **On Background** | `#1b1c1c` | High legibility text on base background. |
| **Primary (Sage Teal)** | `#13423d` | Brand markers, primary actions, health-related indicators. |
| **On Primary** | `#ffffff` | Text/icons placed on top of Primary. |
| **Primary Container** | `#2d5a54` | Darker sage container backgrounds. |
| **On Primary Container** | `#a1cfc8` | High contrast labels inside Primary containers. |
| **Secondary (Champagne)**| `#645e50` | Soft warmth, large surface areas, secondary actions. |
| **On Secondary** | `#ffffff` | Text/icons placed on top of Secondary. |
| **Secondary Container** | `#eae2d0` | Warm cream container backgrounds. |
| **On Secondary Container**| `#6a6456` | Label colors within secondary containers. |
| **Tertiary (Coral)** | `#682610` | Accent notifications, highlights, alerts. |
| **On Tertiary** | `#ffffff` | Text/icons placed on top of Tertiary. |
| **Tertiary Container** | `#863c25` | Accent container highlights. |
| **On Tertiary Container** | `#ffb49d` | Accent labels. |
| **Error** | `#ba1a1a` | Validation/critical alert color. |
| **On Error** | `#ffffff` | Text/icons on error backgrounds. |
| **Surface** | `#fcf9f8` | Tonal surface base. |
| **Surface Dim** | `#dcd9d9` | Darker shaded surface background. |
| **Surface Bright** | `#fcf9f8` | High contrast surface highlights. |
| **Surface Container Lowest**| `#ffffff` | Pure white background card elevation level. |
| **Surface Container Low** | `#f6f3f2` | Off-white elevation level. |
| **Surface Container** | `#f0eded` | Mid grey elevation level. |
| **Surface Container High**| `#eae7e7` | Higher elevated backgrounds. |
| **Surface Container Highest**| `#e4e2e1` | Deepest surface panel contrast layer. |
| **On Surface** | `#1b1c1c` | Body text color on surface layouts. |
| **On Surface Variant** | `#404847` | Secondary text color on surfaces. |
| **Outline** | `#707977` | Default borders and structural divider lines. |
| **Outline Variant** | `#c0c8c6` | Soft, subtle border color. |

---

## ✍️ Typography System

- **Headline Font Family**: `Playfair Display` (suggests legacy, warmth, and high-end hospitality)
- **Body & Label Font Family**: `Inter` (functional, clean, high readability for complex data)

### Typography Tokens

| Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **display-lg** | `Playfair Display` | `48px` | `700` | `56px` | `-0.02em` |
| **display-lg-mobile** | `Playfair Display` | `32px` | `700` | `40px` | `-0.01em` |
| **headline-md** | `Playfair Display` | `32px` | `600` | `40px` | — |
| **headline-sm** | `Playfair Display` | `24px` | `600` | `32px` | — |
| **body-lg** | `Inter` | `18px` | `400` | `28px` | — |
| **body-md** | `Inter` | `16px` | `400` | `24px` | — |
| **label-md** | `Inter` | `14px` | `600` | `20px` | `0.02em` |
| **label-sm** | `Inter` | `12px` | `500` | `16px` | `0.04em` |

---

## 📐 Layout & Spacing Rules

- **Desktop Layout Grid**: 12 columns, centered inside a max width of `1280px`.
- **Mobile Layout Grid**: Fluid 4 columns.
- **Desktop Margin**: `40px`
- **Mobile Margin**: `16px`
- **Gutter**: `24px`
- **Vertical Spacing Scale**:
  - `stack-sm`: `12px`
  - `stack-md`: `24px`
  - `stack-lg`: `48px`
  - Base multiplier unit is `8px`.

---

## 🪞 Elevation, Depth & Rounded Radii

- **Card Radii**:
  - `sm`: `0.25rem` (4px)
  - `DEFAULT`: `0.5rem` (8px)
  - `md`: `0.75rem` (12px)
  - `lg`: `1rem` (16px) — Used for standard cards and major content sections.
  - `xl`: `1.5rem` (24px)
  - `full`: `9999px` — Pill-shaped, used for buttons and category chips.
- **Elevation**: Depth is achieved via **Glassmorphism** and subtle border contrasts rather than heavy shadows.
  - Floating items and headers use a backdrop-blur of `20px` with `80%` opacity white, styled as frosted glass.
  - Cards feature a 1px border (`#c0c8c6` or `--border-subtle`) and a soft ambient shadow with 10% opacity Sage Teal.
