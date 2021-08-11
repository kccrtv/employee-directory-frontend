import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import APIurl from '../config';
import axios from 'axios';
// import { Card } from 'react-bootstrap';

function createCard(employee) {
	return (
		// <Link to={`/employees/${employee._id}`}>
		<Card
			key={employee._id}
			name={employee.name}
			// imagePath={employee.imagePath}
			title={employee.title}
			location={employee.location}
			href={employee._id}
		/>
		// </Link>
	);
}

const Employees = () => {
	const [employees, setEmployees] = useState([]);

	const getEmployees = () => {
		return axios(`${APIurl}/employees`)
			.then((res) => {
				setEmployees(res.data);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getEmployees();
	}, []);

	if (!employees.length) {
		return <h1>Loading...</h1>;
	}

	return <div>{employees.map(createCard)}</div>;
};

export default Employees;
