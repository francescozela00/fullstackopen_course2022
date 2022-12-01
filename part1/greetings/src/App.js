const Hello = (props) => {
  const bornYear = () => new Date().getFullYear() - props.age
  return (
    <div>
      <p>Hello <code style={{fontWeight:"bolder"}}>{props.name}</code>, you are <code style={{fontWeight:"bolder"}}>{props.age}</code> years old</p>
      <p>So you were probably born in <code style={{fontWeight:"bolder"}}>{bornYear()}</code></p>
    </div>
  )
}
const Footer = (props) => {
  return (
    <div style={{background:"#333", color:"#fff", padding:"15px", borderRadius: "5px", opacity: "0.9"}}>
      greeting app created by <a style={{color:props.color,   textDecoration:"none"}} href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

function App(props) {
  props = {
    name: 'Arto Hellas',
    age: 35,
  }
  const name = props.name
  const age  = props.age

  return (
    <div style={{textAlign:"center"}}>
      <h1>Greetings</h1>
      <hr style={{border: "2px solid black"}}/>
      <Hello name='Maya' age={26 + 10} />
      <hr style={{border: "2px solid black"}}/>
      <Hello name={name} age={age} />
      <br />
      <Footer color="#fff" />
      
    </div>
  );
}

export default App;
