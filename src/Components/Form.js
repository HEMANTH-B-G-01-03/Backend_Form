import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = ({ fetchUsers }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        email: '',
        profilePicture: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
    
        // Append text fields correctly as strings
        formDataObj.append("firstName", formData.firstName);
        formDataObj.append("lastName", formData.lastName);
        formDataObj.append("phone", formData.phone);
        formDataObj.append("address", formData.address);
        formDataObj.append("email", formData.email);
    
        // Append file only if it exists
        if (formData.profilePicture) {
            formDataObj.append("profilePicture", formData.profilePicture);
        }
    
        try {
            await axios.post("http://localhost:5000/api/users/add", formDataObj, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            fetchUsers(); // Refresh user list
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };
    

    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="file" name="profilePicture" onChange={handleFileChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
