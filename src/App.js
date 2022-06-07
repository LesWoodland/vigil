import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

// Axios is a promise-based HTTP Client that uses XMLHttpRequests and automatically handles JSON
const client = axios.create({
  baseURL: "https://dynggo.herokuapp.com/"
});

const App = () => {

  const [data, setData] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    client.get(`reports?identifier=${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);

  const handleId = (e) => {
    e.preventDefault();
    setId(e.target[0].value)
  }

  return (
    <div>
      <h1> Vigil Code Test</h1>
      <form onSubmit={handleId}><input placeholder='Enter id#' type="text" id="fname" name="fname" ></input></form>
      {data.map((data) => {
        return (
          <div className="post-card" key={data}>

            <h2 className="post-title">{data.identifier}</h2>
            <p className="post-body">{data._id}</p>

          </div>
        );
      })}
    </div>
  )
}

export default App;
