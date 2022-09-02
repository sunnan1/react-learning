import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const users = [
        {
            id : 1,
            image : "https://i.kym-cdn.com/photos/images/facebook/000/006/979/googel_21.jpg",
            name : "Test Users",
            places : 5
        }
    ];

    return (
        <UsersList  />
    );
};

export default Users;