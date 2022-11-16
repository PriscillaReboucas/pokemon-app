import { useState, useContext, useEffect } from "react";
import { PokeContext } from "../PokeContext";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import * as pokeapi from '../repositories/pokeapi';
import './Home.css';

const Home = () => {
  const {pokemonList} = useContext(PokeContext);
  const [inputValue, setInputValue] = useState('');
  const [filterPokemon, setFilterPokemon] = useState('');
  const [hasFilter, setHasFilter] = useState(false);
  const [typesList, setTypesList] = useState();

  useEffect(()=> {
    if(filterPokemon && filterPokemon !== 'All') {
      pokeapi.pokemonType(filterPokemon).then(data => {
        setTypesList(data.pokemon);
        setHasFilter(true)
      })
    } else {setHasFilter(false)}
  }, [filterPokemon]);

  const matchSearchPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue?.toLowerCase()));
  return (
      <div>
        <Header/>
        <main>
        <div className="search--container">
          <input className="search" type='text' onChange={(e) => setInputValue(e.target.value)} placeholder='Pokemon name...  '/>
          <select className='filter' onChange={(e) => setFilterPokemon(e.target.value)} aria-label='Filter by type'>
            <option value="All">Filter by type</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychicter</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
          </select>
        </div>
          <CardList matchSearchPokemon={(hasFilter)? typesList : matchSearchPokemon} filterExist={hasFilter}/>
        </main>
      </div>
    )
  
};

export default Home;