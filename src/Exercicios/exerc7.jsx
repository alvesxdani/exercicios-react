import React, { useState } from 'react';

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if(active === false) return null
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((item) => (
        <label htmlFor={id} key={item}>
          <input type='radio' checked={value === item} value={item} onChange={onChange} id={id}/> {item} <br />
        </label>
      ))}
    </fieldset>
  );
};

const Exerc7 = () => {
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  const [slide, setSlide] = useState(0)

  const [resultado, setResultado] = useState(null)

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  function handleChange({ target }) {
    setRespostas({...respostas, [target.id]: target.value})
  }

  function result() {
    const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta)
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`)
  }

  function handleClick() {
    if(slide < perguntas.length - 1) setSlide(slide + 1)
    else {
      result()
      setSlide(slide + 1)
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((item, index) => (
          <Radio {...item} id={item.id} active={slide === index} value={respostas[item.id]} onChange={handleChange} key={item.id} />
        ))}
      </form>

      {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Próxima</button>}
    </>
  );
};

export default Exerc7;
