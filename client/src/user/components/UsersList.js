import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';

import './UsersList.css';

const UsersList = ({ items }) => {
  if (!items.length) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <ul className='users-list'>
        {items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
