import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardId from './CardId';
import APIurl from '../config';
import axios from 'axios';
// import { Card } from 'react-bootstrap';
import { CardDiv } from './GlobalStyles';

function createCard(employee) {
	return (
		<CardId
			name={employee.name}
			imagePath={employee.imagePath}
			title={employee.title}
			location={employee.location}
			href={employee._id}
		/>

		// <Link to={`/employees/${employee._id}`}>
		// <CardId
		// 	key={employee._id}
		// 	name={employee.name}
		// 	// imagePath={employee.imagePath}
		// 	title={employee.title}
		// 	location={employee.location}
		// 	href={employee._id}
		// />
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

	return <CardDiv>{employees.map(createCard)}</CardDiv>;
};

export default Employees;
