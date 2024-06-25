import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TextField, Button, Container, Box } from "@mui/material";

const Login = () => {
	const { login } = useContext(AuthContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<Container>
			<Box
				component="form"
				onSubmit={handleSubmit}
			>
				<TextField
					label="Username"
					value={username}
					onChange={e => setUsername(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Password"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
				>
					Login
				</Button>
			</Box>
		</Container>
	);
};

export default Login;
