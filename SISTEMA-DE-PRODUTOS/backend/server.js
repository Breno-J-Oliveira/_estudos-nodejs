const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// CONFIGURAÇÃO CRUCIAL: Aponta para a pasta frontend que está fora de backend
const frontendPath = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendPath));

// Conexão com o banco de dados na pasta data
const dbPath = path.join(__dirname, "data", "produtos.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS produtos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            preco REAL,
            categoria TEXT,
            estoque INTEGER DEFAULT 0
        )
    `);
});

// Rotas da API
app.get("/produtos", (req, res) => {
    db.all("SELECT * FROM produtos ORDER BY id DESC", [], (err, rows) => {
        if(err) return res.status(500).json(err);
        res.json(rows);
    });
});

app.post("/produtos", (req, res) => {
    const { nome, preco, categoria, estoque } = req.body;
    db.run(
        "INSERT INTO produtos(nome, preco, categoria, estoque) VALUES(?, ?, ?, ?)",
        [nome, preco, categoria, estoque],
        function(err) {
            if(err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        }
    );
});

app.delete("/produtos/:id", (req, res) => {
    db.run("DELETE FROM produtos WHERE id=?", [req.params.id], (err) => {
        if(err) return res.status(500).json(err);
        res.json({ mensagem: "Removido" });
    });
});

// Rota principal: Entrega o index.html quando acessar localhost:3000
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));