import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  // Fetch user data using useEffect
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listOfUser.map(user => (
          <li key={user.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
