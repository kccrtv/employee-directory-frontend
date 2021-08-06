import React from 'react';
import { Link } from 'react-router-dom';

const Employee = ({ employee, index }) => {
	return (
		<div>
			<Link to={`/employees/${employee._id}`}>
				<p>{employee.name}</p>
			</Link>
		</div>
	);
};

export default Employee;
