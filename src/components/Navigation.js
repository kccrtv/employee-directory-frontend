import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect variant='light' expand='md'>
			<Navbar.Brand as={Link} to='/'>
				NYPD Employee Directory
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/'>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to='/employees'>
						Directory
					</Nav.Link>

					<Nav.Link as={Link} to='/add-employee'>
						Add
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
