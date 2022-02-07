import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const TweetArea = styled.div`
	background-color: #fff;
	margin: 0 auto;
	margin-top: 10rem;
	min-height: 5rem;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	padding: 2rem;
	box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

export const InputTweet = styled(TextField).attrs(() => ({
	InputProps: { style: { fontSize: '1.6rem', fontFamily: 'inherit' } },
	InputLabelProps: { style: { fontSize: '1.6rem', fontFamily: 'inherit' } },
	variant: 'outlined',
}))`
	width: 100%;
`;

export const TweetButton = styled(Button)`
	align-self: flex-end;
	font-size: 1.3rem;
`;
