import React from 'react';
import { Link } from 'react-router-dom';

const Employee = ({ employee, index }) => {
	return (
		<div>
			<Link to={`/employees/${employee._id}`}>
				<p>{employee.name}</p>
				<p>{employee.title}</p>
				<p>{employee.location}</p>
				<img src={employee.imagePath} alt={`${employee.name} headshot`} />
			</Link>
		</div>
	);
};

export default Employee;
