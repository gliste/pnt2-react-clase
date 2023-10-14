import "./User.css";
import Users from "./MocUsers.js";
import User from "./User";

export default function UserList(props) {
    return (
        <ul className="users-list">
            <User Username="Pablo" Picture="./img/Pablo Fernandez.jpg" />
        </ul>
    );
}