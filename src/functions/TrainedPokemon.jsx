import react from 'react';
// import Pokemon from './Pokemon';

class TrainedPokemon extends react.Component {
 constructor() {
  super()
  
  this.state = {
   exp: 0,
   lvl: 0,
   levelLimit: 300,
   idInterval: null,
   surname: ''
  };

  this.incrementExp = this.incrementExp.bind(this);
  this.addSurname = this.addSurname.bind(this);
 }

 addSurname(e) {
  this.setState({
   surname: e.target.value,
  });
}

 incrementExp() {
  this.setState(state => ({ exp: state.exp + 10 }));
  if (this.state.exp > this.state.levelLimit) {
   this.setState(state => ({ 
    exp: 0,
    lvl: state.lvl + 1,
    levelLimit: state.levelLimit + 500
   }));
  }
 }

 componentDidMount() {
  const idInterval = setInterval(this.incrementExp, 1000);

  this.setState({ idInterval })
 }

 componentWillUnmount() {
  clearInterval(this.state.idInterval);
 }

 render() {
  const { name, weight, src, action } = this.props;
  const { exp, lvl, surname } = this.state;
  let Name = { name }

  if (surname === '') {
   Name = <div className='name'>{name}</div>
  } else {
   Name = <div className='name'>{surname}</div>
  }

  return (
   <div className='OwnTrainedPokemon' onMouseMove={this.incrementExp} >
    <input value={surname} onChange={this.addSurname} />
    <li className='Pokemon'  onClick={action}>
      <div className='Lvl'>Level : {lvl}</div> 
      {Name}
      <div className='weight'>{Math.round(weight * 0.453592)} kg</div>
      {src && <img src={src} alt={name} />}
      <div className='Exp'>{exp} XP</div>
    </li>
   </div>
  )
 }
}

export default TrainedPokemon;