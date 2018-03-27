import React, {Component} from 'react';
import Apartment from './Apartment';
import ApartmentList from './ApartmentList';
import apartments from './apartments.json';

// TOTAL appart number tots
    // found number . length filter appart
    //Donc on peut récup le nombre d'appart filtré et le total, si search est vide si pas d'appart trouvé si on a qlqch dans l'input et le nombre d'appartment est 0 donc pas de résultats
    //search est un fonction fléché staless

const SearchBar = (onChangeText,searchValue ) =>{
  return(
    <div>
      <input placeholder="search" value={searchValue} onChange={this.keypressed} />
      <div>
        {{searchValue}.length ? "Found 1 out of 4" : "No apartments found"}
      </div>
    </div>
  )

}

class App extends Component {
  state = {
    searchValue: ""
  };
  keypressed = e =>{
    this.setState({searchValue: e.target.value})
    console.log(this.state.searchValue)
  };
  render(){
    const {searchValue} = this.state
    const filterApartments = apartments.filter(apartment => apartment.title.includes(searchValue))
    return(
      <div className="App">
          <SearchBar />
          <p>Apartement list</p>
          <ApartmentList apartment={filterApartments}/>
      </div>
    )
  }
}


export default App;
