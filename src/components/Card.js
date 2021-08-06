import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

const Card = (props) => {
	return (
		<div className='card'>
			<div className='top'>
				<p>{props.key}</p>
				<h2 className='name'>{props.name}</h2>
				<Avatar src={props.imagePath} />
			</div>
			<div className='bottom'>
				<Detail detailInfo={props.title} />
				<Detail detailInfo={props.location} />
			</div>
		</div>
	);
};

export default Card;
