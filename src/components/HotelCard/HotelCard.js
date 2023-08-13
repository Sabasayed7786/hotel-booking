// src/components/HotelCard.js
import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

const HotelCard = ({ hotel }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [numberOfUsers, setNumberOfUsers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(hotel.price);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [showLoginError, setShowLoginError] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setBookingComplete(false);
    setGuestName('');
    setNumberOfUsers(1);
    setTotalPrice(hotel.price);
    setCheckInDate('');
    setCheckOutDate('');
  };

  const handleGuestNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleNumberOfUsersChange = (event) => {
    const users = parseInt(event.target.value, 10);
    setNumberOfUsers(users);
    setTotalPrice(users * hotel.price);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleBookNow = () => {
    // Perform booking logic here, you can simulate it with a timeout
    // For example, you can show a "Booking in progress" message for a few seconds
    setBookingComplete(true);
    setTimeout(() => {
      closeBookingModal();
    }, 3000);
  };

  return (
    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent style={{ flexGrow: 1 }}>
        <div style={{ height: '200px', width: '400px', overflow: 'hidden' }}>
          <img src={hotel.hotel_image} alt={hotel.hotel_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <Typography variant="h6">{hotel.hotel_name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Location: {showDetails ? hotel.location : 'Click "Details" to view'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {showDetails ? `$${hotel.price} per night` : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={toggleDetails} size="small" style={{ color: 'purple' }}>
          {showDetails ? 'Hide Details' : 'Details'}
        </Button>
        <Button onClick={openBookingModal} size="small" color="primary" style={{ backgroundColor: 'purple', color: 'white' }}  disabled={!isAuthenticated}>
        {isAuthenticated ? 'Book Now' : 'Login to Book Hotel'}
          
        </Button>
      </CardActions>
      <Dialog open={showBookingModal} onClose={closeBookingModal}>
        <DialogTitle>Book Now</DialogTitle>
        <DialogContent>
          {bookingComplete ? (
            <Typography>Your booking is complete. Thank you, {guestName}!</Typography>
          ) : (
            <>
              <TextField
                label="Your Name"
                value={guestName}
                onChange={handleGuestNameChange}
                fullWidth
                margin="dense"
              />
              <TextField
                label="Number of Users"
                type="number"
                value={numberOfUsers}
                onChange={handleNumberOfUsersChange}
                fullWidth
                margin="dense"
              />
              <TextField
                label="Check-in Date"
                type="date"
                value={checkInDate}
                onChange={handleCheckInDateChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
              />
              <TextField
                label="Check-out Date"
                type="date"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
              />
              <TextField
                label="Total Price"
                value={`$${totalPrice}`}
                disabled
                fullWidth
                margin="dense"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          {!bookingComplete && (
            <Button onClick={handleBookNow} color="primary" style={{ backgroundColor: 'purple', color: 'white' }}>
              Book Now
            </Button>
          )}
          <Button onClick={closeBookingModal} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
    </Card>
  );
};

export default HotelCard;

