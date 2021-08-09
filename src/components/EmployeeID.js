import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import styled from 'styled-components';
// import Card from './Card'
import Employees from './Employees';

const StyledInput = styled.input`
	display: block;
`;

const EmployeeID = ({ match }) => {
	const history = useHistory();
	const [person, setPerson] = useState(null);
	const [modal, setModal] = useState(false);

	const id = match.params.id;
	useEffect(() => {
		axios
			.get(`${APIurl}/employees/${id}`)
			.then(
				({ data }) => setPerson(data)
				// console.log(data)
			)
			.catch(console.error);
	}, [id]);

	const handleEdit = (event) => {
		event.preventDefault();
		// const id = match.params.id;
		axios
			.put(`${APIurl}/employees/${id}`, person)

			.then(() => {
				history.push(`/${id}`);
			})

			.catch(console.error);
	};

	const handleDelete = () => {
		const id = match.params.id;
		axios
			.delete(`${APIurl}/employees/${id}`)
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	};

	const handleChange = (event) => {
		setPerson({ ...person, [event.target.name]: event.target.value });
	};

	const editPerson = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	if (!person) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='employeeID'>
			{modal ? (
				<div>
					<h2>Edit</h2>
					<form onSubmit={handleEdit}>
						<label htmlFor='employee' />{' '}
						<StyledInput
							type='text'
							id='employee'
							onChange={handleChange}
							name='name'
							value={person.name}
						/>
						<label htmlFor='title' />
						<StyledInput
							type='text'
							id='title'
							onChange={handleChange}
							name='title'
							value={person.title}
						/>
						<label htmlFor='location' />
						<StyledInput
							type='text'
							id='location'
							onChange={handleChange}
							name='location'
							value={person.location}
						/>
						<label htmlFor='imagePath' />
						<textarea
							type='text'
							id='imagePath'
							onChange={handleChange}
							name='imagePath'
							value={person.imagePath}
						/>
						<br />
						<button id='button' type='submit'>
							Submit Edits
						</button>
					</form>
					<button onClick={closeModal}>Cancel</button>
				</div>
			) : null}

			<h1>{person.name}</h1>
			<p>{person.title}</p>
			<p>{person.location}</p>
			<img src={person.imagePath} alt='employee avatar' />
			<button onClick={editPerson}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default EmployeeID;
