import React, { useState } from 'react';
import { FormsBox } from './styled';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
const inputs = [
  {
    id: 'nome',
    label: 'Nome:',
    type: 'text',
  },
  {
    id: 'email',
    label: 'E-mail:',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha:',
    type: 'password',
  },
];

function Exerc6() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [status, setStatus] = useState('');

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(response => response.status === 200 ? setStatus('Usuário registrado') : setStatus('Erro no login'))

  }

  return (
    <FormsBox onSubmit={handleSubmit}>
      {inputs.map((item) => (
        <>
          <label htmlFor={item.id}>{item.label}</label>
          <input type={item.type} name={item.id} id={item.id} onChange={handleChange} />
        </>
      ))}

      <button type="submit">Enviar</button>

      <p>{status}</p>
    </FormsBox>
  );
}

export default Exerc6;
