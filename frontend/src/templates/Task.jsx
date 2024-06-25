import React from "react";
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Checkbox,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Task = ({ task, onDelete, onUpdate }) => {
	return (
		<Card>
			<CardContent>
				<Typography
					variant="h5"
					component="div"
				>
					{task.title}
				</Typography>
				<Typography color="text.secondary">{task.description}</Typography>
				<IconButton onClick={() => onUpdate(task)}>
					<Edit />
				</IconButton>
				<IconButton onClick={() => onDelete(task.id)}>
					<Delete />
				</IconButton>
				<Checkbox
					checked={task.completed}
					onChange={() => onUpdate({ ...task, completed: !task.completed })}
				/>
			</CardContent>
		</Card>
	);
};

export default Task;
