# 📖 Capítulo 9: Deploy e Produção

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Preparar** o projeto para produção
- **Otimizar** performance
- **Configurar** build
- **Deploy** da aplicação

## 🚀 Preparação para Produção

### **1. Verificar Dependências**
```bash
# Verificar dependências desatualizadas
npm outdated

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

### **2. Limpeza do Código**
```javascript
// Remover console.logs
console.log('Debug info') // ❌ Remover

// Remover código comentado
// const unusedVariable = 'test' // ❌ Remover

// Verificar imports não utilizados
import { unusedFunction } from './utils' // ❌ Remover
```

### **3. Otimização de Imagens**
```javascript
// Usar formatos modernos
// WebP para imagens
// SVG para ícones
// Lazy loading para imagens grandes
```

## ⚡ Otimização de Performance

### **1. Code Splitting**
```javascript
// Lazy loading de componentes
import { lazy, Suspense } from 'react'

const AdminCategorias = lazy(() => import('./pages/AdminCategorias'))
const AdminCriarPost = lazy(() => import('./pages/AdminCriarPost'))

// Uso com Suspense
<Suspense fallback={<div>Carregando...</div>}>
  <AdminCategorias />
</Suspense>
```

### **2. Bundle Analysis**
```bash
# Instalar analyzer
npm install --save-dev @vitejs/plugin-legacy

# Analisar bundle
npm run build
npx vite-bundle-analyzer dist
```

### **3. Otimização de CSS**
```css
/* Remover CSS não utilizado */
/* Usar CSS crítico */
/* Minificar CSS */
```

## 🏗️ Build de Produção

### **1. Comando de Build**
```bash
# Build para produção
npm run build

# Preview da build
npm run preview
```

### **2. Configuração do Vite**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
})
```

### **3. Variáveis de Ambiente**
```javascript
// .env.local
VITE_API_URL=https://api.exemplo.com
VITE_APP_NAME=HABIT

// .env.production
VITE_API_URL=https://api.producao.com
VITE_APP_NAME=HABIT Production
```

## 🌐 Deploy Options

### **1. Netlify (Recomendado)**

#### **Configuração:**
```javascript
// netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### **Deploy:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### **2. Vercel**

#### **Configuração:**
```javascript
// vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### **Deploy:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### **3. GitHub Pages**

#### **Configuração:**
```javascript
// vite.config.js
export default defineConfig({
  base: '/habit-react/',
  // ... resto da configuração
})
```

#### **Deploy:**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar script no package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run build
npm run deploy
```

## 🔧 Configurações Avançadas

### **1. PWA (Progressive Web App)**
```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'HABIT',
        short_name: 'HABIT',
        description: 'Plataforma de conteúdo',
        theme_color: '#034732',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ]
})
```

### **2. SEO Otimização**
```javascript
// index.html
<head>
  <title>HABIT - Plataforma de Conteúdo</title>
  <meta name="description" content="Descubra conteúdos por categorias, posts em destaque e as escolhas do editor.">
  <meta name="keywords" content="conteúdo, blog, tecnologia, design">
  <meta property="og:title" content="HABIT - Plataforma de Conteúdo">
  <meta property="og:description" content="Descubra conteúdos por categorias, posts em destaque e as escolhas do editor.">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:url" content="https://habit.exemplo.com">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

### **3. Analytics**
```javascript
// Google Analytics
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // Google Analytics
    gtag('config', 'GA_MEASUREMENT_ID')
  }, [])

  return (
    <div className="app">
      {/* Conteúdo */}
    </div>
  )
}
```

## 📊 Monitoramento

### **1. Performance Monitoring**
```javascript
// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

### **2. Error Tracking**
```javascript
// Sentry
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'YOUR_DSN',
  environment: 'production'
})
```

## 🎓 Checklist de Deploy

### **Antes do Deploy:**
- [ ] **Código limpo** - sem console.logs
- [ ] **Dependências atualizadas** - npm audit
- [ ] **Build funcionando** - npm run build
- [ ] **Testes passando** - npm test
- [ ] **Performance otimizada** - Lighthouse
- [ ] **Acessibilidade** - axe DevTools
- [ ] **SEO** - meta tags configuradas

### **Após o Deploy:**
- [ ] **Site funcionando** - todas as páginas
- [ ] **Navegação** - links funcionando
- [ ] **Responsividade** - mobile/desktop
- [ ] **Performance** - Core Web Vitals
- [ ] **Analytics** - tracking funcionando
- [ ] **SSL** - HTTPS configurado
- [ ] **Redirects** - SPA routing

## 🚀 Comandos de Deploy

### **Desenvolvimento:**
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### **Produção:**
```bash
# Build otimizado
npm run build

# Deploy para Netlify
netlify deploy --prod --dir=dist

# Deploy para Vercel
vercel --prod

# Deploy para GitHub Pages
npm run deploy
```

## 🎯 Próximos Passos

### **Melhorias Futuras:**
1. **Estado Global** - Redux ou Zustand
2. **API Integration** - Backend real
3. **Autenticação** - Login funcional
4. **Testes** - Jest + Testing Library
5. **CI/CD** - GitHub Actions
6. **Docker** - Containerização

### **Recursos Adicionais:**
- **Documentação** - Storybook
- **Design System** - Componentes reutilizáveis
- **Internacionalização** - i18n
- **Dark Mode** - Tema escuro
- **Offline Support** - Service Workers

## 🎉 Conclusão

Parabéns! Você completou a migração completa de HTML/CSS para React:

✅ **14 páginas** migradas com sucesso
✅ **Roteamento** funcional implementado
✅ **Responsividade** mantida
✅ **Acessibilidade** preservada
✅ **Performance** otimizada
✅ **Deploy** configurado

### **O que você aprendeu:**
- **React fundamentals** - componentes, hooks, JSX
- **React Router** - navegação entre páginas
- **CSS moderno** - variáveis, grid, flexbox
- **Responsive design** - mobile-first approach
- **Acessibilidade** - ARIA, semântica, navegação
- **Build tools** - Vite, npm scripts
- **Deploy** - produção e monitoramento

### **Próximos projetos:**
- **Estado global** - gerenciamento de dados
- **API integration** - backend real
- **Testes** - qualidade de código
- **CI/CD** - automação de deploy

---

**🎯 Tutorial Completo!** 🚀
