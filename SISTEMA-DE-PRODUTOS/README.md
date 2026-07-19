# 🛒 Sistema de Produtos — CRUD com API REST

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-10B981?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/API_REST-Full_CRUD-2563EB?style=for-the-badge" alt="API REST">
  <img src="https://img.shields.io/badge/Equipe-5_Pessoas-111827?style=for-the-badge" alt="Equipe">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/REST_API-JSON-000000?style=for-the-badge" alt="REST API">
  <img src="https://img.shields.io/badge/SENAI-Projeto_Acad%C3%AAmico-EE3124?style=for-the-badge" alt="SENAI">
</p>

---

## 📑 Índice
1. [Sobre](#-sobre)
2. [API REST](#-api-rest)
3. [Dashboard Financeiro](#-dashboard-financeiro)
4. [Estrutura](#-estrutura)
5. [Equipe](#-equipe)
6. [Contatos](#-contatos)

---

## 🎯 Sobre

O **Sistema de Produtos** é um CRUD completo desenvolvido com **Node.js + Express + SQLite** como projeto acadêmico do curso Técnico em Desenvolvimento de Sistemas do SENAI. O sistema oferece uma **API REST** completa e um **dashboard financeiro** com métricas em tempo real.

### Funcionalidades
- ✅ Cadastro, listagem, edição e exclusão de produtos
- ✅ API REST com endpoints GET/POST/PUT/DELETE
- ✅ Dashboard com métricas financeiras (valor total, média, quantidade)
- ✅ Separação clara backend/frontend
- ✅ Persistência em banco SQLite

---

## 🔌 API REST

### Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| **GET** | `/api/produtos` | Lista todos os produtos |
| **GET** | `/api/produtos/:id` | Busca produto por ID |
| **POST** | `/api/produtos` | Cadastra novo produto |
| **PUT** | `/api/produtos/:id` | Atualiza produto existente |
| **DELETE** | `/api/produtos/:id` | Remove produto |

### Modelo de Dados
```json
{
  "id": 1,
  "nome": "Notebook Dell",
  "descricao": "Notebook Dell Inspiron 15",
  "preco": 3499.90,
  "quantidade": 10,
  "categoria": "Eletrônicos"
}
```

### Backend (server.js)
```javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(express.json());

// GET /api/produtos
app.get('/api/produtos', (req, res) => {
  db.all('SELECT * FROM produtos', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST /api/produtos
app.post('/api/produtos', (req, res) => {
  const { nome, descricao, preco, quantidade, categoria } = req.body;
  db.run('INSERT INTO produtos (nome, descricao, preco, quantidade, categoria) VALUES (?, ?, ?, ?, ?)',
    [nome, descricao, preco, quantidade, categoria],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, ...req.body });
    }
  );
});
```

---

## 📊 Dashboard Financeiro

O frontend (`index.html`) exibe um dashboard com métricas calculadas:

| Métrica | Cálculo |
|---------|---------|
| **Total de Produtos** | `COUNT(*)` |
| **Valor Total em Estoque** | `SUM(preco * quantidade)` |
| **Preço Médio** | `AVG(preco)` |
| **Produto Mais Caro** | `MAX(preco)` |
| **Produto Mais Barato** | `MIN(preco)` |

---

## 📁 Estrutura

```
SISTEMA-DE-PRODUTOS/
├── backend/
│   ├── server.js         Servidor Express + API REST
│   └── data/             Banco SQLite
├── frontend/
│   ├── index.html        Dashboard com métricas
│   └── css/              Estilos do dashboard
├── package.json
└── README.md
```

---

## 👥 Equipe

Projeto desenvolvido por uma equipa de **5 integrantes** do SENAI:

| Nome | Papel |
|------|-------|
| **Breno José de Oliveira** | Desenvolvedor Backend |
| Integrante 2 | Desenvolvedor Frontend |
| Integrante 3 | Banco de Dados |
| Integrante 4 | Design/UI |
| Integrante 5 | Testes/Documentação |


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