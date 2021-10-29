import React from 'react';
import Card from './Card';

const CardDisplay = ({ jokes }) => {
	return (
	<div>
		<Card
		value={jokes.value} />
	</div>
	/*<div>
		{
		  robots.map((user, i) => {
		  	return (
		  		<Card 
				id={robots[i].id} 
				name={robots[i].name}
				email={robots[i].email}
				/>
		  	);
		  })
		}
  	</div>*/
	);
}

export default CardDisplay;