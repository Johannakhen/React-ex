import React from 'react';
const Apartment = ({ apartment: { imageUrl, title, isAvailable, price, rating }}) => {
	const stars = new Array(rating).fill('⭐')
	let availibility;
	if(isAvailable === true){
		availibility = <svg height="15" width="15"><circle cx="8" cy="8" r="3" fill="green" /></svg>
	}
  else {
      availibility = <svg height="15" width="15"><circle cx="8" cy="8" r="3" fill="red" /></svg>
  }
	return(
	<div>
		 <img width="100px" alt="img" src={imageUrl}/>
		 <p><span>{availibility}</span>{title}</p>
		 <p>{price} $</p>
		 <p>{stars.map(star => star) }</p>
	</div>
	)

}


export default Apartment;