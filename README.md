# Comfy Store

Comfy Store is a React single page e-commerce application for browsing furniture, viewing product details, managing a cart, signing in, and placing orders. It uses the public Strapi Store API for products, authentication, and order-related requests.

## Features

- Product landing page with featured items
- Product catalog with filters and pagination
- Single product pages with color and quantity selection
- Shopping cart with persisted local storage state
- User login, registration, and guest login flow
- Protected checkout and orders routes
- Toast notifications for user feedback
- Light/dark theme switching with DaisyUI themes
- GitHub Pages SPA fallback support for direct route refreshes

## Tech Stack

- **React**: Builds the component-based user interface.
- **Vite**: Provides the development server, production build, and GitHub Pages base path handling.
- **React Router**: Defines application routes, nested layouts, loaders, redirects, and route-level error handling.
- **TanStack React Query**: Fetches and caches product, single product, and order data.
- **Redux Toolkit**: Manages client-side cart and user state.
- **React Redux**: Connects React components to the Redux store.
- **Axios**: Creates the API client for requests to `https://strapi-store-server.onrender.com/api`.
- **Tailwind CSS**: Provides utility-first styling.
- **DaisyUI**: Supplies ready-made UI components and app themes.
- **React Toastify**: Displays success and error notifications.
- **MSW**: Supports API mocking during development and tests.
- **Vitest**: Runs the test suite.
- **Testing Library**: Tests React components through user-facing behavior.
- **Playwright browser provider for Vitest**: Enables browser-based test execution.
- **ESLint**: Checks code quality and React-related lint rules.
- **gh-pages**: Publishes the production `dist` folder to GitHub Pages.

## Project Structure

```text
src/
  assets/       Static image assets used by the UI
  components/   Shared UI pieces such as navbar, filters, cart totals, product lists
  features/     Redux slices and related cart/user state logic
  mocks/        MSW browser and node mock setup
  pages/        Route components, loaders, and page tests
  utils/        API client and small helper utilities
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in `dist`.

```bash
npm run preview
```

Serves the production build locally for inspection.

```bash
npm run test
```

Runs the Vitest test suite.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run deploy
```

Builds the app and deploys `dist` to GitHub Pages.

## Deployment Notes

This app is configured for the GitHub Pages project URL:

```text
https://Ant-Nov.github.io/comfy-store
```

The Vite base path is set to `/comfy-store/`, and React Router uses the same basename. The SPA fallback file lives in `public/404.html` so Vite copies it into `dist/404.html` during build. That fallback allows direct visits or refreshes on client-side routes such as `/comfy-store/products`.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.
