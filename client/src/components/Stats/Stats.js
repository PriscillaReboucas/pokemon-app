import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as pokeapi from '../../repositories/pokeapi';
import './Stats.css'

const Stats = () => {
  const pokemonName = useParams().name;
  const [statsList, setStatsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokeapi.profile(pokemonName).then(data => {
      setStatsList(data.stats);
      setLoading(false);
    })
  }, [pokemonName]);

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className='stats--container'>
      {statsList?.map((stat, index)=> {
        return (
        <div key={index} className='stats__individual'>
          <h3>{stat.stat.name}</h3>
          <p className='stats__results'>{stat.base_stat}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Stats;