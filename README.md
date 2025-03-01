# Piano Website

This project is a website dedicated to pianos. It's built using React, TypeScript, and Vite, offering a modern and interactive user experience.

## Features

The website includes several key components:

-   **Header:** A prominent header section for site navigation and branding.
-   **Footer:** A footer section containing important links and copyright information.
-   **Navbar:** A navigation bar for easy access to different parts of the website.
-   **Multiple Pages:** The website features several pages, such as:
    -   **About Page:** Provides information about the website and its purpose.
    -   **Contact Page:** Allows users to get in touch with the site owners.
    -   **Enquiry Page:** Enables users to submit inquiries or requests.

This website is hosted at https://grlnsngh.github.io/shamshersonsNew/

## Development Setup

This project utilizes a modern setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
