import React, { Component } from 'react';

import Trainer from './Trainer'
import PokemonList from './PokemonList'
import Filters from './Filters'

import fetchPokemon from '../utils/fetchPokemon'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
     type: 'all',
     data: [],
     bag: [], 
    };

    this.filterPokemon = this.filterPokemon.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.goToMyPocket = this.goToMyPocket.bind(this);
    this.outOfMyPocket = this.outOfMyPocket.bind(this);
  }

  componentDidMount() {
   fetchPokemon().then(response => {
      this.setState({
        data: response,
        bag: [response[3]]
      })
    })
  }

  filterPokemon() {
    const pokemons = this.state.data;
    if (this.state.type === 'all') {
      return pokemons
    } else {
      return pokemons.filter(pokemon => pokemon.types.map(item => item.type.name).flat().includes(this.state.type))
    }
  }

  setFilter(name) {
    this.setState({
      type: name
    })
  }

  goToMyPocket(item) {
    const pokemonCatched = {...item};
    pokemonCatched.trainedId = Date.now();

    if (this.state.bag){
      this.setState({
          bag : [...this.state.bag, pokemonCatched]
      })
    } else {
        this.setState({
            bag : [pokemonCatched]
        })
    }
  }

  outOfMyPocket(id) {
    this.setState({
      bag : this.state.bag.filter(item=>item.trainedId !== id )
  })
  }

  
  render() {
    const PokemonFiltered = this.filterPokemon();
    const { data, bag } = this.state;
    return (
    <>
      <Trainer name="Sacha Ketchum" adress="Du Bourg Palette (Kanto)" bag={bag} action={this.outOfMyPocket}/>
      <Filters pokemons={data} filter={this.setFilter} selected={this.setFilter   } />
      <PokemonList pokemons={PokemonFiltered} action={this.goToMyPocket}/>
    </>
    )
  }
}

export default App;