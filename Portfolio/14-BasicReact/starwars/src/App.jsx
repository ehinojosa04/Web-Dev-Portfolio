import './App.css';
import Poster from './Components/Poster';
import More from './Components/More';
import sw from './data';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const [char, setChar] = useState({
    name: "",
    affiliation: "",
    image: "",
    bio: "",
});

  return (
    <div className='container'>
      <div className='row'>
      {sw.map(item => 
        <Poster data = {item}/>
        )}
      </div>
      <div className='row'>
        <More/>
      </div>
      
    </div>
  );
}

export default App;
