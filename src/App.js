import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

// Axios is a promise-based HTTP Client that uses XMLHttpRequests and automatically handles JSON
const client = axios.create({
  baseURL: "https://gdev.vigil.com/vigil_test",
  headers: {'Access-Control-Allow-Origin': null}
});


const App = () => {

  const [data, setData] = useState([]);
  
  const [token, setToken] = useState('')

  useEffect(() => {
    client.get(`?username=les&token=vigiltoken`).then((response) => {
      
      setToken(response.data.token.toUpperCase());
    });
  }, []);

  

  return (
    <div className="App-header">
      <h1> Vigil Code Test</h1>
     
          <div>

            <p >{token}</p>
 
          </div>
       
    
      
    </div>
  )
}

export default App;
