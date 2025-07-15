# 📰 BlogLens – Nexium Assignment 2

A powerful and beginner-friendly *blog summariser* web app built using *Next.js 15, **ShadCN UI, and **TypeScript. This project was created as part of **Assignment 2* for the Nexium Internship program.

---

## 🚀 Features

- 🧠 Choose from predefined blog samples to simulate content scraping
- ✨ AI-like summary generation (predefined using static logic)
- 🌐 Urdu translation of English summaries
- 💾 Stores full blog content to *MongoDB*
- 📤 Saves summaries to *Supabase* (key-value format)
- 📱 Fully responsive UI with smooth transitions and animations

---

## 🛠️ Tech Stack

- *Framework:* Next.js 15 (App Router)
- *Styling:* Tailwind CSS, ShadCN UI
- *Icons:* Lucide Icons
- *Languages:* TypeScript
- *Backend Services:*
  - *Supabase* – storing summaries
  - *MongoDB Atlas* – storing full blog content
- *Deployment:* Vercel

---

## 📂 Folder Structure

nexium-assign2/ ├── public/ ├── src/ │   ├── app/ │   │   ├── page.tsx         # Main logic for summarisation │   │   └── layout.tsx       # App layout │   ├── components/ │   │   └── ui/              # ShadCN UI components (Input, Button) │   └── lib/ │       ├── db.ts            # MongoDB connection logic │       └── supabase.ts      # Supabase client setup ├── .env.local               # Environment variables (not pushed) ├── package.json ├── tailwind.config.ts ├── tsconfig.json └── README.md

---

## 🌍 Environment Variables

These must be added in .env.local (and in *Vercel* settings when deploying):

```env
MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key


---

🔗 Live Demo (Vercel)

https://nexium-marium-abid-assign2-y7iv.vercel.app/ 🚀

