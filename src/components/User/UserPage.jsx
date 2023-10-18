import { useState, useEffect } from "react";
import UserList from "./UserList";


const UserPage = (props) => {
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
        <div>
            <UserList Users={users} />
        </div>
    )
}

export default UserPage;