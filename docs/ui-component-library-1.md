# UI Component Library Reference

A comprehensive guide to every reusable UI component available in `src/components/ui/`.

---

## Table of Contents

| # | Component | Category |
|---|-----------|----------|
| 1 | [BentoGrid](#1-bentogrid) | Content Display |
| 2 | [BrandNavOverlapLayout](#2-brandnavoverlaplayout) | Stacked Layout |
| 3 | [BrandSidebarLayout](#3-brandsidebarlayout) | Sidebar Layout |
| 4 | [ContentSection](#4-contentsection) | Content Display |
| 5 | [DescriptionList](#5-descriptionlist) | Data Display |
| 6 | [FloatingBanner](#6-floatingbanner) | Notification |
| 7 | [FlyoutMenu](#7-flyoutmenu) | Navigation |
| 8 | [Footer](#8-footer) | Navigation |
| 9 | [Header](#9-header) | Navigation |
| 10 | [LandingPage](#10-landingpage) | Page Section |
| 11 | [NarrowSidebarHeaderLayout](#11-narrowsidebarheaderlayout) | Multi-Column Layout |
| 12 | [NarrowSidebarLayout](#12-narrowsidebarlayout) | Multi-Column Layout |
| 13 | [OverlapLayout](#13-overlaplayout) | Stacked Layout |
| 14 | [PageHeadingBanner](#14-pageheadingbanner) | Page Heading |
| 15 | [PageHeadingMeta](#15-pageheadingmeta) | Page Heading |
| 16 | [PrivacyBanner](#16-privacybanner) | Notification |
| 17 | [SectionHeadingActionsTabs](#17-sectionheadingactionstabs) | Section Heading |
| 18 | [SectionHeadingDescription](#18-sectionheadingdescription) | Section Heading |
| 19 | [SectionHeadingTabs](#19-sectionheadingtabs) | Section Heading |
| 20 | [SidebarLayout](#20-sidebarlayout) | Sidebar Layout |
| 21 | [StackedLayout](#21-stackedlayout) | Stacked Layout |
| 22 | [ThreeColumnLayout](#22-threecolumnlayout) | Multi-Column Layout |
| 23 | [EmptyStateDashed](#23-emptystatedashed) | Feedback |
| 24 | [FormLayoutTwoColumn](#24-formlayouttwocolumn) | Form |
| 25 | [SelectMenuCustom](#25-selectmenucustom) | Form |
| 26 | [TextareaSimple](#26-textareasimple) | Form |
| 27 | [TextareaTitlePill](#27-textareatitlepill) | Form |
| 28 | [RadioGroupSimpleList](#28-radiogroupsimplelist) | Form |
| 29 | [RadioGroupSimpleTable](#29-radiogroupsimpletable) | Form |

---

## 1. BentoGrid

**File:** `BentoGrid.tsx`

**Description:** A modern asymmetric grid for showcasing features or highlights in a visually engaging bento-box layout. Renders a 2×2 grid where the first row splits 4/2 columns and the second row splits 2/4 columns, creating visual variety.

**Goal:** Present up to four feature cards in an eye-catching, magazine-style grid that naturally draws the reader's attention to different content areas.

**Where to use it:**
- Product feature showcases
- Portfolio highlights sections
- Service offering overviews
- Marketing landing pages

**How to use it:**

```tsx
import BentoGrid from '@/components/ui/BentoGrid';

<BentoGrid
  eyebrow="What we offer"
  title="Everything you need"
  description="An optional subtitle paragraph."
  items={[
    { title: "Feature A", description: "Details about A", content: <SomeVisual /> },
    { title: "Feature B", description: "Details about B" },
    { title: "Feature C", description: "Details about C" },
    { title: "Feature D", description: "Details about D" },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `eyebrow` | `string` | No | Small label above the title |
| `title` | `string` | Yes | Main heading |
| `description` | `string` | No | Supporting paragraph |
| `items` | `BentoItem[]` | Yes | Array of up to 4 items (title, description, className?, content?) |

---

## 2. BrandNavOverlapLayout

**File:** `BrandNavOverlapLayout.tsx`

**Description:** A full-page stacked layout with a branded top navigation bar that features an indigo overlap effect behind the page header area. Includes user profile dropdown, notification bell, and mobile hamburger menu.

**Goal:** Provide an application shell with a distinctive branded navigation bar and an overlapping header region that creates visual depth, ideal for dashboards or admin panels.

**Where to use it:**
- Admin dashboards
- SaaS application shells
- Internal tools with branded navigation
- Authenticated user areas

**How to use it:**

```tsx
import BrandNavOverlapLayout from '@/components/ui/BrandNavOverlapLayout';

<BrandNavOverlapLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
  ]}
  userNavigation={[
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  user={{ name: 'Tom Cook', email: 'tom@example.com', imageUrl: '/avatar.jpg' }}
  pageTitle="Dashboard"
>
  <p>Your page content here</p>
</BrandNavOverlapLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Primary nav links (name, href, current?) |
| `userNavigation` | `UserNavItem[]` | Yes | User dropdown links |
| `user` | `User` | Yes | User info (name, email, imageUrl) |
| `pageTitle` | `string` | No | Title displayed in the header area |
| `children` | `ReactNode` | No | Main page content |

---

## 3. BrandSidebarLayout

**File:** `BrandSidebarLayout.tsx`

**Description:** A sidebar-based application layout featuring a branded dark sidebar with an indigo logo accent, icon-based navigation, and a top bar with search and user profile. Includes mobile slide-over drawer.

**Goal:** Offer a polished sidebar navigation shell with branding, suitable for applications that need persistent navigation and a professional look with dark sidebar styling.

**Where to use it:**
- Enterprise dashboards
- Project management tools
- CRM or admin panels
- SaaS applications with branded sidebar

**How to use it:**

```tsx
import BrandSidebarLayout from '@/components/ui/BrandSidebarLayout';

<BrandSidebarLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
    { name: 'Projects', href: '#' },
  ]}
  userNavigation={[
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  user={{ name: 'Tom Cook', email: 'tom@example.com', imageUrl: '/avatar.jpg' }}
>
  <p>Your page content here</p>
</BrandSidebarLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Sidebar nav items with optional icon and current state |
| `userNavigation` | `UserNavItem[]` | Yes | User dropdown links |
| `user` | `User` | Yes | User info (name, email, imageUrl) |
| `children` | `ReactNode` | No | Main content area |

---

## 4. ContentSection

**File:** `ContentSection.tsx`

**Description:** A two-column section with a feature list on one side and a sticky screenshot/image on the other. Includes an eyebrow label, title, description paragraph, and a definition-list of features with icons.

**Goal:** Present a product or feature overview alongside a visual, combining textual feature descriptions with an image for maximum impact.

**Where to use it:**
- Product feature sections on marketing pages
- "How it works" sections
- Service descriptions with accompanying visuals
- About pages with feature breakdowns

**How to use it:**

```tsx
import ContentSection from '@/components/ui/ContentSection';

<ContentSection
  eyebrow="Deploy faster"
  title="A better workflow"
  description="Lorem ipsum dolor sit amet."
  features={[
    { name: 'Push to deploy', description: 'Details...', icon: <CloudIcon className="size-5" /> },
    { name: 'SSL certificates', description: 'Details...', icon: <LockIcon className="size-5" /> },
  ]}
  imageSrc="/screenshot.png"
  imageAlt="Product screenshot"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `eyebrow` | `string` | Yes | Small label above the title |
| `title` | `string` | Yes | Main heading |
| `description` | `string` | Yes | Supporting paragraph |
| `features` | `Feature[]` | Yes | Array of features (name, description, icon) |
| `imageSrc` | `string` | Yes | Path to the image |
| `imageAlt` | `string` | Yes | Alt text for the image |

---

## 5. DescriptionList

**File:** `DescriptionList.tsx`

**Description:** A clean, structured key-value list with a title and optional subtitle. Each item renders as a label-value pair in a responsive grid separated by dividers.

**Goal:** Display structured data in a scannable, well-formatted list — perfect for profiles, settings summaries, or any key-detail information.

**Where to use it:**
- User profile detail pages
- Order/invoice summaries
- Settings and configuration review panels
- Any detail view with label-value pairs

**How to use it:**

```tsx
import DescriptionList from '@/components/ui/DescriptionList';

<DescriptionList
  title="Applicant Information"
  subtitle="Personal details and application."
  items={[
    { label: 'Full name', value: 'Margot Foster' },
    { label: 'Email', value: 'margot@example.com' },
    { label: 'Salary', value: '$120,000' },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Section heading |
| `subtitle` | `string` | No | Supporting description |
| `items` | `DescriptionItem[]` | Yes | Array of label-value pairs (value can be `string \| ReactNode`) |

---

## 6. FloatingBanner

**File:** `FloatingBanner.tsx`

**Description:** A dismissible floating notification banner that sticks to the bottom of the viewport. Displays a message with an optional link and a close button. Automatically hides when dismissed.

**Goal:** Show a brief, non-intrusive notification or announcement that stays visible until the user dismisses it.

**Where to use it:**
- Promotional announcements
- New feature highlights
- Important site-wide notices
- Event or sale notifications

**How to use it:**

```tsx
import FloatingBanner from '@/components/ui/FloatingBanner';

<FloatingBanner
  message="GeneriCon 2023"
  linkLabel="Register now"
  linkHref="/register"
  onDismiss={() => console.log('dismissed')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `message` | `string` | Yes | The banner message text |
| `linkLabel` | `string` | No | CTA link text |
| `linkHref` | `string` | No | CTA link URL (defaults to `#`) |
| `onDismiss` | `() => void` | No | Callback when dismissed |

---

## 7. FlyoutMenu

**File:** `FlyoutMenu.tsx`

**Description:** A popover dropdown menu triggered by a button with a chevron icon. Displays a list of items with icons and descriptions, plus an optional footer row with action links. Uses HeadlessUI `Popover` with transition animations.

**Goal:** Provide a rich, multi-item dropdown navigation menu — more detailed than a simple dropdown, with descriptions and icons for each item.

**Where to use it:**
- Main navigation mega-menus
- Product/service category selectors
- Resource links with descriptions
- Any navigation needing structured sub-items

**How to use it:**

```tsx
import FlyoutMenu from '@/components/ui/FlyoutMenu';

<FlyoutMenu
  label="Solutions"
  items={[
    { name: 'Analytics', description: 'Get insights...', href: '#', icon: <ChartIcon /> },
    { name: 'Engagement', description: 'Reach more...', href: '#', icon: <UsersIcon /> },
  ]}
  footerActions={[
    { name: 'Watch demo', href: '#', icon: <PlayIcon /> },
    { name: 'Contact sales', href: '#', icon: <PhoneIcon /> },
  ]}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Button trigger text |
| `items` | `FlyoutItem[]` | Yes | Menu items (name, description, href, icon) |
| `footerActions` | `FooterAction[]` | No | Bottom action links (name, href, icon) |

---

## 8. Footer

**File:** `Footer.tsx`

**Description:** A centered footer with horizontal navigation links, social media icons, and a copyright notice. Simple, clean design that works as a standalone page footer section.

**Goal:** Provide a consistent, minimal site footer with navigation, social links, and legal text.

**Where to use it:**
- Bottom of any page as the global footer
- Marketing and landing pages
- Blog or documentation sites

**How to use it:**

```tsx
import Footer from '@/components/ui/Footer';

<Footer
  navigation={[
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ]}
  social={[
    { name: 'GitHub', href: '#', icon: <GitHubIcon /> },
    { name: 'Twitter', href: '#', icon: <TwitterIcon /> },
  ]}
  copyright="&copy; 2026 Your Company, Inc. All rights reserved."
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Footer nav links |
| `social` | `SocialItem[]` | Yes | Social media links with icons |
| `copyright` | `string` | Yes | Copyright text |

---

## 9. Header

**File:** `Header.tsx`

**Description:** A full-featured responsive site header with logo, navigation links that support nested flyout menus, a CTA button, and a mobile slide-over drawer. Uses HeadlessUI `Dialog`, `Popover`, and `Disclosure` components.

**Goal:** Serve as the primary site-wide navigation bar with support for simple links and multi-level flyout menus, fully responsive with a mobile drawer.

**Where to use it:**
- Global site header on marketing pages
- Documentation site navigation
- Any public-facing application header

**How to use it:**

```tsx
import Header from '@/components/ui/Header';

<Header
  logo={<img src="/logo.svg" alt="Logo" className="h-8 w-auto" />}
  navigation={[
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '#',
      flyoutItems: [
        { name: 'Analytics', description: 'Insights...', href: '#', icon: <ChartIcon /> },
      ],
    },
    { name: 'Pricing', href: '/pricing' },
  ]}
  ctaLabel="Sign up"
  ctaHref="/signup"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `logo` | `ReactNode` | No | Logo element |
| `navigation` | `NavItem[]` | Yes | Nav items; include `flyoutItems` for dropdowns |
| `ctaLabel` | `string` | No | CTA button label (defaults to "Log in") |
| `ctaHref` | `string` | No | CTA button URL (defaults to `#`) |

---

## 10. LandingPage

**File:** `LandingPage.tsx`

**Description:** A hero section for landing pages featuring a large headline, subheadline, primary/secondary CTA buttons, a decorative skewed background, an app screenshot preview, and a statistics row.

**Goal:** Create a high-impact first impression for a product or service with a bold hero area, compelling CTAs, and social proof via statistics.

**Where to use it:**
- Product landing pages
- SaaS homepage hero sections
- Marketing campaign landing pages
- App launch pages

**How to use it:**

```tsx
import LandingPage from '@/components/ui/LandingPage';

<LandingPage
  headline="Data to enrich your online business"
  subheadline="Anim aute id magna aliqua ad ad non deserunt."
  ctaPrimary={{ label: 'Get started', href: '/signup' }}
  ctaSecondary={{ label: 'Learn more', href: '/about' }}
  stats={[
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
    { label: 'Uptime guarantee', value: '99.9%' },
  ]}
  screenshotSrc="/app-screenshot.png"
  screenshotAlt="App screenshot"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `headline` | `string` | Yes | Main hero heading |
| `subheadline` | `string` | Yes | Supporting text |
| `ctaPrimary` | `CTAButton` | Yes | Primary CTA (label, href) |
| `ctaSecondary` | `CTAButton` | No | Secondary CTA link |
| `stats` | `Stat[]` | Yes | Statistics row (label, value) |
| `screenshotSrc` | `string` | Yes | Screenshot image path |
| `screenshotAlt` | `string` | No | Screenshot alt text |

---

## 11. NarrowSidebarHeaderLayout

**File:** `NarrowSidebarHeaderLayout.tsx`

**Description:** A multi-column layout combining a narrow icon-only sidebar, a top header bar with search, notifications, and user profile dropdown, plus a mobile drawer. The sidebar uses icon-based navigation with default icon mapping and a branded accent.

**Goal:** Maximize content area by using a slim icon sidebar for navigation while still providing a full header with search and user actions.

**Where to use it:**
- Content-centric dashboards
- Applications needing minimal navigation footprint
- Email or messaging app layouts
- SaaS tools where content space is critical

**How to use it:**

```tsx
import NarrowSidebarHeaderLayout from '@/components/ui/NarrowSidebarHeaderLayout';

<NarrowSidebarHeaderLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
    { name: 'Projects', href: '#' },
  ]}
  userNavigation={[
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  user={{ name: 'Tom Cook', email: 'tom@example.com', imageUrl: '/avatar.jpg' }}
>
  <p>Your content here</p>
</NarrowSidebarHeaderLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Sidebar icon nav items |
| `userNavigation` | `UserNavItem[]` | Yes | User dropdown links |
| `user` | `User` | Yes | User info (name, email, imageUrl) |
| `children` | `ReactNode` | No | Main content area |

---

## 12. NarrowSidebarLayout

**File:** `NarrowSidebarLayout.tsx`

**Description:** A simpler variant of the narrow sidebar layout — icon-only sidebar navigation without a top header bar. Provides navigation on the left and a full-width content area, with a mobile slide-over drawer.

**Goal:** Offer a minimal sidebar-only navigation layout that maximizes both vertical and horizontal content space.

**Where to use it:**
- Lightweight tool UIs
- Single-page applications with sidebar navigation
- Simple admin panels
- Apps where a top header bar is unnecessary

**How to use it:**

```tsx
import NarrowSidebarLayout from '@/components/ui/NarrowSidebarLayout';

<NarrowSidebarLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
    { name: 'Projects', href: '#' },
  ]}
>
  <p>Your content here</p>
</NarrowSidebarLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Sidebar icon nav items |
| `children` | `ReactNode` | No | Main content area |

---

## 13. OverlapLayout

**File:** `OverlapLayout.tsx`

**Description:** A stacked layout with a top navigation bar and an overlap header region — similar to BrandNavOverlapLayout but without the branded indigo accent. Uses a neutral dark nav bar with user profile dropdown, notification bell, and mobile hamburger menu.

**Goal:** Provide a clean application shell with an overlapping header effect for visual depth, using a neutral color scheme instead of brand colors.

**Where to use it:**
- Dashboards without strong branding
- Internal tools
- General-purpose application shells
- Admin interfaces with neutral styling

**How to use it:**

```tsx
import OverlapLayout from '@/components/ui/OverlapLayout';

<OverlapLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
  ]}
  userNavigation={[
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  user={{ name: 'Tom Cook', email: 'tom@example.com', imageUrl: '/avatar.jpg' }}
  pageTitle="Dashboard"
>
  <p>Your page content here</p>
</OverlapLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Primary nav links |
| `userNavigation` | `UserNavItem[]` | Yes | User dropdown links |
| `user` | `User` | Yes | User info (name, email, imageUrl) |
| `pageTitle` | `string` | No | Header title |
| `children` | `ReactNode` | No | Main page content |

---

## 14. PageHeadingBanner

**File:** `PageHeadingBanner.tsx`

**Description:** A profile-style page heading with a wide banner image, overlapping circular avatar, user name, optional role text, and "Message" / "Call" action buttons.

**Goal:** Display a visually rich profile header — perfect for user profiles or team member pages — with a banner photo and avatar overlap pattern.

**Where to use it:**
- User profile pages
- Team member detail pages
- Author pages on blogs
- Contact detail views

**How to use it:**

```tsx
import PageHeadingBanner from '@/components/ui/PageHeadingBanner';

<PageHeadingBanner
  bannerUrl="/banner.jpg"
  avatarUrl="/avatar.jpg"
  name="Tom Cook"
  role="Senior Developer"
  onMessage={() => console.log('message')}
  onCall={() => console.log('call')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `bannerUrl` | `string` | Yes | Banner/cover image URL |
| `avatarUrl` | `string` | Yes | Profile picture URL |
| `name` | `string` | Yes | User display name |
| `role` | `string` | No | Role or subtitle |
| `onMessage` | `() => void` | No | Message button callback |
| `onCall` | `() => void` | No | Call button callback |

---

## 15. PageHeadingMeta

**File:** `PageHeadingMeta.tsx`

**Description:** A page heading with a title, metadata row of icon-label pairs (briefcase, location, salary, calendar), a status badge, and action buttons (Edit, View, Publish). Includes a "More" dropdown for smaller screens.

**Goal:** Display a page title with contextual metadata and primary actions — ideal for detail pages of entities like job postings, listings, or records.

**Where to use it:**
- Job listing detail pages
- Content management edit views
- Record detail pages in admin panels
- Any entity page needing metadata + actions

**How to use it:**

```tsx
import PageHeadingMeta from '@/components/ui/PageHeadingMeta';

<PageHeadingMeta
  title="Back End Developer"
  status="Open - Accepting applications"
  meta={[
    { label: 'Full-time', icon: 'briefcase' },
    { label: 'Remote', icon: 'location' },
    { label: '$120k – $140k', icon: 'currency' },
    { label: 'Closing on January 9, 2020', icon: 'calendar' },
  ]}
  onPublish={() => console.log('publish')}
  onEdit={() => console.log('edit')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Page heading |
| `meta` | `MetaItem[]` | No | Metadata items (label, icon: `'briefcase' \| 'location' \| 'currency' \| 'calendar'`) |
| `status` | `string` | No | Status badge text |
| `onPublish` | `() => void` | No | Publish button callback |
| `onEdit` | `() => void` | No | Edit button callback |

---

## 16. PrivacyBanner

**File:** `PrivacyBanner.tsx`

**Description:** A dismissible cookie/privacy consent banner anchored to the bottom of the viewport. Displays a privacy message with a policy link and "Accept all" / "Reject all" buttons. All labels and callbacks are customizable.

**Goal:** Handle cookie or privacy consent in a user-friendly, GDPR-compliant banner that can be dismissed by accepting or rejecting.

**Where to use it:**
- Any site requiring cookie consent
- GDPR/CCPA compliance banners
- Privacy policy acceptance prompts

**How to use it:**

```tsx
import PrivacyBanner from '@/components/ui/PrivacyBanner';

<PrivacyBanner
  message="We use cookies to improve your experience."
  policyLabel="privacy policy"
  policyHref="/privacy"
  acceptLabel="Accept all"
  rejectLabel="Reject all"
  onAccept={() => console.log('accepted')}
  onReject={() => console.log('rejected')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `message` | `string` | No | Privacy message (has a default) |
| `policyLabel` | `string` | No | Policy link label (defaults to "cookie policy") |
| `policyHref` | `string` | No | Policy link URL |
| `acceptLabel` | `string` | No | Accept button text |
| `rejectLabel` | `string` | No | Reject button text |
| `onAccept` | `() => void` | No | Accept callback |
| `onReject` | `() => void` | No | Reject callback |

---

## 17. SectionHeadingActionsTabs

**File:** `SectionHeadingActionsTabs.tsx`

**Description:** A section heading with a title, an action button (e.g., "Create"), and horizontal tabs. On mobile, tabs collapse to a `<select>` dropdown. Tab state is managed internally with an optional callback.

**Goal:** Combine a section title with a primary action and tabbed sub-navigation — ideal for content areas that need both filtering/views and a creation CTA.

**Where to use it:**
- Content lists with create actions (e.g., "Candidates" with "Create" button)
- Dashboard sections with tab views + actions
- Admin panels with tabbed data and CRUD buttons

**How to use it:**

```tsx
import SectionHeadingActionsTabs from '@/components/ui/SectionHeadingActionsTabs';

<SectionHeadingActionsTabs
  title="Candidates"
  tabs={[
    { name: 'Applied', href: '#', current: true },
    { name: 'Phone Screening', href: '#' },
    { name: 'Interview', href: '#' },
  ]}
  actionLabel="Create"
  onAction={() => console.log('create clicked')}
  onTabChange={(tab) => console.log('tab:', tab)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Section heading |
| `tabs` | `Tab[]` | Yes | Tab items (name, href, current?) |
| `actionLabel` | `string` | No | Action button label (defaults to "Create") |
| `onAction` | `() => void` | No | Action button callback |
| `onTabChange` | `(tabName: string) => void` | No | Tab change callback |

---

## 18. SectionHeadingDescription

**File:** `SectionHeadingDescription.tsx`

**Description:** The simplest section heading — just a title and a description paragraph, separated from the content below by a bottom border.

**Goal:** Introduce a content section with a clean heading and descriptive text, providing context before the section's content.

**Where to use it:**
- Form section separators
- Settings page section headers
- Any content area needing a simple titled introduction

**How to use it:**

```tsx
import SectionHeadingDescription from '@/components/ui/SectionHeadingDescription';

<SectionHeadingDescription
  title="Job Postings"
  description="Workcation is a property rental website., and we help you find the best places to live."
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Section heading |
| `description` | `string` | Yes | Descriptive text |

---

## 19. SectionHeadingTabs

**File:** `SectionHeadingTabs.tsx`

**Description:** A section heading with tabs and no action button. On mobile, tabs collapse into a `<select>` dropdown. Manages active tab state internally with an optional change callback.

**Goal:** Provide tabbed sub-navigation within a content section for filtering or switching between views.

**Where to use it:**
- Tab-based content filtering (e.g., "All", "Active", "Archived")
- Dashboard view switchers
- Profile sections with multiple tabs
- Any section needing inline tab navigation

**How to use it:**

```tsx
import SectionHeadingTabs from '@/components/ui/SectionHeadingTabs';

<SectionHeadingTabs
  title="Candidates"
  tabs={[
    { name: 'Applied', href: '#', current: true },
    { name: 'Phone Screening', href: '#' },
    { name: 'Interview', href: '#' },
    { name: 'Offer', href: '#' },
  ]}
  onTabChange={(tab) => console.log('selected:', tab)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Section heading |
| `tabs` | `Tab[]` | Yes | Tab items (name, href, current?) |
| `onTabChange` | `(tabName: string) => void` | No | Tab change callback |

---

## 20. SidebarLayout

**File:** `SidebarLayout.tsx`

**Description:** A standard sidebar application layout with a full-width sidebar showing navigation labels and icons, a top header with search and user profile dropdown, and a mobile slide-over drawer. Uses default icon mapping for common nav names.

**Goal:** Provide a classic sidebar navigation shell suitable for most application dashboards, combining labeled sidebar navigation with a feature-rich top bar.

**Where to use it:**
- Standard dashboards
- Admin panels
- SaaS applications
- Any app needing a traditional sidebar + header layout

**How to use it:**

```tsx
import SidebarLayout from '@/components/ui/SidebarLayout';

<SidebarLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Calendar', href: '#' },
  ]}
  userNavigation={[
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  user={{ name: 'Tom Cook', email: 'tom@example.com', imageUrl: '/avatar.jpg' }}
>
  <p>Your dashboard content</p>
</SidebarLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Sidebar nav items with optional icon |
| `userNavigation` | `UserNavItem[]` | Yes | User dropdown links |
| `user` | `User` | Yes | User info (name, email, imageUrl) |
| `children` | `ReactNode` | No | Main content area |

---

## 21. StackedLayout

**File:** `StackedLayout.tsx`

**Description:** A stacked application layout with a top navigation bar featuring navigation links, user profile dropdown, and notification bell — similar to OverlapLayout but without the overlap effect. Content renders below the nav in a standard flow.

**Goal:** Provide a clean, straightforward application shell with a horizontal nav bar and content area below.

**Where to use it:**
- Simple dashboards
- Application pages without an overlap header
- Standard application shells
- Pages needing a basic nav + content layout

**How to use it:**

```tsx
import StackedLayout from '@/components/ui/StackedLayout';

<StackedLayout
  navigation={[
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#' },
    { name: 'Projects', href: '#' },
  ]}
  userNavigation={[
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]}
  user={{ name: 'Tom Cook', email: 'tom@example.com', imageUrl: '/avatar.jpg' }}
  pageTitle="Dashboard"
>
  <p>Page content here</p>
</StackedLayout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | `NavItem[]` | Yes | Primary nav links |
| `userNavigation` | `UserNavItem[]` | Yes | User dropdown links |
| `user` | `User` | Yes | User info (name, email, imageUrl) |
| `pageTitle` | `string` | No | Header page title |
| `children` | `ReactNode` | No | Main page content |

---

## 22. ThreeColumnLayout

**File:** `ThreeColumnLayout.tsx`

**Description:** A full-width three-column layout with a left sidebar (264 px), main content area, and right sidebar (264 px). Side columns are hidden on smaller screens. Each column accepts custom React content or shows a placeholder.

**Goal:** Divide the page into three distinct content areas — useful for layouts that need persistent side panels alongside a central content region.

**Where to use it:**
- Email/messaging app interfaces (list + content + details)
- Social media feed layouts (nav + feed + sidebar)
- Documentation with sidebar + content + TOC
- Any three-panel application

**How to use it:**

```tsx
import ThreeColumnLayout from '@/components/ui/ThreeColumnLayout';

<ThreeColumnLayout
  leftColumn={<nav>Sidebar nav</nav>}
  mainColumn={<div>Main content area</div>}
  rightColumn={<aside>Activity feed</aside>}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `leftColumn` | `ReactNode` | No | Left sidebar content |
| `mainColumn` | `ReactNode` | No | Main content area |
| `rightColumn` | `ReactNode` | No | Right sidebar content |

---

## 23. EmptyStateDashed

**File:** `EmptyStateDashed.tsx`

**Description:** A centered empty-state button with a dashed border, an SVG icon, a title, and an optional description. Acts as a prominent call-to-action when a section has no content yet.

**Goal:** Guide users to create their first item when a list, project, or section is empty — using a large, clickable dashed-border block.

**Where to use it:**
- Empty project / file / item lists
- Dashboard sections with no data yet
- Onboarding first-run states
- Blank canvas prompts

**How to use it:**

```tsx
import EmptyStateDashed from '@/components/ui/EmptyStateDashed';

<EmptyStateDashed
  title="Create a new project"
  description="Get started by selecting a template or start from an empty project."
  onClick={() => console.log('create')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | `ReactNode` | No | Custom icon (defaults to a folder-plus SVG) |
| `title` | `string` | Yes | Main label text |
| `description` | `string` | No | Supporting description |
| `onClick` | `() => void` | No | Click handler |

---

## 24. FormLayoutTwoColumn

**File:** `FormLayoutTwoColumn.tsx`

**Description:** A two-column form layout where the left column provides section context (title + description) and the right column contains the form fields. Includes Personal Information fields (name, email, country, address) and a Notifications section (email checkboxes + push notification radios). Save / Cancel buttons at the bottom.

**Goal:** Present structured, multi-section forms in a scannable two-column layout that separates context from input, ideal for settings and profile pages.

**Where to use it:**
- User profile / account settings
- Registration and onboarding forms
- Admin configuration panels
- Multi-section data entry forms

**How to use it:**

```tsx
import FormLayoutTwoColumn from '@/components/ui/FormLayoutTwoColumn';

<FormLayoutTwoColumn
  onSubmit={(data) => console.log('submitted:', data)}
  onCancel={() => console.log('cancelled')}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onSubmit` | `(data: Record<string, string>) => void` | No | Submit callback with form data |
| `onCancel` | `() => void` | No | Cancel button callback |

---

## 25. SelectMenuCustom

**File:** `SelectMenuCustom.tsx`

**Description:** A custom select dropdown built with HeadlessUI `Listbox`. Shows the selected option in a styled button, opens an animated dropdown with options, and displays a check icon next to the selected item.

**Goal:** Replace native `<select>` elements with a fully styled, accessible, and animated custom dropdown.

**Where to use it:**
- Form fields requiring styled dropdowns
- Assignment / filter selectors
- Settings panels with option lists
- Any place a native `<select>` doesn't match the design

**How to use it:**

```tsx
import SelectMenuCustom from '@/components/ui/SelectMenuCustom';

<SelectMenuCustom
  label="Assigned to"
  options={[
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
  ]}
  onChange={(option) => console.log('selected:', option.name)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Label above the select |
| `options` | `SelectOption[]` | Yes | Options array (`{ id, name }`) |
| `defaultValue` | `SelectOption` | No | Initially selected option (defaults to first) |
| `onChange` | `(option: SelectOption) => void` | No | Change callback |

---

## 26. TextareaSimple

**File:** `TextareaSimple.tsx`

**Description:** A basic textarea field with a label above, standard ring/border styling, and dark mode support. A clean, minimal text input component.

**Goal:** Provide a reusable, styled textarea for any form that needs multi-line text input.

**Where to use it:**
- Comment forms
- Feedback / support forms
- Description or notes fields
- Any multi-line text input

**How to use it:**

```tsx
import TextareaSimple from '@/components/ui/TextareaSimple';

<TextareaSimple
  label="Add your comment"
  placeholder="Write your thoughts here..."
  rows={4}
  onChange={(value) => console.log('text:', value)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Label above the textarea |
| `id` | `string` | No | HTML id (defaults to `"comment"`) |
| `name` | `string` | No | HTML name (defaults to `"comment"`) |
| `rows` | `number` | No | Visible rows (defaults to 4) |
| `defaultValue` | `string` | No | Pre-filled text |
| `placeholder` | `string` | No | Placeholder text |
| `onChange` | `(value: string) => void` | No | Change callback |

---

## 27. TextareaTitlePill

**File:** `TextareaTitlePill.tsx`

**Description:** A card-style textarea form with a title input at the top, a description textarea body, and a bottom toolbar featuring an "Attach a file" link, a mood selector (HeadlessUI Listbox with emoji-style pill icons), and a submit button.

**Goal:** Provide a rich text composition experience for posts, tickets, or notes — combining a title, body, metadata (mood), and file attachment in a single compact card.

**Where to use it:**
- Issue / ticket creation forms
- Blog post or note editors
- Feedback submission forms
- Social post composers

**How to use it:**

```tsx
import TextareaTitlePill from '@/components/ui/TextareaTitlePill';

<TextareaTitlePill
  titlePlaceholder="Title"
  bodyPlaceholder="Write a description..."
  submitLabel="Create"
  onSubmit={(data) => console.log('submitted:', data)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `titlePlaceholder` | `string` | No | Title input placeholder (defaults to `"Title"`) |
| `bodyPlaceholder` | `string` | No | Body textarea placeholder (defaults to `"Write a description..."`) |
| `submitLabel` | `string` | No | Submit button text (defaults to `"Create"`) |
| `onSubmit` | `(data: { title, body, mood }) => void` | No | Submit callback with form data |

---

## 28. RadioGroupSimpleList

**File:** `RadioGroupSimpleList.tsx`

**Description:** A simple vertical radio group rendered as a `<fieldset>` with a `<legend>` label and stacked radio inputs. Uses native `<input type="radio">` elements with indigo accent colors and dark mode support.

**Goal:** Provide a clean, accessible radio group for simple single-choice selections where only a label per option is needed.

**Where to use it:**
- Notification preference selectors
- Simple option pickers in settings forms
- Survey or questionnaire single-choice questions
- Any form needing a basic radio list

**How to use it:**

```tsx
import RadioGroupSimpleList from '@/components/ui/RadioGroupSimpleList';

<RadioGroupSimpleList
  label="Notifications"
  options={[
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]}
  defaultValue="email"
  onChange={(id) => console.log('selected:', id)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Fieldset legend text |
| `options` | `RadioOption[]` | Yes | Options array (`{ id, title }`) |
| `defaultValue` | `string` | No | Initially selected option id (defaults to first) |
| `onChange` | `(id: string) => void` | No | Selection change callback |

---

## 29. RadioGroupSimpleTable

**File:** `RadioGroupSimpleTable.tsx`

**Description:** A table-style radio group displaying plan options with multiple detail columns (e.g., RAM, CPUs, Storage, Price) and a radio selector. On mobile, it collapses to stacked cards with a `<dl>` layout for the detail fields. Selected rows are highlighted with an indigo tint.

**Goal:** Present structured, multi-attribute options in a tabular format — ideal for plan or tier selection where users need to compare several properties side by side.

**Where to use it:**
- Hosting / server plan selectors
- Subscription tier pickers
- Product comparison tables with selection
- Any form needing a radio choice among items with multiple attributes

**How to use it:**

```tsx
import RadioGroupSimpleTable from '@/components/ui/RadioGroupSimpleTable';

<RadioGroupSimpleTable
  label="Select a plan"
  plans={[
    {
      id: 'startup',
      name: 'Startup',
      details: [
        { label: 'RAM', value: '12 GB' },
        { label: 'CPUs', value: '6 CPUs' },
        { label: 'Storage', value: '160 GB SSD' },
        { label: 'Price', value: '$40/mo' },
      ],
    },
    {
      id: 'business',
      name: 'Business',
      details: [
        { label: 'RAM', value: '16 GB' },
        { label: 'CPUs', value: '8 CPUs' },
        { label: 'Storage', value: '512 GB SSD' },
        { label: 'Price', value: '$80/mo' },
      ],
    },
  ]}
  defaultValue="startup"
  onChange={(id) => console.log('selected:', id)}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Fieldset legend text |
| `plans` | `Plan[]` | Yes | Plan options (`{ id, name, details: { label, value }[] }`) |
| `defaultValue` | `string` | No | Initially selected plan id (defaults to first) |
| `onChange` | `(id: string) => void` | No | Selection change callback |

