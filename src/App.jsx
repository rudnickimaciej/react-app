import './App.css';
import {Layout} from './pages/layout/layout'
import {Pets as Pets} from './pages/pets/pets.tsx'

import Login from './pages/sign-in/login'
import Register from './pages/sign-up/register'
import Settings from './pages/settings/settings'


import {Router,Route, Routes, useNavigate} from 'react-router-dom'

function App() {


 
  return (
    <div className="App">
   
        <Routes>
                <Route path = "/pets" element = {<Pets/>}/>
                <Route path = "/login" element = {<Login/>}/>  
                <Route path = "/register" element = {<Register/>}/>  
                <Route path = "/settings" element = {<Settings/>}/>          
        </Routes>
      
      {/* {places.map((item, index)=>

        <p key = {index}> {item.name}</p>
      )} */}

    </div>
  );
}

export default App;
