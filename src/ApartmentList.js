import React from 'react';
import Apartment from './Apartment';
import apartments from './apartments.json';

const ApartmentList = (apartments) => {
	return(
		<div> {apartments.map(Apartments => <Apartment apartments={apartments}/>)} </div>
	)

}



export default ApartmentList;


