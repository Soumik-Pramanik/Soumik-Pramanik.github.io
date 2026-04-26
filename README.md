# Portfolio - Soumik Pramanik

A modern, responsive portfolio website with a fixed header and scrollable content.

**Live site:** [soumik-pramanik.github.io](https://soumik-pramanik.github.io)

## Features

- Fixed navigation header that stays visible while scrolling
- Dark mode with localStorage persistence
- Smooth scroll animations
- Responsive design for all screen sizes
- Glass morphism UI effects
- Animated background elements

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

The portfolio will open at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build       # production build
npm run deploy      # build + push to gh-pages branch on GitHub
```

Deployment uses `gh-pages` and publishes to the `gh-pages` branch of this repository.

## Customization

All portfolio content is stored in the `DATA` object at the top of [src/App.jsx](src/App.jsx). Update this object to customize:

- Personal information
- Work experience
- Projects
- Skills
- Highlights

## Technologies Used

- React 18.3.1
- Tailwind CSS 3.4.17
- React Router DOM 6.30.0
- PostCSS & Autoprefixer

## License

All rights reserved © 2026 Soumik Pramanik
