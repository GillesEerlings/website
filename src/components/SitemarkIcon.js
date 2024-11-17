import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const AppBarHomeIcon = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Render the Home Icon */}
      <HomeIcon style={{ fontSize: 24, color: '#4876EE' }} />
    </div>
  );
};

export default AppBarHomeIcon;
