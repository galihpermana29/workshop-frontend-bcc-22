import axios from 'axios';

export const tweetAPI = axios.create({
	baseURL:
		'http://ec2-18-138-35-61.ap-southeast-1.compute.amazonaws.com:8080/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
	},
});
