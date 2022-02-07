import axios from 'axios';
import { useState } from 'react';
import {
	Container,
	Wrapper,
	MainForm,
	Title,
	Input,
	MainButton,
	SecondaryButton,
} from '../components/AccountForm';
import { tweetAPI } from '../config/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../config/Auth';

export const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
`;
const Signup = () => {
	const { authToken, setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({
		email: '',
		password: '',
		name: '',
		handle: '',
	});

	const [isError, setIsError] = useState({ status: false, message: '' });

	let navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		console.log(forms);

		// register usernya
		try {
			const registerResponse = await tweetAPI.post('/user/register', {
				...forms,
			});

			// jika sukses
			if (registerResponse.data.success) {
				delete forms.name;
				delete forms.handle;
				// post data buat login
				try {
					const loginResponse = await tweetAPI.post('/user/login', {
						...forms,
					});
					//jika sukses
					if (loginResponse.data.success) {
						const token = loginResponse.data.data.token;
						setAndGetTokens(token);
						navigate('/', { replace: true });
						console.log(loginResponse, token, 'tokenton');
					}
				} catch (error) {
					setIsError((isError) => ({
						status: true,
						message: 'Error while try to logged in',
					}));
					console.log(error, 'in login');
				}
			}
		} catch (error) {
			setIsError((isError) => ({
				status: true,
				message: 'Error while try to sign up',
			}));
			console.log(error);
		}
	};
	return (
		<Container>
			<Wrapper>
				<Title>Sepertinya kamu belum memiliki akun, yuk daftar dulu!</Title>
				<MainForm onSubmit={handleSignup}>
					<Input
						type="email"
						label="Email"
						onChange={(e) =>
							setForms((forms) => ({ ...forms, email: e.target.value }))
						}
					/>
					<Input
						type="text"
						label="Name"
						onChange={(e) =>
							setForms((forms) => ({
								...forms,
								name: e.target.value,
							}))
						}
					/>
					<Input
						type="text"
						label="Username"
						onChange={(e) =>
							setForms((forms) => ({
								...forms,
								handle: e.target.value,
							}))
						}
					/>
					<Input
						type="password"
						label="Password"
						onChange={(e) =>
							setForms((forms) => ({
								...forms,
								password: e.target.value,
							}))
						}
					/>

					{isError.status && (
						<ErrorMessage>{isError.message}</ErrorMessage>
					)}
					<MainButton type="submit">Signup</MainButton>
				</MainForm>
				<SecondaryButton to="/login">Login</SecondaryButton>
			</Wrapper>
		</Container>
	);
};

export default Signup;
