# UI Component Library Reference — Part 3

A comprehensive guide to UI components 56+ in `src/components/ui/`.

---

## Table of Contents

| # | Component | Category |
|---|-----------|----------|
| 56 | [SidebarNavExpandable](#56-sidebarnavexpandable) | Navigation |
| 57 | [SidebarNavBrand](#57-sidebarnavbrand) | Navigation |
| 58 | [BreadcrumbsContained](#58-breadcrumbscontained) | Navigation |
| 59 | [BreadcrumbsFullWidth](#59-breadcrumbsfullwidth) | Navigation |
| 60 | [BreadcrumbsChevrons](#60-breadcrumbschevrons) | Navigation |
| 61 | [BreadcrumbsSlashes](#61-breadcrumbsslashes) | Navigation |
| 62 | [ProgressBarPanels](#62-progressbarpanels) | Navigation |
| 63 | [ProgressBarSimple](#63-progressbarsimple) | Navigation |
| 64 | [ProgressBarPanelsBorder](#64-progressbarpanelsborder) | Navigation |
| 65 | [ProgressBarCirclesText](#65-progressbarcirclestext) | Navigation |
| 66 | [ProgressBar](#66-progressbar) | Navigation |
| 67 | [CommandPaletteSimple](#67-commandpalettesimple) | Navigation |
| 68 | [CommandPalettePadding](#68-commandpalettepadding) | Navigation |
| 69 | [CommandPaletteFooter](#69-commandpalettefooter) | Navigation |
| 70 | [CommandPaletteTransparent](#70-commandpalettetransparent) | Navigation |
| 71 | [CommandPaletteImages](#71-commandpaletteimages) | Navigation |
| 72 | [CommandPaletteIcons](#72-commandpaletteicons) | Navigation |
| 73 | [ModalDialogGrayFooter](#73-modaldialoggrayfooter) | Overlays |
| 74 | [ModalDialogCenteredSingle](#74-modaldialogcenteredsingle) | Overlays |
| 75 | [ModalDialogCenteredWide](#75-modaldialogcenteredwide) | Overlays |
| 76 | [ModalDialogDismiss](#76-modaldialogdismiss) | Overlays |
| 77 | [DrawerEmpty](#77-drawerempty) | Overlays |
| 78 | [DrawerBrandedHeader](#78-drawerbrandedheader) | Overlays |
| 79 | [DrawerStickyFooter](#79-drawerstickyfooter) | Overlays |
| 80 | [NotificationSimple](#80-notificationsimple) | Overlays |
| 81 | [NotificationCondensed](#81-notificationcondensed) | Overlays |
| 82 | [NotificationActions](#82-notificationactions) | Overlays |
| 83 | [AvatarGroupStacked](#83-avatargroupstacked) | Elements |
| 84 | [AvatarCircular](#84-avatarcircular) | Elements |
| 85 | [AvatarCircularTopNotification](#85-avatarcirculartopnotification) | Elements |
| 86 | [AvatarCircularBottomNotification](#86-avatarcircularbottomnotification) | Elements |

---

## 56. SidebarNavExpandable

**File:** `SidebarNavExpandable.tsx`

**Description:** A light-themed sidebar navigation with collapsible/expandable sub-sections. Primary items with icons can contain `children` sub-items that expand/collapse via HeadlessUI `Disclosure`. A chevron icon rotates 90° on expand. Includes logo, secondary nav with initial-letter indicators, and a settings link at the bottom. Full dark mode support.

**Goal:** Provide a sidebar navigation that supports hierarchical menus — essential for apps with grouped or nested sections.

**Where to use it:**
- Admin dashboards with nested menu sections
- Project management tools (teams → sub-teams)
- Content management systems (categories → sub-categories)
- Any app requiring collapsible sidebar navigation

**How to use it:**

```tsx
import SidebarNavExpandable from '@/components/ui/navigation/SidebarNavExpandable';
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

<div className="h-screen w-72">
  <SidebarNavExpandable
    items={[
      { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
      {
        name: 'Teams',
        icon: UsersIcon,
        children: [
          { name: 'Engineering', href: '#' },
          { name: 'Human Resources', href: '#' },
        ],
      },
    ]}
    onChange={(name) => console.log('nav:', name)}
    onSettingsClick={() => console.log('settings')}
  />
</div>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItemExpandable[]` | No | Primary nav items (`{ name, href?, icon?, current?, children? }`) |
| `secondaryItems` | `SecondaryNavItem[]` | No | Secondary items with initials |
| `secondaryTitle` | `string` | No | Secondary section label (defaults to `'Your teams'`) |
| `logoSrc` | `string` | No | Logo image URL |
| `logoAlt` | `string` | No | Logo alt text |
| `settingsLabel` | `string` | No | Settings link text (defaults to `'Settings'`) |
| `profileName` | `string` | No | Profile display name |
| `profileImageUrl` | `string` | No | Profile avatar URL |
| `defaultActive` | `string` | No | Initially active item name |
| `onChange` | `(itemName: string) => void` | No | Nav item click callback |
| `onSettingsClick` | `() => void` | No | Settings click callback |

---

## 57. SidebarNavBrand

**File:** `SidebarNavBrand.tsx`

**Description:** A brand-colored sidebar navigation with indigo (`bg-indigo-600`) background. Same structure as other sidebar navs: logo, primary icon nav, secondary nav with initials, and settings link. Active items use `bg-indigo-700` with white text; inactive items use `text-indigo-200` with hover transitions. Secondary initials use `bg-indigo-700` with indigo-light borders.

**Goal:** Provide a vibrant, brand-themed sidebar for applications that want their primary brand color as the sidebar background.

**Where to use it:**
- Branded SaaS applications
- Marketing dashboards
- Product admin panels with strong brand identity
- Any app wanting a branded sidebar

**How to use it:**

```tsx
import SidebarNavBrand from '@/components/ui/navigation/SidebarNavBrand';

<div className="h-screen w-72">
  <SidebarNavBrand
    onChange={(name) => console.log('nav:', name)}
    onSettingsClick={() => console.log('settings')}
  />
</div>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItemWithIcon[]` | No | Primary nav items with icons |
| `secondaryItems` | `SecondaryNavItem[]` | No | Secondary items with initials |
| `secondaryTitle` | `string` | No | Secondary section label (defaults to `'Your teams'`) |
| `logoSrc` | `string` | No | Logo image URL |
| `logoAlt` | `string` | No | Logo alt text |
| `settingsLabel` | `string` | No | Settings link text (defaults to `'Settings'`) |
| `profileName` | `string` | No | Profile display name |
| `profileImageUrl` | `string` | No | Profile avatar URL |
| `defaultActive` | `string` | No | Initially active item name |
| `onChange` | `(itemName: string) => void` | No | Nav item click callback |
| `onSettingsClick` | `() => void` | No | Settings click callback |

---

## 58. BreadcrumbsContained

**File:** `BreadcrumbsContained.tsx`

**Description:** A breadcrumb navigation inside a rounded card with border, shadow, and padding. Starts with a home icon, followed by chevron-right separators between breadcrumb items. The last item is styled as the current page with `aria-current="page"`. Full dark mode support.

**Goal:** Provide a contained, card-style breadcrumb that works well within dashboard layouts and content pages.

**Where to use it:**
- Dashboard page headers
- Detail pages with navigation context
- Admin panels with section hierarchy
- Any page needing contained breadcrumb navigation

**How to use it:**

```tsx
import BreadcrumbsContained from '@/components/ui/navigation/BreadcrumbsContained';

<BreadcrumbsContained
  items={[
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Project Nero', href: '/projects/nero', current: true },
  ]}
  onNavigate={(name) => console.log('navigate:', name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `BreadcrumbItem[]` | No | Breadcrumb items (`{ name, href?, current? }`) |
| `showHome` | `boolean` | No | Show home icon (defaults to `true`) |
| `homeHref` | `string` | No | Home link URL (defaults to `'#'`) |
| `onNavigate` | `(name: string) => void` | No | Navigation callback |

---

## 59. BreadcrumbsFullWidth

**File:** `BreadcrumbsFullWidth.tsx`

**Description:** A full-width breadcrumb bar with `border-b` and `border-t` — no card or rounded container. Uses a home icon first, followed by angled SVG separators and breadcrumb item links. Full dark mode support.

**Goal:** Provide a full-width breadcrumb bar that spans the entire container — ideal for page-level navigation strips.

**Where to use it:**
- Full-width page layouts
- Content management headers
- E-commerce category navigation
- Any layout needing a full-width breadcrumb strip

**How to use it:**

```tsx
import BreadcrumbsFullWidth from '@/components/ui/navigation/BreadcrumbsFullWidth';

<BreadcrumbsFullWidth
  items={[
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Project Nero', href: '/projects/nero', current: true },
  ]}
  onNavigate={(name) => console.log('navigate:', name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `BreadcrumbItem[]` | No | Breadcrumb items (`{ name, href?, current? }`) |
| `showHome` | `boolean` | No | Show home icon (defaults to `true`) |
| `homeHref` | `string` | No | Home link URL (defaults to `'#'`) |
| `onNavigate` | `(name: string) => void` | No | Navigation callback |

---

## 60. BreadcrumbsChevrons

**File:** `BreadcrumbsChevrons.tsx`

**Description:** The simplest breadcrumb variant — inline text links separated by chevron-right icons. No container, no card, no home icon. Just clean, minimal breadcrumb navigation with dark mode support.

**Goal:** Provide a minimal, unstyled breadcrumb for use in tight layouts or when a container isn't needed.

**Where to use it:**
- Inline page headers
- Minimal layouts
- Settings or profile pages
- Any context needing lightweight breadcrumb navigation

**How to use it:**

```tsx
import BreadcrumbsChevrons from '@/components/ui/navigation/BreadcrumbsChevrons';

<BreadcrumbsChevrons
  items={[
    { name: 'Home', href: '/', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Project Nero', href: '/projects/nero', current: true },
  ]}
  onNavigate={(name) => console.log('navigate:', name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `BreadcrumbItem[]` | No | Breadcrumb items (`{ name, href?, current? }`) |
| `onNavigate` | `(name: string) => void` | No | Navigation callback |

---

## 61. BreadcrumbsSlashes

**File:** `BreadcrumbsSlashes.tsx`

**Description:** Breadcrumb navigation with `/` text separators instead of chevron icons. Same minimal structure as BreadcrumbsChevrons — no container, no home icon. Clean inline links with slash dividers and dark mode support.

**Goal:** Provide a minimal breadcrumb variant using slashes as separators for a more traditional look.

**Where to use it:**
- File-system or path-based navigation contexts
- Developer tools and admin panels
- Settings and configuration pages
- Any context where slash separators feel natural

**How to use it:**

```tsx
import BreadcrumbsSlashes from '@/components/ui/navigation/BreadcrumbsSlashes';

<BreadcrumbsSlashes
  items={[
    { name: 'Home', href: '/', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Project Nero', href: '/projects/nero', current: true },
  ]}
  onNavigate={(name) => console.log('navigate:', name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `BreadcrumbItem[]` | No | Breadcrumb items (`{ name, href?, current? }`) |
| `onNavigate` | `(name: string) => void` | No | Navigation callback |

---

## 62. ProgressBarPanels

**File:** `ProgressBarPanels.tsx`

**Description:** Horizontal step progress using arrow-shaped panels with SVG chevron separators between steps. Complete steps show a filled indigo circle with checkmark, current step shows an indigo-bordered circle with step number, and upcoming steps show gray-bordered circles. Responsive — stacks vertically on mobile with dividers, panels side-by-side on `md:`. Dark mode support.

**Goal:** Provide a panel-style step indicator for multi-step workflows with clear visual progression.

**Where to use it:**
- Multi-step forms and wizards
- Checkout/payment flows
- Onboarding processes
- Job posting or content publishing pipelines

**How to use it:**

```tsx
import ProgressBarPanels from '@/components/ui/navigation/ProgressBarPanels';

<ProgressBarPanels
  steps={[
    { id: '01', name: 'Job details', href: '#', status: 'complete' },
    { id: '02', name: 'Application form', href: '#', status: 'current' },
    { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
  ]}
  onStepClick={(stepId) => console.log('step:', stepId)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `steps` | `Step[]` | No | Steps (`{ id, name, href?, status }`) where status is `'complete' \| 'current' \| 'upcoming'` |
| `onStepClick` | `(stepId: string) => void` | No | Step click callback |

---

## 63. ProgressBarSimple

**File:** `ProgressBarSimple.tsx`

**Description:** Simple step progress with numbered circles connected by horizontal lines. Complete steps show a filled indigo circle with checkmark, the current step shows an indigo ring with a center dot, and upcoming steps show gray-bordered circles. Minimal and compact. Dark mode support.

**Goal:** Provide a minimal dot-and-line step indicator — ideal when step labels aren't needed inline.

**Where to use it:**
- Compact multi-step forms
- Image upload or media processing pipelines
- Tutorial or walkthrough progress
- Any flow needing step indicators without labels

**How to use it:**

```tsx
import ProgressBarSimple from '@/components/ui/navigation/ProgressBarSimple';

<ProgressBarSimple
  steps={[
    { id: '01', name: 'Details', href: '#', status: 'complete' },
    { id: '02', name: 'Address', href: '#', status: 'current' },
    { id: '03', name: 'Payment', href: '#', status: 'upcoming' },
  ]}
  onStepClick={(stepId) => console.log('step:', stepId)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `steps` | `Step[]` | No | Steps (`{ id, name, href?, status }`) |
| `onStepClick` | `(stepId: string) => void` | No | Step click callback |

---

## 64. ProgressBarPanelsBorder

**File:** `ProgressBarPanelsBorder.tsx`

**Description:** Bordered panel step progress with a left/bottom accent stripe indicating status. Complete steps have an indigo checkmark circle, current steps show an indigo-bordered number circle with a solid indigo accent bar, and upcoming steps are gray. Includes optional description text per step. Responsive — stacks vertically on mobile, horizontal panels on `lg:`. Dark mode support.

**Goal:** Provide a detailed, bordered step indicator with descriptions and accent highlights for each step.

**Where to use it:**
- Complex multi-step wizards with step descriptions
- Onboarding flows with explanations per phase
- Application/review processes
- Any multi-step flow needing detailed step context

**How to use it:**

```tsx
import ProgressBarPanelsBorder from '@/components/ui/navigation/ProgressBarPanelsBorder';

<ProgressBarPanelsBorder
  steps={[
    { id: '01', name: 'Details', description: 'Enter your details.', href: '#', status: 'complete' },
    { id: '02', name: 'Address', description: 'Where do you live?', href: '#', status: 'current' },
    { id: '03', name: 'Payment', description: 'Add payment info.', href: '#', status: 'upcoming' },
  ]}
  onStepClick={(stepId) => console.log('step:', stepId)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `steps` | `Step[]` | No | Steps (`{ id, name, description?, href?, status }`) |
| `onStepClick` | `(stepId: string) => void` | No | Step click callback |

---

## 65. ProgressBarCirclesText

**File:** `ProgressBarCirclesText.tsx`

**Description:** Vertical step progress with circle indicators, step labels, and optional descriptions. Steps are connected by vertical lines. Complete steps use a filled indigo checkmark circle, the current step shows an indigo ring with center dot, and upcoming steps show gray circles. Dark mode support.

**Goal:** Provide a vertical step list with full text labels — ideal for sidebar or drawer-based progress.

**Where to use it:**
- Account setup or onboarding flows
- Sidebar step trackers
- Order fulfillment status views
- Any vertical multi-step navigation

**How to use it:**

```tsx
import ProgressBarCirclesText from '@/components/ui/navigation/ProgressBarCirclesText';

<ProgressBarCirclesText
  steps={[
    { id: '01', name: 'Create account', description: 'Set up your credentials.', href: '#', status: 'complete' },
    { id: '02', name: 'Profile info', description: 'Tell us about yourself.', href: '#', status: 'current' },
    { id: '03', name: 'Theme', description: 'Pick your look.', href: '#', status: 'upcoming' },
  ]}
  onStepClick={(stepId) => console.log('step:', stepId)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `steps` | `Step[]` | No | Steps (`{ id, name, description?, href?, status }`) |
| `onStepClick` | `(stepId: string) => void` | No | Step click callback |

---

## 66. ProgressBar

**File:** `ProgressBar.tsx`

**Description:** A simple horizontal fill progress bar showing percentage completion. Displays an optional label above the bar and a percentage indicator. The bar uses an indigo fill on a gray track with smooth transition animation. Full dark mode support and proper ARIA `progressbar` role.

**Goal:** Provide a straightforward progress bar for showing completion percentages.

**Where to use it:**
- File upload progress indicators
- Task or goal completion trackers
- Profile completeness meters
- Loading states and data processing feedback

**How to use it:**

```tsx
import ProgressBar from '@/components/ui/navigation/ProgressBar';

<ProgressBar progress={65} label="Uploading..." />
<ProgressBar progress={100} label="Complete" />
<ProgressBar progress={30} showPercentage={false} />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `progress` | `number` | No | Progress value 0–100 (defaults to `50`) |
| `label` | `string` | No | Label displayed above the bar |
| `showPercentage` | `boolean` | No | Show percentage text (defaults to `true`) |

---

## 67. CommandPaletteSimple

**File:** `CommandPaletteSimple.tsx`

**Description:** A simple command palette overlay using HeadlessUI `Dialog` + `Combobox`. Full-screen backdrop with a centered search panel. Type-ahead filtering on a flat list of names. No padding around results, no footer. Closes on backdrop click and Escape. Full dark mode support.

**Goal:** Provide a minimal, keyboard-driven command palette for quick item lookup.

**Where to use it:**
- Global search triggered by `⌘K` / `Ctrl+K`
- Quick-switch menus for pages or actions
- User lookup in admin panels
- Any context needing a fast search overlay

**How to use it:**

```tsx
import CommandPaletteSimple from '@/components/ui/navigation/CommandPaletteSimple';

<CommandPaletteSimple
  open={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: 1, name: 'Leslie Alexander' },
    { id: 2, name: 'Michael Foster' },
  ]}
  onSelect={(item) => console.log('selected:', item)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the palette is open (defaults to `true`) |
| `onClose` | `() => void` | No | Close callback |
| `items` | `CommandItem[]` | No | Items (`{ id, name }`) |
| `onSelect` | `(item: CommandItem) => void` | No | Item selection callback |
| `placeholder` | `string` | No | Search input placeholder (defaults to `'Search...'`) |

---

## 68. CommandPalettePadding

**File:** `CommandPalettePadding.tsx`

**Description:** Same as CommandPaletteSimple but with `p-2` padding around the results list and `rounded-md` on each result item for a more spacious, polished feel. Dark mode support.

**Goal:** Provide a padded command palette variant with gentler visual density.

**Where to use it:**
- Same use cases as Simple, when more whitespace is desired
- Design-oriented applications
- Settings or configuration search

**How to use it:**

```tsx
import CommandPalettePadding from '@/components/ui/navigation/CommandPalettePadding';

<CommandPalettePadding
  open={isOpen}
  onClose={() => setIsOpen(false)}
  onSelect={(item) => console.log('selected:', item)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the palette is open (defaults to `true`) |
| `onClose` | `() => void` | No | Close callback |
| `items` | `CommandItem[]` | No | Items (`{ id, name }`) |
| `onSelect` | `(item: CommandItem) => void` | No | Item selection callback |
| `placeholder` | `string` | No | Search input placeholder (defaults to `'Search...'`) |

---

## 69. CommandPaletteFooter

**File:** `CommandPaletteFooter.tsx`

**Description:** Command palette with a footer bar showing keyboard shortcut hints (`#` for projects, `>` for commands, `?` for help). Results include optional category labels. Dark mode support.

**Goal:** Provide a command palette with inline keyboard guidance for power users.

**Where to use it:**
- Power-user applications (IDEs, project managers)
- Apps with multiple search contexts (projects, commands, help)
- Any palette benefiting from discoverability hints

**How to use it:**

```tsx
import CommandPaletteFooter from '@/components/ui/navigation/CommandPaletteFooter';

<CommandPaletteFooter
  open={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: 1, name: 'Workflow Inc.', category: 'Clients' },
    { id: 2, name: 'Quarterly planning', category: 'Events' },
  ]}
  onSelect={(item) => console.log('selected:', item)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the palette is open (defaults to `true`) |
| `onClose` | `() => void` | No | Close callback |
| `items` | `CommandItem[]` | No | Items (`{ id, name, category?, url? }`) |
| `onSelect` | `(item: CommandItem) => void` | No | Item selection callback |
| `placeholder` | `string` | No | Search input placeholder (defaults to `'Search...'`) |

---

## 70. CommandPaletteTransparent

**File:** `CommandPaletteTransparent.tsx`

**Description:** Semi-transparent command palette with a lighter backdrop (`bg-gray-500/25`), glassmorphism panel (`bg-white/80 backdrop-blur-xl`), and colored icon indicators per item. Dark mode support.

**Goal:** Provide a visually striking, translucent command palette with icon-based categorization.

**Where to use it:**
- Design-forward applications
- Category-based quick navigation
- Creative tools and dashboards
- Any context where a glass-style overlay fits

**How to use it:**

```tsx
import CommandPaletteTransparent from '@/components/ui/navigation/CommandPaletteTransparent';
import { FolderIcon } from '@heroicons/react/24/outline';

<CommandPaletteTransparent
  open={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: 1, name: 'Projects', icon: FolderIcon, iconColor: 'text-indigo-500' },
  ]}
  onSelect={(item) => console.log('selected:', item)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the palette is open (defaults to `true`) |
| `onClose` | `() => void` | No | Close callback |
| `items` | `CommandItem[]` | No | Items (`{ id, name, icon?, iconColor? }`) |
| `onSelect` | `(item: CommandItem) => void` | No | Item selection callback |
| `placeholder` | `string` | No | Search input placeholder (defaults to `'Search...'`) |

---

## 71. CommandPaletteImages

**File:** `CommandPaletteImages.tsx`

**Description:** Command palette where each result shows a circular avatar image, name, and optional description/subtitle. Ideal for people-search scenarios. Dark mode support.

**Goal:** Provide a rich command palette for searching people or entities with images.

**Where to use it:**
- Team member search
- Contact/user lookup
- Assignee pickers
- Any palette where visual identity aids recognition

**How to use it:**

```tsx
import CommandPaletteImages from '@/components/ui/navigation/CommandPaletteImages';

<CommandPaletteImages
  open={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: 1, name: 'Leslie Alexander', description: 'CEO', imageUrl: '/avatar.jpg' },
  ]}
  onSelect={(item) => console.log('selected:', item)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the palette is open (defaults to `true`) |
| `onClose` | `() => void` | No | Close callback |
| `items` | `CommandItem[]` | No | Items (`{ id, name, description?, imageUrl? }`) |
| `onSelect` | `(item: CommandItem) => void` | No | Item selection callback |
| `placeholder` | `string` | No | Search input placeholder (defaults to `'Search...'`) |

---

## 72. CommandPaletteIcons

**File:** `CommandPaletteIcons.tsx`

**Description:** Command palette with an outline icon next to each result item name. Icons change to white on focus. Clean, minimal design. Dark mode support.

**Goal:** Provide an icon-enhanced command palette for action/content-type search.

**Where to use it:**
- "Create new…" action menus
- Content type selectors (text, calendar, photo, etc.)
- Tool pickers
- Any palette where icons clarify item types

**How to use it:**

```tsx
import CommandPaletteIcons from '@/components/ui/navigation/CommandPaletteIcons';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

<CommandPaletteIcons
  open={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: 1, name: 'Text', icon: DocumentTextIcon },
  ]}
  onSelect={(item) => console.log('selected:', item)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the palette is open (defaults to `true`) |
| `onClose` | `() => void` | No | Close callback |
| `items` | `CommandItem[]` | No | Items (`{ id, name, icon? }`) |
| `onSelect` | `(item: CommandItem) => void` | No | Item selection callback |
| `placeholder` | `string` | No | Search input placeholder (defaults to `'Search...'`) |

---

## 73. ModalDialogGrayFooter

**File:** `ModalDialogGrayFooter.tsx`

**Description:** A modal dialog with a centered panel, warning icon (customizable), title, description, and a gray-background footer with Cancel and primary action buttons. Uses HeadlessUI `Dialog` with backdrop. Close button in the top-right corner. Closes on backdrop click and Escape. Full dark mode support.

**Goal:** Provide a standard confirmation/alert dialog with a visually distinct footer area.

**Where to use it:**
- Destructive action confirmations (delete, deactivate)
- Important decision prompts
- Alert dialogs requiring user acknowledgment
- Any modal needing clear primary/cancel actions

**How to use it:**

```tsx
import ModalDialogGrayFooter from '@/components/ui/overlays/ModalDialogGrayFooter';

<ModalDialogGrayFooter
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Deactivate account"
  description="Are you sure you want to deactivate your account?"
  primaryLabel="Deactivate"
  onPrimary={() => console.log('confirmed')}
  onCancel={() => console.log('cancelled')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the dialog is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `icon` | `React.ReactNode` | No | Custom icon (defaults to warning triangle) |
| `title` | `string` | No | Dialog title (defaults to `'Deactivate account'`) |
| `description` | `string` | No | Body text |
| `primaryLabel` | `string` | No | Primary button text (defaults to `'Deactivate'`) |
| `cancelLabel` | `string` | No | Cancel button text (defaults to `'Cancel'`) |
| `onPrimary` | `() => void` | No | Primary action callback |
| `onCancel` | `() => void` | No | Cancel action callback |

---

## 74. ModalDialogCenteredSingle

**File:** `ModalDialogCenteredSingle.tsx`

**Description:** A centered modal dialog with a green checkmark icon, title, description, and a single full-width primary action button. No cancel button, no gray footer. Uses HeadlessUI `Dialog` with backdrop and transitions. Closes on backdrop click and Escape. Full dark mode support.

**Goal:** Provide a success-oriented confirmation dialog with a single call-to-action.

**Where to use it:**
- Payment success confirmations
- Task completion acknowledgments
- Single-action alerts (e.g., "Got it" / "Continue")
- Any modal needing one clear action

**How to use it:**

```tsx
import ModalDialogCenteredSingle from '@/components/ui/overlays/ModalDialogCenteredSingle';

<ModalDialogCenteredSingle
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Payment successful"
  description="Your payment has been processed."
  primaryLabel="Go back to dashboard"
  onPrimary={() => console.log('confirmed')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the dialog is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `icon` | `React.ReactNode` | No | Custom icon (defaults to green checkmark) |
| `title` | `string` | No | Dialog title (defaults to `'Payment successful'`) |
| `description` | `string` | No | Body text |
| `primaryLabel` | `string` | No | Primary button text (defaults to `'Go back to dashboard'`) |
| `onPrimary` | `() => void` | No | Primary action callback |

---

## 75. ModalDialogCenteredWide

**File:** `ModalDialogCenteredWide.tsx`

**Description:** A centered modal dialog with a green checkmark icon, title, description, and two wide buttons arranged in a 2-column grid (primary right, cancel left). Uses HeadlessUI `Dialog` with backdrop and transitions. Closes on backdrop click and Escape. Full dark mode support.

**Goal:** Provide a centered confirmation dialog with two equally prominent action buttons.

**Where to use it:**
- Confirmations requiring explicit accept/reject
- Feature activation prompts
- Plan upgrade dialogs
- Any modal needing two equally weighted options

**How to use it:**

```tsx
import ModalDialogCenteredWide from '@/components/ui/overlays/ModalDialogCenteredWide';

<ModalDialogCenteredWide
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Payment successful"
  description="Your payment has been processed."
  primaryLabel="Continue"
  cancelLabel="Go back"
  onPrimary={() => console.log('confirmed')}
  onCancel={() => console.log('cancelled')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the dialog is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `icon` | `React.ReactNode` | No | Custom icon (defaults to green checkmark) |
| `title` | `string` | No | Dialog title (defaults to `'Payment successful'`) |
| `description` | `string` | No | Body text |
| `primaryLabel` | `string` | No | Primary button text (defaults to `'Deactivate'`) |
| `cancelLabel` | `string` | No | Cancel button text (defaults to `'Cancel'`) |
| `onPrimary` | `() => void` | No | Primary action callback |
| `onCancel` | `() => void` | No | Cancel action callback |

---

## 76. ModalDialogDismiss

**File:** `ModalDialogDismiss.tsx`

**Description:** A modal dialog with left-aligned icon (green checkmark circle), right-aligned title and description, a dismiss X button in the top-right corner, and inline primary/cancel buttons in the footer (no gray background). Uses HeadlessUI `Dialog` with backdrop and transitions. Closes on backdrop click, Escape, and dismiss button. Full dark mode support.

**Goal:** Provide a standard alert/confirmation dialog with a visible dismiss button for quick closure.

**Where to use it:**
- Action confirmations with dismiss option
- Order completion alerts
- Destructive action warnings
- Any modal where a prominent dismiss control is desired

**How to use it:**

```tsx
import ModalDialogDismiss from '@/components/ui/overlays/ModalDialogDismiss';

<ModalDialogDismiss
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Order completed"
  description="Your order has been placed."
  primaryLabel="View order"
  cancelLabel="Close"
  onPrimary={() => console.log('view')}
  onCancel={() => console.log('closed')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the dialog is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `icon` | `React.ReactNode` | No | Custom icon (defaults to green check circle) |
| `title` | `string` | No | Dialog title (defaults to `'Order completed'`) |
| `description` | `string` | No | Body text |
| `primaryLabel` | `string` | No | Primary button text (defaults to `'Deactivate'`) |
| `cancelLabel` | `string` | No | Cancel button text (defaults to `'Cancel'`) |
| `onPrimary` | `() => void` | No | Primary action callback |
| `onCancel` | `() => void` | No | Cancel action callback |

---

## 77. DrawerEmpty

**File:** `DrawerEmpty.tsx`

**Description:** A right-side slide-over drawer panel with a header (title + close button) and an empty content area. Uses HeadlessUI `Dialog` with backdrop and slide-in/out transition from the right edge. Closes on backdrop click, Escape, and close button. Full dark mode support.

**Goal:** Provide a generic, empty drawer shell for custom content — the simplest starting point for slide-over panels.

**Where to use it:**
- Detail panels for list items
- Quick-view sidebars
- Settings or configuration panels
- Any slide-over needing custom content

**How to use it:**

```tsx
import DrawerEmpty from '@/components/ui/overlays/DrawerEmpty';

<DrawerEmpty
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Panel title"
>
  <p>Your custom content here.</p>
</DrawerEmpty>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the drawer is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `title` | `string` | No | Header title (defaults to `'Panel title'`) |
| `children` | `React.ReactNode` | No | Content rendered in the drawer body |

---

## 78. DrawerBrandedHeader

**File:** `DrawerBrandedHeader.tsx`

**Description:** A right-side slide-over drawer with an indigo-branded header (`bg-indigo-700`), white title text, subtitle, and white close button. Below the header is a white scrollable content area. Uses HeadlessUI `Dialog` with backdrop and slide-in/out transition. Closes on backdrop click, Escape, and close button. Full dark mode support.

**Goal:** Provide a branded drawer for creating/editing flows where the header reinforces brand identity.

**Where to use it:**
- Project creation forms
- Branded editing panels
- Onboarding or setup flows
- Any drawer needing a distinctive branded header

**How to use it:**

```tsx
import DrawerBrandedHeader from '@/components/ui/overlays/DrawerBrandedHeader';

<DrawerBrandedHeader
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="New Project"
  subtitle="Get started by filling in the information below."
>
  <p>Form fields here.</p>
</DrawerBrandedHeader>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the drawer is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `title` | `string` | No | Header title (defaults to `'Panel title'`) |
| `subtitle` | `string` | No | Header subtitle text |
| `children` | `React.ReactNode` | No | Content rendered in the scrollable body |

---

## 79. DrawerStickyFooter

**File:** `DrawerStickyFooter.tsx`

**Description:** A right-side slide-over drawer with a header (title + close button), scrollable content area, and a sticky footer with Cancel and Save buttons separated by a top border. The footer stays pinned at the bottom regardless of content scroll. Uses HeadlessUI `Dialog` with backdrop and slide-in/out transition. Closes on backdrop click, Escape, and close button. Full dark mode support.

**Goal:** Provide a drawer with persistent action buttons — ideal for forms that scroll beyond the viewport.

**Where to use it:**
- Long forms in slide-over panels
- Editing drawers with save/cancel actions
- Configuration panels with apply/discard
- Any drawer needing persistent footer actions

**How to use it:**

```tsx
import DrawerStickyFooter from '@/components/ui/overlays/DrawerStickyFooter';

<DrawerStickyFooter
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  saveLabel="Save changes"
  cancelLabel="Discard"
  onSave={() => console.log('saved')}
  onCancel={() => console.log('cancelled')}
>
  <p>Scrollable form content here.</p>
</DrawerStickyFooter>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | No | Whether the drawer is open (defaults to internal state) |
| `onClose` | `() => void` | No | Close callback |
| `title` | `string` | No | Header title (defaults to `'Panel title'`) |
| `children` | `React.ReactNode` | No | Content rendered in the scrollable body |
| `saveLabel` | `string` | No | Save button text (defaults to `'Save'`) |
| `cancelLabel` | `string` | No | Cancel button text (defaults to `'Cancel'`) |
| `onSave` | `() => void` | No | Save action callback |
| `onCancel` | `() => void` | No | Cancel action callback |

---

## 80. NotificationSimple

**File:** `NotificationSimple.tsx`

**Description:** A simple toast notification positioned in the top-right corner with a green checkmark icon, title, message, and close button. Uses HeadlessUI `Transition` for slide-in animation. Auto-dismisses after a configurable duration (default 5 seconds). Can also be dismissed manually via the close button. Full dark mode support.

**Goal:** Provide a lightweight, non-blocking notification toast for success messages and general alerts.

**Where to use it:**
- Form submission success feedback
- File save/upload confirmations
- Background task completion alerts
- Any transient status message

**How to use it:**

```tsx
import NotificationSimple from '@/components/ui/overlays/NotificationSimple';

<NotificationSimple
  show={showNotification}
  onDismiss={() => setShowNotification(false)}
  title="Successfully saved!"
  description="Anyone with a link can now view this file."
  autoDismissMs={5000}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `show` | `boolean` | No | Whether the notification is shown (defaults to internal state) |
| `onDismiss` | `() => void` | No | Dismiss callback |
| `icon` | `React.ReactNode` | No | Custom icon (defaults to green check circle) |
| `title` | `string` | No | Notification title (defaults to `'Successfully saved!'`) |
| `description` | `string` | No | Body text |
| `autoDismissMs` | `number` | No | Auto-dismiss delay in ms (defaults to `5000`, `0` to disable) |

---

## 81. NotificationCondensed

**File:** `NotificationCondensed.tsx`

**Description:** A condensed, single-line toast notification with an inline action link (e.g., "Undo") and a close button. No icon, no separate title/description — just a compact message with optional action. Same positioning, transition, and auto-dismiss pattern as NotificationSimple. Full dark mode support.

**Goal:** Provide a minimal, space-efficient toast for brief status messages with optional inline actions.

**Where to use it:**
- Quick "undo" confirmations after destructive actions
- Brief status updates (saved, deleted, archived)
- Transient feedback where a full notification is overkill
- Any context needing a compact, single-line toast

**How to use it:**

```tsx
import NotificationCondensed from '@/components/ui/overlays/NotificationCondensed';

<NotificationCondensed
  show={showNotification}
  onDismiss={() => setShowNotification(false)}
  message="Discussion moved."
  actionLabel="Undo"
  onAction={() => console.log('undo')}
  autoDismissMs={5000}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `show` | `boolean` | No | Whether the notification is shown (defaults to internal state) |
| `onDismiss` | `() => void` | No | Dismiss callback |
| `message` | `string` | No | Single-line message text (defaults to `'Successfully saved!'`) |
| `actionLabel` | `string` | No | Action link text (defaults to `'Undo'`) |
| `onAction` | `() => void` | No | Action link click callback |
| `autoDismissMs` | `number` | No | Auto-dismiss delay in ms (defaults to `5000`, `0` to disable) |

---

## 82. NotificationActions

**File:** `NotificationActions.tsx`

**Description:** A toast notification with a green checkmark icon (customizable), title, description, and two action buttons below the text (e.g., "Undo" / "Dismiss"). Includes a close X button. Same HeadlessUI Transition, positioning, and auto-dismiss pattern as NotificationSimple. Full dark mode support.

**Goal:** Provide a notification toast with inline action buttons for interactive responses.

**Where to use it:**
- Invitation or request notifications (accept/decline)
- Undo confirmations with an explicit dismiss option
- Discussion or content move notifications
- Any toast needing two quick-response actions

**How to use it:**

```tsx
import NotificationActions from '@/components/ui/overlays/NotificationActions';

<NotificationActions
  show={showNotification}
  onDismiss={() => setShowNotification(false)}
  title="Discussion moved"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
  primaryLabel="Undo"
  secondaryLabel="Dismiss"
  onPrimary={() => console.log('undo')}
  onSecondary={() => console.log('dismissed')}
  autoDismissMs={5000}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `show` | `boolean` | No | Whether the notification is shown (defaults to internal state) |
| `onDismiss` | `() => void` | No | Dismiss callback |
| `icon` | `React.ReactNode` | No | Custom icon (defaults to green check circle) |
| `title` | `string` | No | Notification title (defaults to `'Discussion moved'`) |
| `description` | `string` | No | Body text |
| `primaryLabel` | `string` | No | Primary action button text (defaults to `'Undo'`) |
| `secondaryLabel` | `string` | No | Secondary action button text (defaults to `'Dismiss'`) |
| `onPrimary` | `() => void` | No | Primary action callback |
| `onSecondary` | `() => void` | No | Secondary action callback |
| `autoDismissMs` | `number` | No | Auto-dismiss delay in ms (defaults to `5000`, `0` to disable) |

---

## 83. AvatarGroupStacked

**File:** `AvatarGroupStacked.tsx`

**Description:** A row of circular avatar images overlapping each other (stacked bottom-to-top) using negative margin (`-space-x-2`) and white ring borders. Configurable size via a `size` prop (`xs` through `xl`). Supports a `maxDisplay` prop to limit visible avatars with a "+N" overflow indicator. Uses `next/image` for optimization. Dark mode support with `ring-gray-900`.

**Goal:** Provide a compact avatar group for showing multiple users in a minimal horizontal space.

**Where to use it:**
- Team member lists on project cards
- Assignee indicators on tasks/issues
- Participant lists on events
- Any UI showing a group of users compactly

**How to use it:**

```tsx
import AvatarGroupStacked from '@/components/ui/elements/AvatarGroupStacked';

<AvatarGroupStacked
  avatars={[
    { src: '/avatar1.jpg', alt: 'Alice' },
    { src: '/avatar2.jpg', alt: 'Bob' },
    { src: '/avatar3.jpg', alt: 'Charlie' },
  ]}
  size="md"
  maxDisplay={3}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `avatars` | `AvatarItem[]` | No | Array of `{ src, alt? }` items |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Avatar size (defaults to `'md'`) |
| `maxDisplay` | `number` | No | Max avatars shown; remaining render as "+N" badge |

---

## 84. AvatarCircular

**File:** `AvatarCircular.tsx`

**Description:** A single circular avatar image rendered at a configurable size (`xs`=24px, `sm`=32px, `md`=40px, `lg`=48px, `xl`=56px). Uses `next/image` for optimization and `rounded-full` for the circular shape. Simple and composable.

**Goal:** Provide the simplest circular avatar primitive for use standalone or as a building block.

**Where to use it:**
- User profile indicators
- Comment author avatars
- Navigation bar user menus
- Any context needing a single circular avatar

**How to use it:**

```tsx
import AvatarCircular from '@/components/ui/elements/AvatarCircular';

<AvatarCircular src="/avatar.jpg" alt="Jane Doe" size="lg" />
<AvatarCircular size="xs" />
<AvatarCircular size="xl" />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | No | Image source URL (defaults to a placeholder) |
| `alt` | `string` | No | Alt text (defaults to empty string) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Size variant (defaults to `'md'`) |

---

## 85. AvatarCircularTopNotification

**File:** `AvatarCircularTopNotification.tsx`

**Description:** A circular avatar with a small notification dot positioned at the top-right corner. The dot color is configurable (gray, red, green, yellow) and scales with the avatar size. Uses a white ring around the dot for separation from the avatar. Uses `next/image` for optimization. Full dark mode support.

**Goal:** Provide an avatar with a top-right status indicator for online/busy/away states.

**Where to use it:**
- User presence indicators (online/offline/busy)
- Chat or messaging contact lists
- Team member dashboards with status
- Any context showing user availability at a glance

**How to use it:**

```tsx
import AvatarCircularTopNotification from '@/components/ui/elements/AvatarCircularTopNotification';

<AvatarCircularTopNotification size="lg" notificationColor="green" />
<AvatarCircularTopNotification size="sm" notificationColor="red" />
<AvatarCircularTopNotification
  src="/avatar.jpg"
  alt="Jane Doe"
  size="xl"
  notificationColor="yellow"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | No | Image source URL (defaults to a placeholder) |
| `alt` | `string` | No | Alt text (defaults to empty string) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Size variant (defaults to `'md'`) |
| `notificationColor` | `'gray' \| 'red' \| 'green' \| 'yellow'` | No | Dot color (defaults to `'green'`) |

---

## 86. AvatarCircularBottomNotification

**File:** `AvatarCircularBottomNotification.tsx`

**Description:** A circular avatar with a small notification dot positioned at the bottom-right corner. Same configurable dot colors and size scaling as AvatarCircularTopNotification, just with the dot at the bottom instead. Uses `next/image` for optimization. Full dark mode support.

**Goal:** Provide an avatar with a bottom-right status indicator — the more common placement for status dots.

**Where to use it:**
- User status in sidebars and navbars
- Profile cards with availability indicators
- Comment or message author status
- Any context preferring bottom-right dot placement

**How to use it:**

```tsx
import AvatarCircularBottomNotification from '@/components/ui/elements/AvatarCircularBottomNotification';

<AvatarCircularBottomNotification size="lg" notificationColor="green" />
<AvatarCircularBottomNotification size="sm" notificationColor="gray" />
<AvatarCircularBottomNotification
  src="/avatar.jpg"
  alt="Jane Doe"
  size="xl"
  notificationColor="red"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | No | Image source URL (defaults to a placeholder) |
| `alt` | `string` | No | Alt text (defaults to empty string) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Size variant (defaults to `'md'`) |
| `notificationColor` | `'gray' \| 'red' \| 'green' \| 'yellow'` | No | Dot color (defaults to `'green'`) |
