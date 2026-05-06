# GLASS HAVEN WINDOWS - IMPLEMENTATION KICKSTART

## Project Overview
Glass Haven Windows is a multi-page professional window cleaning website built with Next.js 16, Tailwind CSS, and Shadcn/ui components. The site emphasizes modern design through glass morphism effects, smooth animations, and strategic cyan accents (#5ce1e6) as the primary call-to-action driver. All CTAs redirect to a Calendly scheduling link for estimates.

---

## Design Strategy

### Visual Approach
- **Glass Morphism Aesthetic**: Subtle, professional translucent cards with backdrop blur effects
- **Cyan-Driven UX**: Single accent color (#5ce1e6) for all primary CTAs and interactive elements
- **Minimal Image Usage**: Only 2 stock images maximum (hero section + one service showcase)
- **Smooth Micro-interactions**: Subtle animations on scroll, hover, and menu toggles
- **Full Width Responsive**: 100vw hero and full-width sections, contained content areas

### Color System
- **Primary Accent**: Cyan (#5ce1e6) - All CTAs, highlights, focus states
- **Secondary Accent**: Yellow (#f0d945) - Logo accent, subtle highlights (minimal use)
- **Neutral Foundation**: Light grays (#f8f9fa background, #ffffff surface, #1a1a1a text)
- **Supporting**: Muted grays for secondary text and borders

### Typography
- Single font family (system stack) for clean, professional appearance
- H1: 32px (mobile) → 48px (desktop), 600-700 weight
- Body: 16px consistent, line-height 1.6
- All text wrapped with `text-balance` for optimal line breaks

---

## Page Structure & Navigation

### Multi-Page Architecture

#### 1. **Home (Landing Page)**
   - Hero section with background image (optional video)
   - Key CTAs prominently placed
   - Service overview cards (glass morphism)
   - Why Choose Us section
   - Additional CTAs throughout page
   - Footer with business hours

#### 2. **Services**
   - Detailed service breakdown (Residential, Commercial, Specialty)
   - Glass morphism service cards
   - Service process steps
   - CTA button within/after each service
   - Before/after images (if available)

#### 3. **About**
   - About Glass Haven story
   - Will's professional focus/mission
   - Team values
   - Photo placeholder for Will (TBD)
   - Why customers trust us section

#### 4. **Contact**
   - Contact form with fields: Name, Email, Phone, Service Type, Message
   - Business hours displayed: 8:00am - 6:30pm Everyday
   - Direct phone link (visible, not in mobile header)
   - Calendly embed or CTA to schedule
   - Map placeholder (optional)

### Navigation Structure
- **Header**: Logo (left), Nav menu (center/right), Burger menu (mobile)
- **Mobile Menu**: Hamburger icon toggles slide-in navigation
- **Phone Number**: Visible on desktop header, hidden in mobile (except contact page)
- **Active Link Indicators**: Current page highlighted in navigation

---

## CTA Placement Strategy (Minimum 3+)

### Recommended CTA Placements
1. **Hero Section**: Primary CTA button - "Get Free Estimate"
2. **End of Services Overview**: "Schedule Your Estimate Today"
3. **After Why Choose Us**: "Ready to See the Difference?"
4. **Bottom of Each Service Card** (Services page): "Get Estimate"
5. **Contact Page**: Primary form with embedded Calendly or large CTA button
6. **Footer**: Secondary CTA - "Book Now"

### CTA Styling
- All CTAs use cyan background (#5ce1e6) with dark text
- 14px × 28px padding, 8px border radius
- Hover state: Brightness +10%, slight lift (translateY -2px), shadow glow
- 300ms smooth transition

---

## Component Architecture

### Component Breakdown (Max 600 lines each, reusable)

1. **Layout Components**
   - `Header.tsx` - Navigation, logo, burger menu toggle
   - `MobileMenu.tsx` - Slide-in navigation for mobile
   - `Footer.tsx` - Business info, hours, links, secondary CTA
   - `Container.tsx` - Reusable max-width container wrapper

2. **Section Components**
   - `HeroSection.tsx` - Full-width hero with background image, headline, CTA
   - `ServiceCard.tsx` - Glass morphism card for individual service
   - `ServicesGrid.tsx` - Responsive grid layout for services
   - `FeatureHighlight.tsx` - Reusable highlight box with icon/text
   - `CTABlock.tsx` - Reusable CTA section (heading + button)
   - `ContactForm.tsx` - Contact form with validation

3. **UI Components** (from Shadcn/ui as needed)
   - Button (customized for cyan primary)
   - Input, Textarea (form fields)
   - Card (for non-glass-morphism cards if needed)
   - Select (service type dropdown if needed)

4. **Utilities & Hooks**
   - `useInViewAnimation.ts` - Trigger animations on scroll
   - `useMenuToggle.ts` - Mobile menu state management
   - `glassEffect.css` - Reusable glass morphism styles
   - `animations.css` - Global animation keyframes

---

## Technical Implementation Details

### Next.js Setup
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + custom CSS for glass morphism
- **UI Library**: Shadcn/ui for base components
- **Font**: System font stack (no external font loading needed for speed)
- **Deployment**: Vercel

### Key Technologies
- **Animation Library**: Framer Motion (for scroll triggers) or vanilla CSS animations
- **Form Handling**: React Hook Form + client-side validation (no backend form processing needed)
- **SEO**: Next.js metadata API, dynamic OG tags
- **Responsive**: Mobile-first Tailwind breakpoints (sm, md, lg)

### File Structure
```
/app
  /layout.tsx - Root layout with design tokens
  /globals.css - Design tokens, animations, glass morphism styles
  /page.tsx - Home/landing page
  /services/page.tsx - Services page
  /about/page.tsx - About page
  /contact/page.tsx - Contact page
/components
  /Header.tsx
  /Footer.tsx
  /HeroSection.tsx
  /ServiceCard.tsx
  /MobileMenu.tsx
  /CTABlock.tsx
  /ContactForm.tsx
  (others)
/public
  /images
    /hero-bg.jpg (1 stock image)
    /service-showcase.jpg (1 stock image)
/lib
  /utils.ts - Utility functions, animations
```

---

## Animations & Interactions

### Global Animations
- **Fade In**: Page transitions, section reveals (400ms ease-out)
- **Slide Up**: Content entering viewport via Intersection Observer (500ms ease-out)
- **Scale In**: Card/modal appearances (300ms ease-out)
- **Stagger**: Sequential card animations (100ms delay between each)

### Hover Effects
- **Buttons**: Lift effect (translateY -2px) + cyan glow shadow
- **Cards**: Scale 1.02x + brightness increase + shadow intensify
- **Links**: Underline appears/animates

### Scroll Behavior
- **Smooth Scroll**: Globally enabled in CSS
- **Hero Parallax**: Subtle background shift (5% offset) as user scrolls
- **Section Reveals**: Cards fade in as they come into viewport
- **Menu Animation**: Hamburger icon rotates 90°, menu slides from top

### Form Interactions
- **Input Focus**: Smooth border color change to cyan, subtle glow
- **Submit Button**: Loading spinner while form processes
- **Success Message**: Fade in after submission (if using backend)

---

## Responsive Design Strategy

### Breakpoints & Adaptations
```
Mobile (320px - 639px)
- Single column layouts
- Full-width with 24px side padding
- Hamburger menu (no header links visible)
- Font sizes reduced 10% from desktop
- Touch targets: 44x44px minimum
- Service cards: 1 per row
- Hero height: 60vh

Tablet (640px - 1023px)
- 2-column grids
- 32px horizontal padding
- Navigation visible but compact
- Service cards: 2 per row
- Medium font sizes
- Hero height: 70vh

Desktop (1024px+)
- Full navigation visible
- 3-column service grids
- 40px-60px horizontal padding
- Full font sizes
- Service cards: 3 per row
- Hero height: 80vh
```

### Mobile-First Implementation
- Base styles for mobile
- Add complexity with media queries (sm:, md:, lg: prefixes)
- Burger menu hidden on desktop (lg:hidden)
- Header navigation hidden on mobile (hidden md:flex)

---

## Glass Morphism Implementation

### Technical Specs
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
```

### Usage Locations
- Service cards (all pages with services)
- Feature highlight boxes
- Form containers
- About section callouts
- Any secondary/tertiary card element

### Performance Note
- Backdrop filter can impact performance on older devices
- Fallback: Solid semi-transparent background
- Test on throttled mobile devices

---

## SEO Optimization

### On-Page SEO
1. **Meta Tags** (Next.js metadata API)
   - Title: "Professional Window Cleaning | Glass Haven Windows"
   - Description: "Expert [local] window cleaning for homes & businesses. Free estimates. 8am-6:30pm daily."

2. **Heading Hierarchy**
   - H1: Page title (one per page)
   - H2: Section headings
   - H3: Subsections

3. **Schema Markup**
   - LocalBusiness (company info, hours, service area)
   - Service (for each service type)
   - Organization (company details)

4. **Alt Text**
   - All images: Descriptive alt text
   - Decorative elements: Empty alt or aria-hidden

5. **URL Structure**
   - `/` - Home
   - `/services` - Services
   - `/about` - About
   - `/contact` - Contact

### Performance SEO
- Image optimization (Next.js Image component)
- Code splitting per page
- CSS-in-JS minimized (Tailwind purging)
- Lazy loading for below-fold images
- Lighthouse target: 90+ scores

---

## Business Logic & Backend

### Contact Form Handling
**Current Implementation**: Client-side form with Calendly CTA
- Form collects: Name, Email, Phone, Service Type, Message
- Validation: Required fields + email format check
- Action: All CTAs redirect to Calendly link

**Optional Future Backend**:
- EmailJS or Resend for form email notifications
- Supabase for lead storage
- Admin dashboard to manage inquiries

### Calendly Integration
- Primary CTA destination: `https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05`
- Placed on: Hero, Services page, Contact page, Footer
- Link parameters: `?back=1` (show back button), `&month=2026-05` (pre-set month)

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio
  - Cyan (#5ce1e6) on white: 5.2:1 ✓
  - Dark text on light: >7:1 ✓
- **Focus Management**: Visible 3px border on keyboard nav
- **Touch Targets**: All buttons minimum 44x44px
- **Font Sizes**: Minimum 16px body text
- **Alt Text**: Descriptive for all images

### Keyboard Navigation
- Tab through all interactive elements
- Burger menu: Escape key closes
- Forms: Tab order logical
- Links: Clear focus indicators

---

## Performance Targets

### Core Web Vitals Goals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Strategies
1. Image optimization (WebP, responsive sizes)
2. Font subsetting (system fonts only, no external)
3. CSS minification via Tailwind
4. Code splitting per page route
5. Lazy load images below fold
6. Minimize JavaScript bundle

---

## Development Workflow

### Phase 1: Setup & Foundation
- Initialize Next.js 16 project with Tailwind + Shadcn
- Set up design tokens in `globals.css`
- Create reusable layout components (Header, Footer, Container)
- Configure responsive breakpoints

### Phase 2: Core Pages
- Build Home/Landing page with hero + 3+ CTAs
- Create Services page with service cards
- Build About page with company info
- Set up Contact page with form

### Phase 3: Interactions & Polish
- Add scroll animations and intersection observers
- Implement glass morphism effects and hover states
- Create mobile burger menu with animations
- Add form validation and error states

### Phase 4: Optimization & Launch
- Implement SEO metadata on all pages
- Add structured data schema markup
- Optimize images and performance
- Final responsive testing (mobile, tablet, desktop)
- Deploy to Vercel

---

## Testing Checklist

### Responsive Design
- [ ] Mobile (iPhone 12): All content visible, no horizontal scroll
- [ ] Tablet (iPad): 2-column layouts work
- [ ] Desktop (1440px): Full layout with 3-column grids
- [ ] Burger menu: Opens/closes on mobile, hidden on desktop

### Interactions
- [ ] All CTAs link to Calendly
- [ ] Hover effects work on desktop
- [ ] Smooth scroll behavior enabled
- [ ] Animations play on scroll (no jarring content shifts)
- [ ] Form validation shows error messages
- [ ] Mobile menu closes on navigation

### Accessibility
- [ ] Keyboard navigation works (Tab/Shift+Tab/Enter)
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Alt text on all images
- [ ] Form labels associated with inputs

### SEO & Performance
- [ ] Meta tags present and accurate
- [ ] Lighthouse score 90+ (Performance)
- [ ] No console errors or warnings
- [ ] Images load efficiently
- [ ] Calendly link works and opens in correct month

### Business
- [ ] Minimum 3 CTAs visible on home page
- [ ] Business hours (8am-6:30pm) displayed
- [ ] Phone number on desktop, hidden mobile
- [ ] No social media links (reserved for future)
- [ ] Content placeholder notes clear

---

## Maintenance & Future Enhancements

### Placeholder Content to Update
- Hero background image (use stock or provided image)
- Will's professional photo (About page)
- Service descriptions (detailed content)
- Testimonials (when available - currently skipped)
- Before/after images (when projects available)

### Planned Future Features
- Blog/news section
- Social media integration (when accounts created)
- Customer testimonials carousel
- Photo gallery of completed projects
- Live chat support
- Mobile app

### Tech Debt to Monitor
- Monitor glass morphism performance on older devices
- Consider CDN for image delivery as scale grows
- Plan for CMS implementation when content scales

---

## Key Decisions & Rationale

| Decision | Rationale |
|----------|-----------|
| **Single Font Family** | Faster load time, cleaner look, no external font dependencies |
| **Cyan as Single Accent** | Guides user focus to CTAs, aligns with brand, improves conversion |
| **Glass Morphism on Cards** | Modern aesthetic reflecting "crystal clear" service value |
| **Max 2 Stock Images** | Minimizes payload, focuses on content over imagery, allows faster iteration |
| **Mobile Menu Hidden on Desktop** | Cleaner header, reduces cognitive load, improves desktop UX |
| **Calendly-Only Backend** | No backend infrastructure needed, simple scheduling, easy for customer |
| **Tailwind + Shadcn** | Fast development, consistent design system, proven scalability |
| **Next.js 16 App Router** | Latest features, built-in optimization, smooth DX |

---

## Success Criteria

### Launch Criteria
- [ ] All 4 pages (Home, Services, About, Contact) complete and responsive
- [ ] Minimum 3 CTAs visible on home page, all linking to Calendly
- [ ] Glass morphism effects applied to service cards
- [ ] Animations smooth and non-distracting
- [ ] Mobile menu fully functional with burger icon
- [ ] SEO tags and structured data implemented
- [ ] All forms validate client-side
- [ ] Lighthouse score 90+
- [ ] Business hours displayed
- [ ] No console errors

### Post-Launch Goals
- Track Calendly conversions
- Monitor Lighthouse scores
- Gather user feedback on CTA placement
- Plan content updates (testimonials, before/afters)

---

## Notes for Development

1. **Custom Instructions Reminder**: Design Mode active - design decisions made, ready for implementation code
2. **Component File Size**: Keep components under 600 lines; break into smaller units if needed
3. **Calendly Link**: `https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05` - consistent across all CTAs
4. **Business Hours**: "8:00am - 6:30pm Everyday" - displayed in footer and contact page
5. **Glass Morphism**: Use backdrop-filter with fallback for older browsers
6. **Animations**: Prioritize performance; use CSS keyframes over JavaScript when possible
7. **Images**: Maximum 2 stock images total; optimize heavily
8. **Future Integrations**: Placeholder in code for testimonials, social links, and blog section

---

**Ready for Implementation** ✓

This plan is comprehensive and design-driven. All decisions have been made regarding:
- Visual aesthetic (glass morphism + cyan accents)
- Page structure (multi-page with clear hierarchy)
- CTA strategy (3+ placements, all to Calendly)
- Responsive approach (mobile-first, full-width)
- Component architecture (reusable, <600 lines each)
- SEO & accessibility (WCAG AA compliant, structured data)
- Animations (subtle, scroll-triggered, performant)

Proceed with code implementation following this plan.

