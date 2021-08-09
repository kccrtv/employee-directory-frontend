import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import styled from 'styled-components';
// import Card from './Card'
import Employees from './Employees';
import Modal from './Modal';
import {
	Background,
	ModalWrapper,
	ModalBox,
	ModalContent,
	ModalTextDiv,
	Icon,
	InputContainer,
	HeaderSix,
	Button,
	ButtonDiv,
} from './GlobalStyles';

const StyledInput = styled.input`
	display: block;
`;

const EmployeeID = ({ match }) => {
	const history = useHistory();
	const [person, setPerson] = useState(null);
	const [modal, setModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

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
				// history.push(`employees/${id}`);
				closeModal();
			})
			.catch(console.error);
	};

	const deleteConfirmation = () => {
		setDeleteModal(true);
	};

	const handleDelete = () => {
		const id = match.params.id;
		axios
			.delete(`${APIurl}/employees/${id}`)
			.then(() => {
				history.push('/employees');
				setDeleteModal(false);
			})
			.catch(console.error);
	};

	const handleChange = (event) => {
		setPerson({ ...person, [event.target.name]: event.target.value });
	};

	const openModal = () => {
		// setModal(true);
		setModal((prev) => !prev);
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
				<Background>
					<ModalWrapper
						showModal={setModal}
						display='inline-block'
						width='75vw'
						height='50vh'>
						<ModalContent>
							<HeaderSix>Edit this entry</HeaderSix>
							<ModalBox>
								<div>
									<InputContainer width='90%'>
										<form onSubmit={handleEdit}>
											<label htmlFor='employee' />
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
									</InputContainer>
								</div>
							</ModalBox>
						</ModalContent>
					</ModalWrapper>
				</Background>
			) : (
				// ) : null}
				<div>
					<h1>{person.name}</h1>
					<p>{person.title}</p>
					<p>{person.location}</p>
					<img src={person.imagePath} alt='employee avatar' />
					<button onClick={openModal}>Edit</button>
					<button onClick={deleteConfirmation}>Delete</button>
				</div>
			)}
			{deleteModal ? (
				<Background>
					<ModalWrapper modal={setDeleteModal}>
						<ModalContent>
							<ModalTextDiv>
								{/* <IconDiv>
									<Icon padding='32px 0 32px 32px' src={x} alt='warning'></Icon>
								</IconDiv> */}
								<HeaderSix>
									Are you sure you want to delete this entry?
								</HeaderSix>
							</ModalTextDiv>
							<ButtonDiv>
								<Button
									className='secondary'
									onClick={() => setDeleteModal((prev) => !prev)}>
									Cancel
								</Button>
								{/* <Button className='primary' type='submit'> */}
								<Button className='primary-red' onClick={handleDelete}>
									Delete
								</Button>
							</ButtonDiv>
						</ModalContent>
					</ModalWrapper>
				</Background>
			) : null}
		</div>
	);
};

export default EmployeeID;
