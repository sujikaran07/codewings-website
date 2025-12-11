# CodeWings Technologies - Official Website

![CodeWings Logo](./public/codewings-logo.png)

## 🚀 About
This is the official corporate website for **CodeWings Technologies**, a premier web and mobile application development firm based in Sri Lanka. The platform is designed to showcase our services, portfolio, and company culture while providing a seamless client inquiry experience.

## 🛠️ Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS (Content)**: [Sanity.io](https://www.sanity.io/)
- **Animations**: Framer Motion & CSS Native
- **Forms**: Server Actions & Nodemailer
- **Deployment**: Vercel (Recommended)

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm (Recommended) or npm

### Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/CodeWings-Technologies/codewings-website.git
    cd codewings-website
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    # or
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add the following secrets:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587
    SMTP_USER=your_email@gmail.com
    SMTP_PASS=your_app_password
    ```

4.  **Run Development Server**:
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🗂️ Project Structure
```bash
├── app/                # Application routes (Next.js App Router)
│   ├── about/          # About us page
│   ├── career/         # Career & Jobs page
│   ├── contact/        # Contact form logic
│   └── studio/         # Embedded Sanity CMS Studio
├── components/         # Reusable UI components (Header, Footer, etc.)
├── lib/                # Logic helper functions (Sanity client, Mailer)
├── sanity/             # Database schemas & config
└── public/             # Static assets (Images, Fonts)
```

## 🔐 Branch & Deployment Workflow
This repository follows a strict workflow to ensure stability.

1.  **Main Branch (`main`)**: Protected. Contains live production code.
2.  **Feature Branches**: All work must be done on separate branches (e.g., `feature/new-design`).
3.  **Pull Requests**: Changes are merged to `main` ONLY via Pull Requests (PRs).

## © License
**Copyright © 2025 CodeWings Technologies.**
All rights reserved. This source code is proprietary and confidential. Unauthorized copying of this file, via any medium is strictly prohibited.
