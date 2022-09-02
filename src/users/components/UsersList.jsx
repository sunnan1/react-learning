import React  from "react";
import UserItem from "./UserItem";
import userStyles from './Users.css';
const UsersList = props => {

    if (props.items.length) {
        return (
            <div className="center">
                <ul>
                    {props.items.map(user => {
                        <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="center">
                <h1>
                    No users found !
                </h1>
            </div>            
        );
    }


};

export default UsersList;