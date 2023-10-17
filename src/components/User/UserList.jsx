import "./User.css";
//import users from "./MocUsers.js";
import User from "./User";
import { useEffect, useState } from "react";


export default function UserList(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        //Esto se llama la primera vez que se carga el componente.
        fetch("https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <ul className="users-list">
            {users.map(user => {
                return (
                    <User
                        UserName={user["Display name"]}
                        Title={user.Title}
                        Picture={user.Picture}
                    />
                );
            })}
        </ul>
    );
}