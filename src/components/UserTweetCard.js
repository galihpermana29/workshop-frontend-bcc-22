import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { tweetAPI } from '../config/api';

const Wrapper = styled.div`
	background-color: #fff;
	min-height: 4rem;
	border-radius: 1rem;
	width: 100%;
	padding: 2rem;
	box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
	border: 2px solid transparent;
	cursor: pointer;
	&:hover {
		opacity: 0.98;
		border: 2px solid #022b3a;
	}
`;
const ITEM_HEIGHT = 48;

const UserTweetCard = ({ username, tweet, id }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleDelete = async () => {
		setAnchorEl(null);
	};
	return (
		<Wrapper>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h1 style={{ fontSize: '1.6rem' }}>{username}</h1>
				<div>
					<IconButton
						aria-label="more"
						id="long-button"
						aria-controls={open ? 'long-menu' : undefined}
						aria-expanded={open ? 'true' : undefined}
						aria-haspopup="true"
						onClick={handleClick}
					>
						<MoreVertIcon />
					</IconButton>
					<Menu
						id="long-menu"
						MenuListProps={{
							'aria-labelledby': 'long-button',
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={() => setAnchorEl(null)}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '20ch',
							},
						}}
					>
						<MenuItem onClick={handleDelete}>Delete</MenuItem>
					</Menu>
				</div>
			</div>
			<p style={{ fontSize: '1.4rem', marginTop: '1rem' }}>{tweet}</p>
		</Wrapper>
	);
};

export default UserTweetCard;
