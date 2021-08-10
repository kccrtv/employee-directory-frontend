import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Employee from './Employee';
import Card from './Card';
import APIurl from '../config';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';

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
	// const [page, setPage] = useState([]);
	// let active = 1;
	// let items = [];
	// for (let number = 1; number <= 5; number++) {
	// 	items.push(
	// 		<Pagination.Item key={number} active={number === active}>
	// 			{number}
	// 		</Pagination.Item>
	// 	);
	// }

	// const getPages = (page) => {
	// 	const start = (page[page.length] - 1) * 10;
	// 	const end = page[page.length] * 10;
	// setPage(page);
	// page.slice(start, end);
	// console.log(`start ${start}, end ${end}`);

	// const start = (employees.length - 1) * 3; // 0;
	// const end = employees.length * 3; // 9;
	// let employeeResults = employees.slice(start, end);
	// console.log(employees.length);

	// setPage(employeeResults);
	// setEmployees(employeeResults);
	// console.log(employeeResults);
	// };

	const getEmployees = () => {
		return axios(`${APIurl}/employees`)
			.then((res) => {
				setEmployees(res.data);
				// getPages(employees.length);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getEmployees();
	}, []);

	if (!employees.length) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			{employees.map(createCard)}

			{/* <Pagination>{items}</Pagination> */}
		</div>
	);
};

export default Employees;
