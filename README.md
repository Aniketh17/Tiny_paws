# 🐾 Tiny Paws — Premium Pet Care & Wellness Ecosystem

Tiny Paws is an elite, responsive web ecosystem designed for modern pet parents who demand the highest standard of care, nutrition, and clinical coordination for their companions. 

With a tailored, fluid design language incorporating glassmorphism, responsive components, and micro-interactions, Tiny Paws blends e-commerce, professional services booking, and personal health document tracking into a single cohesive platform.

---

## 🌟 Key Features & Core Functionality

### 1. 🏡 Dynamic Home Page
*   **Premium Interactive Hero Section:** Designed to instantly engage visitors with responsive image-text layouts optimized for both desktop and mobile viewports.
*   **Companion Vaccine Countdown Timer:** A real-time vaccine countdown ticker that highlights upcoming health alerts for registered companions (e.g., "Health Alert: Vaccination Due for Max").
*   **Curated Product Previews:** Spotlights top-tier artisanal meals and vitamins with interactive details.

### 2. 🛒 Curated Store & Checkout Flow
*   **Artisanal Catalog:** Interactive product listings categorized by premium requirements (e.g., Artisanal Feast Kibble, Pure Vitality Vitamins).
*   **Sliding Cart Overlay:** Fully functional off-canvas shopping cart with real-time total updates, interactive item management, and clear promotional progress indicators (e.g., "Add $X more for free shipping").
*   **Two-Step Secure Checkout:**
    *   *Step 1 (Shipping):* Smart validation form fields centered and polished.
    *   *Step 2 (Payment):* Stacked secure encryption inputs (Card, Expiry, CVV) with simulated processing animations and clean confirmation states.

### 3. 🩺 Professional Pet Services
*   **Veterinary Consultations:** On-demand access to certified veterinary professionals.
*   **Care Services:** Specialized grooming, scientific training, and luxury boarding options.
*   **Interactive Scheduling:** Seamless flows designed for scheduling pet appointments.

### 4. 📁 Medical Vault & Profile Management
*   **Companion Profile Management:** Active registration cards representing pets (e.g., Max the Golden Retriever) with breed details, ages, and medical statuses.
*   **Secure Medical Vault:** 
    *   *Drag-and-Drop Dropzone:* Mobile-polished zone to drop or upload health records, prescriptions, and lab test results.
    *   *Companion Linking:* Associate uploaded files to specific pets using dynamic selection forms.
    *   *Responsive Vault List:* Desktop table layouts elegantly adapt into stacked, read-friendly card blocks on mobile viewports.

### 5. 📖 About & Contact
*   **Ethical Operations:** Detailed breakdown of Tiny Paws' supply chain, research teams, and operations directors.
*   **Interactive Contact Forms:** Responsive forms supporting feedback and inquiries.

---

## 🛠️ Technical Stack & Architecture

Tiny Paws is built with efficiency, responsiveness, and premium visual layout standards in mind:

*   **Frontend Library:** [React](https://react.dev/) (Functional components with hooks)
*   **Build Tool / Server:** [Vite](https://vitejs.dev/) (Ultra-fast Hot Module Replacement)
*   **Animation System:** [Framer Motion](https://www.framer.com/motion/) (Smooth transitions, page transitions, and drawer physics)
*   **Styling & Design System:** Pure Vanilla CSS
    *   Custom design tokens mapping primary colors (`#13423d`), neutrals, surfaces, border-radii, and animations.
    *   Modern typography pairings utilizing Google Fonts (*Outfit* and *Inter*).
    *   Mobile-first media query system supporting fluid styling between 320px and 1440px.

---

## 📁 Project Structure

```bash
Tiny_paws/
├── public/                 # Static assets, local illustrations, and icons
├── src/
│   ├── components/         # Shared UI components (Navbar, Footer, CartOverlay)
│   ├── context/            # Global AppContext managing cart state and profiles
│   ├── data/               # Mock data (premium products, service offerings)
│   ├── pages/              # Primary route pages (Home, Store, Checkout, Profile, Services)
│   ├── index.css           # Global design system tokens, utility classes, and media queries
│   ├── App.jsx             # Main routing registry
│   └── main.jsx            # React mounting hook
├── package.json            # Dependencies and script definitions
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16.0 or higher recommended)
*   [npm](https://www.npmjs.com/) (installed automatically with Node.js)

### Installation
1. Clone this repository to your local workspace:
   ```bash
   git clone https://github.com/Aniketh17/Tiny_paws.git
   ```
2. Navigate to the project root:
   ```bash
   cd Tiny_paws
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the Vite development server with hot-reloading:
```bash
npm run dev
```
Once started, navigate to the local server URL displayed in your terminal (typically `http://localhost:5173`).

### Production Build
To generate an optimized production bundle inside the `dist` directory:
```bash
npm run build
```
You can test the production build locally by running:
```bash
npm run preview
```