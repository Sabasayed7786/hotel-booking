
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/config';
import HotelCard from '../HotelCard/HotelCard';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  return (
    <div>
      <h2>Hotel List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hotels.map(hotel => (
          <div key={hotel.id} style={{ flex: '1 0 30%', margin: '10px' }}>
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;

