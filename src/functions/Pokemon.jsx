import React from 'react';

export default function Pokemon(props) {
  const { name, weight, src, action } = props;

  return (
    <li className='Pokemon'  onClick={action}>
      <div className='name'>{name}</div>
      <div className='weight'>{Math.round(weight * 0.453592)} kg</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}
