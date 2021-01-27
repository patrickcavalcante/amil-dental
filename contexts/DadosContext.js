import React, {useState, createContext} from 'react';

export const DadosContext = createContext();

const DadosContextProvider = (props) =>{

    const [dados, setDados] = useState([])
    const storeDados = dados => {
        setDados(dados)
    }
    return(
        <DadosContext.Provider value={{dados, storeDados}}>
            {props.children}
        </DadosContext.Provider>
    )

}

export default DadosContextProvider;