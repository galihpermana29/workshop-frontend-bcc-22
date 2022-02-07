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

	const handleSignup = async (e) => {};
	return (
		<Container>
			<Wrapper></Wrapper>
		</Container>
	);
};

export default Signup;
