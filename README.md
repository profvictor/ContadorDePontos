# Stitch Counter - PWA

Um contador de pontos para tricô e amigurumi, desenvolvido como Progressive Web App (PWA).

## 🧶 Funcionalidades

- Contador de pontos com interface intuitiva
- Botão de desfazer (undo)
- Reset com confirmação por slider
- Atalhos de teclado (espaço/enter para adicionar, backspace para desfazer)
- Design responsivo e animações suaves
- Funciona offline como PWA

## 📱 Como instalar no celular

1. Acesse o app no navegador do seu celular
2. No iOS: toque no botão de compartilhar e selecione "Adicionar à Tela Inicial"
3. No Android: aparecerá um banner "Adicionar à tela inicial" ou use o menu do navegador

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar repositório no GitHub
1. Crie um novo repositório no GitHub
2. Faça upload dos arquivos do projeto

### Passo 2: Configurar GitHub Pages
1. Vá para Settings > Pages
2. Em "Source", selecione "Deploy from a branch"
3. Escolha a branch "main" e pasta "/ (root)"
4. Clique em "Save"

### Passo 3: Acessar o app
O app estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio`

## 📁 Estrutura dos arquivos

```
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── manifest.json       # Configuração do PWA
├── sw.js              # Service Worker
├── logo.png           # Ícone do app
├── maquina.gif        # GIF da máquina de tricô
└── maquina-parada.png # Imagem da máquina parada
```

## 🎨 Cores do tema

- Cor principal: `#FBA2D0` (rosa)
- Cor secundária: `#C688EB` (roxo)
- Cor de destaque: `#6C7EE1` (azul)
- Cor de fundo: `#92B9E3` (azul claro)

## 📱 Compatibilidade

- ✅ iOS Safari
- ✅ Chrome Android
- ✅ Firefox Mobile
- ✅ Samsung Internet
- ✅ Edge Mobile

## 🔧 Tecnologias utilizadas

- HTML5
- CSS3 (com animações e gradientes)
- JavaScript (vanilla)
- Progressive Web App (PWA)
- Service Worker para cache offline 