import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import APIurl from '../config';
import axios from 'axios';

const Add = () => {
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
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/employees`, person)
			.then(() => {
				setPerson(initialState);
				history.push('/employees');
			})
			.catch(console.error);
	};

	return (
		<div>
			<h1>Add to the Employee Directory</h1>
			<Form onSubmit={handleSubmit} className='create-form'>
				<Col md>
					<Form.Group className='mb-3' controlId='employee'>
						<FloatingLabel controlId='employee' label='Employee Full Name'>
							<Form.Control
								as='input'
								id='employee'
								onChange={handleChange}
								name='name'
								value={person.name}
							/>
						</FloatingLabel>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className='mb-3' controlId='title'>
						<FloatingLabel controlId='title' label='Title'>
							<Form.Control
								as='input'
								id='title'
								onChange={handleChange}
								name='title'
								value={person.title}
							/>
						</FloatingLabel>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className='mb-3' controlId='location'>
						<FloatingLabel controlId='location' label='Location'>
							<Form.Control
								as='input'
								id='location'
								onChange={handleChange}
								name='location'
								value={person.location}
							/>
						</FloatingLabel>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className='mb-3' controlId='imagePath'>
						<FloatingLabel controlId='imagePath' label='Image Path URL'>
							<Form.Control
								as='textarea'
								id='imagePath'
								onChange={handleChange}
								name='imagePath'
								value={person.imagePath}
							/>
						</FloatingLabel>
					</Form.Group>
				</Col>
				<div className='d-grid gap-2'>
					<Button size='lg' id='button' type='submit' variant='dark'>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Add;
