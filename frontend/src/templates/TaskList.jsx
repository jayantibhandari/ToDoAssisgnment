import React, { useEffect, useContext } from "react";
import { TasksContext } from "../context/TaskContext";

const TaskList = () => {
	const { tasks, fetchTasks } = useContext(TasksContext);

	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	if (!tasks) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Task List</h2>
			{tasks.length === 0 ? (
				<p>No tasks available</p>
			) : (
				tasks.map(task => (
					<div key={task.id}>
						<h3>{task.title}</h3>
						<p>{task.description}</p>
					</div>
				))
			)}
		</div>
	);
};

export default TaskList;
