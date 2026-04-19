# Amogh Shukla — Portfolio

A minimal, dark-themed personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Deployable to Vercel in under 5 minutes.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS variables
- **Email**: Nodemailer via Gmail SMTP
- **Deployment**: Vercel

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Gmail credentials (see below)

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Gmail App Password Setup (for contact form)

The contact form sends emails via Gmail SMTP. You need a **Gmail App Password** (not your regular password).

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (required)
3. Search for **"App Passwords"** in your Google Account
4. Create a new app password → select **Mail** → **Other** → name it "Portfolio"
5. Copy the 16-character password
6. Paste it into `.env.local` as `SMTP_PASS`

Your `.env.local` should look like:
```
SMTP_USER=amoghshukla1616@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
CONTACT_EMAIL=amoghshukla1616@gmail.com
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Set environment variables
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add CONTACT_EMAIL

# Deploy to production
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. In **Environment Variables**, add:
   - `SMTP_USER` → your Gmail address
   - `SMTP_PASS` → your Gmail App Password
   - `CONTACT_EMAIL` → where you want to receive messages
4. Click **Deploy**

That's it. Vercel auto-detects Next.js — no build config needed.

---

## Project Structure

```
amogh-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form backend
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx              # Typewriter animation
│   ├── About.tsx             # Skills grid
│   ├── Experience.tsx        # Work history
│   ├── Projects.tsx          # Project cards
│   ├── Contact.tsx           # Contact form (calls /api/contact)
│   └── Footer.tsx
├── .env.example
├── .env.local                # Your secrets (gitignored)
└── README.md
```

---

## Customization

- **Links**: Update GitHub/LinkedIn/email in `Hero.tsx`, `Contact.tsx`, and `Footer.tsx`
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Experience**: Edit the `experiences` array in `components/Experience.tsx`
- **Colors**: The gold accent is `#c8b97a` — change it in `globals.css` (`--accent`)

---

## .gitignore note

Make sure `.env.local` is in your `.gitignore` (Next.js adds this by default). Never commit your Gmail App Password.
