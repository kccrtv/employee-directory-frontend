import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Employees from './components/Employees';

function App() {
	return (
		<>
			<Router>
				<Route exact path='/' component={Employees} />
				<Route path='/search' />
			</Router>

			{/* private route to add new employee */}
		</>
	);
}

export default App;
