import React from 'react';
import TrainedPokemon from './TrainedPokemon'

export default function Trainer(props) {
  const { name, adress, bag, action } = props;
  const ownedPokemon = bag.map(item => {
    return <TrainedPokemon key={item.trainedId} name={item.name} weight={item.weight} src={item.sprites.front_default} action={()=>action(item.trainedId)}/>
  });

  return (
  <div className='Trainer'>
    <div className='info'>
    <div className='name'>{name}</div>
    <div>{adress}</div>
    </div>
    <div className="ownedPokemon">{ownedPokemon}</div>
  </div>
  )
}