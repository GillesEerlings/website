import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Divider from '@mui/material/Divider';

const Presentations = () => {
  const [presentationsList, setPresentationsList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/presentations.json`)
      .then((response) => response.json())
      .then((data) => setPresentationsList(data))
      .catch((error) => console.error('Error fetching presentations data:', error));
  }, []);

  const getConferenceLogo = (conference) => {
    switch (conference) {
      case 'FAIR':
        return `${process.env.PUBLIC_URL}/images/fair-icon.jpg`; // Path to the FAIR logo
      default:
        return null; // Fallback for other conferences
    }
  };

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Presentations
        </Typography>
        <Box>
          {presentationsList.map((presentation, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Grid container spacing={3} alignItems="center">
                {/* Year Column */}
                <Grid item xs={2}>
                  <Typography variant="body2" color="textSecondary" fontWeight="bold">
                    {presentation.year}
                  </Typography>
                </Grid>

                {/* Details Column */}
                <Grid item xs={8}>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    {presentation.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {presentation.location}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {presentation.eventPage && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={presentation.eventPage}
                        target="_blank"
                      >
                        Event Page
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      size="small"
                      href={`${process.env.PUBLIC_URL}` + presentation.pdf}
                      target="_blank"
                    >
                      View PDF
                    </Button>
                  </Box>
                </Grid>

                {/* Logo Column */}
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <img
                      src={getConferenceLogo(presentation.conference)}
                      alt={`${presentation.conference} Logo`}
                      style={{ width: '100px', height: '48px', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
};

export default Presentations;
