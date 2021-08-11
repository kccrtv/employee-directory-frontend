import React from 'react';
import './App.css';
import { BrowserRouter as Redirect, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Employees from './components/Employees';
import EmployeeID from './components/EmployeeID';
import Add from './components/Add';

function App() {
	return (
		<>
			<GlobalStyles />
			<Navigation />
			<Route exact path='/' component={Home} />
			<Route path='/home' render={() => <Redirect to='/' />} />
			<Route exact path='/employees' component={Employees} />
			<Route path='/employees/:id' component={EmployeeID} />
			<Route path='/add-employee' component={Add} />
		</>
	);
}

export default App;
