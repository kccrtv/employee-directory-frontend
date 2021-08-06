import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import Carousel from './components/Carousel';
import Employees from './components/Employees';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				{/* <Route exact path='/' component={Carousel} /> */}
				<Route exact path='/' component={Employees} />
				{/* <Route path='/search' /> */}
			</Router>

			{/* private route for users to add new employee */}
		</>
	);
}

export default App;
