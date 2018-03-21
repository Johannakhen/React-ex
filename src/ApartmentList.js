import React, {Component} from 'react';
import Apartment from './Apartment';
import apartments from './apartments.json';

class ApartmentList extends Component{
		state = {
       showAll: false
    }
    showToggle = () => {
	    this.setState({showAll: !this.state.showAll});
		}
 		render(){
			const {apartment} = this.props;
			const {showAll} = this.state;
 			return(
				<div>
					<button onClick={this.showToggle}>
					{" "}
					{showAll ? "Show only available" : "Show all"}
					</button>

					{apartments.map(apartment =>(apartment.isAvailable || showAll) && (
						<Apartment apartment={apartment} />
					))}
				</div>
			)
 		}
}

export default ApartmentList;









