# 📖 Capítulo 2: Configuração Inicial

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Entender** o que é o Vite e por que usamos
- **Configurar** o ambiente de desenvolvimento
- **Criar** a estrutura base do projeto
- **Instalar** todas as dependências necessárias

## 🚀 O que é o Vite?

### **Vite vs Create React App**

| Característica | Vite | Create React App |
|----------------|------|------------------|
| **Velocidade** | ⚡ Extremamente rápido | 🐌 Mais lento |
| **Hot Reload** | 🔥 Instantâneo | ⏱️ Demora alguns segundos |
| **Bundle Size** | 📦 Menor | 📦 Maior |
| **Configuração** | ⚙️ Mínima | ⚙️ Mais complexa |
| **Suporte** | 🆕 Mais moderno | 📜 Tradicional |

### **Por que escolhemos Vite?**
```javascript
// Vite é mais rápido porque:
// 1. Usa ES modules nativos do navegador
// 2. Compilação sob demanda (não tudo de uma vez)
// 3. Hot Module Replacement (HMR) otimizado
// 4. Build tool moderno (esbuild)
```

## 📁 Estrutura de Arquivos Criada

### **1. package.json - Configurações do Projeto**
```json
{
  "name": "habit-react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",           // Comando para desenvolvimento
    "build": "vite build",   // Comando para produção
    "preview": "vite preview" // Comando para preview
  }
}
```

**Explicação linha por linha:**
- `"name": "habit-react"` - Nome do projeto
- `"private": true` - Projeto privado (não será publicado no npm)
- `"type": "module"` - Usa módulos ES6 (import/export)
- `"scripts"` - Comandos que podem ser executados com `npm run`

### **2. vite.config.js - Configuração do Vite**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Explicação linha por linha:**
- `import { defineConfig } from 'vite'` - Importa função de configuração
- `import react from '@vitejs/plugin-react'` - Plugin para React
- `plugins: [react()]` - Ativa o plugin do React

### **3. index.html - Página Principal**
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HABIT - React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Explicação linha por linha:**
- `<div id="root"></div>` - Container onde React vai renderizar
- `<script type="module" src="/src/main.jsx"></script>` - Carrega o arquivo principal

## 📦 Dependências Instaladas

### **Dependências de Produção:**
```json
{
  "react": "^18.2.0",           // Biblioteca principal do React
  "react-dom": "^18.2.0",       // Renderização no DOM
  "react-router-dom": "^6.8.1"  // Roteamento entre páginas
}
```

**Explicação de cada dependência:**

#### **React (^18.2.0)**
```javascript
// React é a biblioteca principal que:
// - Gerencia componentes
// - Controla estado
// - Otimiza renderização
// - Fornece hooks (useState, useEffect, etc.)
```

#### **React DOM (^18.2.0)**
```javascript
// React DOM é responsável por:
// - Renderizar componentes no navegador
// - Gerenciar eventos do DOM
// - Otimizar atualizações
// - Conectar React com HTML real
```

#### **React Router DOM (^6.8.1)**
```javascript
// React Router DOM permite:
// - Navegação entre páginas
// - URLs dinâmicas
// - Histórico do navegador
// - Links e navegação programática
```

### **Dependências de Desenvolvimento:**
```json
{
  "@types/react": "^18.0.28",        // Tipos TypeScript para React
  "@types/react-dom": "^18.0.11",   // Tipos TypeScript para React DOM
  "@vitejs/plugin-react": "^4.0.0",  // Plugin Vite para React
  "eslint": "^8.38.0",               // Linter para qualidade de código
  "eslint-plugin-react": "^7.32.2",  // Regras ESLint para React
  "eslint-plugin-react-hooks": "^4.6.0", // Regras para hooks
  "eslint-plugin-react-refresh": "^0.3.4", // Regras para hot reload
  "vite": "^4.3.2"                   // Build tool principal
}
```

## 🛠️ Comandos de Desenvolvimento

### **1. Instalar Dependências**
```bash
npm install
```
**O que faz:** Baixa e instala todas as dependências listadas no package.json

### **2. Executar em Desenvolvimento**
```bash
npm run dev
```
**O que faz:** 
- Inicia servidor de desenvolvimento
- Compila código em tempo real
- Hot reload automático
- Abre em http://localhost:5173

### **3. Build para Produção**
```bash
npm run build
```
**O que faz:**
- Compila código otimizado
- Minifica arquivos
- Gera pasta `dist/` com arquivos prontos para produção

### **4. Preview da Build**
```bash
npm run preview
```
**O que faz:** Serve a versão de produção localmente para teste

## 🎯 Estrutura de Pastas Criada

```
react/
├── public/                 # Arquivos estáticos
│   └── vite.svg           # Ícone do Vite
├── src/                   # Código fonte
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos do App
│   ├── index.css         # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── docs/                 # Documentação
├── package.json          # Configurações
├── vite.config.js        # Configuração Vite
├── .eslintrc.cjs         # Configuração ESLint
└── README.md             # Documentação principal
```

## 🔧 Configurações Especiais

### **ESLint (.eslintrc.cjs)**
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',           // Regras básicas do ESLint
    '@typescript-eslint/recommended', // Regras TypeScript
    'plugin:react-hooks/recommended',  // Regras para hooks
  ],
  plugins: ['react-refresh'],      // Plugin para hot reload
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

**O que faz o ESLint:**
- **Analisa código** em busca de erros
- **Sugere melhorias** de código
- **Padroniza estilo** de programação
- **Previne bugs** comuns

## 🚀 Como Testar se Está Funcionando

### **1. Executar o projeto:**
```bash
cd "C:\Users\pc\Aulas_Desenvolvimento_Mobile\react"
npm run dev
```

### **2. Verificar no navegador:**
- Abra: `http://localhost:5173`
- Deve aparecer a página inicial do HABIT
- Navegação deve funcionar entre páginas

### **3. Verificar no terminal:**
```
  VITE v4.3.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## 🎓 Conceitos Importantes

### **Módulos ES6:**
```javascript
// Import (importar)
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Export (exportar)
export default MeuComponente
export { MeuComponente }
```

### **JSX:**
```javascript
// JSX é uma extensão do JavaScript que permite:
const elemento = <h1>Olá, mundo!</h1>

// É compilado para:
const elemento = React.createElement('h1', null, 'Olá, mundo!')
```

### **Componentes Funcionais:**
```javascript
// Componente é uma função que retorna JSX
function MeuComponente() {
  return <div>Conteúdo do componente</div>
}

// Arrow function (mais moderno)
const MeuComponente = () => {
  return <div>Conteúdo do componente</div>
}
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Analisar** a estrutura de arquivos criada
2. **Entender** como os componentes se conectam
3. **Explicar** o fluxo de renderização
4. **Criar** os primeiros componentes

---

**🎯 Próximo:** [Estrutura de Arquivos](./03-estrutura.md)
