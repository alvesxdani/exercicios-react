import React from 'react'

const Exerc1 = () => {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const Pessoas = [
    {
      cliente: 'Mario',
      idade: '31',
      compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
      ],
      ativa: false,
    },
    {
      cliente: 'Luana',
      idade: 27,
      compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3500' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
      ],
      ativa: true,
    },
  ];

  let numTotal = 0;

  const PessoasBox = {
    font: '14px Calibri',
    border: '1px solid #eee',
    padding: '0.5rem',
    marginBottom: '0.4rem'
  }


  return (
    <div>
      {Pessoas.map((item) => {
        return(
          <div style={PessoasBox} key={item.cliente}>
            <p> <b>Cliente</b>: {item.cliente} </p>

            <p> <b>Idade:</b> {item.idade} </p>

            <p> <b>Situação: </b>
              <span style={item.ativa ? {color: 'green'} : {color: 'red'}}>
               {item.ativa ? 'Ativa' : 'Inativa'}
              </span>
            </p>

            <p>
              <b>Total: </b>
              {numTotal = item.compras.map(itemCompras => Number(itemCompras.preco.replace("R$",""))).reduce((a,b) => a + b)}
            </p>

            <p style={{color: numTotal > 10000 ? 'red' : 'green'}}>
             {numTotal > 10000 ? 'Você está gastando muito!' : 'Você está dentro do limite'}
            </p>
          </div>
        )
      })}
    </div>
  );
};

export default Exerc1;
