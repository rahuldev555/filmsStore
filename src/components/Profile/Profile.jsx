import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  const favoriteMovies = [];
  return (
    <Box>
      <Box justifyContent='space-between' display='flex'>
        <Typography variant='h4 gutterBottom'>My Profile</Typography>
        <Button color='inherit' onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant='h5'>
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>FAVORITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
