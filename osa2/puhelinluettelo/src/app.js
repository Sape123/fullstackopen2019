import React, { useState } from 'react'
import ReactDOM from 'react-dom';
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040522211' }
  ]) 
  const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')







    const handleNameChange = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)

  }

    const handleNumberChange = (event) =>{
        console.log(event.target.value)
        setNewNumber(event.target.value)

    }


    const addName = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)



        const temparray = persons.map(name1 => name1.name)

        temparray.find(function(element) {

            if(element===newName){
            let nimi = newName +' on jo luettelossa'
                window.alert( nimi);

            }
            else  {

                const phonebookObject = {
                    name: newName,
                    number: newNumber
                }
                setPersons(persons.concat( phonebookObject))
                setNewName('')

                setNewNumber('')



            }


        });










    }




    return (
    <div>
      <Otsikko1/>
        <form onSubmit={addName}  >
            <div>
                Name:
                <input value={newName} onChange={handleNameChange}  />

            </div>
            <div>
                Phone:
                <input value={newNumber} onChange={handleNumberChange}  />

            </div>

            <div>

                <button type="submit">add</button>
            </div>
        </form>
     <Otsikko2/>


 <Persons persons = {persons}/>


    </div>
  )

}


const Persons = ({persons}) =>{
    console.log(persons.name)
    const map =  persons.map(person =>{

        return(
            <div>   {person.name} {person.number} <br/>   </div>

        )
    })


return(

   <div> <ul>    {map}   </ul></div>


        )

}


const Otsikko1 = () =>{


    return(

        <h2>Phonebook</h2>


    )



}

const Otsikko2 = () =>{


    return(

        <h2>Numbers</h2>

    )



}









export default App