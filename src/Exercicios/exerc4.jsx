// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useState } from "react";

const Exerc4 = () => {
  const [dados, setDados] = useState();

  

  return (
    <>
    <div className="box">
      <h1>Selecione sua preferência:</h1>
      <button>Notebook</button>
      <button>Smartphone</button>
    </div>

    <div className="box">

    </div>
    </>
  )
}

export default Exerc4;