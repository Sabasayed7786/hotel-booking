import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ backgroundColor: 'purple', color: 'white' }}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyHotel
          </Typography>
          
          {isAuthenticated ? (
            <React.Fragment>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                Welcome, {user.name}
              </Typography>
              <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
            </React.Fragment>
          ) : (
            <Button onClick={() => loginWithRedirect()} color="inherit">Login/Register</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;


