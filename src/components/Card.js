import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import Avatar from './Avatar';
import Detail from './Detail';
import EmployeeID from './EmployeeID';

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
	);
};

export default Card;
