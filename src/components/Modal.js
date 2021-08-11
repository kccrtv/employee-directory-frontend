import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import {
	Background,
	ModalWrapper,
	ModalContent,
	ModalTextDiv,
	Icon,
	HeaderSix,
	ButtonDiv,
} from './GlobalStyles';

const Modal = ({ modal, setModal, handleDelete }) => {
	return (
		<>
			{modal ? (
				<Background>
					<ModalWrapper setmodal={setModal}>
						<ModalContent>
							<ModalTextDiv>
								{/* <Icon src={warning} alt='question mark'></Icon> */}
								<HeaderSix>Edit</HeaderSix>
							</ModalTextDiv>
							<ButtonDiv>
								<Button
									className='secondary'
									onClick={() => setModal((prev) => !prev)}>
									Cancel
								</Button>
								<Button
									onClick={(e) => {
										handleDelete(e);
										setModal((prev) => !prev);
									}}
									className='primary'
									type='submit'>
									Publish
								</Button>
							</ButtonDiv>
						</ModalContent>
					</ModalWrapper>
				</Background>
			) : null}
		</>
	);
};

export default Modal;
