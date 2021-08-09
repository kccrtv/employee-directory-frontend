import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import styled from 'styled-components';

const StyledInput = styled.input`
	display: block;
`;

const Form = () => {
	const initialState = {
		name: '',
		title: '',
		location: '',
		imagePath: '',
	};

	const history = useHistory();
	const [person, setPerson] = useState(initialState);
	const handleChange = (event) => {
		setPerson({ ...person, [event.target.name]: event.target.value });
		// setPerson(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// getPerson(person);
		axios
			.post(`${APIurl}`, person)
			.then(() => {
				setPerson(initialState);
				history.push('/');
			})
			.catch(console.error);
	};

	function getPerson(person) {
		// fetch(APIurl)
		// 	.then((res) => res.json())
		// 	.then((res) => setPerson(res.data))
		// 	.catch(console.error);
	}

	// useEffect(() => {
	// 	getPerson(person);
	// }, []);

	return (
		<div>
			<form onSubmit={handleSubmit} className='create-form'>
				<label htmlFor='employee'>Employee Full Name:</label>
				<StyledInput
					type='text'
					id='employee'
					onChange={handleChange}
					name='name'
					value={person.name}
					placeholder='Employee Full Name'
				/>

				<label htmlFor='title'>Title: </label>
				<StyledInput
					type='text'
					id='title'
					onChange={handleChange}
					name='title'
					value={person.title}
					placeholder='Title'
				/>

				<label htmlFor='location'>Location: </label>
				<StyledInput
					type='text'
					id='location'
					onChange={handleChange}
					name='location'
					value={person.location}
					placeholder='Location'
				/>

				<label htmlFor='imagePath'>Image Path URLs </label>

				<textarea
					type='text'
					id='imagePath'
					onChange={handleChange}
					name='imagePath'
					value={person.imagePath}
					placeholder='Image Path URL'
				/>

				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
