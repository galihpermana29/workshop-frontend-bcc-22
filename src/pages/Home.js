import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { InputTweet, TweetArea, TweetButton } from '../components/CreateArea';
import UserTweetCard from '../components/UserTweetCard';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
import { ErrorMessage } from './Signup';
import { useAuth } from '../config/Auth';

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

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const Home = () => {
	const [form, setForm] = useState('');
	const [isError, setIsError] = useState({ status: false, message: '' });
	const { authToken } = useAuth();

	const { data, error } = useSWR(
		'http://ec2-18-138-35-61.ap-southeast-1.compute.amazonaws.com:8080/tweet',
		fetcher,
		{ refreshInterval: 200 }
	);
	const handleTweet = async () => {
		try {
			const postResponse = await tweetAPI.post(
				'/tweet',
				{
					content: form,
				},
				{ headers: { Authorization: `Bearer ${authToken}` } }
			);
			//jika sukses
			if (postResponse.data.success) {
				setForm('');
			}
		} catch (error) {
			setIsError((isError) => ({
				status: true,
				message: 'error',
			}));
			console.log(error, 'while posting a tweet');
		}
	};

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

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
				<TweetsWrapper>
					{data.map((tweet) => (
						<UserTweetCard
							username={tweet.user_id}
							tweet={tweet.content}
							id={tweet.id}
							key={tweet.id}
						/>
					))}
				</TweetsWrapper>
			</Content>
		</div>
	);
};

export default Home;
