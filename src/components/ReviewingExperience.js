import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Divider from '@mui/material/Divider';

const ReviewingExperience = () => {
  const [reviewingList, setReviewingList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/reviewing.json`)
      .then((response) => response.json())
      .then((data) => setReviewingList(data))
      .catch((error) => console.error('Error fetching reviewing data:', error));
  }, []);

  const getConferenceLogo = (conference) => {
    switch (conference) {
      case 'EICS':
        return `${process.env.PUBLIC_URL}/images/eics-icon.jpg`; // Replace with the actual path to the conference icon
      default:
        return `${process.env.PUBLIC_URL}/images/default-icon.jpg`; // Fallback icon
    }
  };

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Reviewing Experience
        </Typography>
        {reviewingList.map((reviewingYear, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            {reviewingYear.reviews.map((review, i) => (
              <Grid
                container
                spacing={2}
                key={i}
                alignItems="center"
                sx={{ mb: i === reviewingYear.reviews.length - 1 ? 0 : 2 }}
              >
                {/* Year Column */}
                <Grid item xs={12} md={2}>
                  {i === 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                      <Typography variant="body2" color="textSecondary" fontWeight="bold">
                        {reviewingYear.year}
                      </Typography>
                    </Box>
                  )}
                </Grid>

                {/* Review Details */}
                <Grid item xs={12} md={8}>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    {review.title} ({review.count} Papers Reviewed)
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {review.conference_title}
                  </Typography>
                </Grid>

                {/* Conference Icon */}
                <Grid item xs={12} md={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <img
                      src={getConferenceLogo(review.conference)}
                      alt={`${review.conference} Logo`}
                      style={{ width: '100px', height: '48px', objectFit: 'contain' }}
                    />
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

export default ReviewingExperience;
