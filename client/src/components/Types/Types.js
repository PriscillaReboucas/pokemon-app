import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as pokeapi from '../../repositories/pokeapi';
import './Types.css';

const Types = () => {
  const pokemonName = useParams().name;
  const [typesList, setTypeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokeapi.profile(pokemonName).then(data => {
      setTypeList(data.types);
      setLoading(false);
    })
  }, [pokemonName]);

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className='types--container'>
      <h3>TYPES</h3>
      <div className='types__names--container'>
      {typesList?.map((type)=> {
        return <p key={type.type.name} className='types__names'>{type.type.name}</p>
      })}
      </div>
    </div>
  )
}

export default Types;