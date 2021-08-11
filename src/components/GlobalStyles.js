import styled, { createGlobalStyle } from 'styled-components';
// import rolodex from '../assets/rolodex.svg';
// import desk from '../assets/desk.jpeg';

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;

}

body {
  font-family: sans-serif;
  margin: 0 auto;
  padding: 25px;
//   max-width: 60vw;
//   background-color: #dfe6e9;
  text-align: center;
}

.heading {
  text-align: center;
  font-size: 2em;
  color: #2d3436;
  margin: 20px 0 30px;
}

.card {
  border-radius: 25px;
  position: relative;
  padding: 25px 15px;
//   background-color: #fff;
  margin: 50px 0;
  height: 200px;
  box-shadow: 0 7px 19px #ccc;
  text-align: left;
}

.top {
  border-radius: 25px 25px 0 0;
  height: 100px;
  width: 100%;
  background-color: #121238;
  
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.name {
  font-size: 2em;
//   color: #fff;
  display: flex;
  flex: 1;
  margin: 5% 0 0 15px;
}

.card img {
  margin: 30px 20px 0 0;
  width: 120px;
  object-fit: contain;

}

.circle {
  border-radius: 100px;
  height: 120px;
}

.bottom {
  margin-top: 70px;
}

.info {
  margin: 16px 0;
  color: #121238;
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
	// height: 80%;
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
	// line-height: 1.8;
	// color: #141414;
`;

export const ModalTextDiv = styled.div`
	// height: 64px;
	// padding-bottom: 8px;
	// border-bottom: 1px solid #b0b8bc;
	// border-radius: 2px;
	// color: #222f65;
	// background-color: #fff;
	margin: 0 auto;
	// font-family: 'Inconsolata', monospace;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 20px 10px 0 10px;
`;

// export const Icon = styled.img`
// 	height: 20px;
// 	width: 20px;
// 	padding: 8px;
// `;

// export const HeaderSix = styled.h6`
// 	font-size: 2rem;
// 	color: #505f98;
// `;

export const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.justify || '24px'};
	// max-width: 100%;
	// & a {
	// 	margin: 0;
	// }
`;

export const InputContainer = styled.div`
	// padding: 32px;
	width: ${(props) => props.width || '90%'};
	border: none;
	outline: none;
	// font-size: 1.2em;
`;

export const StyledLink = styled.a`
	text-decoration: none;
`;

export const BadgeDiv = styled.div`
	border: 3px solid #000000;
	max-width: 752px;
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
	padding: 40px 40px 0 40px;
	font-family: 'Oswald', sans-serif;
`;

export const BadgeDetailsDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	letter-spacing: 0.02rem;
`;

export const BadgeAvatar = styled.img`
	border: 3px solid #101237;
	max-width: 55%;
`;

export const BadgeName = styled.h1`
	font-weight: bold;
	font-size: 1.5rem;
	text-transform: uppercase;
`;

export const BadgeDetails = styled.p`
	font-size: 1rem;
	margin: 0;
`;
