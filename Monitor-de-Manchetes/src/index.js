const express = require('express');
const path = require('path');
const scraper = require('./scraper');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Rota de Scraping
app.get('/api/scrape', async (req, res) => {
    const { portal } = req.query;
    try {
        const dados = await scraper.coletarNoticias(portal);
        res.json(dados);
    } catch (error) {
        res.status(500).json({ erro: "Falha na coleta", detalhes: error.message });
    }
});

// Rota para listar o que está no banco (READ)
app.get('/api/noticias', async (req, res) => {
    try {
        const dados = await db.listarNoticias();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao ler banco" });
    }
});

// Rota para deletar (DELETE)
app.delete('/api/noticias/:id', async (req, res) => {
    try {
        await db.excluirNoticia(req.params.id);
        res.json({ mensagem: "Excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao excluir" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});