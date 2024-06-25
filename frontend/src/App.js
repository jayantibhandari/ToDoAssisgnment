import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TasksProvider } from "./context/TaskContext";
import TaskList from "./templates/TaskList";
import Login from "./templates/Login";
import Register from "./templates/Register";
import Home from "./templates/Home";

function App() {
	return (
		<TasksProvider>
			<Router>
				<Routes>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/tasks"
						element={<TaskList />}
					/>
				</Routes>
			</Router>
		</TasksProvider>
	);
}

export default App;
