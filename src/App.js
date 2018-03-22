import React, {Component} from 'react';
import Apartment from './Apartment';
import ApartmentList from './ApartmentList';
import apartments from './apartments.json';

class App extends Component {
  state = {
    searchValue: ""
  };
  keypressed = e =>{
    this.setState({searchValue: e.target.value.toLowerCase()})
    console.log(this.state.searchValue)
  };
  render(){
    const {searchValue} = this.state
    const filterApartments = apartments.filter(apartment => apartment.title.includes(this.state.searchValue))
    return(
      <div className="App">
      <input placeholder="search" value={searchValue} onChange={this.keypressed.bind(this)} />
          <p>Apartement list</p>
          <ApartmentList apartment={filterApartments}/>
      </div>
    )
  }
}

export default App;
