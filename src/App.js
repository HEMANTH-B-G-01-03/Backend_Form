import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Components/Form';
import UserCard from './Components/UserCard';

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/api/users/all');
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Form fetchUsers={fetchUsers} />
            {users.map((user) => <UserCard key={user._id} user={user} />)}
        </>
    );
};

export default App;
