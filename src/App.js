import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import Employees from './components/Employees';
import Navigation from './components/Navigation';
import Form from './components/Form';
import Home from './components/Home';
import EmployeeID from './components/EmployeeID';
import Personnel from './components/Personnel';

function App() {
	return (
		<>
			<GlobalStyles />
			<Navigation />
			<Route exact path='/' component={Home} />
			<Route path='/home' render={() => <Redirect to='/' />} />
			<Route exact path='/employees' component={Employees} />
			<Route path='/employees/:id' component={EmployeeID} />

			<Route path='/personnel' component={Personnel} />

			<Route path='/add-employee' component={Form} />
		</>
	);
}

export default App;
