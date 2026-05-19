import { version } from "react"
import { useState } from "react"

const Button = (props) => {
  const { text, onClick } = { ...props }
  return (
    <button onClick={onClick} value={text}>
      {text}
    </button>
  )
}

const Summary = ({ modalIndex, votes, anecdotes}) => {

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {votes[modalIndex] > 0 &&

        <div style={{ marginBottom: "10px" }}>
          <p>{anecdotes[modalIndex]} </p>
          <span>{votes[modalIndex] > 1 ? "has ".concat(votes[modalIndex]).concat(" votes") : "has ".concat(votes[modalIndex]).concat(" vote")}</span>
        </div>


      }
    </div>
  )
}

function App() {

  const anecdotes = [

    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ ...new Uint8Array(anecdotes.length - 1) })


  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * (anecdotes.length - 1))
  }


  const handleNextAnecdote = () => {
    setSelected(randomNumberGenerator())
  }

  const handleVoteAnecdote = () => {

    const mVotes = { ...votes }
    mVotes[selected] += 1
    setVotes(mVotes)
  }

  const indexOfModalAnecdote = (() => {
    let modalIndex = 0;

    for (let index = 1; index < anecdotes.length; index++) {
      if (votes[index] > votes[modalIndex]) modalIndex = index;
    }

    return modalIndex

  })()


  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div style={{ marginBottom: "10px" }}>
        <p>{anecdotes[selected]} </p>
        <span>{votes[selected] > 1 ? "has ".concat(votes[selected]).concat(" votes") : "has ".concat(votes[selected]).concat(" vote")}</span>
      </div>
      <Button text='vote' onClick={handleVoteAnecdote} />
      <Button text='next anecdote' onClick={handleNextAnecdote} />

      <Summary modalIndex={indexOfModalAnecdote} votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App