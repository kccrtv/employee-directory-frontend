import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import Row from './Row';

function createRow(list) {
	return (
		<Row
			key={list._id}
			link={list._id}
			name={list.name}
			title={list.title}
			location={list.location}
		/>
	);
}

function getRows(list) {
	const rowList = list.map(createRow(list));
	console.log(rowList);
}

const Home = () => {
	const [list, setList] = useState([]);
	const getList = () => {
		return axios(`${APIurl}/employees`)
			.then((res) => setList(res.data))
			.catch(console.error);
	};

	useEffect(() => {
		getList();
	}, []);

	if (!list.length) {
		return <h1>HOME</h1>;
	}

	return (
		<div>
			<Table>
				<tbody>
					<Row
						key={list[0]._id}
						link={list[0]._id}
						name={list[0].name}
						title={list[0].title}
						location={list[0].location}
					/>
				</tbody>
			</Table>
			{/* {list ? (
				<Table responsive='lg'>
					<thead>
						<tr>
							<th>#</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
						</tr>
						{getRows()}
						<tr>
							<td>2</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
						</tr>
					</tbody>
				</Table>
			) : null} */}
		</div>
	);
};

export default Home;
