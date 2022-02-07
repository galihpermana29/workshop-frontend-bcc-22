import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { InputTweet, TweetArea, TweetButton } from '../components/CreateArea';

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
	const handleTweet = async () => {};

	return (
		<div>
			<Navbar />
			<Content>
				<TweetArea></TweetArea>
				<TweetsWrapper></TweetsWrapper>
			</Content>
		</div>
	);
};

export default Home;
