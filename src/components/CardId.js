import React from 'react';
import { Card } from 'react-bootstrap';

const CardId = (props) => {
	return (
		<figure>
			<Card className='card-container'>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						{props.title}
					</Card.Subtitle>

					<Card.Link href={`/employees/${props.href}`}>Details</Card.Link>
				</Card.Body>
			</Card>
		</figure>
	);
};

export default CardId;
