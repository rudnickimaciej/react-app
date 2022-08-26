import './App.css';
import {DashboardLayout} from './pages/layout/layout'
import {useEffect, useState} from 'react'

function App() {

  const [places, setPlaces] = useState([]);

  useEffect( () =>{
    fetch("https://localhost:44345/api/places")
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result)
          setPlaces(
          result
        )      
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}, [])
  return (
    <div className="App">
    <DashboardLayout> 
     
      </DashboardLayout>
      {places.map((item, index)=>

        <p key = {index}> {item.name}</p>
      )}

    </div>
  );
}

export default App;
