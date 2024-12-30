function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10
      },
      {
        name: "Using props to pass data",
        exercise: 7
      },
      {
        name: "State of a component",
        exercise: 14
      }
    ]
  };
  return (
    <div>
      <h1>Welcome to courseinfo application</h1>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

function Header({course}){

  return(
    <div>
      <h2>{course.name}</h2>
    </div>
  )
}

function Content({parts}){
  return(
    <div>
      <Part {...parts[0]} />
      <Part {...parts[1]} />
      <Part {...parts[2]} />
    </div>
  )
}

function Total({parts}){
  return(
    <div>
      <p>Number of exercises {parts[0].exercise + parts[1].exercise + parts[2].exercise }</p>
    </div>
  )
}

function Part({name, exercise}){
  return(
    <div>
       <p>{name} {exercise}</p>
    </div>
  )
}

export default App;
