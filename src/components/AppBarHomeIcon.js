import React from 'react';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const AppBarHomeIcon = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: 'black', // Default color
        padding: '8px', // Adjust padding if needed
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)', // Match hover effect
        },
        transition: 'background-color 0.3s ease', // Smooth hover transition
      }}
    >
      <HomeIcon style={{ fontSize: 24 }} />
    </IconButton>
  );
};

export default AppBarHomeIcon;
