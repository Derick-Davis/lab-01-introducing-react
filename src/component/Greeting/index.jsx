import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

const Greeting =({name}) => {
    if(name.length>0)      
{
    return (
        <Jumbotron>
            <h1>
                "Hey, {name}! How you doing ?"
            </h1>
        </Jumbotron>
      );
}
return(
    <div>
        <h2>
        "Hey, How you doing ?"
        </h2>
    </div>
    
)
};

export default Greeting;