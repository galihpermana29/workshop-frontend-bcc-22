import styled from 'styled-components';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	background-color: white;
	width: 60rem;
	border-radius: 1rem;
	padding: 5rem;
	display: flex;
	flex-direction: column;
	box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

export const MainForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 2rem 0;
`;

export const Title = styled.h1`
	font-size: 4rem;
	font-weight: bold;
`;

export const Input = styled(TextField).attrs(() => ({
	variant: 'outlined',
	InputProps: { style: { fontSize: '1.8rem', fontFamily: 'inherit' } },
	InputLabelProps: { style: { fontSize: '1.5rem', fontFamily: 'inherit' } },
}))`
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

export const MainButton = styled.button`
	background-color: #1f7a8c;
	font-weight: bold;
	color: #fff;
	outline: none;
	border: none;
	padding: 1.3rem 0;
	font-size: 1.5rem;
	font-family: inherit;
	border-radius: 2rem;
	transition: 0.2s all;
	&:hover {
		cursor: pointer;
		background-color: #2cafc9;
	}
`;

export const SecondaryButton = styled(Link)`
	background-color: #022b3a;
	font-weight: bold;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.6;

	color: #fff;
	outline: none;
	border: none;
	padding: 1.2rem 0;
	border-radius: 2rem;
	transition: 0.2s all;
	&:hover {
		cursor: pointer;
		background-color: #05668a;
	}
`;
