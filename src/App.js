import React from "react"
import './App.css'
import ImgSrc from './snap.jpg'


class App extends React.Component  {
 
  state = {
    person :{ 
    name : "youcef merzougui",
    bio: `Hi, my name is youcef MERZOUGUI ,iam 22 years old , i live in algeria,
    i am a camputer sciences student,I am passionate about web development
    and all kinds of programming (i still noob!), i speake three languages "arabic","french"
    and english, now am learning german too.`,
    img:ImgSrc,
    profession:"Developper"
    },
    show : false,
    counter : 0
  }
  
  handleClick = () => this.setState({show : !this.state.show})
  incrementCounter = () =>{
    const {counter} = this.state
    this.setState({counter: counter + 1})
  }
  componentDidMount = () => {
    setInterval(this.incrementCounter, 1000)
  }
render(){
  const styleDiv0={position:"relative",left:"520px"}
  const styleDiv1={display:"flex",position:"relative",left:"10px", padding:"30px"}
  const styleDiv2={padding:"10px"}
  const stylebut = {position:"relative",left:"632px", padding:"10px",margin:"15px"}
 
  return (
    <>
    <div>
<h1 style={styleDiv0}>the component has mounted</h1>
<h2 style={{position:"relative",left:"690px"}}>{this.state.counter}</h2>
</div>
    <button style={stylebut} onClick = {this.handleClick}>{this.state.show ? 'hide profile' : 'show profil'}</button>
    {this.state.show ? 
    <div style={styleDiv1}>
    <div style={styleDiv2}>
   <img src={this.state.person.img} alt="" width="140" height="180"/>
   
    </div>
   <div style={styleDiv2}>
   <h3>{this.state.person.name}</h3>
   <p>{this.state.person.bio}</p>
   <p>{this.state.person.profession}</p>
   </div>
     </div> :
     <div></div> }
    </>
  )
}
}


export default App;
