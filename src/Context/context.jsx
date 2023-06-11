// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global 

import { createContext } from "react";
import { useEffect, useState } from "react"

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => { 

  const [dados, setDados] = useState(0);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then((response) => response.json())
    .then((json) => setDados(json))
  }, [])

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  )
}