const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:3111'
		: 'http://b99api.com';

export default APIurl;
