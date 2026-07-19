# 📕 Estudos de Node.js — Do terminal REPL às APIs REST com Web Scraping

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Cheerio-Web%20Scraping-EB5424?style=for-the-badge&logo=cheerio&logoColor=white" alt="Cheerio">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <br>
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-10B981?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Projectos-3-2563EB?style=flat-square" alt="Projectos">
  <img src="https://img.shields.io/badge/N%C3%ADvel-Intermedi%C3%A1rio-F59E0B?style=flat-square" alt="Nível">
  <img src="https://img.shields.io/badge/Dura%C3%A7%C3%A3o-~6%20semanas-8B5CF6?style=flat-square" alt="Duração">
  <img src="https://img.shields.io/badge/Institui%C3%A7%C3%A3o-SENAI-EF4444?style=flat-square" alt="SENAI">
  <img src="https://img.shields.io/badge/Equipa-3%20a%205%20pessoas-6366F1?style=flat-square" alt="Equipa">
</p>

---

## O que é esta categoria?

A categoria **Estudos de Node.js** documenta a transição do JavaScript de front-end para back-end. São **3 projectos** que evoluem do terminal REPL (simulações puras de JavaScript) até sistemas web completos com servidores Express, bases de dados SQLite, APIs RESTful e Web Scraping de portais de notícias em tempo real.

É aqui que o JavaScript sai do navegador e passa a correr no servidor — manipulando ficheiros, consultando bases de dados, fazendo scraping da web e servindo APIs que alimentam dashboards reais.

**Do `console.log` no terminal ao deploy de uma API REST completa.**

---

## O que esta categoria entrega?

### Para o estudante de Node.js
- **Node.js REPL** — execução de JavaScript fora do navegador, simulações no terminal
- **Express.js** — criação de servidores HTTP, rotas, middleware, `req`/`res`
- **APIs RESTful** — `GET`, `POST`, `PUT`, `DELETE` com boas práticas
- **SQLite** — base de dados relacional leve, queries parametrizadas, migrações
- **Web Scraping** — extração de dados da web com Axios + Cheerio
- **Arquitectura MVC** — separação de responsabilidades (models, views, controllers)
- **Frontend + Backend integrados** — API que serve um dashboard web
- **Trabalho em equipa** — projectos com 3 a 5 pessoas, Git colaborativo

### Para o recrutador / avaliador
- **Progressão clara** — REPL → Web Scraping → API REST completa
- **Sistemas reais** — não são exercícios de tutorial, são aplicações funcionais
- **Full-stack com Node.js** — back-end Express + front-end HTML/CSS/JS servido pela mesma API
- **Web Scraping profissional** — scraping de G1, UOL, CNN com tratamento de erros e timeouts
- **Trabalho em equipa** — 2 dos 3 projectos foram desenvolvidos em grupo
- **Base de dados** — SQLite com queries reais, não apenas ficheiros JSON
- **Código estruturado** — separação `src/`, `public/`, `database/`, `backend/`, `frontend/`

---

## Como funciona? — Percurso de Aprendizagem

### 🔰 Fase 1 — Node.js no Terminal (Projecto 1)

```
1. Node.js REPL — Simulação de atendimento
   Variáveis, condicionais, laços, funções
   console.table, entrada/saída no terminal
   Exercício individual
```

**Objectivo:** perceber que JavaScript corre fora do navegador. Praticar sintaxe ES6+ no terminal, sem HTML nem CSS — apenas lógica pura.

### 🟡 Fase 2 — Web Scraping (Projecto 2)

```
2. Monitor de Manchetes — Dashboard de notícias
   Axios (HTTP requests) + Cheerio (parse HTML)
   Express (servidor) + SQLite (base de dados)
   Frontend com glassmorphism e dark mode
   Equipa de 3 pessoas
```

**Objectivo:** extrair dados da web em tempo real, armazená-los numa base de dados e exibi-los num dashboard. Dominar o ciclo request → parse → store → serve.

### 🟢 Fase 3 — API REST + Dashboard (Projecto 3)

```
3. Sistema de Produtos — CRUD completo
   API RESTful (GET, POST, PUT, DELETE)
   SQLite para persistência
   Dashboard de métricas financeiras
   Equipa de 5 pessoas (SENAI)
```

**Objectivo:** construir uma API REST profissional com operações CRUD, servindo um dashboard de métricas. Projecto académico completo que simula um sistema real de gestão de produtos.

---

## Arquitectura da Categoria

```
_estudos-nodejs/
│
├── README.md                          ← Este ficheiro (índice geral)
│
├── Node.js-01/                        ← Projecto 1 — Fundamentos no Terminal
│   ├── README.md                      ← Objectivos e conceitos
│   └── Breno_J_Oliveira.docx          ← Documento com a simulação REPL
│
├── Monitor-de-Manchetes/              ← Projecto 2 — Web Scraping + Dashboard
│   ├── README.md                      ← Documentação completa
│   ├── package.json                   ← Dependências (Express, Axios, Cheerio, SQLite)
│   ├── package-lock.json
│   ├── src/                           ← Código-fonte do servidor
│   │   ├── server.js                  ← Servidor Express
│   │   ├── scraper.js                 ← Lógica de scraping (G1, UOL, CNN)
│   │   └── ...                        ← Rotas, controllers, models
│   ├── public/                        ← Frontend (HTML, CSS, JS)
│   │   ├── index.html                 ← Dashboard com glassmorphism
│   │   └── ...                        ← CSS, assets
│   └── database/                      ← Esquema e migrações SQLite
│       └── schema.sql
│
└── SISTEMA-DE-PRODUTOS/               ← Projecto 3 — CRUD + API REST
    ├── README.md                      ← Documentação completa
    ├── banner.png                     ← Banner do projecto
    ├── backend/                       ← API REST (Express + SQLite)
    │   ├── server.js
    │   ├── routes/
    │   ├── controllers/
    │   └── models/
    └── frontend/                      ← Dashboard de métricas
        ├── index.html
        └── ...
```

---

## Todos os Projectos

### 🔰 Fundamentos no Terminal

| # | Projecto | Conceitos | Artefactos |
|---|----------|-----------|------------|
| 1 | [**Node.js-01**](./Node.js-01/) | Node.js REPL, variáveis, condicionais, laços, funções, `console.table`, simulação de atendimento | `Breno_J_Oliveira.docx` |

### 🟡 Web Scraping e Dashboard

| # | Projecto | Stack | Funcionalidades |
|---|----------|-------|-----------------|
| 2 | [**Monitor-de-Manchetes**](./Monitor-de-Manchetes/) | Express + SQLite + Axios + Cheerio | Scraping de G1, UOL, CNN em tempo real; dashboard glassmorphism dark mode; histório de notícias; equipa de 3 |

### 🟢 API REST e CRUD

| # | Projecto | Stack | Funcionalidades |
|---|----------|-------|-----------------|
| 3 | [**SISTEMA-DE-PRODUTOS**](./SISTEMA-DE-PRODUTOS/) | Express + SQLite | CRUD completo (GET, POST, PUT, DELETE); dashboard de métricas financeiras; backend + frontend separados; equipa de 5 (SENAI) |

---

## Stack Tecnológica

| Camada | Tecnologia | Uso |
|--------|-----------|-----|
| Runtime | Node.js | Execução de JavaScript no servidor |
| Framework web | Express.js | Servidor HTTP, rotas, middleware |
| Base de dados | SQLite | Persistência relacional leve |
| HTTP Client | Axios | Requisições HTTP para scraping |
| HTML Parser | Cheerio | Parse e extracção de dados HTML |
| Frontend | HTML5 + CSS3 + JavaScript | Dashboards e interfaces |
| Versionamento | Git + GitHub | Colaboração em equipa |
| Editor | VS Code | Desenvolvimento |

---

## Detalhe dos Projectos

### Projecto 1 — Node.js-01 (REPL)

Simulação de atendimento no terminal usando o REPL do Node.js. Exercício individual para praticar JavaScript puro:

| Conceito | Aplicação |
|----------|-----------|
| `var`/`let`/`const` | Declaração de variáveis |
| `if`/`else`/`switch` | Condicionais para lógica de atendimento |
| `for`/`while` | Laços para iteração |
| Funções | Encapsulamento de lógica |
| `console.table()` | Exibição formatada de dados |
| Entrada/saída | Simulação de input do utilizador |

### Projecto 2 — Monitor de Manchetes (Web Scraping)

Dashboard que faz scraping de portais de notícias em tempo real:

| Funcionalidade | Detalhe |
|----------------|---------|
| **Fontes** | G1, UOL, CNN |
| **Scraping** | Axios (HTTP) + Cheerio (parse HTML) |
| **Armazenamento** | SQLite com histórico de manchetes |
| **Actualização** | Agendamento periódico de scraping |
| **Frontend** | Glassmorphism + dark mode |
| **Equipa** | 3 pessoas |

### Projecto 3 — Sistema de Produtos (CRUD + API REST)

Sistema completo de gestão de produtos com API REST:

| Funcionalidade | Detalhe |
|----------------|---------|
| **CRUD** | Criar, ler, actualizar, eliminar produtos |
| **API REST** | `GET /produtos`, `POST /produtos`, `PUT /produtos/:id`, `DELETE /produtos/:id` |
| **Base de dados** | SQLite com esquema relacional |
| **Dashboard** | Métricas financeiras (total, média, contagem) |
| **Arquitectura** | Backend (API) + Frontend (dashboard) separados |
| **Equipa** | 5 pessoas (projecto académico SENAI) |

---

## Métricas de Aprendizagem

| Métrica | Valor |
|---------|-------|
| Projectos concluídos | 3/3 |
| Tecnologias dominadas | 5 (Node.js, Express, SQLite, Axios, Cheerio) |
| Endpoints REST implementados | 5+ (GET, POST, PUT, DELETE) |
| Fontes de scraping | 3 (G1, UOL, CNN) |
| Projectos em equipa | 2/3 |
| Tamanho das equipas | 3 a 5 pessoas |
| Semanas de curso | ~6 |
| Nível máximo atingido | Intermediário (API REST + Web Scraping) |

---

## Como Usar Esta Categoria para Estudar

### Pré-requisitos
- **Node.js 18+** instalado
- **npm** (vem com o Node.js)
- Navegador web para os dashboards
- Git (para colaboração)

### Passo a passo

1. **Começa pelo Projecto 1** — lê o documento `.docx` com a simulação REPL, abre o terminal e tenta replicar os comandos
2. **Explora o Monitor de Manchetes** — `cd Monitor-de-Manchetes && npm install && npm start`, acede ao dashboard no navegador
3. **Analisa o código de scraping** — percebe como o Axios faz o request e o Cheerio extrai os dados do HTML
4. **Estuda o Sistema de Produtos** — `cd SISTEMA-DE-PRODUTOS/backend && npm install && npm start`, testa os endpoints com Postman ou curl
5. **Faz os teus próprios scrapers** — tenta extrair dados de outros sites usando a mesma lógica do Monitor de Manchetes
6. **Constrói a tua própria API REST** — implementa um CRUD para um domínio diferente (livros, filmes, contactos)

### Estrutura de cada projecto

Cada subpasta contém:
- **`README.md`** — objectivos, stack, instruções de execução
- **`package.json`** — dependências e scripts npm
- **Código-fonte** — `src/` (servidor), `public/` (frontend), `database/` (esquema SQL)
- **Instruções de instalação** — `npm install && npm start`

---

## Roadmap — O que vem a seguir?

| Meta | Estado |
|------|--------|
| Node.js REPL — JavaScript no terminal | ✅ Concluído |
| Express.js — servidor HTTP, rotas, middleware | ✅ Concluído |
| SQLite — base de dados relacional | ✅ Concluído |
| Web Scraping — Axios + Cheerio | ✅ Concluído |
| API RESTful — GET, POST, PUT, DELETE | ✅ Concluído |
| Dashboard com frontend integrado | ✅ Concluído |
| Trabalho em equipa com Git | ✅ Concluído |
| Autenticação com JWT | 🔜 Planeado |
| Upload de ficheiros (multer) | 🔜 Planeado |
| WebSockets (Socket.io) | 🔜 Planeado |
| Testes com Jest + Supertest | 🔜 Planeado |
| Deploy (Render, Railway, VPS) | 🔜 Planeado |
| NestJS (categoria NexusAuth) | ✅ Concluído |

> Os tópicos de autenticação, uploads e WebSockets estão no roadmap. O NestJS já foi aplicado no projecto NexusAuth, que é a evolução natural destes estudos.

---

## 📊 Progressão Visual

```
Semana 1–2   ███░░░░░░░  Node.js REPL — JavaScript no terminal
Semana 3–4   ██████░░░░  Web Scraping — Axios + Cheerio + Express
Semana 5–6   ██████████  API REST + CRUD — Express + SQLite + Dashboard
```

---

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

<p align="center">
  <strong>📕 3 projectos · 5 tecnologias · 2 equipas · Do REPL à API REST</strong><br>
  <em>Desenvolvido com 💛 por Breno Oliveira — Técnico em Desenvolvimento de Sistemas | SENAI</em>
</p>
