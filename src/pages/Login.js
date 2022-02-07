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
import { ErrorMessage } from './Signup';
import { useAuth } from '../config/Auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {

	const { authToken, setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({ email: '', password: '' });
	const [isError, setIsError] = useState({ status: false, message: '' });
	const navigate = useNavigate();

  
	const handleLogin = async (e) => {
		e.preventDefault();
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
	};
	return (
		<Container>
			<Wrapper>
				<Title>Eh! Login</Title>
				<MainForm onSubmit={handleLogin}>
					<Input
						type="email"
						name="email"
						label="Email"
						onChange={(e) =>
							setForms((forms) => ({ ...forms, email: e.target.value }))
						}
					/>
					<Input
						type="password"
						name="password"
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
					<MainButton type="submit">Login</MainButton>
				</MainForm>
				<SecondaryButton to="/signup">Signup</SecondaryButton>
			</Wrapper>
		</Container>
	);
};

export default Login;
