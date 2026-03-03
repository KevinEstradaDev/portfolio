# Tailwind CSS SOP
**File:** `tailwind-sop.md`  
**Purpose:** A strict, repeatable Standard Operating Procedure (SOP) for installing, using, customizing, upgrading, and governing Tailwind CSS in a production project (utility-first, CSS-first theme tokens, predictable scanning, and maintainable styling).

---

## 0) Scope & non-goals

### Scope
This SOP covers:
- **Installation (Vite-first)** and general build-tool considerations.
- **Editor and formatting tooling** (IntelliSense + class sorting).
- **Core concepts**: utility-first workflow, variants (state/responsive/dark), theme variables, and safe class detection.
- **Customization**: design tokens via `@theme`, custom CSS via layers, custom variants, and source registration via `@source`.
- **Base styles**: Preflight and overrides.
- **Upgrade playbook**: especially v3 → v4.
- **Governance**: how the team writes CSS/classes, reviews PRs, and avoids regressions.

### Non-goals
- Not a full UI design system spec (typography scale, spacing scale, etc.). This SOP defines **how** to express those decisions in Tailwind.
- Not a component library implementation. It provides the rules for integrating one safely.

---

## 1) Canonical sources

### Getting started
- Installation (Using Vite): https://tailwindcss.com/docs/installation/using-vite
- Editor setup: https://tailwindcss.com/docs/editor-setup
- Compatibility: https://tailwindcss.com/docs/compatibility
- Upgrade guide: https://tailwindcss.com/docs/upgrade-guide

### Core concepts
- Styling with utility classes: https://tailwindcss.com/docs/styling-with-utility-classes
- Hover, focus, and other states: https://tailwindcss.com/docs/hover-focus-and-other-states
- Responsive design: https://tailwindcss.com/docs/responsive-design
- Dark mode: https://tailwindcss.com/docs/dark-mode
- Theme variables: https://tailwindcss.com/docs/theme
- Colors: https://tailwindcss.com/docs/colors
- Adding custom styles: https://tailwindcss.com/docs/adding-custom-styles
- Detecting classes in source files: https://tailwindcss.com/docs/detecting-classes-in-source-files
- Functions and directives: https://tailwindcss.com/docs/functions-and-directives

### Base styles
- Preflight: https://tailwindcss.com/docs/preflight

### Tailwind Plus / UI Blocks (if licensed)
- Marketing blocks: https://tailwindcss.com/plus/ui-blocks/marketing
- Application UI blocks: https://tailwindcss.com/plus/ui-blocks/application-ui
- Ecommerce blocks: https://tailwindcss.com/plus/ui-blocks/ecommerce

### Charting
- ApexCharts (JS): https://github.com/apexcharts/apexcharts.js

> Rule: When in doubt, treat Tailwind’s official docs as the source of truth.

---



## 2) Principles (must-follow)

1. **Utility-first is default**  
   Use Tailwind utilities for almost everything. Add custom CSS only when utilities don’t fit or readability collapses.
2. **Design tokens live in `@theme`**  
   If you’re adding/replacing core palette, typography, radii, shadows, or breakpoints, do it with `@theme` (not ad-hoc magic numbers).
3. **Variants are part of the API**  
   Prefer `hover:*`, `focus-visible:*`, `md:*`, `dark:*`, etc. over separate CSS selectors.
4. **Class detection must be deterministic**  
   Don’t build class strings dynamically. Use maps, `clsx/cva` patterns, or explicit strings so Tailwind can see the classes.
5. **Consistency beats cleverness**  
   Code review rejects unreadable class soup, inconsistent tokens, and non-standard patterns.

---

## 3) Project organization

### 3.1 Recommended file layout (framework-agnostic)
```
src/
  styles/
    app.css                # Tailwind import + @theme tokens + base overrides
    components.css         # Optional: extra component-layer styles
    utilities.css          # Optional: extra utilities-layer styles
  ui/
    button/
      button.tsx
      button.styles.ts     # Optional: class builders (cva/clsx)
  pages-or-routes/
    ...
```

### 3.2 CSS entry rules
- There must be a **single global entry CSS** file (ex: `src/styles/app.css`) imported once by the application.
- All Tailwind customization (`@theme`, `@custom-variant`, `@layer`) should happen in that CSS entry or files imported from it.

---

## 4) Installation (Vite) — standard procedure

Follow the official Vite integration steps:
1. Create a Vite app (if needed).
2. Install:
   - `tailwindcss`
   - `@tailwindcss/vite`
3. Add Tailwind as a Vite plugin.
4. Import Tailwind in your CSS using `@import "tailwindcss";`
5. Run dev server and start using classes.

Reference: https://tailwindcss.com/docs/installation/using-vite

### 4.1 Standard Vite config (TypeScript)
```ts
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### 4.2 Standard CSS entry
```css
/* src/styles/app.css */
@import "tailwindcss";
```

### 4.3 Common pitfalls (avoid)
- Mixing the v3 pattern (`@tailwind base; @tailwind components; @tailwind utilities;`) into a v4 setup.  
  In v4, Tailwind is imported using regular `@import`. See upgrade guide.
- Adding both PostCSS plugin + Vite plugin at the same time (pick the recommended method for your toolchain).

---

## 5) Compatibility requirements

Tailwind v4 is **designed and tested on modern browsers**. Confirm your project’s browser support policy before adopting v4.  
Reference: https://tailwindcss.com/docs/compatibility and https://tailwindcss.com/docs/upgrade-guide

### 5.1 Policy
- If you must support older browsers: **do not upgrade blindly**. Consider staying on the supported Tailwind major version that matches your requirements.
- Don’t rely on bleeding-edge utilities/variants if your target browsers don’t support the underlying CSS feature.

---

## 6) Editor setup & formatting (required)

### 6.1 IntelliSense (required)
Install the official **Tailwind CSS IntelliSense** extension for VS Code (or an editor with equivalent support).  
Reference: https://tailwindcss.com/docs/editor-setup

### 6.2 Class sorting (required in CI)
Use the official **Prettier plugin for Tailwind CSS** to enforce consistent class order.  
Reference: https://tailwindcss.com/docs/editor-setup

**Policy:**
- PRs must not introduce inconsistent class ordering.
- Run formatting on commit (pre-commit hook) and on CI.

---

## 7) Core workflow: how we write Tailwind

### 7.1 Utility-first composition
Use utility classes directly in markup, composing multiple utilities to build the final style.  
Reference: https://tailwindcss.com/docs/styling-with-utility-classes

**Allowed:**
- Multiple classes for one property (Tailwind composes via CSS variables where needed).
- Arbitrary values when truly necessary (and you can’t express it via tokens).

**Avoid:**
- Overuse of arbitrary values (`top-[117px]`) when a token would work.
- “Magic number” arbitrary values without a design reason.

### 7.2 Handling interactive states
Use variants like `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`.  
Reference: https://tailwindcss.com/docs/hover-focus-and-other-states

**Policy:**
- Keyboard focus must be clearly visible (`focus-visible:*` preferred).
- Use stacked variants when needed (ex: `dark:md:hover:*`).

### 7.3 Responsive design (mobile-first)
Use breakpoint variants like `sm:*`, `md:*`, `lg:*`, etc.  
Reference: https://tailwindcss.com/docs/responsive-design

**Policy:**
- Default styles assume mobile.
- Only add breakpoint variants when a layout actually needs it.
- For breakpoint-limited behavior, use `max-*` variants stacked with breakpoints (see docs).

### 7.4 Dark mode
Use `dark:*` utilities, and choose a strategy:
- **System-driven** (via `prefers-color-scheme`), or
- **Manual toggle** by overriding the `dark` variant using `@custom-variant` (recommended for apps that include a theme toggle).

Reference: https://tailwindcss.com/docs/dark-mode

Example (class-based toggle):
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

### 7.5 Theme variables (design tokens)
Define tokens with `@theme` so Tailwind generates corresponding utilities and variants.  
Reference: https://tailwindcss.com/docs/theme and https://tailwindcss.com/docs/functions-and-directives

Example:
```css
@import "tailwindcss";

@theme {
  --color-brand-500: oklch(0.72 0.11 178);
  --radius-card: 1rem;
  --breakpoint-xs: 30rem;
}
```
Then use: `bg-brand-500`, `rounded-card`, and `xs:*` variants in markup.

**Policy:**
- Tokens must be **semantic** when possible (brand/surface/text) rather than purely decorative names.
- Prefer tokens over arbitrary values.
- If you need variables that should NOT create utilities, use regular CSS variables (e.g. `:root`) instead of `@theme`.

### 7.6 Colors
Use official color utilities, and extend/override via theme variables when needed.  
Reference: https://tailwindcss.com/docs/colors and https://tailwindcss.com/docs/theme

**Policy:**
- Use semantic token aliases for app colors where possible (e.g., `--color-surface`, `--color-accent` mapped into a palette/namespace).
- Avoid sprinkling raw palette names everywhere if you have a real design system.

- Avoid sprinkling raw palette names everywhere if you have a real design system.
 
 ### 7.7 Overlay & Modal Behavior
 **Policy:**
 - **Click-Outside:** All modals, command palettes, and overlays MUST close when the user clicks on the backdrop (outside the active content).
 - **Escape Key:** All overlays MUST close when the `Escape` key is pressed.
 - **Close Button:** Visible close buttons must be provided for accessibility.
 
 ---

## 8) Detecting classes reliably (critical)

Tailwind scans source files as plain text, generating CSS only for classes it can find.  
Reference: https://tailwindcss.com/docs/detecting-classes-in-source-files

### 8.1 Hard rule: avoid runtime-computed class names
**Don’t do this:**
```tsx
<div className={`bg-${color}-500`}></div>
```
Tailwind cannot safely detect `bg-${color}-500` because the final string is built at runtime.

**Do this instead (explicit map):**
```tsx
const colors = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  slate: "bg-slate-500",
} as const;

<div className={`${colors[color]} text-white`}></div>
```

### 8.2 Register non-standard sources using `@source`
If you have templates or UI libs that Tailwind doesn’t automatically detect, register them explicitly.  
Reference: https://tailwindcss.com/docs/functions-and-directives

Example:
```css
@import "tailwindcss";
@source "../node_modules/@my-company/ui-lib";
```

### 8.3 “Safelist” strategy (use sparingly)
If you must generate classes based on data, prefer explicit maps. If you can’t, adopt an internal “safelist” pattern by **writing explicit class strings somewhere in a source file** (e.g., a `tailwind.safelist.ts` module) so they are detectable.

---

## 9) Adding custom styles (when utilities aren’t enough)

Reference: https://tailwindcss.com/docs/adding-custom-styles

### 9.1 Decision tree
1. Can a utility already do it? → Use utilities.
2. Can a token solve it? → Add a `@theme` variable and use utilities.
3. Is it a one-off? → Use an arbitrary value.
4. Is it complex/verbose and reused? → Add custom CSS in a Tailwind layer or build a reusable component.

### 9.2 Custom CSS must live in layers
Use `@layer` for custom CSS so ordering remains predictable.

Example:
```css
@import "tailwindcss";

@layer base {
  /* Base element defaults, typography resets, etc. */
}

@layer components {
  /* Reusable component classes (rare) */
}

@layer utilities {
  /* Helper utilities (rare) */
}
```

### 9.3 Use `@variant` in CSS (advanced)
You can apply variants inside CSS for custom rules.  
Reference: https://tailwindcss.com/docs/functions-and-directives

Example:
```css
.my-card {
  background: white;

  @variant dark {
    background: black;
  }
}
```

### 9.4 Custom variants
Use `@custom-variant` to create semantic variants (ex: themes).  
Reference: https://tailwindcss.com/docs/functions-and-directives

---

## 10) Base styles: Preflight

Preflight is Tailwind’s base style reset, designed to normalize behavior and make utilities predictable.  
Reference: https://tailwindcss.com/docs/preflight

### 10.1 Handling third-party library conflicts
Preflight may affect third-party widgets (ex: borders reset). Override preflight selectively using `@layer base`.

Example (scoped override):
```css
@layer base {
  .google-map * {
    border-style: none;
  }
}
```

### 10.2 Policy
- Never disable Preflight globally as a “quick fix.”
- Fix conflicts by **scoping overrides** to the offending widget/container.

---

## 11) Upgrading Tailwind (v3 → v4)

Reference: https://tailwindcss.com/docs/upgrade-guide

### 11.1 Standard upgrade process
1. **Create a new git branch**: `chore/tailwind-upgrade`.
2. Run the official upgrade tool:
   - `npx @tailwindcss/upgrade`
3. Review the diff carefully.
4. Run the full test suite and visual regression checks.
5. Validate browser support policy (v4 requires modern browsers).
6. Ship behind a feature flag if the app is large or high-risk.

### 11.2 Key breaking change reminders (must check)
- v4 uses `@import "tailwindcss";` (v3 `@tailwind ...` directives are removed).
- Tooling plugins can change (PostCSS plugin packaging changed in v4).
- Deprecated utilities removed — you may need replacements.

---

## 12) Team governance: review checklist (Tailwind)

### 12.1 PR checklist (reviewer)
- [ ] Classes are **sorted** (Prettier plugin) and consistent.
- [ ] No runtime-generated Tailwind classes (use explicit maps).
- [ ] New “magic numbers” are justified or converted into tokens via `@theme`.
- [ ] Responsive and dark mode behavior is intentional and tested.
- [ ] Any Preflight overrides are scoped and minimal.
- [ ] Any new tokens are semantically named and documented.

### 12.2 Author checklist (before requesting review)
- [ ] Run formatter and lint.
- [ ] Confirm class detection works (no missing styles).
- [ ] Validate states (hover/focus/disabled), keyboard nav, and contrast.
- [ ] Confirm layout at breakpoints (sm/md/lg) and dark mode if applicable.

---

## 13) Tailwind Plus / UI Blocks usage (optional, licensed)

### 13.1 Allowed use
- Use UI Blocks as **starting points** to accelerate layout and component development.

### 13.2 SOP for adopting a block
1. Copy the block into a local component.
2. Replace hard-coded colors with semantic tokens (or official palette if no design system exists yet).
3. Ensure responsive behavior is intentional (remove unnecessary breakpoint classes).
4. Ensure accessibility: focus-visible styles, labels, semantic HTML.
5. Extract repeated patterns into local UI components.

### 13.3 Reference hubs
- Marketing: https://tailwindcss.com/plus/ui-blocks/marketing
- Application UI: https://tailwindcss.com/plus/ui-blocks/application-ui
- Ecommerce: https://tailwindcss.com/plus/ui-blocks/ecommerce

---

## Appendix A) Utility reference index (quick links)

> This appendix is a **navigation index** (not a reprint of documentation). Use it as a jumping-off point.

### Layout
- aspect-ratio: https://tailwindcss.com/docs/aspect-ratio
- columns: https://tailwindcss.com/docs/columns
- break-after: https://tailwindcss.com/docs/break-after
- break-before: https://tailwindcss.com/docs/break-before
- break-inside: https://tailwindcss.com/docs/break-inside
- box-decoration-break: https://tailwindcss.com/docs/box-decoration-break
- box-sizing: https://tailwindcss.com/docs/box-sizing
- display: https://tailwindcss.com/docs/display
- float: https://tailwindcss.com/docs/float
- clear: https://tailwindcss.com/docs/clear
- isolation: https://tailwindcss.com/docs/isolation
- object-fit: https://tailwindcss.com/docs/object-fit
- object-position: https://tailwindcss.com/docs/object-position
- overflow: https://tailwindcss.com/docs/overflow
- overscroll-behavior: https://tailwindcss.com/docs/overscroll-behavior
- position: https://tailwindcss.com/docs/position
- inset (top/right/bottom/left): https://tailwindcss.com/docs/top-right-bottom-left
- visibility: https://tailwindcss.com/docs/visibility
- z-index: https://tailwindcss.com/docs/z-index

### Flexbox & Grid
- flex-basis: https://tailwindcss.com/docs/flex-basis
- flex-direction: https://tailwindcss.com/docs/flex-direction
- flex-wrap: https://tailwindcss.com/docs/flex-wrap
- flex: https://tailwindcss.com/docs/flex
- flex-grow: https://tailwindcss.com/docs/flex-grow
- flex-shrink: https://tailwindcss.com/docs/flex-shrink
- order: https://tailwindcss.com/docs/order
- grid-template-columns: https://tailwindcss.com/docs/grid-template-columns
- grid-column: https://tailwindcss.com/docs/grid-column
- grid-template-rows: https://tailwindcss.com/docs/grid-template-rows
- grid-row: https://tailwindcss.com/docs/grid-row
- grid-auto-flow: https://tailwindcss.com/docs/grid-auto-flow
- grid-auto-columns: https://tailwindcss.com/docs/grid-auto-columns
- grid-auto-rows: https://tailwindcss.com/docs/grid-auto-rows
- gap: https://tailwindcss.com/docs/gap
- justify-content: https://tailwindcss.com/docs/justify-content
- justify-items: https://tailwindcss.com/docs/justify-items
- justify-self: https://tailwindcss.com/docs/justify-self
- align-content: https://tailwindcss.com/docs/align-content
- align-items: https://tailwindcss.com/docs/align-items
- align-self: https://tailwindcss.com/docs/align-self
- place-content: https://tailwindcss.com/docs/place-content
- place-items: https://tailwindcss.com/docs/place-items
- place-self: https://tailwindcss.com/docs/place-self

### Spacing & Sizing
- padding: https://tailwindcss.com/docs/padding
- margin: https://tailwindcss.com/docs/margin
- width: https://tailwindcss.com/docs/width
- min-width: https://tailwindcss.com/docs/min-width
- max-width: https://tailwindcss.com/docs/max-width
- height: https://tailwindcss.com/docs/height
- min-height: https://tailwindcss.com/docs/min-height
- max-height: https://tailwindcss.com/docs/max-height

### Typography
- font-family: https://tailwindcss.com/docs/font-family
- font-size: https://tailwindcss.com/docs/font-size
- font-smoothing: https://tailwindcss.com/docs/font-smoothing
- font-style: https://tailwindcss.com/docs/font-style
- font-weight: https://tailwindcss.com/docs/font-weight
- font-stretch: https://tailwindcss.com/docs/font-stretch
- font-variant-numeric: https://tailwindcss.com/docs/font-variant-numeric
- letter-spacing: https://tailwindcss.com/docs/letter-spacing
- line-clamp: https://tailwindcss.com/docs/line-clamp
- line-height: https://tailwindcss.com/docs/line-height
- list-style-image: https://tailwindcss.com/docs/list-style-image
- list-style-position: https://tailwindcss.com/docs/list-style-position
- list-style-type: https://tailwindcss.com/docs/list-style-type
- text-align: https://tailwindcss.com/docs/text-align
- color: https://tailwindcss.com/docs/color
- text-decoration-line: https://tailwindcss.com/docs/text-decoration-line
- text-decoration-color: https://tailwindcss.com/docs/text-decoration-color
- text-decoration-style: https://tailwindcss.com/docs/text-decoration-style
- text-decoration-thickness: https://tailwindcss.com/docs/text-decoration-thickness
- text-underline-offset: https://tailwindcss.com/docs/text-underline-offset
- text-transform: https://tailwindcss.com/docs/text-transform
- text-overflow: https://tailwindcss.com/docs/text-overflow
- text-wrap: https://tailwindcss.com/docs/text-wrap
- text-indent: https://tailwindcss.com/docs/text-indent
- vertical-align: https://tailwindcss.com/docs/vertical-align
- white-space: https://tailwindcss.com/docs/white-space
- word-break: https://tailwindcss.com/docs/word-break
- overflow-wrap: https://tailwindcss.com/docs/overflow-wrap
- hyphens: https://tailwindcss.com/docs/hyphens
- content: https://tailwindcss.com/docs/content

### Backgrounds & Borders
- background-attachment: https://tailwindcss.com/docs/background-attachment
- background-clip: https://tailwindcss.com/docs/background-clip
- background-color: https://tailwindcss.com/docs/background-color
- background-image: https://tailwindcss.com/docs/background-image
- background-origin: https://tailwindcss.com/docs/background-origin
- background-position: https://tailwindcss.com/docs/background-position
- background-repeat: https://tailwindcss.com/docs/background-repeat
- background-size: https://tailwindcss.com/docs/background-size
- border-radius: https://tailwindcss.com/docs/border-radius
- border-width: https://tailwindcss.com/docs/border-width
- border-color: https://tailwindcss.com/docs/border-color
- border-style: https://tailwindcss.com/docs/border-style
- outline-width: https://tailwindcss.com/docs/outline-width
- outline-color: https://tailwindcss.com/docs/outline-color
- outline-style: https://tailwindcss.com/docs/outline-style
- outline-offset: https://tailwindcss.com/docs/outline-offset

### Effects, Filters, Transforms, Animation
- box-shadow: https://tailwindcss.com/docs/box-shadow
- text-shadow: https://tailwindcss.com/docs/text-shadow
- opacity: https://tailwindcss.com/docs/opacity
- mix-blend-mode: https://tailwindcss.com/docs/mix-blend-mode
- background-blend-mode: https://tailwindcss.com/docs/background-blend-mode
- mask-clip: https://tailwindcss.com/docs/mask-clip
- mask-composite: https://tailwindcss.com/docs/mask-composite
- mask-image: https://tailwindcss.com/docs/mask-image
- mask-mode: https://tailwindcss.com/docs/mask-mode
- mask-origin: https://tailwindcss.com/docs/mask-origin
- mask-position: https://tailwindcss.com/docs/mask-position
- mask-repeat: https://tailwindcss.com/docs/mask-repeat
- mask-size: https://tailwindcss.com/docs/mask-size
- mask-type: https://tailwindcss.com/docs/mask-type
- filter: https://tailwindcss.com/docs/filter
- blur: https://tailwindcss.com/docs/filter-blur
- brightness: https://tailwindcss.com/docs/filter-brightness
- contrast: https://tailwindcss.com/docs/filter-contrast
- drop-shadow: https://tailwindcss.com/docs/filter-drop-shadow
- grayscale: https://tailwindcss.com/docs/filter-grayscale
- hue-rotate: https://tailwindcss.com/docs/filter-hue-rotate
- invert: https://tailwindcss.com/docs/filter-invert
- saturate: https://tailwindcss.com/docs/filter-saturate
- sepia: https://tailwindcss.com/docs/filter-sepia
- backdrop-filter: https://tailwindcss.com/docs/backdrop-filter
- backdrop blur: https://tailwindcss.com/docs/backdrop-filter-blur
- backdrop brightness: https://tailwindcss.com/docs/backdrop-filter-brightness
- backdrop contrast: https://tailwindcss.com/docs/backdrop-filter-contrast
- backdrop grayscale: https://tailwindcss.com/docs/backdrop-filter-grayscale
- backdrop hue-rotate: https://tailwindcss.com/docs/backdrop-filter-hue-rotate
- backdrop invert: https://tailwindcss.com/docs/backdrop-filter-invert
- backdrop opacity: https://tailwindcss.com/docs/backdrop-filter-opacity
- backdrop saturate: https://tailwindcss.com/docs/backdrop-filter-saturate
- backdrop sepia: https://tailwindcss.com/docs/backdrop-filter-sepia
- transition-property: https://tailwindcss.com/docs/transition-property
- transition-behavior: https://tailwindcss.com/docs/transition-behavior
- transition-duration: https://tailwindcss.com/docs/transition-duration
- transition-timing-function: https://tailwindcss.com/docs/transition-timing-function
- transition-delay: https://tailwindcss.com/docs/transition-delay
- animation: https://tailwindcss.com/docs/animation
- backface-visibility: https://tailwindcss.com/docs/backface-visibility
- perspective: https://tailwindcss.com/docs/perspective
- perspective-origin: https://tailwindcss.com/docs/perspective-origin
- rotate: https://tailwindcss.com/docs/rotate
- scale: https://tailwindcss.com/docs/scale
- skew: https://tailwindcss.com/docs/skew
- transform: https://tailwindcss.com/docs/transform
- transform-origin: https://tailwindcss.com/docs/transform-origin
- transform-style: https://tailwindcss.com/docs/transform-style
- translate: https://tailwindcss.com/docs/translate

### Interactivity, Tables, SVG, Accessibility
- accent-color: https://tailwindcss.com/docs/accent-color
- appearance: https://tailwindcss.com/docs/appearance
- caret-color: https://tailwindcss.com/docs/caret-color
- color-scheme: https://tailwindcss.com/docs/color-scheme
- cursor: https://tailwindcss.com/docs/cursor
- field-sizing: https://tailwindcss.com/docs/field-sizing
- pointer-events: https://tailwindcss.com/docs/pointer-events
- resize: https://tailwindcss.com/docs/resize
- scroll-behavior: https://tailwindcss.com/docs/scroll-behavior
- scroll-margin: https://tailwindcss.com/docs/scroll-margin
- scroll-padding: https://tailwindcss.com/docs/scroll-padding
- scroll-snap-align: https://tailwindcss.com/docs/scroll-snap-align
- scroll-snap-stop: https://tailwindcss.com/docs/scroll-snap-stop
- scroll-snap-type: https://tailwindcss.com/docs/scroll-snap-type
- touch-action: https://tailwindcss.com/docs/touch-action
- user-select: https://tailwindcss.com/docs/user-select
- will-change: https://tailwindcss.com/docs/will-change
- border-collapse: https://tailwindcss.com/docs/border-collapse
- border-spacing: https://tailwindcss.com/docs/border-spacing
- table-layout: https://tailwindcss.com/docs/table-layout
- caption-side: https://tailwindcss.com/docs/caption-side
- fill: https://tailwindcss.com/docs/fill
- stroke: https://tailwindcss.com/docs/stroke
- stroke-width: https://tailwindcss.com/docs/stroke-width
- forced-color-adjust: https://tailwindcss.com/docs/forced-color-adjust
