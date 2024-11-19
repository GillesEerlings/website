import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Divider from '@mui/material/Divider';

const Teaching = () => {
  const [teachingList, setTeachingList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/teaching.json`)
      .then((response) => response.json())
      .then((data) => setTeachingList(data))
      .catch((error) => console.error('Error fetching teaching data:', error));
  }, []);

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Teaching
        </Typography>
        {teachingList.map((teachingYear, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            {teachingYear.courses.map((course, i) => (
              <Grid
                container
                spacing={2}
                key={i}
                alignItems="center"
                sx={{ mb: i === teachingYear.courses.length - 1 ? 0 : 2 }}
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
                        {teachingYear.year}
                      </Typography>
                    </Box>
                  )}
                </Grid>

                {/* Course Details */}
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      {course.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >
                      {course.keywords?.join(', ') || 'N/A'}
                    </Typography>
                  </Box>
                </Grid>

                {/* Course Number Column */}
                <Grid item xs={12} md={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {course.link ? (
                      <Typography
                        component="a"
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          color: '#4876EE',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        {course.number}
                      </Typography>
                    ) : (
                      <Typography variant="body2" fontWeight="bold">
                        {course.number}
                      </Typography>
                    )}
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

export default Teaching;
