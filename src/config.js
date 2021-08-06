const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'http://b99api.com';

export default APIurl;
