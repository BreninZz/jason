const meuLivroFavorito = {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    ano: 1979,
    statusLeitura: "Lido" 
  };
  
  console.log("Objeto de livro criado:");
  console.log(meuLivroFavorito);

const meuLivroFavoritoJSON = JSON.stringify(meuLivroFavorito);

    console.log("\nObjeto de livro convertido para JSON:");
    console.log(meuLivroFavoritoJSON);

const livroReconvertido = JSON.parse(meuLivroFavoritoJSON);

    console.log("\nJSON reconvertido para objeto de livro:");
    console.log(livroReconvertido);

const fs = require('fs');
const path = require('path');

/**
 * @param {string} nomeArquivo 
 * @param {object} dados 
 * @returns {Promise<void>}
 */
function salvarComoJSON(nomeArquivo, dados) {
  return new Promise((resolve, reject) => {

    const dadosJSON = JSON.stringify(dados, null, 2);

    const caminhoCompleto = path.join(__dirname, nomeArquivo);

    fs.writeFile(caminhoCompleto, dadosJSON, 'utf8', (err) => {
      if (err) {
        console.error(`Erro ao salvar o arquivo ${nomeArquivo}:`, err);
        return reject(err);
      }
      console.log(`\nArquivo "${nomeArquivo}" criado com sucesso em: ${caminhoCompleto}`);
      resolve();
    });
  });
}

salvarComoJSON("meu_livro_favorito.json", meuLivroFavorito)
  .then(() => {
    console.log("Processo de salvar JSON concluído.");
  })
  .catch((error) => {
    console.error("Falha ao salvar o arquivo JSON:", error);
  });    