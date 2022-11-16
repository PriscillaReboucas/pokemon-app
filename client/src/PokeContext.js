import { createContext, useState, useEffect } from "react";
import * as pokeapi from './repositories/pokeapi';

export const PokeContext = createContext();

const PokeProvider = ({children}) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=> {
    pokeapi.retrieve().then(response => {
      setPokemonList(response.results)
    })  
  }, []);

  return (
    <PokeContext.Provider value={{pokemonList: pokemonList}}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider;