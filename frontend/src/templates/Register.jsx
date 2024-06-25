import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Box } from "@mui/material";

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirm_password: "",
		first_name: "",
		last_name: "",
	});

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.post("/api/register/", formData);
			alert("Registration successful");
		} catch (error) {
			alert("Registration failed");
		}
	};

	return (
		<Container>
			<Box
				component="form"
				onSubmit={handleSubmit}
			>
				<TextField
					name="username"
					label="Username"
					value={formData.username}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					name="email"
					label="Email"
					value={formData.email}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					name="password"
					label="Password"
					type="password"
					value={formData.password}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					name="confirm_password"
					label="Confirm Password"
					type="password"
					value={formData.confirm_password}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					name="first_name"
					label="First Name"
					value={formData.first_name}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					name="last_name"
					label="Last Name"
					value={formData.last_name}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
				>
					Register
				</Button>
			</Box>
		</Container>
	);
};

export default Register;
