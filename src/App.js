import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import Carousel from './components/Carousel';
import Employees from './components/Employees';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Form from './components/Form';
import Home from './components/Home';
import About from './components/About';
import EmployeeID from './components/EmployeeID';

function App() {
	return (
		<>
			<GlobalStyles />
			<Navigation />
			<Route exact path='/' component={Home} />
			<Route path='/home' render={() => <Redirect to='/' />} />
			<Route path='/employees' component={Employees} />
			<Route path='/employees/:id' component={EmployeeID} />
			<Route path='/search' component={Search} />
			<Route path='/about' component={About} />
			<Route path='/add-employee' component={Form} />
		</>
	);
}

export default App;
