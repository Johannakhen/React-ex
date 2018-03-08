import React from 'react';

const Apartment = (apartment) => {
	const stars = new Array(apartment.rating).fill('⭐')
	let availibility;
	if(apartment.isAvailable === "true"){
		availibility = <svg height="15" width="15"><circle cx="8" cy="8" r="3" fill="green" /></svg>
	}
    else {
        availibility = <svg height="15" width="15"><circle cx="8" cy="8" r="3" fill="red" /></svg>
    }
	return(
	<div>
		 <img src={apartment.imageUrl}/>
		 <p><span>{apartment.availibility}</span>{apartment.title}</p>
		 <p>{apartment.price} $</p>
		 <p>{stars.map(star => star) }</p>
		 
	</div>
	)

}



export default Apartment;


