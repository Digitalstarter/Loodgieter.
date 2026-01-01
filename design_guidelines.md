# Design Guidelines: Loodgieter-Services.nl

## Design Approach
**Reference-based approach** drawing from professional local service websites with high conversion focus. Think: Thuisbezorgd's trustworthiness + Coolblue's clarity + traditional Dutch service professionalism.

## Core Design Principles
1. **Trust-first**: Professional, clean, no gimmicks
2. **Conversion-focused**: Clear CTAs, minimal friction
3. **Mobile-optimized**: Emergency services = mobile users
4. **Local credibility**: Dutch language, local presence emphasis

## Typography
- **Headings**: Inter or Poppins (Bold/Semibold) - modern, trustworthy
- **Body**: Inter or System font - high readability
- **Sizes**: H1: text-4xl/5xl, H2: text-3xl, H3: text-2xl, Body: text-base/lg
- **Hierarchy**: Bold headings, regular body, strategic use of semibold for emphasis

## Layout System
- **Spacing units**: Tailwind 4, 6, 8, 12, 16, 20, 24 (px-4, py-8, gap-6, etc.)
- **Container**: max-w-7xl centered with px-4 sm:px-6 lg:px-8
- **Section padding**: py-16 lg:py-24
- **Consistent vertical rhythm**: All sections use same base padding

## Component Library

### Navigation
- Fixed header with logo/text on left
- Desktop: Horizontal menu with "Steden" dropdown
- Mobile: Hamburger menu, full-screen overlay
- Sticky header on scroll with subtle shadow

### Hero Section
- **Full-width background image**: Professional plumber at work or modern bathroom/kitchen
- Height: 60-70vh on desktop, 50vh mobile
- **Content**: Centered/left-aligned overlay with:
  - H1 with city name
  - 2-3 line pitch
  - Two CTA buttons (primary + secondary) with backdrop-blur-sm bg-white/90
- Subtle dark overlay (bg-black/30) for text readability

### Service Cards (4 items)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Card design: White background, rounded-lg, p-6, shadow-md hover:shadow-lg
- Icon at top (64x64px, use Heroicons)
- Service title (text-xl font-semibold)
- Brief description (2-3 lines)

### "Waarom Ons" Section
- 2-column layout (lg:grid-cols-2)
- Left: Image of professional team/van
- Right: Bullet points with checkmark icons
- Each point: Icon + bold title + description

### Reviews/Testimonials
- Grid: 3 columns desktop, 1 mobile
- Card: Rounded, light background, p-6
- Star rating at top (5 yellow stars)
- Quote text in italic
- Name + location below

### FAQ Section
- Accordion pattern (one open at a time)
- Question as button with chevron icon
- Answer slides down with subtle animation
- Border between items

### Forms (Offerte + Contact)
- Clean, single column layout
- Input fields: Full-width, rounded-md, border-gray-300, focus:ring-2
- Dropdown for cities with all 4 locations
- Checkbox with clear privacy text link
- Submit button: Full-width, prominent
- Success message: Green background, checkmark icon

### Footer
- 3-column grid (lg:grid-cols-3)
- Column 1: Company info + contact
- Column 2: Quick links (pages + cities)
- Column 3: Social + certifications
- Bottom bar: Copyright + privacy/terms links

### CTAs
- **Primary button**: Solid background, white text, rounded-lg, px-6 py-3, font-semibold
- **Secondary button**: White background, border, rounded-lg, px-6 py-3
- **WhatsApp floating**: Fixed bottom-right, circular (56x56), green (#25D366), z-50, shadow-lg
  - Mobile: bottom-4 right-4
  - Desktop: bottom-8 right-8

## Images
1. **Hero Image**: Professional plumber working (clean, modern setting) - full-width background
2. **Waarom Ons Image**: Team photo or branded van
3. **Service Icons**: Use Heroicons (wrench, beaker, drain, tools)
4. **Testimonial avatars**: Placeholder initials in colored circles (no photos needed)

## Responsive Behavior
- **Breakpoints**: sm:640px, md:768px, lg:1024px, xl:1280px
- **Mobile (<768px)**:
  - Single column everything
  - Hamburger menu
  - Stacked buttons
  - Hero text larger (better readability)
- **Tablet (768-1023px)**:
  - 2-column grids where applicable
  - Side-by-side CTAs
- **Desktop (1024px+)**:
  - Full multi-column layouts
  - Dropdown navigation

## City Pages
- **Identical layout** to homepage
- Dynamic elements:
  - H1: "Loodgieter [Stad]"
  - Subtitle: "Professionele loodgietersservice in [Stad] en omgeving"
  - Werkgebied mention in intro
  - City pre-selected in form dropdown

## Structured Data
- LocalBusiness schema with Plumber type
- Include: name, address (per city), phone, service areas, opening hours

## Performance
- Lazy load images below fold
- Optimize hero image (WebP format)
- Minimal animations (subtle hover effects only)