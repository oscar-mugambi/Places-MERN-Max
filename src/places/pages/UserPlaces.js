import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

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
      lng: 36.5147118,
    },
    creatorId: 'u1',
  },
  {
    id: 'p1',
    title: 'Nairobi',
    description: 'famous city',
    imageUrl:
      'https://images.pexels.com/photos/7519948/pexels-photo-7519948.jpeg?cs=srgb&dl=pexels-jamiesx-co-7519948.jpg&fm=jpg',
    address: '20 W 34th St, Nairobi, KE 10001',
    location: {
      lat: -1.2538892,
      lng: 36.5147118,
    },
    creatorId: 'u2',
  },
];

const UserPlaces = () => {
  const { userId } = useParams();

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creatorId === userId);

  return (
    <div>
      <PlaceList items={loadedPlaces} />
    </div>
  );
};

export default UserPlaces;
