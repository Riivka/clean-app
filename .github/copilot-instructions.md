# Copilot Instructions for clean-app

## Project Overview

**clean-app** is a React + Vite application with TailwindCSS for styling. Help a household create, maintain, and continuously improve a personalized cleaning schedule using AI, with clear ownership, role-based access, and real-life flexibility.
- **Tech Stack**: React 19.x, Vite 7.x, TailwindCSS 4.x, ESLint 9.x
- **Architecture**: 
not yet decided, currently a single-page app
- **Build System**: Vite (fast HMR, optimized builds)
- **Styling**: TailwindCSS (utility-first CSS framework)

## Key Files & Structure

| File | Purpose |
|------|---------|
| [vite.config.js](../vite.config.js) | Vite configuration with React plugin and TailwindCSS integration |
| [eslint.config.js](../eslint.config.js) | ESLint rules for React hooks and fast refresh |
| [src/main.jsx](../src/main.jsx) | React app entry point; renders App component into #root DOM element |
| [src/App.jsx](../src/App.jsx) | Root component (currently a demo counter with HMR test) |
| [src/index.css](../src/index.css) | Global styles and TailwindCSS directives |
| [index.html](../index.html) | HTML template with #root div and module script loader |
| [package.json](../package.json) | Dependencies and scripts |

## Developer Workflows

### Running the Application
```bash
npm run dev       # Start dev server with HMR (http://localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview built app locally
npm run lint      # Run ESLint on all .js/.jsx files
```

### Development Patterns
- **Hot Module Replacement (HMR)**: Changes to `src/**/*.jsx` auto-refresh the browser without full page reload
- **Fast Refresh**: React components preserve state across HMR updates (see eslint-plugin-react-refresh)
- **TailwindCSS**: Apply utility classes directly in JSX (e.g., `className="card p-4 rounded"`)
- **CSS Modules**: Use `.module.css` files for component-scoped styles if needed (optional)

## Project Conventions

### React Component Structure
- **Functional Components Only**: Use hooks (useState, useEffect, etc.); no class components
- **Component Location**: Place new components in `src/` directory
- **Naming**: PascalCase for components (e.g., `MyComponent.jsx`), kebab-case for utilities
- **File Naming**: Component files match the component name (e.g., `Counter.jsx` exports `Counter`)

### Styling Approach
- **Primary**: TailwindCSS utility classes in `className` prop
- **Component Styles**: Use `src/*.css` for component-specific styles (import in component file)
- **Global Styles**: `src/index.css` includes TailwindCSS directives and global resets

### State Management
- **Current Approach**: React hooks (useState) for local component state
- **Future Growth**: If complex shared state is needed, consider React Context or a state management library
- **Props**: Pass data down via props; use callbacks for child-to-parent communication

## ESLint & Code Quality

**Active Rules**:
- React Hooks lint rules (requires dependency array, no conditional hooks)
- React Fast Refresh rules (no anonymous arrow components in export)
- ECMAScript 2020 syntax support
- Browser globals (window, document, etc.)

**Run Linting**:
```bash
npm run lint      # Check for violations
npm run lint -- --fix  # Auto-fix issues
```

## Integration Points & Dependencies

### External Dependencies
- **React 19.x**: UI library for component rendering
- **React DOM 19.x**: ReactDOM.createRoot() in main.jsx
- **Vite 7.x**: Build tool and dev server
- **TailwindCSS 4.x**: CSS framework (processed via @tailwindcss/vite plugin)
- **@vitejs/plugin-react**: Enables JSX transformation and Fast Refresh

### Build Output
- **Entry**: `index.html` references `src/main.jsx`
- **Output**: `dist/` directory (production builds)
- **Assets**: Public assets in `public/` copied to dist root; import assets in `src/` as modules

## Common Patterns & Examples

### Applying TailwindCSS
```jsx
<div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
  <p className="text-lg font-semibold">Hello</p>
</div>
```

### Importing Assets
```jsx
import logo from './assets/react.svg'
export default function Logo() {
  return <img src={logo} alt="React" />
}
```

## Tips for Agents

1. **Always check eslint.config.js** when modifying ESLint rules or adding plugins
2. **Vite caching**: Restart dev server if node_modules changes significantly
3. **TailwindCSS IntelliSense**: Ensure VS Code has Tailwind extension for auto-completion
4. **React Fast Refresh limitations**: Avoid exporting anonymous components; use named exports
5. **State persistence**: useState state resets on full page reload (use localStorage if persistence needed)

## When to Escalate to User

- Changes to project dependencies (add/remove packages)
- Build failures that aren't obvious code issues
- Architecture decisions (e.g., adding state management, routing)
- Performance optimizations requiring tool selection
