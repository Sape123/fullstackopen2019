import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) =>{

const info = course.map(info => {


  const moreInfo = info.parts.map(moreinfo =>{

      return(
        <div>

          <Content name={moreinfo.name} exercises={moreinfo.exercises}/>

        </div>

      )


  })



    return(
    <div>
        <Header header={info.name}/>
        {moreInfo}
        <Total exercises={info.parts} />
    </div>

    )

})

    return(
<div> {info} </div>

    )






}

const Content = (props) => {


    return(
        <div>
        <Part name={props.name} exercises={props.exercises}  />
        </div>
    )
}

const Header = (props) => {

    return(
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}



const Total = ({exercises}) => {

let lista = exercises
    console.log(lista)
    let sum = exercises.map(osa => osa.exercises).reduce(function(a, e) {
            return a + e;
        }, 0);
        console.log(sum)






    return(

        <p>total of {sum} exercises </p>


    )
}


const Part = (props) =>{

    return(

        <p> {props.name} {props.exercises} </p>


    )
}











export default Course