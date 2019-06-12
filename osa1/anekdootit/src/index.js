import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [allClicks, setAll] = useState([0,0,0,0,0,0])
    const [vaihe, setVaihe] = useState(0)



    const Satunnainen = () => setSelected(Math.floor(Math.random() * 6))
    const vaihe1 = () => setVaihe(Math.floor(Math.random() * 999999999999))


    const Anekdootti = () => <p> {anecdotes[selected]}</p>
    const Anekdootti1 = () => <p> has {allClicks[selected]} votes</p>


    function muutaMap(){
        return allClicks.map(value => value);
    }

    function suurinArvo(){
        return Math.max(...muutaMap());
    }

    function suurinAani(){

        return allClicks.indexOf(suurinArvo())

    }

    function suurinAnekdootti(){

        return anecdotes[suurinAani()]

    }




    const äänestys = () => {
        allClicks[selected] += 1
        vaihe1()
      const  kopio = {...allClicks}
        console.log(kopio)


    }








    return (
        <div>
            <h1> Anecdote of the day </h1>
            <Anekdootti/>
            <button onClick={Satunnainen}>next anecdote</button>
            <button onClick={äänestys}  >Give Vote</button>
                <Anekdootti1/>
            <h2>Anecdote with the most votes</h2>

                <p> {suurinAnekdootti()}   </p>


        </div>
    )
}




const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]






ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)