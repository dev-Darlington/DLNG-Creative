# 🎨 DLNG Creative — Premium Graphic Design Portfolio

A world-class, award-winning personal portfolio website tailored for a Senior Graphic Designer & Brand Strategist with 4+ years of professional experience in the United Kingdom. Designed with bespoke aesthetics, smooth interactions, and robust SPA routing.

🚀 **Live Development Server**: `http://localhost:3500/`

---

## ✨ Features & Design Aesthetics

### 💎 Rich Visual Aesthetics & Typography
* **Color Palette**: Sleek dark-charcoal theme (`#0A0A0B`) utilizing high-contrast borders (`rgba(255,255,255,0.07)`), vibrant background glow blobs, and clean responsive grids.
* **Modern Typography**: Curated typography using **Syne** (for display/hero headers), **Space Grotesk** (for headings/subsections), and **Inter** (for body readability).
* **Preloader**: Introductory loading sequence showing an animated loading progress bar and a premium slide-up entrance animation.

### 🖱️ Micro-Animations & Custom Cursor
* **Interactive Cursor Follower**: Global cursor follower with custom blend-modes (difference) that dynamically scales and transforms on hover:
  * Over interactive buttons/links (transforms into a glow dot).
  * Over case studies (displays `VIEW` mode).
  * Over case study close triggers (displays `CLOSE` mode).
* **Circular Rotating SVG Badge**: A continuous rotating text path badge (`• DLNG CREATIVE • STUDIO PORTFOLIO •`) floating around the hero portrait frame.

### 🗂️ Editorial Portfolio Grid & Custom Case Studies
* **Masonry Grid Layout**: Editorial grid showcasing premium design case studies: *Vanguard Cognition*, *Halcyon Organic*, *Aether OS*, and *Chronos Timepieces*.
* **Interactive Case Study Overlays**: Full-screen modal overlays featuring:
  * High-fidelity portrait visuals and strategic challenge logs.
  * Interactive **Color Swatches** that copy hex codes to the clipboard.
  * Editorial **Typography Cards** displaying fonts and weights used.
  * **Before/After Blueprint Slider**: An interactive dragging slider allowing users to compare design wireframes with final outcomes.

### 🌐 Router-Native Navigation & Path Syncing
* **React Router Routes**: Real paths mapped for every single section (`/`, `/about`, `/portfolio`, `/services`, `/skills`, `/experience`, `/testimonials`, `/contact`) utilizing `react-router-dom` v7.
* **Math-Based Smooth Scroll**: Calculates absolute section offsets relative to the viewport + scroll position, providing smooth navigation with a `100px` sticky-nav gap offset across all browsers.
* **Address Bar Syncing**: Integrates a composited `IntersectionObserver` that silently updates the URL address bar path using `window.history.replaceState` as you scroll down the page.
* **Scroll-Lock Protection**: Implements a `window.isProgrammaticScroll` lock flag to prevent infinite routing loops during transition scrolling.

---

## 🛠️ Technology Stack

* **Core**: React 19 (Hooks, custom elements)
* **Routing**: React Router DOM v7
* **Styling**: Vanilla CSS (Responsive variables, modern grid, flexbox, custom keyframes)
* **Build Tool**: Vite v8
* **Linter**: Oxlint (0 warnings, 0 errors)
* **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed (v18+ recommended).

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Spin up the local development server:
   ```bash
   npm run dev
   ```
   *The server runs on port `3500` as configured in `vite.config.js`.*

3. Compile the production bundle:
   ```bash
   npm run build
   ```

4. Lint check:
   ```bash
   npm run lint
   ```

---

## 📂 Project Structure

```text
graphics-portfolio/
├── .agents/               # Project customization rules (Workspace Isolation)
├── src/
│   ├── assets/            # High-fidelity portrait and case study assets
│   ├── components/        # Isolated modular layout components
│   │   ├── About.jsx      # Metrics and awards
│   │   ├── Contact.jsx    # Styled floating input contact form
│   │   ├── Experience.jsx # Interactive resume timeline
│   │   ├── Hero.jsx       # Floating badge and intro CTA
│   │   ├── Navbar.jsx     # Navigation, menu drawer, and IntersectionObserver
│   │   ├── Projects.jsx   # Portfolio grid and modal Case Studies
│   │   ├── Services.jsx   # Glassmorphic service cards
│   │   ├── Skills.jsx     # Glowing interactive skills badges
│   │   └── Testimonials.jsx # Testimonials carousel
│   ├── App.jsx            # Main app router orchestrator and scroll controller
│   ├── main.jsx           # Entry point and BrowserRouter wrapper
│   └── index.css          # Design system variables, animations, and global rules
└── vite.config.js         # Vite configuration with port 3500 settings
```
