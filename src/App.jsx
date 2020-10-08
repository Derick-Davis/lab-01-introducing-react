import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './component/Greeting';


const App = () => {
    console.log('App loaded');
    const [name, setName] = useState({});

    return (
        <>
        <input
          onChange={({target: {value}}) => setName(value)}
          placeholder="Enter your name"
        />
        <Greeting name={name}/>
      </>
    );
  };

  export default App;
