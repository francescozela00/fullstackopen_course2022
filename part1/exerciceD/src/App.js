import { useState } from "react";
import "./index.css"


const History =  (props) => {
  if (props.allClicks.length == 0 ) 
  {
    return (
      <div>
        the app is used by pressing the button
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')} 
    </div>
  )
} 


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {    
    setAll(allClicks.concat('L')) 
    setLeft(left + 1)  }
  const handleRightClick = () => {    
    setAll(allClicks.concat('R'))    
    setRight(right + 1)  }
  

  return (
    <div className="hover">
      {left}
      <button  style={{padding:"5px", width: "50px", border:"none", borderRadius: "2px", margin: "2px", background:"black", color:"#fff"}} onClick={handleLeftClick}>left</button>
      <button  style={{padding:"5px", width: "50px", border:"none", borderRadius: "2px", margin: "2px", background:"black", color:"#fff"}} onClick={handleRightClick}>right</button>
      {right}
      <History id="test" allClicks={allClicks}   />
    </div>
  )
}
export default App;
