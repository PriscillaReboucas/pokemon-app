import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../PokeContext';
import Abilities from '../components/Abilities/Abilities.js';
import Types from '../components/Types/Types';
import Stats from '../components/Stats/Stats';
import Header from "../components/Header/Header";
import * as pokeapi from '../repositories/pokeapi';
import './Profile.css';

const Profile = () => {
  const pokemonName = useParams().name;

  const { pokemonList } = useContext(PokeContext);
  const [pokemonColor, setPokemonColor] = useState('black');
  const [loading, setLoading] = useState(true);

  

  const pokemon = pokemonList? pokemonList.find(pokemon => pokemon.name === pokemonName): '';
  const pokemonID = pokemon?.url.match(/\/(\d{1,})\//)[1];

  useEffect(()=> {
    pokeapi.color(pokemonName).then(data => {
      setPokemonColor(data.color.name);
      setLoading(false);
    })
  }, [pokemonName])

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
    return (
      <div>
        <Header/>
        <main>
        <article className='card--container' style={{ border: `10px solid ${pokemonColor}` }}>
          <div className='card__profile' >
            <h2>{pokemonName.toUpperCase()}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`} alt={pokemonName}/>
          </div>
          <div className={`card__details ${ pokemonColor }`}>
            <Abilities />
            <Types />
            <Stats />
          </div>
          </article>
        </main>
      </div>
    )
  }

export default Profile;