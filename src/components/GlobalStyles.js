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
