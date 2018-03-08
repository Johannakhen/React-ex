import React from 'react';
import Apartment from './Apartment';
import json from './apartments.json';

const App = () => {
  let apartments = [
        //<Apartment title="test" price={34} imageUrl="http://via.placeholder.com/50x50" rating={2} isAvailable="true"/>
  ]
  return(
    <div className="App">
        <p>Apartement list</p>
     
        {apartments.map (function (item) {
          return <div>{item}</div>;
        })}
        {json.map(function(apartment){
            return <div> <img src={apartment.imageUrl}/> <h1><span>{apartment.isAvailable}</span>{apartment.title}</h1> <p>{apartment.price}</p><p>{apartment.rating}</p></div>;
        })}
    </div>
  )
}

export default App;
