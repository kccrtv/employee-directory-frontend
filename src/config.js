const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:3111'
		: 'https://quizzical-bose-ab326c.netlify.app';

export default APIurl;
