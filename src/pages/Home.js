import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { InputTweet, TweetArea, TweetButton } from '../components/CreateArea';
import { ErrorMessage } from './Signup';

const TweetsWrapper = styled.div`
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	width: 50%;
	margin: 0 auto;
`;

const Home = () => {
	const [form, setForm] = useState('');
	const [isError, setIsError] = useState({ status: false, message: '' });

	const handleTweet = async () => {};

	return (
		<div>
			<Navbar />
			<Content>
				<TweetArea>
					<InputTweet
						label="Tweet Something!"
						multiline
						rows={4}
						onChange={(e) => setForm(e.target.value)}
						value={form}
					/>
					<TweetButton
						style={{
							backgroundColor: '#1f7a8c',
							marginTop: '1rem',
							color: '#fff',
						}}
						variant="contained"
						onClick={handleTweet}
					>
						Tweet
					</TweetButton>
					{isError.status && (
						<ErrorMessage>{isError.message}</ErrorMessage>
					)}
				</TweetArea>
				<TweetsWrapper></TweetsWrapper>
			</Content>
		</div>
	);
};

export default Home;
