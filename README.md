# Webflow Custom Code Starter Template

A starter template for integrating custom JavaScript with Webflow sites, featuring Vite as the bundler and Three.js for 3D graphics.

## Features

- **Vite** for fast bundling and development
- **Three.js** for 3D graphics and animations
- **GSAP** for smooth animations
- **Page-specific code** organization
- Production-ready builds with code minification
- Source maps for easier debugging

## Project Structure

```
webflow-starter/
├── dist/                   # Built files ready for Webflow
├── src/
│   ├── global/             # Global scripts for all pages
│   │   └── index.js
│   ├── home/               # Home page specific scripts
│   │   └── index.js
│   ├── about/              # About page specific scripts
│       └── index.js
├── vite.config.js          # Vite configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14.18+ or v16+)
- npm or yarn

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/azizqamar7/Webflow-Vite-Starter-Template
   cd Webflow-Vite-Starter-Template
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start a local development server at http://localhost:3000.

### Building for Production

Build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, organized by entry point:

- `dist/global.js` - Code for all pages
- `dist/home.js` - Home page specific code
- `dist/about.js` - About page specific code
- `dist/three-scene.js` - Three.js specific code

## Integrating with Webflow

### Basic Integration

1. Build your project using `npm run build`
2. Upload the JS files from the `dist` directory to your hosting service or Webflow's asset manager
3. Add script tags to your Webflow pages:

```html
<!-- Add to all pages in the site-wide custom code section -->
<script src="path/to/global.js" defer></script>

<!-- Add to the home page custom code section -->
<script src="path/to/home.js" defer></script>

<!-- Add to the about page custom code section -->
<script src="path/to/about.js" defer></script>
```

### Advanced Setup with Webflow's CMS

If you're using Webflow's CMS, you can create a collection for JS assets:

1. Create a collection called "JS Assets"
2. Add fields for:
   - Name
   - JS File URL
   - Page ID or Name

Then use Webflow's collection lists and conditional visibility to load the right scripts on each page.

## Customization

### Adding a New Page-Specific Script

1. Create a new folder in `src/` (e.g., `src/contact/`)
2. Add an `index.js` file in that folder
3. Update `vite.config.js` to include the new entry point:

```javascript
input: {
  'global': resolve(__dirname, 'src/global/index.js'),
  'home': resolve(__dirname, 'src/home/index.js'),
  'about': resolve(__dirname, 'src/about/index.js'),
  'contact': resolve(__dirname, 'src/contact/index.js'), // New entry point
},
```

### Adding External Libraries

Install the package using npm:

```bash
npm install package-name
# or
yarn add package-name
```

Then import it in your JavaScript file:

```javascript
import packageName from 'package-name'
```

## License

MIT

---

Feel free to customize this template to fit your specific needs. If you have any questions or need help, please open an issue on GitHub.
