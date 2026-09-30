# ShopHub seller onboarding demo

PHP demo with a Tailwind/Vite CSS build. This is not the Laravel MVC application used by XLAP; it remains an independent demo and does not process real registration or payments.

## Setup

```powershell
npm install
npm run build
php -S 127.0.0.1:8000
```

Open `http://127.0.0.1:8000/`. Run `npm run build` after changing styles. The PHP server serves `dist/assets/style.css`; `assets/style.css` remains the source for the existing page styles and `src/input.css` provides Tailwind directives.

Do not enter real payment card information. The payment fields are display-only in this demo, and `Next` navigates to the Store screen without submitting them.
