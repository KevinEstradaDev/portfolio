# UI Component Library Reference — Part 2

A comprehensive guide to UI components 30+ in `src/components/ui/`.

---

## Table of Contents

| # | Component | Category |
|---|-----------|----------|
| 30 | [CheckboxListDescription](#30-checkboxlistdescription) | Form |
| 31 | [ToggleSimple](#31-togglesimple) | Form |
| 32 | [ToggleShort](#32-toggleshort) | Form |
| 33 | [ToggleWithIcon](#33-togglewithicon) | Form |
| 34 | [ActionPanelSimple](#34-actionpanelsimple) | Form |
| 35 | [ComboboxSimple](#35-comboboxsimple) | Form |
| 36 | [AlertWithDescription](#36-alertwithdescription) | Feedback |
| 37 | [AlertWithList](#37-alertwithlist) | Feedback |
| 38 | [AlertWithActions](#38-alertwithactions) | Feedback |
| 39 | [AlertWithLinkRight](#39-alertwithlinkright) | Feedback |
| 40 | [AlertWithAccentBorder](#40-alertwithaccentborder) | Feedback |
| 41 | [AlertWithDismiss](#41-alertwithdismiss) | Feedback |
| 42 | [NavbarDarkMenuLeft](#42-navbardarkmmenuleft) | Navigation |
| 43 | [NavbarDarkQuickAction](#43-navbardarkquickaction) | Navigation |
| 44 | [NavbarSimpleMenuLeft](#44-navbarsimplemenuleft) | Navigation |
| 45 | [NavbarDarkSearch](#45-navbardarksearch) | Navigation |
| 46 | [NavbarSearchColumn](#46-navbarsearchcolumn) | Navigation |
| 47 | [PaginationCardFooter](#47-paginationcardfooter) | Navigation |
| 48 | [PaginationCentered](#48-paginationcentered) | Navigation |
| 49 | [PaginationSimpleCardFooter](#49-paginationsimplecardfooter) | Navigation |
| 50 | [TabsUnderline](#50-tabsunderline) | Navigation |
| 51 | [TabsUnderlineIcons](#51-tabsunderlineicons) | Navigation |
| 52 | [TabsPillsBrand](#52-tabspillsbrand) | Navigation |
| 53 | [TabsUnderlineBadges](#53-tabsunderlinebadges) | Navigation |
| 54 | [VerticalNavSimple](#54-verticalnavsimple) | Navigation |
| 55 | [VerticalNavBadges](#55-verticalnavbadges) | Navigation |
| 56 | [VerticalNavIconsBadges](#56-verticalnaviconsbadges) | Navigation |
| 57 | [VerticalNavIcons](#57-verticalnavicons) | Navigation |
| 58 | [VerticalNavSecondary](#58-verticalnavsecondary) | Navigation |
| 59 | [SidebarNavLight](#59-sidebarnavlight) | Navigation |
| 60 | [SidebarNavDark](#60-sidebarnavdark) | Navigation |

---

## 30. CheckboxListDescription

**File:** `CheckboxListDescription.tsx`

**Description:** A checkbox group rendered as a `<fieldset>` with a `<legend>` label. Each option displays a styled checkbox, a title, and a description below it. Uses native `<input type="checkbox">` elements with custom appearance, indigo accent colors, check/indeterminate SVG overlays, and dark mode support.

**Goal:** Provide a multi-select checkbox list where each option includes an explanatory description — ideal for notification preferences and feature opt-ins.

**Where to use it:**
- Notification preference panels
- Feature opt-in checklists
- Settings forms with descriptive options
- Survey or consent forms

**How to use it:**

```tsx
import CheckboxListDescription from '@/components/ui/CheckboxListDescription';

<CheckboxListDescription
  label="Notifications"
  options={[
    { id: 'comments', title: 'Comments', description: 'Get notified when someone posts a comment.' },
    { id: 'candidates', title: 'Candidates', description: 'Get notified when a candidate applies.' },
    { id: 'offers', title: 'Offers', description: 'Get notified when a candidate accepts or rejects an offer.' },
  ]}
  defaultChecked={['comments']}
  onChange={(ids) => console.log('checked:', ids)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Fieldset legend text |
| `options` | `CheckboxOption[]` | Yes | Options array (`{ id, title, description }`) |
| `defaultChecked` | `string[]` | No | Initially checked option ids |
| `onChange` | `(checkedIds: string[]) => void` | No | Change callback with all checked ids |

---

## 31. ToggleSimple

**File:** `ToggleSimple.tsx`

**Description:** A simple on/off toggle switch built as a `<button>` with `role="switch"`. The knob slides left/right with a smooth transition. Uses indigo when enabled, gray when disabled, with dark mode and focus-visible support.

**Goal:** Provide a clean, accessible toggle switch for binary on/off settings.

**Where to use it:**
- Settings pages (enable/disable features)
- Notification preferences
- Dark mode switches
- Any boolean toggle

**How to use it:**

```tsx
import ToggleSimple from '@/components/ui/ToggleSimple';

<ToggleSimple
  label="Enable notifications"
  defaultEnabled={false}
  onChange={(enabled) => console.log('toggled:', enabled)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Accessible label (defaults to `"Toggle"`) |
| `defaultEnabled` | `boolean` | No | Initial state (defaults to `false`) |
| `onChange` | `(enabled: boolean) => void` | No | Toggle callback |

---

## 32. ToggleShort

**File:** `ToggleShort.tsx`

**Description:** A compact variant of the toggle switch with a shorter track height (`h-5 w-10`) and smaller knob (`size-4`). Same behavior and accessibility as ToggleSimple but with a more compact footprint.

**Goal:** Offer a smaller toggle for inline use or denser UIs where the standard toggle is too large.

**Where to use it:**
- Inline settings within tables or lists
- Dense settings panels
- Mobile-optimized forms
- Anywhere a compact toggle is preferred

**How to use it:**

```tsx
import ToggleShort from '@/components/ui/ToggleShort';

<ToggleShort
  label="Compact mode"
  defaultEnabled={true}
  onChange={(enabled) => console.log('toggled:', enabled)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Accessible label (defaults to `"Toggle"`) |
| `defaultEnabled` | `boolean` | No | Initial state (defaults to `false`) |
| `onChange` | `(enabled: boolean) => void` | No | Toggle callback |

---

## 33. ToggleWithIcon

**File:** `ToggleWithIcon.tsx`

**Description:** A toggle switch with embedded icons inside the knob — an ✗ icon when off and a ✓ checkmark when on. Icons crossfade with opacity transitions. Same dimensions and behavior as ToggleSimple.

**Goal:** Reinforce toggle state visually with icons inside the knob, providing extra clarity beyond color alone.

**Where to use it:**
- Accessibility-focused settings
- Forms where state clarity is critical
- Any toggle where an icon reinforces the on/off meaning
- Feature flags or approval toggles

**How to use it:**

```tsx
import ToggleWithIcon from '@/components/ui/ToggleWithIcon';

<ToggleWithIcon
  label="Dark mode"
  defaultEnabled={false}
  onChange={(enabled) => console.log('toggled:', enabled)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | No | Accessible label (defaults to `"Toggle"`) |
| `defaultEnabled` | `boolean` | No | Initial state (defaults to `false`) |
| `onChange` | `(enabled: boolean) => void` | No | Toggle callback |

---

## 34. ActionPanelSimple

**File:** `ActionPanelSimple.tsx`

**Description:** A simple card panel with a bold title, descriptive text, and a primary action button. Styled with a white card, rounded corners on larger screens, and shadow. Fully dark-mode compatible.

**Goal:** Present a single call-to-action in a well-contained card — ideal for settings sections, subscription management, or any page needing a prominent action block.

**Where to use it:**
- Subscription / plan management sections
- Settings action cards
- Dashboard call-to-action blocks
- Empty state alternatives with a clear next step

**How to use it:**

```tsx
import ActionPanelSimple from '@/components/ui/ActionPanelSimple';

<ActionPanelSimple
  title="Manage subscription"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
  buttonLabel="Change plan"
  onAction={() => console.log('clicked')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Panel heading |
| `description` | `string` | Yes | Description text |
| `buttonLabel` | `string` | No | Button text (defaults to `"Button text"`) |
| `onAction` | `() => void` | No | Button click handler |

---

## 35. ComboboxSimple

**File:** `ComboboxSimple.tsx`

**Description:** A searchable select/combobox built with HeadlessUI `Combobox`. Features a text input with type-ahead filtering, a chevron button to open the dropdown, and an animated options list. Selected items show a check icon. Shows a "Nothing found" message when no results match.

**Goal:** Replace basic select elements with a searchable, filterable dropdown — critical for long option lists where users need to quickly find an item.

**Where to use it:**
- User/assignee selectors
- Country or city pickers
- Tag or category selectors
- Any form field with many options needing search

**How to use it:**

```tsx
import ComboboxSimple from '@/components/ui/ComboboxSimple';

<ComboboxSimple
  label="Assigned to"
  options={[
    { id: 1, name: 'Leslie Alexander' },
    { id: 2, name: 'Michael Foster' },
    { id: 3, name: 'Dries Vincent' },
    { id: 4, name: 'Lindsay Walton' },
  ]}
  onChange={(opt) => console.log('selected:', opt)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Label above the combobox |
| `options` | `ComboboxOption[]` | Yes | Options array (`{ id, name }`) |
| `defaultValue` | `ComboboxOption \| null` | No | Initially selected option |
| `onChange` | `(option: ComboboxOption \| null) => void` | No | Selection change callback |

---

## 36. AlertWithDescription

**File:** `AlertWithDescription.tsx`

**Description:** A rounded alert box with a HeroIcon on the left, a bold title, and a description paragraph. Color-coded background and text per type: green (success), yellow (warning), red (error), blue (info). Full dark mode support.

**Goal:** Display contextual feedback messages with an icon and explanatory text.

**Where to use it:**
- Form validation feedback
- Status messages after user actions
- System notifications or warnings
- Informational banners within page sections

**How to use it:**

```tsx
import AlertWithDescription from '@/components/ui/AlertWithDescription';

<AlertWithDescription
  type="warning"
  title="Attention needed"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | No | Color/icon scheme (defaults to `'warning'`) |
| `title` | `string` | Yes | Alert title |
| `description` | `string` | Yes | Description text |

---

## 37. AlertWithList

**File:** `AlertWithList.tsx`

**Description:** An alert with icon and title, where the body is a bulleted `<ul>` list of messages. Same color-coding system as AlertWithDescription.

**Goal:** Display multiple related messages or errors in a single alert block.

**Where to use it:**
- Form validation errors (list of issues)
- Multi-item status updates
- Compliance or checklist notifications
- Batch operation results

**How to use it:**

```tsx
import AlertWithList from '@/components/ui/AlertWithList';

<AlertWithList
  type="error"
  title="There were 2 errors with your submission"
  items={[
    'Your password must be at least 8 characters',
    'Your password must include at least one pro letter',
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | No | Color/icon scheme (defaults to `'error'`) |
| `title` | `string` | Yes | Alert title |
| `items` | `string[]` | Yes | List of message strings |

---

## 38. AlertWithActions

**File:** `AlertWithActions.tsx`

**Description:** An alert with icon, title, description, and action buttons below the description. Buttons use color-matched styling with hover and focus-visible states.

**Goal:** Provide contextual feedback with inline actions — letting users respond directly from the alert.

**Where to use it:**
- Order confirmation with "View status" / "Dismiss"
- Error recovery prompts
- Approval/rejection flows
- Multi-step process notifications

**How to use it:**

```tsx
import AlertWithActions from '@/components/ui/AlertWithActions';

<AlertWithActions
  type="success"
  title="Order completed"
  description="Your order has been processed successfully."
  actions={[
    { label: 'View status', onClick: () => console.log('view') },
    { label: 'Dismiss', onClick: () => console.log('dismiss') },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | No | Color/icon scheme (defaults to `'success'`) |
| `title` | `string` | Yes | Alert title |
| `description` | `string` | Yes | Description text |
| `actions` | `AlertAction[]` | No | Buttons (`{ label, onClick }`) |

---

## 39. AlertWithLinkRight

**File:** `AlertWithLinkRight.tsx`

**Description:** A single-line alert with icon and message on the left, and a link with arrow on the right. Responsive — stacks vertically on mobile.

**Goal:** Provide a compact notification with a navigation action — ideal for update notices and announcements.

**Where to use it:**
- Software update notices
- Policy change announcements
- Feature deprecation warnings
- Quick navigation prompts

**How to use it:**

```tsx
import AlertWithLinkRight from '@/components/ui/AlertWithLinkRight';

<AlertWithLinkRight
  type="info"
  message="A new software update is available. See what's new in version 2.0.4."
  linkText="Details"
  href="/changelog"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | No | Color/icon scheme (defaults to `'info'`) |
| `message` | `string` | Yes | Alert message |
| `linkText` | `string` | No | Link label (defaults to `'Details'`) |
| `href` | `string` | No | Link URL (defaults to `'#'`) |
| `onClick` | `() => void` | No | Click handler alternative to href |

---

## 40. AlertWithAccentBorder

**File:** `AlertWithAccentBorder.tsx`

**Description:** An alert with a thick left border accent, icon, title, and description. No rounded corners — the left border provides the visual emphasis.

**Goal:** Provide a visually distinct alert style that uses a border accent instead of rounded corners.

**Where to use it:**
- Documentation call-outs
- Important notices in long-form content
- Warning messages in settings panels
- Sidebar informational blocks

**How to use it:**

```tsx
import AlertWithAccentBorder from '@/components/ui/AlertWithAccentBorder';

<AlertWithAccentBorder
  type="warning"
  title="Attention needed"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | No | Color/icon/border scheme (defaults to `'warning'`) |
| `title` | `string` | Yes | Alert title |
| `description` | `string` | Yes | Description text |

---

## 41. AlertWithDismiss

**File:** `AlertWithDismiss.tsx`

**Description:** An alert with icon, title, description, and an X dismiss button in the top-right corner. Dismisses via local state — hides the alert on click.

**Goal:** Provide dismissible notifications that users can close once acknowledged.

**Where to use it:**
- Temporary success/error messages
- Cookie or privacy notices
- One-time announcements
- Flash messages after form submissions

**How to use it:**

```tsx
import AlertWithDismiss from '@/components/ui/AlertWithDismiss';

<AlertWithDismiss
  type="success"
  title="Successfully uploaded"
  description="Your file has been uploaded and is being processed."
  onDismiss={() => console.log('dismissed')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | No | Color/icon scheme (defaults to `'success'`) |
| `title` | `string` | Yes | Alert title |
| `description` | `string` | Yes | Description text |
| `onDismiss` | `() => void` | No | Callback when dismissed |

---

## 42. NavbarDarkMenuLeft

**File:** `NavbarDarkMenuLeft.tsx`

**Description:** A dark (`bg-gray-800`) navbar with a hamburger menu button on the left (mobile), logo, navigation links, notification bell, and profile dropdown. Uses HeadlessUI `Disclosure` for the mobile menu and `Menu` for the profile dropdown. Active link highlighted with `bg-gray-900`.

**Goal:** Provide a standard dark application navbar with responsive mobile menu.

**Where to use it:**
- Application shells with dark navigation
- Admin dashboards
- Internal tools
- Any app requiring a dark top navbar

**How to use it:**

```tsx
import NavbarDarkMenuLeft from '@/components/ui/NavbarDarkMenuLeft';

<NavbarDarkMenuLeft
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | No | Nav links (`{ name, href, current }`) |
| `userNavigation` | `UserNavItem[]` | No | Profile dropdown items (`{ name, href }`) |
| `userImageUrl` | `string` | No | Avatar image URL |
| `userName` | `string` | No | Accessible user name label |

---

## 43. NavbarDarkQuickAction

**File:** `NavbarDarkQuickAction.tsx`

**Description:** A dark navbar like NavbarDarkMenuLeft but with an additional indigo "New Project" quick-action button (with PlusIcon) next to the notification bell.

**Goal:** Provide a dark navbar with a prominent call-to-action for creating new items.

**Where to use it:**
- Project management tools (create new project)
- CRM dashboards (add new contact)
- Content management systems (new post)
- Any app with a frequent creation action

**How to use it:**

```tsx
import NavbarDarkQuickAction from '@/components/ui/NavbarDarkQuickAction';

<NavbarDarkQuickAction
  quickActionLabel="New Project"
  onQuickAction={() => console.log('create')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | No | Nav links |
| `userNavigation` | `UserNavItem[]` | No | Profile dropdown items |
| `userImageUrl` | `string` | No | Avatar image URL |
| `userName` | `string` | No | Accessible user name label |
| `quickActionLabel` | `string` | No | CTA button text (defaults to `'New Project'`) |
| `onQuickAction` | `() => void` | No | CTA click handler |

---

## 44. NavbarSimpleMenuLeft

**File:** `NavbarSimpleMenuLeft.tsx`

**Description:** A light (`bg-white`) navbar with the same structure as NavbarDarkMenuLeft — hamburger left, logo, nav links, bell, profile dropdown. Uses gray/indigo active-link styling with a subtle shadow. Full dark mode support.

**Goal:** Provide a clean, light-themed navbar for applications preferring a white/neutral top bar.

**Where to use it:**
- SaaS applications with light themes
- Content-focused platforms
- Marketing dashboards
- Any app preferring a light navigation bar

**How to use it:**

```tsx
import NavbarSimpleMenuLeft from '@/components/ui/NavbarSimpleMenuLeft';

<NavbarSimpleMenuLeft
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Settings', href: '#', current: false },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | No | Nav links |
| `userNavigation` | `UserNavItem[]` | No | Profile dropdown items |
| `userImageUrl` | `string` | No | Avatar image URL |
| `userName` | `string` | No | Accessible user name label |

---

## 45. NavbarDarkSearch

**File:** `NavbarDarkSearch.tsx`

**Description:** A dark navbar with a search input field (`bg-gray-700` that transitions to white on focus), navigation links, notification bell, and profile dropdown. Search field is also shown in the mobile menu.

**Goal:** Provide a dark navbar with integrated search for applications that need quick search access from the navigation bar.

**Where to use it:**
- Documentation sites
- E-commerce platforms
- Knowledge bases
- Any app with search-heavy workflows

**How to use it:**

```tsx
import NavbarDarkSearch from '@/components/ui/NavbarDarkSearch';

<NavbarDarkSearch
  searchPlaceholder="Search projects..."
  onSearch={(query) => console.log('searching:', query)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | No | Nav links |
| `userNavigation` | `UserNavItem[]` | No | Profile dropdown items |
| `userImageUrl` | `string` | No | Avatar image URL |
| `userName` | `string` | No | Accessible user name label |
| `searchPlaceholder` | `string` | No | Search input placeholder (defaults to `'Search'`) |
| `onSearch` | `(query: string) => void` | No | Search callback |

---

## 46. NavbarSearchColumn

**File:** `NavbarSearchColumn.tsx`

**Description:** A light (`bg-white`) two-row column layout navbar. The top row contains logo, a centered search input, notification bell, and profile dropdown. The bottom row shows navigation links with `border-b-2` active indicator. Uses HeadlessUI `Disclosure` for mobile and `Menu` for profile dropdown. Full dark mode support.

**Goal:** Provide a spacious navbar layout that separates search and navigation into distinct rows — ideal for content-heavy applications.

**Where to use it:**
- Content management systems
- Documentation platforms
- E-commerce admin panels
- Any app needing prominent search alongside navigation

**How to use it:**

```tsx
import NavbarSearchColumn from '@/components/ui/NavbarSearchColumn';

<NavbarSearchColumn
  searchPlaceholder="Search projects..."
  onSearch={(query) => console.log('searching:', query)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | No | Nav links (`{ name, href, current }`) |
| `userNavigation` | `UserNavItem[]` | No | Profile dropdown items (`{ name, href }`) |
| `userImageUrl` | `string` | No | Avatar image URL |
| `userName` | `string` | No | Accessible user name label |
| `userEmail` | `string` | No | User email for mobile menu |
| `searchPlaceholder` | `string` | No | Search input placeholder (defaults to `'Search'`) |
| `onSearch` | `(query: string) => void` | No | Search callback |

---

## 47. PaginationCardFooter

**File:** `PaginationCardFooter.tsx`

**Description:** A card-style pagination footer showing "Showing X to Y of Z results" on the left with Previous/Next buttons and numbered page buttons on the right. Desktop shows full page numbers with ellipsis; mobile shows simple Previous/Next buttons.

**Goal:** Provide a complete, information-rich pagination bar for tables and data lists within card containers.

**Where to use it:**
- Data tables with card wrappers
- Search result footers
- Content listing pages
- Admin data views

**How to use it:**

```tsx
import PaginationCardFooter from '@/components/ui/PaginationCardFooter';

<PaginationCardFooter
  totalItems={97}
  itemsPerPage={10}
  currentPage={1}
  onPageChange={(page) => console.log('page:', page)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `totalItems` | `number` | No | Total item count (defaults to `97`) |
| `itemsPerPage` | `number` | No | Items per page (defaults to `10`) |
| `currentPage` | `number` | No | Controlled current page (1-indexed) |
| `onPageChange` | `(page: number) => void` | No | Page change callback |

---

## 48. PaginationCentered

**File:** `PaginationCentered.tsx`

**Description:** A centered pagination with border-top active indicator. Previous/Next use long arrow icons at the edges, with numbered page buttons centered between them. Active page shows an indigo `border-t-2`. Page numbers hidden on mobile.

**Goal:** Provide an elegant, centered pagination style that works well as a standalone section divider.

**Where to use it:**
- Blog post listings
- Search results (non-card layout)
- Portfolio galleries
- Full-width content pagination

**How to use it:**

```tsx
import PaginationCentered from '@/components/ui/PaginationCentered';

<PaginationCentered
  totalItems={97}
  itemsPerPage={10}
  currentPage={1}
  onPageChange={(page) => console.log('page:', page)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `totalItems` | `number` | No | Total item count (defaults to `97`) |
| `itemsPerPage` | `number` | No | Items per page (defaults to `10`) |
| `currentPage` | `number` | No | Controlled current page (1-indexed) |
| `onPageChange` | `(page: number) => void` | No | Page change callback |

---

## 49. PaginationSimpleCardFooter

**File:** `PaginationSimpleCardFooter.tsx`

**Description:** A minimal card footer pagination with "Showing X to Y of Z results" on the left and simple Previous/Next buttons on the right. No page numbers — the simplest pagination variant.

**Goal:** Provide a lightweight, minimal pagination footer for simple data views that don't require numbered page navigation.

**Where to use it:**
- Simple data tables
- Activity feeds
- Notification lists
- Any paginated content needing minimal controls

**How to use it:**

```tsx
import PaginationSimpleCardFooter from '@/components/ui/PaginationSimpleCardFooter';

<PaginationSimpleCardFooter
  totalItems={97}
  itemsPerPage={10}
  currentPage={1}
  onPageChange={(page) => console.log('page:', page)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `totalItems` | `number` | No | Total item count (defaults to `97`) |
| `itemsPerPage` | `number` | No | Items per page (defaults to `10`) |
| `currentPage` | `number` | No | Controlled current page (1-indexed) |
| `onPageChange` | `(page: number) => void` | No | Page change callback |

---

## 50. TabsUnderline

**File:** `TabsUnderline.tsx`

**Description:** Horizontal tab bar with a bottom border. The active tab shows an indigo `border-b-2` underline with indigo text; inactive tabs use gray text with hover effects. Collapses to a `<select>` dropdown on mobile.

**Goal:** Provide a clean, standard underline tab navigation for organizing content sections.

**Where to use it:**
- Settings pages (account, company, billing)
- Profile sections
- Content category switching
- Any multi-section view

**How to use it:**

```tsx
import TabsUnderline from '@/components/ui/TabsUnderline';

<TabsUnderline
  tabs={[
    { name: 'My Account', current: true },
    { name: 'Company', current: false },
    { name: 'Team Members', current: false },
    { name: 'Billing', current: false },
  ]}
  onChange={(tabName) => console.log('tab:', tabName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `Tab[]` | No | Tab items (`{ name, href?, current? }`) |
| `defaultTab` | `string` | No | Initially active tab name |
| `onChange` | `(tabName: string) => void` | No | Tab change callback |

---

## 51. TabsUnderlineIcons

**File:** `TabsUnderlineIcons.tsx`

**Description:** Same layout as TabsUnderline but each tab includes a HeroIcon to the left of the label. Active tab and its icon use indigo coloring; inactive tabs use gray with group-hover transitions. Collapses to `<select>` on mobile.

**Goal:** Enhance underline tabs with icons for improved scannability and visual identity per section.

**Where to use it:**
- Settings pages with distinct section icons
- Dashboard navigation with visual cues
- Admin panels with categorized sections
- Multi-step wizards with icon indicators

**How to use it:**

```tsx
import TabsUnderlineIcons from '@/components/ui/TabsUnderlineIcons';
import { UserCircleIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid';

<TabsUnderlineIcons
  tabs={[
    { name: 'My Account', icon: UserCircleIcon, current: true },
    { name: 'Company', icon: BuildingOfficeIcon, current: false },
  ]}
  onChange={(tabName) => console.log('tab:', tabName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `TabWithIcon[]` | No | Tab items (`{ name, icon?, href?, current? }`) |
| `defaultTab` | `string` | No | Initially active tab name |
| `onChange` | `(tabName: string) => void` | No | Tab change callback |

---

## 52. TabsPillsBrand

**File:** `TabsPillsBrand.tsx`

**Description:** Pill-shaped tabs with an indigo brand background (`bg-indigo-600`, white text) on the active tab. Inactive tabs use gray text with hover transitions. Pills have `rounded-md` shape. Collapses to `<select>` on mobile.

**Goal:** Provide a bold, branded pill-style tab navigation that makes the active section unmistakably clear.

**Where to use it:**
- Marketing dashboards
- Feature-rich applications with bold branding
- Content filtering (e.g., All / Active / Archived)
- Category selectors

**How to use it:**

```tsx
import TabsPillsBrand from '@/components/ui/TabsPillsBrand';

<TabsPillsBrand
  tabs={[
    { name: 'My Account', current: true },
    { name: 'Company', current: false },
    { name: 'Team Members', current: false },
    { name: 'Billing', current: false },
  ]}
  onChange={(tabName) => console.log('tab:', tabName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `Tab[]` | No | Tab items (`{ name, href?, current? }`) |
| `defaultTab` | `string` | No | Initially active tab name |
| `onChange` | `(tabName: string) => void` | No | Tab change callback |

---

## 53. TabsUnderlineBadges

**File:** `TabsUnderlineBadges.tsx`

**Description:** Horizontal underline tab bar similar to TabsUnderline but each tab supports an optional numeric badge pill. Active tab shows indigo `border-b-2` and indigo text; badge pill color-codes by active state (indigo bg when active, gray when inactive). Badges are hidden on small screens. Collapses to `<select>` on mobile.

**Goal:** Provide underline tabs with count badges — ideal for sections where items need quantity indicators (e.g., notifications, open issues).

**Where to use it:**
- Issue tracker tabs (Open 12, Closed 5)
- Notification categories with counts
- Content sections with item totals
- Multi-section views with activity indicators

**How to use it:**

```tsx
import TabsUnderlineBadges from '@/components/ui/navigation/TabsUnderlineBadges';

<TabsUnderlineBadges
  tabs={[
    { name: 'My Account', current: true },
    { name: 'Company', current: false },
    { name: 'Team Members', count: 4, current: false },
    { name: 'Billing', current: false },
  ]}
  onChange={(tabName) => console.log('tab:', tabName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `TabWithBadge[]` | No | Tab items (`{ name, href?, count?, current? }`) |
| `defaultTab` | `string` | No | Initially active tab name |
| `onChange` | `(tabName: string) => void` | No | Tab change callback |

---

## 54. VerticalNavSimple

**File:** `VerticalNavSimple.tsx`

**Description:** A simple vertical navigation list rendered as a `<nav>` with stacked `<button>` items. Active item has `bg-gray-50` / `bg-gray-800` (dark) with indigo text. Inactive items show gray text with hover effects. Items have `rounded-md` styling.

**Goal:** Provide a clean, minimal vertical navigation for sidebars and settings panels.

**Where to use it:**
- Settings pages
- Admin panels
- Sidebar navigation sections
- Dashboard menus

**How to use it:**

```tsx
import VerticalNavSimple from '@/components/ui/navigation/VerticalNavSimple';

<VerticalNavSimple
  items={[
    { name: 'Dashboard', current: true },
    { name: 'Team', current: false },
    { name: 'Projects', current: false },
  ]}
  onChange={(itemName) => console.log('nav:', itemName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItem[]` | No | Nav items (`{ name, href?, current? }`) |
| `defaultActive` | `string` | No | Initially active item name |
| `onChange` | `(itemName: string) => void` | No | Item click callback |

---

## 55. VerticalNavBadges

**File:** `VerticalNavBadges.tsx`

**Description:** Vertical navigation list like VerticalNavSimple but each item supports an optional numeric badge on the right side. Badges are styled as pills with `ring-1 ring-inset` borders, color-coded by active state.

**Goal:** Add count indicators to vertical nav items — useful for showing unread counts, pending items, or category totals.

**Where to use it:**
- Notification center navigation
- Email folder navigation (Inbox 12, Drafts 3)
- Task management category lists
- Any nav with quantity indicators

**How to use it:**

```tsx
import VerticalNavBadges from '@/components/ui/navigation/VerticalNavBadges';

<VerticalNavBadges
  items={[
    { name: 'Dashboard', current: true },
    { name: 'Team', count: 12, current: false },
    { name: 'Calendar', count: 20, current: false },
  ]}
  onChange={(itemName) => console.log('nav:', itemName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItemWithBadge[]` | No | Nav items (`{ name, href?, count?, current? }`) |
| `defaultActive` | `string` | No | Initially active item name |
| `onChange` | `(itemName: string) => void` | No | Item click callback |

---

## 56. VerticalNavIconsBadges

**File:** `VerticalNavIconsBadges.tsx`

**Description:** Vertical navigation with both HeroIcons on the left and optional numeric badge pills on the right. Icons change color based on active/hover state. Combines the features of VerticalNavIcons and VerticalNavBadges.

**Goal:** Provide the most feature-rich vertical nav variant with icons for visual identity and badges for quantity indicators.

**Where to use it:**
- Full-featured admin dashboards
- Project management sidebars
- CRM navigation panels
- Any complex app sidebar

**How to use it:**

```tsx
import VerticalNavIconsBadges from '@/components/ui/navigation/VerticalNavIconsBadges';
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

<VerticalNavIconsBadges
  items={[
    { name: 'Dashboard', icon: HomeIcon, current: true },
    { name: 'Team', icon: UsersIcon, count: 12, current: false },
  ]}
  onChange={(itemName) => console.log('nav:', itemName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItemWithIconBadge[]` | No | Nav items (`{ name, href?, icon?, count?, current? }`) |
| `defaultActive` | `string` | No | Initially active item name |
| `onChange` | `(itemName: string) => void` | No | Item click callback |

---

## 57. VerticalNavIcons

**File:** `VerticalNavIcons.tsx`

**Description:** Vertical navigation list with HeroIcons on the left of each item. Active item icon and text use indigo coloring; inactive icons are gray with group-hover transitions. No badges — a clean icon + label nav.

**Goal:** Provide vertical nav with icons for improved scannability without the clutter of badges.

**Where to use it:**
- Application sidebars
- Settings navigation
- Dashboard menus
- Mobile app-like navigation

**How to use it:**

```tsx
import VerticalNavIcons from '@/components/ui/navigation/VerticalNavIcons';
import { HomeIcon, UsersIcon, FolderIcon } from '@heroicons/react/24/outline';

<VerticalNavIcons
  items={[
    { name: 'Dashboard', icon: HomeIcon, current: true },
    { name: 'Team', icon: UsersIcon, current: false },
    { name: 'Projects', icon: FolderIcon, current: false },
  ]}
  onChange={(itemName) => console.log('nav:', itemName)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItemWithIcon[]` | No | Nav items (`{ name, href?, icon?, current? }`) |
| `defaultActive` | `string` | No | Initially active item name |
| `onChange` | `(itemName: string) => void` | No | Item click callback |

---

## 58. VerticalNavSecondary

**File:** `VerticalNavSecondary.tsx`

**Description:** Two-section vertical navigation with a primary section (icons + optional badges) and a secondary section (initial-letter indicators + labels). Sections are separated by a labeled divider. Selecting a primary item deselects secondary and vice versa.

**Goal:** Provide a two-tier navigation pattern — primary for main sections, secondary for teams/projects/categories.

**Where to use it:**
- Application dashboards with team/project sections
- Admin panels with resource categories
- Multi-tenant applications
- Any app requiring grouped navigation

**How to use it:**

```tsx
import VerticalNavSecondary from '@/components/ui/navigation/VerticalNavSecondary';
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

<VerticalNavSecondary
  items={[
    { name: 'Dashboard', icon: HomeIcon, count: 5, current: true },
    { name: 'Team', icon: UsersIcon, current: false },
  ]}
  secondaryItems={[
    { name: 'Heroicons', initial: 'H' },
    { name: 'Tailwind Labs', initial: 'T' },
  ]}
  secondaryTitle="Your teams"
  onChange={(name) => console.log('primary:', name)}
  onSecondaryChange={(name) => console.log('secondary:', name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `NavItemWithIcon[]` | No | Primary nav items (`{ name, href?, icon?, count?, current? }`) |
| `secondaryItems` | `SecondaryNavItem[]` | No | Secondary items (`{ name, href?, initial, current? }`) |
| `secondaryTitle` | `string` | No | Secondary section label (defaults to `'Your teams'`) |
| `defaultActive` | `string` | No | Initially active primary item |
| `defaultSecondaryActive` | `string` | No | Initially active secondary item |
| `onChange` | `(itemName: string) => void` | No | Primary item click callback |
| `onSecondaryChange` | `(itemName: string) => void` | No | Secondary item click callback |

---

## 59. SidebarNavLight

**File:** `SidebarNavLight.tsx`

**Description:** A full sidebar component with light theme (`bg-white`, border-right). Includes: company logo, primary icon navigation, secondary navigation with initial-letter indicators, a settings link with gear icon, and a profile section at the bottom with avatar and name. Full dark mode support.

**Goal:** Provide a complete, ready-to-use light-themed sidebar suitable as a main application navigation shell.

**Where to use it:**
- SaaS application shells
- Admin dashboards
- Content management systems
- Any app requiring a full sidebar layout

**How to use it:**

```tsx
import SidebarNavLight from '@/components/ui/navigation/SidebarNavLight';

<div className="h-screen w-72">
  <SidebarNavLight
    profileName="Tom Cook"
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

## 60. SidebarNavDark

**File:** `SidebarNavDark.tsx`

**Description:** A full sidebar component with dark theme (`bg-gray-900`). Same structure as SidebarNavLight: logo, primary icon nav, secondary nav with initials, and settings link. Active items use `bg-gray-800` with white text. Secondary item initials use `bg-gray-800` with indigo border accents. No profile section at bottom — uses settings gear only.

**Goal:** Provide a complete, ready-to-use dark-themed sidebar for applications with dark UI requirements.

**Where to use it:**
- Dark-themed SaaS applications
- Developer tools and IDEs
- Media and content platforms
- Admin dashboards with dark mode

**How to use it:**

```tsx
import SidebarNavDark from '@/components/ui/navigation/SidebarNavDark';

<div className="h-screen w-72">
  <SidebarNavDark
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

