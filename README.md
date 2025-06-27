# 🎨 Peter P Prat Design System

A comprehensive, enterprise-grade design system built with React, TypeScript, and SCSS. This design system provides not only reusable UI components but also a complete design token system, utility functions, and mixins to ensure consistency and scalability across your applications.

## ✨ Key Features

### 🧩 **Atomic Design Architecture**

- **Atoms**: Basic building blocks (Buttons, Inputs, Icons, Typography)
- **Molecules**: Simple combinations of atoms (Cards, Dropdowns, Modals)
- **Organisms**: Complex UI sections (Headers, Footers, Action Modals)
- **Foundations**: Design tokens and core utilities

### 🎯 **Complete Design Token System**

- **Color Palette**: Semantic color system with multiple shades
- **Typography**: Comprehensive font system with predefined text styles
- **Spacing**: Consistent spacing scale and layout utilities
- **Shadows**: Elevation system for depth and hierarchy
- **Breakpoints**: Responsive design utilities
- **Animations**: Predefined animation patterns
- **Focus Rings**: Accessibility-focused focus indicators

### 🛠 **Developer Experience**

- **TypeScript**: Full type safety with comprehensive type definitions
- **ESLint Configuration**: Optimized linting rules for maintainability
- **Storybook**: Interactive component documentation and testing
- **SCSS Mixins & Functions**: Reusable styling utilities
- **Hot Reload**: Fast development with instant feedback

### 🎨 **Styling Capabilities**

- **SCSS Modules**: Scoped styling with CSS modules
- **Design Token Integration**: Direct access to colors, spacing, and typography
- **Utility Functions**: Helper functions for common styling patterns
- **Responsive Design**: Built-in responsive utilities

## 🚀 Quick Start

### Installation

#### As a Local Dependency

```bash
# Build the design system
yarn build

# Install in your project
yarn add "../relative/path/to/design-system"
```

#### From GitHub Packages

```bash
yarn add @peter-p-prat/design-system
```

### Basic Usage

#### React Components

```tsx
import {Button, Card, Input} from "@peter-p-prat/design-system";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button label="Submit" variant="primary" />
    </Card>
  );
}
```

#### SCSS Integration

```scss
@import "@peter-p-prat/design-system/dist/assets/colors";
@import "@peter-p-prat/design-system/dist/assets/typography";

.my-component {
  background-color: colors.palette("primary", 600);
  padding: spacing.get(4);
  @include typography.text(xl, bold);
}
```

## 📚 Component Library

### Atoms

- **Buttons**: Default, Card, Icon, and Input variants
- **Input Fields**: Text, Number, Search, and TextArea inputs
- **Form Controls**: Checkbox, Radio Button, Switch
- **Display**: Card, Chip, Divider, Loader
- **Navigation**: Pagination Button, Tabs

### Molecules

- **Data Display**: Carousel, Info Card, Pagination
- **Feedback**: Modal, Notification Message, Tooltip
- **Layout**: Collapse, Stepper
- **Interactions**: Dropdown

### Organisms

- **Layout**: Header, Footer
- **Complex Interactions**: Action Modal

### Foundations

- **Icons**: Comprehensive icon library
- **Logo**: Brand assets
- **Design Tokens**: Colors, Typography, Spacing, Shadows

## 🎨 Design Tokens

### Colors

```scss
// Primary, secondary & tertiary colors
background-color: colors.palette("primary", 500);
background-color: colors.palette("secondary", 500);
background-color: colors.palette("tertiary", 500);

// Semantic colors
color: colors.palette("success", 500);
border-color: colors.palette("error", 500);
border-color: colors.palette("progress", 500);
border-color: colors.palette("warning", 500);
```

### Typography

```scss
// Text styles
@include typography.text(xl, bold);
@include typography.heading(m, regular);
```

### Spacing

```scss
// Spacing utilities based in 4px rule
padding: spacing.gap(gap-2);
margin: spacing.gap(gap-10);
```

## 🎨 Color Customization

The design system's color palette is fully customizable from the consuming project by defining CSS custom properties. This allows you to maintain your brand identity while leveraging the design system's component architecture.

### Customizing Colors

Define these CSS custom properties in your project's root styles to override the default color palette:

```css
:root {
  /* Primary Colors */
  --primary-25: #f0f4ff;
  --primary-50: #e6f0ff;
  --primary-100: #b3d1ff;
  --primary-200: #80b3ff;
  --primary-300: #4d94ff;
  --primary-400: #1a75ff;
  --primary-500: #0066ff;
  --primary-600: #0052cc;
  --primary-700: #003d99;
  --primary-800: #002966;
  --primary-900: #001433;

  /* Secondary Colors */
  --secondary-25: #f0fdfc;
  --secondary-50: #e6fbf9;
  --secondary-100: #b3f0eb;
  --secondary-200: #80e5dd;
  --secondary-300: #4ddacf;
  --secondary-400: #1acfc1;
  --secondary-500: #00c4b3;
  --secondary-600: #009d8f;
  --secondary-700: #00766b;
  --secondary-800: #004f47;
  --secondary-900: #002823;

  /* Tertiary Colors */
  --tertiary-25: #f8f4ff;
  --tertiary-50: #f0e8ff;
  --tertiary-100: #d9c7ff;
  --tertiary-200: #c2a6ff;
  --tertiary-300: #ab85ff;
  --tertiary-400: #9464ff;
  --tertiary-500: #7d43ff;
  --tertiary-600: #6435cc;
  --tertiary-700: #4b2799;
  --tertiary-800: #321966;
  --tertiary-900: #190b33;

  /* Button-specific Colors */
  --buttons-25: #f0fdfc;
  --buttons-50: #e6fbf9;
  --buttons-100: #b3f0eb;
  --buttons-200: #80e5dd;
  --buttons-300: #4ddacf;
  --buttons-400: #1acfc1;
  --buttons-500: #00c4b3;
  --buttons-600: #009d8f;
  --buttons-700: #00766b;
  --buttons-800: #004f47;
  --buttons-900: #002823;

  /* Button Over Primary Variant */
  --button-over-primary-bg-color: #00c4b3;
  --button-over-primary-label-color: #ffffff;
  --button-over-primary-disabled-label-color: #e6fbf9;
  --button-over-primary-hover-overlay: #004f47;
  --button-over-primary-pressed-overlay: #f0fdfc;
}
```

### Benefits of Color Customization

- **Brand Consistency**: Maintain your brand colors across all components
- **No Forking Required**: Customize without modifying the design system source
- **Runtime Updates**: Change colors dynamically without rebuilding components

## 🛠 Development

### Prerequisites

- Node.js 18+
- Yarn 4.9.2+

### Setup

```bash
# Install dependencies
yarn install

# Start Storybook for development
yarn start

# Build the library
yarn build

# Run linting
yarn eslint

# Format code
yarn format
```

### Project Structure

```
src/
├── Atoms/          # Basic UI components
├── Molecules/      # Compound components
├── Organisms/      # Complex UI sections
├── Foundations/    # Design tokens & core utilities
│   └── theme/
│       ├── colors/     # Color system
│       ├── typography/ # Typography system
│       ├── spacing/    # Spacing scale
│       ├── shadows/    # Shadow system
│       └── ...
└── shared/         # Utilities & helpers
```

## 🔧 Configuration

### TypeScript

The project includes comprehensive TypeScript configuration with:

- Strict type checking
- Path aliases for clean imports
- CSS module type definitions
- Component prop type safety

### ESLint

Optimized ESLint configuration featuring:

- React-specific rules
- TypeScript integration
- Import sorting
- Code quality standards
- Accessibility guidelines

### Storybook

Interactive component documentation with:

- Component stories for all variants
- Interactive controls
- Accessibility testing
- Visual regression testing

## 📦 Build Output

The build process generates:

- **UMD Bundle**: For direct browser usage
- **ES Modules**: For modern bundlers
- **TypeScript Definitions**: For type safety
- **SCSS Assets**: Design tokens and utilities
- **Storybook Build**: Static documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

ISC License - see LICENSE file for details

## 🔗 Links

- **Storybook**: [Local Development](http://localhost:6006)
- **Repository**: [GitHub](https://github.com/peter-p-prat/design-system)
- **Package**: [@peter-p-prat/design-system](https://npm.pkg.github.com)

---

Built with ❤️ by [Peter P Prat](https://github.com/peter-p-prat)
