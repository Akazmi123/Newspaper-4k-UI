# 🗞️ The Daily Ledger – NYT-Style News Website

A modern, minimal, editorial-style news website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, designed to replicate the visual style and layout of *The New York Times* homepage.

---

## 🎯 Features

- 📰 **NYT-Style Layout** – Clean, editorial design with strong typography and grid structure  
- 📱 **Responsive Design** – Fully responsive across all device sizes  
- ⚙️ **Modern Tech Stack** – Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS  
- 🧩 **Component Architecture** – Modular, reusable components for easy maintenance  
- ✍️ **Typography** – Georgia serif for headlines, Inter sans-serif for body text  
- 🎨 **Interactive Elements** – Smooth transitions and subtle hover effects  

---

## 🧱 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts:** Georgia & Inter

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

### 3. Open your browser  
Visit → [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```bash
├── app/
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout with header and footer
│   └── page.tsx          # Homepage with hero section and article grid
│
├── components/
│   ├── Header.tsx        # Sticky navigation header
│   ├── ArticleCard.tsx   # Article card component (3 layout variants)
│   └── Footer.tsx        # Footer component
│
├── lib/
│   └── data.ts           # Mock article data
│
└── public/               # Static assets (images, icons, etc.)
```

---

## 🎨 Design Details

### 🧭 Layout
- **Header:** Sticky navigation bar with *The Daily Ledger* branding  
- **Hero Section:** Large featured story with sidebar articles  
- **Grid Layout:**  
  - 🖥️ Desktop → 3 columns  
  - 💻 Tablet → 2 columns  
  - 📱 Mobile → 1 column  
- **Footer:** Minimal black footer with organized links

### ✍️ Typography
- **Headlines:** Georgia (serif) for a classic editorial tone  
- **Body Text:** Inter (sans-serif) for modern readability  
- **Color Scheme:**  
  - Background → `#ffffff`  
  - Text → `#111111`  

### ⚡ Interactive Elements
- Subtle hover animations on article cards  
- Smooth transitions across sections  
- Responsive layout for all breakpoints

---

## 📱 Responsive Breakpoints

| Device   | Width Range       | Columns |
|-----------|------------------|----------|
| Mobile    | `< 768px`        | 1 |
| Tablet    | `768px – 1024px` | 2 |
| Desktop   | `> 1024px`       | 3 |

---

## 🛠️ Customization

### ➕ Adding New Articles

Edit `lib/data.ts` to include your own articles:

```typescript
{
  id: "unique-id",
  title: "Article Title",
  summary: "Article summary...",
  section: "Section Name",
  imageUrl: "https://example.com/image.jpg",
  author: "Author Name",
  publishDate: "2024-01-15",
  isHero: false // Set to true for hero article
}
```

### 🎨 Styling

- **Global styles:** `app/globals.css`
- **Component styles:** Use Tailwind utility classes  
- **Custom variables:** Defined in `globals.css`

---

## 🚀 Deployment

### 🧭 Deploy on [Vercel](https://vercel.com)

1. Push your code to **GitHub**  
2. Connect the repo to **Vercel**  
3. Deploy automatically with one click 🎉

Or build locally for production:

```bash
npm run build
npm start
```

---

## 📄 License

This project is open source and available under the **[MIT License](LICENSE)**.

---

**✨ Project:** [Newspaper-4k-UI](#)
