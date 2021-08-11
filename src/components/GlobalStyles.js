import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

 body {
  margin: 2rem auto;
  max-width: 70vw;
  text-align: center;
 }

.card-container{
	margin: 10px;
	width: 18rem;
	padding: 0.5rem;
}
`;

export const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	width: 50%;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: inline-block;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

export const ModalBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.width || '100%'};
	padding: 20px 10px;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ModalTextDiv = styled.div`
	margin: 0 auto;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 20px 10px 0 10px;
`;

export const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.justify || '24px'};
`;

export const InputContainer = styled.div`
	width: ${(props) => props.width || '90%'};
	border: none;
	outline: none;
`;

export const StyledLink = styled.a`
	text-decoration: none;
`;

export const BadgeDiv = styled.div`
	border: 3px solid #000000;
	max-width: 45vw;
	margin: 0 auto;
`;

export const BadgeHeader = styled.img`
	max-width: 100%;
`;

export const BadgeFooter = styled.img`
	max-width: 75%;
	padding: 10px 0;
`;

export const BadgeMiddleDiv = styled.figure`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 10px 40px 0 40px;
	font-family: 'Oswald', sans-serif;
`;

export const BadgeDetailsDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	letter-spacing: 0.02rem;
	margin: 5px;
`;

export const BadgeAvatar = styled.img`
	border: 3px solid #101237;
	max-width: 55%;
	object-fit: cover;
`;

export const BadgeName = styled.h1`
	font-weight: bold;
	font-size: 1.5rem;
	text-transform: uppercase;
`;

export const BadgeDetails = styled.p`
	font-size: 1.2rem;
	margin: 0;
`;

export const CardDiv = styled.section`
	display: flex;
	flex-direction: row;
	padding: 10px;
	flex-wrap: wrap;
	margin: 0 auto;
`;
