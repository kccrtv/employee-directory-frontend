import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Employee from './Employee';
import Card from './Card';
import APIurl from '../config';
import axios from 'axios';

function createCard(employee) {
	return (
		<Link to={`/employees/${employee._id}`}>
			<Card
				key={employee._id}
				name={employee.name}
				imagePath={employee.imagePath}
				title={employee.title}
				location={employee.location}
			/>
		</Link>
	);
}

const Employees = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axios(`${APIurl}/employees`)
			// axios(`${APIurl}`)
			.then((res) => setEmployees(res.data))
			.catch(console.error);
	}, []);
	if (!employees.length) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			{employees.map(createCard)}
			{/* {employees.map((employee, index) => {
				return <Employee key={index} employee={employee} index={index} />;
			})} */}
		</div>
	);
};

export default Employees;
