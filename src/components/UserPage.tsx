import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { IUser, ITodo } from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setUsers(response.data);
		} catch (e) {
			alert(e);
		}
	}
	return (
		<div>
			<List
				items={users}
				renderItem={(user: IUser) => (
					<UserItem
						onClick={(user) => {
							navigate("/users/" + user.id);
							console.log(user.id);
						}}
						user={user}
						key={user.id}
					/>
				)}
			/>
		</div>
	);
};

export default UserPage;
