# BodyweightLab — Premium Editorial Calisthenics Coaching

A production-ready, editorial digital flagship for **BodyweightLab**, an elite online calisthenics coaching brand. Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Designed for instant deployment on **Vercel**.

Inspired by high-contrast art-directed editorial design ([Adrienn White](https://www.adriennwhite.com/)), the website delivers athletic credibility, refined typography, and a frictionless 1-on-1 coaching application engine without any generic SaaS clichés, gradients, or glassmorphism.

---

## 1. Quick Start & Local Development

```bash
# Install dependencies
npm install

# Run development server with Turbopack (default)
npm run dev

# Alternative: Run development server with Webpack (recommended on Windows if Turbopack workers stall)
npm run dev:webpack

# Build for production (tested & verified on Next.js 16)
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

---

## 2. Deploying to Vercel

This repository is optimized for zero-configuration deployment on **Vercel**:

1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Next.js.
4. (Optional) Under **Environment Variables**, you can add:
   - `APPLICATION_WEBHOOK_URL`: (Optional) A Slack, Discord, Zapier, or Make.com webhook URL to receive instant notifications when an athlete applies.
5. Click **Deploy**.

---

## 3. How to Add Your Own Photography

The site includes tailored, high-resolution architectural SVG placeholders with exact aspect ratios (3:4 portrait, 16:9 landscape, and 1:1 square) and plumb-line calisthenics diagrams.

To replace them with your own photos, simply drop your `.jpg` or `.webp` files into the designated folders in `public/images/`:

### Hero Section
- **File**: `public/images/hero/hero-athlete.jpg`
- **Aspect Ratio**: 3:4 portrait (recommended 1200 x 1600 px)
- **Setting**: Update the `src` in `components/Hero.tsx` from `.svg` to `.jpg`.

### Skill Showcase (8 Calisthenics Disciplines)
Drop your skill photos into `public/images/skills/` and update paths in `data/skills.ts`:
1. `public/images/skills/handstand.jpg` (Handstand)
2. `public/images/skills/handstand-pushup.jpg` (Handstand Push-Ups)
3. `public/images/skills/one-arm-handstand.jpg` (One-Arm Handstand)
4. `public/images/skills/press-handstand.png` (Press to Handstand)
5. `public/images/skills/l-sit.jpg` (L-Sit & V-Sit)
6. `public/images/skills/middle-splits.jpg` (Middle Splits & Loaded Flexibility)
7. `public/images/skills/planche.jpg` (Planche)
8. `public/images/skills/front-lever.jpg` (Front Lever)

### About Section
- **File**: `public/images/about/coach-portrait.jpg`
- **Aspect Ratio**: 3:4 portrait (recommended 1000 x 1333 px)
- **Setting**: Update the `src` in `components/About.tsx`.

---

## 4. Testimonials & Client Feedback

The testimonial section in `components/Testimonials.tsx` is styled as a dark near-black (`#0E0E0E`) 3-panel editorial review suite.

> **Important Developer Notice**:  
> The file `data/testimonials.ts` currently contains **fictional layout placeholders** (Ethan Parker, Noah Bennett, Mason Carter, Ryan Mitchell) created to test typography, column widths, and line-breaks.  
> 
> Simply edit `data/testimonials.ts` to replace them with your actual client reviews, coaching goals, and hold achievements.

---

## 5. Coaching Application Engine

When a prospective athlete clicks **"Apply for Coaching"** or **"Apply for this skill"**:
1. An accessible `<dialog>` application modal opens with focus management and backdrop dismiss.
2. If triggered from a specific skill (e.g. Planche or Press), that skill is automatically selected in the intake dropdown.
3. The form validates all required fields and posts to the Next.js API route `/api/apply`.
4. The server validates the payload, logs it to Vercel Serverless runtime logs, and optionally dispatches to your webhook.
5. The athlete receives a confirmed application ID receipt (`APP-XXXXXXXXXX`).

---

## 6. Architecture & File Structure

```
bodyweightlabsite/
├── app/
│   ├── api/
│   │   └── apply/
│   │       └── route.ts         # Serverless API endpoint for athlete applications
│   ├── globals.css              # Editorial tokens, typography classes, custom cursor
│   ├── layout.tsx               # Root layout, Cormorant Garamond + Inter fonts, SEO
│   └── page.tsx                 # Main landing page assembling all 10 sections
├── components/
│   ├── Navigation.tsx           # Minimal sticky bar + Fullscreen curtain overlay
│   ├── Hero.tsx                 # Oversized serif headline & dominant athlete frame
│   ├── SkillShowcase.tsx        # 8-skill asymmetrical editorial portfolio
│   ├── Philosophy.tsx           # "Beyond Strength, Towards Complete Control"
│   ├── Services.tsx             # Typographic 01-06 service list with accordion
│   ├── Experience.tsx           # 7-pillar structured coaching breakdown
│   ├── Testimonials.tsx         # Dark near-black 3-panel review suite
│   ├── About.tsx                # Coach portrait, background & methodology
│   ├── FinalCTA.tsx             # Conversion closer ("Your next skill starts here")
│   ├── Footer.tsx               # Architectural wordmark, navigation & socials
│   ├── ApplicationModal.tsx     # Accessible conversion intake modal
│   ├── CustomCursor.tsx         # Refined desktop cursor (fine-pointer only)
│   └── AnimationProvider.tsx    # GSAP ScrollTrigger client orchestrator
├── data/
│   ├── skills.ts                # 8 skills data model
│   ├── services.ts              # 6 coaching services curriculum
│   ├── testimonials.ts          # Structured layout reviews
│   └── navigation.ts            # Navigation links and brand constants
└── public/
    └── images/                  # Organized asset slots for coach photography
```

---

## 7. Strict Design System Conformance

- **No gradients** whatsoever.
- **No glassmorphism** or excessive drop shadows.
- **No rounded bubble cards** — pure architectural hairlines and structured frames.
- **Palette**: Warm alabaster canvas (`#F9F8F5`), high-contrast text (`#111111`), stone grey (`#6B6862`), deep charcoal (`#0E0E0E` / `#161616`), off-white typography (`#F5F3EF`).
- **Typography**: Cormorant Garamond display serif paired with Inter clean sans.
- **Accessibility**: ARIA labels, semantic markup, keyboard ESC / Tab navigation, OS reduced-motion support.
