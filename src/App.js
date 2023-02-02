import './App.css';
import Item from './components/Item';
import React, { useEffect }  from 'react'
import { useState } from 'react' 

function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json)
            // console.log(json);
            } catch (error) {
            console.log("error", error);
            }
    };

    fetchData();
}, []);

  return (
    <div className="container my-5">
      {/* <Item /> */}
      <div>
        {data && data.map((element) => {
         return <div key={element.id}>
          <p>
            <Item title={element.company.name} name={element.name} city={element.address.city} street={element.address.street}
             catchPhrase={element.company.catchPhrase} bs={element.company.bs} suite={element.address.suite} zipcode={element.address.zipcode}
             phone={element.phone} email={element.email} website={element.website} id={element.id}
            />
          </p>
          {console.log(element.id)}
         </div>
        })}
      </div>
    </div>
  );
}

export default App;
