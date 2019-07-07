import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(url)
  }
  
  const create = newObject => {
    return axios.post(url, newObject)
  }
  const deleteId = (idea) => {
    return axios.delete(`http://localhost:3001/persons/${idea}`)
  }

  
  export default { 
    getAll: getAll, 
    create: create, 
    deleteId: deleteId
  }