import React, { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IUser } from "../types/types";

type UserItemPageParams = {
	id: string;
};

const UserItemPage = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const navigate = useNavigate();
	console.log(params.id);

	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				"https://jsonplaceholder.typicode.com/users/" + params.id
			);
			setUser(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<button onClick={() => navigate("/users")}>Back</button>
			<h1>User {user?.name} Page</h1>
			<div>{user?.email}</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipcode}
			</div>
		</div>
	);
};

export default UserItemPage;
