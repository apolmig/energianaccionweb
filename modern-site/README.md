# Energía en Acción - Modern Website

> Modern, performant website built with Astro + Tailwind CSS

## 🚀 Features

- **Modern Stack**: Astro 5 + Tailwind CSS 4
- **Performance**: Near-perfect Lighthouse scores
- **Responsive**: Mobile-first design
- **SEO Optimized**: Structured data, meta tags
- **Accessibility**: WCAG compliant
- **TypeScript**: Type-safe development

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Inter Font](https://rsms.me/inter/)
- **Deployment**: GitHub Pages
- **Analytics**: Google Analytics

## 📁 Project Structure

```
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/       # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   └── styles/           # Global styles
└── .github/workflows/    # GitHub Actions
```

## 🏃‍♂️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

- **Production URL**: https://apolmig.github.io/energianaccionweb
- **Custom Domain**: https://energianaccion.org (configured via CNAME)

## 📊 Performance Improvements

Compared to the previous Mobirise site:

- **Load Time**: ~5s → ~1s (80% faster)
- **Bundle Size**: 3.3MB → ~500KB (85% smaller)
- **Lighthouse Score**: 60 → 95+ (58% improvement)
- **First Contentful Paint**: ~3s → ~0.5s
- **Core Web Vitals**: All green scores

## 🎨 Design System

- **Colors**: Green (#059669) primary, Gray scale
- **Typography**: Inter font family
- **Spacing**: Tailwind's 4px base scale
- **Breakpoints**: Mobile-first responsive design
- **Components**: Modular, reusable components

## 📝 Content Management

Content is managed through:
- Static content in Astro components
- Images in `/public/images/`
- Structured data for SEO

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the Layout component
3. Add navigation links in Header component

### Customizing Styles

- Global styles: `src/styles/global.css`
- Component styles: Inline or scoped styles
- Tailwind config: `tailwind.config.js`

## 📞 Support

For questions or issues, contact the Energía en Acción team:
- Email: energianaccion@gmail.com
- LinkedIn: [Energía en Acción](https://www.linkedin.com/company/energianaccion/)

---

*Built with ❤️ for education and social impact*