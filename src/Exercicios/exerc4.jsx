// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useEffect, useState } from "react";

const Exerc4 = () => {
  const [produto, setProduto] = useState(window.localStorage.getItem('produto'));
  const [dados, setDados] = useState(null);
  
  useEffect(() => {
    if(produto !== null) {
      window.localStorage.setItem('produto', produto);
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then(response => response.json())
      .then(json => setDados(json))
    }
  },[produto])

  async function handleClick({target}) {
    setProduto(target.innerText);
  }

  return (
    <>
    <div className="box">
      <h1>Selecione sua preferência: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>

    {dados !== null ? (
      <div className="box">
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
    </div>
    ) : null}
    </>
  )
}

export default Exerc4;