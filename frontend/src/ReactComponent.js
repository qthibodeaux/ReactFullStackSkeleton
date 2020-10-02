import React, { useState } from 'react';
import axios from 'axios';

function ReactComponent(props) {
  const [pic, setPic] = useState([""])
  const [database, setDatabase] = useState([{fname: "", number: ""}])
  const GetImage = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
        setPic(response.data.message)
      })
    }

    const GetDatabase = () => {
        axios.get("/list").then(response => {
            setDatabase(response.data)
          })
        }

    const myStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const picStyle = {
        height: '200px',
        width: '200px'
    }
  return (<div style={myStyle}>
        <img src={pic} alt="DoggyPic" style={picStyle}/>
      <button onClick={GetImage}>
          Grab image From Dog Api
      </button>
      <button onClick={GetDatabase}>
          Grab Database
      </button>
      <ul>
        {database.map((element) => {
            const str = element.fname + ": Number: " +  element.number
            return (
                <li>
                    {str}
                </li>
            )
        })}
      </ul>
    </div>
  );
}

export default ReactComponent