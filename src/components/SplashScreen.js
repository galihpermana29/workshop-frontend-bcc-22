import React from 'react';
import BCC from '../theme/BCC.png';
import FE from '../theme/Logo FE.png';

const SplashScreen = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				margin: '0 auto',
			}}
		>
			<img
				style={{ width: '10rem', marginBottom: '3rem' }}
				src={FE}
				alt="FE logo"
			/>
			<h1 style={{ color: 'white', textAlign: 'center' }}>
				Selamat yaaa udah masuk tahap <br /> internship di departemen
				Frontend BCC!
			</h1>
			<img style={{ width: '20rem' }} src={BCC} alt="BCC logo" />
		</div>
	);
};

export default SplashScreen;
