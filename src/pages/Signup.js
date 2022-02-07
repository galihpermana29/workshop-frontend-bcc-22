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
import styled from 'styled-components';


export const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
`;
const Signup = () => {
  
	const [forms, setForms] = useState({
		email: '',
		password: '',
		name: '',
		handle: '',
	});

	const [isError, setIsError] = useState({ status: false, message: '' });

	const handleSignup = async (e) => {
		e.preventDefault();
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
