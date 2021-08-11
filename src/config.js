const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://employee-directory-backend.herokuapp.com';

export default APIurl;
