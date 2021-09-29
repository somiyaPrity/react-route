import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className='friends-div'>
      {users.map((user) => (
        <Friend key={user.id} user={user}></Friend>
      ))}
    </div>
  );
};

export default Friends;
