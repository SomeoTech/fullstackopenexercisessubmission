import { useState } from "react"

const Header = (props) => {
  return (

    <h1>{props.course.name}</h1>

  )
}

const Content = (props) => {
  return (
    <div>

      {
        props.parts.map((part, key) => <Part key={key} part={part} />)
      }


    </div>

  )
}

const Part = (props) => {

  const { name, exercises } = props.part

  return (
    <p>{name} {exercises}</p>
  )

}

const Total = (props) => {

  let total = 0

  total = props.parts.map(part => part.exercises).reduce((total, value) => total + value);

  return (

    <p>Number of exercises {total}</p>

  )
}




function App() {


  const course = {

    name: 'Half Stack application development',

    parts: [

      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }

    ]



  }


  return (
    <div>

      <Header course={course} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />


    </div>
  )
}

export default App;