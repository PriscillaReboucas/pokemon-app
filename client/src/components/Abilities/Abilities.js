import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as pokeapi from '../../repositories/pokeapi';
import './Abilities.css';

const Abilities = () => {
  const pokemonName = useParams().name;
  const [abilityList, setAbilityList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokeapi.profile(pokemonName).then(data => {
      setAbilityList(data.abilities);
      setLoading(false);
    })
  }, [pokemonName]);

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className='abilities--container'>
      <h3>ABILITIES</h3>
      <div className='abilities__names--container'>
        {abilityList?.map((ability)=> {
          return <p key={ability.ability.name} className='abilities__names'>{ability.ability.name}</p>
        })}
      </div>
    </div>
  )
}

export default Abilities;