import { useState } from 'react'

const Header = (props) => {
  return (
  <h1>{props.title}</h1>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick = {props.handleClick} >{props.text}</button>
    </div>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text = 'good' value = {props.good} />
        <StatisticLine text = 'neutral' value = {props.neutral} />
        <StatisticLine text = 'bad' value = {props.bad} />
        <StatisticLine text = 'all' value = {total} />
        <StatisticLine text = 'average' value = {(props.good * 1 + props.neutral * 0 + props.bad * (-1))/total} />
        <StatisticLine text = 'positive' value = {`${(props.good / total) * 100 } %`} />
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log(good)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    console.log(bad)
  }

  return (
    <div>
      <Header title = "Give feedback" />
      <Button handleClick = {handleGoodClick} text = 'good' />
      <Button handleClick = {handleNeutralClick} text = 'neutral' />
      <Button handleClick = {handleBadClick} text = 'bad' />
      <Header title = "Statistics" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />

    </div>
  )
}

export default App
