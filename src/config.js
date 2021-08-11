const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:3111'
		: 'https://employee-directory-backend.herokuapp.com';

export default APIurl;
