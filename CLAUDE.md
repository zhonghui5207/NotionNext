# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NotionNext is a static blog system built with Next.js that uses Notion as a CMS. It features multiple theme support, extensive customization options, and deployment on Vercel. The project supports multiple languages (Chinese/English) and includes features like comments, analytics, music player, and various visual effects.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Generate sitemap after build
npm run post-build

# Bundle analysis
npm run bundle-report
```

## Architecture Overview

### Core Structure
- **lib/**: Core business logic and utilities
  - `notion.js` - Main Notion API interface
  - `global.js` - Global state management
  - `theme.js` - Theme switching logic
  - `cache/` - Caching system (memory, file, MongoDB)
  - `notion/` - Notion-specific utilities
- **pages/**: Next.js pages following file-based routing
- **components/**: Shared React components
- **themes/**: Theme system with multiple UI themes
- **public/**: Static assets

### Theme System Architecture
The project uses a dynamic theme system where themes are modules that export layout components:

**Theme Structure:**
```
themes/[theme_name]/
├── index.js                 # Main theme export
├── config_[theme_name].js   # Theme configuration
├── Layout*.js              # Page layouts (Index, Slug, Archive, etc.)
└── components/             # Theme-specific components
```

**Available Themes:** next, hexo, matery, medium, fukasawa, nobelium, example, simple

**Theme Loading:**
1. Themes are dynamically imported based on URL query (?theme=), cookie, or config
2. Each theme exports standardized layout components (LayoutIndex, LayoutSlug, etc.)
3. Configuration merges global config with theme-specific settings

### Configuration System
- **blog.config.js** - Main configuration file with all site settings
- **Theme configs** - Each theme has its own configuration file
- **Environment variables** - Support for production overrides via env vars

### Key Features
- **Multi-theme support** with dynamic switching
- **Notion API integration** for content management
- **Caching system** (memory/file/MongoDB options)
- **Comment systems** (Twikoo, Giscus, Gitalk, Cusdis, etc.)
- **Analytics integration** (Google, Baidu, Vercel Analytics)
- **SEO optimization** with sitemap generation
- **Internationalization** support

## Working with Themes

### Creating/Modifying Themes
1. Themes must export all required Layout components
2. Follow the component structure pattern from existing themes
3. Include theme configuration file with feature flags
4. Use shared components from `/components/` directory

### Theme Configuration Pattern
```javascript
const CONFIG_THEME = {
  // Feature toggles
  HOME_BANNER: true,
  POST_LIST_COVER: true,
  RIGHT_BAR: true,
  
  // Navigation settings
  NAV_TYPE: 'fixed', // 'fixed'|'autoCollapse'|'normal'
  
  // Widget configurations
  RIGHT_LATEST_POSTS: true,
  RIGHT_CATEGORY_LIST: true
}
```

## Notion Integration

### Database Structure
The system expects a Notion database with specific properties:
- `type` - Content type (Post, Page, Notice, Menu)
- `status` - Publication status (Published, Invisible)
- `title` - Page title
- `slug` - URL slug
- `category` - Post category
- `date` - Publication date
- `tags` - Post tags
- `summary` - Post excerpt

### Content Types
- **Post** - Blog articles
- **Page** - Static pages
- **Notice** - Announcements
- **Menu/SubMenu** - Navigation items

## Development Guidelines

### Component Development
- Use React hooks and functional components
- Follow existing patterns for state management with `useGlobal()`
- Implement responsive design with Tailwind CSS
- Support dark mode through global theme state

### Styling
- Primary styling with Tailwind CSS
- Theme-specific CSS files in `/public/css/`
- Dark mode support via CSS variables and theme context
- Responsive design patterns across all themes

### Performance Considerations
- Built-in caching system for Notion API calls
- Image optimization through Next.js
- Static generation with ISR (Incremental Static Regeneration)
- Bundle analysis available via `npm run bundle-report`

## Testing and Deployment

- No specific test framework configured
- Deployment optimized for Vercel with `vercel.json` configuration
- Environment variables for production configuration
- Sitemap generation for SEO

## Key Dependencies

- **Next.js 13.3.1** - React framework
- **React 18.2.0** - UI library
- **Tailwind CSS 3.2.4** - Utility-first CSS
- **notion-client/notion-utils** - Notion API integration
- **react-notion-x** - Notion block rendering
- Various comment system integrations and analytics tools

## Configuration Notes

- Main configuration in `blog.config.js` with extensive customization options
- Environment variable support for production overrides
- Theme switching via URL parameter, cookie, or default setting
- Multilingual support with language files in `lib/lang/`