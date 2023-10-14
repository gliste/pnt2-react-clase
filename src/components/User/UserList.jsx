import "./User.css";
import users from "./MocUsers.js";
import User from "./User";

export default function UserList(props) {
    return (
        <ul className="users-list">
            {users.map(user => {
                return (
                    <User
                        UserName={user["Display name"]}
                        Title={user.Title}
                        Picture={user["Display name"] + ".jpg"}
                    />
                );
            })}
        </ul>
    );
}