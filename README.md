# 🌴 Ceylon Escape Travels — Luxury Sri Lanka Travel Website

Welcome to the official repository of **Ceylon Escape Travels**, a premium, modern, and adventurous travel agency website designed specifically for Sri Lanka private tours, scenic highland expeditions, wildlife safaris, and tropical beach escapes.

---

## 🌟 Project Highlights

- **Pure Frontend Stack:** Built purely with semantic **HTML5**, modern **CSS3**, and **vanilla JavaScript**.
- **No Complex Build Tools:** Zero React, Next.js, Node.js, npm, Webpack, or bundling required.
- **Works Right Out of the Box:** Double-click `index.html` to open directly in Google Chrome, Microsoft Edge, Firefox, or Safari.
- **100% Mobile Responsive:** Optimized for smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **Self-Contained Local Assets:** High-resolution Sri Lankan destination photography stored directly in `assets/images/` for zero broken images even offline.
- **Direct Netlify Ready:** Configured for instant deployment with publish directory `.` and no build command.

---

## 📁 Exact File Structure

```text
Ceylon-Escape-Travels/
│
├── index.html         # Main semantic HTML5 webpage with all 10 required sections
├── style.css          # Vanilla CSS3 stylesheet (Mobile-first, tropical palette & glassmorphism)
├── script.js          # Pure JavaScript (Navigation, filtering, lightbox, form validation & WhatsApp)
├── README.md          # Beginner-friendly setup, testing, and deployment guide
└── assets/
    └── images/        # High-resolution Sri Lankan destination photography, avatars, and SVG icons
        ├── logo.svg
        ├── favicon.svg
        ├── hero-bg.jpg
        ├── dest-ella.jpg
        ├── dest-mirissa.jpg
        ├── dest-sigiriya.jpg
        ├── dest-nuwara-eliya.jpg
        ├── dest-arugam-bay.jpg
        ├── dest-galle.jpg
        ├── pkg-grand-ceylon.jpg
        ├── pkg-coastal.jpg
        ├── pkg-tea-trails.jpg
        ├── pkg-safari.jpg
        ├── pkg-honeymoon.jpg
        ├── pkg-surf-east.jpg
        ├── exp-wildlife.jpg
        ├── exp-beach.jpg
        ├── exp-mountain.jpg
        ├── exp-culture.jpg
        ├── gallery-elephant.jpg
        ├── gallery-roadtrip.jpg
        ├── gallery-temple.jpg
        ├── gallery-coast.jpg
        ├── avatar-1.jpg
        ├── avatar-2.jpg
        ├── avatar-3.jpg
        └── avatar-4.jpg
```

---

## 🎨 Theme & Design System

The visual identity is custom-crafted to reflect the pristine natural beauty of Sri Lanka:
- **Tropical Ocean Blue** (`#0c2b44`, `#071927`): Depth, luxury, maritime authority.
- **Ocean Turquoise** (`#0d9488`, `#14b8a6`): Tropical coastal waters, vibrant accents.
- **Crisp Pearl White** (`#ffffff`): High readability, modern negative space.
- **Subtle Sandy Beige** (`#faf7f2`, `#f4eee2`, `#e8ddc9`): Warm tropical sands, coconut palms, and Ceylon spice warmth.
- **Sunset Amber & Coral** (`#f59e0b`, `#e07a5f`): Star ratings, call-to-action badges, and interactive highlights.

---

## 🧭 Website Sections Overview

1. **Full-Screen Hero Section:**
   - Cinematic background of Ella's Nine Arch Bridge and emerald tea mountains.
   - Heading: *"Discover The Beauty of Sri Lanka"*.
   - Call to action: **Explore Destinations** button and Custom Trip Planner.
   - Interactive Quick Trip Finder bar with instant tour matching.
   - Key trust counters (4.9★ rating, SLTDA Licensed, 24/7 Concierge).

2. **Popular Destinations (6 Large Photographic Cards):**
   - **Ella:** Nine Arch Bridge, Little Adam's Peak, and scenic blue train.
   - **Mirissa:** Coconut Tree Hill, secret sandy bays, and ethical Blue Whale safaris.
   - **Sigiriya:** 5th-century Lion Rock sky fortress and royal water gardens.
   - **Nuwara Eliya:** Verdant Ceylon tea estates, waterfalls, and colonial charm.
   - **Arugam Bay:** World-class surf breaks, lagoon safaris, and bohemian beach life.
   - **Galle:** UNESCO World Heritage 17th-century Dutch Fort, lighthouse, and ocean ramparts.

3. **Featured Tour Packages:**
   - Filterable categories: *All*, *Cultural & Heritage*, *Wildlife Safaris*, *Coastal & Beaches*, *Scenic Highlands*.
   - Dynamic price badges, duration markers, daily inclusions, and vehicle details.
   - Direct *"Book / Inquire"* triggers (auto-populates the inquiry form).
   - Instant WhatsApp package inquiry with pre-formatted message text.

4. **Unique Experiences:**
   - **Wildlife Safaris:** Yala leopards, Minneriya elephant gathering, Udawalawe.
   - **Beach Escapes:** Private catamaran charters, sea turtle swimming, coral reef snorkeling.
   - **Mountain Adventures:** Pekoe Trail hiking, Adam's Peak sunrise pilgrimage, World's End cliff.
   - **Cultural Experiences:** Sacred Temple of the Tooth in Kandy, Dambulla cave monasteries, village clay pot cooking classes.

5. **Why Travel With Us:**
   - 6 Core Pillars: 100% Tailor-Made Private Trips, Certified Chauffeur Guides, Modern Luxury A/C Fleet, 24/7 Dedicated On-Ground Support, Transparent & Guaranteed Pricing, Eco & Community Conscious.
   - Statistical achievements counter (12+ years experience, 1,850+ travelers, 99.4% satisfaction).

6. **Travel Gallery & Interactive Lightbox:**
   - Category filtering (Highlands, Wildlife, Beaches, Culture).
   - Clickable full-screen Lightbox modal with next/previous controls and keyboard navigation (`Esc`, `←`, `→`).

7. **Customer Reviews:**
   - Verified traveler stories from UK, Germany, Australia, and Sweden.
   - Official trust credentials (TripAdvisor Certificate of Excellence, SLTDA Registration, Google 4.9★ rating).

8. **Travel Inquiry Form (Client-Side Validation):**
   - Fields: Full Name, Email, Phone/WhatsApp, Destination/Package, Dates, Travelers, Style, and Notes.
   - Real-time client-side validation with clean error messages.
   - Celebratory success state with generated unique Reference ID (e.g. `CE-84729`).
   - One-click **"Send Summary to WhatsApp"** button so travelers can immediately send their itinerary to the concierge without requiring a backend mail server!

9. **Contact Details & WhatsApp Inquiry:**
   - Floating pulsing WhatsApp button on the bottom right.
   - Colombo and Galle physical offices, direct hotline (`+94 77 123 4567`), official email, and quick response guarantees.

10. **Professional Footer:**
    - Agency branding, navigation links, emergency tourist helpline, interactive newsletter subscription, copyright, and smooth back-to-top button.

---

## 🚀 Beginner-Friendly Guide: Preview, Test, Upload & Deploy

### STEP 1: Preview & Test on Your Computer

You do not need any servers or command lines to run this website!

1. Open **File Explorer** on your computer.
2. Navigate to your folder: `c:\Users\Acer\Documents\Ceylon-Escape-Travels`.
3. Locate `index.html`.
4. **Double-click** `index.html` (or right-click → **Open with** → **Google Chrome**).
5. The entire website will load immediately with all styling, photos, fonts, and interactive elements working.

#### Optional: Using VS Code Live Server
If you use Visual Studio Code:
1. Open the folder `Ceylon-Escape-Travels` in VS Code.
2. Install the extension **"Live Server"** by *Ritwick Dey*.
3. Right-click `index.html` and click **"Open with Live Server"**.
4. Your browser will open `http://127.0.0.1:5500/index.html` with live-reloading.

---

### STEP 2: Test Interactive Features

Before uploading, verify these features in your browser:
- [x] **Navigation:** Click each menu link (Destinations, Packages, Experiences, etc.) to verify smooth scrolling.
- [x] **Mobile Responsiveness:** Press `F12` in Chrome, click the Mobile/Tablet device toggle icon, and test the slide-out mobile drawer menu.
- [x] **Package Filter:** Click the filter tabs under "Featured Sri Lanka Tour Packages" (e.g., *Wildlife Safaris*, *Coastal & Beaches*) to see packages filter instantly.
- [x] **Gallery Lightbox:** Click any photo in the gallery to open the full-screen lightbox. Test clicking next/previous and press the `Escape` key on your keyboard to close it.
- [x] **Inquiry Form Validation:** Scroll to the inquiry form and click **Submit Trip Inquiry** with empty fields to verify error messages appear. Fill in your details and click submit to verify the **Trip Inquiry Received** success screen and reference number.
- [x] **WhatsApp Links:** Click the floating green WhatsApp icon or package buttons to verify the pre-formatted WhatsApp chat link opens.

---

### STEP 3: Upload to GitHub

Follow these simple steps in PowerShell or your terminal:

1. Open PowerShell and go to your project folder:
   ```powershell
   cd c:\Users\Acer\Documents\Ceylon-Escape-Travels
   ```

2. Initialize a Git repository:
   ```powershell
   git init
   ```

3. Add all files to staging:
   ```powershell
   git add .
   ```

4. Commit your files:
   ```powershell
   git commit -m "Initial commit: Ceylon Escape Travels website"
   ```

5. Create a new repository on [GitHub](https://github.com/new):
   - Repository name: `ceylon-escape-travels`
   - Set to **Public**
   - Do **NOT** initialize with a README (we already created one)
   - Click **Create repository**

6. Link your local project to GitHub and push (replace `YOUR-USERNAME` with your GitHub username):
   ```powershell
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ceylon-escape-travels.git
   git push -u origin main
   ```

---

### STEP 4: Deploy on Netlify (100% Free & In Under 60 Seconds)

Because this website uses pure HTML, CSS, and JavaScript, deployment takes under 1 minute.

#### Method A: Direct Drag & Drop (Easiest for Beginners)
1. Go to [https://app.netlify.com](https://app.netlify.com) and log in or create a free account.
2. Go to the **Sites** tab.
3. Drag the entire `Ceylon-Escape-Travels` folder from Windows File Explorer and drop it onto the area that says **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**.
4. Netlify will publish your site in 5 seconds and give you a live URL like `https://ceylon-escape-travels.netlify.app`.

#### Method B: Connect via GitHub (Automatic Updates)
1. In Netlify, click **Add new site** → **Import an existing project**.
2. Select **GitHub** and authorize your account.
3. Select your `ceylon-escape-travels` repository.
4. Set the build settings as follows:
   - **Branch to deploy:** `main`
   - **Base directory:** *(Leave blank)*
   - **Build command:** *(Leave blank / none)*
   - **Publish directory:** `.` (or leave blank, Netlify uses the root directory)
5. Click **Deploy Ceylon-Escape-Travels**.
6. Every time you push a change to GitHub, Netlify automatically updates your live website!

---

## ⚙️ How to Personalize the Agency Contact Details

To change the phone number, email address, or WhatsApp number for your real agency:

1. **Change WhatsApp Number:**
   - Open `script.js` in any text editor.
   - At line 12, change `WHATSAPP_NUMBER = '94771234567';` to your actual international phone number (without any `+` or spaces, e.g., `94771234567` for Sri Lanka, `12125551234` for US).

2. **Change Phone & Email in HTML:**
   - Open `index.html`.
   - Search for `+94 77 123 4567` and replace with your phone number.
   - Search for `hello@ceylonescapetravels.com` and replace with your business email.

---

## 📄 License & Credits

- Designed & developed for **Ceylon Escape Travels (Pvt) Ltd**.
- All photography sourced under the free commercial Unsplash license.
- SLTDA accreditation reference: `SLTDA/SQA/TA/01482`.
