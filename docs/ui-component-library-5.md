# UI Component Library Reference — Part 5

A comprehensive guide to UI components 117+ in `src/components/ui/`.

---

## Table of Contents

| # | Component | Category |
|---|-----------|----------|
| 117 | [CardWell](#117-cardwell) | Layouts |
| 118 | [CardWellGray](#118-cardwellgray) | Layouts |
| 119 | [CardWellEdgeToEdge](#119-cardwelledgetoedge) | Layouts |
| 120 | [ListContainerBasic](#120-listcontainerbasic) | Layouts |
| 121 | [ListContainerDividers](#121-listcontainerdividers) | Layouts |
| 122 | [ListContainerCardDividers](#122-listcontainercarddividers) | Layouts |
| 123 | [ListContainerCardDividersMobile](#123-listcontainercarddividersmobile) | Layouts |
| 124 | [ListContainerSeparateCards](#124-listcontainerseparatecards) | Layouts |
| 125 | [ListContainerSeparateCardsMobile](#125-listcontainerseparatecardsmobile) | Layouts |
| 126 | [ListContainerFlatCardDividers](#126-listcontainerflatcarddividers) | Layouts |
| 127 | [ListContainerDividersMobile](#127-listcontainerdividersmobile) | Layouts |
| 128 | [DividerLabel](#128-dividerlabel) | Layouts |
| 129 | [DividerIcon](#129-dividericon) | Layouts |
| 130 | [DividerLabelLeft](#130-dividerlabelleft) | Layouts |
| 131 | [DividerTitle](#131-dividertitle) | Layouts |
| 132 | [DividerTitleLeft](#132-dividertitleleft) | Layouts |
| 133 | [DividerButton](#133-dividerbutton) | Layouts |
| 134 | [DividerTitleButton](#134-dividertitlebutton) | Layouts |
| 135 | [DividerToolbar](#135-dividertoolbar) | Layouts |

---

## 117. CardWell

**File:** `CardWell.tsx`

**Description:** An inset "well" container with a gray background (`bg-gray-50`), rounded corners (`rounded-lg`), and no shadow. Unlike `CardBasic` (which is white with a shadow), a Well is a subtle, recessed panel for grouping secondary or nested content. Uses `px-4 py-5 sm:p-6`. Full dark mode support with `dark:bg-gray-800/50`.

**Goal:** Provide a recessed content area for grouping secondary content without the visual weight of a card.

**Where to use it:**
- Nested content areas within cards or pages
- Form section backgrounds
- Code snippet containers
- Secondary content grouping

**How to use it:**

```tsx
import CardWell from '@/components/ui/layouts/CardWell';

<CardWell>
  <p>Recessed content goes here.</p>
</CardWell>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | Content to render inside the well |

---

## 118. CardWellGray

**File:** `CardWellGray.tsx`

**Description:** A Well variant designed for use on gray backgrounds. Instead of a gray fill, uses a white background with a subtle ring border (`ring-1 ring-gray-900/5`). No shadow, `rounded-lg`, `px-4 py-5 sm:p-6`. Dark mode uses `dark:bg-gray-900 dark:ring-gray-700/50`.

**Goal:** Provide a well that stands out on gray background pages — inverted contrast from the standard Well.

**Where to use it:**
- Content areas on gray-background pages
- Nested panels within gray sections
- Form groups on gray layouts
- Any context needing a white well on a gray surface

**How to use it:**

```tsx
import CardWellGray from '@/components/ui/layouts/CardWellGray';

<div className="bg-gray-100 p-6">
  <CardWellGray>
    <p>Content on a gray page.</p>
  </CardWellGray>
</div>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | Content to render inside the well |

---

## 119. CardWellEdgeToEdge

**File:** `CardWellEdgeToEdge.tsx`

**Description:** Same as CardWell but full-bleed on mobile — no rounded corners on small screens. Uses `bg-gray-50 sm:rounded-lg` with `px-4 py-5 sm:p-6`. Dark mode uses `dark:bg-gray-800/50`.

**Goal:** Provide a mobile-optimized well that maximizes screen real estate on small devices.

**Where to use it:**
- Mobile-first layouts with recessed sections
- Nested content that should feel native on mobile
- Form backgrounds on responsive pages

**How to use it:**

```tsx
import CardWellEdgeToEdge from '@/components/ui/layouts/CardWellEdgeToEdge';

<CardWellEdgeToEdge>
  <p>Full bleed on mobile, rounded on desktop.</p>
</CardWellEdgeToEdge>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | Content to render inside the well |

---

## 120. ListContainerBasic

**File:** `ListContainerBasic.tsx`

**Description:** A basic list container rendering children inside a `<ul role="list">` with `divide-y divide-gray-200` dividers between items. No card wrapper, no shadow — just a clean, divided list. Dark mode uses `dark:divide-gray-700`.

**Goal:** Provide a simple, unstyled list container with dividers for rendering list items.

**Where to use it:**
- Simple data lists (users, tasks, resources)
- Settings option lists
- Activity feeds
- Any flat list needing divider separation

**How to use it:**

```tsx
import ListContainerBasic from '@/components/ui/layouts/ListContainerBasic';

<ListContainerBasic>
  <li className="py-4">Item 1</li>
  <li className="py-4">Item 2</li>
  <li className="py-4">Item 3</li>
</ListContainerBasic>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 121. ListContainerDividers

**File:** `ListContainerDividers.tsx`

**Description:** A simple list with divider lines between items. Uses `<ul role="list" className="divide-y divide-gray-200">` with child `<li>` elements providing their own padding. Structurally identical to ListContainerBasic — a semantic alias for when the divider pattern is the explicit intent. Dark mode support.

**Goal:** Provide a named list container explicitly indicating divider-based separation.

**Where to use it:**
- User lists with profile rows
- Task or issue lists
- Notification feeds
- Any list where dividers are the primary visual structure

**How to use it:**

```tsx
import ListContainerDividers from '@/components/ui/layouts/ListContainerDividers';

<ListContainerDividers>
  <li className="py-4">First item</li>
  <li className="py-4">Second item</li>
  <li className="py-4">Third item</li>
</ListContainerDividers>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 122. ListContainerCardDividers

**File:** `ListContainerCardDividers.tsx`

**Description:** A card-wrapped list container. Outer wrapper is a standard card with `overflow-hidden rounded-lg bg-white shadow`. Inner `<ul>` uses `divide-y divide-gray-200` for item separation. Child `<li>` elements should provide their own padding (e.g., `px-4 py-4 sm:px-6`). Full dark mode support.

**Goal:** Provide a card-enclosed list with dividers for elevated, contained list presentations.

**Where to use it:**
- Dashboard data lists in card panels
- User directories
- Settings sections with multiple items
- Any list needing a card container with dividers

**How to use it:**

```tsx
import ListContainerCardDividers from '@/components/ui/layouts/ListContainerCardDividers';

<ListContainerCardDividers>
  <li className="px-4 py-4 sm:px-6">Card list item 1</li>
  <li className="px-4 py-4 sm:px-6">Card list item 2</li>
  <li className="px-4 py-4 sm:px-6">Card list item 3</li>
</ListContainerCardDividers>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 123. ListContainerCardDividersMobile

**File:** `ListContainerCardDividersMobile.tsx`

**Description:** A card-wrapped list with dividers, full-width (edge-to-edge) on mobile. Same as `ListContainerCardDividers` but uses `sm:rounded-lg` instead of `rounded-lg` — no rounded corners on small screens. Dark mode support.

**Goal:** Provide a card list container optimized for mobile with full-bleed edges.

**Where to use it:**
- Mobile-first data lists in card panels
- User lists that should feel native on mobile
- Settings lists on responsive pages

**How to use it:**

```tsx
import ListContainerCardDividersMobile from '@/components/ui/layouts/ListContainerCardDividersMobile';

<ListContainerCardDividersMobile>
  <li className="px-4 py-4 sm:px-6">Item 1</li>
  <li className="px-4 py-4 sm:px-6">Item 2</li>
</ListContainerCardDividersMobile>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 124. ListContainerSeparateCards

**File:** `ListContainerSeparateCards.tsx`

**Description:** A list where each item is rendered as its own separate card. Uses `<ul role="list" className="space-y-3">` for vertical spacing between cards. Child `<li>` elements should provide their own card styling (e.g., `overflow-hidden rounded-lg bg-white shadow px-4 py-4 sm:px-6`). Dark mode applied per child.

**Goal:** Provide a list layout where each item is visually independent with its own card container.

**Where to use it:**
- Task or project card lists
- Job posting lists
- Feature comparison items
- Any list where items need visual independence

**How to use it:**

```tsx
import ListContainerSeparateCards from '@/components/ui/layouts/ListContainerSeparateCards';

<ListContainerSeparateCards>
  <li className="overflow-hidden rounded-lg bg-white px-4 py-4 shadow sm:px-6 dark:bg-gray-800">Card 1</li>
  <li className="overflow-hidden rounded-lg bg-white px-4 py-4 shadow sm:px-6 dark:bg-gray-800">Card 2</li>
</ListContainerSeparateCards>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 125. ListContainerSeparateCardsMobile

**File:** `ListContainerSeparateCardsMobile.tsx`

**Description:** Same as `ListContainerSeparateCards` but each card is edge-to-edge on mobile. Child `<li>` elements should use `sm:rounded-lg` instead of `rounded-lg` for mobile-optimized cards.

**Goal:** Provide separate-card list layout optimized for mobile with full-bleed cards.

**Where to use it:**
- Mobile-first card lists
- Job board or product listing pages
- Any separate-card list on responsive layouts

**How to use it:**

```tsx
import ListContainerSeparateCardsMobile from '@/components/ui/layouts/ListContainerSeparateCardsMobile';

<ListContainerSeparateCardsMobile>
  <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-lg sm:px-6 dark:bg-gray-800">Card 1</li>
  <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-lg sm:px-6 dark:bg-gray-800">Card 2</li>
</ListContainerSeparateCardsMobile>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 126. ListContainerFlatCardDividers

**File:** `ListContainerFlatCardDividers.tsx`

**Description:** A flat card (no shadow) with a subtle ring border (`ring-1 ring-gray-900/5`) and dividers between items. Uses `overflow-hidden rounded-lg` outer wrapper with `divide-y` inner `<ul>`. Dark mode uses `dark:bg-gray-800 dark:ring-gray-700/50`.

**Goal:** Provide a low-emphasis card list — lighter than a shadow card, more enclosed than a bare divider list.

**Where to use it:**
- Secondary data lists
- Sidebar content lists
- Inline widget lists
- Any list needing subtle containment without shadow weight

**How to use it:**

```tsx
import ListContainerFlatCardDividers from '@/components/ui/layouts/ListContainerFlatCardDividers';

<ListContainerFlatCardDividers>
  <li className="px-4 py-4 sm:px-6">Flat card item 1</li>
  <li className="px-4 py-4 sm:px-6">Flat card item 2</li>
</ListContainerFlatCardDividers>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 127. ListContainerDividersMobile

**File:** `ListContainerDividersMobile.tsx`

**Description:** A simple divider list that is full-width on mobile. Uses `-mx-4 sm:mx-0` on the outer wrapper to break out of container padding on small screens, giving the list edge-to-edge appearance on mobile while respecting container bounds on larger screens.

**Goal:** Provide a divider list that bleeds to the screen edge on mobile for a native-app feel.

**Where to use it:**
- Mobile-optimized settings lists
- Contact or user lists on mobile
- Any divider list that should be full-width on small screens

**How to use it:**

```tsx
import ListContainerDividersMobile from '@/components/ui/layouts/ListContainerDividersMobile';

<ListContainerDividersMobile>
  <li className="px-4 py-4 sm:px-0">Full-width item 1</li>
  <li className="px-4 py-4 sm:px-0">Full-width item 2</li>
</ListContainerDividersMobile>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | No | List item elements to render |

---

## 128. DividerLabel

**File:** `DividerLabel.tsx`

**Description:** A horizontal divider with a centered text label. Uses a `relative` container with an absolutely positioned `border-t` line and a relatively positioned centered `<span>` overlaying it with `bg-white px-2 text-sm text-gray-500`. The background on the label matches the page background to "cut" the line. Full dark mode support.

**Goal:** Provide a labeled section divider for separating content areas with descriptive text.

**Where to use it:**
- "Or" dividers in login/signup forms
- Section separators in long pages
- "Continue" dividers in multi-step flows
- Any horizontal rule needing a centered label

**How to use it:**

```tsx
import DividerLabel from '@/components/ui/layouts/DividerLabel';

<DividerLabel label="Or continue with" />
<DividerLabel label="Section Break" />
<DividerLabel /> {/* defaults to "Continue" */}
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Label text (defaults to `'Continue'`) |

---

## 129. DividerIcon

**File:** `DividerIcon.tsx`

**Description:** A horizontal divider with a centered icon overlaying the line. Uses the same overlay technique as `DividerLabel` but renders a HeroIcon component instead of text. Accepts a custom `icon` prop (defaults to `PlusIcon`). Full dark mode support.

**Goal:** Provide a visual divider with an icon centerpiece for decorative or semantic separation.

**Where to use it:**
- Add-item dividers in forms
- Section separators with visual cues
- Between content blocks needing iconic separation

**How to use it:**

```tsx
import DividerIcon from '@/components/ui/layouts/DividerIcon';
import { StarIcon } from '@heroicons/react/20/solid';

<DividerIcon /> {/* defaults to PlusIcon */}
<DividerIcon icon={StarIcon} />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | `ComponentType<SVGProps<SVGSVGElement>>` | No | Icon component (defaults to `PlusIcon`) |

---

## 130. DividerLabelLeft

**File:** `DividerLabelLeft.tsx`

**Description:** Same as `DividerLabel` but the text label is left-aligned (`justify-start`) instead of centered. Uses `pr-3` padding on the right of the label. Full dark mode support.

**Goal:** Provide a left-aligned labeled divider for asymmetric layouts.

**Where to use it:**
- Section dividers where left-alignment matches the content flow
- Form separators with labels
- Timeline or log entries

**How to use it:**

```tsx
import DividerLabelLeft from '@/components/ui/layouts/DividerLabelLeft';

<DividerLabelLeft label="Or" />
<DividerLabelLeft /> {/* defaults to "Continue" */}
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Label text (defaults to `'Continue'`) |

---

## 131. DividerTitle

**File:** `DividerTitle.tsx`

**Description:** A horizontal divider with a centered title. Similar to `DividerLabel` but uses bolder, darker text (`text-sm font-medium text-gray-900`) instead of subtle gray label text. Full dark mode support.

**Goal:** Provide a prominent centered section title on a divider line.

**Where to use it:**
- Major section breaks in long pages
- Category dividers in lists
- Content area separators with headings

**How to use it:**

```tsx
import DividerTitle from '@/components/ui/layouts/DividerTitle';

<DividerTitle title="Recent Activity" />
<DividerTitle /> {/* defaults to "Projects" */}
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | No | Title text (defaults to `'Projects'`) |

---

## 132. DividerTitleLeft

**File:** `DividerTitleLeft.tsx`

**Description:** Same as `DividerTitle` but the title is left-aligned (`justify-start`). Uses `pr-3` padding. Full dark mode support.

**Goal:** Provide a left-aligned prominent title on a divider line.

**Where to use it:**
- Left-aligned section headers
- Content groupings in asymmetric layouts
- Settings or form section dividers

**How to use it:**

```tsx
import DividerTitleLeft from '@/components/ui/layouts/DividerTitleLeft';

<DividerTitleLeft title="Settings" />
<DividerTitleLeft /> {/* defaults to "Projects" */}
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | No | Title text (defaults to `'Projects'`) |

---

## 133. DividerButton

**File:** `DividerButton.tsx`

**Description:** A horizontal divider with a centered button overlaying the line. The button has a pill shape (`rounded-full`), ring border, shadow, and an optional leading icon. Full dark mode support.

**Goal:** Provide an actionable divider — a button embedded in a horizontal rule.

**Where to use it:**
- "Add new item" dividers between list items
- "Load more" separators in feeds
- "Insert block" dividers in content editors

**How to use it:**

```tsx
import DividerButton from '@/components/ui/layouts/DividerButton';
import { PlusIcon } from '@heroicons/react/20/solid';

<DividerButton label="Add item" onClick={() => console.log('add')} />
<DividerButton label="Load more" icon={PlusIcon} />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Button text (defaults to `'Button text'`) |
| `icon` | `ComponentType<SVGProps<SVGSVGElement>>` | No | Leading icon (defaults to `PlusIcon`) |
| `onClick` | `() => void` | No | Button click callback |

---

## 134. DividerTitleButton

**File:** `DividerTitleButton.tsx`

**Description:** A divider with a left-aligned title and a right-aligned button. The title and button sit on the divider line with `justify-between`. Button has the same pill style as `DividerButton`. Full dark mode support.

**Goal:** Provide a section divider with a heading and an action button.

**Where to use it:**
- Section headers with "Add new" actions
- List group dividers with management buttons
- Category headers with quick actions

**How to use it:**

```tsx
import DividerTitleButton from '@/components/ui/layouts/DividerTitleButton';

<DividerTitleButton
  title="Team Members"
  buttonLabel="Add member"
  onClick={() => console.log('add')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | No | Title text (defaults to `'Projects'`) |
| `buttonLabel` | `string` | No | Button text (defaults to `'Button text'`) |
| `icon` | `ComponentType<SVGProps<SVGSVGElement>>` | No | Button leading icon (defaults to `PlusIcon`) |
| `onClick` | `() => void` | No | Button click callback |

---

## 135. DividerToolbar

**File:** `DividerToolbar.tsx`

**Description:** A horizontal divider with a centered toolbar of icon-only buttons. Buttons are grouped in an inline-flex with shared borders (`-space-x-px`) and ring borders. First button gets `rounded-l-md`, last gets `rounded-r-md`. Defaults to edit, comment, and like icons. Full dark mode support.

**Goal:** Provide a divider with an inline toolbar for quick actions.

**Where to use it:**
- Comment/post dividers with action shortcuts
- Content block separators with editing tools
- Between items in a feed with interaction options

**How to use it:**

```tsx
import DividerToolbar from '@/components/ui/layouts/DividerToolbar';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';

<DividerToolbar /> {/* defaults to edit, comment, like */}
<DividerToolbar
  buttons={[
    { srLabel: 'Edit', icon: PencilSquareIcon, onClick: () => console.log('edit') },
    { srLabel: 'Delete', icon: TrashIcon, onClick: () => console.log('delete') },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `buttons` | `ToolbarButton[]` | No | Toolbar buttons (`{ srLabel, icon, onClick? }`) |
