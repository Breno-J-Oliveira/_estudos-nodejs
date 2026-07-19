# 📰 Monitor de Manchetes — Web Scraping em Tempo Real

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-10B981?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Web_Scraping-Automatizado-2563EB?style=for-the-badge" alt="Web Scraping">
  <img src="https://img.shields.io/badge/Tempo_Real-3_Portais-111827?style=for-the-badge" alt="Tempo Real">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Cheerio-Web_Scraping-000000?style=for-the-badge" alt="Cheerio">
  <img src="https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
</p>

---

## 📑 Índice
1. [Sobre](#-sobre)
2. [Arquitetura](#-arquitetura)
3. [Portais Monitorados](#-portais-monitorados)
4. [API Endpoints](#-api-endpoints)
5. [Dashboard](#-dashboard)
6. [Tecnologias](#-tecnologias)
7. [Equipe](#-equipe)
8. [Contatos](#-contatos)

---

## 🎯 Sobre

O **Monitor de Manchetes** é um sistema de **web scraping automatizado** que coleta notícias em tempo real dos principais portais brasileiros (G1, UOL e CNN Brasil). Utiliza Node.js + Express para o backend, SQLite para persistência e Axios + Cheerio para extração de dados.

### Funcionalidades
- 🔄 Coleta automatizada de manchetes de 3 portais
- 💾 Armazenamento em banco SQLite
- 🎨 Dashboard moderno com glassmorphism e dark mode
- 🗑️ Deleção de notícias individual
- 📊 Visualização em cards interativos
- ⚡ API REST para integração

---

## 🏗️ Arquitetura

```
┌──────────────────────────────────────────────┐
│                  Frontend                     │
│  public/index.html + style.css + script.js   │
│  Dashboard com glassmorphism, dark mode       │
│  Lucide Icons, Fetch API                     │
└──────────────────┬───────────────────────────┘
                   │ HTTP (fetch)
┌──────────────────┴───────────────────────────┐
│              Backend (Express)                │
│                                               │
│  src/index.js   → Servidor na porta 3000      │
│  src/scraper.js → Axios + Cheerio (scraping)  │
│  src/db.js      → SQLite3 (banco local)       │
└──────────────────┬───────────────────────────┘
                   │
┌──────────────────┴───────────────────────────┐
│              Portais Externos                 │
│  🌐 G1 (g1.globo.com)                        │
│  🌐 UOL (uol.com.br)                         │
│  🌐 CNN Brasil (cnnbrasil.com.br)            │
└──────────────────────────────────────────────┘
```

---

## 🌐 Portais Monitorados

| Portal | URL Base | Seletor CSS |
|--------|----------|-------------|
| **G1** | `g1.globo.com` | `h2 a`, `.feed-post-link` |
| **UOL** | `uol.com.br` | `h3 a` |
| **CNN Brasil** | `cnnbrasil.com.br` | `h2 a` |

### Mecanismo de Scraping
```javascript
// src/scraper.js (38 linhas)
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeNews() {
  const urls = [
    { name: 'G1', url: 'https://g1.globo.com/', selector: 'h2 a, .feed-post-link' },
    { name: 'UOL', url: 'https://www.uol.com.br/', selector: 'h3 a' },
    { name: 'CNN', url: 'https://www.cnnbrasil.com.br/', selector: 'h2 a' }
  ];

  for (const source of urls) {
    const { data } = await axios.get(source.url, { timeout: 5000 });
    const $ = cheerio.load(data);
    $(source.selector).each((i, el) => {
      if (i >= 10) return false; // Limite de 10 notícias por portal
      const title = $(el).text().trim();
      const url = $(el).attr('href');
      if (title && url) saveNews(title, url, source.name);
    });
  }
}
```

---

## 🔌 API Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| **GET** | `/api/scrape` | Dispara coleta de notícias de todos os portais |
| **GET** | `/api/noticias` | Retorna todas as notícias armazenadas (JSON) |
| **DELETE** | `/api/noticias/:id` | Remove uma notícia específica do banco |

### Exemplo de Resposta JSON
```json
[
  {
    "id": 1,
    "titulo": "Dólar fecha em alta pelo terceiro dia seguido",
    "url": "https://g1.globo.com/economia/...",
    "fonte": "G1",
    "data_acesso": "2025-09-11 14:30:00"
  }
]
```

---

## 🎨 Dashboard

O frontend utiliza **design glassmorphism** com dark mode:

```css
.card {
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 8px 32px rgba(0, 112, 243, 0.2);
}
```

- **CSS Variables:** `--bg-color: #050505`, `--card-bg: #111111`, `--accent-color: #0070f3`
- **Google Fonts:** Inter (300, 400, 600)
- **Ícones:** Lucide Icons (zap, refresh-cw, calendar, clock, trash-2)

---

## 🛠️ Tecnologias

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Runtime | Node.js | 18+ |
| Framework | Express | 5.2.1 |
| HTTP Client | Axios | 1.16.0 |
| HTML Parser | Cheerio | 1.2.0 |
| Banco de Dados | SQLite3 | 6.0.1 |
| Ícones | Lucide Icons | CDN |
| Fontes | Google Fonts Inter | CDN |

---

## 👥 Equipe

| Nome | Papel |
|------|-------|
| **Breno José de Oliveira** | Desenvolvedor Full Stack |
| Gustavo Barreto | Desenvolvedor |
| Mariana F. Nascimento | Desenvolvedora |


## 👤 Contatos e Redes Sociais

<p align="center">
  <a href="https://github.com/Breno-J-Oliveira" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/breno-j-oliveira-672619352/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://www.instagram.com/brenoov" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
  <a href="https://x.com/BrenoJOliveira_" target="_blank">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X (Twitter)">
  </a>
</p>

---

<p align="center"><em>Desenvolvido com 💛 por Breno Oliveira — Técnico em Desenvolvimento de Sistemas | SENAI</em></p>