# 📘 Project 0x00 – Setup & Component Practice

## 🎯 Overview
This project introduces **Next.js with TypeScript**, focusing on **component-driven development** and **modular UI design** with **TailwindCSS**.  

Each task builds progressively:
- Project setup
- Pages & routes
- Component creation
- Props & typing with TypeScript
- Reusable UI design

---

## ✅ Task 0 – Setup
**Objective:** Initialize a Next.js + TypeScript project.

- Ran `npx create-next-app@latest alx-project-0x00 --typescript`
- Installed dependencies (`react`, `next`, `tailwindcss`)
- Verified setup with `npm run dev`

📂 Modified files:
- `package.json`
- `tailwind.config.js`
- `postcss.config.js`
- `README.md`

---

## ✅ Task 1 – Creating a Landing Page
**Objective:** Create a landing page route.

- Added `pages/landing.tsx`  
- Inserted sample content with `<h1>` heading.  

📂 Modified/Added:
- `pages/landing.tsx`

---

## ✅ Task 2 – Adding Styling
**Objective:** Apply TailwindCSS styling to the landing page.

- Used utility classes for layout and text.
- Confirmed styles render at `/landing`.

📂 Modified:
- `pages/landing.tsx`

---

## ✅ Task 3 – Creating Reusable Components
**Objective:** Build modular components.

- Created `components/Card.tsx`  
- Created `components/Pill.tsx`  
- Designed simple reusable UI blocks.  

📂 Added:
- `components/Card.tsx`
- `components/Pill.tsx`

---

## ✅ Task 4 – Using Components
**Objective:** Import and reuse components.  

- Imported **Card** inside `landing.tsx`.  
- Nested multiple **Pill** components inside Card.  
- Duplicated components to demonstrate reusability.

📂 Modified:
- `pages/landing.tsx`

---

## ✅ Task 5 – Typing Functional Components
**Objective:** Make components dynamic with props + TypeScript interfaces.  

- Added **PillProps** interface in `interfaces/index.ts`.  
- Updated `Pill.tsx` to accept `title` as prop.  
- Reused Pill dynamically:  

```tsx
<Pill title="Top Villa" />
<Pill title="Self CheckIn" />
<Pill title="Free Reschedule" />



