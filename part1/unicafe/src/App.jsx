import { use } from "react";
import { useState } from "react"

const Statistics = ({ statisticsLines, total }) => {

  return (
    <div style={{ marginTop: "30px" }}>


      {(total > 0) ?
        (
          <table>
            
            <tbody>
              {statisticsLines.map((statisticsLine, key) => <StatisticsLine key={key} statisticsLine={statisticsLine} />)}
            </tbody>

          </table>
        )

        :
        <h1>
          No feedback given
        </h1>
      }

    </div>
  )

}

const StatisticsLine = (props) => {
  const { text, value } = props.statisticsLine

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  const { text, onClick } = { ...props }
  return (
    <button onClick={onClick} value={text}>
      {text}
    </button>
  )
}

const FeedbackMenu = ({ menuOptions }) => {

  return (
    <div>
      {
        menuOptions.map((option, key) => <Button key={key} text={option.text} onClick={option.onClick} />)
      }
    </div>
  )


}

const Header = ({ heading }) => {
  return (
    <h1>{heading}</h1>
  )
}

function App() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const heading = 'Give feedback';

  const total = (() => {
    return good + neutral + bad
  })();

  const average = (() => {
    return (good + (-1 * bad)) / total
  })();

  const positivePercentage = (() => {
    return good / total
  })();


  const handFeebackClick = (event) => {

    if (event.target.value === 'good') {
      setGood(good + 1)
    }
    else if (event.target.value === 'bad') {
      setBad(bad + 1)
    }
    else {
      setNeutral(neutral + 1)
    }

  }


  //declare and initialize feedback data
  const feedbackData =
    [

      { text: 'good', value: good },
      { text: 'neutral', value: neutral },
      { text: 'bad', value: bad },
      { text: 'all', value: total },
      { text: 'average', value: average },
      { text: 'positive', value: positivePercentage.toString().concat("%") }

    ]


  //declare menu options
  const menuOptions = [
    {
      text: 'good',
      onClick: handFeebackClick
    },
    {
      text: 'neutral',
      onClick: handFeebackClick
    },
    {
      text: 'bad',
      onClick: handFeebackClick
    }
  ]


  return (

    <div>

      <Header heading={heading} />

      <FeedbackMenu menuOptions={menuOptions} />

      <Statistics statisticsLines={feedbackData} total={total} />

    </div>
  )

}

export default App