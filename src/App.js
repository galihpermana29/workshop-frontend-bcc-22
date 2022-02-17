import GlobalStyles from './templates/globalStyles';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { AuthContext } from './config/Auth';
import { useState } from 'react';
import { PrivateRoute, RestrictedRoute } from './config/PrivateRoute';

function App() {
	const isAnyToken = JSON.parse(localStorage.getItem('token'));
	const userId = JSON.parse(localStorage.getItem('id'));
	const [authToken, setAuthToken] = useState(isAnyToken);
	const [user, setUser] = useState(userId);

	const setAndGetTokens = (token, id) => {
		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('id', JSON.stringify(id));
		setAuthToken(token);
		setUser(id);
	};

	return (
		<AuthContext.Provider value={{ authToken, setAndGetTokens, user }}>
			<GlobalStyles />
			<Routes>
				<Route
					path="/login"
					element={
						<RestrictedRoute>
							<Login />
						</RestrictedRoute>
					}
				/>
				<Route
					path="/signup"
					element={
						<RestrictedRoute>
							<Signup />
						</RestrictedRoute>
					}
				/>
				<Route
					exact
					path="/"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
			</Routes>
		</AuthContext.Provider>
	);
}

export default App;
