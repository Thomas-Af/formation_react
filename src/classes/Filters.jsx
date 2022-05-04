import React, { Component } from 'react';

class Filters extends Component {

    render() {
      const { pokemons } = this.props;
      
      const types = pokemons.map(item => item.types.map(element => element.type.name)).flat();
      const uniqueTypes = [...new Set(types)];
      uniqueTypes.push('all')

      const oneType = uniqueTypes.map(item => {
         return <button className='typeButton' key={item} onClick={() => this.props.filter(item)}>{item}</button>
       });

    return (
      <>
      <div>{oneType}</div>
      </>
    );
  }
}

export default Filters;
