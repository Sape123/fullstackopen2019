import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const setToValue = (positiivinen, negatiivinen, neutraali) => {
        return () => {
            setGood(positiivinen)
            setNeutral(neutraali)
            setBad(negatiivinen)

        }
    }




const Keskiarvo = (props) => {

let negatiivinen =  -1 * bad
let keskarv = ((good + negatiivinen) / (good + bad + neutral))
        return (
            keskarv


        )

    }











const Positiiviset = (props) => {

        let positiivisuusprosentti =  ( (good*100) / (good + bad + neutral))


        return(
            positiivisuusprosentti
        )

}

    const Onkopalaute = (props) =>{

        if(good===0 && bad === 0 && neutral === 0){

            return(<p>No feedback given</p>)

        }
        return (

            <div>


                <Statistics good={good} bad={bad} neutral={neutral} all={good + bad + neutral} average={<Keskiarvo good={good} bad={bad} neutral={neutral}/> }  positive= { <Positiiviset good={good} bad={bad} neutral={neutral}/>} />


            </div>


        )
    }













    return (
        <div>
            <h1> Give Feedback </h1>


            <Nappi Klikkaus={setToValue(good +1, bad, neutral)} teksti='Positiivinen' />
            <Nappi Klikkaus={setToValue(good,bad +1, neutral )} teksti='Negatiivinen' />
            <Nappi  Klikkaus={setToValue(good, bad , neutral +1 )} teksti='Neutraali' />




      <h1>Statistics</h1>
             <Onkopalaute good={good} bad={bad} neutral={neutral} />


        </div>
    )





}


const Statistics = (props) => {


    return(
        <div  >

















            <Statistic  text="good"  value ={props.good} />

            <Statistic text="neutral" value ={props.neutral} />

            <Statistic text="bad" value ={props.bad} />
            <Statistic text="all" value ={props.all} />
            <Statistic text="average" value ={props.average} />
                <Statistic text="positive" value ={props.positive} />


        </div>
    )
}


const Statistic  = (props) => {

    return(
                    <div >

                        <table>
                        <tbody>
                            <tr>
             <td  >




         {props.text}   {props.value}




             </td>


                                <td>
                </td>
                            </tr>
                        </tbody>
                        </table>












</div>

    )
}







const Nappi = ({Klikkaus, teksti}) => (

    <button onClick={Klikkaus}>
        {teksti}
    </button>
)























ReactDOM.render(<App />,
    document.getElementById('root')
)

