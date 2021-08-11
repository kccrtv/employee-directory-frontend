import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIurl from '../config';
import { Table } from 'react-bootstrap';
import { StyledLink } from './GlobalStyles';

const RowLink = (props) => {
	return (
		<tr>
			<td>
				<StyledLink href={`/employees/${props.id}`}>{props.name}</StyledLink>
			</td>
			<td>{props.title}</td>
			<td>{props.location}</td>
		</tr>
	);
};

const Home = () => {
	const [list, setList] = useState([]);

	const getList = () => {
		return (
			axios(`${APIurl}/employees`)
				// return axios(`${APIurl}`)
				.then((res) => {
					setList(res.data);
				})
				.catch(console.error)
		);
	};

	useEffect(() => {
		getList();
	}, []);

	if (!list.length) {
		return <h1>HOME</h1>;
	}

	return (
		<div>
			<Table responsive striped bordered hover size='md'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Title</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					{list
						? list.map((person) => (
								<RowLink
									href={person._id}
									key={person._id}
									id={person._id}
									name={person.name}
									title={person.title}
									location={person.location}
								/>
						  ))
						: null}
				</tbody>
			</Table>
		</div>
	);
};

export default Home;
