import React, { useState, useEffect } from 'react'
import './index.css'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Konsta Heino', number: '040522211' }
  ]) 
  const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {

        personService
        .getAll()
        .then(response => {
                setPersons(response.data)
            })
    }, [])



  const handleErrorMessage= (uusiviesti) =>{
    setErrorMessage(uusiviesti)


  }






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




        

const jarppi = () =>{










    const phonebookObject = {
        name: newName,
        number: newNumber
    }



    personService .create(phonebookObject) .then(response =>
        {
            
            setPersons(persons.concat( response.data))
            setErrorMessage(`${newName}lisätty` )
            setNewName('')
            setNewNumber('')
           
       
       
       
       
       
        },)







        .catch(error => {
            console.log('fail')
        })

return(

    console.log('doned')

)





}


            if( typeof persons.find(person => person.name===newName)=== 'object' ){
                console.log('persons find', persons.find(person => person.name===newName))





                const viesti =() =>  {
                    return ( newName +' on jo'
                    )}


                window.alert(viesti());

                console.log(persons.map(name1 => name1.name))


            }

                else{

                    jarppi()
                    
            }









    }




    return (
    <div>
       
        <Ilmoitus message={errorMessage}/>
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


 <Persons persons = {persons} errviesti={handleErrorMessage} setPersons={setPersons} efekti={useEffect} />


    </div>
  )

}


const Persons = ({persons, errviesti, setPersons, }) =>{


    
    const map =  persons.map(person =>{
        const poistetaanks = () => {
        
          let varmistus =  window.confirm('poistetaanko nimi?')
        
        
         
        
          
        
        
        if (varmistus === true){
           
          
                  
        
            return(
        
        
               personService
               .deleteId(person.id)
                .then(res => {
                
                  console.log(res.data);
                  errviesti(` ${person.name} poistettu`)
                  
                  personService.getAll().then(response => {
                    setPersons(response.data)
                })
                    
                })
               
             
        
        
        
               
            
            
            )
        }
        else{
        
        
            return(
        
                window.postMessage('painoit ei')
        
            )
        
        }
        
        
        }
        
        
        
      















   
   
console.log(person.id)
        return(
            <div>   {person.name} {person.number}  <button  onClick={poistetaanks} >Delete</button> <br/>   </div>

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






            const Ilmoitus = ({ message }) => {

                const staili= {
color: 'green',
fontStyle: 'italic',
fontSize: 40



                }

                


                if (message === null) {
                  return null
                }
              
                return (
                  <div className="virheilmoitus" >
                    {message}
                  </div>
                )
              }










export default App