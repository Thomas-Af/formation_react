import React from 'react';

export default function Filters(props) {
  const { pokemons } = props;
  
  const types = pokemons.map(item => item.types.map(element => element.type.name)).flat();
  const uniqueTypes = [...new Set(types)];
  uniqueTypes.push('all')

  const oneType = uniqueTypes.map(item => {
      return <button className='typeButton' key={item} onClick={() => props.filter(item)}>{item}</button>
    });

  return (
    <div className='Filters'>
      <div>{oneType}</div>
    </div>
  );
}