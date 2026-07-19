const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./db");

const portais = {
  g1: { url: "https://g1.globo.com/", seletor: "h2 a, .feed-post-link" },
  uol: { url: "https://www.uol.com.br/", seletor: "h3 a" },
  cnn: { url: "https://www.cnnbrasil.com.br/", seletor: "h2 a" }
};

async function coletarNoticias(portal) {
  if (!portais[portal]) throw new Error("Portal não suportado.");

  try {
    const { url, seletor } = portais[portal];
    const { data } = await axios.get(url, { timeout: 5000 });
    const $ = cheerio.load(data);
    const manchetes = [];

    $(seletor).each((i, el) => {
      const titulo = $(el).text().trim();
      let link = $(el).attr("href");

      if (titulo && link && manchetes.length < 10) { // Limitando a 10 para teste
        link = link.startsWith("http") ? link : new URL(link, url).href;
        manchetes.push({ titulo, url: link });
      }
    });

    await db.inserirNoticias(manchetes);
    return { portal, total: manchetes.length, noticias: manchetes };
  } catch (error) {
    console.error(`Erro no Scraping (${portal}):`, error.message);
    throw error;
  }
}

module.exports = { coletarNoticias };