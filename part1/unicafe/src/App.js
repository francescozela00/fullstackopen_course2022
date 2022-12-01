import { useState } from 'react'

const Button = ({onClick, text, styles}) => {
  return <button onClick={onClick} style={{padding: "10px", margin: "5px",  cursor:"pointer", background: "black",color:"#fff", border: "none"}}>{text}</button>
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state, setState) => () =>  setState(state + 1)

  const all = good + neutral + bad
  const average = (good - bad) / (good + neutral + bad) 

  const positive = (good / all) * 100

  return (
    <div style={{textAlign:"center"}}>
      <h1>give feedback</h1>
      <Button  onClick={increment(good, setGood)} text="good"/>
      <Button  onClick={increment(neutral, setNeutral)} text="neutral"/>
      <Button  onClick={increment(bad, setBad)} text="bad"/>
      <h1>statistics</h1>
      <div style={{ display:"flex", justifyContent: "center", padding: "15px"}}>
      <table >
        <tr >
          <th style={{border:"1px solid ", background: "black", color: "#fff", padding :"5px", borderRadius: "5px"}}>good</th>
          <td style={{border:"1px solid "}}>{good}</td>
        </tr>
        <tr>
          <th style={{border:"1px solid ", background: "black", color: "#fff", padding :"5px", borderRadius: "5px"}}>neutral</th>
          <td style={{border:"1px solid "}}> {neutral}</td>
        </tr>   
        <tr>
          <th style={{border:"1px solid ", background: "black", color: "#fff", padding :"5px", borderRadius: "5px"}}>bad</th>
          <td style={{border:"1px solid "}}>{bad}</td>
        </tr>
        <tr>
          <th style={{border:"1px solid ", background: "black", color: "#fff", padding :"5px", borderRadius: "5px"}}>all</th>
          <td style={{border:"1px solid "}}>{all}</td>
        </tr>
        <tr>
          <th>average</th>
          <td>{average}</td>
        </tr>
        <tr>
          <th>positive</th>
          <th>{positive}</th>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default App