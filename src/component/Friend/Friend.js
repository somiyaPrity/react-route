import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
  const { id, name, email, website } = props.user;
  // const url = `/friend/${id}`;
  return (
    <div>
      <div className='friend'>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
        <Link to={`/friend/${id}`}>Visit now</Link>
      </div>
    </div>
  );
};

export default Friend;
