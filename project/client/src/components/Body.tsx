import React, { useEffect, useState } from 'react'

const Body: React.FC = () => {

    const [data, setData] = useState([]);

    //function for fetching data from backend
    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos") // api url here 
        .then(response => {
            return response.json();
        })
        .then(data => {
            setData(data); 
        })
    };

    useEffect(() => {
        fetchData()
      }, []);


    var input = "input"

    // function for sending data to backend 
    const sendData = () => { 
        fetch("", {  // url to post to 
            method: 'POST', 
            mode: 'cors', 
            body: JSON.stringify(input) 
        })
    };
        

    return (
     <div>
        <label>Stromverbrauch</label> <br/>
        <input type='text'></input> <br/>

        <label>Rechenleistung</label> <br/>
        <input type='text'></input> <br/>

        <button onClick={sendData}>Absenden</button> <br/>

        <label>Ergebnisse</label> <br/>
        {data.length > 0 && (
        <ul>
          {data.map(data => (
            <li key={data.id}>{data.title}</li> // show result list 
          ))}
        </ul>
      )}
     </div>
    );
  }

export default Body; 