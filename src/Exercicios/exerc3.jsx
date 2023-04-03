import React, { useState } from 'react';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Exerc3 = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const data = await response.json();
    setDados(data);
    setLoading(false);
    }

  return (
    <>
    <div className="box">
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
      </div>

      {dados && <div className="box">
        <h1>{dados.nome}</h1>
        <img src={dados.fotos[0].src} alt="" width={50} />
        <ul>
          <li>{dados.preco}</li>
          <li>{dados.descricao}</li>
          <li>{dados.vendido}</li>
        </ul>
      </div>}

        {loading ? "Carregando" : null}
        
    </>
  );
};

export default Exerc3;
