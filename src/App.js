import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
// import Employees from './components/Employees';
import Carousel from './components/Carousel';
function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Route exact path='/' component={Carousel} />
				{/* <Route exact path='/' component={Employees} /> */}
				{/* <Route path='/search' /> */}
			</Router>

			{/* private route for users to add new employee */}
		</>
	);
}

export default App;
