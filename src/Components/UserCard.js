import React from 'react';
import './user.css'
const UserCard = ({ user }) => (
    <div className="card">
        <img src={`http://localhost:5000/api/users/uploads/${user.profilePicture}`} alt="Profile" />
        <h3>{user.firstName} {user.lastName}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
    </div>
);

export default UserCard;
