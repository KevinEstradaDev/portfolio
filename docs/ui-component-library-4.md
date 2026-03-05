# UI Component Library Reference — Part 4

A comprehensive guide to UI components 87+ in `src/components/ui/`.

---

## Table of Contents

| # | Component | Category |
|---|-----------|----------|
| 87 | [AvatarCircularPlaceholderIcon](#87-avatarcircularplaceholdericon) | Elements |
| 88 | [AvatarCircularPlaceholderInitials](#88-avatarcircularplaceholderinitials) | Elements |
| 89 | [AvatarWithText](#89-avatarwithtext) | Elements |
| 90 | [BadgeBorder](#90-badgeborder) | Elements |
| 91 | [BadgePillBorder](#91-badgepillborder) | Elements |
| 92 | [BadgeFlat](#92-badgeflat) | Elements |
| 93 | [BadgeWithIcon](#93-badgewithicon) | Elements |
| 94 | [BadgeFlatRemovable](#94-badgeflatremovable) | Elements |
| 95 | [DropdownSimple](#95-dropdownsimple) | Elements |
| 96 | [DropdownDividers](#96-dropdowndividers) | Elements |
| 97 | [DropdownIcons](#97-dropdownicons) | Elements |
| 98 | [DropdownMinimal](#98-dropdownminimal) | Elements |
| 99 | [DropdownHeader](#99-dropdownheader) | Elements |
| 100 | [ButtonGroupBasic](#100-buttongroupbasic) | Elements |
| 101 | [ButtonGroupIconOnly](#101-buttongroupicononly) | Elements |
| 102 | [ButtonGroupStat](#102-buttongroupstat) | Elements |
| 103 | [ButtonGroupDropdown](#103-buttongroupdropdown) | Elements |
| 104 | [ButtonGroupCheckboxDropdown](#104-buttongroupcheckboxdropdown) | Elements |
| 105 | [ContainerFullWidthPadded](#105-containerfullwidthpadded) | Layouts |
| 106 | [ContainerBreakpointPadded](#106-containerbreakpointpadded) | Layouts |
| 107 | [ContainerConstrainedPadded](#107-containerconstrainedpadded) | Layouts |
| 108 | [ContainerBreakpointConstrained](#108-containerbreakpointconstrained) | Layouts |
| 109 | [ContainerNarrowPadded](#109-containernarrowpadded) | Layouts |
| 110 | [CardBasic](#110-cardbasic) | Layouts |
| 111 | [CardEdgeToEdge](#111-cardedgetoedge) | Layouts |
| 112 | [CardHeader](#112-cardheader) | Layouts |
| 113 | [CardFooter](#113-cardfooter) | Layouts |
| 114 | [CardHeaderFooter](#114-cardheaderfooter) | Layouts |
| 115 | [CardGrayFooter](#115-cardgrayfooter) | Layouts |
| 116 | [CardGrayBody](#116-cardgraybody) | Layouts |

---

## 87. AvatarCircularPlaceholderIcon

**File:** `AvatarCircularPlaceholderIcon.tsx`

**Description:** A circular avatar placeholder using an inline SVG user icon on a gray background (`bg-gray-100`) instead of an image. Same `size` prop system as `AvatarCircular` (`xs`–`xl`). The icon uses `text-gray-300` fill and the container uses `rounded-full` with `overflow-hidden`. Full dark mode support with `bg-gray-700` and `text-gray-500`.

**Goal:** Provide a fallback avatar when no user image is available — shows a recognizable person silhouette icon.

**Where to use it:**
- Default avatars for users who haven't uploaded a photo
- Placeholder states in user lists
- Anonymous or guest user indicators
- Any context needing an image-free avatar fallback

**How to use it:**

```tsx
import AvatarCircularPlaceholderIcon from '@/components/ui/elements/AvatarCircularPlaceholderIcon';

<AvatarCircularPlaceholderIcon size="lg" />
<AvatarCircularPlaceholderIcon size="xs" />
<AvatarCircularPlaceholderIcon size="xl" />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Size variant (defaults to `'md'`) |

---

## 88. AvatarCircularPlaceholderInitials

**File:** `AvatarCircularPlaceholderInitials.tsx`

**Description:** A circular avatar showing 1–2 character initials on a colored background. Configurable via `initials`, `size`, and `bgColor` props. Uses `rounded-full`, centered white text with `font-medium`, and responsive font sizing per avatar size. Background color is passed as a Tailwind class string for full flexibility.

**Goal:** Provide an initial-based avatar for users without images — more personal than a generic icon.

**Where to use it:**
- User lists where images aren't available
- Contact directories and address books
- Team member indicators on cards
- Any context where initials provide useful identity cues

**How to use it:**

```tsx
import AvatarCircularPlaceholderInitials from '@/components/ui/elements/AvatarCircularPlaceholderInitials';

<AvatarCircularPlaceholderInitials initials="TW" size="lg" />
<AvatarCircularPlaceholderInitials initials="JD" size="sm" bgColor="bg-indigo-500" />
<AvatarCircularPlaceholderInitials initials="A" size="xl" bgColor="bg-red-500" />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `initials` | `string` | No | 1–2 character initials (defaults to `'TW'`) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Size variant (defaults to `'md'`) |
| `bgColor` | `string` | No | Tailwind background color class (defaults to `'bg-gray-500'`) |

---

## 89. AvatarWithText

**File:** `AvatarWithText.tsx`

**Description:** A composite avatar component pairing a circular avatar image with adjacent text. Uses flexbox `inline-flex items-center gap-x-3` layout with the avatar on the left and primary/secondary text on the right. Primary text is `font-medium text-gray-900`, secondary text is `text-gray-500`. Uses `next/image` with `rounded-full`. Full dark mode support.

**Goal:** Provide a combined avatar + name component for user identification in lists, headers, and menus.

**Where to use it:**
- User profile sections in navbars
- Comment author displays
- Team member lists with names and roles
- Any context pairing an avatar with user information

**How to use it:**

```tsx
import AvatarWithText from '@/components/ui/elements/AvatarWithText';

<AvatarWithText
  primaryText="Tom Cook"
  secondaryText="tom@example.com"
  size="lg"
/>
<AvatarWithText primaryText="Jane Doe" size="sm" />
<AvatarWithText
  src="/custom-avatar.jpg"
  alt="Alice"
  primaryText="Alice Johnson"
  secondaryText="Engineering Lead"
  size="xl"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | No | Image source URL (defaults to a placeholder) |
| `alt` | `string` | No | Alt text (defaults to empty string) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | Size variant (defaults to `'md'`) |
| `primaryText` | `string` | No | Primary text, e.g. name (defaults to `'Tom Cook'`) |
| `secondaryText` | `string` | No | Secondary text, e.g. role or email |

---

## 90. BadgeBorder

**File:** `BadgeBorder.tsx`

**Description:** An inline badge/tag with a subtle ring border (`ring-1 ring-inset`), rounded corners (`rounded-md`), and colored background. Supports 8 color variants: gray, red, yellow, green, blue, indigo, purple, pink. Each variant maps to a coordinated set of background, text, and ring colors. Uses `px-2 py-1 text-xs font-medium`. Full dark mode support per variant.

**Goal:** Provide a versatile, bordered badge for labeling, categorization, and status indication.

**Where to use it:**
- Status indicators (active, pending, error)
- Category labels on cards or list items
- Tag displays for content or issues
- Any context needing small, colored inline labels

**How to use it:**

```tsx
import BadgeBorder from '@/components/ui/elements/BadgeBorder';

<BadgeBorder label="Active" color="green" />
<BadgeBorder label="Pending" color="yellow" />
<BadgeBorder label="Error" color="red" />
<BadgeBorder label="Default" />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Badge text (defaults to `'Badge'`) |
| `color` | `'gray' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'pink'` | No | Color variant (defaults to `'gray'`) |

---

## 91. BadgePillBorder

**File:** `BadgePillBorder.tsx`

**Description:** Same as BadgeBorder but with `rounded-full` for a pill shape and slightly wider horizontal padding (`px-2.5`). Same 8 color variants and dark mode support. Ideal when a softer, rounder badge shape is desired.

**Goal:** Provide a pill-shaped badge variant for softer visual styling.

**Where to use it:**
- Same use cases as BadgeBorder when a pill shape is preferred
- Tags in search filters or content labels
- Version or build number indicators
- Any context where rounded badges fit the design language

**How to use it:**

```tsx
import BadgePillBorder from '@/components/ui/elements/BadgePillBorder';

<BadgePillBorder label="v2.0" color="blue" />
<BadgePillBorder label="New" color="indigo" />
<BadgePillBorder label="Archived" color="gray" />
<BadgePillBorder label="Live" color="green" />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Badge text (defaults to `'Badge'`) |
| `color` | `'gray' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'pink'` | No | Color variant (defaults to `'gray'`) |

---

## 92. BadgeFlat

**File:** `BadgeFlat.tsx`

**Description:** A flat badge with a tinted background and colored text — no ring border. Same 8-color variant system as `BadgeBorder`. Uses `rounded-md`, `px-2 py-1 text-xs font-medium`. Full dark mode support.

**Goal:** Provide a subtle, borderless badge for labeling and categorization.

**Where to use it:**
- Status labels on tables and lists
- Category tags in content feeds
- Inline labels where a border feels too heavy
- Any context needing a lightweight badge

**How to use it:**

```tsx
import BadgeFlat from '@/components/ui/elements/BadgeFlat';

<BadgeFlat label="Draft" color="gray" />
<BadgeFlat label="Active" color="green" />
<BadgeFlat label="Urgent" color="red" />
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `label` | `string` | No | Badge text (defaults to `'Badge'`) |
| `color` | `'gray' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'pink'` | No | Color variant (defaults to `'gray'`) |

---

## 93. BadgeWithIcon

**File:** `BadgeWithIcon.tsx`

**Description:** A flat badge with a left-side icon. By default renders a small colored dot SVG indicator; optionally accepts a custom HeroIcon component via the `icon` prop. Same 8-color variant system. Full dark mode support.

**Goal:** Provide a badge with visual icon/dot reinforcement for status or category.

**Where to use it:**
- Status indicators with dot (online, offline, warning)
- Category badges with icons
- Pipeline stage labels
- Any badge benefiting from an icon prefix

**How to use it:**

```tsx
import BadgeWithIcon from '@/components/ui/elements/BadgeWithIcon';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

<BadgeWithIcon label="Online" color="green" />
<BadgeWithIcon label="Approved" color="blue" icon={CheckCircleIcon} />
<BadgeWithIcon label="Warning" color="yellow" />
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `label` | `string` | No | Badge text (defaults to `'Badge'`) |
| `color` | `'gray' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'pink'` | No | Color variant (defaults to `'gray'`) |
| `icon` | `ComponentType<SVGProps<SVGSVGElement>>` | No | Custom icon component (defaults to dot) |

---

## 94. BadgeFlatRemovable

**File:** `BadgeFlatRemovable.tsx`

**Description:** A flat badge with an X remove button on the right. Clicking the X triggers the `onRemove` callback. The X button has hover styles with a slightly darker background for feedback. Same 8-color system. Full dark mode support.

**Goal:** Provide a dismissable badge for filter chips, tag inputs, and removable labels.

**Where to use it:**
- Applied filter tags with removal
- Tag input components
- Selected items in multi-select UIs
- Any context where users can dismiss/remove a badge

**How to use it:**

```tsx
import BadgeFlatRemovable from '@/components/ui/elements/BadgeFlatRemovable';

<BadgeFlatRemovable label="React" color="blue" onRemove={() => console.log('removed')} />
<BadgeFlatRemovable label="Draft" color="gray" onRemove={() => console.log('removed')} />
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `label` | `string` | No | Badge text (defaults to `'Badge'`) |
| `color` | `'gray' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'pink'` | No | Color variant (defaults to `'gray'`) |
| `onRemove` | `() => void` | No | Callback when remove button is clicked |

---

## 95. DropdownSimple

**File:** `DropdownSimple.tsx`

**Description:** A simple dropdown menu using HeadlessUI `Menu` with a button trigger and a flat list of link items. Keyboard accessible (arrow keys, Enter, Escape). Uses `Transition` for scale/opacity enter/leave animation. Dropdown panel uses `shadow-lg`, `ring-1`, and `rounded-md`. Full dark mode support.

**Goal:** Provide a straightforward dropdown for action menus and option lists.

**Where to use it:**
- Table row action menus
- User account menus
- Settings/options buttons
- Any context needing a simple dropdown trigger

**How to use it:**

```tsx
import DropdownSimple from '@/components/ui/elements/DropdownSimple';

<DropdownSimple
  buttonLabel="Options"
  items={[
    { name: 'Account settings', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttonLabel` | `string` | No | Trigger button text (defaults to `'Options'`) |
| `items` | `DropdownItem[]` | No | Items (`{ name, href? }`) |
| `onSelect` | `(item: DropdownItem) => void` | No | Item click callback |

---

## 96. DropdownDividers

**File:** `DropdownDividers.tsx`

**Description:** A dropdown menu with items organized into groups separated by `divide-y` dividers. Same HeadlessUI `Menu`, transition, and keyboard behavior as DropdownSimple. Takes an array of item arrays (`groups`) instead of a flat list. Full dark mode support.

**Goal:** Provide a grouped dropdown menu with visual separation between action categories.

**Where to use it:**
- Context menus with grouped actions (edit/share/delete)
- File operation menus
- Project management action menus
- Any dropdown where logical grouping aids usability

**How to use it:**

```tsx
import DropdownDividers from '@/components/ui/elements/DropdownDividers';

<DropdownDividers
  buttonLabel="Actions"
  groups={[
    [{ name: 'Edit' }, { name: 'Duplicate' }],
    [{ name: 'Archive' }, { name: 'Move' }],
    [{ name: 'Delete' }],
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttonLabel` | `string` | No | Trigger button text (defaults to `'Options'`) |
| `groups` | `DropdownItem[][]` | No | Groups of items separated by dividers |
| `onSelect` | `(item: DropdownItem) => void` | No | Item click callback |

---

## 97. DropdownIcons

**File:** `DropdownIcons.tsx`

**Description:** A dropdown menu with icon-prefixed items grouped by dividers. Each item accepts an `icon` prop (HeroIcon component) rendered to the left of the label. Icons change color on focus. Same HeadlessUI `Menu`, transition, and keyboard behavior. Full dark mode support.

**Goal:** Provide a rich dropdown menu where icons clarify item actions at a glance.

**Where to use it:**
- Rich action menus with visual affordances
- Content management operations (edit, duplicate, archive, delete)
- Project management dropdowns
- Any dropdown where icons improve scannability

**How to use it:**

```tsx
import DropdownIcons from '@/components/ui/elements/DropdownIcons';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';

<DropdownIcons
  buttonLabel="Actions"
  groups={[
    [{ name: 'Edit', icon: PencilSquareIcon }],
    [{ name: 'Delete', icon: TrashIcon }],
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttonLabel` | `string` | No | Trigger button text (defaults to `'Options'`) |
| `groups` | `DropdownIconItem[][]` | No | Groups of items with icons, separated by dividers |
| `onSelect` | `(item: DropdownIconItem) => void` | No | Item click callback |

---

## 98. DropdownMinimal

**File:** `DropdownMinimal.tsx`

**Description:** A dropdown triggered by a minimal vertical three-dot icon (`EllipsisVerticalIcon`) instead of a text button. No label — just a compact, circular icon trigger with focus ring. Same HeadlessUI `Menu` pattern, transition, and keyboard behavior. Dark mode support.

**Goal:** Provide a space-efficient dropdown trigger for contexts where a text button is too heavy.

**Where to use it:**
- Table row action menus
- Card kebab menus
- List item overflow actions
- Any compact UI needing a dropdown without a text label

**How to use it:**

```tsx
import DropdownMinimal from '@/components/ui/elements/DropdownMinimal';

<DropdownMinimal
  items={[
    { name: 'Edit', href: '#' },
    { name: 'Delete', href: '#' },
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `items` | `DropdownItem[]` | No | Items (`{ name, href? }`) |
| `onSelect` | `(item: DropdownItem) => void` | No | Item click callback |
| `srLabel` | `string` | No | Screen-reader label (defaults to `'Open options'`) |

---

## 99. DropdownHeader

**File:** `DropdownHeader.tsx`

**Description:** A dropdown with a non-interactive header section at the top showing context info (e.g., "Signed in as" + email). Items below are separated from the header by a divider. Same HeadlessUI `Menu` pattern. Dark mode support.

**Goal:** Provide a dropdown with contextual header information above the menu items.

**Where to use it:**
- User account menus showing signed-in identity
- Workspace/project selectors with current context
- Any dropdown where a header provides useful context

**How to use it:**

```tsx
import DropdownHeader from '@/components/ui/elements/DropdownHeader';

<DropdownHeader
  headerText="Signed in as"
  headerDetail="tom@example.com"
  items={[
    { name: 'Account settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttonLabel` | `string` | No | Trigger button text (defaults to `'Options'`) |
| `headerText` | `string` | No | Header label (defaults to `'Signed in as'`) |
| `headerDetail` | `string` | No | Header detail text (defaults to `'tom@example.com'`) |
| `items` | `DropdownItem[]` | No | Items (`{ name, href? }`) |
| `onSelect` | `(item: DropdownItem) => void` | No | Item click callback |

---

## 100. ButtonGroupBasic

**File:** `ButtonGroupBasic.tsx`

**Description:** An inline button group with `isolate inline-flex rounded-md shadow-xs`. Buttons share borders via negative margin (`-ml-px`). Only the first button gets `rounded-l-md` and the last gets `rounded-r-md`. Focus ring via `focus:z-10`. Dark mode support.

**Goal:** Provide a segmented button group for toggling between related options.

**Where to use it:**
- Date range selectors (Years/Months/Days)
- View mode toggles (List/Grid/Map)
- Filter option groups
- Any context needing grouped, mutually related buttons

**How to use it:**

```tsx
import ButtonGroupBasic from '@/components/ui/elements/ButtonGroupBasic';

<ButtonGroupBasic
  buttons={[
    { label: 'Years', onClick: () => console.log('years') },
    { label: 'Months', onClick: () => console.log('months') },
    { label: 'Days', onClick: () => console.log('days') },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttons` | `ButtonGroupItem[]` | No | Buttons (`{ label, onClick? }`) |

---

## 101. ButtonGroupIconOnly

**File:** `ButtonGroupIconOnly.tsx`

**Description:** An icon-only button group. Same structure as ButtonGroupBasic but each button contains only an icon with an `sr-only` label for accessibility. Uses HeroIcon components. Dark mode support.

**Goal:** Provide a compact icon button group for navigation or action shortcuts.

**Where to use it:**
- Pagination controls (previous/next)
- Media playback controls
- Text editor toolbars
- Any compact toolbar with icon actions

**How to use it:**

```tsx
import ButtonGroupIconOnly from '@/components/ui/elements/ButtonGroupIconOnly';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

<ButtonGroupIconOnly
  buttons={[
    { srLabel: 'Previous', icon: ChevronLeftIcon, onClick: () => console.log('prev') },
    { srLabel: 'Next', icon: ChevronRightIcon, onClick: () => console.log('next') },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttons` | `ButtonGroupIconItem[]` | No | Buttons (`{ srLabel, icon, onClick? }`) |

---

## 102. ButtonGroupStat

**File:** `ButtonGroupStat.tsx`

**Description:** A button group where each button displays a label paired with a numeric stat badge (pill-shaped counter). Same grouped button structure with shared borders. Dark mode support.

**Goal:** Provide a button group with count indicators for filtering or categorization.

**Where to use it:**
- Tab-like category filters with counts
- Issue tracker filters (Open: 12, Closed: 4)
- Notification type selectors
- Any button group where counts add useful context

**How to use it:**

```tsx
import ButtonGroupStat from '@/components/ui/elements/ButtonGroupStat';

<ButtonGroupStat
  buttons={[
    { label: 'Bookmarks', stat: 12, onClick: () => console.log('bookmarks') },
    { label: 'Mentions', stat: 4 },
    { label: 'Notifications', stat: 0 },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `buttons` | `ButtonGroupStatItem[]` | No | Buttons (`{ label, stat, onClick? }`) |

---

## 103. ButtonGroupDropdown

**File:** `ButtonGroupDropdown.tsx`

**Description:** A split button: primary action button on the left + a chevron-down dropdown trigger on the right. The dropdown uses HeadlessUI `Menu` with transition animation. Primary button and dropdown trigger share a visual group. Dark mode support.

**Goal:** Provide a split button pattern for a primary action with alternative options.

**Where to use it:**
- Save with alternatives (Save and publish, Save as draft)
- Send with scheduling options
- Export with format choices
- Any action needing a primary + secondary options pattern

**How to use it:**

```tsx
import ButtonGroupDropdown from '@/components/ui/elements/ButtonGroupDropdown';

<ButtonGroupDropdown
  primaryLabel="Save changes"
  onPrimaryClick={() => console.log('saved')}
  items={[
    { name: 'Save and schedule' },
    { name: 'Save and publish' },
    { name: 'Export PDF' },
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `primaryLabel` | `string` | No | Primary button text (defaults to `'Save changes'`) |
| `onPrimaryClick` | `() => void` | No | Primary button click callback |
| `items` | `DropdownItem[]` | No | Dropdown items (`{ name, href? }`) |
| `onSelect` | `(item: DropdownItem) => void` | No | Dropdown item click callback |

---

## 104. ButtonGroupCheckboxDropdown

**File:** `ButtonGroupCheckboxDropdown.tsx`

**Description:** A split button group combining a checkbox on the left with a chevron-down dropdown trigger on the right. The checkbox toggles a "select all" state via `onCheckChange`. The dropdown uses HeadlessUI `Menu` for batch selection actions. Dark mode support.

**Goal:** Provide a bulk selection control combining a checkbox with a dropdown of selection options.

**Where to use it:**
- Email inbox select-all controls
- Table bulk action headers
- List batch selection UIs
- Any context needing checkbox + dropdown selection patterns

**How to use it:**

```tsx
import ButtonGroupCheckboxDropdown from '@/components/ui/elements/ButtonGroupCheckboxDropdown';

<ButtonGroupCheckboxDropdown
  checked={false}
  onCheckChange={(checked) => console.log('checked:', checked)}
  items={[
    { name: 'Select all' },
    { name: 'Select none' },
    { name: 'Select starred' },
  ]}
  onSelect={(item) => console.log('selected:', item.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `checked` | `boolean` | No | Checkbox state (defaults to `false`) |
| `onCheckChange` | `(checked: boolean) => void` | No | Checkbox change callback |
| `items` | `DropdownItem[]` | No | Dropdown items |
| `onSelect` | `(item: DropdownItem) => void` | No | Dropdown item click callback |
| `srLabel` | `string` | No | Screen-reader label (defaults to `'Select all'`) |

---

## 105. ContainerFullWidthPadded

**File:** `ContainerFullWidthPadded.tsx`

**Description:** A full-width container on mobile that becomes constrained at larger breakpoints. Uses `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` for responsive padding and centering.

**Goal:** Provide the most common responsive container pattern — full bleed mobile, padded and centered desktop.

**Where to use it:**
- Main page content wrappers
- Section containers in long-form pages
- Dashboard content areas
- Any general-purpose responsive container

**How to use it:**

```tsx
import ContainerFullWidthPadded from '@/components/ui/layouts/ContainerFullWidthPadded';

<ContainerFullWidthPadded>
  <h1>Page content here</h1>
</ContainerFullWidthPadded>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside |

---

## 106. ContainerBreakpointPadded

**File:** `ContainerBreakpointPadded.tsx`

**Description:** Full-width on mobile, constrained to breakpoint with padded content above mobile. Uses `mx-auto max-w-7xl sm:px-6 lg:px-8` — no padding on mobile, padding kicks in at `sm` breakpoint.

**Goal:** Provide a container that is truly edge-to-edge on mobile with padding only on larger screens.

**Where to use it:**
- Content that should bleed on mobile
- Image galleries or media-heavy sections
- Mobile-first layouts with breakpoint padding

**How to use it:**

```tsx
import ContainerBreakpointPadded from '@/components/ui/layouts/ContainerBreakpointPadded';

<ContainerBreakpointPadded>
  <div>Edge-to-edge on mobile</div>
</ContainerBreakpointPadded>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside |

---

## 107. ContainerConstrainedPadded

**File:** `ContainerConstrainedPadded.tsx`

**Description:** A constrained container with padded content. Uses `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` as the outer wrapper and `mx-auto max-w-3xl` as the inner wrapper for narrow content centering.

**Goal:** Provide a double-constrained container for narrow content like articles or forms.

**Where to use it:**
- Article/blog post content
- Form pages
- Settings pages with narrow content
- Any context needing narrow centered content within a wider container

**How to use it:**

```tsx
import ContainerConstrainedPadded from '@/components/ui/layouts/ContainerConstrainedPadded';

<ContainerConstrainedPadded>
  <p>Narrow content centered within the page</p>
</ContainerConstrainedPadded>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside |

---

## 108. ContainerBreakpointConstrained

**File:** `ContainerBreakpointConstrained.tsx`

**Description:** A container that snaps to Tailwind's built-in breakpoint widths using `container mx-auto` with `sm:px-6 lg:px-8`. Unlike `max-w-7xl`, the `container` class adapts to each breakpoint.

**Goal:** Provide a breakpoint-snapping container for grid-heavy layouts.

**Where to use it:**
- Grid layouts that should snap to breakpoints
- Dashboard pages with strict column alignment
- Any layout requiring breakpoint-aware widths

**How to use it:**

```tsx
import ContainerBreakpointConstrained from '@/components/ui/layouts/ContainerBreakpointConstrained';

<ContainerBreakpointConstrained>
  <div>Snaps to breakpoint widths</div>
</ContainerBreakpointConstrained>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside |

---

## 109. ContainerNarrowPadded

**File:** `ContainerNarrowPadded.tsx`

**Description:** A narrow constrained container using `mx-auto max-w-3xl px-4 sm:px-6 lg:px-8`. Limits content to a narrow, readable width at all breakpoints.

**Goal:** Provide a narrow container for focused reading or form content.

**Where to use it:**
- Blog post bodies
- Terms/privacy pages
- Single-column forms
- Any content benefiting from narrow, readable line lengths

**How to use it:**

```tsx
import ContainerNarrowPadded from '@/components/ui/layouts/ContainerNarrowPadded';

<ContainerNarrowPadded>
  <article>Narrow readable content</article>
</ContainerNarrowPadded>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside |

---

## 110. CardBasic

**File:** `CardBasic.tsx`

**Description:** A simple card wrapper with `overflow-hidden rounded-lg bg-white shadow` and internal padding (`px-4 py-5 sm:p-6`). Dark mode uses `dark:bg-gray-800 dark:shadow-gray-900/30`.

**Goal:** Provide a basic, reusable card container for grouping related content.

**Where to use it:**
- Dashboard widgets
- Content sections within a page
- Settings panels
- Any context needing a visually distinct card container

**How to use it:**

```tsx
import CardBasic from '@/components/ui/layouts/CardBasic';

<CardBasic>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</CardBasic>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside the card |

---

## 111. CardEdgeToEdge

**File:** `CardEdgeToEdge.tsx`

**Description:** A card that is full bleed (no rounded corners or shadow) on mobile and becomes a standard card with `sm:rounded-lg` and shadow at the `sm` breakpoint and above. Dark mode support.

**Goal:** Provide an edge-to-edge card for mobile-first layouts where screen real estate matters.

**Where to use it:**
- Mobile-optimized content cards
- List items that should feel native on small screens
- Settings panels on mobile

**How to use it:**

```tsx
import CardEdgeToEdge from '@/components/ui/layouts/CardEdgeToEdge';

<CardEdgeToEdge>
  <p>Full bleed on mobile, card on desktop.</p>
</CardEdgeToEdge>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Content to render inside |

---

## 112. CardHeader

**File:** `CardHeader.tsx`

**Description:** A card with a distinct header section separated from the body by a bottom border (`border-b`). Header and body each have their own padding. Dark mode support.

**Goal:** Provide a card with a titled header area for structured content layouts.

**Where to use it:**
- Dashboard widgets with titles
- Settings sections with labeled headers
- Data panels with section headings

**How to use it:**

```tsx
import CardHeader from '@/components/ui/layouts/CardHeader';

<CardHeader header={<h3 className="text-lg font-medium">Card Title</h3>}>
  <p>Body content here.</p>
</CardHeader>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `header` | `ReactNode` | No | Header content |
| `children` | `ReactNode` | No | Body content |

---

## 113. CardFooter

**File:** `CardFooter.tsx`

**Description:** A card with body content and a footer section separated by a top border (`border-t`). Footer has its own padding. Dark mode support.

**Goal:** Provide a card with a footer for actions, pagination, or summary info.

**Where to use it:**
- Cards with action buttons at the bottom
- Content panels with pagination
- Data cards with summary statistics

**How to use it:**

```tsx
import CardFooter from '@/components/ui/layouts/CardFooter';

<CardFooter footer={<button>Save</button>}>
  <p>Body content here.</p>
</CardFooter>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Body content |
| `footer` | `ReactNode` | No | Footer content |

---

## 114. CardHeaderFooter

**File:** `CardHeaderFooter.tsx`

**Description:** A card with distinct header, body, and footer sections, all separated by borders. Each section has its own padding. Dark mode support.

**Goal:** Provide a full-featured card with header, body, and footer for complex content panels.

**Where to use it:**
- Full data panels with title, content, and actions
- Settings forms with labeled header and save footer
- Modal-like embedded content sections

**How to use it:**

```tsx
import CardHeaderFooter from '@/components/ui/layouts/CardHeaderFooter';

<CardHeaderFooter
  header={<h3 className="text-lg font-medium">Title</h3>}
  footer={<button>Save</button>}
>
  <p>Body content here.</p>
</CardHeaderFooter>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `header` | `ReactNode` | No | Header content |
| `children` | `ReactNode` | No | Body content |
| `footer` | `ReactNode` | No | Footer content |

---

## 115. CardGrayFooter

**File:** `CardGrayFooter.tsx`

**Description:** A card with white body and a gray-tinted footer (`bg-gray-50`, dark: `bg-gray-800/50`). No border separator — the background color change provides the visual distinction.

**Goal:** Provide a card with a visually distinct footer area using background color contrast.

**Where to use it:**
- Cards with metadata or secondary actions in the footer
- Pricing cards with a highlighted CTA footer
- Data cards with summary at bottom

**How to use it:**

```tsx
import CardGrayFooter from '@/components/ui/layouts/CardGrayFooter';

<CardGrayFooter footer={<p className="text-sm text-gray-500">Last updated 3 mins ago</p>}>
  <p>Main content here.</p>
</CardGrayFooter>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Body content |
| `footer` | `ReactNode` | No | Footer content |

---

## 116. CardGrayBody

**File:** `CardGrayBody.tsx`

**Description:** A card where the body area has a gray background (`bg-gray-50`, dark: `bg-gray-800/50`) instead of the default white. Useful for inset-style content areas.

**Goal:** Provide a card with a subdued body for content that should appear recessed or secondary.

**Where to use it:**
- Code preview containers
- Inset content areas
- Secondary information panels
- Any card where body content should appear subdued

**How to use it:**

```tsx
import CardGrayBody from '@/components/ui/layouts/CardGrayBody';

<CardGrayBody>
  <pre>Some code or subdued content</pre>
</CardGrayBody>
```

| Prop | Type | Required | Description |
|------|------|----------|-----------|
| `children` | `ReactNode` | No | Body content |
