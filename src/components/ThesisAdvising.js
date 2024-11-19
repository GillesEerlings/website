import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Divider from '@mui/material/Divider';

const ThesisAdvising = () => {
  const [thesisList, setThesisList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/theses.json`)
      .then((response) => response.json())
      .then((data) => setThesisList(data))
      .catch((error) => console.error('Error fetching thesis data:', error));
  }, []);

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Thesis Advising
        </Typography>
        {thesisList.map((yearGroup, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            {yearGroup.theses.map((thesis, i) => (
              <Grid
                container
                spacing={2}
                key={i}
                alignItems="center"
                sx={{ mb: i === yearGroup.theses.length - 1 ? 0 : 2 }} // Add margin between theses
              >
                {/* Year Column */}
                <Grid item xs={12} md={2}>
                  {i === 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight="bold"
                        sx={{ textAlign: 'center' }}
                      >
                        {yearGroup.yearRange}
                      </Typography>
                    </Box>
                  )}
                </Grid>

                {/* Thesis Details */}
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      {thesis.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >
                      {thesis.keywords?.join(', ') || 'N/A'}
                    </Typography>
                    {thesis.pdf && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={thesis.pdf}
                        target="_blank"
                        sx={{ mt: 1 }}
                      >
                        View PDF
                      </Button>
                    )}
                  </Box>
                </Grid>

                {/* Thesis Type Column */}
                <Grid item xs={12} md={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="body2" fontWeight="bold">
                      {thesis.type}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        ))}
        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
};

export default ThesisAdvising;
