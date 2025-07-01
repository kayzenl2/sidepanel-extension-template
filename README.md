# Sidepanel Extension Template

A modern browser extension template with sidepanel support, built with WXT + Tailwind CSS 4.0 + shadcn/ui.

## Features

- 🖥️ **Sidepanel Interface** - Click extension icon to open browser sidepanel
- ⚡ **WXT Framework** - Next-generation Web Extension development framework
- ⚛️ **React** - Modern UI framework with TypeScript support
- 🎨 **Tailwind CSS 4.0** - Latest utility-first CSS framework
- 🛠️ **shadcn/ui Ready** - Pre-configured for beautiful, accessible React components
- 🔧 **TypeScript** - Full type safety and developer experience
- 🎯 **Modern Development** - Hot reload, modern build tools

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone or use this template**
   ```bash
   git clone <repository-url>
   cd sidepanel-extension-template
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development**
   ```bash
   pnpm dev
   ```

4. **Load extension in browser**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked extension"
   - Select the `.output/chrome-mv3` folder

### Usage

1. Click the extension icon in the browser toolbar
2. The sidepanel will open on the right side
3. Navigate through the template tabs (Home, Profile, Settings)

## Project Structure

```
sidepanel-extension-template/
├── entrypoints/           # Extension entry points
│   ├── background.ts      # Background script
│   ├── content.ts         # Content script (optional)
│   └── sidepanel/         # Sidepanel UI
│       ├── App.tsx        # Main React app
│       ├── index.html     # HTML template
│       └── main.tsx       # React entry point
├── components/            # React components
│   └── ui/                # shadcn/ui components (empty, ready to add)
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
├── hooks/                 # Custom React hooks
├── assets/                # Static assets
├── public/                # Public assets (icons, etc.)
├── components.json        # shadcn/ui configuration
├── wxt.config.ts          # WXT configuration
└── package.json           # Dependencies and scripts
```

## Adding shadcn/ui Components

This template is pre-configured for shadcn/ui. To add components:

```bash
# Example: Add a button component
npx shadcn@latest add button

# Example: Add a dialog component
npx shadcn@latest add dialog
```

The components will be automatically added to `components/ui/` with proper styling.

## Development Commands

```bash
# Development mode with hot reload
pnpm dev

# Development for Firefox
pnpm dev:firefox

# Build for production
pnpm build

# Build for Firefox
pnpm build:firefox

# Create extension zip file
pnpm zip

# Type checking
pnpm compile
```

## Customization

### Styling

- Edit `assets/tailwind.css` for global styles
- Modify theme colors in `components.json`
- Tailwind CSS 4.0 configuration in `wxt.config.ts`

### Extension Configuration

- Update manifest permissions in `wxt.config.ts`
- Modify extension metadata in `package.json`
- Change icons in `public/icon/`

### Sidepanel Content

- Edit `entrypoints/sidepanel/App.tsx` for main UI
- Add new routes/pages as needed
- Extend with additional React components

## Browser Support

- ✅ Chrome/Chromium (Manifest V3)
- ✅ Firefox (Manifest V2/V3)
- ✅ Edge
- ✅ Other Chromium-based browsers

## License

MIT License - feel free to use this template for your projects!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using [WXT](https://wxt.dev), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com)
