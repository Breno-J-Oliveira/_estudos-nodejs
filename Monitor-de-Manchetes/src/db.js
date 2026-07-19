const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "..", "database", "monitoramento.db");
const db = new sqlite3.Database(dbPath);

// Inicialização da Tabela
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS noticias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      url TEXT,
      data_acesso DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// CREATE: Inserir notícias
function inserirNoticias(noticias) {
  return new Promise((resolve, reject) => {
    if (noticias.length === 0) return resolve();
    const stmt = db.prepare("INSERT INTO noticias (titulo, url) VALUES (?, ?)");
    noticias.forEach(n => stmt.run(n.titulo, n.url));
    stmt.finalize((err) => err ? reject(err) : resolve());
  });
}

// READ: Listar todas
function listarNoticias() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM noticias ORDER BY data_acesso DESC", [], (err, rows) => {
      err ? reject(err) : resolve(rows);
    });
  });
}

// DELETE: Remover por ID
function excluirNoticia(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM noticias WHERE id = ?", [id], (err) => {
      err ? reject(err) : resolve();
    });
  });
}

module.exports = { inserirNoticias, listarNoticias, excluirNoticia };