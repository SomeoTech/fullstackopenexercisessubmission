import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well."
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    ...new Array(anecdotes.length).fill(0)
  });

  console.log("vote", votes);

  const randomNumberGenerator = () =>
    Math.floor(Math.random() * (anecdotes.length - 1));

  const onNextAnecdoteHandler = () => {
    setSelected(randomNumberGenerator());
  };

  const onVoteHandler = () => {
    const newVotes = { ...votes };
    ++newVotes[selected];
    setVotes(newVotes);
  };

  const findMaxAnecdoteVote = (length) => {
    let indexOfMaxAnecdoteVote = 0;
    for (let index = 1; index < length; index++) {
      if (votes[indexOfMaxAnecdoteVote] < votes[index])
        indexOfMaxAnecdoteVote = index;
    }

    return {
      anecdoteWithMaximumVotes: anecdotes[indexOfMaxAnecdoteVote],
      voteCount: votes[indexOfMaxAnecdoteVote]
    };
  };

  console.log("s", selected);

  const buttonDetails = [
    { onClick: onVoteHandler, text: "vote" },
    { onClick: onNextAnecdoteHandler, text: "next anecdote" }
  ];

  return (
    <div>
      <h1>Welcome to anecdotes application</h1>
      <Display
        anecdotes={anecdotes}
        selected={selected}
        buttonDetails={buttonDetails}
        votes={votes}
        maxAnecdoteObj={findMaxAnecdoteVote(anecdotes.length)}
      />
    </div>
  );
}

const Display = ({
  anecdotes,
  selected,
  buttonDetails,
  votes,
  maxAnecdoteObj
}) => {
  const selectedVote = votes[selected];
  const { anecdoteWithMaximumVotes, voteCount } = { ...maxAnecdoteObj };
  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <div>
          <p>{anecdotes[selected]}</p>
          <span>
            has{" "}
            {selectedVote > 0
              ? selectedVote > 1
                ? String(selectedVote).concat(" votes")
                : String(selectedVote).concat(" vote")
              : String(selectedVote).concat(" vote")}
          </span>
        </div>

        {buttonDetails.map((buttonDetail, key) => (
          <Button key={key} {...buttonDetail} />
        ))}
      </div>

      <div>
        <h2>Anecdote with most votes</h2>
        <div>
          {voteCount > 0 ? <p>{anecdoteWithMaximumVotes}</p> : ""}

          <span>
            {voteCount > 0
              ? voteCount > 1
                ? String("has " + voteCount).concat(" votes")
                : String("has " + voteCount).concat(" vote")
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

//define Button component
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
export default App;
