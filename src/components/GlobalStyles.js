import styled, { createGlobalStyle } from 'styled-components';
import rolodex from '../assets/rolodex.svg';
import desk from '../assets/desk.jpeg';

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;

}

// body {
//     margin:  auto 0;
//     display: grid;
// 	grid-template-rows: repeat(8, 4ch 56px);
	
// }

// main {
//   display: grid;
// 	grid-template-rows: repeat(4, 40px 16px);
// 	grid-template-columns: 2fr 1fr 1fr 1fr;
// }

body {
  font-family: sans-serif;
  margin: 0 auto;
  padding: 25px;
  max-width: 400px;
  min-width: 400px;
  background-color: #dfe6e9;
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
  background-color: #fff;
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
  // color: #2d3436;
  color: #fff;
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

// export const Rolodex = styled.div`
// 	display: grid;
// 	grid-template-rows: repeat(6, 4px 8px 7ch);
// 	grid-template-columns: 1fr 3fr 1fr;
// 	margin: 0 auto;
// 	width: 40vw;
// 	height: 70vh;
// 	background-image: url(${rolodex});
// 	background-repeat: no-repeat;
// 	background-size: contain;
// `;

// export const CardDiv = styled.div`
// 	width: 100%;
// 	border: 3px solid black;
// 	border-radius: 16px;
// 	margin: 0 auto;
// 	grid-row-start: 12;
// 	grid-row-end: 19;
// 	grid-column-start: 2;
// 	grid-column-end: 3;
// `;

// export const CarouselDiv = styled.div`
// 	display: grid;
// 	grid-row-start: 8;
// 	grid-column-start: 3;
// `;

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
	width: 432px;
	height: 220px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

export const ModalBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.width || '100%'};
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;
`;

export const ModalTextDiv = styled.div`
	height: 64px;
	padding-bottom: 8px;
	border-bottom: 1px solid #b0b8bc;
	border-radius: 2px;
	color: #222f65;
	background-color: #fff;
	margin: 0 auto;
	font-family: 'Inconsolata', monospace;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.img`
	height: 20px;
	width: 20px;
	padding: 8px;
`;

export const HeaderSix = styled.h6`
	font-size: 2rem;
	color: #505f98;
`;

export const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	display: inline-flex;

	& a {
		margin: 0;
	}
`;

export const Button = styled.button`
	width: 128px;
	height: 48px;
	font-family: 'Inconsolata', monospace;
	font-size: ${(props) => props.size || '1rem'};
	border-radius: 2px;
	margin: ${(props) => props.margin || '0 16px 16px'};
	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.secondary {
		background-color: #e5e7f0;
		color: #222f65;
	}
`;

export const InputContainer = styled.div`
	padding: 32px;
	width: ${(props) => props.width || '100%'};
	border: none;

	outline: none;
	font-size: 1.2em;
`;
