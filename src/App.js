import React from 'react';
import Apartment from './Apartment';
import ApartmentList from './ApartmentList';
import apartments from './apartments.json';

const App = () => {
  return(
    <div className="App">
        <p>Apartement list</p>
        <ApartmentList apartments={apartments}/>
    </div>
  )
}

export default App;
