import { Link } from "react-router-dom";
import './CardList.css';

const CardList = ({matchSearchPokemon, filterExist}) => {
  return (
    <section className="pokemonList--container">
      <div className="pokemonList--flex">
        {!filterExist? matchSearchPokemon.map((pokemon) => {
          const pokemonID = pokemon.url.match(/\/(\d{1,})\//)[1];
          return (
            <Link to={`/pokemon/profile/${pokemon.name}`} key={pokemonID} className='pokemonLink'>
                <article className="pokemon__card--container">
                  <h2 className="pokemon__title">{pokemon.name}</h2>
                  <img className="pokemon__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`} alt={pokemon.name}/>
                </article>
            </Link>
          ) 
        }): matchSearchPokemon?.map(pokemon => {
          const pokemonID = pokemon.pokemon.url.match(/\/(\d{1,})\//)[1];
          if(pokemonID < 152) {
          return (
            <Link to={`/pokemon/profile/${pokemon.pokemon.name}`} key={pokemonID} className='pokemonLink'>
                <article className="pokemon__card--container">
                  <h2 className="pokemon__title">{pokemon.pokemon.name}</h2>
                  <img className="pokemon__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`} alt={pokemon.pokemon.name}/>
                </article>
            </Link>)
          }
        })}
      </div>
    </section>
  )
};

export default CardList;