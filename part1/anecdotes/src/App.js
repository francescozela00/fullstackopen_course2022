import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [votes,setVotes] = useState(new Uint8Array(anecdotes.length))
   
  const [selected, setSelected] = useState(0)

  const anecdotesrandom = () => setSelected( Math.floor(Math.random() * anecdotes.length))


  const mostSelected  = votes.indexOf(Math.max(...votes))
  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }
  return (
    <div style={{textAlign: "center"}}>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <button style={{padding: "10px", width: "200px", margin: "5px"}} onClick={handleVote}>vote</button> 
      <button style={{padding: "10px", width: "200px", margin: "5px"}} onClick={anecdotesrandom}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostSelected]} 
      <br />
      <p>has {votes[mostSelected]} votes</p>
      <br />
    </div>
  )
}

export default App