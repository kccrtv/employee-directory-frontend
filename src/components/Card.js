import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import Avatar from './Avatar';
import Detail from './Detail';
import EmployeeID from './EmployeeID';
// import { Card } from 'react-bootstrap';

const Card = (props, { editPerson, handleDelete }) => {
	return (
		<div className='card'>
			<div className='top'>
				<h2 className='name'>{props.name}</h2>

				<Avatar src={props.imagePath} />
			</div>
			<div className='bottom'>
				<Detail detailInfo={props.title} />
				<Detail detailInfo={props.location} />
			</div>
		</div>

		// <Card style={{ width: '18rem', color: #000 }}>
		// 	<Card.Body>
		// 		<Card.Title>{props.name}</Card.Title>
		// 		{/* <Card.Subtitle className='mb-2 text-muted'>{props.title}</Card.Subtitle>
		// 		<Card.Text>{props.location}</Card.Text> */}
		// 		<Card.Link href={`/employees/${props.href}`}>Details</Card.Link>
		// 	</Card.Body>
		// </Card>
	);
};

export default Card;
