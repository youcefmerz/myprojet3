import React from 'react';

class Profil extends React.Component  {
  state = {
    name : "sara"
  }
  handleClick = () => this.setState({name : "Ali"})
render(){
  return (
    <>
    <h1> welclome {this.state.name}</h1>
    <button onClick = {this.handleClick}>click me</button>
    </>
  )
}
}


export default Profil;
