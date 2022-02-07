import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useAuth } from '../config/Auth';

const NavWrapper = styled.nav`
	position: fixed;
	min-width: 100vw;
	background-color: #fff;
	width: 100%;
	box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
	padding: 1.5rem 0;
	z-index: 10;
	top: 0;
	min-height: 5rem;
`;

const NavContainer = styled.div`
	width: 60%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavItem = styled(Link)`
	font-size: 1.1rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.2s;
	color: #000;
	&:not(:last-child) {
		margin-right: 6rem;
	}
	&:hover {
		color: #1f7a8c;
	}
`;

const Navbar = () => {
	const handleLogout = () => {
	};

	return (
		<NavWrapper>
			<NavContainer>
				<TwitterIcon style={{ fontSize: '4rem' }} />
				<div>
					<NavItem to="/">Home</NavItem>
					<NavItem to="/profile">Profile</NavItem>
					<NavItem to="/login" onClick={handleLogout}>
						Logout
					</NavItem>
				</div>
			</NavContainer>
		</NavWrapper>
	);
};

export default Navbar;
