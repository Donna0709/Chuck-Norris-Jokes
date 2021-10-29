import React from 'react';

const Card = ({ value }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='chuck' src={'https://assets.chucknorris.host/img/avatar/chuck-norris.png'} />
			<div>
				<h1>{value}</h1>
			</div>
		</div>
	);
}

export default Card;