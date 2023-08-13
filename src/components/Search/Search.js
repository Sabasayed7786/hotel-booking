import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import backgroundImage from "../../Assets/hero-image.jpg";

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, guests });
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px", // Adjust as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      ></div>
      <h2 style={{ textAlign: "center" }}>Search for Hotels</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Check-In Date"
            type="date"
            variant="outlined"
            fullWidth
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Check-Out Date"
            type="date"
            variant="outlined"
            fullWidth
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Guests"
            type="number"
            variant="outlined"
            fullWidth
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            style={{
              height: "100%",
              backgroundColor: "purple",
              color: "white",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchForm;
