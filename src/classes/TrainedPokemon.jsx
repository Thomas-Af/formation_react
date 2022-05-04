import Pokemon from './Pokemon';

class TrainedPokemon extends Pokemon {
 constructor() {
  super()
  
  this.state = {
   exp: 0,
   lvl: 0,
   levelLimit: 1000
  };

  this.incrementExp = this.incrementExp.bind(this);
 }

 incrementExp() {
  this.setState({
   exp: this.state.exp + 10
  })
  if (this.state.exp > this.state.levelLimit) {
   this.setState({
    exp: 0,
    lvl: this.state.lvl + 1,
    levelLimit: this.state.levelLimit + 500
   })
  }
 }

 render() {
  const { name, weight, src, action } = this.props;
  const { exp, lvl } = this.state;

  return (
   <div className='OwnTrainedPokemon' onMouseMove={this.incrementExp} onClick={action}>
    <div className='Lvl'>Level : {lvl}</div>
    <Pokemon name={name} weight={weight} src={src} />
    <div className='Exp'>{exp} XP</div>
   </div>
  )
 }
}

export default TrainedPokemon;