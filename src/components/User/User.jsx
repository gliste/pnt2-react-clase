import './User.css';
import { useState } from 'react';
const User = (props) => {
    const [contador, setContador] = useState(0);

    const HandlerClick_User = () => {
        setContador(contador + 1);


    }
    return (
        <li className='user-item' onClick={HandlerClick_User}>
            <div className='card user-item__content'>
                <a href="#">
                    <div className='user-item__image avatar'>
                        <img src={"./img/" + props.Picture} />
                    </div>
                    <div className='user-item__info'>
                        <h2>{props.UserName}</h2>
                        <h3>{props.Title}</h3>
                        <h3>{contador}</h3>
                    </div>
                </a>
            </div>


        </li>
    );
};

export default User; 