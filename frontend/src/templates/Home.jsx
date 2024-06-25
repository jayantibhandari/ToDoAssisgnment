import React, { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import TaskList from "./TaskList";
import { TextField, Button, Container, Box } from "@mui/material";

const Home = () => {
	const { authTokens } = useContext(AuthContext);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const queryClient = useQueryClient();

	const addTask = useMutation(
		newTask =>
			axios.post("/api/tasks/", newTask, {
				headers: { Authorization: `Bearer ${authTokens.access}` },
			}),
		{
			onSuccess: () => queryClient.invalidateQueries("tasks"),
		}
	);

	const handleSubmit = e => {
		e.preventDefault();
		addTask.mutate({ title, description });
		setTitle("");
		setDescription("");
	};

	return (
		<Container>
			<Box
				component="form"
				onSubmit={handleSubmit}
			>
				<TextField
					label="Title"
					value={title}
					onChange={e => setTitle(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Description"
					value={description}
					onChange={e => setDescription(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
				>
					Add Task
				</Button>
			</Box>
			<TaskList />
		</Container>
	);
};

export default Home;
