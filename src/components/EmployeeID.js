import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import styled from 'styled-components';
import { Form, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {
	Background,
	ModalWrapper,
	ModalBox,
	ModalContent,
	ModalTextDiv,
	Icon,
	InputContainer,
	HeaderSix,
	ButtonDiv,
	BadgeDiv,
	BadgeHeader,
	BadgeFooter,
	BadgeAvatar,
	BadgeMiddleDiv,
	BadgeDetailsDiv,
	BadgeName,
	BadgeDetails,
} from './GlobalStyles';
import header from '../assets/Header.svg';
import barcode from '../assets/Barcode.svg';

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
					<ModalWrapper showModal={setModal}>
						<ModalContent>
							<ModalBox>
								<InputContainer>
									<Form onSubmit={handleEdit}>
										<p>Edit this entry</p>
										<Col md>
											<Form.Group className='mb-3' controlId='employee'>
												<FloatingLabel
													controlId='employee'
													label='Employee Full Name'>
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
												<FloatingLabel
													controlId='imagePath'
													label='Image Path URL'>
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
									</Form>
									<br />
									<ButtonDiv justify='flex-end'>
										<Button variant='outline-secondary' onClick={closeModal}>
											Cancel
										</Button>
										<Button id='button' type='submit' variant='dark'>
											Submit
										</Button>
									</ButtonDiv>
								</InputContainer>
							</ModalBox>
						</ModalContent>
					</ModalWrapper>
				</Background>
			) : (
				// ) : null}
				<div>
					<BadgeDiv>
						<BadgeHeader src={header} alt='nypd header' />
						<BadgeMiddleDiv>
							<BadgeDetailsDiv>
								<BadgeName>{person.name}</BadgeName>
								<BadgeDetails>{person.title}</BadgeDetails>
								<BadgeDetails>{person.location}</BadgeDetails>
							</BadgeDetailsDiv>
							{/* <img src={person.imagePath} alt='employee avatar' /> */}
							<BadgeAvatar src={person.imagePath} alt='employee avatar' />
						</BadgeMiddleDiv>
						<BadgeFooter src={barcode} alt='barcode' />
					</BadgeDiv>
					<ButtonDiv className='d-grid gap-2' justify='normal'>
						<Button
							variant='outline-danger'
							onClick={deleteConfirmation}
							size='md'>
							Delete
						</Button>
						<Button variant='dark' onClick={openModal} size='md'>
							Edit
						</Button>
					</ButtonDiv>
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
								<p>Are you sure you want to delete this entry?</p>
							</ModalTextDiv>
							<ButtonDiv justify='flex-end'>
								<Button
									variant='outline-secondary'
									onClick={() => setDeleteModal((prev) => !prev)}
									size='md'>
									Cancel
								</Button>
								<Button variant='danger' onClick={handleDelete} size='md'>
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
