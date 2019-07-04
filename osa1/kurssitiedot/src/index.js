import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components.course'


const App = () => {
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
  <Course course={course} />
    </div>
  )
}


const Content = (props) => {


  return(
  <div>


   
    <Part nimi1={props.parts[0].name} tehtävät1={props.parts[0].exercises}/>
    <Part nimi2={props.parts[1].name} tehtävät2={props.parts[1].exercises}/>
     <Part nimi3={props.parts[2].name} tehtävät3={props.parts[2].exercises}/>

  </div>
      )
  }


const Header = (props) => {

return(
<div>
<h1>{props.otsikko}</h1>
</div>
    )
}


    const Total = (props) => {

    return(
        <div>
<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises +props.parts[2].exercises}</p>

          </div>
    )
    }





    const Part = (props) =>{
     
return(

<p> {props.nimi1} {props.tehtävät1}
{props.tehtävät2}
{props.nimi3} {props.tehtävät3}

</p>

)
    }







ReactDOM.render(<App />, document.getElementById('root'))