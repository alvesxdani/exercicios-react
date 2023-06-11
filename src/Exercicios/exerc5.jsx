import React, { useContext } from 'react';
import { GlobalContext } from '../Context/context';
import styled from 'styled-components';

function Exerc5() {
  const BoxCard = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

    .card {
      padding: 1rem;
      text-align: center;
      border: 1px solid #eee;

      li {
        text-align: left;
      }

      img {
        width: 30%;
        max-width: 100%;
      }
    }
  `;

  const global = useContext(GlobalContext);

  if (global.dados === 0) return null;

  console.log(global)

  return (
    <BoxCard>
      {global.dados.map((item) => {
        return(
          <div className="card" key={item.id}>
            <img src={item.fotos[0].src} alt=""/>
            <h2>{item.nome}</h2>
            <ul>
              <li>R$ {item.preco}</li>
              <li>Vendido por: {item.usuario_id}</li>
              <li>{item.vendido === 'false' ? `Não vendido` : `Vendido`}</li>
            </ul>
          </div>
        )
      })}
    </BoxCard>
  );
}

export default Exerc5;
