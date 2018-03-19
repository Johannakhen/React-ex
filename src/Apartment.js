import React from 'react';

const Apartment = (apartment) => {
	const stars = new Array(apartment.rating).fill('⭐')
	return(
	<div>
		<svg height="15" width="15"><circle cx="8" cy="8" r="3" fill={apartment.isAvailable ? "green": "red"}/></svg>
		 <img src={apartment.imageUrl}/>
		 <p><span>{apartment.availibility}</span>{apartment.title}</p>
		 <p>{apartment.price} $</p>
		 <p>{apartment.stars.map(star => star) }</p>
	</div>
	)

}


export default Apartment;


