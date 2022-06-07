import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

// Axios is a promise-based HTTP Client that uses XMLHttpRequests and automatically handles JSON
const client = axios.create({
  baseURL: "https://gdev.vigil.com/vigil_test?username=les&token=vigiltoken",
  withCredentials: false
  
  

});


// const Http = new XMLHttpRequest();
// const url='https://gdev.vigil.com/vigil_test?username=les&token=vigiltoken';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }


const App = () => {

  const [data, setData] = useState([]);

  const [token, setToken] = useState('')
  const [magicToken, setMagicToken] = useState('')

  useEffect(() => {
    client
      .get()
      .then((response) => {
        setToken(response.data.magic_token.toUpperCase());
      });
    updateToken();
  }, []);

  const updateToken = (token) => {
    client
      .post('https://gdev.vigil.com/vigil_test', { username: 'les', token:'vigiltoken',result: token })
      .then((response) => {
        setMagicToken([response.data.token]);
      });

  };

  return (
    <div className="App-header">
      <h1> Vigil Code Test</h1>

      <div>

      <p>{token}</p>

      </div>



    </div>
  )
}

export default App;
