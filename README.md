# ShopHub seller onboarding demo

PHP demo with a Tailwind/Vite CSS build. This is not the Laravel MVC application used by XLAP; it remains an independent demo and does not process real registration or payments.

## Local setup

```powershell
npm install
npm run build
php -S 127.0.0.1:8000
```

Open `http://127.0.0.1:8000/`.

## Deploy on Render

This repository includes a Docker deployment. In Render choose **New > Web Service**, select this repository, then set:

- **Runtime/Language:** Docker (not Node)
- **Branch:** `main`
- **Dockerfile:** `./Dockerfile`
- **Build command:** leave empty
- **Start command:** leave empty
- **Plan:** Free for testing, or a paid plan if it must stay warm

Render builds the Vite/Tailwind assets inside Docker and starts PHP on Render's `$PORT`. `render.yaml` can also be used with Render Blueprint.

This demo does not process real registration, payment, or identity documents. Do not enter real card or identity information.