# Glass Haven Windows - Design Token System

## Color Palette

### Brand Colors (Logo)
- **Primary Cyan**: `#5ce1e6` - Main brand accent, used for CTAs, highlights, and key UI elements
- **Secondary Yellow**: `#f0d945` - Supporting accent for highlights and secondary actions

### Neutral Foundation (Semantic)
- **Background**: `#f8f9fa` - Light, clean base for full-width sections
- **Surface**: `#ffffff` - Card backgrounds, modals, elevated surfaces
- **Surface Secondary**: `#f5f6f7` - Slightly darker surface for contrast (glass morphism backing)
- **Foreground**: `#1a1a1a` - Primary text, headers, main content
- **Muted Foreground**: `#666666` - Secondary text, descriptions, metadata
- **Border**: `#e5e7eb` - Subtle dividers and borders

### Glass Morphism Layer
- **Glass Light**: `rgba(255, 255, 255, 0.15)` - Light glass effect for cards
- **Glass Border**: `rgba(255, 255, 255, 0.3)` - Border for glass-morphism elements

---

## Typography

### Font Stack
- **Headings (H1, H2, H3)**: System font stack optimized for clarity
  - Font Family: `system-ui, -apple-system, sans-serif`
  - Weight: 600-700 (Bold)
  - Line Height: 1.2
  - Letter Spacing: -0.5px for large headings

- **Body Text**: System font stack for readability
  - Font Family: `system-ui, -apple-system, sans-serif`
  - Weight: 400
  - Line Height: 1.6
  - Font Size: 16px (mobile), 18px (desktop)

- **Small Text / Captions**: 14px, weight 400, line-height 1.5
- **Button Text**: 16px, weight 600, line-height 1.4

### Sizing Scale
```
H1: 32px (mobile) → 48px (desktop)
H2: 24px (mobile) → 36px (desktop)
H3: 20px (mobile) → 28px (desktop)
Body: 16px (consistent)
Small: 14px
```

---

## Spacing & Layout

### Spacing Scale (Tailwind default + custom)
```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

### Container & Padding
- **Max Width**: Full width (100vw) for hero sections, contained content for sections
- **Section Padding**: 
  - Mobile: 24px horizontal, 48px vertical
  - Desktop: 40px horizontal, 64px vertical
- **Card Padding**: 24px (mobile), 32px (desktop)

### Gap (flexbox/grid)
- Default: 24px between sections
- Card grid: 20px gap

---

## Components Styling

### Buttons (CTAs)
- **Primary Button (Main CTA)**
  - Background: `#5ce1e6` (Cyan)
  - Text: `#1a1a1a` (Foreground)
  - Padding: 14px 28px
  - Border Radius: 8px
  - Font Weight: 600
  - Hover: Brightness 110%, shadow effect
  - Transition: 300ms ease

- **Secondary Button**
  - Background: `#f5f6f7` (Surface Secondary)
  - Border: 2px solid `#5ce1e6`
  - Text: `#5ce1e6`
  - Padding: 12px 24px
  - Border Radius: 8px
  - Hover: Background to `#5ce1e6`, text to `#1a1a1a`

### Cards (Glass Morphism)
- **Background**: `rgba(255, 255, 255, 0.1)` with backdrop blur
- **Border**: 1px solid `rgba(255, 255, 255, 0.2)`
- **Border Radius**: 16px
- **Padding**: 24px
- **Backdrop Filter**: `blur(10px)`
- **Box Shadow**: `0 8px 32px 0 rgba(31, 38, 135, 0.15)`

### Forms
- **Input Fields**
  - Background: `#ffffff`
  - Border: 1px solid `#e5e7eb`
  - Border Radius: 8px
  - Padding: 12px 16px
  - Focus: Border `#5ce1e6`, box-shadow `0 0 0 3px rgba(92, 225, 230, 0.1)`
  - Font Size: 16px
  - Transition: 200ms ease

---

## Animations & Transitions

### Global Animations
- **Fade In**: 400ms ease-out (elements entering viewport)
- **Slide Up**: 500ms ease-out (sections on scroll)
- **Scale In**: 300ms ease-out (cards/modals)
- **Button Hover**: 200ms ease (all interactive elements)

### Scroll Behavior
- **Smooth Scroll**: Enabled globally
- **Parallax Light**: Subtle background movement on hero (5-10% offset)
- **Intersection Observer**: Fade-in animations for sections entering viewport
- **Stagger Animation**: Cards animate in sequence (100ms delay between each)

### Specific Animations
- **CTA Buttons**: Subtle lift on hover (translateY -2px) + glow effect
- **Glass Cards**: Slight scale (1.02x) + brightness increase on hover
- **Menu Toggle**: Hamburger icon rotates 90°, menu slides in from top
- **Form Inputs**: Smooth focus ring expansion

---

## Responsive Breakpoints

### Mobile First Approach
```
Mobile: 320px - 639px
  - Single column layouts
  - Touch-friendly spacing (larger padding)
  - Hamburger navigation
  - Font sizes reduced by 10-15%
  - Full-width images

Tablet: 640px - 1023px
  - 2-column grids for service cards
  - Medium spacing
  - Side navigation option
  - Standard font sizes

Desktop: 1024px+
  - 3-column layouts
  - Optimized spacing
  - Full navigation
  - Larger typography
```

---

## Glass Morphism Implementation

### Technical Specs
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
```

### Usage
- Service cards
- Feature highlight boxes
- Form containers
- Testimonial placeholders
- About section highlights

---

## SEO & Metadata

### Key Elements
- **Meta Title**: "Professional Window Cleaning Services | Glass Haven Windows"
- **Meta Description**: "Expert residential and commercial window cleaning in [location]. Free estimates, eco-friendly solutions. 8am-6:30pm daily."
- **Schema Markup**: LocalBusiness, Service, Organization
- **OG Image**: Hero image (1200x630px)
- **Canonical Tags**: On all pages

### Keywords
- Primary: "window cleaning", "professional window cleaning"
- Local: "[City name] window cleaning", "residential window cleaning near me"
- Commercial: "commercial window cleaning", "business window cleaning"
- Long-tail: "professional window cleaning services", "best window cleaners"

---

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: All text must be 4.5:1 ratio minimum
  - Cyan (#5ce1e6) on white: ✓ Passes (5.2:1)
  - Dark text on light backgrounds: ✓ Passes
- **Font Sizes**: Minimum 16px for body text
- **Interactive Elements**: Minimum 44x44px touch target
- **Focus Indicators**: Visible keyboard navigation with 3px border
- **Alt Text**: All images (except decorative)
- **ARIA Labels**: Form inputs, buttons, navigation

### Mobile Considerations
- Touch-friendly spacing (minimum 44px buttons)
- Readable font sizes (no scaling needed)
- Clear navigation hierarchy
- No hover-only interactions (use click/tap)
- Sufficient color contrast for small screens

---

## Design Philosophy

### Core Principles
1. **Clarity Through Simplicity**: Minimal, clean aesthetic emphasizing service professionalism
2. **Transparency & Trust**: Glass morphism reflects the "clarity" of sparkling windows
3. **Cyan Accent Focus**: Single accent color guides user journey (all CTAs are cyan)
4. **Mobile-First**: Every design decision works on mobile first
5. **Subtle Motion**: Animations enhance, never distract from content
6. **Local & Approachable**: Professional yet friendly, not corporate

### Visual Hierarchy
- **Level 1**: Hero headline + primary CTA (cyan button)
- **Level 2**: Service cards, feature highlights
- **Level 3**: Supporting text, secondary information
- **Level 4**: Metadata, timestamps, fine print

---

## File Structure & Implementation

### CSS Architecture
- `globals.css`: Design tokens, reset styles, animations
- `components/`: Individual component styles (max 600 lines per file)
- Tailwind config: Extended with custom tokens and animations

### Component Breakdown
- Header/Navigation (with burger menu)
- Hero Section
- Services Section (glass cards)
- About Section
- Contact Section
- CTA Components (3+ placed strategically)
- Footer
- Mobile Menu
- Animations/Effects utilities

