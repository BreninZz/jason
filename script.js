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