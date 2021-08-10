import React from 'react';
import { Link } from 'react-router-dom';

const Row = (props) => {
	return (
		<Link to={`/employees/${props.link}`}>
			<tr>
				<td>{props._id}</td>
				<td>{props.name}</td>
				<td>{props.title}</td>
				<td>{props.location}</td>
			</tr>
		</Link>
	);
};

export default Row;
