import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
  const USERS = [
    { id: 1, name: 'oscar', image: 'https://picsum.photos/seed/picsum/200/300', places: 3 },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
