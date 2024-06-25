import React, { useState, useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const AddTask = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { addTask } = useContext(TasksContext);

	const handleSubmit = e => {
		e.preventDefault();
		addTask({ title, description });
		setTitle("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder="Task Title"
				required
			/>
			<textarea
				value={description}
				onChange={e => setDescription(e.target.value)}
				placeholder="Task Description"
				required
			></textarea>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default AddTask;
