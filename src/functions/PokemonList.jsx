import React from 'react';
import Pokemon from './Pokemon'

export default function PokemonList(props) {
  const { pokemons, action } = props;

  const instances = pokemons.map(item => {
    return <Pokemon key={item.id} name={item.name} weight={item.weight} src={item.sprites.front_default} action={()=>action(item)}/>
  });

  return (
  <>
    <ul className="PokemonList">
    { instances }
    </ul>
  </>
  )
}