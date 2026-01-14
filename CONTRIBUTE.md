# 🤝 CONTRIBUTING.md

Welcome to the project! Here’s a simple guide to help you contribute smoothly.

---

## 🧑‍💻 1. Clone & Install
First, clone the repo and install dependencies:
```bash
git clone https://github.com/SlinkyCollins/Perform-Md.git
cd Perform-Md
npm install
```

## 🎯 2. Sync with main
Before you do anything, always make sure your main branch is up to date:
```bash
git checkout main
git pull origin main
```

## 🌿 3. Create a new branch
Never work directly on main.
Create a new branch for your page:
```bash
git checkout -b page/your-page-name
```
(Example: page/home, page/about, etc.)

## ✏️ 4. Develop & Commit
Work on your page:
- Break big sections into small components (components/sections/Home/Hero.jsx)
- Use existing components like Header, Footer, etc.
- Run the app to test:
```bash
npm run dev
```
When you’re done:
```bash
git add .
git commit -m "feat(home): add hero section"
```

## 📤 5. Push & Open a Pull Request
Push your branch:
```bash
git push origin page/your-page-name
```
Then go to GitHub → Compare & pull request:
- Set base as main and compare as your branch (page/your-page-name)
- Write a short title and description of what you changed.

## 🔍 6. Review & Merge
Your PR will be reviewed — if it looks good, we’ll merge into main.
If changes are needed, you’ll get comments to update.

## 🔄 7. Stay Updated
While working, always keep your branch updated:
```bash
git checkout main
git pull origin main
git checkout page/your-page-name
```

## 🧩 8. Reusable Components & UI
Shared components live in components/.
Just import them — don’t duplicate!
If you need a new shadcn component:
```bash
npx shadcn-ui@latest add <component-name>
```

## 🚀 9. Final Review & Deployment
Once all pages are merged into main and tested on desktop & mobile:
- Main will be deployed automatically on Vercel.
- Every merge to main updates the live site.

## 💬 10. Got Questions?
Ask in the group chat anytime — let’s help each other & build this like a pro team 🔥💪🏽!