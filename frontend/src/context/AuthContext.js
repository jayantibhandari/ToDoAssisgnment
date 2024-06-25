import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("tokens")
			? JSON.parse(localStorage.getItem("tokens"))
			: null
	);
	const [user, setUser] = useState(() =>
		localStorage.getItem("tokens")
			? JSON.parse(atob(localStorage.getItem("tokens").split(".")[1]))
			: null
	);

	const login = async (username, password) => {
		const response = await axios.post("/api/token/", { username, password });
		setAuthTokens(response.data);
		setUser(JSON.parse(atob(response.data.access.split(".")[1])));
		localStorage.setItem("tokens", JSON.stringify(response.data));
	};

	const logout = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem("tokens");
	};

	useEffect(() => {
		if (authTokens) {
			const decoded = JSON.parse(atob(authTokens.access.split(".")[1]));
			setUser(decoded);
		}
	}, [authTokens]);

	const contextData = {
		user,
		authTokens,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
