import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
	user: IUser;
	onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<div>
			<div
				onClick={() => onClick(user)}
				style={{ padding: 15, border: "1px solid gray" }}
			>
				{user.id}. {user.name} lives in {user.address.city} and street is "
				{user.address.street}"
			</div>
		</div>
	);
};

export default UserItem;
