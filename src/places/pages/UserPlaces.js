import React from 'react';
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Nairobi',
      description: 'famous city',
      imageUrl:
        'https://images.pexels.com/photos/7519948/pexels-photo-7519948.jpeg?cs=srgb&dl=pexels-jamiesx-co-7519948.jpg&fm=jpg',
      address: '20 W 34th St, Nairobi, KE 10001',
      location: {
        lat: -1.2538892,
        lon: 36.5147118,
      },
      creatorId: 'u1',
    },
  ];

  return (
    <div>
      <PlaceList items={DUMMY_PLACES} />
    </div>
  );
};

export default UserPlaces;
