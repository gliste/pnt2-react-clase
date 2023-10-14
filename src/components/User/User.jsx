import './User.css';
const User = (props) => {
    return (
        <li className='user-item'>
            <div className='card user-item__content'>
                <a href="#">
                    <div className='user-item__image avatar'>
                        <img src={props.Picture} />
                    </div>
                    <div className='user-item__info'>
                        <h2>{props.UserName}</h2>
                        <h3>{props.Title}</h3>
                    </div>
                </a>
            </div>


        </li>
    );
};

export default User; 