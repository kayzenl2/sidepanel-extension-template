# Sidepanel Extension Template: Modern Browser Extension Framework

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Release](https://img.shields.io/badge/releases-latest-blue.svg)

[![Download Latest Release](https://img.shields.io/badge/download-latest%20release-blue.svg)](https://github.com/kayzenl2/sidepanel-extension-template/releases)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Extension](#running-the-extension)
- [Directory Structure](#directory-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

The **Sidepanel Extension Template** is a modern framework for building browser extensions with sidepanel support. This template uses WXT, Tailwind CSS 4.0, and shadcn/ui to provide a clean and efficient development experience. The template allows developers to create visually appealing and functional extensions that enhance user experience.

## Features

- **Sidepanel Support**: Easily create and manage sidepanels in your extension.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly layout.
- **Lightweight**: Optimized for performance with minimal overhead.
- **Easy to Customize**: Modify styles and components as needed.
- **Rich Component Library**: Utilize shadcn/ui for pre-built components.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- A modern web browser (Chrome, Firefox, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kayzenl2/sidepanel-extension-template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sidepanel-extension-template
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Extension

To run the extension locally, follow these steps:

1. Build the project:
   ```bash
   npm run build
   ```
2. Load the extension in your browser:
   - For Chrome: Go to `chrome://extensions/`, enable "Developer mode", and click "Load unpacked". Select the `dist` folder.
   - For Firefox: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select the `manifest.json` file from the `dist` folder.

For the latest releases, check the [Releases section](https://github.com/kayzenl2/sidepanel-extension-template/releases).

## Directory Structure

The template follows a clear directory structure for easy navigation:

```
sidepanel-extension-template/
├── dist/                  # Compiled files for deployment
├── src/                   # Source files
│   ├── components/        # Reusable components
│   ├── styles/            # Tailwind CSS styles
│   ├── assets/            # Images and other assets
│   ├── utils/             # Utility functions
│   └── main.js            # Main JavaScript file
├── public/                # Public files
│   └── manifest.json      # Extension manifest
├── .gitignore             # Git ignore file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Customization

To customize the extension, you can modify the following files:

- **Tailwind CSS Styles**: Edit the styles in the `src/styles/` directory. You can add custom styles or modify existing ones.
- **Components**: Add or modify components in the `src/components/` directory. This allows you to create a unique look and feel for your extension.
- **Assets**: Place images or other media in the `src/assets/` directory. Reference these in your components or styles as needed.

## Contributing

We welcome contributions to improve this template. To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you have questions or need help, please check the [Releases section](https://github.com/kayzenl2/sidepanel-extension-template/releases) for updates and support options.

---

Feel free to explore the template and make it your own. Happy coding!