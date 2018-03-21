import React, {Component} from 'react';
import Apartment from './Apartment';
import apartments from './apartments.json';

class ApartmentList extends Component{
		state = {
       showAll: false
    };
    showToggle = () => {
	    this.showAll = !this.showAll;
		 }
 		render(){
			const {apartment} = this.props;
			const {showAll} = this.state;
 			return(
				<div>
					<button onClick={this.showToggle}>
					{}
					{this.state.showAll ? "Show only available" : "Show all"}
					</button>
					
					{/* {apartments.map(apartment => <Apartment apartment={apartment}/>)}
					{ show &&
						apartments.map(apartment => <Apartment apartment={apartment}/>)
					}
					{ !showAll &&
						apartments.filter(apartments => aprtments.isAvailable).map(apartment => <Apartment apartment={apartment}/>)
					} */}
					{apartments.map(apartment =>
					(apartments.isAvailable || showAll === "true") && (
						<Apartment apartment = {apartment}/>
					)
					)}
				</div>
				
			)
 		}
}

export default ApartmentList;


