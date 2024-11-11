```markdown
# Testa Project



A simple web project built with Vite, styled with Tailwind CSS, and set up with ESLint for linting. This project demonstrates basic HTML structure, navigation, and responsive images with hover effects. The site is designed for easy deployment on GitHub Pages.

## Features

- Vite as the development tool and build system.
- Tailwind CSS for styling and layout.
- ESLint configured for linting JavaScript code.
- Responsive design with hover effects on images.
- GitHub Pages deployment setup.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

## Screenshot


![tessta](https://github.com/user-attachments/assets/a52e2f52-0111-4dde-8cd3-b20554adfd83)

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies using npm or yarn.

```bash
cd your-repo-name
npm install
```

or

```bash
cd your-repo-name
yarn install
```

### 3. Run the Development Server

To start the development server and view the project in your browser:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will launch the project on `http://localhost:3000` (or the port specified by Vite).

### 4. Lint the Code

To run ESLint on your JavaScript files:

```bash
npm run lint
```

or

```bash
yarn lint
```

## Deployment

This project can be deployed on GitHub Pages using the following steps:

### 1. Build the Project

```bash
npm run build
```

or

```bash
yarn build
```

This will generate a production-ready version of the site in the `dist/` folder.

### 2. Deploy to GitHub Pages

- Push your changes to your GitHub repository.
- Go to your repository's settings page on GitHub.
- In the "Pages" section, set the source to the `gh-pages` branch or the `/dist` folder.
- Your site will be live at `https://your-username.github.io/your-repo-name/`.

## Configuration

### `vite.config.js`

If you are deploying to a subpath on GitHub Pages, make sure to set the `base` URL in `vite.config.js`:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/your-repo-name/', // Change this to your repository name
});
```

### ESLint Configuration

The project includes ESLint for linting JavaScript code. You can configure ESLint by modifying the `.eslintrc` file as needed.

## Files

- `index.html`: Main HTML file for the project.
- `src/style.css`: Custom styles for the project.
- `src/images/`: Folder containing images used in the project.
- `vite.config.js`: Vite configuration file.
- `.eslintrc`: ESLint configuration file.
- `package.json`: Project dependencies and scripts.

## Acknowledgements

- Tailwind CSS for styling.
- Vite for fast builds and development.
- ESLint for keeping the code clean and consistent.

---

Made by Karin Ekenberg. All rights reserved.
```

### Key Points:
1. **Vite**: This is used as the development tool and build system.
2. **GitHub Pages**: Instructions on how to deploy your site to GitHub Pages are included.
3. **ESLint**: Set up to lint your JavaScript files for better code quality.
4. **Tailwind CSS**: Used for styling the site and creating responsive layouts.
5. **Responsive Images**: The hover effect enlarges images slightly using Tailwind’s `scale-110` on hover.
