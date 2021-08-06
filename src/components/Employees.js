import React, { useState, useEffect } from 'react';
import Employee from './Employee';
import Card from './Card';
import APIurl from '../config';
import axios from 'axios';

function createCard(employee) {
	return (
		<Card
			key={employee.id}
			name={employee.name}
			imagePath={employee.imagePath}
			title={employee.title}
			location={employee.location}
		/>
	);
}

const Employees = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axios(`${APIurl}/employees`)
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
