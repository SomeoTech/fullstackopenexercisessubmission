import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  //define an array of objects that hold button details
  const buttonDetails = [
    {
      onClick: () => {
        setGood(good + 1);
      },
      text: "good"
    },

    {
      onClick: () => {
        setNeutral(neutral + 1);
      },
      text: "neutral"
    },
    {
      onClick: () => {
        setBad(bad + 1);
      },
      text: "bad"
    }
  ];

  //define functions that compute total feedback, average feedback and percentage of positive feedback
  const total = (() => {
    return good + bad + neutral;
  })();

  const average = (() => {
    return total / 3;
  })();

  const positive = (() => {
    return (good / total) * 100;
  })();

  //define an array of object of various statistics
  const statistics = [
    {
      title: "good",
      value: good
    },

    {
      title: "neutral",
      value: neutral
    },
    {
      title: "bad",
      value: bad
    },
    {
      title: "all",
      value: total
    },
    {
      title: "average",
      value: average
    },
    {
      title: "positive",
      value: positive > 0 ? String(positive).concat(" ", "%") : 0
    }
  ];

  return (
    <div>
      <h1>Welcome to unicafe application</h1>
      <Display
        buttonDetails={buttonDetails}
        statistics={statistics}
        total={total}
      />
    </div>
  );
}

//define Display component
const Display = ({ buttonDetails, statistics, total }) => {
  return (
    <div>
      <h2>give feedback</h2>
      {buttonDetails.map((buttonDetail, key) => (
        <Button key={key} {...buttonDetail} />
      ))}

      <Statistic statistics={statistics} total={total} />
    </div>
  );
};

//define Button component
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

//define Statistic component
const Statistic = ({ statistics, total }) => {
  return (
    <div>
      <h2>statistic</h2>
      {total > 0 ? (
        statistics.map((statisticLine, key) => (
          <StatisticLine key={key} {...statisticLine} />
        ))
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

//define StatisticLine component
const StatisticLine = ({ title, value }) => {
  return (
    <div>
      <span>{title}</span> <span>{value}</span>
    </div>
  );
};

export default App;
