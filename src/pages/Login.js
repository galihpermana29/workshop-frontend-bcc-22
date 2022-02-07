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
import { ErrorMessage } from './Signup';


const Login = () => {
	const [forms, setForms] = useState({ email: '', password: '' });
	const [isError, setIsError] = useState({ status: false, message: '' });

	const handleLogin = async (e) => {
		e.preventDefault();
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
