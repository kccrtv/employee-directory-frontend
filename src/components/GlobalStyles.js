import styled, { createGlobalStyle } from 'styled-components';
import rolodex from '../assets/rolodex.svg';
import desk from '../assets/deskamy.jpeg';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin:  auto 0;
    display: grid;
grid-template-rows: repeat(8, 4ch 56px);
    background-image: url(${desk});
    background-repeat: no-repeat;
	background-size: contain;
}

main {
  display: grid;
grid-template-rows: repeat(4, 40px 16px);
grid-template-columns: 2fr 1fr 1fr 1fr;
}
`;

export const Rolodex = styled.div`
	display: grid;
	grid-template-rows: repeat(6, 4px 8px 7ch);
	grid-template-columns: 1fr 3fr 1fr;
	margin: 0 auto;
	width: 40vw;
	height: 70vh;
	background-image: url(${rolodex});
	background-repeat: no-repeat;
	background-size: contain;
`;

export const CardDiv = styled.div`
	width: 100%;
	border: 3px solid black;
	border-radius: 16px;
	margin: 0 auto;
	grid-row-start: 12;
	grid-row-end: 19;
	grid-column-start: 2;
	grid-column-end: 3;
`;

export const CarouselDiv = styled.div`
	display: grid;
	grid-row-start: 8;
	grid-column-start: 3;
`;
