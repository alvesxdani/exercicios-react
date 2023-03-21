import React from 'react'

const Exerc2 = () => {
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const productsStyle = {
  border: '1px solid #eee',
  padding: '0.4rem',
  marginBottom: '0.3rem',
  font: '12px Calibri'
}

  return(
    <div style={{color: '#000'}}>
      {produtos.map((item) => {
        let result = Number(item.preco.replace("R$ ", "")) > 1500 ? 
        (
          <div key={item.id} style={productsStyle}>
            <h1>{item.nome}</h1>
            <p> <b>Preço: </b>{item.preco}</p>
            <ul>
              {item.cores.map((itemColor) => <li style={{background: `${itemColor}`, marginBottom: '5px'}} key={itemColor}>{itemColor}</li>)}
            </ul>
          </div>
        ) : 
        null
        return result
      })}
    </div>
  )
}

export default Exerc2;