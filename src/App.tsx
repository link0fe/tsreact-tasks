import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";

import { IUser, ITodo } from "./types/types";
import axios from "axios";

import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { Link } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
// import TodoItemPage from "./components/TodoItemPage";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Link to="/users">Users</Link>
				<Link to="/todos">To do</Link>
			</div>
			<Routes>
				<Route path="/users" element={<UserPage />}></Route>
				<Route path="/users/:id" element={<UserItemPage />}></Route>
				<Route path="/todos" element={<TodosPage />}></Route>
				{/* <Route path="/todos/:id" element={<TodoItemPage />}></Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
