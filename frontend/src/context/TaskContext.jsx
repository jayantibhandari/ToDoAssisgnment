import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
	tasks: [],
	loading: true,
	error: null,
};

const tasksReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_TASKS_SUCCESS":
			return { ...state, tasks: action.payload, loading: false };
		case "FETCH_TASKS_FAILURE":
			return { ...state, error: action.payload, loading: false };
		case "ADD_TASK_SUCCESS":
			return { ...state, tasks: [...state.tasks, action.payload] };
		default:
			return state;
	}
};

export const TasksContext = createContext(initialState);

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	const fetchTasks = async () => {
		try {
			const response = await axios.get("/api/tasks");
			dispatch({ type: "FETCH_TASKS_SUCCESS", payload: response.data });
		} catch (error) {
			dispatch({ type: "FETCH_TASKS_FAILURE", payload: error.message });
		}
	};

	const addTask = async task => {
		try {
			const response = await axios.post("/api/tasks", task);
			dispatch({ type: "ADD_TASK_SUCCESS", payload: response.data });
		} catch (error) {
			// Handle error (optional)
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<TasksContext.Provider value={{ ...state, fetchTasks, addTask }}>
			{children}
		</TasksContext.Provider>
	);
};
